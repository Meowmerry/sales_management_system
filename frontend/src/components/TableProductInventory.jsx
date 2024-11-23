import React from 'react';
import ModalComponent from './ModalComponent';
import LoadingSpinner from './LoadingSpinner';
import {useProducts} from '../hook/useProducts';

const TableProductInventory = ({}) => {
    const {
        products, loading,
        tableLoading, isModalOpen, handleDelete,
        action, selectedProduct, handleCreateProduct,
        openModalUpdate, openModalDelete, openModalCreateProduct, closeModal, handleUpdate, setSelectedProduct
    } = useProducts();
    console.log({products})

    return (

        <>
            <div className="text-2xl font-bold mb-6 text-center" >
                <button
                    onClick={openModalCreateProduct}
                    className="text-blue-500 hover:text-blue-700 m-4 border-[1px] border-blue-500 pr-1 pl-1 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed">Create New Product</button>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Inventory Dashboard</h1>

                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    {tableLoading ? (
                        <LoadingSpinner />
                    ) : products.length === 0 ? (
                        <p className="text-center text-lg p-4">No products available</p>
                    ) : (
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
                                    <tr key={product.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-2">{product.id}</td>
                                        <td className="px-4 py-2">{product.name}</td>
                                        <td className="px-4 py-2">${product.price}</td>
                                        <td className="px-4 py-2">{product.quantity_in_stock}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                className="text-blue-500 hover:text-blue-700 mr-4 border-[1px] border-blue-500 pr-1 pl-1 w-10 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
                                                onClick={() => openModalUpdate(product)}
                                                disabled={loading}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-700 mr-4 border-[1px] border-red-500 pr-1 pl-1 w-14 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
                                                onClick={() => openModalDelete(product)}
                                                disabled={loading}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <ModalComponent
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleCreateProduct={handleCreateProduct}
                    isModalOpen={isModalOpen}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    closeModal={closeModal}
                    loading={loading}
                    action={action}
                />
            </div>
        </>
    );
};
export default TableProductInventory;