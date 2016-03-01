import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  var url = 'http://congress.api.sunlightfoundation.com/bills?query=' + params.billQuery + '&apikey=bdff00dec69a4500afc06c04eb151ece';
  return Ember.$.getJSON(url).then(function(responseJSON) {
    var bills = [];
    responseJSON.results.forEach(function(bill) {
      bills.push(bill);
    });
    return bills;
  });
 }
});
