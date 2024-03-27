goog.module('org.patternfly.style.Orientation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Orientation>}
 * @implements {TypedModifier}
 */
class Orientation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Orientation_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Orientation_;
 }
 /** @nodts @return {!Orientation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Orientation();
  $instance.$ctor__org_patternfly_style_Orientation__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Orientation__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Orientation_ = value;
  this.f_modifier__org_patternfly_style_Orientation_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Orientation_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Orientation_;
 }
 /** @nodts @return {!Orientation} */
 static m_valueOf__java_lang_String__org_patternfly_style_Orientation(/** string */ name) {
  Orientation.$clinit();
  if ($Equality.$same(Orientation.f_namesToValuesMap__org_patternfly_style_Orientation_, null)) {
   Orientation.f_namesToValuesMap__org_patternfly_style_Orientation_ = /**@type {Map<?string, !Orientation>}*/ ($Enums.createMapFromValues(Orientation.m_values__arrayOf_org_patternfly_style_Orientation()));
  }
  return /**@type {Orientation}*/ ($Enums.getValueFromNameAndMap(name, Orientation.f_namesToValuesMap__org_patternfly_style_Orientation_));
 }
 /** @nodts @return {!Array<!Orientation>} */
 static m_values__arrayOf_org_patternfly_style_Orientation() {
  Orientation.$clinit();
  return /**@type {!Array<Orientation>}*/ ($Arrays.$init([Orientation.$static_horizontal__org_patternfly_style_Orientation, Orientation.$static_vertical__org_patternfly_style_Orientation], Orientation));
 }
 /** @nodts @return {!Orientation} */
 static get f_horizontal__org_patternfly_style_Orientation() {
  return (Orientation.$clinit(), Orientation.$static_horizontal__org_patternfly_style_Orientation);
 }
 /** @nodts @return {!Orientation} */
 static get f_vertical__org_patternfly_style_Orientation() {
  return (Orientation.$clinit(), Orientation.$static_vertical__org_patternfly_style_Orientation);
 }
 /** @nodts */
 static $clinit() {
  Orientation.$clinit = () =>{};
  Orientation.$loadModules();
  Enum.$clinit();
  Orientation.$static_horizontal__org_patternfly_style_Orientation = Orientation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('horizontal'), Orientation.$ordinal_horizontal__org_patternfly_style_Orientation, 'horizontal');
  Orientation.$static_vertical__org_patternfly_style_Orientation = Orientation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('vertical'), Orientation.$ordinal_vertical__org_patternfly_style_Orientation, 'vertical');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Orientation;
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
Orientation.$ordinal_horizontal__org_patternfly_style_Orientation = 0;
/**@const {number} @nodts*/
Orientation.$ordinal_vertical__org_patternfly_style_Orientation = 1;
/**@private {!Orientation} @nodts*/
Orientation.$static_horizontal__org_patternfly_style_Orientation;
/**@private {!Orientation} @nodts*/
Orientation.$static_vertical__org_patternfly_style_Orientation;
/**@type {Map<?string, !Orientation>} @nodts*/
Orientation.f_namesToValuesMap__org_patternfly_style_Orientation_;
TypedModifier.$markImplementor(Orientation);
$Util.$setClassMetadataForEnum(Orientation, 'org.patternfly.style.Orientation');

exports = Orientation;

//# sourceMappingURL=Orientation.js.map
