goog.module('org.patternfly.style.Display$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Display>}
 * @implements {TypedModifier}
 */
class Display extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Display_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Display_;
 }
 /** @nodts @return {!Display} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Display();
  $instance.$ctor__org_patternfly_style_Display__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Display__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Display_ = value;
  this.f_modifier__org_patternfly_style_Display_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Display_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Display_;
 }
 /** @nodts @return {!Display} */
 static m_valueOf__java_lang_String__org_patternfly_style_Display(/** string */ name) {
  Display.$clinit();
  if ($Equality.$same(Display.f_namesToValuesMap__org_patternfly_style_Display_, null)) {
   Display.f_namesToValuesMap__org_patternfly_style_Display_ = /**@type {Map<?string, !Display>}*/ ($Enums.createMapFromValues(Display.m_values__arrayOf_org_patternfly_style_Display()));
  }
  return /**@type {Display}*/ ($Enums.getValueFromNameAndMap(name, Display.f_namesToValuesMap__org_patternfly_style_Display_));
 }
 /** @nodts @return {!Array<!Display>} */
 static m_values__arrayOf_org_patternfly_style_Display() {
  Display.$clinit();
  return /**@type {!Array<Display>}*/ ($Arrays.$init([Display.$static_inline__org_patternfly_style_Display, Display.$static_stack__org_patternfly_style_Display], Display));
 }
 /** @nodts @return {!Display} */
 static get f_inline__org_patternfly_style_Display() {
  return (Display.$clinit(), Display.$static_inline__org_patternfly_style_Display);
 }
 /** @nodts @return {!Display} */
 static get f_stack__org_patternfly_style_Display() {
  return (Display.$clinit(), Display.$static_stack__org_patternfly_style_Display);
 }
 /** @nodts */
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
  Enum.$clinit();
  Display.$static_inline__org_patternfly_style_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('inline'), Display.$ordinal_inline__org_patternfly_style_Display, 'display-inline');
  Display.$static_stack__org_patternfly_style_Display = Display.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('stack'), Display.$ordinal_stack__org_patternfly_style_Display, 'display-stack');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Display;
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
Display.$ordinal_inline__org_patternfly_style_Display = 0;
/**@const {number} @nodts*/
Display.$ordinal_stack__org_patternfly_style_Display = 1;
/**@private {!Display} @nodts*/
Display.$static_inline__org_patternfly_style_Display;
/**@private {!Display} @nodts*/
Display.$static_stack__org_patternfly_style_Display;
/**@type {Map<?string, !Display>} @nodts*/
Display.f_namesToValuesMap__org_patternfly_style_Display_;
TypedModifier.$markImplementor(Display);
$Util.$setClassMetadataForEnum(Display, 'org.patternfly.style.Display');

exports = Display;

//# sourceMappingURL=Display.js.map
