goog.module('org.jboss.elemento.InputType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<InputType>}
 */
class InputType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!InputType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new InputType();
  $instance.$ctor__org_jboss_elemento_InputType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_InputType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!InputType} */
 static m_valueOf__java_lang_String__org_jboss_elemento_InputType(/** string */ name) {
  InputType.$clinit();
  if ($Equality.$same(InputType.f_namesToValuesMap__org_jboss_elemento_InputType_, null)) {
   InputType.f_namesToValuesMap__org_jboss_elemento_InputType_ = /**@type {Map<?string, !InputType>}*/ ($Enums.createMapFromValues(InputType.m_values__arrayOf_org_jboss_elemento_InputType()));
  }
  return /**@type {InputType}*/ ($Enums.getValueFromNameAndMap(name, InputType.f_namesToValuesMap__org_jboss_elemento_InputType_));
 }
 /** @nodts @return {!Array<!InputType>} */
 static m_values__arrayOf_org_jboss_elemento_InputType() {
  InputType.$clinit();
  return /**@type {!Array<InputType>}*/ ($Arrays.$init([InputType.f_button__org_jboss_elemento_InputType, InputType.f_checkbox__org_jboss_elemento_InputType, InputType.f_color__org_jboss_elemento_InputType, InputType.f_date__org_jboss_elemento_InputType, InputType.f_datetime__org_jboss_elemento_InputType, InputType.f_email__org_jboss_elemento_InputType, InputType.f_file__org_jboss_elemento_InputType, InputType.f_hidden__org_jboss_elemento_InputType, InputType.f_image__org_jboss_elemento_InputType, InputType.f_month__org_jboss_elemento_InputType, InputType.f_number__org_jboss_elemento_InputType, InputType.f_password__org_jboss_elemento_InputType, InputType.f_radio__org_jboss_elemento_InputType, InputType.f_range__org_jboss_elemento_InputType, InputType.f_reset__org_jboss_elemento_InputType, InputType.f_search__org_jboss_elemento_InputType, InputType.f_select__org_jboss_elemento_InputType, InputType.f_tel__org_jboss_elemento_InputType, InputType.f_text__org_jboss_elemento_InputType, InputType.f_textarea__org_jboss_elemento_InputType, InputType.f_time__org_jboss_elemento_InputType, InputType.f_url__org_jboss_elemento_InputType, InputType.f_week__org_jboss_elemento_InputType], InputType));
 }
 /** @nodts */
 static $clinit() {
  InputType.$clinit = () =>{};
  InputType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
InputType.$ordinal_button__org_jboss_elemento_InputType = 0;
/**@const {number} @nodts*/
InputType.$ordinal_checkbox__org_jboss_elemento_InputType = 1;
/**@const {number} @nodts*/
InputType.$ordinal_color__org_jboss_elemento_InputType = 2;
/**@const {number} @nodts*/
InputType.$ordinal_date__org_jboss_elemento_InputType = 3;
/**@const {number} @nodts*/
InputType.$ordinal_datetime__org_jboss_elemento_InputType = 4;
/**@const {number} @nodts*/
InputType.$ordinal_email__org_jboss_elemento_InputType = 5;
/**@const {number} @nodts*/
InputType.$ordinal_file__org_jboss_elemento_InputType = 6;
/**@const {number} @nodts*/
InputType.$ordinal_hidden__org_jboss_elemento_InputType = 7;
/**@const {number} @nodts*/
InputType.$ordinal_image__org_jboss_elemento_InputType = 8;
/**@const {number} @nodts*/
InputType.$ordinal_month__org_jboss_elemento_InputType = 9;
/**@const {number} @nodts*/
InputType.$ordinal_number__org_jboss_elemento_InputType = 10;
/**@const {number} @nodts*/
InputType.$ordinal_password__org_jboss_elemento_InputType = 11;
/**@const {number} @nodts*/
InputType.$ordinal_radio__org_jboss_elemento_InputType = 12;
/**@const {number} @nodts*/
InputType.$ordinal_range__org_jboss_elemento_InputType = 13;
/**@const {number} @nodts*/
InputType.$ordinal_reset__org_jboss_elemento_InputType = 14;
/**@const {number} @nodts*/
InputType.$ordinal_search__org_jboss_elemento_InputType = 15;
/**@const {number} @nodts*/
InputType.$ordinal_select__org_jboss_elemento_InputType = 16;
/**@const {number} @nodts*/
InputType.$ordinal_tel__org_jboss_elemento_InputType = 17;
/**@const {number} @nodts*/
InputType.$ordinal_text__org_jboss_elemento_InputType = 18;
/**@const {number} @nodts*/
InputType.$ordinal_textarea__org_jboss_elemento_InputType = 19;
/**@const {number} @nodts*/
InputType.$ordinal_time__org_jboss_elemento_InputType = 20;
/**@const {number} @nodts*/
InputType.$ordinal_url__org_jboss_elemento_InputType = 21;
/**@const {number} @nodts*/
InputType.$ordinal_week__org_jboss_elemento_InputType = 22;
/**@const {!InputType} @nodts*/
InputType.f_button__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('button'), InputType.$ordinal_button__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_checkbox__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('checkbox'), InputType.$ordinal_checkbox__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_color__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('color'), InputType.$ordinal_color__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_date__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('date'), InputType.$ordinal_date__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_datetime__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('datetime'), InputType.$ordinal_datetime__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_email__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('email'), InputType.$ordinal_email__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_file__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('file'), InputType.$ordinal_file__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_hidden__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('hidden'), InputType.$ordinal_hidden__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_image__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('image'), InputType.$ordinal_image__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_month__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('month'), InputType.$ordinal_month__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_number__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('number'), InputType.$ordinal_number__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_password__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('password'), InputType.$ordinal_password__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_radio__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('radio'), InputType.$ordinal_radio__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_range__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('range'), InputType.$ordinal_range__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_reset__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('reset'), InputType.$ordinal_reset__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_search__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('search'), InputType.$ordinal_search__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_select__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('select'), InputType.$ordinal_select__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_tel__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('tel'), InputType.$ordinal_tel__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_text__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('text'), InputType.$ordinal_text__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_textarea__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('textarea'), InputType.$ordinal_textarea__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_time__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('time'), InputType.$ordinal_time__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_url__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('url'), InputType.$ordinal_url__org_jboss_elemento_InputType);
/**@const {!InputType} @nodts*/
InputType.f_week__org_jboss_elemento_InputType = /**@pureOrBreakMyCode*/ InputType.$create__java_lang_String__int($Util.$makeEnumName('week'), InputType.$ordinal_week__org_jboss_elemento_InputType);
/**@type {Map<?string, !InputType>} @nodts*/
InputType.f_namesToValuesMap__org_jboss_elemento_InputType_;
$Util.$setClassMetadataForEnum(InputType, 'org.jboss.elemento.InputType');

exports = InputType;

//# sourceMappingURL=InputType.js.map
