const Joi = require("joi");

const addUsers = async (req, _, next) => {
    try {
        const validator = Joi.object({
            user_name: Joi.string().required(),
            user_score: Joi.number().required(),
        });
        const { error } = validator.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = { addUsers };
