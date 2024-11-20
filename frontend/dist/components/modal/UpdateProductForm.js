"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoadingSpinner_1 = __importDefault(require("../LoadingSpinner"));
var UpdateProductForm = function (_a) {
    var handleUpdate = _a.handleUpdate, selectedProduct = _a.selectedProduct, setSelectedProduct = _a.setSelectedProduct, loading = _a.loading, closeModal = _a.closeModal;
    return (react_1.default.createElement("div", { className: "bg-white p-6 rounded-lg shadow-lg w-96" },
        react_1.default.createElement("h2", { className: "text-2xl font-semibold mb-4" }, "Edit Product"),
        react_1.default.createElement("form", { onSubmit: handleUpdate },
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700" }, "Product Name"),
                react_1.default.createElement("input", { type: "text", id: "name", name: "name", value: selectedProduct.name, onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { name: e.target.value }));
                    }, required: true, disabled: loading, className: "mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed" })),
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "price", className: "block text-sm font-medium text-gray-700" }, "Price"),
                react_1.default.createElement("input", { type: "number", id: "price", name: "price", value: selectedProduct.price, onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { price: e.target.value }));
                    }, required: true, min: "0", disabled: loading, className: "mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed" })),
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "quantity_in_stock", className: "block text-sm font-medium text-gray-700" }, "Quantity in Stock"),
                react_1.default.createElement("input", { type: "number", id: "quantity_in_stock", name: "quantity_in_stock", value: selectedProduct.quantity_in_stock, onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { quantity_in_stock: e.target.value }));
                    }, required: true, min: "0", disabled: loading, className: "mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed" })),
            react_1.default.createElement("div", { className: "flex justify-between items-center" },
                react_1.default.createElement("button", { type: "button", className: "inline-flex items-center justify-center gap-2 px-2 py-1 bg-gray-300 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed min-w-[100px]", onClick: closeModal, disabled: loading }, "Cancel"),
                react_1.default.createElement("button", { type: "submit", disabled: loading, className: "inline-flex items-center justify-center gap-2 px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed min-w-[100px]" }, loading ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(LoadingSpinner_1.default, null),
                    react_1.default.createElement("span", null, "Updating..."))) : ('Update Product'))))));
};
exports.default = UpdateProductForm;
