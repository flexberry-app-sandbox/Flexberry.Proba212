import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  планирСобес: DS.belongsTo('i-i-s-proba21-планир-собес', { inverse: null, async: false }),
  графСобес: DS.belongsTo('i-i-s-proba21-граф-собес', { inverse: 'тЧГрафСобес', async: false })
});

export let ValidationRules = {
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba21-т-ч-граф-собес.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графСобес: {
    descriptionKey: 'models.i-i-s-proba21-т-ч-граф-собес.validations.графСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧГрафСобесE', 'i-i-s-proba21-т-ч-граф-собес', {
    планирСобес: belongsTo('i-i-s-proba21-планир-собес', 'Дата планирования', {
      датаПланСобес: attr('Дата планирования', { index: 0 }),
      иметьПриСебе: attr('Иметь при себе', { index: 1, hidden: true }),
      регистАнкеты: belongsTo('i-i-s-proba21-регист-анкеты', '', {
        фИОКандидата: attr('ФИО', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
