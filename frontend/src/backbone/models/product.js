import Backbone from 'backbone';

const Product = Backbone.Model.extend({
    urlRoot: 'http://localhost:3000/api/v1/products',
    // urlRoot: 'https://sales-management-backend-nq4p.onrender.com/api/v1/products',
});

export default Product;
