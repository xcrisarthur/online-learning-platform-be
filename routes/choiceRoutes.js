// routes/choiceRoutes.js
const express = require("express");
const router = express.Router();
const choiceController = require("../controllers/ChoiceController");
const { authenticateToken, authorizeRoles } = require("../middleware/auth");

router.get(
	"/questions/:question_id",
	authenticateToken,
	choiceController.getChoicesByQuestionId
);

router.get("/", authenticateToken, choiceController.getAllChoices);
router.get("/:id", authenticateToken, choiceController.getChoiceById);
router.post(
	"/",
	authenticateToken,
	authorizeRoles("admin", "lecturer"),
	choiceController.createChoice
);
router.put(
	"/:id",
	authenticateToken,
	authorizeRoles("admin", "lecturer"),
	choiceController.updateChoice
);
router.delete(
	"/:id",
	authenticateToken,
	authorizeRoles("admin", "lecturer"),
	choiceController.deleteChoice
);

module.exports = router;
