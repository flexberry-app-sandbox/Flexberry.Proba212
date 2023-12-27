import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba21-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba21-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba21-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba21-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba21-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba21-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba21-планир-собес', {
    датаПланСобес: attr('Дата планирования собеседования', { index: 0 }),
    регистАнкеты: belongsTo('i-i-s-proba21-регист-анкеты', 'ФИО', {
      фИОКандидата: attr('ФИО', { index: 2, hidden: true }),
      вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', '', {
        должности: attr('Вакантная должность', { index: 3 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Номер телефона', { index: 4 }),
      элПочта: attr('Эл почта', { index: 5 }),
      организация: belongsTo('i-i-s-proba21-организация', '', {
        адрес: attr('Адрес', { index: 9 }),
        телОрганиз: attr('Телефон', { index: 10 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'фИОКандидата' }),
    иметьПриСебе: attr('Иметь при себе', { index: 6 }),
    организация: belongsTo('i-i-s-proba21-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba21-планир-собес', {
    датаПланСобес: attr('Дата планирования собеседования', { index: 0 }),
    регистАнкеты: belongsTo('i-i-s-proba21-регист-анкеты', 'Ф и о кандидата', {
      фИОКандидата: attr('Ф и о кандидата', { index: 1 }),
      вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', '', {
        должности: attr('', { index: 2 })
      }, { index: -1, hidden: true }),
      номерТелефона: attr('Номер телефона', { index: 3 }),
      элПочта: attr('Эл почта', { index: 4 }),
      организация: belongsTo('i-i-s-proba21-организация', '', {
        адрес: attr('Адрес', { index: 7 }),
        телОрганиз: attr('Телефон', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    иметьПриСебе: attr('Иметь при себе', { index: 5 }),
    организация: belongsTo('i-i-s-proba21-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
