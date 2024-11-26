import React from 'react';
import CreateUpdateproductForm from './modal/CreateUpdateproductForm';
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
        <CreateUpdateproductForm
          closeModal={closeModal}
          loading={loading}
          successMessage={successMessage}
          errors={errors}
          action={action}
          handleCreateProduct={handleCreateProduct}
          isSubmitting={isSubmitting}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      );
    } else if (action === 'update') {
      return (
        <CreateUpdateproductForm
        closeModal={closeModal}
        loading={loading}
        action={action}
        successMessage={successMessage}
        errors={errors}
        handleUpdateProduct={handleUpdate}
        isSubmitting={isSubmitting}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
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
