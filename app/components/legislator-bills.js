import Ember from 'ember';

export default Ember.Component.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?sponsor_id=' + model.bioguide_id + '&apikey=bdff00dec69a4500afc06c04eb151ece';
      console.log("Made it to the bills model!");
      return Ember.$.getJSON(url).then(function(responseJSON) {
        var bills = [];
        responseJSON.results.forEach(function(bill) {
          bills.push(bill);
        });
        return bills;
      });
    }
});
