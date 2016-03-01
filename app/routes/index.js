import Ember from 'ember';

export default Ember.Route.extend({
  //sunlightAPIKey: bdff00dec69a4500afc06c04eb151ece,

  actions: {
    zipSearch(params) {
      this.transitionTo('results', params.zipcode);
    }
  }
 });
