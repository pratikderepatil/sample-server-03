const mongoose = require("mongoose");

const connect = async () => {
	return mongoose.connect(
		process.env.DB_URL ||
			"mongodb+srv://top-survey:12345@cluster0.pm1r73y.mongodb.net/top-survey"
	);
};

module.exports = connect;
