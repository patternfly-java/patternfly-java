goog.module('org.patternfly.layout.flex.Align$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Align>}
 * @implements {TypedModifier}
 */
class Align extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_flex_Align_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_flex_Align_;
 }
 /** @nodts @return {!Align} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Align();
  $instance.$ctor__org_patternfly_layout_flex_Align__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_flex_Align__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_flex_Align_ = value;
  this.f_modifier__org_patternfly_layout_flex_Align_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_layout_flex_Align_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_layout_flex_Align_;
 }
 /** @nodts @return {!Align} */
 static m_valueOf__java_lang_String__org_patternfly_layout_flex_Align(/** string */ name) {
  Align.$clinit();
  if ($Equality.$same(Align.f_namesToValuesMap__org_patternfly_layout_flex_Align_, null)) {
   Align.f_namesToValuesMap__org_patternfly_layout_flex_Align_ = /**@type {Map<?string, !Align>}*/ ($Enums.createMapFromValues(Align.m_values__arrayOf_org_patternfly_layout_flex_Align()));
  }
  return /**@type {Align}*/ ($Enums.getValueFromNameAndMap(name, Align.f_namesToValuesMap__org_patternfly_layout_flex_Align_));
 }
 /** @nodts @return {!Array<!Align>} */
 static m_values__arrayOf_org_patternfly_layout_flex_Align() {
  Align.$clinit();
  return /**@type {!Array<Align>}*/ ($Arrays.$init([Align.$static_left__org_patternfly_layout_flex_Align, Align.$static_right__org_patternfly_layout_flex_Align], Align));
 }
 /** @nodts @return {!Align} */
 static get f_left__org_patternfly_layout_flex_Align() {
  return (Align.$clinit(), Align.$static_left__org_patternfly_layout_flex_Align);
 }
 /** @nodts @return {!Align} */
 static get f_right__org_patternfly_layout_flex_Align() {
  return (Align.$clinit(), Align.$static_right__org_patternfly_layout_flex_Align);
 }
 /** @nodts */
 static $clinit() {
  Align.$clinit = () =>{};
  Align.$loadModules();
  Enum.$clinit();
  Align.$static_left__org_patternfly_layout_flex_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('left'), Align.$ordinal_left__org_patternfly_layout_flex_Align, 'align-left');
  Align.$static_right__org_patternfly_layout_flex_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('right'), Align.$ordinal_right__org_patternfly_layout_flex_Align, 'align-right');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Align;
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
Align.$ordinal_left__org_patternfly_layout_flex_Align = 0;
/**@const {number} @nodts*/
Align.$ordinal_right__org_patternfly_layout_flex_Align = 1;
/**@private {!Align} @nodts*/
Align.$static_left__org_patternfly_layout_flex_Align;
/**@private {!Align} @nodts*/
Align.$static_right__org_patternfly_layout_flex_Align;
/**@type {Map<?string, !Align>} @nodts*/
Align.f_namesToValuesMap__org_patternfly_layout_flex_Align_;
TypedModifier.$markImplementor(Align);
$Util.$setClassMetadataForEnum(Align, 'org.patternfly.layout.flex.Align');

exports = Align;

//# sourceMappingURL=Align.js.map
