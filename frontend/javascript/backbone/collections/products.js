import Backbone from 'backbone';
import Product from '../models/product';

const Products = Backbone.Collection.extend({
    model: Product,

    url: 'http://localhost:3000/api/v1/products',


    parse(response) {
        return response;
    },
});

export default Products;
