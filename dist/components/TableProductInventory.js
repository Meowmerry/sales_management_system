"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LoadingSpinner_1 = __importDefault(require("./LoadingSpinner"));
var useProducts_1 = require("../hook/useProducts");
var TableProductInventory = function (_a) {
    var _b = (0, useProducts_1.useProducts)(), products = _b.products, loading = _b.loading, tableLoading = _b.tableLoading, isModalOpen = _b.isModalOpen, handleDelete = _b.handleDelete, action = _b.action, selectedProduct = _b.selectedProduct, handleCreateProduct = _b.handleCreateProduct, openModalUpdate = _b.openModalUpdate, openModalDelete = _b.openModalDelete, openModalCreateProduct = _b.openModalCreateProduct, closeModal = _b.closeModal, handleUpdate = _b.handleUpdate, setSelectedProduct = _b.setSelectedProduct;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "text-2xl font-bold mb-6 text-center" },
            react_1.default.createElement("button", { onClick: openModalCreateProduct, className: "text-blue-500 hover:text-blue-700 m-4 border-[1px] border-blue-500 pr-1 pl-1 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed" }, "Create New Product")),
        react_1.default.createElement("div", { className: "container mx-auto p-4" },
            react_1.default.createElement("h1", { className: "text-3xl font-bold mb-6 text-center" }, "Inventory Dashboard"),
            react_1.default.createElement("div", { className: "overflow-x-auto shadow-md sm:rounded-lg" }, tableLoading ? (react_1.default.createElement(LoadingSpinner_1.default, null)) : products.length === 0 ? (react_1.default.createElement("p", { className: "text-center text-lg p-4" }, "No products available")) : (react_1.default.createElement("table", { className: "min-w-full table-auto text-left text-sm text-gray-700" },
                react_1.default.createElement("thead", { className: "bg-gray-100" },
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { className: "px-4 py-2 font-medium" }, "ID"),
                        react_1.default.createElement("th", { className: "px-4 py-2 font-medium" }, "Product Name"),
                        react_1.default.createElement("th", { className: "px-4 py-2 font-medium" }, "Price"),
                        react_1.default.createElement("th", { className: "px-4 py-2 font-medium" }, "Stock"),
                        react_1.default.createElement("th", { className: "px-4 py-2 font-medium" }, "Actions"))),
                react_1.default.createElement("tbody", null, products.map(function (product) { return (react_1.default.createElement("tr", { key: product.id, className: "border-b hover:bg-gray-50" },
                    react_1.default.createElement("td", { className: "px-4 py-2" }, product.id),
                    react_1.default.createElement("td", { className: "px-4 py-2" }, product.name),
                    react_1.default.createElement("td", { className: "px-4 py-2" },
                        "$",
                        product.price),
                    react_1.default.createElement("td", { className: "px-4 py-2" }, product.quantity_in_stock),
                    react_1.default.createElement("td", { className: "px-4 py-2" },
                        react_1.default.createElement("button", { className: "text-blue-500 hover:text-blue-700 mr-4 border-[1px] border-blue-500 pr-1 pl-1 w-10 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed", onClick: function () { return openModalUpdate(product); }, disabled: loading }, "Edit"),
                        react_1.default.createElement("button", { className: "text-red-500 hover:text-red-700 mr-4 border-[1px] border-red-500 pr-1 pl-1 w-14 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed", onClick: function () { return openModalDelete(product); }, disabled: loading }, "Delete")))); }))))))));
};
exports.default = TableProductInventory;
