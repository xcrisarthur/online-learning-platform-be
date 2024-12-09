module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
	  "users",
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
		tableName: 'users',
		timestamps: true,
		underscored: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	  }
	);
  
	Users.associate = (models) => {
	  Users.hasMany(models.course, { foreignKey: "created_by" });
	  Users.hasMany(models.courseEnrollment, { foreignKey: "student_id" });
	};
  
	return Users;
  };