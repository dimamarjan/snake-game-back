const Users = require("../../models/Users");
const { OK, BAD_REQ } = require("../../common/httpCodes");

const checkUsers = async ({ user_name }) => {
    try {
        const checkUserName = await Users.findAll({
            where: { user_name },
        });
        if (checkUserName.length) {
            return {
                message: {
                    status: "BAD_REQ",
                    code: BAD_REQ,
                    message: "user already exist",
                },
                code: BAD_REQ,
            };
        }
        return {
            message: {
                status: "OK",
                code: OK,
            },
            code: OK,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = checkUsers;
