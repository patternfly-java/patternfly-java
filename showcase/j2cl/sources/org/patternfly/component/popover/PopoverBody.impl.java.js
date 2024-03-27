goog.module('org.patternfly.component.popover.PopoverBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopoverSubComponent = goog.require('org.patternfly.component.popover.PopoverSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopoverSubComponent<HTMLDivElement, PopoverBody>}
 */
class PopoverBody extends PopoverSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_popover_PopoverBody;
 }
 /** @nodts @return {PopoverBody} */
 static m_popoverBody__org_patternfly_component_popover_PopoverBody() {
  PopoverBody.$clinit();
  return PopoverBody.$create__();
 }
 /** @nodts @return {!PopoverBody} */
 static $create__() {
  PopoverBody.$clinit();
  let $instance = new PopoverBody();
  $instance.$ctor__org_patternfly_component_popover_PopoverBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_PopoverBody__void() {
  this.$ctor__org_patternfly_component_popover_PopoverSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PopoverBody.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_popover_PopoverBody = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Popover__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['body'], j_l_String))));
 }
 /** @nodts @return {PopoverBody} */
 m_that__org_patternfly_component_popover_PopoverBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_PopoverBody();
 }
 /** @nodts */
 static $clinit() {
  PopoverBody.$clinit = () =>{};
  PopoverBody.$loadModules();
  PopoverSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopoverBody;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PopoverBody.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverBody = 'pb';
$Util.$setClassMetadata(PopoverBody, 'org.patternfly.component.popover.PopoverBody');

exports = PopoverBody;

//# sourceMappingURL=PopoverBody.js.map
