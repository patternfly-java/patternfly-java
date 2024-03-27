goog.module('org.patternfly.component.tabs.OverflowTab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Expandable = goog.forwardDeclare('org.patternfly.component.Expandable$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuItemType = goog.forwardDeclare('org.patternfly.component.menu.MenuItemType$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let Tab = goog.forwardDeclare('org.patternfly.component.tabs.Tab$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, OverflowTab>}
 * @implements {Disabled<HTMLElement, OverflowTab>}
 */
class OverflowTab extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Tab>} @nodts*/
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_button__org_patternfly_component_tabs_OverflowTab_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tabs_OverflowTab_;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_tabs_OverflowTab_;
  /**@type {MenuList} @nodts*/
  this.f_menuList__org_patternfly_component_tabs_OverflowTab_;
  /**@type {number} @nodts*/
  this.f_count__org_patternfly_component_tabs_OverflowTab_ = 0;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_tabs_OverflowTab_;
  /**@type {boolean} @nodts*/
  this.f_showCount__org_patternfly_component_tabs_OverflowTab_ = false;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_tabs_OverflowTab_;
  /**@type {MenuItem} @nodts*/
  this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_;
 }
 /** @nodts @return {OverflowTab} */
 static m_overflowTab__org_patternfly_component_tabs_OverflowTab() {
  OverflowTab.$clinit();
  return OverflowTab.$create__();
 }
 /** @nodts @return {!OverflowTab} */
 static $create__() {
  OverflowTab.$clinit();
  let $instance = new OverflowTab();
  $instance.$ctor__org_patternfly_component_tabs_OverflowTab__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_OverflowTab__void() {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(OverflowTab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_OverflowTab, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Tabs__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['overflow'], j_l_String)))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'presentation'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_ = /**@type {!LinkedHashMap<?string, Tab>}*/ (LinkedHashMap.$create__());
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_tabs_OverflowTab_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'tab'), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_style_Classes, 'menu'), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_tabs_OverflowTab_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_tabs_OverflowTab_ = Menu.m_menu__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(SelectHandler.$adapt((/** Event */ event, menuItem, /** boolean */ selected) =>{
   let menuItem_1 = /**@type {MenuItem}*/ ($Casts.$to(menuItem, MenuItem));
   this.m_select__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_tabs_OverflowTab(menuItem_1);
  })).m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(this.f_menuList__org_patternfly_component_tabs_OverflowTab_ = MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_menu_MenuList(this.f_tabs__org_patternfly_component_tabs_OverflowTab_.values(), j_u_function_Function.$adapt((tab) =>{
   let tab_1 = /**@type {Tab}*/ ($Casts.$to(tab, Tab));
   return MenuItem.m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_menu_MenuItem(tab_1.f_id__org_patternfly_component_tabs_Tab, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType).m_text__java_lang_String__org_patternfly_component_menu_MenuItem(tab_1.m_text__java_lang_String());
  })))));
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_menu__org_patternfly_component_tabs_OverflowTab_, false);
  this.f_popper__org_patternfly_component_tabs_OverflowTab_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(ComponentType.f_Tabs__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_menu__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_zIndex__int__org_patternfly_popper_PopperBuilder(9999).m_placement__org_patternfly_popper_Placement__org_patternfly_popper_PopperBuilder(Placement.f_bottomStart__org_patternfly_popper_Placement).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier(true), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false)]).m_registerHandler__elemental2_dom_HTMLElement__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(TriggerAction.f_click__org_patternfly_popper_TriggerAction)), Consumer.$adapt((arg0) =>{
   let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
   this.m_show__elemental2_dom_Event__void_$p_org_patternfly_component_tabs_OverflowTab(arg0_1);
  }), Consumer.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
   this.m_close__elemental2_dom_Event__void_$p_org_patternfly_component_tabs_OverflowTab(arg0_3);
  })).m_build__org_patternfly_popper_Popper();
 }
 /** @nodts */
 m_detach__void_$pp_org_patternfly_component_tabs() {
  if (!$Equality.$same(this.f_popper__org_patternfly_component_tabs_OverflowTab_, null)) {
   this.f_popper__org_patternfly_component_tabs_OverflowTab_.m_cleanup__void();
  }
 }
 /** @nodts @return {OverflowTab} */
 m_that__org_patternfly_component_tabs_OverflowTab() {
  return this;
 }
 /** @nodts */
 m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ label) {
  this.f_button__org_patternfly_component_tabs_OverflowTab_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
 }
 /** @nodts */
 m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ text) {
  this.f_text__org_patternfly_component_tabs_OverflowTab_ = text;
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_showCount__boolean__void_$pp_org_patternfly_component_tabs(/** boolean */ showCount) {
  this.f_showCount__org_patternfly_component_tabs_OverflowTab_ = showCount;
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_update__java_util_List__void_$pp_org_patternfly_component_tabs(/** List<Tab> */ overflowTabs) {
  this.f_tabs__org_patternfly_component_tabs_OverflowTab_.clear();
  this.f_menuList__org_patternfly_component_tabs_OverflowTab_.m_clear__void();
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this, !overflowTabs.isEmpty());
  if (!overflowTabs.isEmpty()) {
   this.f_count__org_patternfly_component_tabs_OverflowTab_ = overflowTabs.size();
   this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
   for (let $iterator = overflowTabs.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     this.f_tabs__org_patternfly_component_tabs_OverflowTab_.put(tab.f_id__org_patternfly_component_tabs_Tab, tab);
    }
   }
   this.f_menuList__org_patternfly_component_tabs_OverflowTab_.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_menu_MenuList(overflowTabs, j_u_function_Function.$adapt((tab_1) =>{
    let tab_2 = /**@type {Tab}*/ ($Casts.$to(tab_1, Tab));
    return MenuItem.m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_menu_MenuItem(tab_2.f_id__org_patternfly_component_tabs_Tab, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType).m_text__java_lang_String__org_patternfly_component_menu_MenuItem(tab_2.m_text__java_lang_String());
   }));
  }
 }
 /** @nodts */
 m_unselect__void_$pp_org_patternfly_component_tabs() {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
  if (!$Equality.$same(this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_, null)) {
   this.f_menu__org_patternfly_component_tabs_OverflowTab_.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_, false, false);
  }
  this.m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab();
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__void_$p_org_patternfly_component_tabs_OverflowTab(/** MenuItem */ menuItem) {
  this.f_selectedMenuItem__org_patternfly_component_tabs_OverflowTab_ = menuItem;
  let tab = /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_OverflowTab_.get(menuItem.f_id__org_patternfly_component_menu_MenuItem), Tab));
  if (!$Equality.$same(tab, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)], j_l_String)));
   this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = tab.m_text__java_lang_String();
   let tabs = /**@type {Tabs}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), Tabs));
   tabs.m_select__org_patternfly_component_tabs_Tab__void(tab);
  }
 }
 /** @nodts */
 m_updateText__void_$p_org_patternfly_component_tabs_OverflowTab() {
  this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = this.f_text__org_patternfly_component_tabs_OverflowTab_;
  if (this.f_showCount__org_patternfly_component_tabs_OverflowTab_ && this.f_count__org_patternfly_component_tabs_OverflowTab_ > 0) {
   this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_tabs_OverflowTab_.textContent) + (' (' + this.f_count__org_patternfly_component_tabs_OverflowTab_ + ')');
  }
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void_$p_org_patternfly_component_tabs_OverflowTab(/** Event */ event) {
  this.f_popper__org_patternfly_component_tabs_OverflowTab_.m_show__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), null);
  }));
 }
 /** @nodts */
 m_close__elemental2_dom_Event__void_$p_org_patternfly_component_tabs_OverflowTab(/** Event */ event) {
  this.f_popper__org_patternfly_component_tabs_OverflowTab_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_tabs_OverflowTab_.m_element__elemental2_dom_HTMLElement(), $Overlay)), null);
  }));
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_OverflowTab();
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), OverflowTab));
 }
 //Bridge method.
 /** @final @override @nodts @return {OverflowTab} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), OverflowTab));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {OverflowTab} */
 m_disabled__org_patternfly_component_tabs_OverflowTab() {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), OverflowTab));
 }
 //Default method forwarding stub.
 /** @nodts @return {OverflowTab} */
 m_disabled__boolean__org_patternfly_component_tabs_OverflowTab(/** boolean */ arg0) {
  return /**@type {OverflowTab}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), OverflowTab));
 }
 /** @nodts */
 static $clinit() {
  OverflowTab.$clinit = () =>{};
  OverflowTab.$loadModules();
  TabSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OverflowTab;
 }
 
 /** @nodts */
 static $loadModules() {
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Expandable = goog.module.get('org.patternfly.component.Expandable$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuItemType = goog.module.get('org.patternfly.component.menu.MenuItemType$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  Tab = goog.module.get('org.patternfly.component.tabs.Tab$impl');
  Tabs = goog.module.get('org.patternfly.component.tabs.Tabs$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Modifiers = goog.module.get('org.patternfly.popper.Modifiers$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  PopperBuilder = goog.module.get('org.patternfly.popper.PopperBuilder$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
OverflowTab.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_OverflowTab = 'ot';
Disabled.$markImplementor(OverflowTab);
$Util.$setClassMetadata(OverflowTab, 'org.patternfly.component.tabs.OverflowTab');

exports = OverflowTab;

//# sourceMappingURL=OverflowTab.js.map
