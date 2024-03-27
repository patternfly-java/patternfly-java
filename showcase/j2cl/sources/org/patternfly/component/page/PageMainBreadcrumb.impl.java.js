goog.module('org.patternfly.component.page.PageMainBreadcrumb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breadcrumb = goog.forwardDeclare('org.patternfly.component.breadcrumb.Breadcrumb$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainBreadcrumb>}
 */
class PageMainBreadcrumb extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainBreadcrumb} */
 static m_pageMainBreadcrumb__org_patternfly_component_page_PageMainBreadcrumb() {
  PageMainBreadcrumb.$clinit();
  return PageMainBreadcrumb.$create__();
 }
 /** @nodts @return {!PageMainBreadcrumb} */
 static $create__() {
  PageMainBreadcrumb.$clinit();
  let $instance = new PageMainBreadcrumb();
  $instance.$ctor__org_patternfly_component_page_PageMainBreadcrumb__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainBreadcrumb__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(PageMainBreadcrumb.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainBreadcrumb, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_breadcrumb__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainBreadcrumb} */
 m_addBreadcrumb__org_patternfly_component_breadcrumb_Breadcrumb__org_patternfly_component_page_PageMainBreadcrumb(/** Breadcrumb */ breadcrumb) {
  return /**@type {PageMainBreadcrumb}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(breadcrumb), PageMainBreadcrumb));
 }
 /** @nodts @return {PageMainBreadcrumb} */
 m_that__org_patternfly_component_page_PageMainBreadcrumb() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainBreadcrumb} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainBreadcrumb();
 }
 /** @nodts */
 static $clinit() {
  PageMainBreadcrumb.$clinit = () =>{};
  PageMainBreadcrumb.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainBreadcrumb;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMainBreadcrumb.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainBreadcrumb = 'pmb';
$Util.$setClassMetadata(PageMainBreadcrumb, 'org.patternfly.component.page.PageMainBreadcrumb');

exports = PageMainBreadcrumb;

//# sourceMappingURL=PageMainBreadcrumb.js.map
