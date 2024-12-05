module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			user_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			role: {
				type: DataTypes.ENUM("admin", "lecturer", "student"),
				allowNull: false,
			},
			first_name: DataTypes.STRING(100),
			last_name: DataTypes.STRING(100),
			email: {
				type: DataTypes.STRING(150),
				unique: true,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			class_level: {
				type: DataTypes.ENUM("junior", "general"),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	// Menambahkan asosiasi
	User.associate = (models) => {
		User.hasMany(models.Course, { foreignKey: "created_by" });
		User.hasMany(models.CourseEnrollment, { foreignKey: "student_id" });
	};

	return User;
};
