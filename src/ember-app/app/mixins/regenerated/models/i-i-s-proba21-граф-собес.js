import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧГрафСобес: DS.hasMany('i-i-s-proba21-т-ч-граф-собес', { inverse: 'графСобес', async: false })
});

export let ValidationRules = {
  тЧГрафСобес: {
    descriptionKey: 'models.i-i-s-proba21-граф-собес.validations.тЧГрафСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафСобесE', 'i-i-s-proba21-граф-собес', {
    тЧГрафСобес: hasMany('i-i-s-proba21-т-ч-граф-собес', 'Т ч граф собес', {
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
    })
  });

  modelClass.defineProjection('ГрафСобесL', 'i-i-s-proba21-граф-собес', {
    
  });
};
