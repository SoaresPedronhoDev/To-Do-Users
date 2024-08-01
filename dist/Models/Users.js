"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
    done: { type: Boolean, default: false }
});
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    items: { type: [itemSchema], default: [] }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
