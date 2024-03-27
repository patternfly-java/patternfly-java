goog.module('org.patternfly.component.toolbar.ToolbarItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarItem>}
 */
class ToolbarItem extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ToolbarItem} */
 static m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem() {
  ToolbarItem.$clinit();
  return ToolbarItem.$create__();
 }
 /** @nodts @return {!ToolbarItem} */
 static $create__() {
  ToolbarItem.$clinit();
  let $instance = new ToolbarItem();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarItem__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarItem__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarItem.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarItem, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ToolbarItem} */
 m_that__org_patternfly_component_toolbar_ToolbarItem() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarItem();
 }
 /** @nodts */
 static $clinit() {
  ToolbarItem.$clinit = () =>{};
  ToolbarItem.$loadModules();
  ToolbarSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarItem;
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
ToolbarItem.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarItem = 'ti';
$Util.$setClassMetadata(ToolbarItem, 'org.patternfly.component.toolbar.ToolbarItem');

exports = ToolbarItem;

//# sourceMappingURL=ToolbarItem.js.map
