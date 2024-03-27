goog.module('org.patternfly.component.list.ActionListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ActionListSubComponent = goog.require('org.patternfly.component.list.ActionListSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.list.ActionListItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ActionListSubComponent<HTMLDivElement, ActionListGroup>}
 */
class ActionListGroup extends ActionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ActionListGroup} */
 static m_actionListGroup__org_patternfly_component_list_ActionListGroup() {
  ActionListGroup.$clinit();
  return ActionListGroup.$create__();
 }
 /** @nodts @return {!ActionListGroup} */
 static $create__() {
  ActionListGroup.$clinit();
  let $instance = new ActionListGroup();
  $instance.$ctor__org_patternfly_component_list_ActionListGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ActionListGroup__void() {
  this.$ctor__org_patternfly_component_list_ActionListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ActionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_actionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ActionListGroup} */
 m_that__org_patternfly_component_list_ActionListGroup() {
  return this;
 }
 /** @nodts @return {ActionListGroup} */
 m_addItem__org_patternfly_component_list_ActionListItem__org_patternfly_component_list_ActionListGroup(/** ActionListItem */ item) {
  return /**@type {ActionListGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), ActionListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ActionListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ActionListGroup();
 }
 /** @nodts */
 static $clinit() {
  ActionListGroup.$clinit = () =>{};
  ActionListGroup.$loadModules();
  ActionListSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionListGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ActionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ActionListGroup = 'alg';
$Util.$setClassMetadata(ActionListGroup, 'org.patternfly.component.list.ActionListGroup');

exports = ActionListGroup;

//# sourceMappingURL=ActionListGroup.js.map
