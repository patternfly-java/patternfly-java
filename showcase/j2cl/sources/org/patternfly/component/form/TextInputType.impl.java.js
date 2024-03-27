goog.module('org.patternfly.component.form.TextInputType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<TextInputType>}
 */
class TextInputType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new TextInputType();
  $instance.$ctor__org_patternfly_component_form_TextInputType__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_TextInputType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!TextInputType} */
 static m_valueOf__java_lang_String__org_patternfly_component_form_TextInputType(/** string */ name) {
  TextInputType.$clinit();
  if ($Equality.$same(TextInputType.f_namesToValuesMap__org_patternfly_component_form_TextInputType_, null)) {
   TextInputType.f_namesToValuesMap__org_patternfly_component_form_TextInputType_ = /**@type {Map<?string, !TextInputType>}*/ ($Enums.createMapFromValues(TextInputType.m_values__arrayOf_org_patternfly_component_form_TextInputType()));
  }
  return /**@type {TextInputType}*/ ($Enums.getValueFromNameAndMap(name, TextInputType.f_namesToValuesMap__org_patternfly_component_form_TextInputType_));
 }
 /** @nodts @return {!Array<!TextInputType>} */
 static m_values__arrayOf_org_patternfly_component_form_TextInputType() {
  TextInputType.$clinit();
  return /**@type {!Array<TextInputType>}*/ ($Arrays.$init([TextInputType.f_date__org_patternfly_component_form_TextInputType, TextInputType.f_datetime__org_patternfly_component_form_TextInputType, TextInputType.f_email__org_patternfly_component_form_TextInputType, TextInputType.f_month__org_patternfly_component_form_TextInputType, TextInputType.f_number__org_patternfly_component_form_TextInputType, TextInputType.f_password__org_patternfly_component_form_TextInputType, TextInputType.f_search__org_patternfly_component_form_TextInputType, TextInputType.f_tel__org_patternfly_component_form_TextInputType, TextInputType.f_text__org_patternfly_component_form_TextInputType, TextInputType.f_time__org_patternfly_component_form_TextInputType, TextInputType.f_url__org_patternfly_component_form_TextInputType], TextInputType));
 }
 /** @nodts */
 static $clinit() {
  TextInputType.$clinit = () =>{};
  TextInputType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
TextInputType.$ordinal_date__org_patternfly_component_form_TextInputType = 0;
/**@const {number} @nodts*/
TextInputType.$ordinal_datetime__org_patternfly_component_form_TextInputType = 1;
/**@const {number} @nodts*/
TextInputType.$ordinal_email__org_patternfly_component_form_TextInputType = 2;
/**@const {number} @nodts*/
TextInputType.$ordinal_month__org_patternfly_component_form_TextInputType = 3;
/**@const {number} @nodts*/
TextInputType.$ordinal_number__org_patternfly_component_form_TextInputType = 4;
/**@const {number} @nodts*/
TextInputType.$ordinal_password__org_patternfly_component_form_TextInputType = 5;
/**@const {number} @nodts*/
TextInputType.$ordinal_search__org_patternfly_component_form_TextInputType = 6;
/**@const {number} @nodts*/
TextInputType.$ordinal_tel__org_patternfly_component_form_TextInputType = 7;
/**@const {number} @nodts*/
TextInputType.$ordinal_text__org_patternfly_component_form_TextInputType = 8;
/**@const {number} @nodts*/
TextInputType.$ordinal_time__org_patternfly_component_form_TextInputType = 9;
/**@const {number} @nodts*/
TextInputType.$ordinal_url__org_patternfly_component_form_TextInputType = 10;
/**@const {!TextInputType} @nodts*/
TextInputType.f_date__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('date'), TextInputType.$ordinal_date__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_datetime__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('datetime'), TextInputType.$ordinal_datetime__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_email__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('email'), TextInputType.$ordinal_email__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_month__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('month'), TextInputType.$ordinal_month__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_number__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('number'), TextInputType.$ordinal_number__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_password__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('password'), TextInputType.$ordinal_password__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_search__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('search'), TextInputType.$ordinal_search__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_tel__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('tel'), TextInputType.$ordinal_tel__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_text__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('text'), TextInputType.$ordinal_text__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_time__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('time'), TextInputType.$ordinal_time__org_patternfly_component_form_TextInputType);
/**@const {!TextInputType} @nodts*/
TextInputType.f_url__org_patternfly_component_form_TextInputType = /**@pureOrBreakMyCode*/ TextInputType.$create__java_lang_String__int($Util.$makeEnumName('url'), TextInputType.$ordinal_url__org_patternfly_component_form_TextInputType);
/**@type {Map<?string, !TextInputType>} @nodts*/
TextInputType.f_namesToValuesMap__org_patternfly_component_form_TextInputType_;
$Util.$setClassMetadataForEnum(TextInputType, 'org.patternfly.component.form.TextInputType');

exports = TextInputType;

//# sourceMappingURL=TextInputType.js.map
