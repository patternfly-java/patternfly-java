goog.module('org.patternfly.layout.flex.FlexWrap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<FlexWrap>}
 * @implements {TypedModifier}
 */
class FlexWrap extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_FlexWrap_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_FlexWrap_;
 }
 /** @nodts @return {!FlexWrap} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FlexWrap();
  $instance.$ctor__org_patternfly_layout_flex_FlexWrap__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_FlexWrap__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_FlexWrap_ = value;
  this.f_modifier__org_patternfly_layout_flex_FlexWrap_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_FlexWrap_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_FlexWrap_;
 }
 /** @nodts @return {!FlexWrap} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_FlexWrap(/** string */ name) {
  FlexWrap.$clinit();
  if ($Equality.$same(FlexWrap.f_namesToValuesMap__org_patternfly_layout_flex_FlexWrap_, null)) {
   FlexWrap.f_namesToValuesMap__org_patternfly_layout_flex_FlexWrap_ = /**@type {Map<?string, !FlexWrap>}*/ ($Enums.createMapFromValues(FlexWrap.m_values__arrayOf_org_patternfly_layout_flex_FlexWrap()));
  }
  return /**@type {FlexWrap}*/ ($Enums.getValueFromNameAndMap(name, FlexWrap.f_namesToValuesMap__org_patternfly_layout_flex_FlexWrap_));
 }
 /** @nodts @return {!Array<!FlexWrap>} */
 static m_values__arrayOf_org_patternfly_layout_flex_FlexWrap() {
  FlexWrap.$clinit();
  return /**@type {!Array<FlexWrap>}*/ ($Arrays.$init([FlexWrap.$static_wrap__org_patternfly_layout_flex_FlexWrap, FlexWrap.$static_wrapReverse__org_patternfly_layout_flex_FlexWrap], FlexWrap));
 }
 /** @nodts @return {!FlexWrap} */
 static get f_wrap__org_patternfly_layout_flex_FlexWrap() {
  return (FlexWrap.$clinit(), FlexWrap.$static_wrap__org_patternfly_layout_flex_FlexWrap);
 }
 /** @nodts @return {!FlexWrap} */
 static get f_wrapReverse__org_patternfly_layout_flex_FlexWrap() {
  return (FlexWrap.$clinit(), FlexWrap.$static_wrapReverse__org_patternfly_layout_flex_FlexWrap);
 }
 /** @nodts */
 static $clinit() {
  FlexWrap.$clinit = () =>{};
  FlexWrap.$loadModules();
  Enum.$clinit();
  FlexWrap.$static_wrap__org_patternfly_layout_flex_FlexWrap = FlexWrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wrap'), FlexWrap.$ordinal_wrap__org_patternfly_layout_flex_FlexWrap, 'wrap');
  FlexWrap.$static_wrapReverse__org_patternfly_layout_flex_FlexWrap = FlexWrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wrapReverse'), FlexWrap.$ordinal_wrapReverse__org_patternfly_layout_flex_FlexWrap, 'wrap-reverse');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlexWrap;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
FlexWrap.$ordinal_wrap__org_patternfly_layout_flex_FlexWrap = 0;
/**@const {number} @nodts*/
FlexWrap.$ordinal_wrapReverse__org_patternfly_layout_flex_FlexWrap = 1;
/**@private {!FlexWrap} @nodts*/
FlexWrap.$static_wrap__org_patternfly_layout_flex_FlexWrap;
/**@private {!FlexWrap} @nodts*/
FlexWrap.$static_wrapReverse__org_patternfly_layout_flex_FlexWrap;
/**@type {Map<?string, !FlexWrap>} @nodts*/
FlexWrap.f_namesToValuesMap__org_patternfly_layout_flex_FlexWrap_;
TypedModifier.$markImplementor(FlexWrap);
$Util.$setClassMetadataForEnum(FlexWrap, 'org.patternfly.layout.flex.FlexWrap');

exports = FlexWrap;

//# sourceMappingURL=FlexWrap.js.map
