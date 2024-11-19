import React from 'react';

const CreateProductForm = ({
  closeModal,
  loading,
  successMessage,
  errors,
  handleCreateProduct,
  isSubmitting,
  selectedProduct,
  setSelectedProduct,
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({
      ...selectedProduct,
      [name]: value,
    });
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New Product</h2>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {errors && errors.length > 0 && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleCreateProduct}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={selectedProduct?.name || ''}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={selectedProduct?.price || ''}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors?.includes('price') && (
            <p className="text-red-500 text-sm mt-1">Price is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity_in_stock" className="block text-sm font-medium text-gray-700">
            Quantity in Stock
          </label>
          <input
            type="number"
            id="quantity_in_stock"
            name="quantity_in_stock"
            value={selectedProduct?.quantity_in_stock || ''}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors?.includes('quantity_in_stock') && (
            <p className="text-red-500 text-sm mt-1">Quantity in stock is required</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-gray-300 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed min-w-[100px]"
            onClick={closeModal}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || isSubmitting}
            className={`gap-2 px-2 py-1 text-white rounded-md ${isSubmitting
              ? 'bg-gray-400'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500'
              } min-w-[120px]`}
          >
            {isSubmitting ? 'Creating...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
