import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  организация: DS.belongsTo('i-i-s-proba21-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba21-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba21-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba21-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba21-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba21-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba21-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba21-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов', { index: 0 })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba21-рег-результ', {
    датРегРезСобес: attr('Дата регистрации результатов', { index: 0 }),
    организация: belongsTo('i-i-s-proba21-организация', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 1 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba21-планир-собес', 'ФИО', {
      регистАнкеты: belongsTo('i-i-s-proba21-регист-анкеты', '', {
        фИОКандидата: attr('ФИО', { index: 2 }),
        вакантДолжн: belongsTo('i-i-s-proba21-вакант-должн', '', {
          должности: attr('Вакантная должность', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
