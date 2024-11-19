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
var CreateProductForm = function (_a) {
    var _b, _c;
    var closeModal = _a.closeModal, loading = _a.loading, successMessage = _a.successMessage, errors = _a.errors, handleCreateProduct = _a.handleCreateProduct, isSubmitting = _a.isSubmitting, selectedProduct = _a.selectedProduct, setSelectedProduct = _a.setSelectedProduct;
    return (react_1.default.createElement("div", { className: "bg-white p-6 rounded-lg shadow-lg w-96" },
        react_1.default.createElement("h2", { className: "text-2xl font-semibold mb-4 text-center" }, "Create New Product"),
        successMessage && (react_1.default.createElement("div", { className: "bg-green-100 text-green-800 p-3 rounded mb-4" }, successMessage)),
        (errors === null || errors === void 0 ? void 0 : errors.length) > 0 && (react_1.default.createElement("div", { className: "bg-red-100 text-red-800 p-3 rounded mb-4" },
            react_1.default.createElement("ul", null, errors.map(function (error, index) { return (react_1.default.createElement("li", { key: index }, error)); })))),
        react_1.default.createElement("form", { onSubmit: handleCreateProduct },
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700" }, "Product Name"),
                react_1.default.createElement("input", { type: "text", id: "name", name: "name", value: (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.name) || '', onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { name: e.target.value }));
                    }, required: true, className: "mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" })),
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "price", className: "block text-sm font-medium text-gray-700" }, "Price"),
                react_1.default.createElement("input", { type: "number", id: "price", name: "price", value: (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.price) || '', onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { price: e.target.value }));
                    }, required: true, min: "0", className: "mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" }),
                ((_b = errors === null || errors === void 0 ? void 0 : errors.selectedProduct) === null || _b === void 0 ? void 0 : _b.price) && (react_1.default.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.price))),
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "quantity_in_stock", className: "block text-sm font-medium text-gray-700" }, "Quantity in Stock"),
                react_1.default.createElement("input", { type: "number", id: "quantity_in_stock", name: "quantity_in_stock", value: (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.quantity_in_stock) || '', onChange: function (e) {
                        return setSelectedProduct(__assign(__assign({}, selectedProduct), { quantity_in_stock: e.target.value }));
                    }, required: true, min: "0", className: "mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" }),
                ((_c = errors === null || errors === void 0 ? void 0 : errors.selectedProduct) === null || _c === void 0 ? void 0 : _c.quantity_in_stock) && (react_1.default.createElement("p", { className: "text-red-500 text-sm mt-1" }, errors.quantity_in_stock))),
            react_1.default.createElement("div", { className: "flex justify-between items-center mt-2" },
                react_1.default.createElement("button", { type: "button", className: "inline-flex items-center justify-center gap-2 px-2 py-1 bg-gray-300 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed min-w-[100px]", onClick: closeModal, disabled: loading }, "Cancel"),
                react_1.default.createElement("button", { type: "submit", disabled: loading || isSubmitting, className: "gap-2 px-2 py-1 text-white rounded-md ".concat(isSubmitting
                        ? 'bg-gray-400'
                        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500', " min-w-[120px]") }, isSubmitting ? 'Creating...' : 'Create Product')))));
};
exports.default = CreateProductForm;
