"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
const Routes_2 = require("./Routes/Routes");
const app = (0, express_1.default)();
const PORT = 3000;
// Usar o roteador para todas as rotas
app.use('/', Routes_1.default);
app.get('/Menu', Routes_2.MenuLink); //usa a funcao MenuLink como rota para funcionar
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});
