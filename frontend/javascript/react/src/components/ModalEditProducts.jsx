
import React from 'react';
const ModalEditProduct = ({isModalOpen,selectedProduct,setSelectedProduct,closeModal,handleUpdate })=>{


    return  isModalOpen && selectedProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={selectedProduct.name}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={selectedProduct.price}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                required
                min="0"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="quantity_in_stock" className="block text-sm font-medium text-gray-700">Quantity in Stock</label>
              <input
                type="number"
                id="quantity_in_stock"
                name="quantity_in_stock"
                value={selectedProduct.quantity_in_stock}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, quantity_in_stock: e.target.value })}
                required
                min="0"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal} 
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}
export default ModalEditProduct;