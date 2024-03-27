goog.module('org.patternfly.component.form.FormGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormGroupControl = goog.forwardDeclare('org.patternfly.component.form.FormGroupControl$impl');
let FormGroupLabel = goog.forwardDeclare('org.patternfly.component.form.FormGroupLabel$impl');
let FormGroupRole = goog.forwardDeclare('org.patternfly.component.form.FormGroupRole$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormGroup>}
 * @implements {Attachable}
 */
class FormGroup extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_fieldId__org_patternfly_component_form_FormGroup;
  /**@type {boolean} @nodts*/
  this.f_required__org_patternfly_component_form_FormGroup = false;
  /**@type {FormGroupRole} @nodts*/
  this.f_role__org_patternfly_component_form_FormGroup;
 }
 /** @nodts @return {FormGroup} */
 static m_formGroup__org_patternfly_component_form_FormGroup() {
  FormGroup.$clinit();
  return FormGroup.$create__();
 }
 /** @nodts @return {!FormGroup} */
 static $create__() {
  FormGroup.$clinit();
  let $instance = new FormGroup();
  $instance.$ctor__org_patternfly_component_form_FormGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroup__void() {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_fieldId__org_patternfly_component_form_FormGroup = null;
  this.f_required__org_patternfly_component_form_FormGroup = false;
  this.m_storeSubComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (($Equality.$same(this.f_role__org_patternfly_component_form_FormGroup, FormGroupRole.f_radiogroup__org_patternfly_component_form_FormGroupRole) || $Equality.$same(this.f_role__org_patternfly_component_form_FormGroup, FormGroupRole.f_group__org_patternfly_component_form_FormGroupRole)) && $Equality.$same(this.f_fieldId__org_patternfly_component_form_FormGroup, null)) {
   Logger.m_missing__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Form__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Missing field ID for form group with role \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_role__org_patternfly_component_form_FormGroup.name()) + '\'.');
  }
 }
 /** @nodts @return {FormGroup} */
 m_addLabel__org_patternfly_component_form_FormGroupLabel__org_patternfly_component_form_FormGroup(/** FormGroupLabel */ label) {
  return /**@type {FormGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(label), FormGroup));
 }
 /** @nodts @return {FormGroup} */
 m_addControl__org_patternfly_component_form_FormGroupControl__org_patternfly_component_form_FormGroup(/** FormGroupControl */ control) {
  return /**@type {FormGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(control), FormGroup));
 }
 /** @nodts @return {FormGroup} */
 m_fieldId__java_lang_String__org_patternfly_component_form_FormGroup(/** ?string */ id) {
  this.f_fieldId__org_patternfly_component_form_FormGroup = id;
  return this;
 }
 /** @nodts @return {FormGroup} */
 m_required__org_patternfly_component_form_FormGroup() {
  this.f_required__org_patternfly_component_form_FormGroup = true;
  return this;
 }
 /** @nodts @return {FormGroup} */
 m_role__org_patternfly_component_form_FormGroupRole__org_patternfly_component_form_FormGroup(/** FormGroupRole */ role) {
  this.f_role__org_patternfly_component_form_FormGroup = role;
  this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, role.name());
  return this;
 }
 /** @nodts @return {FormGroup} */
 m_that__org_patternfly_component_form_FormGroup() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormGroup();
 }
 /** @nodts */
 static $clinit() {
  FormGroup.$clinit = () =>{};
  FormGroup.$loadModules();
  FormSubComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  FormGroupRole = goog.module.get('org.patternfly.component.form.FormGroupRole$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup = 'fg';
Attachable.$markImplementor(FormGroup);
$Util.$setClassMetadata(FormGroup, 'org.patternfly.component.form.FormGroup');

exports = FormGroup;

//# sourceMappingURL=FormGroup.js.map
