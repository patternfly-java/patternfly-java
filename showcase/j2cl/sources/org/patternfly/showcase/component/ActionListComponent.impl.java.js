goog.module('org.patternfly.showcase.component.ActionListComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ActionList = goog.forwardDeclare('org.patternfly.component.list.ActionList$impl');
let ActionListGroup = goog.forwardDeclare('org.patternfly.component.list.ActionListGroup$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.list.ActionListItem$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ActionListComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ActionListComponent} */
 static $create__() {
  ActionListComponent.$clinit();
  let $instance = new ActionListComponent();
  $instance.$ctor__org_patternfly_showcase_component_ActionListComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ActionListComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'action-list'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-single-group', 'Action list single group', Code.m_code__java_lang_String__java_lang_String('action-list-single-group'), Supplier.$adapt(() =>{
   let dropdown = Dropdown.m_dropdown__org_patternfly_component_menu_Dropdown().m_addToggle__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(fas.m_ellipsisV__org_patternfly_icon_PredefinedIcon(), 'kebab dropdown toggle')).m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(Menu.m_menu__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-0', 'Action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-1', 'Link', '#item-1')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-2', 'Disabled action').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-3', 'Disabled link', '#item-3').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addDivider__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-4', 'Separated action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-5', 'Separated link', '#item-5')))));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('With kebab'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dropdown), ActionListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-icons', 'Action list with icons', Code.m_code__java_lang_String__java_lang_String('action-list-icons'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_icons__org_patternfly_component_list_ActionList().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_check__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-multiple-groups', 'Action list multiple groups', Code.m_code__java_lang_String__java_lang_String('action-list-multiple-groups'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('In modals, forms, data lists'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Save').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Cancel').m_link__org_patternfly_component_button_Button()), ActionListItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('In wizards'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_list_ActionList().m_addGroup__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(ActionListGroup.m_actionListGroup__org_patternfly_component_list_ActionListGroup().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))).m_addGroup__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(ActionListGroup.m_actionListGroup__org_patternfly_component_list_ActionListGroup().m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_list_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Cancel').m_link__org_patternfly_component_button_Button()), ActionListItem))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(ActionList));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ActionList), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ActionListGroup), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ActionListItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  ActionListComponent.$clinit = () =>{};
  ActionListComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionListComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ActionList = goog.module.get('org.patternfly.component.list.ActionList$impl');
  ActionListGroup = goog.module.get('org.patternfly.component.list.ActionListGroup$impl');
  ActionListItem = goog.module.get('org.patternfly.component.list.ActionListItem$impl');
  Dropdown = goog.module.get('org.patternfly.component.menu.Dropdown$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ActionListComponent, 'org.patternfly.showcase.component.ActionListComponent');

exports = ActionListComponent;

//# sourceMappingURL=ActionListComponent.js.map
