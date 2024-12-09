module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
      course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: DataTypes.TEXT,
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
    }, {
        tableName: 'courses',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    // Menambahkan asosiasi
    Course.associate = (models) => {
      Course.belongsTo(models.users, { foreignKey: 'created_by' });
      Course.hasMany(models.courseEnrollment, { foreignKey: 'course_id' });
      Course.hasMany(models.module, { foreignKey: 'course_id' });
    };
  
    return Course;
  };
  