goog.module('org.patternfly.component.menu.MenuItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithIconAndText = goog.require('org.patternfly.component.WithIconAndText$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItemAction = goog.forwardDeclare('org.patternfly.component.menu.MenuItemAction$impl');
let MenuItemType = goog.forwardDeclare('org.patternfly.component.menu.MenuItemType$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLElement, MenuItem>}
 * @implements {Disabled<HTMLElement, MenuItem>}
 * @implements {WithText<HTMLElement, MenuItem>}
 * @implements {WithIcon<HTMLElement, MenuItem>}
 * @implements {WithIconAndText<HTMLElement, MenuItem>}
 * @implements {Attachable}
 */
class MenuItem extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_menu_MenuItem;
  /**@type {MenuItemType} @nodts*/
  this.f_itemType__org_patternfly_component_menu_MenuItem;
  /**@type {HTMLElement} @nodts*/
  this.f_itemElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_mainElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_menu_MenuItem_;
  /**@type {MenuItem} @nodts*/
  this.f_sourceItem__org_patternfly_component_menu_MenuItem;
  /**@type {MenuItem} @nodts*/
  this.f_favoriteItem__org_patternfly_component_menu_MenuItem;
  /**@type {MenuItemAction} @nodts*/
  this.f_favoriteItemAction__org_patternfly_component_menu_MenuItem;
  /**@type {boolean} @nodts*/
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = false;
  /**@type {Checkbox} @nodts*/
  this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_;
  /**@type {MenuItemAction} @nodts*/
  this.f_itemAction__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_descriptionElement__org_patternfly_component_menu_MenuItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_selectIcon__org_patternfly_component_menu_MenuItem_;
  /**@type {ComponentHandler<MenuItem>} @nodts*/
  this.f_handler__org_patternfly_component_menu_MenuItem_;
 }
 /** @nodts @return {MenuItem} */
 static m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ id, /** ?string */ text) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType(id, text, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType);
 }
 /** @nodts @return {MenuItem} */
 static m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType(id, text, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType);
 }
 /** @nodts @return {MenuItem} */
 static m_checkboxMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ id, /** ?string */ text) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType(id, text, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType);
 }
 /** @nodts @return {MenuItem} */
 static m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_menu_MenuItem(/** ?string */ id, /** MenuItemType */ type) {
  MenuItem.$clinit();
  return MenuItem.$create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType(id, null, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType);
 }
 //Factory method corresponding to constructor 'MenuItem(String, String, MenuItemType)'.
 /** @nodts @return {!MenuItem} */
 static $create__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType(/** ?string */ id, /** ?string */ text, /** MenuItemType */ itemType) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_patternfly_component_menu_MenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__void(id, text, itemType);
  return $instance;
 }
 //Initialization from constructor 'MenuItem(String, String, MenuItemType)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemType__void(/** ?string */ id, /** ?string */ text, /** MenuItemType */ itemType) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'none'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_menu_MenuItem = id;
  this.f_itemType__org_patternfly_component_menu_MenuItem = itemType;
  let /** HTMLContainerBuilder<?> */ itemBuilder;
  if ($Equality.$same(itemType, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType) || $Equality.$same(itemType, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType)) {
   itemBuilder = $Equality.$same(itemType, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType) ? /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, 0), HTMLContainerBuilder)) : /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder));
   itemBuilder.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else if ($Equality.$same(itemType, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   let checkboxId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['check'], j_l_String)));
   itemBuilder = /**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((l) =>{
    let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
    l_1.htmlFor = checkboxId;
   })), HTMLContainerBuilder));
   itemBuilder.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_check__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_ = Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox(checkboxId, checkboxId)), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   itemBuilder = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_mainElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder));
   Logger.m_unknown__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unknown menu item type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(itemType));
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(itemBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  if (!$Equality.$same(text, null)) {
   this.f_textElement__org_patternfly_component_menu_MenuItem_.textContent = text;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 //Factory method corresponding to constructor 'MenuItem(Menu, MenuItem, MenuItemType)'.
 /** @nodts @return {!MenuItem} */
 static $create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemType(/** Menu */ menu, /** MenuItem */ item, /** MenuItemType */ itemType) {
  MenuItem.$clinit();
  let $instance = new MenuItem();
  $instance.$ctor__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemType__void(menu, item, itemType);
  return $instance;
 }
 //Initialization from constructor 'MenuItem(Menu, MenuItem, MenuItemType)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemType__void(/** Menu */ menu, /** MenuItem */ item, /** MenuItemType */ itemType) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem, /**@type {HTMLElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement().cloneNode(true), $Overlay)));
  this.f_id__org_patternfly_component_menu_MenuItem = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('fav', /**@type {!Array<?string>}*/ ($Arrays.$init([item.f_id__org_patternfly_component_menu_MenuItem], j_l_String)));
  this.f_itemType__org_patternfly_component_menu_MenuItem = itemType;
  this.f_favoriteItem__org_patternfly_component_menu_MenuItem = null;
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = item.f_initialSelection__org_patternfly_component_menu_MenuItem_;
  this.f_itemElement__org_patternfly_component_menu_MenuItem_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))));
  this.f_mainElement__org_patternfly_component_menu_MenuItem_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
  this.f_textElement__org_patternfly_component_menu_MenuItem_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))));
  this.f_iconContainer__org_patternfly_component_menu_MenuItem_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))));
  this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))));
  if (!$Equality.$same(item.f_handler__org_patternfly_component_menu_MenuItem_, null)) {
   this.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItem(item.f_handler__org_patternfly_component_menu_MenuItem_);
  }
  if (!$Equality.$same(item.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   let element = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))));
   if (HTMLButtonElement_$Overlay.$isInstance(element)) {
    this.f_itemAction__org_patternfly_component_menu_MenuItem_ = MenuItemAction.$create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement(menu, this, item.f_itemAction__org_patternfly_component_menu_MenuItem_, /**@type {HTMLButtonElement}*/ ($Casts.$to(element, HTMLButtonElement_$Overlay)));
   }
  }
  this.f_sourceItem__org_patternfly_component_menu_MenuItem = item;
  item.f_favoriteItem__org_patternfly_component_menu_MenuItem = this;
  let favoriteItemActionElement = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_action__org_patternfly_style_Classes], j_l_String)))).m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_favorite__org_patternfly_style_Classes))));
  if (!$Equality.$same(favoriteItemActionElement, null)) {
   favoriteItemActionElement.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    menu.m_removeFavorite__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(this);
   }));
  }
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let menu = /**@type {Menu}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Menu));
  if (!$Equality.$same(this.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_style_Classes))) {
    /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_itemAction__org_patternfly_component_menu_MenuItem_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = true;
   }
  }
  switch (menu.f_menuType__org_patternfly_component_menu_Menu.ordinal()) {
   case MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType: 
   case MenuType.$ordinal_dropdown__org_patternfly_component_menu_MenuType: 
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Attributes.f_role__org_patternfly_core_Attributes, 'menuitem');
    break;
   case MenuType.$ordinal_select__org_patternfly_component_menu_MenuType: 
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Attributes.f_role__org_patternfly_core_Attributes, 'option');
    break;
  }
  if (!$Equality.$same(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_inputElement__org_jboss_elemento_InputElementBuilder().m_name__java_lang_String__org_jboss_elemento_TypedBuilder(menu.f_menuName__org_patternfly_component_menu_Menu);
  }
  if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_component_SelectionMode) || $Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_click__org_patternfly_component_SelectionMode)) {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this, true, true);
   }));
  } else if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_1) =>{
    if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
     if ($Equality.$same(e_1.target, this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_inputElement__org_jboss_elemento_InputElementBuilder())) {
      menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this, this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
     } else {
      e_1.preventDefault();
      menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this, !this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
     }
    } else {
     menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this, !this.m_isSelected__boolean_$pp_org_patternfly_component_menu(), true);
    }
   }), $Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType));
  }
  if (this.f_initialSelection__org_patternfly_component_menu_MenuItem_) {
   menu.m_select__org_patternfly_component_menu_MenuItem__boolean__boolean__void(this, true, false);
  }
 }
 /** @nodts @return {MenuItem} */
 m_addAction__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(/** MenuItemAction */ itemAction) {
  return this.m_add__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(itemAction);
 }
 /** @nodts @return {MenuItem} */
 m_add__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_MenuItem(/** MenuItemAction */ itemAction) {
  this.f_itemAction__org_patternfly_component_menu_MenuItem_ = itemAction;
  this.f_itemAction__org_patternfly_component_menu_MenuItem_.f_menuItem__org_patternfly_component_menu_MenuItemAction = this;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLButtonElement}*/ ($Casts.$to(itemAction.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_danger__org_patternfly_component_menu_MenuItem() {
  return /**@type {MenuItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_danger__org_patternfly_style_Classes)], j_l_String))), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 m_selected__org_patternfly_component_menu_MenuItem() {
  this.f_initialSelection__org_patternfly_component_menu_MenuItem_ = true;
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_disabled__boolean__org_patternfly_component_menu_MenuItem(/** boolean */ disabled) {
  switch (this.f_itemType__org_patternfly_component_menu_MenuItem.ordinal()) {
   case MenuItemType.$ordinal_action__org_patternfly_component_menu_MenuItemType: 
    /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLButtonElement_$Overlay)).disabled = disabled;
    break;
   case MenuItemType.$ordinal_link__org_patternfly_component_menu_MenuItemType: 
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_disabled__org_patternfly_core_Aria, disabled);
    break;
   case MenuItemType.$ordinal_checkbox__org_patternfly_component_menu_MenuItemType: 
    this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_disabled__boolean__org_patternfly_component_form_Checkbox(disabled);
    break;
  }
  if (!$Equality.$same(this.f_itemAction__org_patternfly_component_menu_MenuItem_, null)) {
   /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_itemAction__org_patternfly_component_menu_MenuItem_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = disabled;
  }
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), MenuItem));
 }
 /** @nodts @return {MenuItem} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_menu_MenuItem_.textContent = text;
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_text__elemental2_dom_HTMLElement__org_patternfly_component_menu_MenuItem(/** HTMLElement */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_menu_MenuItem_);
  this.f_textElement__org_patternfly_component_menu_MenuItem_.appendChild(element);
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_href__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ href) {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType)) {
   /**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLAnchorElement_$Overlay)).href = href;
  } else {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Ignore href on menu item \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_id__org_patternfly_component_menu_MenuItem) + '\' with type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_itemType__org_patternfly_component_menu_MenuItem.name()) + '\'');
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_external__org_patternfly_component_menu_MenuItem() {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType)) {
   /**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_menu_MenuItem_, HTMLAnchorElement_$Overlay)).target = '_blank';
   this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_externalIcon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_externalLinkAlt__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('(opens a new window)'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Menu__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Ignore external flag on menu item \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_id__org_patternfly_component_menu_MenuItem) + '\' with type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_itemType__org_patternfly_component_menu_MenuItem.name()) + '\'');
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_description__java_lang_String__org_patternfly_component_menu_MenuItem(/** ?string */ description) {
  if (!$Equality.$same(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_, null)) {
   this.f_descriptionElement__org_patternfly_component_menu_MenuItem_.textContent = description;
  } else {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_description__elemental2_dom_HTMLElement__org_patternfly_component_menu_MenuItem(/** HTMLElement */ element) {
  if (!$Equality.$same(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_);
   this.f_descriptionElement__org_patternfly_component_menu_MenuItem_.appendChild(element);
  } else {
   this.f_itemElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_descriptionElement__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(/** Element */ icon) {
  if (!$Equality.$same(this.f_iconContainer__org_patternfly_component_menu_MenuItem_, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_menu_MenuItem_);
   this.f_iconContainer__org_patternfly_component_menu_MenuItem_.appendChild(icon);
  } else {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_mainElement__org_patternfly_component_menu_MenuItem_, this.f_iconContainer__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_removeIcon__org_patternfly_component_menu_MenuItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_menu_MenuItem_);
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(icon);
  return this.m_text__java_lang_String__org_patternfly_component_menu_MenuItem(text);
 }
 /** @nodts @return {MenuItem} */
 m_that__org_patternfly_component_menu_MenuItem() {
  return this;
 }
 /** @nodts @return {MenuItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItem(/** ComponentHandler<MenuItem> */ handler) {
  this.f_handler__org_patternfly_component_menu_MenuItem_ = handler;
  this.f_itemElement__org_patternfly_component_menu_MenuItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_addFavoriteItemAction__org_patternfly_component_menu_MenuItemAction_$pp_org_patternfly_component_menu() {
  let actionId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_id__org_patternfly_component_menu_MenuItem, /**@type {!Array<?string>}*/ ($Arrays.$init(['mark-as-favorite'], j_l_String)));
  this.f_favoriteItemAction__org_patternfly_component_menu_MenuItem = MenuItemAction.m_favoriteMenuItemAction__java_lang_String__org_patternfly_component_menu_MenuItemAction(actionId);
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_favoriteItemAction__org_patternfly_component_menu_MenuItem.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this.f_favoriteItemAction__org_patternfly_component_menu_MenuItem;
 }
 /** @nodts */
 m_makeCurrent__boolean__void_$pp_org_patternfly_component_menu(/** boolean */ current) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_current__org_patternfly_core_Aria, current);
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_menu(/** boolean */ selected) {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_value__boolean__org_patternfly_component_form_Checkbox(selected);
  } else {
   if ($Equality.$same(this.f_selectIcon__org_patternfly_component_menu_MenuItem_, null)) {
    this.f_selectIcon__org_patternfly_component_menu_MenuItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_select__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_check__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
   }
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_itemElement__org_patternfly_component_menu_MenuItem_, Aria.f_selected__org_patternfly_core_Aria, selected);
   if (selected) {
    this.f_itemElement__org_patternfly_component_menu_MenuItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
    this.f_mainElement__org_patternfly_component_menu_MenuItem_.appendChild(this.f_selectIcon__org_patternfly_component_menu_MenuItem_);
   } else {
    this.f_itemElement__org_patternfly_component_menu_MenuItem_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
    Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_selectIcon__org_patternfly_component_menu_MenuItem_);
   }
  }
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_component_menu() {
  if ($Equality.$same(this.f_itemType__org_patternfly_component_menu_MenuItem, MenuItemType.f_checkbox__org_patternfly_component_menu_MenuItemType)) {
   return Boolean.m_booleanValue__java_lang_Boolean__boolean(this.f_checkboxComponent__org_patternfly_component_menu_MenuItem_.m_value__java_lang_Boolean());
  } else {
   return Boolean.m_parseBoolean__java_lang_String__boolean(this.f_itemElement__org_patternfly_component_menu_MenuItem_.getAttribute(Aria.f_selected__org_patternfly_core_Aria));
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_menu_MenuItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_menu_MenuItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), MenuItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItem} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_disabled__org_patternfly_component_menu_MenuItem() {
  return /**@type {MenuItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), MenuItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuItem} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_menu_MenuItem(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {MenuItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), MenuItem));
 }
 /** @nodts */
 static $clinit() {
  MenuItem.$clinit = () =>{};
  MenuItem.$loadModules();
  MenuSubComponent.$clinit();
  Disabled.$clinit();
  WithIcon.$clinit();
  WithIconAndText.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuItemAction = goog.module.get('org.patternfly.component.menu.MenuItemAction$impl');
  MenuItemType = goog.module.get('org.patternfly.component.menu.MenuItemType$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuItem.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuItem = '';
Disabled.$markImplementor(MenuItem);
WithText.$markImplementor(MenuItem);
WithIcon.$markImplementor(MenuItem);
WithIconAndText.$markImplementor(MenuItem);
Attachable.$markImplementor(MenuItem);
$Util.$setClassMetadata(MenuItem, 'org.patternfly.component.menu.MenuItem');

exports = MenuItem;

//# sourceMappingURL=MenuItem.js.map
