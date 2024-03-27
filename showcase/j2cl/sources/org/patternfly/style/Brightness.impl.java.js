goog.module('org.patternfly.style.Brightness$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Brightness>}
 * @implements {TypedModifier}
 */
class Brightness extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Brightness_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Brightness_;
 }
 /** @nodts @return {!Brightness} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Brightness();
  $instance.$ctor__org_patternfly_style_Brightness__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Brightness__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Brightness_ = value;
  this.f_modifier__org_patternfly_style_Brightness_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Brightness_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Brightness_;
 }
 /** @nodts @return {!Brightness} */
 static m_valueOf__java_lang_String__org_patternfly_style_Brightness(/** string */ name) {
  Brightness.$clinit();
  if ($Equality.$same(Brightness.f_namesToValuesMap__org_patternfly_style_Brightness_, null)) {
   Brightness.f_namesToValuesMap__org_patternfly_style_Brightness_ = /**@type {Map<?string, !Brightness>}*/ ($Enums.createMapFromValues(Brightness.m_values__arrayOf_org_patternfly_style_Brightness()));
  }
  return /**@type {Brightness}*/ ($Enums.getValueFromNameAndMap(name, Brightness.f_namesToValuesMap__org_patternfly_style_Brightness_));
 }
 /** @nodts @return {!Array<!Brightness>} */
 static m_values__arrayOf_org_patternfly_style_Brightness() {
  Brightness.$clinit();
  return /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.$static_light__org_patternfly_style_Brightness, Brightness.$static_light100__org_patternfly_style_Brightness, Brightness.$static_light200__org_patternfly_style_Brightness, Brightness.$static_dark__org_patternfly_style_Brightness, Brightness.$static_dark100__org_patternfly_style_Brightness, Brightness.$static_dark200__org_patternfly_style_Brightness], Brightness));
 }
 /** @nodts @return {!Brightness} */
 static get f_light__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_light__org_patternfly_style_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_light100__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_light100__org_patternfly_style_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_light200__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_light200__org_patternfly_style_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_dark__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_dark__org_patternfly_style_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_dark100__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_dark100__org_patternfly_style_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_dark200__org_patternfly_style_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_dark200__org_patternfly_style_Brightness);
 }
 /** @nodts */
 static $clinit() {
  Brightness.$clinit = () =>{};
  Brightness.$loadModules();
  Enum.$clinit();
  Brightness.$static_light__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('light'), Brightness.$ordinal_light__org_patternfly_style_Brightness, 'light');
  Brightness.$static_light100__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('light100'), Brightness.$ordinal_light100__org_patternfly_style_Brightness, 'light-100');
  Brightness.$static_light200__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('light200'), Brightness.$ordinal_light200__org_patternfly_style_Brightness, 'light-200');
  Brightness.$static_dark__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dark'), Brightness.$ordinal_dark__org_patternfly_style_Brightness, 'dark');
  Brightness.$static_dark100__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dark100'), Brightness.$ordinal_dark100__org_patternfly_style_Brightness, 'dark-100');
  Brightness.$static_dark200__org_patternfly_style_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dark200'), Brightness.$ordinal_dark200__org_patternfly_style_Brightness, 'dark-200');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Brightness;
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
Brightness.$ordinal_light__org_patternfly_style_Brightness = 0;
/**@const {number} @nodts*/
Brightness.$ordinal_light100__org_patternfly_style_Brightness = 1;
/**@const {number} @nodts*/
Brightness.$ordinal_light200__org_patternfly_style_Brightness = 2;
/**@const {number} @nodts*/
Brightness.$ordinal_dark__org_patternfly_style_Brightness = 3;
/**@const {number} @nodts*/
Brightness.$ordinal_dark100__org_patternfly_style_Brightness = 4;
/**@const {number} @nodts*/
Brightness.$ordinal_dark200__org_patternfly_style_Brightness = 5;
/**@private {!Brightness} @nodts*/
Brightness.$static_light__org_patternfly_style_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_light100__org_patternfly_style_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_light200__org_patternfly_style_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_dark__org_patternfly_style_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_dark100__org_patternfly_style_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_dark200__org_patternfly_style_Brightness;
/**@type {Map<?string, !Brightness>} @nodts*/
Brightness.f_namesToValuesMap__org_patternfly_style_Brightness_;
TypedModifier.$markImplementor(Brightness);
$Util.$setClassMetadataForEnum(Brightness, 'org.patternfly.style.Brightness');

exports = Brightness;

//# sourceMappingURL=Brightness.js.map
