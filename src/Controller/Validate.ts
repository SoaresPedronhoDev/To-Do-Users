import Joi from 'joi';

const registerValidate = (data: any) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().email().required().min(3).max(50), 
        password: Joi.string().required().min(6).max(100),
    });

    return schema.validate(data);
};

const loginValidate = (data: any) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().email().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100),
    });

    return schema.validate(data);
};

export default { registerValidate, loginValidate };
