goog.module('org.patternfly.style.Sticky$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Sticky>}
 * @implements {TypedModifier}
 */
class Sticky extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Sticky_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Sticky_;
 }
 /** @nodts @return {!Sticky} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Sticky();
  $instance.$ctor__org_patternfly_style_Sticky__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Sticky__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Sticky_ = value;
  this.f_modifier__org_patternfly_style_Sticky_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Sticky_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Sticky_;
 }
 /** @nodts @return {!Sticky} */
 static m_valueOf__java_lang_String__org_patternfly_style_Sticky(/** string */ name) {
  Sticky.$clinit();
  if ($Equality.$same(Sticky.f_namesToValuesMap__org_patternfly_style_Sticky_, null)) {
   Sticky.f_namesToValuesMap__org_patternfly_style_Sticky_ = /**@type {Map<?string, !Sticky>}*/ ($Enums.createMapFromValues(Sticky.m_values__arrayOf_org_patternfly_style_Sticky()));
  }
  return /**@type {Sticky}*/ ($Enums.getValueFromNameAndMap(name, Sticky.f_namesToValuesMap__org_patternfly_style_Sticky_));
 }
 /** @nodts @return {!Array<!Sticky>} */
 static m_values__arrayOf_org_patternfly_style_Sticky() {
  Sticky.$clinit();
  return /**@type {!Array<Sticky>}*/ ($Arrays.$init([Sticky.$static_top__org_patternfly_style_Sticky, Sticky.$static_bottom__org_patternfly_style_Sticky], Sticky));
 }
 /** @nodts @return {!Sticky} */
 static get f_top__org_patternfly_style_Sticky() {
  return (Sticky.$clinit(), Sticky.$static_top__org_patternfly_style_Sticky);
 }
 /** @nodts @return {!Sticky} */
 static get f_bottom__org_patternfly_style_Sticky() {
  return (Sticky.$clinit(), Sticky.$static_bottom__org_patternfly_style_Sticky);
 }
 /** @nodts */
 static $clinit() {
  Sticky.$clinit = () =>{};
  Sticky.$loadModules();
  Enum.$clinit();
  Sticky.$static_top__org_patternfly_style_Sticky = Sticky.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('top'), Sticky.$ordinal_top__org_patternfly_style_Sticky, 'sticky-top');
  Sticky.$static_bottom__org_patternfly_style_Sticky = Sticky.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bottom'), Sticky.$ordinal_bottom__org_patternfly_style_Sticky, 'sticky-bottom');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Sticky;
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
Sticky.$ordinal_top__org_patternfly_style_Sticky = 0;
/**@const {number} @nodts*/
Sticky.$ordinal_bottom__org_patternfly_style_Sticky = 1;
/**@private {!Sticky} @nodts*/
Sticky.$static_top__org_patternfly_style_Sticky;
/**@private {!Sticky} @nodts*/
Sticky.$static_bottom__org_patternfly_style_Sticky;
/**@type {Map<?string, !Sticky>} @nodts*/
Sticky.f_namesToValuesMap__org_patternfly_style_Sticky_;
TypedModifier.$markImplementor(Sticky);
$Util.$setClassMetadataForEnum(Sticky, 'org.patternfly.style.Sticky');

exports = Sticky;

//# sourceMappingURL=Sticky.js.map
