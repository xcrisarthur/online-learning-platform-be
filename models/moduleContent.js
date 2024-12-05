module.exports = (sequelize, DataTypes) => {
	const ModuleContent = sequelize.define(
		"ModuleContent",
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
			tableName: "module_content", // Tentukan nama tabel di sini
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	// Menambahkan asosiasi
	ModuleContent.associate = (models) => {
		ModuleContent.belongsTo(models.Module, { foreignKey: "module_id" });
	};

	return ModuleContent;
};
