goog.module('org.patternfly.component.page.PageMainTabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainTabs>}
 */
class PageMainTabs extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainTabs} */
 static m_pageMainTabs__org_patternfly_component_page_PageMainTabs() {
  PageMainTabs.$clinit();
  return PageMainTabs.$create__();
 }
 /** @nodts @return {!PageMainTabs} */
 static $create__() {
  PageMainTabs.$clinit();
  let $instance = new PageMainTabs();
  $instance.$ctor__org_patternfly_component_page_PageMainTabs__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainTabs__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(PageMainTabs.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainTabs, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_tabs__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainTabs} */
 m_addTabs__org_patternfly_component_tabs_Tabs__org_patternfly_component_page_PageMainTabs(/** Tabs */ tabs) {
  return /**@type {PageMainTabs}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tabs), PageMainTabs));
 }
 /** @nodts @return {PageMainTabs} */
 m_that__org_patternfly_component_page_PageMainTabs() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainTabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainTabs();
 }
 /** @nodts */
 static $clinit() {
  PageMainTabs.$clinit = () =>{};
  PageMainTabs.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainTabs;
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
PageMainTabs.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainTabs = 'pmt';
$Util.$setClassMetadata(PageMainTabs, 'org.patternfly.component.page.PageMainTabs');

exports = PageMainTabs;

//# sourceMappingURL=PageMainTabs.js.map
