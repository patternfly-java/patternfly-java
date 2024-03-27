goog.module('org.patternfly.component.form.FormControl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Required = goog.require('org.patternfly.style.Modifiers.Required$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, B
 * @extends {BaseComponent<E, B>}
 * @implements {Disabled<E, B>}
 * @implements {Required<E, B>}
 */
class FormControl extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_form_FormControl;
  /**@type {ValidationStatus} @nodts*/
  this.f_status__org_patternfly_component_form_FormControl;
  /**@type {HTMLElement} @nodts*/
  this.f_utilitiesContainer__org_patternfly_component_form_FormControl;
  /**@type {HTMLElement} @nodts*/
  this.f_validationContainer__org_patternfly_component_form_FormControl_;
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_formControlContainer__org_jboss_elemento_HTMLContainerBuilder() {
  FormControl.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder));
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormControl__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/** ?string */ id, /** E */ element, /** ComponentType */ componentType) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(componentType, element);
  this.f_id__org_patternfly_component_form_FormControl = id;
 }
 /** @nodts @return {B} */
 m_disabled__boolean__org_patternfly_component_BaseComponent(/** boolean */ disabled) {
  this.m_disableInputElement__boolean__void_$pp_org_patternfly_component_form(disabled);
  return /**@type {B}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), BaseComponent));
 }
 /** @nodts @return {B} */
 m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(/** ValidationStatus */ status) {
  if (!$Equality.$same(status, this.f_status__org_patternfly_component_form_FormControl)) {
   if (!$Equality.$same(this.f_status__org_patternfly_component_form_FormControl, null)) {
    if (!$Equality.$same(this.f_status__org_patternfly_component_form_FormControl.f_modifier__org_patternfly_component_ValidationStatus, null)) {
     /**@type {!Element}*/ (this.m_element__elemental2_dom_HTMLElement()).classList.remove(this.f_status__org_patternfly_component_form_FormControl.f_modifier__org_patternfly_component_ValidationStatus);
    }
    if (!$Equality.$same(this.f_status__org_patternfly_component_form_FormControl.f_icon__org_patternfly_component_ValidationStatus, null)) {
     Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_validationContainer__org_patternfly_component_form_FormControl_);
     this.f_validationContainer__org_patternfly_component_form_FormControl_ = null;
    }
   }
   this.f_status__org_patternfly_component_form_FormControl = status;
   if (!$Equality.$same(status.f_modifier__org_patternfly_component_ValidationStatus, null)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([status.f_modifier__org_patternfly_component_ValidationStatus], j_l_String)));
   }
   if (!$Equality.$same(status, ValidationStatus.f_default___org_patternfly_component_ValidationStatus) && !$Equality.$same(status.f_icon__org_patternfly_component_ValidationStatus, null)) {
    this.m_failSafeValidatedContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form().appendChild(status.f_icon__org_patternfly_component_ValidationStatus.m_element__org_jboss_elemento_svg_SVGElement());
   }
  }
  return /**@type {B}*/ ($Casts.$to(this.m_that__org_jboss_elemento_TypedBuilder(), BaseComponent));
 }
 /** @abstract @nodts */
 m_disableInputElement__boolean__void_$pp_org_patternfly_component_form(/** boolean */ disabled) {}
 /** @nodts @return {HTMLElement} */
 m_failSafeUtilitiesContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form() {
  if ($Equality.$same(this.f_utilitiesContainer__org_patternfly_component_form_FormControl, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_utilitiesContainer__org_patternfly_component_form_FormControl = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_utilities__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_utilitiesContainer__org_patternfly_component_form_FormControl;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeValidatedContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form() {
  if ($Equality.$same(this.f_validationContainer__org_patternfly_component_form_FormControl_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_failSafeUtilitiesContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form(), this.f_validationContainer__org_patternfly_component_form_FormControl_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_status__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_validationContainer__org_patternfly_component_form_FormControl_;
 }
 //Bridge method.
 /** @final @override @nodts @return {B} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {B}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), BaseComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {B} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_BaseComponent(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {B} */
 m_required__org_jboss_elemento_TypedBuilder() {
  return /**@type {B}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), BaseComponent));
 }
 //Bridge method.
 /** @final @override @nodts @return {B} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {B}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__boolean__org_jboss_elemento_TypedBuilder(this, arg0), BaseComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {B} */
 m_disabled__org_patternfly_component_BaseComponent() {
  return /**@type {B}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), BaseComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {B} */
 m_required__org_patternfly_component_BaseComponent() {
  return /**@type {B}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), BaseComponent));
 }
 //Default method forwarding stub.
 /** @nodts @return {B} */
 m_required__boolean__org_patternfly_component_BaseComponent(/** boolean */ arg0) {
  return /**@type {B}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_style_Modifiers_Required__boolean__org_jboss_elemento_TypedBuilder(this, arg0), BaseComponent));
 }
 /** @nodts */
 static $clinit() {
  FormControl.$clinit = () =>{};
  FormControl.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  Required.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormControl;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(FormControl);
Required.$markImplementor(FormControl);
$Util.$setClassMetadata(FormControl, 'org.patternfly.component.form.FormControl');

exports = FormControl;

//# sourceMappingURL=FormControl.js.map
