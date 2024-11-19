import React  from 'react';
import LoadingSpinner from '../LoadingSpinner';

const UpdateProductForm = ({
  handleUpdate,
  selectedProduct,
  setSelectedProduct,
  loading,
  closeModal,
}) => {

  const handleChange = (e) => {
    const {name, value} = e.target;

    setSelectedProduct((prevProduct) => {
      if (!prevProduct) {
        return null;
      }

      return {
        ...prevProduct,
        [name]: name === 'price' || name === 'quantity_in_stock' ? +value : value,
        id: prevProduct.id || '',
      };
    });
  };
  if (!selectedProduct) {
    return <div><LoadingSpinner /></div>;
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={selectedProduct.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            value={selectedProduct.price}
            onChange={handleChange}
            required
            min="0"
            disabled={loading}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity_in_stock" className="block text-sm font-medium text-gray-700">
            Quantity in Stock
          </label>
          <input
            type="number"
            id="quantity_in_stock"
            name="quantity_in_stock"
            value={selectedProduct.quantity_in_stock}
            onChange={handleChange}
            required
            min="0"
            disabled={loading}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex justify-between items-center">
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
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed min-w-[100px]"
          >
            {loading ? (
              <>
                <LoadingSpinner />
                <span>Updating...</span>
              </>
            ) : (
              'Update Product'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
