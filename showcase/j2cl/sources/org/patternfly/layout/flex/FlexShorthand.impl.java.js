goog.module('org.patternfly.layout.flex.FlexShorthand$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<FlexShorthand>}
 * @implements {TypedModifier}
 */
class FlexShorthand extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_FlexShorthand_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_FlexShorthand_;
 }
 /** @nodts @return {!FlexShorthand} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FlexShorthand();
  $instance.$ctor__org_patternfly_layout_flex_FlexShorthand__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_FlexShorthand__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_FlexShorthand_ = value;
  this.f_modifier__org_patternfly_layout_flex_FlexShorthand_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_FlexShorthand_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_FlexShorthand_;
 }
 /** @nodts @return {!FlexShorthand} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_FlexShorthand(/** string */ name) {
  FlexShorthand.$clinit();
  if ($Equality.$same(FlexShorthand.f_namesToValuesMap__org_patternfly_layout_flex_FlexShorthand_, null)) {
   FlexShorthand.f_namesToValuesMap__org_patternfly_layout_flex_FlexShorthand_ = /**@type {Map<?string, !FlexShorthand>}*/ ($Enums.createMapFromValues(FlexShorthand.m_values__arrayOf_org_patternfly_layout_flex_FlexShorthand()));
  }
  return /**@type {FlexShorthand}*/ ($Enums.getValueFromNameAndMap(name, FlexShorthand.f_namesToValuesMap__org_patternfly_layout_flex_FlexShorthand_));
 }
 /** @nodts @return {!Array<!FlexShorthand>} */
 static m_values__arrayOf_org_patternfly_layout_flex_FlexShorthand() {
  FlexShorthand.$clinit();
  return /**@type {!Array<FlexShorthand>}*/ ($Arrays.$init([FlexShorthand.$static_default___org_patternfly_layout_flex_FlexShorthand, FlexShorthand.$static_none__org_patternfly_layout_flex_FlexShorthand, FlexShorthand.$static__1__org_patternfly_layout_flex_FlexShorthand, FlexShorthand.$static__2__org_patternfly_layout_flex_FlexShorthand, FlexShorthand.$static__3__org_patternfly_layout_flex_FlexShorthand, FlexShorthand.$static__4__org_patternfly_layout_flex_FlexShorthand], FlexShorthand));
 }
 /** @nodts @return {!FlexShorthand} */
 static get f_default___org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static_default___org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts @return {!FlexShorthand} */
 static get f_none__org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static_none__org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts @return {!FlexShorthand} */
 static get f__1__org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static__1__org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts @return {!FlexShorthand} */
 static get f__2__org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static__2__org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts @return {!FlexShorthand} */
 static get f__3__org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static__3__org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts @return {!FlexShorthand} */
 static get f__4__org_patternfly_layout_flex_FlexShorthand() {
  return (FlexShorthand.$clinit(), FlexShorthand.$static__4__org_patternfly_layout_flex_FlexShorthand);
 }
 /** @nodts */
 static $clinit() {
  FlexShorthand.$clinit = () =>{};
  FlexShorthand.$loadModules();
  Enum.$clinit();
  FlexShorthand.$static_default___org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), FlexShorthand.$ordinal_default___org_patternfly_layout_flex_FlexShorthand, 'flex-default');
  FlexShorthand.$static_none__org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('none'), FlexShorthand.$ordinal_none__org_patternfly_layout_flex_FlexShorthand, 'flex-none');
  FlexShorthand.$static__1__org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_1'), FlexShorthand.$ordinal__1__org_patternfly_layout_flex_FlexShorthand, 'flex-1');
  FlexShorthand.$static__2__org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2'), FlexShorthand.$ordinal__2__org_patternfly_layout_flex_FlexShorthand, 'flex-2');
  FlexShorthand.$static__3__org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_3'), FlexShorthand.$ordinal__3__org_patternfly_layout_flex_FlexShorthand, 'flex-3');
  FlexShorthand.$static__4__org_patternfly_layout_flex_FlexShorthand = FlexShorthand.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_4'), FlexShorthand.$ordinal__4__org_patternfly_layout_flex_FlexShorthand, 'flex-4');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlexShorthand;
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
FlexShorthand.$ordinal_default___org_patternfly_layout_flex_FlexShorthand = 0;
/**@const {number} @nodts*/
FlexShorthand.$ordinal_none__org_patternfly_layout_flex_FlexShorthand = 1;
/**@const {number} @nodts*/
FlexShorthand.$ordinal__1__org_patternfly_layout_flex_FlexShorthand = 2;
/**@const {number} @nodts*/
FlexShorthand.$ordinal__2__org_patternfly_layout_flex_FlexShorthand = 3;
/**@const {number} @nodts*/
FlexShorthand.$ordinal__3__org_patternfly_layout_flex_FlexShorthand = 4;
/**@const {number} @nodts*/
FlexShorthand.$ordinal__4__org_patternfly_layout_flex_FlexShorthand = 5;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static_default___org_patternfly_layout_flex_FlexShorthand;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static_none__org_patternfly_layout_flex_FlexShorthand;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static__1__org_patternfly_layout_flex_FlexShorthand;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static__2__org_patternfly_layout_flex_FlexShorthand;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static__3__org_patternfly_layout_flex_FlexShorthand;
/**@private {!FlexShorthand} @nodts*/
FlexShorthand.$static__4__org_patternfly_layout_flex_FlexShorthand;
/**@type {Map<?string, !FlexShorthand>} @nodts*/
FlexShorthand.f_namesToValuesMap__org_patternfly_layout_flex_FlexShorthand_;
TypedModifier.$markImplementor(FlexShorthand);
$Util.$setClassMetadataForEnum(FlexShorthand, 'org.patternfly.layout.flex.FlexShorthand');

exports = FlexShorthand;

//# sourceMappingURL=FlexShorthand.js.map
