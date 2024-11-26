import Backbone from 'backbone';

const Order = Backbone.Model.extend({
    urlRoot: '/api/v1/orders',
});

export default Order;
