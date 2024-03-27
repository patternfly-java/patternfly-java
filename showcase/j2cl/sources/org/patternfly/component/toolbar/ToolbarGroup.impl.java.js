goog.module('org.patternfly.component.toolbar.ToolbarGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarGroup>}
 */
class ToolbarGroup extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ToolbarGroup} */
 static m_toolbarGroup__org_patternfly_component_toolbar_ToolbarGroup() {
  ToolbarGroup.$clinit();
  return ToolbarGroup.$create__();
 }
 /** @nodts @return {!ToolbarGroup} */
 static $create__() {
  ToolbarGroup.$clinit();
  let $instance = new ToolbarGroup();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarGroup__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ToolbarGroup} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarGroup(/** ToolbarItem */ item) {
  return /**@type {ToolbarGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), ToolbarGroup));
 }
 /** @nodts @return {ToolbarGroup} */
 m_that__org_patternfly_component_toolbar_ToolbarGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarGroup();
 }
 /** @nodts */
 static $clinit() {
  ToolbarGroup.$clinit = () =>{};
  ToolbarGroup.$loadModules();
  ToolbarSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarGroup;
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
ToolbarGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarGroup = 'tg';
$Util.$setClassMetadata(ToolbarGroup, 'org.patternfly.component.toolbar.ToolbarGroup');

exports = ToolbarGroup;

//# sourceMappingURL=ToolbarGroup.js.map
