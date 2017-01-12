import Ember from 'ember';

export default Ember.Route.extend({

  model() { // this is just a placholder json file for an example
    return this.get('store').findAll('post');
  },

});