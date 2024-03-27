goog.module('org.patternfly.layout.flex.SpaceItems$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<SpaceItems>}
 * @implements {TypedModifier}
 */
class SpaceItems extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_SpaceItems_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_SpaceItems_;
 }
 /** @nodts @return {!SpaceItems} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new SpaceItems();
  $instance.$ctor__org_patternfly_layout_flex_SpaceItems__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_SpaceItems__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_SpaceItems_ = value;
  this.f_modifier__org_patternfly_layout_flex_SpaceItems_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_SpaceItems_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_SpaceItems_;
 }
 /** @nodts @return {!SpaceItems} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_SpaceItems(/** string */ name) {
  SpaceItems.$clinit();
  if ($Equality.$same(SpaceItems.f_namesToValuesMap__org_patternfly_layout_flex_SpaceItems_, null)) {
   SpaceItems.f_namesToValuesMap__org_patternfly_layout_flex_SpaceItems_ = /**@type {Map<?string, !SpaceItems>}*/ ($Enums.createMapFromValues(SpaceItems.m_values__arrayOf_org_patternfly_layout_flex_SpaceItems()));
  }
  return /**@type {SpaceItems}*/ ($Enums.getValueFromNameAndMap(name, SpaceItems.f_namesToValuesMap__org_patternfly_layout_flex_SpaceItems_));
 }
 /** @nodts @return {!Array<!SpaceItems>} */
 static m_values__arrayOf_org_patternfly_layout_flex_SpaceItems() {
  SpaceItems.$clinit();
  return /**@type {!Array<SpaceItems>}*/ ($Arrays.$init([SpaceItems.$static_none__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static_xs__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static_sm__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static_md__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static_lg__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static_xl__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static__2xl__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static__3xl__org_patternfly_layout_flex_SpaceItems, SpaceItems.$static__4xl__org_patternfly_layout_flex_SpaceItems], SpaceItems));
 }
 /** @nodts @return {!SpaceItems} */
 static get f_none__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_none__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f_xs__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_xs__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f_sm__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_sm__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f_md__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_md__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f_lg__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_lg__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f_xl__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static_xl__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f__2xl__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static__2xl__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f__3xl__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static__3xl__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts @return {!SpaceItems} */
 static get f__4xl__org_patternfly_layout_flex_SpaceItems() {
  return (SpaceItems.$clinit(), SpaceItems.$static__4xl__org_patternfly_layout_flex_SpaceItems);
 }
 /** @nodts */
 static $clinit() {
  SpaceItems.$clinit = () =>{};
  SpaceItems.$loadModules();
  Enum.$clinit();
  SpaceItems.$static_none__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), SpaceItems.$ordinal_none__org_patternfly_layout_flex_SpaceItems, 'space-items-none');
  SpaceItems.$static_xs__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xs'), SpaceItems.$ordinal_xs__org_patternfly_layout_flex_SpaceItems, 'space-items-xs');
  SpaceItems.$static_sm__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), SpaceItems.$ordinal_sm__org_patternfly_layout_flex_SpaceItems, 'space-items-sm');
  SpaceItems.$static_md__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), SpaceItems.$ordinal_md__org_patternfly_layout_flex_SpaceItems, 'space-items-md');
  SpaceItems.$static_lg__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), SpaceItems.$ordinal_lg__org_patternfly_layout_flex_SpaceItems, 'space-items-lg');
  SpaceItems.$static_xl__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), SpaceItems.$ordinal_xl__org_patternfly_layout_flex_SpaceItems, 'space-items-xl');
  SpaceItems.$static__2xl__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), SpaceItems.$ordinal__2xl__org_patternfly_layout_flex_SpaceItems, 'space-items-2xl');
  SpaceItems.$static__3xl__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3xl'), SpaceItems.$ordinal__3xl__org_patternfly_layout_flex_SpaceItems, 'space-items-3xl');
  SpaceItems.$static__4xl__org_patternfly_layout_flex_SpaceItems = SpaceItems.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_4xl'), SpaceItems.$ordinal__4xl__org_patternfly_layout_flex_SpaceItems, 'space-items-4xl');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SpaceItems;
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
SpaceItems.$ordinal_none__org_patternfly_layout_flex_SpaceItems = 0;
/**@const {number} @nodts*/
SpaceItems.$ordinal_xs__org_patternfly_layout_flex_SpaceItems = 1;
/**@const {number} @nodts*/
SpaceItems.$ordinal_sm__org_patternfly_layout_flex_SpaceItems = 2;
/**@const {number} @nodts*/
SpaceItems.$ordinal_md__org_patternfly_layout_flex_SpaceItems = 3;
/**@const {number} @nodts*/
SpaceItems.$ordinal_lg__org_patternfly_layout_flex_SpaceItems = 4;
/**@const {number} @nodts*/
SpaceItems.$ordinal_xl__org_patternfly_layout_flex_SpaceItems = 5;
/**@const {number} @nodts*/
SpaceItems.$ordinal__2xl__org_patternfly_layout_flex_SpaceItems = 6;
/**@const {number} @nodts*/
SpaceItems.$ordinal__3xl__org_patternfly_layout_flex_SpaceItems = 7;
/**@const {number} @nodts*/
SpaceItems.$ordinal__4xl__org_patternfly_layout_flex_SpaceItems = 8;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_none__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_xs__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_sm__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_md__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_lg__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static_xl__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static__2xl__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static__3xl__org_patternfly_layout_flex_SpaceItems;
/**@private {!SpaceItems} @nodts*/
SpaceItems.$static__4xl__org_patternfly_layout_flex_SpaceItems;
/**@type {Map<?string, !SpaceItems>} @nodts*/
SpaceItems.f_namesToValuesMap__org_patternfly_layout_flex_SpaceItems_;
TypedModifier.$markImplementor(SpaceItems);
$Util.$setClassMetadataForEnum(SpaceItems, 'org.patternfly.layout.flex.SpaceItems');

exports = SpaceItems;

//# sourceMappingURL=SpaceItems.js.map
