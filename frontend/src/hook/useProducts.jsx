import { useState, useCallback, useEffect } from 'react';
import ProductCollection from '../backbone/collections/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [productsCollection] = useState(() => new ProductCollection());
  const [action, setAction] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = useCallback(() => {
    setTableLoading(true);
    productsCollection.fetch({
      success: (collection) => {
        setProducts(collection.toJSON());
        setTableLoading(false);
      },
      error: (collection, response) => {
        console.error('Error fetching products:', response);
        setTableLoading(false);
      },
    });
  }, [productsCollection]);

  useEffect(() => {
    fetchProducts();
    return () => {
      productsCollection.reset();
    };
  }, [fetchProducts]);

  const openModalCreateProduct = useCallback(() => {
    setSelectedProduct(null);
    setAction('create');
    setIsModalOpen(true);
  }, []);

  const openModalUpdate = useCallback((product) => {
    setSelectedProduct(product);
    setAction('update');
    setIsModalOpen(true);
  }, []);

  const openModalDelete = useCallback((product) => {
    setSelectedProduct(product);
    setAction('delete');
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setErrors([]);
    setSuccessMessage('');
    setIsSubmitting(false);
  }, [isModalOpen]);

  const handleCreateProduct = useCallback(
    (e) => {
      e.preventDefault();

      if (
        !selectedProduct?.name ||
        !selectedProduct?.price ||
        !selectedProduct?.quantity_in_stock
      ) {
        setErrors([{ message: 'Please fill in all the fields' }]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setIsSubmitting(true);
      setErrors([]);
      setSuccessMessage('');

      const newProduct = new productsCollection.model({
        name: selectedProduct.name,
        price: Number(selectedProduct.price),
        quantity_in_stock: Number(selectedProduct.quantity_in_stock),
      });

      productsCollection.add(newProduct);

      newProduct.save(null, {
        success: () => {
          console.log('Success');
          setSuccessMessage('Product created successfully!');
          fetchProducts();
          closeModal();
        },
        error: (model, response) => {
          setErrors(
            response?.responseJSON?.errors || ['Error creating product']
          );
          productsCollection.remove(newProduct);
        },
        complete: () => {
          setLoading(false);
          setIsSubmitting(false);
        },
        wait: true,
      });
    },
    [selectedProduct, productsCollection, fetchProducts, closeModal]
  );

  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      if (!selectedProduct) return;

      setLoading(true);
      const existingModel = productsCollection.get(selectedProduct.id);

      if (existingModel) {
        existingModel.save(
          {
            name: selectedProduct.name,
            price: Number(selectedProduct.price),
            quantity_in_stock: Number(selectedProduct.quantity_in_stock),
          },
          {
            success: () => {
              fetchProducts();
              closeModal();
            },
            error: (model, response) => {
              setErrors(
                response?.responseJSON?.errors || ['Error updating product']
              );
            },
            complete: () => setLoading(false),
            wait: true,
          }
        );
      }
    },
    [selectedProduct, productsCollection, fetchProducts, closeModal]
  );

  const handleDelete = useCallback(() => {
    if (!selectedProduct?.id) return;

    setLoading(true);
    const modelToDelete = productsCollection.get(selectedProduct.id);

    if (modelToDelete) {
      modelToDelete.destroy({
        success: () => {
          fetchProducts();
          closeModal();
        },
        error: (model, response) => {
          setErrors(
            response?.responseJSON?.errors || ['Error deleting product']
          );
        },
        complete: () => setLoading(false),
        wait: true,
      });
    }
  }, [selectedProduct, productsCollection, fetchProducts, closeModal]);

  return {
    products,
    loading,
    tableLoading,
    isModalOpen,
    action,
    selectedProduct,
    errors,
    isSubmitting,
    successMessage,
    handleCreateProduct,
    handleUpdate,
    handleDelete,
    openModalCreateProduct,
    openModalUpdate,
    openModalDelete,
    closeModal,
    setSelectedProduct,
  };
};
