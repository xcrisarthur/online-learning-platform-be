// models/courseEnrollment.js
module.exports = (sequelize, DataTypes) => {
	const CourseEnrollment = sequelize.define(
	  "courseEnrollment",
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
		  field: 'assignedBy',
		  references: {
			model: "users",
			key: "user_id",
		  },
		},
		enrolled_at: {
		  type: DataTypes.DATE,
		  defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	  },
	  {
		tableName: "course_enrollments",
		timestamps: true,
		underscored: true,
		createdAt: "created_at",
		updatedAt: "updated_at"
	  }
	);
  
	CourseEnrollment.associate = (models) => {
	  CourseEnrollment.belongsTo(models.users, { 
		foreignKey: 'student_id',
		as: 'student'
	  });
	  CourseEnrollment.belongsTo(models.users, { 
		foreignKey: 'assignedBy',
		as: 'assigner'
	  });
	  CourseEnrollment.belongsTo(models.course, { 
		foreignKey: 'course_id'
	  });
	};
  
	return CourseEnrollment;
  };