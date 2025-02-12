import Joi from 'joi';

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

export { loginValidation };