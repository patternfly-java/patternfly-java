goog.module('org.patternfly.component.inputgroup.InputGroupItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputGroupSubComponent = goog.require('org.patternfly.component.inputgroup.InputGroupSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let FormControl = goog.forwardDeclare('org.patternfly.component.form.FormControl$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {InputGroupSubComponent<HTMLDivElement, InputGroupItem>}
 * @implements {Disabled<HTMLDivElement, InputGroupItem>}
 * @implements {Fill<HTMLDivElement, InputGroupItem>}
 */
class InputGroupItem extends InputGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Disabled<?, ?>} @nodts*/
  this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_;
  /**@type {FormControl<?, ?>} @nodts*/
  this.f_formControl__org_patternfly_component_inputgroup_InputGroupItem_;
  /**@type {Dropdown} @nodts*/
  this.f_dropdown__org_patternfly_component_inputgroup_InputGroupItem_;
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_inputgroup_InputGroupItem_;
 }
 /** @nodts @return {InputGroupItem} */
 static m_inputGroupItem__org_patternfly_component_inputgroup_InputGroupItem() {
  InputGroupItem.$clinit();
  return InputGroupItem.$create__();
 }
 /** @nodts @return {!InputGroupItem} */
 static $create__() {
  InputGroupItem.$clinit();
  let $instance = new InputGroupItem();
  $instance.$ctor__org_patternfly_component_inputgroup_InputGroupItem__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_inputgroup_InputGroupItem__void() {
  this.$ctor__org_patternfly_component_inputgroup_InputGroupSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(InputGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_inputgroup_InputGroupItem, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_inputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {InputGroupItem} */
 m_addButton__org_patternfly_component_button_Button__org_patternfly_component_inputgroup_InputGroupItem(/** Button */ button) {
  return this.m_add__org_patternfly_component_button_Button__org_patternfly_component_inputgroup_InputGroupItem(button);
 }
 /** @nodts @return {InputGroupItem} */
 m_add__org_patternfly_component_button_Button__org_patternfly_component_inputgroup_InputGroupItem(/** Button */ button) {
  this.f_button__org_patternfly_component_inputgroup_InputGroupItem_ = button;
  this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_ = button;
  return /**@type {InputGroupItem}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(button.m_element__elemental2_dom_HTMLElement()), InputGroupItem));
 }
 /** @nodts @return {InputGroupItem} */
 m_addDropdown__org_patternfly_component_menu_Dropdown__org_patternfly_component_inputgroup_InputGroupItem(/** Dropdown */ dropdown) {
  return this.m_add__org_patternfly_component_menu_Dropdown__org_patternfly_component_inputgroup_InputGroupItem(dropdown);
 }
 /** @nodts @return {InputGroupItem} */
 m_add__org_patternfly_component_menu_Dropdown__org_patternfly_component_inputgroup_InputGroupItem(/** Dropdown */ dropdown) {
  this.f_dropdown__org_patternfly_component_inputgroup_InputGroupItem_ = dropdown;
  this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_ = dropdown;
  return /**@type {InputGroupItem}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(dropdown.m_element__elemental2_dom_HTMLElement()), InputGroupItem));
 }
 /** @nodts @return {InputGroupItem} */
 m_addFormControl__org_patternfly_component_form_FormControl__org_patternfly_component_inputgroup_InputGroupItem(/** FormControl<?, ?> */ formControl) {
  return this.m_add__org_patternfly_component_form_FormControl__org_patternfly_component_inputgroup_InputGroupItem(formControl);
 }
 /** @nodts @return {InputGroupItem} */
 m_add__org_patternfly_component_form_FormControl__org_patternfly_component_inputgroup_InputGroupItem(/** FormControl<?, ?> */ formControl) {
  this.f_formControl__org_patternfly_component_inputgroup_InputGroupItem_ = formControl;
  this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_ = formControl;
  return /**@type {InputGroupItem}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (formControl.m_element__elemental2_dom_HTMLElement())), InputGroupItem));
 }
 /** @nodts @return {InputGroupItem} */
 m_add__org_patternfly_style_Modifiers_Disabled__org_patternfly_component_inputgroup_InputGroupItem(/** Disabled<?, ?> */ component) {
  this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_ = component;
  return /**@type {InputGroupItem}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (component.m_element__elemental2_dom_Element())), InputGroupItem));
 }
 /** @nodts @return {InputGroupItem} */
 m_disabled__boolean__org_patternfly_component_inputgroup_InputGroupItem(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_, null)) {
   this.f_componentImplementingDisabled__org_patternfly_component_inputgroup_InputGroupItem_.m_disabled__boolean__org_jboss_elemento_TypedBuilder(disabled);
  }
  return /**@type {InputGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), InputGroupItem));
 }
 /** @nodts @return {InputGroupItem} */
 m_that__org_patternfly_component_inputgroup_InputGroupItem() {
  return this;
 }
 /** @nodts @return {Button} */
 m_button__org_patternfly_component_button_Button() {
  return this.f_button__org_patternfly_component_inputgroup_InputGroupItem_;
 }
 /** @nodts @return {Dropdown} */
 m_dropdown__org_patternfly_component_menu_Dropdown() {
  return this.f_dropdown__org_patternfly_component_inputgroup_InputGroupItem_;
 }
 /** @nodts @return {FormControl<?, ?>} */
 m_formControl__org_patternfly_component_form_FormControl() {
  return this.f_formControl__org_patternfly_component_inputgroup_InputGroupItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_inputgroup_InputGroupItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), InputGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_inputgroup_InputGroupItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupItem} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), InputGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupItem} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupItem} */
 m_disabled__org_patternfly_component_inputgroup_InputGroupItem() {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), InputGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupItem} */
 m_fill__org_patternfly_component_inputgroup_InputGroupItem() {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), InputGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupItem} */
 m_fill__boolean__org_patternfly_component_inputgroup_InputGroupItem(/** boolean */ arg0) {
  return /**@type {InputGroupItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupItem));
 }
 /** @nodts */
 static $clinit() {
  InputGroupItem.$clinit = () =>{};
  InputGroupItem.$loadModules();
  InputGroupSubComponent.$clinit();
  Disabled.$clinit();
  Fill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputGroupItem;
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
InputGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_inputgroup_InputGroupItem = 'igi';
Disabled.$markImplementor(InputGroupItem);
Fill.$markImplementor(InputGroupItem);
$Util.$setClassMetadata(InputGroupItem, 'org.patternfly.component.inputgroup.InputGroupItem');

exports = InputGroupItem;

//# sourceMappingURL=InputGroupItem.js.map
