import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  uid: DS.attr('string'),
  slug: Ember.computed('uid', function() {
    return this.get('uid');
  }),
  title: DS.attr('string'),
  tagline: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
});