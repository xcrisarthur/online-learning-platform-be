// controllers/QuestionController.js
const db = require("../models");
const Question = db.Question;

exports.getQuestionsByTestId = async (req, res) => {
	try {
		// Ambil test_id dari parameter request
		const { test_id } = req.params;

		// Mencari semua pertanyaan yang memiliki test_id yang sesuai
		const questions = await Question.findAll({
			where: { test_id },
		});

		// Mengembalikan respon dengan data questions jika ditemukan
		if (questions.length > 0) {
			res.status(200).json(questions);
		} else {
			res.status(404).json({ message: "No questions found for this test ID" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getAllQuestions = async (req, res) => {
	try {
		const questions = await Question.findAll();
		res.status(200).json(questions);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getQuestionById = async (req, res) => {
	try {
		const question = await Question.findByPk(req.params.id);
		if (!question)
			return res.status(404).json({ message: "Question not found" });
		res.status(200).json(question);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createQuestion = async (req, res) => {
	try {
		const newQuestion = await Question.create(req.body);
		res.status(201).json(newQuestion);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateQuestion = async (req, res) => {
	try {
		const question = await Question.findByPk(req.params.id);
		if (!question)
			return res.status(404).json({ message: "Question not found" });

		await question.update(req.body);
		res.status(200).json(question);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteQuestion = async (req, res) => {
	try {
		const question = await Question.findByPk(req.params.id);
		if (!question)
			return res.status(404).json({ message: "Question not found" });

		await question.destroy();
		res.status(200).json({ message: "Question deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
