module.exports = (sequelize, DataTypes) => {
	const ProgressTracking = sequelize.define(
		"ProgressTracking",
		{
			progress_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			course_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "courses",
					key: "course_id",
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
			module_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "modules",
					key: "module_id",
				},
			},
			status: {
				type: DataTypes.ENUM("not_started", "in_progress", "completed"),
				allowNull: false,
				defaultValue: "not_started",
			},
			completed_at: {
				type: DataTypes.DATE,
				allowNull: true,
			},
		},
		{
			tableName: "progress_tracking",
			timestamps: false,
		}
	);

	// Menambahkan asosiasi
	ProgressTracking.associate = (models) => {
		ProgressTracking.belongsTo(models.User, { foreignKey: "student_id" });
		ProgressTracking.belongsTo(models.Course, { foreignKey: "course_id" });
		ProgressTracking.belongsTo(models.Module, { foreignKey: "module_id" });
	};

	return ProgressTracking;
};
