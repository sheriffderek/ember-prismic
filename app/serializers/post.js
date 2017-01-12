import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  // ember expects a collection... in this case - with something called 'posts'
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      posts: payload // shuves the payload into a 'posts' key
    };
    // returns defaults (including the change) - so that nothing is overwritten
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

});
