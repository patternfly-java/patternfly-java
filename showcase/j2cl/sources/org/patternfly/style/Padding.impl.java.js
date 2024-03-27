goog.module('org.patternfly.style.Padding$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Padding>}
 * @implements {TypedModifier}
 */
class Padding extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Padding_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Padding_;
 }
 /** @nodts @return {!Padding} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Padding();
  $instance.$ctor__org_patternfly_style_Padding__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Padding__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Padding_ = value;
  this.f_modifier__org_patternfly_style_Padding_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Padding_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Padding_;
 }
 /** @nodts @return {!Padding} */
 static m_valueOf__java_lang_String__org_patternfly_style_Padding(/** string */ name) {
  Padding.$clinit();
  if ($Equality.$same(Padding.f_namesToValuesMap__org_patternfly_style_Padding_, null)) {
   Padding.f_namesToValuesMap__org_patternfly_style_Padding_ = /**@type {Map<?string, !Padding>}*/ ($Enums.createMapFromValues(Padding.m_values__arrayOf_org_patternfly_style_Padding()));
  }
  return /**@type {Padding}*/ ($Enums.getValueFromNameAndMap(name, Padding.f_namesToValuesMap__org_patternfly_style_Padding_));
 }
 /** @nodts @return {!Array<!Padding>} */
 static m_values__arrayOf_org_patternfly_style_Padding() {
  Padding.$clinit();
  return /**@type {!Array<Padding>}*/ ($Arrays.$init([Padding.$static_padding__org_patternfly_style_Padding, Padding.$static_noPadding__org_patternfly_style_Padding], Padding));
 }
 /** @nodts @return {!Padding} */
 static get f_padding__org_patternfly_style_Padding() {
  return (Padding.$clinit(), Padding.$static_padding__org_patternfly_style_Padding);
 }
 /** @nodts @return {!Padding} */
 static get f_noPadding__org_patternfly_style_Padding() {
  return (Padding.$clinit(), Padding.$static_noPadding__org_patternfly_style_Padding);
 }
 /** @nodts */
 static $clinit() {
  Padding.$clinit = () =>{};
  Padding.$loadModules();
  Enum.$clinit();
  Padding.$static_padding__org_patternfly_style_Padding = Padding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('padding'), Padding.$ordinal_padding__org_patternfly_style_Padding, 'padding');
  Padding.$static_noPadding__org_patternfly_style_Padding = Padding.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('noPadding'), Padding.$ordinal_noPadding__org_patternfly_style_Padding, 'no-padding');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Padding;
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
Padding.$ordinal_padding__org_patternfly_style_Padding = 0;
/**@const {number} @nodts*/
Padding.$ordinal_noPadding__org_patternfly_style_Padding = 1;
/**@private {!Padding} @nodts*/
Padding.$static_padding__org_patternfly_style_Padding;
/**@private {!Padding} @nodts*/
Padding.$static_noPadding__org_patternfly_style_Padding;
/**@type {Map<?string, !Padding>} @nodts*/
Padding.f_namesToValuesMap__org_patternfly_style_Padding_;
TypedModifier.$markImplementor(Padding);
$Util.$setClassMetadataForEnum(Padding, 'org.patternfly.style.Padding');

exports = Padding;

//# sourceMappingURL=Padding.js.map
