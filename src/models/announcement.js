module.exports = (sequelize, DataTypes) => {
    const Announcement = sequelize.define('announcement', {
      announcement_id: {
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      announcement_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
    });
  
    // Menambahkan asosiasi
    Announcement.associate = (models) => {
      Announcement.belongsTo(models.course, { foreignKey: 'course_id' });
      Announcement.belongsTo(models.users, { foreignKey: 'user_id' });
    };
  
    return Announcement;
  };
  