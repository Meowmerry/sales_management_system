import Backbone from 'backbone';

const Product = Backbone.Model.extend({
    urlRoot: API_URL,
});

export default Product;
