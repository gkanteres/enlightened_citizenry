import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('legislator-bills', 'Integration | Component | legislator bills', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{legislator-bills}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#legislator-bills}}
      template block text
    {{/legislator-bills}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
