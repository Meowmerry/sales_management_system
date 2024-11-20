import Backbone from 'backbone';

const Orders = Backbone.Model.extend({
    urlRoot: '/api/v1/orders',
});

export default Orders;
