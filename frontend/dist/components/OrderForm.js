"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var order_1 = __importDefault(require("../../../backbone/models/order")); // Import the Backbone model
var OrderForm = function () {
    var _a = (0, react_1.useState)(''), productId = _a[0], setProductId = _a[1];
    var _b = (0, react_1.useState)(''), quantity = _b[0], setQuantity = _b[1];
    var _c = (0, react_1.useState)(''), message = _c[0], setMessage = _c[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        // Instantiate the Backbone model and set its attributes
        var order = new order_1.default({ product_id: productId, quantity: quantity });
        // Save the order to the backend
        order.save(null, {
            success: function (model, response) {
                console.log('Order successfully placed:', response);
                setMessage('Order successfully placed!');
                setProductId(''); // Clear form fields
                setQuantity('');
            },
            error: function (model, response) {
                var _a, _b;
                console.error('Error placing order:', ((_a = response.responseJSON) === null || _a === void 0 ? void 0 : _a.error) || response);
                setMessage('Error placing order: ' + (((_b = response.responseJSON) === null || _b === void 0 ? void 0 : _b.error) || 'Unknown error'));
            }
        });
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("input", { type: "number", placeholder: "Product ID", value: productId, onChange: function (e) { return setProductId(e.target.value); } }),
        react_1.default.createElement("input", { type: "number", placeholder: "Quantity", value: quantity, onChange: function (e) { return setQuantity(e.target.value); } }),
        react_1.default.createElement("button", { type: "submit" }, "Submit Order"),
        message && react_1.default.createElement("p", null, message)));
};
exports.default = OrderForm;
