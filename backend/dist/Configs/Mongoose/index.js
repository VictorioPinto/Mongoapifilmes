"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongo = mongoose_1.default
    .connect("mongodb://localhost:27017/db")
    .then(() => {
    console.log("Conectado ao mongo!");
})
    .catch((e) => console.log(e));
