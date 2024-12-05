module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
      notification_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      notification_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created_at',
    });
  
    // Menambahkan asosiasi
    Notification.associate = (models) => {
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return Notification;
  };
  