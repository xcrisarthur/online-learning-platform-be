// controllers/TestResultController.js
const db = require("../models");
const { Op } = require("sequelize");

const TestResult = db.TestResult;

const ProgressTracking = db.ProgressTracking;
const Test = db.Test;
const Module = db.Module;

exports.getAllResults = async (req, res) => {
	try {
		const results = await TestResult.findAll();
		res.status(200).json(results);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getResultById = async (req, res) => {
	try {
		const result = await TestResult.findByPk(req.params.id);
		if (!result) return res.status(404).json({ message: "Result not found" });
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createResult = async (req, res) => {
	try {
		const newResult = await TestResult.create(req.body);
		res.status(201).json(newResult);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateResult = async (req, res) => {
	try {
		const result = await TestResult.findByPk(req.params.id);
		if (!result) return res.status(404).json({ message: "Result not found" });

		await result.update(req.body);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteResult = async (req, res) => {
	try {
		const result = await TestResult.findByPk(req.params.id);
		if (!result) return res.status(404).json({ message: "Result not found" });

		await result.destroy();
		res.status(200).json({ message: "Result deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.addTestResult = async (req, res) => {
	const { test_id, student_id, score, completed_at } = req.body;

	try {
		// 1. Ambil data `Test` berdasarkan `test_id`
		const test = await Test.findByPk(test_id);

		if (!test) {
			return res.status(404).json({ message: "Test not found" });
		}

		const { module_id, test_type } = test;

		// 2. Cek kondisi berdasarkan `test_type`
		if (test_type === "pretest") {
			// Cek apakah sudah ada data `student_id` dengan `module_id` yang sama di ProgressTracking
			const existingProgress = await ProgressTracking.findOne({
				where: { student_id, module_id },
			});

			if (existingProgress) {
				return res
					.status(400)
					.json({ message: "Progress already exists for this pretest." });
			}

			// Tambahkan data baru ke ProgressTracking
			await ProgressTracking.create({
				course_id: 1,
				student_id,
				module_id,
				status: "completed",
				completed_at: new Date(),
			});
		} else if (["minitest", "posttest"].includes(test_type)) {
			// Cek jumlah data student_id dan module_id di ProgressTracking
			const progressCount = await ProgressTracking.count({
				where: { student_id, module_id },
			});

			// jumlah data minitest dan posttest
			if (progressCount >= 5) {
				return res
					.status(400)
					.json({
						message: `Cannot add more than 5 progress entries for ${test_type}.`,
					});
			}

			// Tambahkan data baru ke ProgressTracking
			await ProgressTracking.create({
				course_id: 1,
				student_id,
				module_id,
				status: "completed",
				completed_at: new Date(),
			});
		}

		// 3. Tambahkan data dengan `module_id + 1` ke ProgressTracking jika valid
		const nextModule = await Module.findOne({
			where: {
				module_id: module_id + 1,
			},
		});

		if (!nextModule) {
			console.log(`Module with id ${module_id + 1} does not exist.`);
		} else if (!["materials", "posttest"].includes(nextModule.module_type)) {
			console.log(
				`Module type ${nextModule.module_type} is not valid for module_id ${
					module_id + 1
				}.`
			);
		} else {
			await ProgressTracking.create({
				course_id: 1,
				student_id,
				module_id: module_id + 1,
				status: "in_progress",
				completed_at: null,
			});
		}

		// 4. Tambahkan data baru ke TestResult
		const newTestResult = await TestResult.create({
			test_id,
			student_id,
			score,
			completed_at,
		});

		// 5. Update data di ProgressTracking jika test_type adalah 'minitest' dan status in_progress
		if (test_type === "minitest") {
			const previousModuleId = module_id - 1;

			const progressToUpdate = await ProgressTracking.findOne({
				where: {
					student_id,
					module_id: previousModuleId,
					status: "in_progress",
				},
			});

			if (progressToUpdate) {
				await progressToUpdate.update({ status: "completed" });
			}
		}

		// 6. Cek dan bersihkan duplikasi data
		const progressEntries = await ProgressTracking.findAll({
			where: {
				student_id,
				module_id: {
					[Op.in]: [module_id, module_id + 1],
				},
			},
			order: [["completed_at", "DESC"]],
		});

		// Group entries by module_id
		const groupedEntries = {};
		progressEntries.forEach((entry) => {
			if (!groupedEntries[entry.module_id]) {
				groupedEntries[entry.module_id] = [];
			}
			groupedEntries[entry.module_id].push(entry);
		});

		// For each module_id, keep only the most recent valid entry
		for (const moduleEntries of Object.values(groupedEntries)) {
			if (moduleEntries.length > 1) {
				// Sort entries: completed_at not null first, then by date
				moduleEntries.sort((a, b) => {
					if (a.completed_at === null && b.completed_at !== null) return 1;
					if (a.completed_at !== null && b.completed_at === null) return -1;
					if (a.completed_at === null && b.completed_at === null) return 0;
					return new Date(b.completed_at) - new Date(a.completed_at);
				});

				// Keep the first entry (most recent with completed_at), delete others
				for (let i = 1; i < moduleEntries.length; i++) {
					await moduleEntries[i].destroy();
				}
			}
		}

		res.status(201).json(newTestResult);
	} catch (error) {
		console.error("Error adding test result:", error);
		res.status(500).json({ message: "Internal server error", error });
	}
};
