module.exports = (sequelize, DataTypes) => {
	const ModuleContentJunior = sequelize.define(
		"ModuleContentJunior",
		{
			content_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			module_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "modules",
					key: "module_id",
				},
			},
			content_type: {
				type: DataTypes.ENUM("video", "text"),
				allowNull: false,
			},
			content_url: DataTypes.TEXT,
			content_text: DataTypes.TEXT("long"), // Ganti LONGTEXT dengan TEXT('long')
		},
		{
			tableName: "module_content_junior", // Tentukan nama tabel di sini
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	// Menambahkan asosiasi
	ModuleContentJunior.associate = (models) => {
		ModuleContentJunior.belongsTo(models.Module, { foreignKey: "module_id" });
	};

	return ModuleContentJunior;
};
