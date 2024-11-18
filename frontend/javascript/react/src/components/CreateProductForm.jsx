import React, { useState } from 'react';
import Product from '../../../backbone/models/product'; 

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity_in_stock: '',
  });
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrors([]);
    setSuccessMessage('');

    const newProduct = new Product({
      name: product.name,
      price: product.price,
      quantity_in_stock: product.quantity_in_stock,
    });


    newProduct.save({}, {
      success: (model, response) => {
        setIsSubmitting(false);
        setSuccessMessage('Product created successfully!');
        setProduct({ name: '', price: '', quantity_in_stock: '' }); // Reset form
      },
      error: (model, response) => {
        setIsSubmitting(false);
        const errorMessages = response.responseJSON?.errors || ['Error creating product'];
        setErrors(errorMessages);
      },
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New Product</h2>
      
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}
      
      {errors.length > 0 && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity_in_stock" className="block text-sm font-medium text-gray-700">Quantity in Stock</label>
          <input
            type="number"
            id="quantity_in_stock"
            name="quantity_in_stock"
            value={product.quantity_in_stock}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 mt-4 text-white rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500'}`}
        >
          {isSubmitting ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
