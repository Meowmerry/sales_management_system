import React from 'react';
import InventoryDashboard from './components/InventoryDashboard';
import OrderForm from './components/OrderForm';
import CreateProductForm from './components/CreateProductForm';

const App = () => {
    return (
        <div id="app">
            <CreateProductForm />
            {/* <OrderForm /> */}
            <InventoryDashboard />
        </div>
    );
};

export default App;
