goog.module('org.patternfly.component.form.FormActionGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormActionGroup>}
 */
class FormActionGroup extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_actionsContainer__org_patternfly_component_form_FormActionGroup_;
 }
 /** @nodts @return {FormActionGroup} */
 static m_formActionGroup__org_patternfly_component_form_FormActionGroup() {
  FormActionGroup.$clinit();
  return FormActionGroup.$create__();
 }
 /** @nodts @return {!FormActionGroup} */
 static $create__() {
  FormActionGroup.$clinit();
  let $instance = new FormActionGroup();
  $instance.$ctor__org_patternfly_component_form_FormActionGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormActionGroup__void() {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormActionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormActionGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_action__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes, Classes.f_control__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_actionsContainer__org_patternfly_component_form_FormActionGroup_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)));
 }
 /** @nodts @return {FormActionGroup} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_component_form_FormActionGroup(/** Button */ button) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_component_form_FormActionGroup(button);
 }
 /** @nodts @return {FormActionGroup} */
 m_add__org_patternfly_component_button_Button__org_patternfly_component_form_FormActionGroup(/** Button */ button) {
  this.f_actionsContainer__org_patternfly_component_form_FormActionGroup_.appendChild(button.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {FormActionGroup} */
 m_that__org_patternfly_component_form_FormActionGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormActionGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormActionGroup();
 }
 /** @nodts */
 static $clinit() {
  FormActionGroup.$clinit = () =>{};
  FormActionGroup.$loadModules();
  FormSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormActionGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormActionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormActionGroup = 'fag';
$Util.$setClassMetadata(FormActionGroup, 'org.patternfly.component.form.FormActionGroup');

exports = FormActionGroup;

//# sourceMappingURL=FormActionGroup.js.map
