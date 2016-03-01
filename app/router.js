import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('politician', {path: 'politician/:politician_id'});
  this.route('results', {path: 'results/:zipcode'});
  this.route('bill-results', {path: 'bill-results/:billQuery'});
});

export default Router;
