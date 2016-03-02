import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + params.politician_id +'&apikey=bdff00dec69a4500afc06c04eb151ece';
    console.log("Made it to the politician.js route!");
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0])
      return (responseJSON.results[0]);
      });
    }

  });
