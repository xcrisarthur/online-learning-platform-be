const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Memuat konfigurasi .env
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

// Validasi variabel lingkungan
const requiredEnvVars = ["DB_NAME", "DB_USER", "DB_PASSWORD", "DB_HOST"];
requiredEnvVars.forEach((key) => {
	if (process.env[key] === undefined) { // Hanya cek undefined, bukan nilai kosong
	  console.error(`❌ Missing required environment variable: ${key}`);
	  process.exit(1); // Keluar jika ada variabel lingkungan yang hilang
	}
  });
  

// Konfigurasi koneksi Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Nonaktifkan log query untuk produksi, aktifkan jika debugging
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// Tes koneksi ke database
sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to database successfully"))
  .catch((error) => {
    console.error("❌ Unable to connect to the database:", error.message);
    process.exit(1); // Keluar jika koneksi gagal
  });

// Inisialisasi objek db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import semua model dari folder `models`
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
    console.log(`✅ Model ${model.name} loaded successfully`);
  });

// Membuat asosiasi jika model memiliki metode `associate`
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    console.log(`⚙️  Associating model: ${modelName}`);
    db[modelName].associate(db);
  }
});

// Sinkronisasi model dengan database
db.sequelize
  .sync() // Menyesuaikan tabel dengan model
  .then(() => console.log("✅ Database & tables synced"))
  .catch((error) => console.error("❌ Error syncing database:", error.message));

module.exports = db;
