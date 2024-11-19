"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProducts = void 0;
var react_1 = require("react");
var products_1 = __importDefault(require("../../../backbone/collections/products"));
var useProducts = function () {
    var _a = (0, react_1.useState)([]), products = _a[0], setProducts = _a[1];
    var _b = (0, react_1.useState)(true), tableLoading = _b[0], setTableLoading = _b[1];
    var productsCollection = (0, react_1.useState)(function () { return new products_1.default(); })[0];
    var _c = (0, react_1.useState)(''), action = _c[0], setAction = _c[1];
    var _d = (0, react_1.useState)(null), selectedProduct = _d[0], setSelectedProduct = _d[1];
    var _e = (0, react_1.useState)([]), errors = _e[0], setErrors = _e[1];
    var _f = (0, react_1.useState)(false), isSubmitting = _f[0], setIsSubmitting = _f[1];
    var _g = (0, react_1.useState)(''), successMessage = _g[0], setSuccessMessage = _g[1];
    var _h = (0, react_1.useState)(false), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)(false), isModalOpen = _j[0], setIsModalOpen = _j[1];
    var fetchProducts = (0, react_1.useCallback)(function () {
        setTableLoading(true);
        productsCollection.fetch({
            success: function (collection) {
                setProducts(collection.toJSON());
                setTableLoading(false);
            },
            error: function (collection, response) {
                console.error('Error fetching products:', response);
                setTableLoading(false);
            },
        });
    }, [productsCollection]);
    (0, react_1.useEffect)(function () {
        fetchProducts();
        return function () {
            productsCollection.reset();
        };
    }, [fetchProducts]);
    var openModalCreateProduct = (0, react_1.useCallback)(function () {
        setSelectedProduct(null);
        setAction('create');
        setIsModalOpen(true);
    }, []);
    var openModalUpdate = (0, react_1.useCallback)(function (product) {
        setSelectedProduct(product);
        setAction('update');
        setIsModalOpen(true);
    }, []);
    var openModalDelete = (0, react_1.useCallback)(function (product) {
        setSelectedProduct(product);
        setAction('delete');
        setIsModalOpen(true);
    }, []);
    var closeModal = (0, react_1.useCallback)(function () {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setErrors([]);
        setSuccessMessage('');
        setIsSubmitting(false);
    }, [isModalOpen]);
    var handleCreateProduct = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!(selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.name) || !(selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.price) || !(selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.quantity_in_stock)) {
            // setErrors(['Please fill in all the fields']);
            setErrors([{ message: 'Please fill in all the fields' }]);
            setLoading(false);
            return;
        }
        setLoading(true);
        setIsSubmitting(true);
        setErrors([]);
        setSuccessMessage('');
        var newProduct = new productsCollection.model({
            name: selectedProduct.name,
            price: Number(selectedProduct.price),
            quantity_in_stock: Number(selectedProduct.quantity_in_stock),
        });
        productsCollection.add(newProduct);
        newProduct.save(null, {
            success: function () {
                console.log('Success');
                setSuccessMessage('Product created successfully!');
                fetchProducts();
                closeModal();
            },
            error: function (model, response) {
                var _a;
                setErrors(((_a = response === null || response === void 0 ? void 0 : response.responseJSON) === null || _a === void 0 ? void 0 : _a.errors) || ['Error creating product']);
                productsCollection.remove(newProduct);
            },
            complete: function () {
                setLoading(false);
                setIsSubmitting(false);
            },
            wait: true,
        });
    }, [selectedProduct, productsCollection, fetchProducts, closeModal]);
    var handleUpdate = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (!selectedProduct)
            return;
        setLoading(true);
        var existingModel = productsCollection.get(selectedProduct.id);
        if (existingModel) {
            existingModel.save({
                name: selectedProduct.name,
                price: Number(selectedProduct.price),
                quantity_in_stock: Number(selectedProduct.quantity_in_stock),
            }, {
                success: function () {
                    fetchProducts();
                    closeModal();
                },
                error: function (model, response) {
                    var _a;
                    setErrors(((_a = response === null || response === void 0 ? void 0 : response.responseJSON) === null || _a === void 0 ? void 0 : _a.errors) || ['Error updating product']);
                },
                complete: function () { return setLoading(false); },
                wait: true,
            });
        }
    }, [selectedProduct, productsCollection, fetchProducts, closeModal]);
    var handleDelete = (0, react_1.useCallback)(function () {
        if (!(selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id))
            return;
        setLoading(true);
        var modelToDelete = productsCollection.get(selectedProduct.id);
        if (modelToDelete) {
            modelToDelete.destroy({
                success: function () {
                    fetchProducts();
                    closeModal();
                },
                error: function (model, response) {
                    var _a;
                    setErrors(((_a = response === null || response === void 0 ? void 0 : response.responseJSON) === null || _a === void 0 ? void 0 : _a.errors) || ['Error deleting product']);
                },
                complete: function () { return setLoading(false); },
                wait: true,
            });
        }
    }, [selectedProduct, productsCollection, fetchProducts, closeModal]);
    return {
        products: products,
        loading: loading,
        tableLoading: tableLoading,
        isModalOpen: isModalOpen,
        action: action,
        selectedProduct: selectedProduct,
        errors: errors,
        isSubmitting: isSubmitting,
        successMessage: successMessage,
        handleCreateProduct: handleCreateProduct,
        handleUpdate: handleUpdate,
        handleDelete: handleDelete,
        openModalCreateProduct: openModalCreateProduct,
        openModalUpdate: openModalUpdate,
        openModalDelete: openModalDelete,
        closeModal: closeModal,
        setSelectedProduct: setSelectedProduct
    };
};
exports.useProducts = useProducts;
