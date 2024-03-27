goog.module('org.patternfly.component.toolbar.ToolbarContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ToolbarGroup = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarGroup$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarContent>}
 * @implements {ElementDelegate<HTMLDivElement, ToolbarContent>}
 */
class ToolbarContent extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_;
 }
 /** @nodts @return {ToolbarContent} */
 static m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent() {
  ToolbarContent.$clinit();
  return ToolbarContent.$create__();
 }
 /** @nodts @return {!ToolbarContent} */
 static $create__() {
  ToolbarContent.$clinit();
  let $instance = new ToolbarContent();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarContent__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarContent, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toolbar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes, Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_;
 }
 /** @nodts @return {ToolbarContent} */
 m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarItem */ item) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(item);
 }
 /** @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarItem */ item) {
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ToolbarContent} */
 m_addGroup__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarGroup */ group) {
  return this.m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(group);
 }
 /** @nodts @return {ToolbarContent} */
 m_add__org_patternfly_component_toolbar_ToolbarGroup__org_patternfly_component_toolbar_ToolbarContent(/** ToolbarGroup */ group) {
  this.f_contentSection__org_patternfly_component_toolbar_ToolbarContent_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ToolbarContent} */
 m_that__org_patternfly_component_toolbar_ToolbarContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarContent} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_add__java_lang_String__org_patternfly_component_toolbar_ToolbarContent(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_toolbar_ToolbarContent(/** SafeHtml */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_textContent__java_lang_String__org_patternfly_component_toolbar_ToolbarContent(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_textNode__java_lang_String__org_patternfly_component_toolbar_ToolbarContent(/** ?string */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToolbarContent} */
 m_add__elemental2_dom_Node__org_patternfly_component_toolbar_ToolbarContent(/** Node */ arg0) {
  return /**@type {ToolbarContent}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToolbarContent));
 }
 /** @nodts */
 static $clinit() {
  ToolbarContent.$clinit = () =>{};
  ToolbarContent.$loadModules();
  ToolbarSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarContent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarContent = 'tc';
ElementDelegate.$markImplementor(ToolbarContent);
$Util.$setClassMetadata(ToolbarContent, 'org.patternfly.component.toolbar.ToolbarContent');

exports = ToolbarContent;

//# sourceMappingURL=ToolbarContent.js.map
