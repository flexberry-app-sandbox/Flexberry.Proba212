import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba21-вакант-должн', 'Unit | Model | i-i-s-proba21-вакант-должн', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba21-вакант-должн',
    'model:i-i-s-proba21-граф-собес',
    'model:i-i-s-proba21-должн-сотр',
    'model:i-i-s-proba21-организация',
    'model:i-i-s-proba21-планир-собес',
    'model:i-i-s-proba21-рег-результ',
    'model:i-i-s-proba21-регист-анкеты',
    'model:i-i-s-proba21-сотрудники',
    'model:i-i-s-proba21-т-ч-граф-собес',
    'model:i-i-s-proba21-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
