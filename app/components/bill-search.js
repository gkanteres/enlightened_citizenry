import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billSearch() {
      var params = {
        billQuery: this.get('billQuery') || '',
      };
      console.log('Made it to the bill-search component route');
      this.sendAction("billSearch", params);
    },
  }
});
