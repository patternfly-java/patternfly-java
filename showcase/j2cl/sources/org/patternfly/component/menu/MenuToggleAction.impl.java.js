goog.module('org.patternfly.component.menu.MenuToggleAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuToggleSubComponent = goog.require('org.patternfly.component.menu.MenuToggleSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuToggleSubComponent<HTMLButtonElement, MenuToggleAction>}
 * @implements {Disabled<HTMLButtonElement, MenuToggleAction>}
 */
class MenuToggleAction extends MenuToggleSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MenuToggleAction} */
 static m_menuToggleAction__java_lang_String__org_patternfly_component_menu_MenuToggleAction(/** ?string */ text) {
  MenuToggleAction.$clinit();
  return MenuToggleAction.$create__java_lang_String(text);
 }
 /** @nodts @return {!MenuToggleAction} */
 static $create__java_lang_String(/** ?string */ text) {
  MenuToggleAction.$clinit();
  let $instance = new MenuToggleAction();
  $instance.$ctor__org_patternfly_component_menu_MenuToggleAction__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuToggleAction__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_menu_MenuToggleSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuToggleAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuToggleAction, /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MenuToggleAction} */
 m_disabled__boolean__org_patternfly_component_menu_MenuToggleAction(/** boolean */ disabled) {
  /**@type {HTMLButtonElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).disabled = disabled;
  return this;
 }
 /** @nodts @return {MenuToggleAction} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuToggleAction(/** ?string */ text) {
  return /**@type {MenuToggleAction}*/ ($Casts.$to(this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), MenuToggleAction));
 }
 /** @nodts @return {MenuToggleAction} */
 m_that__org_patternfly_component_menu_MenuToggleAction() {
  return null;
 }
 /** @nodts @return {MenuToggleAction} */
 m_ariaLabel__java_lang_String__org_patternfly_component_menu_MenuToggleAction(/** ?string */ label) {
  return /**@type {MenuToggleAction}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), MenuToggleAction));
 }
 /** @nodts @return {MenuToggleAction} */
 m_onChange__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuToggleAction(/** ComponentHandler<MenuToggleAction> */ handler) {
  return /**@type {MenuToggleAction}*/ ($Casts.$to(this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  }), MenuToggleAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuToggleAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleAction} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MenuToggleAction}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggleAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggleAction} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_MenuToggleAction(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuToggleAction} */
 m_disabled__org_patternfly_component_menu_MenuToggleAction() {
  return /**@type {MenuToggleAction}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggleAction));
 }
 /** @nodts */
 static $clinit() {
  MenuToggleAction.$clinit = () =>{};
  MenuToggleAction.$loadModules();
  MenuToggleSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuToggleAction;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuToggleAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuToggleAction = 'mta';
Disabled.$markImplementor(MenuToggleAction);
$Util.$setClassMetadata(MenuToggleAction, 'org.patternfly.component.menu.MenuToggleAction');

exports = MenuToggleAction;

//# sourceMappingURL=MenuToggleAction.js.map
