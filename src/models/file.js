module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('file', {
      file_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'course_id',
        },
      },
      file_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      file_url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'uploaded_at',
    });
  
    // Menambahkan asosiasi
    File.associate = (models) => {
      File.belongsTo(models.course, { foreignKey: 'course_id' });
    };
  
    return File;
  };
  