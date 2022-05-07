const service = require("../../services");

const checkUsers = async (req, res, next) => {
    try {
        const { message, code } = await service.checkUsers(req.body);
        return res.status(code).json(message);
    } catch (error) {
        next(error);
    }
};

module.exports = checkUsers;
