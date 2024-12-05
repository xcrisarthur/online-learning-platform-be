module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
      question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tests',
          key: 'test_id',
        },
      },
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  
    // Menambahkan asosiasi
    Question.associate = (models) => {
      Question.belongsTo(models.Test, { foreignKey: 'test_id' });
      Question.hasMany(models.Choice, { foreignKey: 'question_id' });
    };
  
    return Question;
  };
  