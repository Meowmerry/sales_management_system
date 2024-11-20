import React from 'react';
import ModalCreateProduct from './modal/CreateProductForm';
import ModalUpdateProduct from './modal/UpdateProductForm';
import ModalDeleteProduct from './modal/DeleteProduct';

const ModalComponent = ({
  isModalOpen,
  selectedProduct,
  closeModal,
  handleUpdate,
  handleDelete,
  loading,
  action,
  successMessage,
  errors,
  handleCreateProduct,
  isSubmitting,
  setSelectedProduct,
}) => {
  if (!isModalOpen) return null;

  const renderContent = () => {
    if (action === 'create') {
      return (
        <ModalCreateProduct
          closeModal={closeModal}
          loading={loading}
          successMessage={successMessage}
          errors={errors}
          handleCreateProduct={handleCreateProduct}
          isSubmitting={isSubmitting}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      );
    } else if (action === 'update') {
      return (
        <ModalUpdateProduct
          handleUpdate={handleUpdate}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          loading={loading}
          closeModal={closeModal}
        />
      );
    } else if (action === 'delete') {
      return (
        <ModalDeleteProduct
          closeModal={closeModal}
          loading={loading}
          handleDelete={handleDelete}
        />
      );
    }
    return null;
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
      {renderContent()}
    </div>
  );
};

export default ModalComponent;
