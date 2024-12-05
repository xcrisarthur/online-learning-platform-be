module.exports = (sequelize, DataTypes) => {
	const CourseEnrollment = sequelize.define(
		"CourseEnrollment",
		{
			enrollment_id: {
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
			assignedBy: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "users",
					key: "user_id",
				},
			},
		},
		{
			tableName: "course_enrollments",
			timestamps: true,
			createdAt: "enrolled_at",
		}
	);

	// Menambahkan asosiasi
	CourseEnrollment.associate = (models) => {
		CourseEnrollment.belongsTo(models.User, { 
		  foreignKey: 'student_id',
		  as: 'student'
		});
		CourseEnrollment.belongsTo(models.User, { 
		  foreignKey: 'assignedBy',
		  as: 'assigner'
		});
		CourseEnrollment.belongsTo(models.Course, { 
		  foreignKey: 'course_id'
		});
	  };

	return CourseEnrollment;
};
