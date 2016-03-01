import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipSearch() {
      var params = {
        zipcode: this.get('zipcode') || '',
      };
      this.sendAction("zipSearch", params);
    },
  }
});
