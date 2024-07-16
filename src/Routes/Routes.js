"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuLink = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const MenuLink = (req, res) => {
    try {
        res.sendFile(path_1.default.join(__dirname, '../../public', 'Menu.html')); //devolve o arquivo html esperado
    }
    catch (error) {
        res.status(500).render('error', { error }); //motsra um erro caso nao consiga acessar o arquivo
    }
};
exports.MenuLink = MenuLink;
exports.default = router;
