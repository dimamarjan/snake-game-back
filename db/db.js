const { Sequelize } = require("sequelize");
require("dotenv").config();

const { HERPKU_DB_URL } = process.env;

const db = new Sequelize(
    "postgres://cstyxpbqzbdtmn:c012f224c8abb718be05542509b783536689808a10d242c87f8ff4b8daa7b6eb@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/dchb1vrd2s4sjm",
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

module.exports = db;
