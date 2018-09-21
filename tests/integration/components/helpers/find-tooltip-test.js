import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {
  assertTooltipNotVisible,
  assertTooltipVisible,
  assertTooltipNotRendered,
  assertTooltipRendered,
} from 'ember-tooltips/test-support';

module('Integration | Helpers | findTooltip', function(hooks) {
  setupRenderingTest(hooks);

  [assertTooltipRendered, assertTooltipNotVisible, assertTooltipVisible].forEach(function(helperInstance) {
    test(`findTooltip() throws an Error in when a non-tooltip is found`, async function(assert) {
      assert.expect(1);

      await render(hbs`<div class="test-tooltip"></div>`);

      let funcToError = () => {
        helperInstance(assert, {
          selector: '.test-tooltip',
        });
      };

      assert.throws(funcToError, Error,
        'helperInstance should throw an Error');

    });
  });

  test('findTooltip() will not throw en error with assertTooltipNotRendered', async function(assert) {
    assert.expect(1);

    await render(hbs``);

    assertTooltipNotRendered(assert);

  });
});
