import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new');
  this.route('scope', { path: '/scope/:id' });
  this.route('home');
  this.route('scoping', { path: '/scoping/:id' });
  this.route('results', { path: '/results/:id' });
  this.route('thanks', { path: '/thanks/:id' });
});

export default Router;
