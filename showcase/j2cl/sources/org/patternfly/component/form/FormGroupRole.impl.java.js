goog.module('org.patternfly.component.form.FormGroupRole$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<FormGroupRole>}
 */
class FormGroupRole extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FormGroupRole} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new FormGroupRole();
  $instance.$ctor__org_patternfly_component_form_FormGroupRole__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroupRole__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!FormGroupRole} */
 static m_valueOf__java_lang_String__org_patternfly_component_form_FormGroupRole(/** string */ name) {
  FormGroupRole.$clinit();
  if ($Equality.$same(FormGroupRole.f_namesToValuesMap__org_patternfly_component_form_FormGroupRole_, null)) {
   FormGroupRole.f_namesToValuesMap__org_patternfly_component_form_FormGroupRole_ = /**@type {Map<?string, !FormGroupRole>}*/ ($Enums.createMapFromValues(FormGroupRole.m_values__arrayOf_org_patternfly_component_form_FormGroupRole()));
  }
  return /**@type {FormGroupRole}*/ ($Enums.getValueFromNameAndMap(name, FormGroupRole.f_namesToValuesMap__org_patternfly_component_form_FormGroupRole_));
 }
 /** @nodts @return {!Array<!FormGroupRole>} */
 static m_values__arrayOf_org_patternfly_component_form_FormGroupRole() {
  FormGroupRole.$clinit();
  return /**@type {!Array<FormGroupRole>}*/ ($Arrays.$init([FormGroupRole.f_radiogroup__org_patternfly_component_form_FormGroupRole, FormGroupRole.f_group__org_patternfly_component_form_FormGroupRole], FormGroupRole));
 }
 /** @nodts */
 static $clinit() {
  FormGroupRole.$clinit = () =>{};
  FormGroupRole.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroupRole;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
FormGroupRole.$ordinal_radiogroup__org_patternfly_component_form_FormGroupRole = 0;
/**@const {number} @nodts*/
FormGroupRole.$ordinal_group__org_patternfly_component_form_FormGroupRole = 1;
/**@const {!FormGroupRole} @nodts*/
FormGroupRole.f_radiogroup__org_patternfly_component_form_FormGroupRole = /**@pureOrBreakMyCode*/ FormGroupRole.$create__java_lang_String__int($Util.$makeEnumName('radiogroup'), FormGroupRole.$ordinal_radiogroup__org_patternfly_component_form_FormGroupRole);
/**@const {!FormGroupRole} @nodts*/
FormGroupRole.f_group__org_patternfly_component_form_FormGroupRole = /**@pureOrBreakMyCode*/ FormGroupRole.$create__java_lang_String__int($Util.$makeEnumName('group'), FormGroupRole.$ordinal_group__org_patternfly_component_form_FormGroupRole);
/**@type {Map<?string, !FormGroupRole>} @nodts*/
FormGroupRole.f_namesToValuesMap__org_patternfly_component_form_FormGroupRole_;
$Util.$setClassMetadataForEnum(FormGroupRole, 'org.patternfly.component.form.FormGroupRole');

exports = FormGroupRole;

//# sourceMappingURL=FormGroupRole.js.map
