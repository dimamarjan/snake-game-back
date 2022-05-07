const { DataTypes } = require("sequelize");
const db = require("../db/db");

const Users = db.define(
    "Users",
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_score: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
    },
    { timestamps: false }
);

(async () => {
    await Users.sync();
})();

module.exports = Users;
