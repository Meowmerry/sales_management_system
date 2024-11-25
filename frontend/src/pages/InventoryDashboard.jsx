import React from 'react';
import TableProductInventory from '../components/TableProductInventory';

const InventoryDashboard = () => {
    return (
        <div className="inventory-dashboard">
            <p className='text-3xl font-bold m-6'>Welcome to the Sales Management System</p>
            <h1 className="text-3xl font-bold mb-6 text-center">Inventory Dashboard</h1>
            <TableProductInventory/>
        </div>
    );
};

export default InventoryDashboard;
