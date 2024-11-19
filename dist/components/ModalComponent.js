"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CreateProductForm_1 = __importDefault(require("./modal/CreateProductForm"));
var UpdateProductForm_1 = __importDefault(require("./modal/UpdateProductForm"));
var DeleteProduct_1 = __importDefault(require("./modal/DeleteProduct"));
var ModalComponent = function (_a) {
    var isModalOpen = _a.isModalOpen, selectedProduct = _a.selectedProduct, closeModal = _a.closeModal, handleUpdate = _a.handleUpdate, handleDelete = _a.handleDelete, loading = _a.loading, action = _a.action, successMessage = _a.successMessage, errors = _a.errors, handleCreateProduct = _a.handleCreateProduct, isSubmitting = _a.isSubmitting, setSelectedProduct = _a.setSelectedProduct;
    if (!isModalOpen)
        return null;
    var renderContent = function () {
        if (action === 'create') {
            return (react_1.default.createElement(CreateProductForm_1.default, { closeModal: closeModal, loading: loading, successMessage: successMessage, errors: errors, handleCreateProduct: handleCreateProduct, isSubmitting: isSubmitting, selectedProduct: selectedProduct, setSelectedProduct: setSelectedProduct }));
        }
        else if (action === 'update') {
            return (react_1.default.createElement(UpdateProductForm_1.default, { handleUpdate: handleUpdate, selectedProduct: selectedProduct, setSelectedProduct: setSelectedProduct, loading: loading, closeModal: closeModal }));
        }
        else if (action === 'delete') {
            return (react_1.default.createElement(DeleteProduct_1.default, { closeModal: closeModal, loading: loading, handleDelete: handleDelete }));
        }
        return null;
    };
    return (react_1.default.createElement("div", { className: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" }, renderContent()));
};
exports.default = ModalComponent;
