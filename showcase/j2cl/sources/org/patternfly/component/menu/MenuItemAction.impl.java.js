goog.module('org.patternfly.component.menu.MenuItemAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLButtonElement, MenuItemAction>}
 * @implements {WithIcon<HTMLButtonElement, MenuItemAction>}
 */
class MenuItemAction extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_menu_MenuItemAction;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_;
  /**@type {ComponentHandler<MenuItemAction>} @nodts*/
  this.f_handler__org_patternfly_component_menu_MenuItemAction;
  /**@type {MenuItem} @nodts*/
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction;
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ id) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(id, null, false);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** ?string */ id, /** PredefinedIcon */ icon) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(id, icon.m_element__org_jboss_elemento_svg_SVGElement(), false);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(/** ?string */ id, /** Element */ icon) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(id, icon, false);
 }
 /** @nodts @return {MenuItemAction} */
 static m_favoriteMenuItemAction__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ id) {
  MenuItemAction.$clinit();
  return /**@type {MenuItemAction}*/ ($Casts.$to(/**@type {MenuItemAction}*/ ($Casts.$to(MenuItemAction.$create__java_lang_String__elemental2_dom_Element__boolean(id, fas.m_star__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement(), true).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorite__org_patternfly_style_Classes)], j_l_String))), MenuItemAction)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'not starred'), MenuItemAction));
 }
 //Factory method corresponding to constructor 'MenuItemAction(String, Element, boolean)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__java_lang_String__elemental2_dom_Element__boolean(/** ?string */ id, /** Element */ icon, /** boolean */ favorite) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__elemental2_dom_Element__boolean__void(id, icon, favorite);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(String, Element, boolean)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__elemental2_dom_Element__boolean__void(/** ?string */ id, /** Element */ icon, /** boolean */ favorite) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction, /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  this.f_id__org_patternfly_component_menu_MenuItemAction = id;
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))));
  if (!favorite) {
   this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
    if (!$Equality.$same(menu.f_actionHandler__org_patternfly_component_menu_Menu, null)) {
     menu.f_actionHandler__org_patternfly_component_menu_Menu.m_onAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__void(menu, this.f_menuItem__org_patternfly_component_menu_MenuItemAction, this);
    }
   });
  }
 }
 //Factory method corresponding to constructor 'MenuItemAction(Menu, MenuItem, MenuItemAction, HTMLButtonElement)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement(/** Menu */ menu, /** MenuItem */ favoriteItem, /** MenuItemAction */ sourceItemAction, /** HTMLButtonElement */ itemActionElement) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement__void(menu, favoriteItem, sourceItemAction, itemActionElement);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(Menu, MenuItem, MenuItemAction, HTMLButtonElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement__void(/** Menu */ menu, /** MenuItem */ favoriteItem, /** MenuItemAction */ sourceItemAction, /** HTMLButtonElement */ itemActionElement) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction, itemActionElement);
  this.f_id__org_patternfly_component_menu_MenuItemAction = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('fav', /**@type {!Array<?string>}*/ ($Arrays.$init([sourceItemAction.f_id__org_patternfly_component_menu_MenuItemAction], j_l_String)));
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))));
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction = favoriteItem;
  if (!$Equality.$same(sourceItemAction.f_handler__org_patternfly_component_menu_MenuItemAction, null)) {
   this.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItemAction(sourceItemAction.f_handler__org_patternfly_component_menu_MenuItemAction);
  }
 }
 /** @nodts @return {MenuItemAction} */
 m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_menu_MenuItemAction();
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_.appendChild(icon);
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_removeIcon__org_patternfly_component_menu_MenuItemAction() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_);
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_that__org_patternfly_component_menu_MenuItemAction() {
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItemAction(/** ComponentHandler<MenuItemAction> */ handler) {
  this.f_handler__org_patternfly_component_menu_MenuItemAction = handler;
  return /**@type {MenuItemAction}*/ ($Casts.$to(this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  }), MenuItemAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuItemAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItemAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItemAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItemAction(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_menu_MenuItemAction();
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItemAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItemAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItemAction));
 }
 /** @nodts */
 static $clinit() {
  MenuItemAction.$clinit = () =>{};
  MenuItemAction.$loadModules();
  MenuSubComponent.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItemAction;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuItemAction.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItemAction = 'mia';
WithIcon.$markImplementor(MenuItemAction);
$Util.$setClassMetadata(MenuItemAction, 'org.patternfly.component.menu.MenuItemAction');

exports = MenuItemAction;

//# sourceMappingURL=MenuItemAction.js.map
