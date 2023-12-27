import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba21-сотрудники', 'Unit | Serializer | i-i-s-proba21-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba21-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba21-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
