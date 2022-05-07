const service = require("../../services");

const addUsers = async (req, res, next) => {
    try {
        const { message, code } = await service.addUsers(req.body);
        return res.status(code).json(message);
    } catch (error) {
        next(error);
    }
};

module.exports = addUsers;
