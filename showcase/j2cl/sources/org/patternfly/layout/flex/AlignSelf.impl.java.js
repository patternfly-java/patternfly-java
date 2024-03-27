goog.module('org.patternfly.layout.flex.AlignSelf$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<AlignSelf>}
 * @implements {TypedModifier}
 */
class AlignSelf extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_AlignSelf_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_AlignSelf_;
 }
 /** @nodts @return {!AlignSelf} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AlignSelf();
  $instance.$ctor__org_patternfly_layout_flex_AlignSelf__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_AlignSelf__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_AlignSelf_ = value;
  this.f_modifier__org_patternfly_layout_flex_AlignSelf_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_AlignSelf_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_AlignSelf_;
 }
 /** @nodts @return {!AlignSelf} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_AlignSelf(/** string */ name) {
  AlignSelf.$clinit();
  if ($Equality.$same(AlignSelf.f_namesToValuesMap__org_patternfly_layout_flex_AlignSelf_, null)) {
   AlignSelf.f_namesToValuesMap__org_patternfly_layout_flex_AlignSelf_ = /**@type {Map<?string, !AlignSelf>}*/ ($Enums.createMapFromValues(AlignSelf.m_values__arrayOf_org_patternfly_layout_flex_AlignSelf()));
  }
  return /**@type {AlignSelf}*/ ($Enums.getValueFromNameAndMap(name, AlignSelf.f_namesToValuesMap__org_patternfly_layout_flex_AlignSelf_));
 }
 /** @nodts @return {!Array<!AlignSelf>} */
 static m_values__arrayOf_org_patternfly_layout_flex_AlignSelf() {
  AlignSelf.$clinit();
  return /**@type {!Array<AlignSelf>}*/ ($Arrays.$init([AlignSelf.$static_flexStart__org_patternfly_layout_flex_AlignSelf, AlignSelf.$static_flexEnd__org_patternfly_layout_flex_AlignSelf, AlignSelf.$static_center__org_patternfly_layout_flex_AlignSelf, AlignSelf.$static_stretch__org_patternfly_layout_flex_AlignSelf, AlignSelf.$static_baseline__org_patternfly_layout_flex_AlignSelf], AlignSelf));
 }
 /** @nodts @return {!AlignSelf} */
 static get f_flexStart__org_patternfly_layout_flex_AlignSelf() {
  return (AlignSelf.$clinit(), AlignSelf.$static_flexStart__org_patternfly_layout_flex_AlignSelf);
 }
 /** @nodts @return {!AlignSelf} */
 static get f_flexEnd__org_patternfly_layout_flex_AlignSelf() {
  return (AlignSelf.$clinit(), AlignSelf.$static_flexEnd__org_patternfly_layout_flex_AlignSelf);
 }
 /** @nodts @return {!AlignSelf} */
 static get f_center__org_patternfly_layout_flex_AlignSelf() {
  return (AlignSelf.$clinit(), AlignSelf.$static_center__org_patternfly_layout_flex_AlignSelf);
 }
 /** @nodts @return {!AlignSelf} */
 static get f_stretch__org_patternfly_layout_flex_AlignSelf() {
  return (AlignSelf.$clinit(), AlignSelf.$static_stretch__org_patternfly_layout_flex_AlignSelf);
 }
 /** @nodts @return {!AlignSelf} */
 static get f_baseline__org_patternfly_layout_flex_AlignSelf() {
  return (AlignSelf.$clinit(), AlignSelf.$static_baseline__org_patternfly_layout_flex_AlignSelf);
 }
 /** @nodts */
 static $clinit() {
  AlignSelf.$clinit = () =>{};
  AlignSelf.$loadModules();
  Enum.$clinit();
  AlignSelf.$static_flexStart__org_patternfly_layout_flex_AlignSelf = AlignSelf.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexStart'), AlignSelf.$ordinal_flexStart__org_patternfly_layout_flex_AlignSelf, 'align-self-flex-start');
  AlignSelf.$static_flexEnd__org_patternfly_layout_flex_AlignSelf = AlignSelf.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexEnd'), AlignSelf.$ordinal_flexEnd__org_patternfly_layout_flex_AlignSelf, 'align-self-flex-end');
  AlignSelf.$static_center__org_patternfly_layout_flex_AlignSelf = AlignSelf.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('center'), AlignSelf.$ordinal_center__org_patternfly_layout_flex_AlignSelf, 'align-self-center');
  AlignSelf.$static_stretch__org_patternfly_layout_flex_AlignSelf = AlignSelf.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stretch'), AlignSelf.$ordinal_stretch__org_patternfly_layout_flex_AlignSelf, 'align-self-stretch');
  AlignSelf.$static_baseline__org_patternfly_layout_flex_AlignSelf = AlignSelf.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('baseline'), AlignSelf.$ordinal_baseline__org_patternfly_layout_flex_AlignSelf, 'align-self-baseline');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlignSelf;
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
AlignSelf.$ordinal_flexStart__org_patternfly_layout_flex_AlignSelf = 0;
/**@const {number} @nodts*/
AlignSelf.$ordinal_flexEnd__org_patternfly_layout_flex_AlignSelf = 1;
/**@const {number} @nodts*/
AlignSelf.$ordinal_center__org_patternfly_layout_flex_AlignSelf = 2;
/**@const {number} @nodts*/
AlignSelf.$ordinal_stretch__org_patternfly_layout_flex_AlignSelf = 3;
/**@const {number} @nodts*/
AlignSelf.$ordinal_baseline__org_patternfly_layout_flex_AlignSelf = 4;
/**@private {!AlignSelf} @nodts*/
AlignSelf.$static_flexStart__org_patternfly_layout_flex_AlignSelf;
/**@private {!AlignSelf} @nodts*/
AlignSelf.$static_flexEnd__org_patternfly_layout_flex_AlignSelf;
/**@private {!AlignSelf} @nodts*/
AlignSelf.$static_center__org_patternfly_layout_flex_AlignSelf;
/**@private {!AlignSelf} @nodts*/
AlignSelf.$static_stretch__org_patternfly_layout_flex_AlignSelf;
/**@private {!AlignSelf} @nodts*/
AlignSelf.$static_baseline__org_patternfly_layout_flex_AlignSelf;
/**@type {Map<?string, !AlignSelf>} @nodts*/
AlignSelf.f_namesToValuesMap__org_patternfly_layout_flex_AlignSelf_;
TypedModifier.$markImplementor(AlignSelf);
$Util.$setClassMetadataForEnum(AlignSelf, 'org.patternfly.layout.flex.AlignSelf');

exports = AlignSelf;

//# sourceMappingURL=AlignSelf.js.map
