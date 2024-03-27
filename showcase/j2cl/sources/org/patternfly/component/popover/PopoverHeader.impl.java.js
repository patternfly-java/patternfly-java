goog.module('org.patternfly.component.popover.PopoverHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopoverSubComponent = goog.require('org.patternfly.component.popover.PopoverSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PopoverSubComponent<HTMLElement, PopoverHeader>}
 * @implements {ElementDelegate<HTMLElement, PopoverHeader>}
 */
class PopoverHeader extends PopoverSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_headerId__org_patternfly_component_popover_PopoverHeader;
  /**@type {HTMLHeadingElement} @nodts*/
  this.f_headerElement__org_patternfly_component_popover_PopoverHeader;
 }
 /** @nodts @return {PopoverHeader} */
 static m_popoverHeader__org_patternfly_component_popover_PopoverHeader() {
  PopoverHeader.$clinit();
  return PopoverHeader.$create__();
 }
 /** @nodts @return {!PopoverHeader} */
 static $create__() {
  PopoverHeader.$clinit();
  let $instance = new PopoverHeader();
  $instance.$ctor__org_patternfly_component_popover_PopoverHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_PopoverHeader__void() {
  this.$ctor__org_patternfly_component_popover_PopoverSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PopoverHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverHeader, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_headerId__org_patternfly_component_popover_PopoverHeader = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Popover__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['header'], j_l_String)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_headerId__org_patternfly_component_popover_PopoverHeader), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_headerElement__org_patternfly_component_popover_PopoverHeader = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(6).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_headerElement__org_patternfly_component_popover_PopoverHeader;
 }
 /** @nodts @return {PopoverHeader} */
 m_that__org_patternfly_component_popover_PopoverHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_PopoverHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {PopoverHeader} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_add__java_lang_String__org_patternfly_component_popover_PopoverHeader(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_popover_PopoverHeader(/** SafeHtml */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_textContent__java_lang_String__org_patternfly_component_popover_PopoverHeader(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_textNode__java_lang_String__org_patternfly_component_popover_PopoverHeader(/** ?string */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 //Default method forwarding stub.
 /** @nodts @return {PopoverHeader} */
 m_add__elemental2_dom_Node__org_patternfly_component_popover_PopoverHeader(/** Node */ arg0) {
  return /**@type {PopoverHeader}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PopoverHeader));
 }
 /** @nodts */
 static $clinit() {
  PopoverHeader.$clinit = () =>{};
  PopoverHeader.$loadModules();
  PopoverSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopoverHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
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
PopoverHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_popover_PopoverHeader = 'ph';
ElementDelegate.$markImplementor(PopoverHeader);
$Util.$setClassMetadata(PopoverHeader, 'org.patternfly.component.popover.PopoverHeader');

exports = PopoverHeader;

//# sourceMappingURL=PopoverHeader.js.map
