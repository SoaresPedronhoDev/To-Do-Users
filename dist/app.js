"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const Routes_1 = __importDefault(require("./Routes/Routes"));
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.use('/', Routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
