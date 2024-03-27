goog.module('org.patternfly.component.switch_.Switch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLLabelElement, Switch>}
 * @implements {HasValue<?boolean>}
 * @implements {Disabled<HTMLLabelElement, Switch>}
 * @implements {Attachable}
 */
class Switch extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelOnElement__org_patternfly_component_switch__Switch_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelOffElement__org_patternfly_component_switch__Switch_;
  /**@type {ChangeHandler<Switch, ?boolean>} @nodts*/
  this.f_changeHandler__org_patternfly_component_switch__Switch_;
 }
 /** @nodts @return {Switch} */
 static m_switch___java_lang_String__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ id, /** ?string */ name) {
  Switch.$clinit();
  return Switch.$create__java_lang_String__java_lang_String__boolean(id, name, false);
 }
 /** @nodts @return {Switch} */
 static m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  Switch.$clinit();
  return Switch.$create__java_lang_String__java_lang_String__boolean(id, name, checked);
 }
 /** @nodts @return {!Switch} */
 static $create__java_lang_String__java_lang_String__boolean(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  Switch.$clinit();
  let $instance = new Switch();
  $instance.$ctor__org_patternfly_component_switch__Switch__java_lang_String__java_lang_String__boolean__void(id, name, checked);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_switch__Switch__java_lang_String__java_lang_String__boolean__void(/** ?string */ id, /** ?string */ name, /** boolean */ checked) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Switch__org_patternfly_component_ComponentType, /**@type {HTMLLabelElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).appendChild(this.f_inputElement__org_patternfly_component_switch__Switch_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_input__org_patternfly_style_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(name), InputElementBuilder)).m_checked__boolean__org_jboss_elemento_TypedBuilder(checked), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement());
  /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).appendChild(this.f_toggleElement__org_patternfly_component_switch__Switch_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).htmlFor = id;
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if ($Equality.$same(this.f_labelOnElement__org_patternfly_component_switch__Switch_, null)) {
   let ariaLabel = this.f_inputElement__org_patternfly_component_switch__Switch_.getAttribute(Aria.f_label__org_patternfly_core_Aria);
   if ($Equality.$same(ariaLabel, null) || j_l_String.m_isEmpty__java_lang_String__boolean(ariaLabel)) {
    Logger.m_missing__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)), 'Switch requires either a label or an aria-label to be specified.');
   }
  }
 }
 /** @nodts @return {Switch} */
 m_disabled__boolean__org_patternfly_component_switch__Switch(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_switch__Switch_.disabled = disabled;
  return this;
 }
 /** @nodts @return {Switch} */
 m_checkIcon__org_patternfly_component_switch__Switch() {
  return this.m_checkIcon__boolean__org_patternfly_component_switch__Switch(true);
 }
 /** @nodts @return {Switch} */
 m_checkIcon__boolean__org_patternfly_component_switch__Switch(/** boolean */ checkIcon) {
  if (checkIcon && $Equality.$same(this.f_iconElement__org_patternfly_component_switch__Switch_, null)) {
   this.f_toggleElement__org_patternfly_component_switch__Switch_.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_check__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconElement__org_patternfly_component_switch__Switch_);
  }
  return this;
 }
 /** @nodts @return {Switch} */
 m_label__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ label) {
  return this.m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch(label, label);
 }
 /** @nodts @return {Switch} */
 m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ labelOn, /** ?string */ labelOff) {
  if ($Equality.$same(this.f_labelOnElement__org_patternfly_component_switch__Switch_, null) && $Equality.$same(this.f_labelOffElement__org_patternfly_component_switch__Switch_, null)) {
   let onId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_inputElement__org_patternfly_component_switch__Switch_.id, /**@type {!Array<?string>}*/ ($Arrays.$init(['on'], j_l_String)));
   let offId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_inputElement__org_patternfly_component_switch__Switch_.id, /**@type {!Array<?string>}*/ ($Arrays.$init(['on'], j_l_String)));
   /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).appendChild(this.f_labelOnElement__org_patternfly_component_switch__Switch_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_on__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(onId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)).appendChild(this.f_labelOffElement__org_patternfly_component_switch__Switch_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_switch___org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_off__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(offId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   this.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_switch__Switch(ChangeHandler.$adapt((/** Event */ e, s, value) =>{
    let s_1 = /**@type {Switch}*/ ($Casts.$to(s, Switch));
    let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
    this.m_inputElement__org_jboss_elemento_InputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1) ? onId : offId);
   }));
  }
  this.f_labelOnElement__org_patternfly_component_switch__Switch_.textContent = labelOn;
  this.f_labelOffElement__org_patternfly_component_switch__Switch_.textContent = labelOff;
  return this;
 }
 /** @nodts @return {Switch} */
 m_reversed__org_patternfly_component_switch__Switch() {
  return this.m_reversed__boolean__org_patternfly_component_switch__Switch(true);
 }
 /** @nodts @return {Switch} */
 m_reversed__boolean__org_patternfly_component_switch__Switch(/** boolean */ reversed) {
  Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLLabelElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)), Classes.f_reverse__org_patternfly_style_Classes, reversed);
  return this;
 }
 /** @nodts @return {Switch} */
 m_value__boolean__org_patternfly_component_switch__Switch(/** boolean */ checked) {
  return this.m_value__boolean__boolean__org_patternfly_component_switch__Switch(checked, false);
 }
 /** @nodts @return {Switch} */
 m_value__boolean__boolean__org_patternfly_component_switch__Switch(/** boolean */ checked, /** boolean */ fireEvent) {
  let changed = this.f_inputElement__org_patternfly_component_switch__Switch_.checked != checked;
  this.f_inputElement__org_patternfly_component_switch__Switch_.checked = checked;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_switch__Switch_, null)) {
   this.f_changeHandler__org_patternfly_component_switch__Switch_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, this.f_inputElement__org_patternfly_component_switch__Switch_.checked);
  }
  return this;
 }
 /** @nodts @return {Switch} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_switch__Switch(/** Consumer<InputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_InputElementBuilder());
  return this;
 }
 /** @nodts @return {Switch} */
 m_that__org_patternfly_component_switch__Switch() {
  return this;
 }
 /** @nodts @return {Switch} */
 m_ariaLabel__java_lang_String__org_patternfly_component_switch__Switch(/** ?string */ label) {
  this.m_inputElement__org_jboss_elemento_InputElementBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Switch} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_switch__Switch(/** ChangeHandler<Switch, ?boolean> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_switch__Switch_ = changeHandler;
  this.f_inputElement__org_patternfly_component_switch__Switch_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_switch__Switch_.checked);
  }));
  return this;
 }
 /** @nodts @return {?boolean} */
 m_value__java_lang_Boolean() {
  return this.f_inputElement__org_patternfly_component_switch__Switch_.checked;
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_inputElement__org_patternfly_component_switch__Switch_));
 }
 //Bridge method.
 /** @final @override @nodts @return {?boolean} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Boolean();
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_switch__Switch();
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Switch}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 //Bridge method.
 /** @final @override @nodts @return {Switch} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_switch__Switch(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Switch} */
 m_disabled__org_patternfly_component_switch__Switch() {
  return /**@type {Switch}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Switch));
 }
 /** @nodts */
 static $clinit() {
  Switch.$clinit = () =>{};
  Switch.$loadModules();
  BaseComponentFlat.$clinit();
  Disabled.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Switch;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
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
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(Switch);
Disabled.$markImplementor(Switch);
Attachable.$markImplementor(Switch);
$Util.$setClassMetadata(Switch, 'org.patternfly.component.switch_.Switch');

exports = Switch;

//# sourceMappingURL=Switch.js.map
