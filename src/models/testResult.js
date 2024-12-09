module.exports = (sequelize, DataTypes) => {
	const TestResult = sequelize.define(
		"testResult",
		{
			result_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			test_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "tests",
					key: "test_id",
				},
			},
			student_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "users",
					key: "user_id",
				},
			},
			score: {
				type: DataTypes.DECIMAL(5, 2),
				allowNull: true,
			},
			completed_at: {
				type: DataTypes.DATE,
			},
		},
		{
			tableName: "test_results",
			timestamps: true,
			createdAt: "completed_at",
			updatedAt: false,
		}
	);

	// Asosiasi
	TestResult.associate = (models) => {
		TestResult.belongsTo(models.test, { foreignKey: "test_id" });
		TestResult.belongsTo(models.users, { foreignKey: "student_id" });
	};

	// Hook afterCreate untuk otomatis menambah data ke progress_tracking
	TestResult.afterCreate(async (testResult, options) => {
		const { Test, ProgressTracking } = sequelize.models;

		try {
			// Ambil data test untuk mendapatkan `module_id`
			const test = await Test.findOne({
				where: { test_id: testResult.test_id },
				attributes: ["module_id"], // Ambil hanya kolom `module_id`
			});

			if (!test) {
				console.error(`❌ Test with id ${testResult.test_id} not found`);
				return;
			}

			// Tambahkan data ke progress_tracking
			await ProgressTracking.create({
				course_id: 1, // Kolom course_id selalu diisi dengan 1
				student_id: testResult.student_id, // Kolom student_id sama dengan data di test result
				module_id: test.module_id, // Kolom module_id diambil dari data `Test`
				status: "completed", // Status selalu diisi dengan "completed"
				completed_at: null, // Kolom completed_at selalu null
			});

			console.log("✅ Progress tracking successfully added.");
		} catch (error) {
			console.error("❌ Error adding progress tracking:", error.message);
		}
	});

	return TestResult;
};
