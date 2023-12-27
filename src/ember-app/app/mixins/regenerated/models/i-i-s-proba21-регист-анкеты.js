import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРегистр: DS.attr('date', { defaultValue() { return new Date(); } }),
  иНН: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  серНомПаспорта: DS.attr('number'),
  снилс: DS.attr('number'),
  фИОКандидата: DS.attr('string'),
  элПочта: DS.attr('string'),
  вакантДолжн: DS.belongsTo('i-i-s-proba21-вакант-должн', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-proba21-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРегистр: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.датаРегистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снилс: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.снилс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОКандидата: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.фИОКандидата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  элПочта: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.элПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вакантДолжн: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.вакантДолжн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba21-регист-анкеты.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистАнкетыE', 'i-i-s-proba21-регист-анкеты', {
    датаРегистр: attr('Дата регистрации', { index: 0 }),
    фИОКандидата: attr('ФИО', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    снилс: attr('Снилс', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    элПочта: attr('Эл почта', { index: 6 }),
    организация: belongsTo('i-i-s-proba21-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', 'Вакантная должность', {
      должности: attr('Вакантная должность', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'должности' })
  });

  modelClass.defineProjection('РегистАнкетыL', 'i-i-s-proba21-регист-анкеты', {
    датаРегистр: attr('Дата регистрации', { index: 0 }),
    фИОКандидата: attr('ФИО', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    снилс: attr('Снилс', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    элПочта: attr('Эл почта', { index: 6 }),
    организация: belongsTo('i-i-s-proba21-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 7 })
    }, { index: -1, hidden: true }),
    вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', 'Вакантная должность', {
      должности: attr('Вакантная должность', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
