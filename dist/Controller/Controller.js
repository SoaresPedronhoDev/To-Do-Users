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
const path_1 = __importDefault(require("path"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Users_1 = __importDefault(require("../Models/Users"));
const Validate_1 = __importDefault(require("./Validate"));
const Menu = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'Menu.html'));
};
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { error } = Validate_1.default.loginValidate(req.body);
    if (error) {
        return res.status(400).json({ alert: error.message });
    }
    try {
        const user = yield Users_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ alert: 'Usuário não encontrado' });
        }
        const validPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ alert: 'Senha Incorreta' });
        }
        res.redirect(`/Menu/ToDo/${user.name}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ alert: 'Erro Interno do Servidor' });
    }
});
const Register = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'Register.html'));
};
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = Validate_1.default.registerValidate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    const selectedUser = yield Users_1.default.findOne({ email: req.body.email });
    if (selectedUser) {
        return res.status(400).json({ message: 'Este email já existe' });
    }
    const user = new Users_1.default({
        name: req.body.name,
        email: req.body.email,
        password: yield bcryptjs_1.default.hash(req.body.password, 10), // Hashear a senha
        items: req.body.items
    });
    try {
        const newUser = yield user.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor', error });
    }
});
const UserPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    try {
        const user = yield Users_1.default.findOne({ name });
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.render('userPage', { user });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.name;
        const { task, description } = req.body;
        const user = yield Users_1.default.findOne({ name: username });
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }
        user.items.push({ text: task, description: description, done: false });
        yield user.save();
        res.redirect(`/Menu/ToDo/${username}`);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar item');
    }
});
exports.default = { Menu, Register, RegisterUser, UserPage, loginUser, addItem };
