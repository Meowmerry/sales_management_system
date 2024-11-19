"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DeleteProduct = function (_a) {
    var closeModal = _a.closeModal, loading = _a.loading, handleDelete = _a.handleDelete;
    return (react_1.default.createElement("div", { className: "bg-white p-6 rounded-lg shadow-lg w-96" },
        react_1.default.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Delete Product"),
        react_1.default.createElement("p", null, "Are you sure you want to delete the product?"),
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-4" },
            react_1.default.createElement("button", { type: "button", onClick: closeModal, disabled: loading, className: "px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400" }, "Cancel"),
            react_1.default.createElement("button", { type: "button", onClick: handleDelete, disabled: loading, className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-red-400" }, loading ? 'Deleting...' : 'Delete Product'))));
};
exports.default = DeleteProduct;
