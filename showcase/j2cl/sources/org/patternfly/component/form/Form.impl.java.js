goog.module('org.patternfly.component.form.Form$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Horizontal = goog.require('org.patternfly.style.Modifiers.Horizontal$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormActionGroup = goog.forwardDeclare('org.patternfly.component.form.FormActionGroup$impl');
let FormAlert = goog.forwardDeclare('org.patternfly.component.form.FormAlert$impl');
let FormFieldGroup = goog.forwardDeclare('org.patternfly.component.form.FormFieldGroup$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let FormSection = goog.forwardDeclare('org.patternfly.component.form.FormSection$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLFormElement, Form>}
 * @implements {Horizontal<HTMLFormElement, Form>}
 */
class Form extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Form} */
 static m_form__org_patternfly_component_form_Form() {
  Form.$clinit();
  return Form.$create__();
 }
 /** @nodts @return {!Form} */
 static $create__() {
  Form.$clinit();
  let $instance = new Form();
  $instance.$ctor__org_patternfly_component_form_Form__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_Form__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Form__org_patternfly_component_ComponentType, /**@type {HTMLFormElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(Elements.m_form__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((f) =>{
   let f_1 = /**@type {HTMLFormElement}*/ ($Casts.$to(f, $Overlay));
   f_1.noValidate = true;
  })), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_storeComponent__void();
 }
 /** @nodts @return {Form} */
 m_addAlert__org_patternfly_component_form_FormAlert__org_patternfly_component_form_Form(/** FormAlert */ alert) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), Form));
 }
 /** @nodts @return {Form} */
 m_addSection__org_patternfly_component_form_FormSection__org_patternfly_component_form_Form(/** FormSection */ section) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(section), Form));
 }
 /** @nodts @return {Form} */
 m_addFieldGroup__org_patternfly_component_form_FormFieldGroup__org_patternfly_component_form_Form(/** FormFieldGroup */ fieldGroup) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fieldGroup), Form));
 }
 /** @nodts @return {Form} */
 m_addGroup__org_patternfly_component_form_FormGroup__org_patternfly_component_form_Form(/** FormGroup */ group) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), Form));
 }
 /** @nodts @return {Form} */
 m_addActionGroup__org_patternfly_component_form_FormActionGroup__org_patternfly_component_form_Form(/** FormActionGroup */ actionGroup) {
  return /**@type {Form}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actionGroup), Form));
 }
 /** @nodts @return {Form} */
 m_limitWidth__org_patternfly_component_form_Form() {
  return /**@type {Form}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes)], j_l_String))), Form));
 }
 /** @nodts @return {Form} */
 m_that__org_patternfly_component_form_Form() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_Form();
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_horizontal__org_jboss_elemento_TypedBuilder() {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), Form));
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_horizontal__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Form));
 }
 //Default method forwarding stub.
 /** @nodts @return {Form} */
 m_horizontal__org_patternfly_component_form_Form() {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(this), Form));
 }
 //Default method forwarding stub.
 /** @nodts @return {Form} */
 m_horizontal__boolean__org_patternfly_component_form_Form(/** boolean */ arg0) {
  return /**@type {Form}*/ ($Casts.$to(Horizontal.m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Form));
 }
 /** @nodts */
 static $clinit() {
  Form.$clinit = () =>{};
  Form.$loadModules();
  BaseComponent.$clinit();
  Horizontal.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Form;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Horizontal.$markImplementor(Form);
$Util.$setClassMetadata(Form, 'org.patternfly.component.form.Form');

exports = Form;

//# sourceMappingURL=Form.js.map
