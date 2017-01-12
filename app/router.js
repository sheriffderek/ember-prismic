import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', { path: '/' }, function() {
    this.route('currently', { path: '/'} );
  });
  this.route('example-single-page');
  this.route('example-repeatable-page', function() {
    this.route('item-list', { path: '/' } );
    this.route('repeatable-item');
  });
  this.route('other-api');
});

export default Router;