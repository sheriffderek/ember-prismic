import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let projectData = this.get('store').findAll('project');
    console.log(projectData);
    // return projectData;
  }

});
