goog.module('org.patternfly.component.page.PageSidebarBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');
const PageInsets = goog.require('org.patternfly.style.Modifiers.PageInsets$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLDivElement, PageSidebarBody>}
 * @implements {Fill<HTMLDivElement, PageSidebarBody>}
 * @implements {NoFill<HTMLDivElement, PageSidebarBody>}
 * @implements {PageInsets<HTMLDivElement, PageSidebarBody>}
 */
class PageSidebarBody extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageSidebarBody} */
 static m_pageSidebarBody__org_patternfly_component_page_PageSidebarBody() {
  PageSidebarBody.$clinit();
  return PageSidebarBody.$create__();
 }
 /** @nodts @return {!PageSidebarBody} */
 static $create__() {
  PageSidebarBody.$clinit();
  let $instance = new PageSidebarBody();
  $instance.$ctor__org_patternfly_component_page_PageSidebarBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSidebarBody__void() {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PageSidebarBody.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebarBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sidebar__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {PageSidebarBody} */
 m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_page_PageSidebarBody(/** Navigation */ navigation) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(navigation), PageSidebarBody));
 }
 /** @nodts @return {PageSidebarBody} */
 m_inset__org_patternfly_component_page_PageSidebarBody() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_pageInsets__org_patternfly_style_Classes)], j_l_String))), PageSidebarBody));
 }
 /** @nodts @return {PageSidebarBody} */
 m_noInset__org_patternfly_component_page_PageSidebarBody() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_insetNone__org_patternfly_style_Classes)], j_l_String))), PageSidebarBody));
 }
 /** @nodts @return {PageSidebarBody} */
 m_that__org_patternfly_component_page_PageSidebarBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageSidebarBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_pageInsets__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebarBody} */
 m_pageInsets__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_fill__org_patternfly_component_page_PageSidebarBody() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_fill__boolean__org_patternfly_component_page_PageSidebarBody(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_noFill__org_patternfly_component_page_PageSidebarBody() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_noFill__boolean__org_patternfly_component_page_PageSidebarBody(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_pageInsets__org_patternfly_component_page_PageSidebarBody() {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), PageSidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageSidebarBody} */
 m_pageInsets__boolean__org_patternfly_component_page_PageSidebarBody(/** boolean */ arg0) {
  return /**@type {PageSidebarBody}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageSidebarBody));
 }
 /** @nodts */
 static $clinit() {
  PageSidebarBody.$clinit = () =>{};
  PageSidebarBody.$loadModules();
  PageSubComponent.$clinit();
  Fill.$clinit();
  NoFill.$clinit();
  PageInsets.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSidebarBody;
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
PageSidebarBody.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebarBody = 'psbb';
Fill.$markImplementor(PageSidebarBody);
NoFill.$markImplementor(PageSidebarBody);
PageInsets.$markImplementor(PageSidebarBody);
$Util.$setClassMetadata(PageSidebarBody, 'org.patternfly.component.page.PageSidebarBody');

exports = PageSidebarBody;

//# sourceMappingURL=PageSidebarBody.js.map
