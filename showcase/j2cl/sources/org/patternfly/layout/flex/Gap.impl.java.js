goog.module('org.patternfly.layout.flex.Gap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Gap>}
 * @implements {TypedModifier}
 */
class Gap extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_Gap_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_Gap_;
 }
 /** @nodts @return {!Gap} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Gap();
  $instance.$ctor__org_patternfly_layout_flex_Gap__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_Gap__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_Gap_ = value;
  this.f_modifier__org_patternfly_layout_flex_Gap_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_Gap_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_Gap_;
 }
 /** @nodts @return {!Gap} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_Gap(/** string */ name) {
  Gap.$clinit();
  if ($Equality.$same(Gap.f_namesToValuesMap__org_patternfly_layout_flex_Gap_, null)) {
   Gap.f_namesToValuesMap__org_patternfly_layout_flex_Gap_ = /**@type {Map<?string, !Gap>}*/ ($Enums.createMapFromValues(Gap.m_values__arrayOf_org_patternfly_layout_flex_Gap()));
  }
  return /**@type {Gap}*/ ($Enums.getValueFromNameAndMap(name, Gap.f_namesToValuesMap__org_patternfly_layout_flex_Gap_));
 }
 /** @nodts @return {!Array<!Gap>} */
 static m_values__arrayOf_org_patternfly_layout_flex_Gap() {
  Gap.$clinit();
  return /**@type {!Array<Gap>}*/ ($Arrays.$init([Gap.$static_gap__org_patternfly_layout_flex_Gap, Gap.$static_none__org_patternfly_layout_flex_Gap, Gap.$static_xs__org_patternfly_layout_flex_Gap, Gap.$static_sm__org_patternfly_layout_flex_Gap, Gap.$static_md__org_patternfly_layout_flex_Gap, Gap.$static_lg__org_patternfly_layout_flex_Gap, Gap.$static_xl__org_patternfly_layout_flex_Gap, Gap.$static__2xl__org_patternfly_layout_flex_Gap, Gap.$static__3xl__org_patternfly_layout_flex_Gap, Gap.$static__4xl__org_patternfly_layout_flex_Gap], Gap));
 }
 /** @nodts @return {!Gap} */
 static get f_gap__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_gap__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_none__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_none__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_xs__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_xs__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_sm__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_sm__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_md__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_md__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_lg__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_lg__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f_xl__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static_xl__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f__2xl__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static__2xl__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f__3xl__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static__3xl__org_patternfly_layout_flex_Gap);
 }
 /** @nodts @return {!Gap} */
 static get f__4xl__org_patternfly_layout_flex_Gap() {
  return (Gap.$clinit(), Gap.$static__4xl__org_patternfly_layout_flex_Gap);
 }
 /** @nodts */
 static $clinit() {
  Gap.$clinit = () =>{};
  Gap.$loadModules();
  Enum.$clinit();
  Gap.$static_gap__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('gap'), Gap.$ordinal_gap__org_patternfly_layout_flex_Gap, 'gap');
  Gap.$static_none__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), Gap.$ordinal_none__org_patternfly_layout_flex_Gap, 'gap-none');
  Gap.$static_xs__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xs'), Gap.$ordinal_xs__org_patternfly_layout_flex_Gap, 'gap-xs');
  Gap.$static_sm__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Gap.$ordinal_sm__org_patternfly_layout_flex_Gap, 'gap-sm');
  Gap.$static_md__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Gap.$ordinal_md__org_patternfly_layout_flex_Gap, 'gap-md');
  Gap.$static_lg__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Gap.$ordinal_lg__org_patternfly_layout_flex_Gap, 'gap-lg');
  Gap.$static_xl__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Gap.$ordinal_xl__org_patternfly_layout_flex_Gap, 'gap-xl');
  Gap.$static__2xl__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Gap.$ordinal__2xl__org_patternfly_layout_flex_Gap, 'gap-2xl');
  Gap.$static__3xl__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), Gap.$ordinal__3xl__org_patternfly_layout_flex_Gap, 'gap-3xl');
  Gap.$static__4xl__org_patternfly_layout_flex_Gap = Gap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_4xl'), Gap.$ordinal__4xl__org_patternfly_layout_flex_Gap, 'gap-4xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Gap;
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
Gap.$ordinal_gap__org_patternfly_layout_flex_Gap = 0;
/**@const {number} @nodts*/
Gap.$ordinal_none__org_patternfly_layout_flex_Gap = 1;
/**@const {number} @nodts*/
Gap.$ordinal_xs__org_patternfly_layout_flex_Gap = 2;
/**@const {number} @nodts*/
Gap.$ordinal_sm__org_patternfly_layout_flex_Gap = 3;
/**@const {number} @nodts*/
Gap.$ordinal_md__org_patternfly_layout_flex_Gap = 4;
/**@const {number} @nodts*/
Gap.$ordinal_lg__org_patternfly_layout_flex_Gap = 5;
/**@const {number} @nodts*/
Gap.$ordinal_xl__org_patternfly_layout_flex_Gap = 6;
/**@const {number} @nodts*/
Gap.$ordinal__2xl__org_patternfly_layout_flex_Gap = 7;
/**@const {number} @nodts*/
Gap.$ordinal__3xl__org_patternfly_layout_flex_Gap = 8;
/**@const {number} @nodts*/
Gap.$ordinal__4xl__org_patternfly_layout_flex_Gap = 9;
/**@private {!Gap} @nodts*/
Gap.$static_gap__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_none__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_xs__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_sm__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_md__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_lg__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static_xl__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static__2xl__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static__3xl__org_patternfly_layout_flex_Gap;
/**@private {!Gap} @nodts*/
Gap.$static__4xl__org_patternfly_layout_flex_Gap;
/**@type {Map<?string, !Gap>} @nodts*/
Gap.f_namesToValuesMap__org_patternfly_layout_flex_Gap_;
TypedModifier.$markImplementor(Gap);
$Util.$setClassMetadataForEnum(Gap, 'org.patternfly.layout.flex.Gap');

exports = Gap;

//# sourceMappingURL=Gap.js.map
