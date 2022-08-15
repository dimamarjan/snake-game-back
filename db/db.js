const { Sequelize } = require("sequelize");
require("dotenv").config();

const HEROKU_DB_URL = process.env.HEROKU_DB_URL;

const db = new Sequelize(HEROKU_DB_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

module.exports = db;
