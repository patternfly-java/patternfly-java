goog.module('org.patternfly.component.menu.Dropdown$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const ComponentDelegate = goog.require('org.patternfly.component.ComponentDelegate$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Expandable = goog.forwardDeclare('org.patternfly.component.Expandable$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ComponentDelegate<HTMLElement, Dropdown>}
 * @implements {Closeable<HTMLElement, Dropdown>}
 * @implements {Disabled<HTMLElement, Dropdown>}
 * @implements {Attachable}
 */
class Dropdown extends ComponentDelegate {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_menu_Dropdown_;
  /**@type {MenuToggle} @nodts*/
  this.f_toggle__org_patternfly_component_menu_Dropdown_;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_Dropdown_;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_menu_Dropdown_ = 0;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_menu_Dropdown_ = false;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_menu_Dropdown_ = false;
  /**@type {Placement} @nodts*/
  this.f_placement__org_patternfly_component_menu_Dropdown_;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_menu_Dropdown_;
  /**@type {CloseHandler<Dropdown>} @nodts*/
  this.f_closeHandler__org_patternfly_component_menu_Dropdown_;
 }
 /** @nodts @return {Dropdown} */
 static m_dropdown__org_patternfly_component_menu_Dropdown() {
  Dropdown.$clinit();
  return Dropdown.$create__();
 }
 /** @nodts @return {!Dropdown} */
 static $create__() {
  Dropdown.$clinit();
  let $instance = new Dropdown();
  $instance.$ctor__org_patternfly_component_menu_Dropdown__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_Dropdown__void() {
  this.$ctor__org_patternfly_component_ComponentDelegate__org_patternfly_component_ComponentType__void(ComponentType.f_Dropdown__org_patternfly_component_ComponentType);
  this.f_triggerActions__org_patternfly_component_menu_Dropdown_ = /**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(TriggerAction.f_click__org_patternfly_popper_TriggerAction));
  this.f_flip__org_patternfly_component_menu_Dropdown_ = true;
  this.f_placement__org_patternfly_component_menu_Dropdown_ = Placement.f_bottomStart__org_patternfly_popper_Placement;
  this.f_zIndex__org_patternfly_component_menu_Dropdown_ = Dropdown.f_Z_INDEX__org_patternfly_component_menu_Dropdown;
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_menu_Dropdown_, null) && !$Equality.$same(this.f_menu__org_patternfly_component_menu_Dropdown_, null)) {
   if (this.f_disabled__org_patternfly_component_menu_Dropdown_) {
    this.f_toggle__org_patternfly_component_menu_Dropdown_.m_disabled__boolean__org_patternfly_component_menu_MenuToggle(true);
   }
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_menu__org_patternfly_component_menu_Dropdown_, false);
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_Dropdown_.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_toggle__org_patternfly_component_menu_Dropdown_.m_element__elemental2_dom_HTMLElement());
   this.f_popper__org_patternfly_component_menu_Dropdown_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.f_toggle__org_patternfly_component_menu_Dropdown_.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_menu_Dropdown_.m_element__elemental2_dom_HTMLElement(), $Overlay))).m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_menu_Dropdown_).m_placement__org_patternfly_popper_Placement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_menu_Dropdown_).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_menu_Dropdown_, Placement.f_auto__org_patternfly_popper_Placement) || this.f_flip__org_patternfly_component_menu_Dropdown_), Modifiers.m_widths__org_patternfly_popper_Modifier(), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false)]).m_registerHandler__elemental2_dom_HTMLElement__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_toggle__org_patternfly_component_menu_Dropdown_.f_toggleElement__org_patternfly_component_menu_MenuToggle, this.f_triggerActions__org_patternfly_component_menu_Dropdown_, Consumer.$adapt((arg0) =>{
    let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
    this.m_show__elemental2_dom_Event__void(arg0_1);
   }), Consumer.$adapt((arg0_2) =>{
    let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
    this.m_close__elemental2_dom_Event__void(arg0_3);
   })).m_build__org_patternfly_popper_Popper();
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'No toggle and/or menu defined for dropdown');
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_menu__org_patternfly_component_menu_Dropdown_);
  this.f_popper__org_patternfly_component_menu_Dropdown_.m_cleanup__void();
 }
 /** @nodts @return {Dropdown} */
 m_addToggle__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(/** MenuToggle */ toggle) {
  return this.m_add__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(toggle);
 }
 /** @nodts @return {Dropdown} */
 m_add__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(/** MenuToggle */ toggle) {
  this.f_toggle__org_patternfly_component_menu_Dropdown_ = toggle;
  this.m_delegateTo__elemental2_dom_HTMLElement__void(toggle.m_element__elemental2_dom_HTMLElement());
  Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(toggle.m_element__elemental2_dom_HTMLElement(), this);
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(/** Menu */ menu) {
  return this.m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(menu);
 }
 /** @nodts @return {Dropdown} */
 m_add__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_Dropdown_ = menu;
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_disabled__boolean__org_patternfly_component_menu_Dropdown(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_menu_Dropdown_, null)) {
   this.f_toggle__org_patternfly_component_menu_Dropdown_.m_disabled__boolean__org_patternfly_component_menu_MenuToggle(disabled);
  } else {
   this.f_disabled__org_patternfly_component_menu_Dropdown_ = disabled;
  }
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return $Equality.$same(this.f_toggle__org_patternfly_component_menu_Dropdown_, null) ? this.f_disabled__org_patternfly_component_menu_Dropdown_ : this.f_toggle__org_patternfly_component_menu_Dropdown_.m_isDisabled__boolean();
 }
 /** @nodts @return {Dropdown} */
 m_flip__boolean__org_patternfly_component_menu_Dropdown(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_menu_Dropdown_ = flip;
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_placement__org_patternfly_popper_Placement__org_patternfly_component_menu_Dropdown(/** Placement */ placement) {
  if ($Equality.$same(placement, Placement.f_auto__org_patternfly_popper_Placement)) {
   this.f_flip__org_patternfly_component_menu_Dropdown_ = true;
  }
  this.f_placement__org_patternfly_component_menu_Dropdown_ = placement;
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_zIndex__int__org_patternfly_component_menu_Dropdown(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_menu_Dropdown_ = zIndex;
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_that__org_patternfly_component_menu_Dropdown() {
  return this;
 }
 /** @nodts @return {Dropdown} */
 m_ariaLabel__java_lang_String__org_patternfly_component_menu_Dropdown(/** ?string */ label) {
  return /**@type {Dropdown}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Dropdown));
 }
 /** @nodts @return {Dropdown} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_menu_Dropdown(/** CloseHandler<Dropdown> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_menu_Dropdown_ = closeHandler;
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  this.f_popper__org_patternfly_component_menu_Dropdown_.m_show__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
  }));
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_menu_Dropdown_, event, fireEvent)) {
   this.f_popper__org_patternfly_component_menu_Dropdown_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
    Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.m_element__elemental2_dom_HTMLElement(), null);
    CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_menu_Dropdown_, event, fireEvent);
   }));
  }
 }
 /** @nodts @return {MenuToggle} */
 m_toggle__org_patternfly_component_menu_MenuToggle() {
  return this.f_toggle__org_patternfly_component_menu_Dropdown_;
 }
 /** @nodts @return {Menu} */
 m_menu__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_Dropdown_;
 }
 /** @nodts */
 m_foo__void_$p_org_patternfly_component_menu_Dropdown() {}
 //Bridge method.
 /** @final @override @nodts @return {Dropdown} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_Dropdown();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Dropdown> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_menu_Dropdown(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Dropdown}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Dropdown));
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_Dropdown(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Dropdown} */
 m_disabled__org_patternfly_component_menu_Dropdown() {
  return /**@type {Dropdown}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Dropdown));
 }
 /** @nodts */
 static $clinit() {
  Dropdown.$clinit = () =>{};
  Dropdown.$loadModules();
  ComponentDelegate.$clinit();
  Closeable.$clinit();
  Disabled.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Dropdown;
 }
 
 /** @nodts */
 static $loadModules() {
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Expandable = goog.module.get('org.patternfly.component.Expandable$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  Modifiers = goog.module.get('org.patternfly.popper.Modifiers$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  PopperBuilder = goog.module.get('org.patternfly.popper.PopperBuilder$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
Dropdown.f_Z_INDEX__org_patternfly_component_menu_Dropdown = 9999;
Closeable.$markImplementor(Dropdown);
Disabled.$markImplementor(Dropdown);
Attachable.$markImplementor(Dropdown);
$Util.$setClassMetadata(Dropdown, 'org.patternfly.component.menu.Dropdown');

exports = Dropdown;

//# sourceMappingURL=Dropdown.js.map
