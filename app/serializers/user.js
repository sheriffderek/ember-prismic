import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  // ember expects a collection... in this case - with something called 'posts'
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      users: payload // shuves the payload into a 'posts' key
    };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

});
