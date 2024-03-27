goog.module('org.patternfly.component.form.FormFieldGroupHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormFieldGroupHeader>}
 */
class FormFieldGroupHeader extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_mainContainer__org_patternfly_component_form_FormFieldGroupHeader_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionContainer__org_patternfly_component_form_FormFieldGroupHeader_;
  /**@type {HTMLElement} @nodts*/
  this.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader;
  /**@type {HTMLElement} @nodts*/
  this.f_descriptionElement__org_patternfly_component_form_FormFieldGroupHeader_;
 }
 /** @nodts @return {FormFieldGroupHeader} */
 static m_formFieldGroupHeader__org_patternfly_component_form_FormFieldGroupHeader() {
  FormFieldGroupHeader.$clinit();
  return FormFieldGroupHeader.$create__();
 }
 /** @nodts @return {!FormFieldGroupHeader} */
 static $create__() {
  FormFieldGroupHeader.$clinit();
  let $instance = new FormFieldGroupHeader();
  $instance.$ctor__org_patternfly_component_form_FormFieldGroupHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormFieldGroupHeader__void() {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormFieldGroupHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroupHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainContainer__org_patternfly_component_form_FormFieldGroupHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {FormFieldGroupHeader} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_component_form_FormFieldGroupHeader(/** Button */ action) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_component_form_FormFieldGroupHeader(action);
 }
 /** @nodts @return {FormFieldGroupHeader} */
 m_add__org_patternfly_component_button_Button__org_patternfly_component_form_FormFieldGroupHeader(/** Button */ action) {
  this.m_failSafeActionContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader().appendChild(action.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {FormFieldGroupHeader} */
 m_title__java_lang_String__org_patternfly_component_form_FormFieldGroupHeader(/** ?string */ title) {
  this.m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader().textContent = title;
  return this;
 }
 /** @nodts @return {FormFieldGroupHeader} */
 m_description__java_lang_String__org_patternfly_component_form_FormFieldGroupHeader(/** ?string */ description) {
  this.m_failSafeDescriptionElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader().textContent = description;
  return this;
 }
 /** @nodts @return {FormFieldGroupHeader} */
 m_that__org_patternfly_component_form_FormFieldGroupHeader() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader() {
  if ($Equality.$same(this.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_mainContainer__org_patternfly_component_form_FormFieldGroupHeader_, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeDescriptionElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader() {
  if ($Equality.$same(this.f_descriptionElement__org_patternfly_component_form_FormFieldGroupHeader_, null)) {
   this.f_mainContainer__org_patternfly_component_form_FormFieldGroupHeader_.appendChild(this.f_descriptionElement__org_patternfly_component_form_FormFieldGroupHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_descriptionElement__org_patternfly_component_form_FormFieldGroupHeader_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeActionContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_FormFieldGroupHeader() {
  if ($Equality.$same(this.f_actionContainer__org_patternfly_component_form_FormFieldGroupHeader_, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_actionContainer__org_patternfly_component_form_FormFieldGroupHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_header__org_patternfly_style_Classes, Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_mainContainer__org_patternfly_component_form_FormFieldGroupHeader_);
  }
  return this.f_actionContainer__org_patternfly_component_form_FormFieldGroupHeader_;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormFieldGroupHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormFieldGroupHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {FormFieldGroupHeader} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_title__java_lang_String__org_patternfly_component_form_FormFieldGroupHeader(arg0);
 }
 /** @nodts */
 static $clinit() {
  FormFieldGroupHeader.$clinit = () =>{};
  FormFieldGroupHeader.$loadModules();
  FormSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormFieldGroupHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
FormFieldGroupHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroupHeader = 'ffgh';
$Util.$setClassMetadata(FormFieldGroupHeader, 'org.patternfly.component.form.FormFieldGroupHeader');

exports = FormFieldGroupHeader;

//# sourceMappingURL=FormFieldGroupHeader.js.map
