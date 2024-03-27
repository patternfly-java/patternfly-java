goog.module('org.patternfly.component.drawer.Position$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Position>}
 * @implements {TypedModifier}
 */
class Position extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_drawer_Position_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_drawer_Position_;
 }
 /** @nodts @return {!Position} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Position();
  $instance.$ctor__org_patternfly_component_drawer_Position__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_Position__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_drawer_Position_ = value;
  this.f_modifier__org_patternfly_component_drawer_Position_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_drawer_Position_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_drawer_Position_;
 }
 /** @nodts @return {!Position} */
 static m_valueOf__java_lang_String__org_patternfly_component_drawer_Position(/** string */ name) {
  Position.$clinit();
  if ($Equality.$same(Position.f_namesToValuesMap__org_patternfly_component_drawer_Position_, null)) {
   Position.f_namesToValuesMap__org_patternfly_component_drawer_Position_ = /**@type {Map<?string, !Position>}*/ ($Enums.createMapFromValues(Position.m_values__arrayOf_org_patternfly_component_drawer_Position()));
  }
  return /**@type {Position}*/ ($Enums.getValueFromNameAndMap(name, Position.f_namesToValuesMap__org_patternfly_component_drawer_Position_));
 }
 /** @nodts @return {!Array<!Position>} */
 static m_values__arrayOf_org_patternfly_component_drawer_Position() {
  Position.$clinit();
  return /**@type {!Array<Position>}*/ ($Arrays.$init([Position.$static_start__org_patternfly_component_drawer_Position, Position.$static_end__org_patternfly_component_drawer_Position, Position.$static_bottom__org_patternfly_component_drawer_Position], Position));
 }
 /** @nodts @return {!Position} */
 static get f_start__org_patternfly_component_drawer_Position() {
  return (Position.$clinit(), Position.$static_start__org_patternfly_component_drawer_Position);
 }
 /** @nodts @return {!Position} */
 static get f_end__org_patternfly_component_drawer_Position() {
  return (Position.$clinit(), Position.$static_end__org_patternfly_component_drawer_Position);
 }
 /** @nodts @return {!Position} */
 static get f_bottom__org_patternfly_component_drawer_Position() {
  return (Position.$clinit(), Position.$static_bottom__org_patternfly_component_drawer_Position);
 }
 /** @nodts */
 static $clinit() {
  Position.$clinit = () =>{};
  Position.$loadModules();
  Enum.$clinit();
  Position.$static_start__org_patternfly_component_drawer_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('start'), Position.$ordinal_start__org_patternfly_component_drawer_Position, 'panel-left');
  Position.$static_end__org_patternfly_component_drawer_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('end'), Position.$ordinal_end__org_patternfly_component_drawer_Position, '');
  Position.$static_bottom__org_patternfly_component_drawer_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bottom'), Position.$ordinal_bottom__org_patternfly_component_drawer_Position, 'panel-bottom');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Position;
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
Position.$ordinal_start__org_patternfly_component_drawer_Position = 0;
/**@const {number} @nodts*/
Position.$ordinal_end__org_patternfly_component_drawer_Position = 1;
/**@const {number} @nodts*/
Position.$ordinal_bottom__org_patternfly_component_drawer_Position = 2;
/**@private {!Position} @nodts*/
Position.$static_start__org_patternfly_component_drawer_Position;
/**@private {!Position} @nodts*/
Position.$static_end__org_patternfly_component_drawer_Position;
/**@private {!Position} @nodts*/
Position.$static_bottom__org_patternfly_component_drawer_Position;
/**@type {Map<?string, !Position>} @nodts*/
Position.f_namesToValuesMap__org_patternfly_component_drawer_Position_;
TypedModifier.$markImplementor(Position);
$Util.$setClassMetadataForEnum(Position, 'org.patternfly.component.drawer.Position');

exports = Position;

//# sourceMappingURL=Position.js.map
