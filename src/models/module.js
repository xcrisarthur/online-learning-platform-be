module.exports = (sequelize, DataTypes) => {
    const Module = sequelize.define('module', {
      module_id: {
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
      module_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      module_type: {
        type: DataTypes.ENUM('pretest', 'materials', 'minitest', 'posttest'),
        allowNull: false,
      },
      order_index: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    // Menambahkan asosiasi
    Module.associate = (models) => {
      Module.belongsTo(models.course, { foreignKey: 'course_id' });
      Module.hasMany(models.moduleContent, { foreignKey: 'module_id' });
      Module.hasMany(models.test, { foreignKey: 'module_id', onDelete: 'CASCADE'  });

    };
  
    return Module;
  };
  