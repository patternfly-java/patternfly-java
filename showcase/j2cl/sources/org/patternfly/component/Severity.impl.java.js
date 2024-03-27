goog.module('org.patternfly.component.Severity$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Severity>}
 */
class Severity extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Supplier<PredefinedIcon>} @nodts*/
  this.f_icon__org_patternfly_component_Severity;
  /**@type {Status} @nodts*/
  this.f_status__org_patternfly_component_Severity;
  /**@type {?string} @nodts*/
  this.f_aria__org_patternfly_component_Severity;
 }
 /** @nodts @return {!Severity} */
 static $create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** Supplier<PredefinedIcon> */ icon, /** Status */ status, /** ?string */ aria) {
  let $instance = new Severity();
  $instance.$ctor__org_patternfly_component_Severity__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String__void($name, $ordinal, icon, status, aria);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Severity__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** Supplier<PredefinedIcon> */ icon, /** Status */ status, /** ?string */ aria) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_icon__org_patternfly_component_Severity = icon;
  this.f_status__org_patternfly_component_Severity = status;
  this.f_aria__org_patternfly_component_Severity = aria;
 }
 /** @nodts @return {!Severity} */
 static m_valueOf__java_lang_String__org_patternfly_component_Severity(/** string */ name) {
  Severity.$clinit();
  if ($Equality.$same(Severity.f_namesToValuesMap__org_patternfly_component_Severity_, null)) {
   Severity.f_namesToValuesMap__org_patternfly_component_Severity_ = /**@type {Map<?string, !Severity>}*/ ($Enums.createMapFromValues(Severity.m_values__arrayOf_org_patternfly_component_Severity()));
  }
  return /**@type {Severity}*/ ($Enums.getValueFromNameAndMap(name, Severity.f_namesToValuesMap__org_patternfly_component_Severity_));
 }
 /** @nodts @return {!Array<!Severity>} */
 static m_values__arrayOf_org_patternfly_component_Severity() {
  Severity.$clinit();
  return /**@type {!Array<Severity>}*/ ($Arrays.$init([Severity.$static_custom__org_patternfly_component_Severity, Severity.$static_info__org_patternfly_component_Severity, Severity.$static_success__org_patternfly_component_Severity, Severity.$static_warning__org_patternfly_component_Severity, Severity.$static_danger__org_patternfly_component_Severity], Severity));
 }
 /** @nodts @return {!Severity} */
 static get f_custom__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_custom__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_info__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_info__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_success__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_success__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_warning__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_warning__org_patternfly_component_Severity);
 }
 /** @nodts @return {!Severity} */
 static get f_danger__org_patternfly_component_Severity() {
  return (Severity.$clinit(), Severity.$static_danger__org_patternfly_component_Severity);
 }
 /** @nodts */
 static $clinit() {
  Severity.$clinit = () =>{};
  Severity.$loadModules();
  Enum.$clinit();
  Severity.$static_custom__org_patternfly_component_Severity = Severity.$create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('custom'), Severity.$ordinal_custom__org_patternfly_component_Severity, Supplier.$adapt(() =>{
   return fas.m_bell__org_patternfly_icon_PredefinedIcon();
  }), Status.f_custom__org_patternfly_style_Status, 'custom alert');
  Severity.$static_info__org_patternfly_component_Severity = Severity.$create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('info'), Severity.$ordinal_info__org_patternfly_component_Severity, Supplier.$adapt(() =>{
   return fas.m_infoCircle__org_patternfly_icon_PredefinedIcon();
  }), Status.f_info__org_patternfly_style_Status, 'info alert');
  Severity.$static_success__org_patternfly_component_Severity = Severity.$create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('success'), Severity.$ordinal_success__org_patternfly_component_Severity, Supplier.$adapt(() =>{
   return fas.m_checkCircle__org_patternfly_icon_PredefinedIcon();
  }), Status.f_success__org_patternfly_style_Status, 'success alert');
  Severity.$static_warning__org_patternfly_component_Severity = Severity.$create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('warning'), Severity.$ordinal_warning__org_patternfly_component_Severity, Supplier.$adapt(() =>{
   return fas.m_exclamationTriangle__org_patternfly_icon_PredefinedIcon();
  }), Status.f_warning__org_patternfly_style_Status, 'warning alert');
  Severity.$static_danger__org_patternfly_component_Severity = Severity.$create__java_lang_String__int__java_util_function_Supplier__org_patternfly_style_Status__java_lang_String($Util.$makeEnumName('danger'), Severity.$ordinal_danger__org_patternfly_component_Severity, Supplier.$adapt(() =>{
   return fas.m_exclamationCircle__org_patternfly_icon_PredefinedIcon();
  }), Status.f_danger__org_patternfly_style_Status, 'danger alert');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Severity;
 }
 
 /** @nodts */
 static $loadModules() {
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Severity.$ordinal_custom__org_patternfly_component_Severity = 0;
/**@const {number} @nodts*/
Severity.$ordinal_info__org_patternfly_component_Severity = 1;
/**@const {number} @nodts*/
Severity.$ordinal_success__org_patternfly_component_Severity = 2;
/**@const {number} @nodts*/
Severity.$ordinal_warning__org_patternfly_component_Severity = 3;
/**@const {number} @nodts*/
Severity.$ordinal_danger__org_patternfly_component_Severity = 4;
/**@private {!Severity} @nodts*/
Severity.$static_custom__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_info__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_success__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_warning__org_patternfly_component_Severity;
/**@private {!Severity} @nodts*/
Severity.$static_danger__org_patternfly_component_Severity;
/**@type {Map<?string, !Severity>} @nodts*/
Severity.f_namesToValuesMap__org_patternfly_component_Severity_;
$Util.$setClassMetadataForEnum(Severity, 'org.patternfly.component.Severity');

exports = Severity;

//# sourceMappingURL=Severity.js.map
