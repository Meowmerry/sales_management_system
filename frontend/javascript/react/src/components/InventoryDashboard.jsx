import React, { useEffect, useState } from 'react';
import Product from '../../../backbone/collections/products';
import ModalEditProduct from './ModalEditProducts';

const InventoryDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const productsCollection = new Product();

    productsCollection.fetch({
      success: (collection) => {
        setProducts(collection.toJSON());
      },
      error: (collection, response) => {
        console.error('Error fetching products:', response);
      },
    });

    return () => {
      productsCollection.reset();
    };
  }, []);

  // Handle modal open and close
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (selectedProduct) {
      const productModel = new Product({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity_in_stock: selectedProduct.quantity_in_stock,
      });

      productModel.set({
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity_in_stock: selectedProduct.quantity_in_stock,
      });

      productModel.save(null,
        {
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity_in_stock: selectedProduct.quantity_in_stock,
        },
        {
          success: (model, response) => {
            console.log('Product updated successfully', model, response);
            setIsModalOpen(false);
            setSelectedProduct(null);
          },
          error: (model, response) => {
            console.error('Error updating product:', response);
          }
        }
      );
    }
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Inventory Dashboard</h1>

      {products.length === 0 ? (
        <p className="text-center text-lg">No products available</p>
      ) : (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full table-auto text-left text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 font-medium">ID</th>
                <th className="px-4 py-2 font-medium">Product Name</th>
                <th className="px-4 py-2 font-medium">Price</th>
                <th className="px-4 py-2 font-medium">Stock</th>
                <th className="px-4 py-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">{product.quantity_in_stock}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-4 border-[1px] border-blue-500 pr-1 pl-1 w-10 rounded-[4px]"
                      onClick={() => openModal(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 mr-4 border-[1px] border-red-500 pr-1 pl-1 w-14 rounded-[4px]"
                      onClick={() => openModal(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
      <ModalEditProduct
        handleUpdate={handleUpdate}
        isModalOpen={isModalOpen}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        closeModal={closeModal}
      />
    </div>
  );
};

export default InventoryDashboard;
