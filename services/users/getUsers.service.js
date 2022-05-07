const Users = require("../../models/Users");
const { OK } = require("../../common/httpCodes");

const getUsers = async () => {
    try {
        const users = await Users.findAll({
            order: [["user_score", "DESC"]],
            limit: 10,
        });
        return {
            message: {
                status: "OK",
                code: OK,
                users,
            },
            code: OK,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = getUsers;
