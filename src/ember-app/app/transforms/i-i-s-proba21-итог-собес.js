import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ИтогСобесEnum from '../enums/i-i-s-proba21-итог-собес';

export default FlexberryEnum.extend({
  enum: ИтогСобесEnum,
  sourceType: 'IIS.Proba21.ИтогСобес'
});
