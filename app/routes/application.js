import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let prismicData = this.get('store').findAll('project'); // this should get all projects from prismic
    console.log(prismicData);
    // return prismicData; // uncomment to return data to the model and in theory - show in template
  }
});
