import React from 'react';

const CreateUpdateproductForm = ({
  closeModal,
  loading,
  successMessage,
  errors,handleUpdateProduct ,
  handleCreateProduct,
  isSubmitting,
  selectedProduct,
  setSelectedProduct,
  action,
}) => {
  const textHeader = action === 'update' ?  'Update Product' : action === 'create' ? 'Create New Product'
  :''  
  const buttunSubmit = action === 'update' ?  'Update Product' : action === 'create' ? 'Create Product'
  :''  
  const submitTextLoading = action === 'update' ?  'Updating...' : action === 'create' ? 'Creating...'
  :''  

  const handleChangeCreateProduct = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({
      ...selectedProduct,
      [name]: value,
    });
  };
 console.log({action})

 const handleChangeUpdateProduct = (e) => {
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">{textHeader}</h2>

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

      <form onSubmit={action === 'update' ? handleUpdateProduct : handleCreateProduct}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={selectedProduct?.name || ''}
            onChange={action === 'update' ? handleChangeUpdateProduct : handleChangeCreateProduct}
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
            min={0}
            max={100000000}
            value={selectedProduct?.price || ''}
            onChange={action === 'update' ? handleChangeUpdateProduct : handleChangeCreateProduct}
            required
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
            onChange={action === 'update' ? handleChangeUpdateProduct : handleChangeCreateProduct}
            required
            min={0}
            max={100000000}
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
            {isSubmitting ? 
             <>
             <LoadingSpinner />
             <span>{submitTextLoading}</span>
           </>:
             buttunSubmit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUpdateproductForm;
