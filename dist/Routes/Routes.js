"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = __importDefault(require("../Controller/Controller"));
const router = express_1.default.Router();
router.get("/", Controller_1.default.Menu);
router.get("/Register", Controller_1.default.Register);
router.get("/ToDoList/:name", Controller_1.default.UserPage);
router.post("/Register", express_1.default.urlencoded({ extended: true }), Controller_1.default.RegisterUser);
exports.default = router;
