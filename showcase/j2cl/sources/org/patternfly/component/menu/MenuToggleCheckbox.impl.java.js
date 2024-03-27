goog.module('org.patternfly.component.menu.MenuToggleCheckbox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const MenuToggleSubComponent = goog.require('org.patternfly.component.menu.MenuToggleSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuToggleSubComponent<HTMLElement, MenuToggleCheckbox>}
 * @implements {HasValue<?boolean>}
 * @implements {Disabled<HTMLElement, MenuToggleCheckbox>}
 */
class MenuToggleCheckbox extends MenuToggleSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_;
  /**@type {ChangeHandler<MenuToggleCheckbox, ?boolean>} @nodts*/
  this.f_changeHandler__org_patternfly_component_menu_MenuToggleCheckbox_;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 static m_menuToggleCheckbox__java_lang_String__org_patternfly_component_menu_MenuToggleCheckbox(/** ?string */ text) {
  MenuToggleCheckbox.$clinit();
  return MenuToggleCheckbox.m_menuToggleCheckbox__org_patternfly_component_menu_MenuToggleCheckbox().m_text__java_lang_String__org_patternfly_component_menu_MenuToggleCheckbox(text);
 }
 /** @nodts @return {MenuToggleCheckbox} */
 static m_menuToggleCheckbox__org_patternfly_component_menu_MenuToggleCheckbox() {
  MenuToggleCheckbox.$clinit();
  return MenuToggleCheckbox.$create__();
 }
 /** @nodts @return {!MenuToggleCheckbox} */
 static $create__() {
  MenuToggleCheckbox.$clinit();
  let $instance = new MenuToggleCheckbox();
  $instance.$ctor__org_patternfly_component_menu_MenuToggleCheckbox__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuToggleCheckbox__void() {
  this.$ctor__org_patternfly_component_menu_MenuToggleSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuToggleCheckbox.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuToggleCheckbox, /**@type {HTMLLabelElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_MenuToggle__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['check'], j_l_String)));
  /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).htmlFor = id;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement());
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_disabled__boolean__org_patternfly_component_menu_MenuToggleCheckbox(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.disabled = disabled;
  if (!$Equality.$same(this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_, null)) {
   if (disabled) {
    this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   } else {
    this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes));
   }
  }
  return this;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuToggleCheckbox(/** ?string */ text) {
  this.m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_menu_MenuToggleCheckbox().textContent = text;
  return this;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_value__boolean__org_patternfly_component_menu_MenuToggleCheckbox(/** boolean */ checked) {
  return this.m_value__boolean__boolean__org_patternfly_component_menu_MenuToggleCheckbox(checked, false);
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_value__boolean__boolean__org_patternfly_component_menu_MenuToggleCheckbox(/** boolean */ checked, /** boolean */ fireEvent) {
  let changed = this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.checked != checked;
  this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.checked = checked;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_menu_MenuToggleCheckbox_, null)) {
   this.f_changeHandler__org_patternfly_component_menu_MenuToggleCheckbox_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.checked);
  }
  return this;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_that__org_patternfly_component_menu_MenuToggleCheckbox() {
  return null;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_ariaLabel__java_lang_String__org_patternfly_component_menu_MenuToggleCheckbox(/** ?string */ label) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_, Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {MenuToggleCheckbox} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_menu_MenuToggleCheckbox(/** ChangeHandler<MenuToggleCheckbox, ?boolean> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_menu_MenuToggleCheckbox_ = changeHandler;
  this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.checked);
  }));
  return this;
 }
 /** @nodts @return {?boolean} */
 m_value__java_lang_Boolean() {
  return this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_.checked;
 }
 /** @nodts @return {HTMLInputElement} */
 m_inputElement__elemental2_dom_HTMLInputElement() {
  return this.f_inputElement__org_patternfly_component_menu_MenuToggleCheckbox_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_menu_MenuToggleCheckbox() {
  if ($Equality.$same(this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_textElement__org_patternfly_component_menu_MenuToggleCheckbox_;
 }
 //Bridge method.
 /** @final @override @nodts @return {?boolean} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Boolean();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleCheckbox} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuToggleCheckbox();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleCheckbox} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MenuToggleCheckbox}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggleCheckbox));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleCheckbox} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_MenuToggleCheckbox(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuToggleCheckbox} */
 m_disabled__org_patternfly_component_menu_MenuToggleCheckbox() {
  return /**@type {MenuToggleCheckbox}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggleCheckbox));
 }
 /** @nodts */
 static $clinit() {
  MenuToggleCheckbox.$clinit = () =>{};
  MenuToggleCheckbox.$loadModules();
  MenuToggleSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuToggleCheckbox;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuToggleCheckbox.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuToggleCheckbox = 'mtc';
HasValue.$markImplementor(MenuToggleCheckbox);
Disabled.$markImplementor(MenuToggleCheckbox);
$Util.$setClassMetadata(MenuToggleCheckbox, 'org.patternfly.component.menu.MenuToggleCheckbox');

exports = MenuToggleCheckbox;

//# sourceMappingURL=MenuToggleCheckbox.js.map
