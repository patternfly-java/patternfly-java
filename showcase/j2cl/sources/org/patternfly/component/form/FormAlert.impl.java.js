goog.module('org.patternfly.component.form.FormAlert$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormAlert>}
 */
class FormAlert extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FormAlert} */
 static m_formAlert__org_patternfly_component_form_FormAlert() {
  FormAlert.$clinit();
  return FormAlert.$create__();
 }
 /** @nodts @return {!FormAlert} */
 static $create__() {
  FormAlert.$clinit();
  let $instance = new FormAlert();
  $instance.$ctor__org_patternfly_component_form_FormAlert__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormAlert__void() {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormAlert.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormAlert, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_alert__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FormAlert} */
 m_addAlert__org_patternfly_component_alert_Alert__org_patternfly_component_form_FormAlert(/** Alert */ alert) {
  return /**@type {FormAlert}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), FormAlert));
 }
 /** @nodts @return {FormAlert} */
 m_that__org_patternfly_component_form_FormAlert() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormAlert} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormAlert();
 }
 /** @nodts */
 static $clinit() {
  FormAlert.$clinit = () =>{};
  FormAlert.$loadModules();
  FormSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormAlert;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormAlert.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormAlert = 'fa';
$Util.$setClassMetadata(FormAlert, 'org.patternfly.component.form.FormAlert');

exports = FormAlert;

//# sourceMappingURL=FormAlert.js.map
