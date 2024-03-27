goog.module('org.patternfly.component.form.FormFieldGroupBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let FormFieldGroup = goog.forwardDeclare('org.patternfly.component.form.FormFieldGroup$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormFieldGroupBody>}
 */
class FormFieldGroupBody extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FormFieldGroupBody} */
 static m_formFieldGroupBody__org_patternfly_component_form_FormFieldGroupBody() {
  FormFieldGroupBody.$clinit();
  return FormFieldGroupBody.$create__();
 }
 /** @nodts @return {!FormFieldGroupBody} */
 static $create__() {
  FormFieldGroupBody.$clinit();
  let $instance = new FormFieldGroupBody();
  $instance.$ctor__org_patternfly_component_form_FormFieldGroupBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormFieldGroupBody__void() {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormFieldGroupBody.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroupBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FormFieldGroupBody} */
 m_addFieldGroup__org_patternfly_component_form_FormFieldGroup__org_patternfly_component_form_FormFieldGroupBody(/** FormFieldGroup */ fieldGroup) {
  return /**@type {FormFieldGroupBody}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fieldGroup), FormFieldGroupBody));
 }
 /** @nodts @return {FormFieldGroupBody} */
 m_addGroup__org_patternfly_component_form_FormGroup__org_patternfly_component_form_FormFieldGroupBody(/** FormGroup */ group) {
  return /**@type {FormFieldGroupBody}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), FormFieldGroupBody));
 }
 /** @nodts @return {FormFieldGroupBody} */
 m_that__org_patternfly_component_form_FormFieldGroupBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormFieldGroupBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormFieldGroupBody();
 }
 /** @nodts */
 static $clinit() {
  FormFieldGroupBody.$clinit = () =>{};
  FormFieldGroupBody.$loadModules();
  FormSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormFieldGroupBody;
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
FormFieldGroupBody.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroupBody = 'ffgb';
$Util.$setClassMetadata(FormFieldGroupBody, 'org.patternfly.component.form.FormFieldGroupBody');

exports = FormFieldGroupBody;

//# sourceMappingURL=FormFieldGroupBody.js.map
