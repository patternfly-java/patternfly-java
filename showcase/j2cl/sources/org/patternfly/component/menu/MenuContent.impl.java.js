goog.module('org.patternfly.component.menu.MenuContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuGroup = goog.forwardDeclare('org.patternfly.component.menu.MenuGroup$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLDivElement, MenuContent>}
 * @implements {Attachable}
 */
class MenuContent extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuList} @nodts*/
  this.f_list__org_patternfly_component_menu_MenuContent;
  /**@type {List<MenuGroup>} @nodts*/
  this.f_groups__org_patternfly_component_menu_MenuContent;
  /**@type {MenuGroup} @nodts*/
  this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_;
  /**@type {MenuList} @nodts*/
  this.f_favoritesList__org_patternfly_component_menu_MenuContent_;
  /**@type {Divider} @nodts*/
  this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_;
 }
 /** @nodts @return {MenuContent} */
 static m_menuContent__org_patternfly_component_menu_MenuContent() {
  MenuContent.$clinit();
  return MenuContent.$create__();
 }
 /** @nodts @return {!MenuContent} */
 static $create__() {
  MenuContent.$clinit();
  let $instance = new MenuContent();
  $instance.$ctor__org_patternfly_component_menu_MenuContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuContent__void() {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuContent.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuContent, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_groups__org_patternfly_component_menu_MenuContent = /**@type {!ArrayList<MenuGroup>}*/ (ArrayList.$create__());
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
  if (menu.f_favorites__org_patternfly_component_menu_Menu) {
   this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_ = MenuGroup.m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup('Favorites').m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(this.f_favoritesList__org_patternfly_component_menu_MenuContent_ = MenuList.m_menuList__org_patternfly_component_menu_MenuList());
   this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_ = Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType);
   this.m_showFavorites__boolean__void_$pp_org_patternfly_component_menu(false);
   if (this.f_groups__org_patternfly_component_menu_MenuContent.isEmpty()) {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_list__org_patternfly_component_menu_MenuContent);
    let listGroup = MenuGroup.m_menuGroup__org_patternfly_component_menu_MenuGroup().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(this.f_list__org_patternfly_component_menu_MenuContent);
    this.m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_);
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_);
    this.m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(listGroup);
    this.f_list__org_patternfly_component_menu_MenuContent = null;
   } else {
    this.f_groups__org_patternfly_component_menu_MenuContent.addAtIndex(0, this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_);
    Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_);
    Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_);
   }
   for (let $iterator = menu.m_items__java_util_List_$pp_org_patternfly_component_menu().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
    {
     item.m_addFavoriteItemAction__org_patternfly_component_menu_MenuItemAction_$pp_org_patternfly_component_menu().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
      let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
      menu.m_toggleFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(item);
     });
    }
   }
  }
 }
 /** @nodts @return {MenuContent} */
 m_addGroup__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(/** MenuGroup */ group) {
  return this.m_add__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(group);
 }
 /** @nodts @return {MenuContent} */
 m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/** MenuList */ list) {
  return this.m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(list);
 }
 /** @nodts @return {MenuContent} */
 m_addDivider__org_patternfly_component_menu_MenuContent() {
  return /**@type {MenuContent}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType)), MenuContent));
 }
 /** @nodts @return {MenuContent} */
 m_add__org_patternfly_component_menu_MenuGroup__org_patternfly_component_menu_MenuContent(/** MenuGroup */ group) {
  this.f_groups__org_patternfly_component_menu_MenuContent.add(group);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(group.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {MenuContent} */
 m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(/** MenuList */ list) {
  this.f_list__org_patternfly_component_menu_MenuContent = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLUListElement}*/ ($Casts.$to(list.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  return this;
 }
 /** @nodts @return {MenuContent} */
 m_that__org_patternfly_component_menu_MenuContent() {
  return this;
 }
 /** @nodts */
 m_addToFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ favoriteItem) {
  if (!$Equality.$same(this.f_favoritesList__org_patternfly_component_menu_MenuContent_, null)) {
   this.f_favoritesList__org_patternfly_component_menu_MenuContent_.m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(favoriteItem);
   this.m_showFavorites__boolean__void_$pp_org_patternfly_component_menu(true);
  }
 }
 /** @nodts */
 m_removeFromFavorites__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ favoriteItem) {
  if (!$Equality.$same(this.f_favoritesList__org_patternfly_component_menu_MenuContent_, null)) {
   this.f_favoritesList__org_patternfly_component_menu_MenuContent_.m_removeItem__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(favoriteItem);
   this.m_showFavorites__boolean__void_$pp_org_patternfly_component_menu(/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_favoritesList__org_patternfly_component_menu_MenuContent_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).childElementCount != 0);
  }
 }
 /** @nodts */
 m_showFavorites__boolean__void_$pp_org_patternfly_component_menu(/** boolean */ visible) {
  if (!$Equality.$same(this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_, null)) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_, visible);
   this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_.m_element__elemental2_dom_HTMLElement().hidden = !visible;
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_favoritesDivider__org_patternfly_component_menu_MenuContent_.m_element__elemental2_dom_HTMLElement(), Aria.f_hidden__org_patternfly_core_Aria, !visible);
  }
  if (!$Equality.$same(this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_, null)) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_, visible);
   this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_.m_element__elemental2_dom_HTMLElement().hidden = !visible;
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_favoritesGroup__org_patternfly_component_menu_MenuContent_.m_element__elemental2_dom_HTMLElement(), Aria.f_hidden__org_patternfly_core_Aria, !visible);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuContent();
 }
 /** @nodts */
 static $clinit() {
  MenuContent.$clinit = () =>{};
  MenuContent.$loadModules();
  MenuSubComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuContent;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuGroup = goog.module.get('org.patternfly.component.menu.MenuGroup$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuContent.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuContent = 'mc';
Attachable.$markImplementor(MenuContent);
$Util.$setClassMetadata(MenuContent, 'org.patternfly.component.menu.MenuContent');

exports = MenuContent;

//# sourceMappingURL=MenuContent.js.map
