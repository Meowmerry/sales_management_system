import React from 'react';
import Backbone from 'backbone';
import Product from '../models/product';

const Products = Backbone.Collection.extend({
    model: Product,
    url: 'http://localhost:3000/api/v1/products',

    parse(response) {
        return response;
    },

    // initialize() {
    //     this.on('sync', () => {
    //         console.log('Collection synced, length:', this.length);
    //     });

    //     this.on('error', (collection, response) => {
    //         console.error('Collection error:', response);
    //     });
    // }
});

export default Products;