import Ember from 'ember';

export default Ember.Component.extend({
  showResults: false,

  actions: {
    showResults() {
      this.set('showResults', true);
    },
    hideResults() {
      this.set('showResults', false)
    }
  }
});
