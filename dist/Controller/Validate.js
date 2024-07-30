"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const registerValidate = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required().min(3).max(50),
        email: joi_1.default.string().email().required().min(3).max(50),
        password: joi_1.default.string().required().min(6).max(100),
    });
    return schema.validate(data);
};
const loginValidate = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().min(3).max(50),
        password: joi_1.default.string().required().min(6).max(100),
    });
    return schema.validate(data);
};
exports.default = { registerValidate, loginValidate };
