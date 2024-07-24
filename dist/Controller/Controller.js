"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const Users_1 = __importDefault(require("../Models/Users"));
const router = (0, express_1.Router)();
const Menu = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'Menu.html'));
};
const Register = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'Register.html'));
};
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new Users_1.default({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            items: req.body.items
        });
        const newUser = yield user.save();
        res.status(201).json(newUser);
        console.log("deu certo dog");
        res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'Menu.html'));
    }
    catch (error) {
        console.error(error);
        res.render('index', { error, body: req.body });
    }
});
exports.default = { Menu, Register, RegisterUser };
