const { Sequelize } = require("sequelize");
require("dotenv").config();

const { HERPKU_DB_URL } = process.env;

const db = new Sequelize(HERPKU_DB_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

module.exports = db;
