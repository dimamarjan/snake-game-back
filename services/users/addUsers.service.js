const Users = require("../../models/Users");
const { CREATED, BAD_REQ } = require("../../common/httpCodes");

const addUsers = async (userData) => {
    try {
        const user = await Users.create(userData);
        return {
            message: {
                status: "CREATED",
                code: CREATED,
                user,
            },
            code: CREATED,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = addUsers;
