import React from 'react';

const DeleteProduct = ({closeModal, loading, handleDelete}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4">Delete Product</h2>
      <p>Are you sure you want to delete the product?</p>
      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={closeModal}
          disabled={loading}
          className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-red-400"
        >
          {loading ? 'Deleting...' : 'Delete Product'}
        </button>
      </div>
    </div>
  );
};
export default DeleteProduct;