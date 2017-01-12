import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  type: DS.attr('string'),
  uid: DS.attr('string'),
  slug: Ember.computed.alias('uid'),
  title: DS.attr('string'),
  tagline: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
});