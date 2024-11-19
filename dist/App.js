"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InventoryDashboard_1 = __importDefault(require("./pages/InventoryDashboard"));
var App = function () {
    return (react_1.default.createElement("div", { id: "app" },
        react_1.default.createElement(InventoryDashboard_1.default, null)));
};
exports.default = App;
