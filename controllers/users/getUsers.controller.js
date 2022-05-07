const service = require("../../services");

const getUsers = async (req, res, next) => {
    try {
        const { message, code } = await service.getUsers(req.body);
        return res.status(code).json(message);
    } catch (error) {
        next(error);
    }
};

module.exports = getUsers;
