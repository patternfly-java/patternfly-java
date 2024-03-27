goog.module('org.patternfly.component.ValidationStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ValidationStatus>}
 */
class ValidationStatus extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_ValidationStatus;
  /**@type {PredefinedIcon} @nodts*/
  this.f_icon__org_patternfly_component_ValidationStatus;
 }
 /** @nodts @return {!ValidationStatus} */
 static $create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier, /** PredefinedIcon */ icon) {
  let $instance = new ValidationStatus();
  $instance.$ctor__org_patternfly_component_ValidationStatus__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon__void($name, $ordinal, modifier, icon);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ValidationStatus__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier, /** PredefinedIcon */ icon) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_ValidationStatus = modifier;
  this.f_icon__org_patternfly_component_ValidationStatus = icon;
 }
 /** @nodts @return {!ValidationStatus} */
 static m_valueOf__java_lang_String__org_patternfly_component_ValidationStatus(/** string */ name) {
  ValidationStatus.$clinit();
  if ($Equality.$same(ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_, null)) {
   ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_ = /**@type {Map<?string, !ValidationStatus>}*/ ($Enums.createMapFromValues(ValidationStatus.m_values__arrayOf_org_patternfly_component_ValidationStatus()));
  }
  return /**@type {ValidationStatus}*/ ($Enums.getValueFromNameAndMap(name, ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_));
 }
 /** @nodts @return {!Array<!ValidationStatus>} */
 static m_values__arrayOf_org_patternfly_component_ValidationStatus() {
  ValidationStatus.$clinit();
  return /**@type {!Array<ValidationStatus>}*/ ($Arrays.$init([ValidationStatus.$static_default___org_patternfly_component_ValidationStatus, ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus, ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus, ValidationStatus.$static_success__org_patternfly_component_ValidationStatus, ValidationStatus.$static_error__org_patternfly_component_ValidationStatus], ValidationStatus));
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_default___org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_default___org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_indeterminate__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_warning__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_success__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_success__org_patternfly_component_ValidationStatus);
 }
 /** @nodts @return {!ValidationStatus} */
 static get f_error__org_patternfly_component_ValidationStatus() {
  return (ValidationStatus.$clinit(), ValidationStatus.$static_error__org_patternfly_component_ValidationStatus);
 }
 /** @nodts */
 static $clinit() {
  ValidationStatus.$clinit = () =>{};
  ValidationStatus.$loadModules();
  Enum.$clinit();
  ValidationStatus.$static_default___org_patternfly_component_ValidationStatus = ValidationStatus.$create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon($Util.$makeEnumName('default_'), ValidationStatus.$ordinal_default___org_patternfly_component_ValidationStatus, null, fas.m_minus__org_patternfly_icon_PredefinedIcon());
  ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus = ValidationStatus.$create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon($Util.$makeEnumName('indeterminate'), ValidationStatus.$ordinal_indeterminate__org_patternfly_component_ValidationStatus, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indeterminate__org_patternfly_style_Classes), fas.m_minus__org_patternfly_icon_PredefinedIcon());
  ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus = ValidationStatus.$create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon($Util.$makeEnumName('warning'), ValidationStatus.$ordinal_warning__org_patternfly_component_ValidationStatus, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_warning__org_patternfly_style_Classes), fas.m_exclamationTriangle__org_patternfly_icon_PredefinedIcon());
  ValidationStatus.$static_success__org_patternfly_component_ValidationStatus = ValidationStatus.$create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon($Util.$makeEnumName('success'), ValidationStatus.$ordinal_success__org_patternfly_component_ValidationStatus, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_success__org_patternfly_style_Classes), fas.m_checkCircle__org_patternfly_icon_PredefinedIcon());
  ValidationStatus.$static_error__org_patternfly_component_ValidationStatus = ValidationStatus.$create__java_lang_String__int__java_lang_String__org_patternfly_icon_PredefinedIcon($Util.$makeEnumName('error'), ValidationStatus.$ordinal_error__org_patternfly_component_ValidationStatus, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_error__org_patternfly_style_Classes), fas.m_exclamationCircle__org_patternfly_icon_PredefinedIcon());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValidationStatus;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
ValidationStatus.$ordinal_default___org_patternfly_component_ValidationStatus = 0;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_indeterminate__org_patternfly_component_ValidationStatus = 1;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_warning__org_patternfly_component_ValidationStatus = 2;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_success__org_patternfly_component_ValidationStatus = 3;
/**@const {number} @nodts*/
ValidationStatus.$ordinal_error__org_patternfly_component_ValidationStatus = 4;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_default___org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_indeterminate__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_warning__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_success__org_patternfly_component_ValidationStatus;
/**@private {!ValidationStatus} @nodts*/
ValidationStatus.$static_error__org_patternfly_component_ValidationStatus;
/**@type {Map<?string, !ValidationStatus>} @nodts*/
ValidationStatus.f_namesToValuesMap__org_patternfly_component_ValidationStatus_;
$Util.$setClassMetadataForEnum(ValidationStatus, 'org.patternfly.component.ValidationStatus');

exports = ValidationStatus;

//# sourceMappingURL=ValidationStatus.js.map
