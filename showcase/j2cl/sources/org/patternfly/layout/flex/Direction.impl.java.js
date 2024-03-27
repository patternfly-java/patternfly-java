goog.module('org.patternfly.layout.flex.Direction$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Direction>}
 * @implements {TypedModifier}
 */
class Direction extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_Direction_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_Direction_;
 }
 /** @nodts @return {!Direction} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Direction();
  $instance.$ctor__org_patternfly_layout_flex_Direction__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_Direction__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_Direction_ = value;
  this.f_modifier__org_patternfly_layout_flex_Direction_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_Direction_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_Direction_;
 }
 /** @nodts @return {!Direction} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_Direction(/** string */ name) {
  Direction.$clinit();
  if ($Equality.$same(Direction.f_namesToValuesMap__org_patternfly_layout_flex_Direction_, null)) {
   Direction.f_namesToValuesMap__org_patternfly_layout_flex_Direction_ = /**@type {Map<?string, !Direction>}*/ ($Enums.createMapFromValues(Direction.m_values__arrayOf_org_patternfly_layout_flex_Direction()));
  }
  return /**@type {Direction}*/ ($Enums.getValueFromNameAndMap(name, Direction.f_namesToValuesMap__org_patternfly_layout_flex_Direction_));
 }
 /** @nodts @return {!Array<!Direction>} */
 static m_values__arrayOf_org_patternfly_layout_flex_Direction() {
  Direction.$clinit();
  return /**@type {!Array<Direction>}*/ ($Arrays.$init([Direction.$static_column__org_patternfly_layout_flex_Direction, Direction.$static_columnReverse__org_patternfly_layout_flex_Direction, Direction.$static_row__org_patternfly_layout_flex_Direction, Direction.$static_rowReverse__org_patternfly_layout_flex_Direction], Direction));
 }
 /** @nodts @return {!Direction} */
 static get f_column__org_patternfly_layout_flex_Direction() {
  return (Direction.$clinit(), Direction.$static_column__org_patternfly_layout_flex_Direction);
 }
 /** @nodts @return {!Direction} */
 static get f_columnReverse__org_patternfly_layout_flex_Direction() {
  return (Direction.$clinit(), Direction.$static_columnReverse__org_patternfly_layout_flex_Direction);
 }
 /** @nodts @return {!Direction} */
 static get f_row__org_patternfly_layout_flex_Direction() {
  return (Direction.$clinit(), Direction.$static_row__org_patternfly_layout_flex_Direction);
 }
 /** @nodts @return {!Direction} */
 static get f_rowReverse__org_patternfly_layout_flex_Direction() {
  return (Direction.$clinit(), Direction.$static_rowReverse__org_patternfly_layout_flex_Direction);
 }
 /** @nodts */
 static $clinit() {
  Direction.$clinit = () =>{};
  Direction.$loadModules();
  Enum.$clinit();
  Direction.$static_column__org_patternfly_layout_flex_Direction = Direction.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('column'), Direction.$ordinal_column__org_patternfly_layout_flex_Direction, 'column');
  Direction.$static_columnReverse__org_patternfly_layout_flex_Direction = Direction.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('columnReverse'), Direction.$ordinal_columnReverse__org_patternfly_layout_flex_Direction, 'column-reverse');
  Direction.$static_row__org_patternfly_layout_flex_Direction = Direction.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('row'), Direction.$ordinal_row__org_patternfly_layout_flex_Direction, 'row');
  Direction.$static_rowReverse__org_patternfly_layout_flex_Direction = Direction.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('rowReverse'), Direction.$ordinal_rowReverse__org_patternfly_layout_flex_Direction, 'row-reverse');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Direction;
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
Direction.$ordinal_column__org_patternfly_layout_flex_Direction = 0;
/**@const {number} @nodts*/
Direction.$ordinal_columnReverse__org_patternfly_layout_flex_Direction = 1;
/**@const {number} @nodts*/
Direction.$ordinal_row__org_patternfly_layout_flex_Direction = 2;
/**@const {number} @nodts*/
Direction.$ordinal_rowReverse__org_patternfly_layout_flex_Direction = 3;
/**@private {!Direction} @nodts*/
Direction.$static_column__org_patternfly_layout_flex_Direction;
/**@private {!Direction} @nodts*/
Direction.$static_columnReverse__org_patternfly_layout_flex_Direction;
/**@private {!Direction} @nodts*/
Direction.$static_row__org_patternfly_layout_flex_Direction;
/**@private {!Direction} @nodts*/
Direction.$static_rowReverse__org_patternfly_layout_flex_Direction;
/**@type {Map<?string, !Direction>} @nodts*/
Direction.f_namesToValuesMap__org_patternfly_layout_flex_Direction_;
TypedModifier.$markImplementor(Direction);
$Util.$setClassMetadataForEnum(Direction, 'org.patternfly.layout.flex.Direction');

exports = Direction;

//# sourceMappingURL=Direction.js.map
