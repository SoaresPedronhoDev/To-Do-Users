"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const Routes_1 = __importDefault(require("./Routes/Routes"));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.get('/Menu', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'Menu.html'));
});
app.use('/', Routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
