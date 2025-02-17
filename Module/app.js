"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = require("./payment");
const class_1 = __importDefault(require("./class"));
(0, payment_1.addPayment)(12);
let dettol = new class_1.default(12);
console.log(dettol);
