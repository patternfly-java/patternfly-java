goog.module('org.patternfly.component.list.SimpleList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SimpleListGroup = goog.forwardDeclare('org.patternfly.component.list.SimpleListGroup$impl');
let SimpleListItem = goog.forwardDeclare('org.patternfly.component.list.SimpleListItem$impl');
let SimpleListType = goog.forwardDeclare('org.patternfly.component.list.SimpleListType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, SimpleList>}
 */
class SimpleList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<SimpleListGroup>} @nodts*/
  this.f_groups__org_patternfly_component_list_SimpleList_;
  /**@type {Map<?string, SimpleListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_SimpleList_;
  /**@type {SimpleListType} @nodts*/
  this.f_type__org_patternfly_component_list_SimpleList_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ulElement__org_patternfly_component_list_SimpleList_;
  /**@type {SelectHandler<SimpleListItem>} @nodts*/
  this.f_selectHandler__org_patternfly_component_list_SimpleList_;
 }
 /** @nodts @return {SimpleList} */
 static m_simpleList__org_patternfly_component_list_SimpleList() {
  SimpleList.$clinit();
  return SimpleList.$create__();
 }
 /** @nodts @return {!SimpleList} */
 static $create__() {
  SimpleList.$clinit();
  let $instance = new SimpleList();
  $instance.$ctor__org_patternfly_component_list_SimpleList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_SimpleList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_SimpleList__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_undefined__org_patternfly_component_list_SimpleListType;
  this.f_groups__org_patternfly_component_list_SimpleList_ = /**@type {!ArrayList<SimpleListGroup>}*/ (ArrayList.$create__());
  this.f_items__org_patternfly_component_list_SimpleList_ = /**@type {!HashMap<?string, SimpleListItem>}*/ (HashMap.$create__());
  this.m_storeComponent__void();
 }
 /** @nodts @return {SimpleList} */
 m_addGroup__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(/** SimpleListGroup */ group) {
  return this.m_add__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(group);
 }
 /** @nodts @return {SimpleList} */
 m_add__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(/** SimpleListGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'This simple list already contains items. A mix of groups and items is not supported!');
   return this;
  }
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_groups__org_patternfly_component_list_SimpleListType;
  this.f_groups__org_patternfly_component_list_SimpleList_.add(group);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(group.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @template T @return {SimpleList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleList(/** Iterable<T> */ items, /** j_u_function_Function<T, SimpleListItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let sli = /**@type {SimpleListItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), SimpleListItem));
    this.m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(sli);
   }
  }
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(/** SimpleListItem */ item) {
  return this.m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(item);
 }
 /** @nodts @return {SimpleList} */
 m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleList(/** SimpleListItem */ item) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_groups__org_patternfly_component_list_SimpleListType)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'This simple list already contains groups. A mix of groups and items is not supported!');
   return this;
  }
  this.f_type__org_patternfly_component_list_SimpleList_ = SimpleListType.f_items__org_patternfly_component_list_SimpleListType;
  this.f_items__org_patternfly_component_list_SimpleList_.put(item.f_id__org_patternfly_component_list_SimpleListItem, item);
  this.m_failSafeUlElement__elemental2_dom_HTMLUListElement_$p_org_patternfly_component_list_SimpleList().appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_that__org_patternfly_component_list_SimpleList() {
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_ariaLabel__java_lang_String__org_patternfly_component_list_SimpleList(/** ?string */ label) {
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType) && !$Equality.$same(this.f_ulElement__org_patternfly_component_list_SimpleList_, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_ulElement__org_patternfly_component_list_SimpleList_, Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {SimpleList} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_list_SimpleList(/** SelectHandler<SimpleListItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_list_SimpleList_ = selectHandler;
  return this;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__void(/** SimpleListItem */ item) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__boolean__void(/** SimpleListItem */ item, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(item, true, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_list_SimpleListItem__boolean__boolean__void(/** SimpleListItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_list_SimpleList();
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_list(selected);
   if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_list_SimpleList_, null) && fireEvent) {
    this.f_selectHandler__org_patternfly_component_list_SimpleList_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
   }
  }
 }
 /** @nodts @return {SimpleListItem} */
 m_findItem__java_lang_String__org_patternfly_component_list_SimpleListItem_$p_org_patternfly_component_list_SimpleList(/** ?string */ id) {
  let item = null;
  if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_groups__org_patternfly_component_list_SimpleListType)) {
   for (let iterator = this.f_groups__org_patternfly_component_list_SimpleList_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(item, null); ) {
    let group = /**@type {SimpleListGroup}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), SimpleListGroup));
    item = /**@type {SimpleListItem}*/ ($Casts.$to(group.f_items__org_patternfly_component_list_SimpleListGroup.get(id), SimpleListItem));
   }
  } else if ($Equality.$same(this.f_type__org_patternfly_component_list_SimpleList_, SimpleListType.f_items__org_patternfly_component_list_SimpleListType)) {
   item = /**@type {SimpleListItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_list_SimpleList_.get(id), SimpleListItem));
  }
  return item;
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_list_SimpleList() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
 }
 /** @nodts @return {HTMLUListElement} */
 m_failSafeUlElement__elemental2_dom_HTMLUListElement_$p_org_patternfly_component_list_SimpleList() {
  if ($Equality.$same(this.f_ulElement__org_patternfly_component_list_SimpleList_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ulElement__org_patternfly_component_list_SimpleList_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  }
  return this.f_ulElement__org_patternfly_component_list_SimpleList_;
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleList();
 }
 /** @nodts */
 static $clinit() {
  SimpleList.$clinit = () =>{};
  SimpleList.$loadModules();
  BaseComponent.$clinit();
  SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleList;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SimpleListGroup = goog.module.get('org.patternfly.component.list.SimpleListGroup$impl');
  SimpleListItem = goog.module.get('org.patternfly.component.list.SimpleListItem$impl');
  SimpleListType = goog.module.get('org.patternfly.component.list.SimpleListType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
SimpleList.f_SIMPLE_LIST_ITEMS__org_patternfly_component_list_SimpleList_;
$Util.$setClassMetadata(SimpleList, 'org.patternfly.component.list.SimpleList');

exports = SimpleList;

//# sourceMappingURL=SimpleList.js.map
