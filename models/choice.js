module.exports = (sequelize, DataTypes) => {
    const Choice = sequelize.define('Choice', {
      choice_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'question_id',
        },
      },
      choice_text: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    }, {
      timestamps: true,
      createdAt: 'created_at',  // Sesuaikan nama kolom sesuai database
      updatedAt: 'updated_at',  // Sesuaikan nama kolom sesuai database
    });
  
    Choice.associate = (models) => {
      Choice.belongsTo(models.Question, { foreignKey: 'question_id' });
    };
  
    return Choice;
  };
  