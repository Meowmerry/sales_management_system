import Backbone from 'backbone';
import Order from '../models/order';

const OrdersCollection = Backbone.Collection.extend({
    model: Order,
    url: API_URL,
    // url: 'http://localhost:3000/api/v1/products',
    // url: 'https://sales-management-backend-nq4p.onrender.com/api/v1/products',

    parse(response) {
        return response;
    },
    initialize() {
        this.on('sync', () => {
            console.log('Collection synced, length:', this.length);
        });

        this.on('error', (collection, response) => {
            console.error('Collection error:', response);
        });
    }
});

export default OrdersCollection;