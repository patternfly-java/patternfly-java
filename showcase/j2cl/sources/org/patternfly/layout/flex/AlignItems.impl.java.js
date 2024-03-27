goog.module('org.patternfly.layout.flex.AlignItems$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<AlignItems>}
 * @implements {TypedModifier}
 */
class AlignItems extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_AlignItems_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_AlignItems_;
 }
 /** @nodts @return {!AlignItems} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AlignItems();
  $instance.$ctor__org_patternfly_layout_flex_AlignItems__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_AlignItems__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_AlignItems_ = value;
  this.f_modifier__org_patternfly_layout_flex_AlignItems_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_AlignItems_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_AlignItems_;
 }
 /** @nodts @return {!AlignItems} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_AlignItems(/** string */ name) {
  AlignItems.$clinit();
  if ($Equality.$same(AlignItems.f_namesToValuesMap__org_patternfly_layout_flex_AlignItems_, null)) {
   AlignItems.f_namesToValuesMap__org_patternfly_layout_flex_AlignItems_ = /**@type {Map<?string, !AlignItems>}*/ ($Enums.createMapFromValues(AlignItems.m_values__arrayOf_org_patternfly_layout_flex_AlignItems()));
  }
  return /**@type {AlignItems}*/ ($Enums.getValueFromNameAndMap(name, AlignItems.f_namesToValuesMap__org_patternfly_layout_flex_AlignItems_));
 }
 /** @nodts @return {!Array<!AlignItems>} */
 static m_values__arrayOf_org_patternfly_layout_flex_AlignItems() {
  AlignItems.$clinit();
  return /**@type {!Array<AlignItems>}*/ ($Arrays.$init([AlignItems.$static_flexStart__org_patternfly_layout_flex_AlignItems, AlignItems.$static_flexEnd__org_patternfly_layout_flex_AlignItems, AlignItems.$static_center__org_patternfly_layout_flex_AlignItems, AlignItems.$static_stretch__org_patternfly_layout_flex_AlignItems, AlignItems.$static_baseline__org_patternfly_layout_flex_AlignItems], AlignItems));
 }
 /** @nodts @return {!AlignItems} */
 static get f_flexStart__org_patternfly_layout_flex_AlignItems() {
  return (AlignItems.$clinit(), AlignItems.$static_flexStart__org_patternfly_layout_flex_AlignItems);
 }
 /** @nodts @return {!AlignItems} */
 static get f_flexEnd__org_patternfly_layout_flex_AlignItems() {
  return (AlignItems.$clinit(), AlignItems.$static_flexEnd__org_patternfly_layout_flex_AlignItems);
 }
 /** @nodts @return {!AlignItems} */
 static get f_center__org_patternfly_layout_flex_AlignItems() {
  return (AlignItems.$clinit(), AlignItems.$static_center__org_patternfly_layout_flex_AlignItems);
 }
 /** @nodts @return {!AlignItems} */
 static get f_stretch__org_patternfly_layout_flex_AlignItems() {
  return (AlignItems.$clinit(), AlignItems.$static_stretch__org_patternfly_layout_flex_AlignItems);
 }
 /** @nodts @return {!AlignItems} */
 static get f_baseline__org_patternfly_layout_flex_AlignItems() {
  return (AlignItems.$clinit(), AlignItems.$static_baseline__org_patternfly_layout_flex_AlignItems);
 }
 /** @nodts */
 static $clinit() {
  AlignItems.$clinit = () =>{};
  AlignItems.$loadModules();
  Enum.$clinit();
  AlignItems.$static_flexStart__org_patternfly_layout_flex_AlignItems = AlignItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexStart'), AlignItems.$ordinal_flexStart__org_patternfly_layout_flex_AlignItems, 'align-items-flex-start');
  AlignItems.$static_flexEnd__org_patternfly_layout_flex_AlignItems = AlignItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('flexEnd'), AlignItems.$ordinal_flexEnd__org_patternfly_layout_flex_AlignItems, 'align-items-flex-end');
  AlignItems.$static_center__org_patternfly_layout_flex_AlignItems = AlignItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('center'), AlignItems.$ordinal_center__org_patternfly_layout_flex_AlignItems, 'align-items-center');
  AlignItems.$static_stretch__org_patternfly_layout_flex_AlignItems = AlignItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stretch'), AlignItems.$ordinal_stretch__org_patternfly_layout_flex_AlignItems, 'align-items-stretch');
  AlignItems.$static_baseline__org_patternfly_layout_flex_AlignItems = AlignItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('baseline'), AlignItems.$ordinal_baseline__org_patternfly_layout_flex_AlignItems, 'align-items-baseline');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlignItems;
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
AlignItems.$ordinal_flexStart__org_patternfly_layout_flex_AlignItems = 0;
/**@const {number} @nodts*/
AlignItems.$ordinal_flexEnd__org_patternfly_layout_flex_AlignItems = 1;
/**@const {number} @nodts*/
AlignItems.$ordinal_center__org_patternfly_layout_flex_AlignItems = 2;
/**@const {number} @nodts*/
AlignItems.$ordinal_stretch__org_patternfly_layout_flex_AlignItems = 3;
/**@const {number} @nodts*/
AlignItems.$ordinal_baseline__org_patternfly_layout_flex_AlignItems = 4;
/**@private {!AlignItems} @nodts*/
AlignItems.$static_flexStart__org_patternfly_layout_flex_AlignItems;
/**@private {!AlignItems} @nodts*/
AlignItems.$static_flexEnd__org_patternfly_layout_flex_AlignItems;
/**@private {!AlignItems} @nodts*/
AlignItems.$static_center__org_patternfly_layout_flex_AlignItems;
/**@private {!AlignItems} @nodts*/
AlignItems.$static_stretch__org_patternfly_layout_flex_AlignItems;
/**@private {!AlignItems} @nodts*/
AlignItems.$static_baseline__org_patternfly_layout_flex_AlignItems;
/**@type {Map<?string, !AlignItems>} @nodts*/
AlignItems.f_namesToValuesMap__org_patternfly_layout_flex_AlignItems_;
TypedModifier.$markImplementor(AlignItems);
$Util.$setClassMetadataForEnum(AlignItems, 'org.patternfly.layout.flex.AlignItems');

exports = AlignItems;

//# sourceMappingURL=AlignItems.js.map
