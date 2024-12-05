module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('Test', {
      test_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      module_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'modules',
          key: 'module_id',
        },
      },
      test_type: {
        type: DataTypes.ENUM('pretest', 'minitest', 'posttest'),
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    // Menambahkan asosiasi
    Test.associate = (models) => {
      Test.belongsTo(models.Module, { foreignKey: 'module_id' });
      Test.hasMany(models.Question, { foreignKey: 'test_id' });
      Test.hasMany(models.TestResult, { foreignKey: 'test_id' });
    };
    
  
    return Test;
  };
  