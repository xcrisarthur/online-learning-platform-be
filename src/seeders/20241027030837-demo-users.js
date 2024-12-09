const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const passwordHash1 = await bcrypt.hash("admin1", 10);
		const passwordHash2 = await bcrypt.hash("dosen1", 10);
		const passwordHash3 = await bcrypt.hash("student1", 10);
		const passwordHash4 = await bcrypt.hash("student2", 10);
		const passwordHash5 = await bcrypt.hash("student3", 10);
		const passwordHash6 = await bcrypt.hash("student4", 10);
		const passwordHash7 = await bcrypt.hash("student5", 10);
		const passwordHash8 = await bcrypt.hash("student6", 10);
		const passwordHash9 = await bcrypt.hash("student7", 10);
		const passwordHash10 = await bcrypt.hash("student8", 10);
		const passwordHash11 = await bcrypt.hash("student9", 10);
		const passwordHash12 = await bcrypt.hash("student10", 10);
		const passwordHash13 = await bcrypt.hash("student11", 10);
		const passwordHash14 = await bcrypt.hash("student12", 10);
		const passwordHash15 = await bcrypt.hash("student13", 10);
		const passwordHash16 = await bcrypt.hash("student14", 10);
		const passwordHash17 = await bcrypt.hash("student15", 10);
		const passwordHash18 = await bcrypt.hash("student16", 10);
		const passwordHash19 = await bcrypt.hash("student17", 10);
		const passwordHash20 = await bcrypt.hash("student18", 10);
		const passwordHash21 = await bcrypt.hash("student19", 10);
		const passwordHash22 = await bcrypt.hash("student20", 10);
		const passwordHash23 = await bcrypt.hash("student21", 10);
		const passwordHash24 = await bcrypt.hash("student22", 10);
		const passwordHash25 = await bcrypt.hash("student23", 10);
		const passwordHash26 = await bcrypt.hash("student24", 10);
		const passwordHash27 = await bcrypt.hash("student25", 10);
		const passwordHash28 = await bcrypt.hash("student26", 10);
		const passwordHash29 = await bcrypt.hash("student27", 10);
		const passwordHash30 = await bcrypt.hash("student28", 10);
		const passwordHash31 = await bcrypt.hash("student29", 10);
		const passwordHash32 = await bcrypt.hash("student30", 10);
		const passwordHash33 = await bcrypt.hash("student31", 10);
		const passwordHash34 = await bcrypt.hash("student32", 10);
		const passwordHash35 = await bcrypt.hash("student33", 10);
		const passwordHash36 = await bcrypt.hash("student34", 10);
		const passwordHash37 = await bcrypt.hash("student35", 10);
		const passwordHash38 = await bcrypt.hash("student36", 10);
		const passwordHash39 = await bcrypt.hash("student37", 10);
		const passwordHash40 = await bcrypt.hash("student38", 10);
		const passwordHash41 = await bcrypt.hash("student39", 10);
		const passwordHash42 = await bcrypt.hash("student40", 10);
		const passwordHash43 = await bcrypt.hash("student41", 10);
		const passwordHash44 = await bcrypt.hash("student42", 10);
		const passwordHash45 = await bcrypt.hash("student43", 10);
		const passwordHash46 = await bcrypt.hash("student44", 10);
		const passwordHash47 = await bcrypt.hash("student45", 10);
		const passwordHash48 = await bcrypt.hash("student46", 10);
		const passwordHash49 = await bcrypt.hash("student47", 10);
		const passwordHash50 = await bcrypt.hash("student48", 10);
		const passwordHash51 = await bcrypt.hash("student49", 10);
		const passwordHash52 = await bcrypt.hash("student50", 10);

		await queryInterface.bulkInsert(
			"users",
			[
				{
					role: "admin",
					first_name: "admin",
					last_name: "satu",
					email: "admin1@gmail.com",
					password: passwordHash1,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "lecturer",
					first_name: "dosen",
					last_name: "satu",
					email: "dosen1@gmail.com",
					password: passwordHash2,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "satu",
					email: "student1@gmail.com",
					password: passwordHash3,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "dua",
					email: "student2@gmail.com",
					password: passwordHash4,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tiga",
					email: "student3@gmail.com",
					password: passwordHash5,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empat",
					email: "student4@gmail.com",
					password: passwordHash6,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "lima",
					email: "student5@gmail.com",
					password: passwordHash7,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "enam",
					email: "student6@gmail.com",
					password: passwordHash8,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tujuh",
					email: "student7@gmail.com",
					password: passwordHash9,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "delapan",
					email: "student8@gmail.com",
					password: passwordHash10,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "sembilan",
					email: "student9@gmail.com",
					password: passwordHash11,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "sepuluh",
					email: "student10@gmail.com",
					password: passwordHash12,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "sebelas",
					email: "student11@gmail.com",
					password: passwordHash13,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duabelas",
					email: "student12@gmail.com",
					password: passwordHash14,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigabelas",
					email: "student13@gmail.com",
					password: passwordHash15,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatbelas",
					email: "student14@gmail.com",
					password: passwordHash16,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "limabelas",
					email: "student15@gmail.com",
					password: passwordHash17,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "enambelas",
					email: "student16@gmail.com",
					password: passwordHash18,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tujuhbelas",
					email: "student17@gmail.com",
					password: passwordHash19,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "delapanbelas",
					email: "student18@gmail.com",
					password: passwordHash20,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "sembilanbelas",
					email: "student19@gmail.com",
					password: passwordHash21,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluh",
					email: "student20@gmail.com",
					password: passwordHash22,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhsatu",
					email: "student21@gmail.com",
					password: passwordHash23,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhdua",
					email: "student22@gmail.com",
					password: passwordHash24,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhtiga",
					email: "student23@gmail.com",
					password: passwordHash25,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhempat",
					email: "student24@gmail.com",
					password: passwordHash26,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhlima",
					email: "student25@gmail.com",
					password: passwordHash27,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhenam",
					email: "student26@gmail.com",
					password: passwordHash28,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhtujuh",
					email: "student27@gmail.com",
					password: passwordHash29,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhdelapan",
					email: "student28@gmail.com",
					password: passwordHash30,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "duapuluhsembilan",
					email: "student29@gmail.com",
					password: passwordHash31,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluh",
					email: "student30@gmail.com",
					password: passwordHash32,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhsatu",
					email: "student31@gmail.com",
					password: passwordHash33,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhdua",
					email: "student32@gmail.com",
					password: passwordHash34,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhtiga",
					email: "student33@gmail.com",
					password: passwordHash35,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhempat",
					email: "student34@gmail.com",
					password: passwordHash36,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhlima",
					email: "student35@gmail.com",
					password: passwordHash37,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhenam",
					email: "student36@gmail.com",
					password: passwordHash38,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhtujuh",
					email: "student37@gmail.com",
					password: passwordHash39,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhdelapan",
					email: "student38@gmail.com",
					password: passwordHash40,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "tigapuluhsembilan",
					email: "student39@gmail.com",
					password: passwordHash41,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluh",
					email: "student40@gmail.com",
					password: passwordHash42,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhsatu",
					email: "student41@gmail.com",
					password: passwordHash43,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhdua",
					email: "student42@gmail.com",
					password: passwordHash44,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhtiga",
					email: "student43@gmail.com",
					password: passwordHash45,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhempat",
					email: "student44@gmail.com",
					password: passwordHash46,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhlima",
					email: "student45@gmail.com",
					password: passwordHash47,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhenam",
					email: "student46@gmail.com",
					password: passwordHash48,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhtujuh",
					email: "student47@gmail.com",
					password: passwordHash49,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhdelapan",
					email: "student48@gmail.com",
					password: passwordHash50,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "empatpuluhsembilan",
					email: "student49@gmail.com",
					password: passwordHash51,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					role: "student",
					first_name: "student",
					last_name: "limapuluh",
					email: "student50@gmail.com",
					password: passwordHash52,
					class_level: "general",
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
