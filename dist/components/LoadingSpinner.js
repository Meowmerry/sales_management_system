"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoadingSpinner = function () { return (react_1.default.createElement("div", { className: "flex justify-center items-center p-8" },
    react_1.default.createElement("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" },
        react_1.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")))); };
exports.default = LoadingSpinner;
