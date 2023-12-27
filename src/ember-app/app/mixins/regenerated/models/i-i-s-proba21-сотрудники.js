import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотр: DS.attr('number'),
  фИОСотруд: DS.attr('string'),
  должнСотр: DS.belongsTo('i-i-s-proba21-должн-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотр: {
    descriptionKey: 'models.i-i-s-proba21-сотрудники.validations.iDСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОСотруд: {
    descriptionKey: 'models.i-i-s-proba21-сотрудники.validations.фИОСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должнСотр: {
    descriptionKey: 'models.i-i-s-proba21-сотрудники.validations.должнСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-proba21-сотрудники', {
    iDСотр: attr('I d сотр', { index: 0 }),
    фИОСотруд: attr('Ф и о сотруд', { index: 1 }),
    должнСотр: belongsTo('i-i-s-proba21-должн-сотр', 'Должн сотр', {
      должность: attr('Должность', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proba21-сотрудники', {
    iDСотр: attr('I d сотр', { index: 0 }),
    фИОСотруд: attr('Ф и о сотруд', { index: 1 }),
    должнСотр: belongsTo('i-i-s-proba21-должн-сотр', 'Должность', {
      должность: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
