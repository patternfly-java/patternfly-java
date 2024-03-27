goog.module('org.patternfly.component.form.CheckboxDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckboxSubComponent = goog.require('org.patternfly.component.form.CheckboxSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CheckboxSubComponent<HTMLElement, CheckboxDescription>}
 */
class CheckboxDescription extends CheckboxSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CheckboxDescription} */
 static m_checkboxDescription__org_patternfly_component_form_CheckboxDescription() {
  CheckboxDescription.$clinit();
  return CheckboxDescription.$create__java_lang_String(null);
 }
 /** @nodts @return {CheckboxDescription} */
 static m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(/** ?string */ description) {
  CheckboxDescription.$clinit();
  return CheckboxDescription.$create__java_lang_String(description);
 }
 /** @nodts @return {!CheckboxDescription} */
 static $create__java_lang_String(/** ?string */ description) {
  CheckboxDescription.$clinit();
  let $instance = new CheckboxDescription();
  $instance.$ctor__org_patternfly_component_form_CheckboxDescription__java_lang_String__void(description);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_CheckboxDescription__java_lang_String__void(/** ?string */ description) {
  this.$ctor__org_patternfly_component_form_CheckboxSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CheckboxDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_CheckboxDescription, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(description, null)) {
   this.m_element__elemental2_dom_HTMLElement().textContent = description;
  }
 }
 /** @nodts @return {CheckboxDescription} */
 m_that__org_patternfly_component_form_CheckboxDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CheckboxDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_CheckboxDescription();
 }
 /** @nodts */
 static $clinit() {
  CheckboxDescription.$clinit = () =>{};
  CheckboxDescription.$loadModules();
  CheckboxSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxDescription;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CheckboxDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_CheckboxDescription = 'cbd';
$Util.$setClassMetadata(CheckboxDescription, 'org.patternfly.component.form.CheckboxDescription');

exports = CheckboxDescription;

//# sourceMappingURL=CheckboxDescription.js.map
