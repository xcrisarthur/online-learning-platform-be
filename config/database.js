const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.NODE_ENV === 'production') {
  const databaseUrl = process.env.DATABASE_URL;
  sequelize = new Sequelize(databaseUrl, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false
    }
  );
}

// Test koneksi dan sinkronisasi model
const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection successful');
    
    // Sync all models
    await sequelize.sync();
    console.log('✅ Models synchronized');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1);
  }
};

initDatabase();

module.exports = sequelize;