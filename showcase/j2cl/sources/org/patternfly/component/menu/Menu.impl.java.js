goog.module('org.patternfly.component.menu.Menu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let MenuActionHandler = goog.forwardDeclare('org.patternfly.component.menu.MenuActionHandler$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuFooter = goog.forwardDeclare('org.patternfly.component.menu.MenuFooter$impl');
let MenuGroup = goog.forwardDeclare('org.patternfly.component.menu.MenuGroup$impl');
let MenuHeader = goog.forwardDeclare('org.patternfly.component.menu.MenuHeader$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuSearchInput = goog.forwardDeclare('org.patternfly.component.menu.MenuSearchInput$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Menu>}
 * @implements {Plain<HTMLDivElement, Menu>}
 */
class Menu extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_menuName__org_patternfly_component_menu_Menu;
  /**@type {MenuType} @nodts*/
  this.f_menuType__org_patternfly_component_menu_Menu;
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_menu_Menu;
  /**@type {boolean} @nodts*/
  this.f_favorites__org_patternfly_component_menu_Menu = false;
  /**@type {MenuActionHandler} @nodts*/
  this.f_actionHandler__org_patternfly_component_menu_Menu;
  /**@type {MenuContent} @nodts*/
  this.f_content__org_patternfly_component_menu_Menu_;
  /**@type {SelectHandler<MenuItem>} @nodts*/
  this.f_selectHandler__org_patternfly_component_menu_Menu_;
  /**@type {MultiSelectHandler<Menu, MenuItem>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_;
 }
 /** @nodts @return {Menu} */
 static m_menu__org_patternfly_component_menu_Menu() {
  Menu.$clinit();
  return Menu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(MenuType.f_menu__org_patternfly_component_menu_MenuType, SelectionMode.f_click__org_patternfly_component_SelectionMode);
 }
 /** @nodts @return {Menu} */
 static m_menu__org_patternfly_component_SelectionMode__org_patternfly_component_menu_Menu(/** SelectionMode */ selectionMode) {
  Menu.$clinit();
  return Menu.$create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(MenuType.f_menu__org_patternfly_component_menu_MenuType, selectionMode);
 }
 /** @nodts @return {!Menu} */
 static $create__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  Menu.$clinit();
  let $instance = new Menu();
  $instance.$ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(menuType, selectionMode);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuType__org_patternfly_component_SelectionMode__void(/** MenuType */ menuType, /** SelectionMode */ selectionMode) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Menu__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_menuType__org_patternfly_component_menu_Menu = menuType;
  this.f_selectionMode__org_patternfly_component_menu_Menu = selectionMode;
  this.f_menuName__org_patternfly_component_menu_Menu = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['name'], j_l_String)));
  this.m_storeComponent__void();
 }
 /** @nodts @return {Menu} */
 m_addHeader__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ text) {
  return this.m_addHeader__org_patternfly_component_menu_MenuHeader__org_patternfly_component_menu_Menu(MenuHeader.m_menuHeader__java_lang_String__org_patternfly_component_menu_MenuHeader(text));
 }
 /** @nodts @return {Menu} */
 m_addHeader__org_patternfly_component_menu_MenuHeader__org_patternfly_component_menu_Menu(/** MenuHeader */ header) {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(header), Menu));
 }
 /** @nodts @return {Menu} */
 m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(/** MenuContent */ content) {
  return this.m_add__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(content);
 }
 /** @nodts @return {Menu} */
 m_add__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(/** MenuContent */ content) {
  this.f_content__org_patternfly_component_menu_Menu_ = content;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {Menu} */
 m_addFooter__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ text) {
  return this.m_addFooter__org_patternfly_component_menu_MenuFooter__org_patternfly_component_menu_Menu(MenuFooter.m_menuFooter__java_lang_String__org_patternfly_component_menu_MenuFooter(text));
 }
 /** @nodts @return {Menu} */
 m_addFooter__org_patternfly_component_menu_MenuFooter__org_patternfly_component_menu_Menu(/** MenuFooter */ footer) {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(footer), Menu));
 }
 /** @nodts @return {Menu} */
 m_addSearchInput__org_patternfly_component_menu_MenuSearchInput__org_patternfly_component_menu_Menu(/** MenuSearchInput */ searchInput) {
  return this.m_addSearchInput__org_patternfly_component_menu_MenuSearchInput__boolean__org_patternfly_component_menu_Menu(searchInput, false);
 }
 /** @nodts @return {Menu} */
 m_addSearchInput__org_patternfly_component_menu_MenuSearchInput__boolean__org_patternfly_component_menu_Menu(/** MenuSearchInput */ searchInput, /** boolean */ noSeparator) {
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(searchInput);
  if (!noSeparator) {
   this.m_addDivider__org_patternfly_component_menu_Menu();
  }
  return this;
 }
 /** @nodts @return {Menu} */
 m_addDivider__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType)), Menu));
 }
 /** @nodts @return {Menu} */
 m_flyout__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_flyout__org_patternfly_style_Classes)], j_l_String))), Menu));
 }
 /** @nodts @return {Menu} */
 m_scrollable__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes)], j_l_String))), Menu));
 }
 /** @nodts @return {Menu} */
 m_favorites__org_patternfly_component_menu_Menu() {
  this.f_favorites__org_patternfly_component_menu_Menu = true;
  return this;
 }
 /** @nodts @return {Menu} */
 m_height__java_lang_String__org_patternfly_component_menu_Menu(/** ?string */ height) {
  return /**@type {Menu}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_MaxHeight__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, height), Menu));
 }
 /** @nodts @return {Menu} */
 m_that__org_patternfly_component_menu_Menu() {
  return this;
 }
 /** @nodts @return {Menu} */
 m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_menu_Menu(/** SelectHandler<MenuItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_menu_Menu_ = selectHandler;
  return this;
 }
 /** @nodts @return {Menu} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_menu_Menu(/** MultiSelectHandler<Menu, MenuItem> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_menu_Menu_ = selectHandler;
  return this;
 }
 /** @nodts @return {Menu} */
 m_onAction__org_patternfly_component_menu_MenuActionHandler__org_patternfly_component_menu_Menu(/** MenuActionHandler */ actionHandler) {
  this.f_actionHandler__org_patternfly_component_menu_Menu = actionHandler;
  return this;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem_$pp_org_patternfly_component_menu(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem_$pp_org_patternfly_component_menu(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__void(/** MenuItem */ item) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__boolean__void(/** MenuItem */ item, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(item, true, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(/** MenuItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode) || $Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    this.m_unselectAllItems__void_$p_org_patternfly_component_menu_Menu();
   }
   switch (this.f_selectionMode__org_patternfly_component_menu_Menu.ordinal()) {
    case SelectionMode.$ordinal_click__org_patternfly_component_SelectionMode: 
     item.m_makeCurrent__boolean__void_$pp_org_patternfly_component_menu(selected);
     break;
    case SelectionMode.$ordinal_single__org_patternfly_component_SelectionMode: 
    case SelectionMode.$ordinal_multi__org_patternfly_component_SelectionMode: 
     item.m_markSelected__boolean__void_$pp_org_patternfly_component_menu(selected);
     break;
   }
   if (fireEvent) {
    if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_menu_Menu_, null)) {
     this.f_selectHandler__org_patternfly_component_menu_Menu_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }
    if (!$Equality.$same(this.f_multiSelectHandler__org_patternfly_component_menu_Menu_, null)) {
     let selection = /**@type {List<MenuItem>}*/ ($Casts.$to(this.m_items__java_util_List_$pp_org_patternfly_component_menu().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((arg0) =>{
      let arg0_1 = /**@type {MenuItem}*/ ($Casts.$to(arg0, MenuItem));
      return arg0_1.m_isSelected__boolean_$pp_org_patternfly_component_menu();
     })).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<MenuItem, *, List<MenuItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
     this.f_multiSelectHandler__org_patternfly_component_menu_Menu_.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, selection);
    }
   }
  }
 }
 /** @nodts @return {MenuItem} */
 m_findItem__java_lang_String__org_patternfly_component_menu_MenuItem_$pp_org_patternfly_component_menu(/** ?string */ id) {
  let menuItem = null;
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_, null)) {
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu_.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      menuItem = /**@type {MenuItem}*/ ($Casts.$to(group.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.get(id), MenuItem));
     }
    }
   }
   if ($Equality.$same(menuItem, null)) {
    if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_.f_list__org_patternfly_component_menu_MenuContent, null)) {
     menuItem = /**@type {MenuItem}*/ ($Casts.$to(this.f_content__org_patternfly_component_menu_Menu_.f_list__org_patternfly_component_menu_MenuContent.f_items__org_patternfly_component_menu_MenuList.get(id), MenuItem));
    }
   }
  }
  return menuItem;
 }
 /** @nodts @return {List<MenuItem>} */
 m_items__java_util_List_$pp_org_patternfly_component_menu() {
  let items = /**@type {!ArrayList<MenuItem>}*/ (ArrayList.$create__());
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_, null)) {
   for (let $iterator = this.f_content__org_patternfly_component_menu_Menu_.f_groups__org_patternfly_component_menu_MenuContent.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {MenuGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuGroup));
    {
     if (!$Equality.$same(group.f_list__org_patternfly_component_menu_MenuGroup, null)) {
      items.addAll(group.f_list__org_patternfly_component_menu_MenuGroup.f_items__org_patternfly_component_menu_MenuList.values());
     }
    }
   }
   if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_.f_list__org_patternfly_component_menu_MenuContent, null)) {
    items.addAll(this.f_content__org_patternfly_component_menu_Menu_.f_list__org_patternfly_component_menu_MenuContent.f_items__org_patternfly_component_menu_MenuList.values());
   }
  }
  return items;
 }
 /** @nodts */
 m_toggleFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ item) {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_, null) && !$Equality.$same(item.f_favoriteItemAction__org_patternfly_component_menu_MenuItem, null)) {
   /**@type {HTMLButtonElement}*/ ($Casts.$to(item.f_favoriteItemAction__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   let isFavorite = /**@type {HTMLButtonElement}*/ ($Casts.$to(item.f_favoriteItemAction__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   if (isFavorite) {
    let favoriteItem = MenuItem.$create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemType(this, item, item.f_itemType__org_patternfly_component_menu_MenuItem);
    this.f_content__org_patternfly_component_menu_Menu_.m_addToFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(favoriteItem);
   } else {
    if (!$Equality.$same(item.f_favoriteItem__org_patternfly_component_menu_MenuItem, null)) {
     this.f_content__org_patternfly_component_menu_Menu_.m_removeFromFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(item.f_favoriteItem__org_patternfly_component_menu_MenuItem);
     item.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
    }
   }
  }
 }
 /** @nodts */
 m_removeFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ favoriteItem) {
  if (!$Equality.$same(this.f_content__org_patternfly_component_menu_Menu_, null) && !$Equality.$same(favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem, null) && !$Equality.$same(favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem.f_favoriteItemAction__org_patternfly_component_menu_MenuItem, null)) {
   this.f_content__org_patternfly_component_menu_Menu_.m_removeFromFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(favoriteItem);
   let sourceItem = favoriteItem.f_sourceItem__org_patternfly_component_menu_MenuItem;
   /**@type {HTMLButtonElement}*/ ($Casts.$to(sourceItem.f_favoriteItemAction__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorited__org_patternfly_style_Classes));
   sourceItem.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
  }
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_menu_Menu() {
  if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode)) {
   for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Menu.f_MENU_ITEMS__org_patternfly_component_menu_Menu_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(element, Aria.f_current__org_patternfly_core_Aria, false);
    }
   }
  } else if ($Equality.$same(this.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
   for (let $iterator_1 = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Menu.f_MENU_ITEMS__org_patternfly_component_menu_Menu_).m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let element_1 = /**@type {HTMLElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(element_1, Aria.f_selected__org_patternfly_core_Aria, false);
     element_1.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
    }
   }
   for (let $iterator_2 = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Menu.f_SELECT_ICONS__org_patternfly_component_menu_Menu_).m_iterator__java_util_Iterator(); $iterator_2.m_hasNext__boolean(); ) {
    let element_2 = /**@type {HTMLElement}*/ ($Casts.$to($iterator_2.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element_2);
    }
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_Menu();
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Menu));
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Menu));
 }
 //Default method forwarding stub.
 /** @nodts @return {Menu} */
 m_plain__org_patternfly_component_menu_Menu() {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Menu));
 }
 //Default method forwarding stub.
 /** @nodts @return {Menu} */
 m_plain__boolean__org_patternfly_component_menu_Menu(/** boolean */ arg0) {
  return /**@type {Menu}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Menu));
 }
 /** @nodts */
 static $clinit() {
  Menu.$clinit = () =>{};
  Menu.$loadModules();
  BaseComponent.$clinit();
  Plain.$clinit();
  Menu.f_MENU_ITEMS__org_patternfly_component_menu_Menu_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))));
  Menu.f_SELECT_ICONS__org_patternfly_component_menu_Menu_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_select__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Menu;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  MenuFooter = goog.module.get('org.patternfly.component.menu.MenuFooter$impl');
  MenuGroup = goog.module.get('org.patternfly.component.menu.MenuGroup$impl');
  MenuHeader = goog.module.get('org.patternfly.component.menu.MenuHeader$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
Menu.f_MENU_ITEMS__org_patternfly_component_menu_Menu_;
/**@type {By} @nodts*/
Menu.f_SELECT_ICONS__org_patternfly_component_menu_Menu_;
Plain.$markImplementor(Menu);
$Util.$setClassMetadata(Menu, 'org.patternfly.component.menu.Menu');

exports = Menu;

//# sourceMappingURL=Menu.js.map
