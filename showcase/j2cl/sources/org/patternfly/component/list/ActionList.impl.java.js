goog.module('org.patternfly.component.list.ActionList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ActionListGroup = goog.forwardDeclare('org.patternfly.component.list.ActionListGroup$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.list.ActionListItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ActionList>}
 */
class ActionList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ActionList} */
 static m_actionList__org_patternfly_component_list_ActionList() {
  ActionList.$clinit();
  return ActionList.$create__();
 }
 /** @nodts @return {!ActionList} */
 static $create__() {
  ActionList.$clinit();
  let $instance = new ActionList();
  $instance.$ctor__org_patternfly_component_list_ActionList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ActionList__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ActionList__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_actionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ActionList} */
 m_addGroup__org_patternfly_component_list_ActionListGroup__org_patternfly_component_list_ActionList(/** ActionListGroup */ group) {
  return /**@type {ActionList}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionList(/** ActionListItem */ item) {
  return /**@type {ActionList}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_icons__org_patternfly_component_list_ActionList() {
  return /**@type {ActionList}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icons__org_patternfly_style_Classes)], j_l_String))), ActionList));
 }
 /** @nodts @return {ActionList} */
 m_that__org_patternfly_component_list_ActionList() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ActionList();
 }
 /** @nodts */
 static $clinit() {
  ActionList.$clinit = () =>{};
  ActionList.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ActionList, 'org.patternfly.component.list.ActionList');

exports = ActionList;

//# sourceMappingURL=ActionList.js.map
