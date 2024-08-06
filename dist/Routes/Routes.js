"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = __importDefault(require("../Controller/Controller"));
const router = express_1.default.Router();
router.get("/", Controller_1.default.Menu);
router.post("/", express_1.default.urlencoded({ extended: true }), Controller_1.default.loginUser);
router.get("/Register", Controller_1.default.Register);
router.post("/Register", express_1.default.urlencoded({ extended: true }), Controller_1.default.RegisterUser);
router.get("/ToDo/:name", Controller_1.default.UserPage);
router.post('/ToDo/:name', Controller_1.default.addItem);
exports.default = router;
