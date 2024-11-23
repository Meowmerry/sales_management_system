import React, { useState } from 'react';
import Order from '../../../backbone/models/order'; 

const OrderForm = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Instantiate the Backbone model and set its attributes
    const order = new Order({ product_id: productId, quantity: quantity });

    // Save the order to the backend
    order.save(null, {
      success: (model, response) => {
        console.log('Order successfully placed:', response);
        setMessage('Order successfully placed!');
        setProductId('');
        setQuantity('');
      },
      error: (model, response) => {
        console.error('Error placing order:', response.responseJSON?.error || response);
        setMessage('Error placing order: ' + (response.responseJSON?.error || 'Unknown error'));
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Submit Order</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default OrderForm;
