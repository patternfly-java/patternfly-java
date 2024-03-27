goog.module('org.patternfly.component.page.PageMainWizard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Wizard = goog.forwardDeclare('org.patternfly.component.wizard.Wizard$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainWizard>}
 */
class PageMainWizard extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainWizard} */
 static m_pageMainWizard__org_patternfly_component_page_PageMainWizard() {
  PageMainWizard.$clinit();
  return PageMainWizard.$create__();
 }
 /** @nodts @return {!PageMainWizard} */
 static $create__() {
  PageMainWizard.$clinit();
  let $instance = new PageMainWizard();
  $instance.$ctor__org_patternfly_component_page_PageMainWizard__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainWizard__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(PageMainWizard.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainWizard, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_wizard__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainWizard} */
 m_addWizard__org_patternfly_component_wizard_Wizard__org_patternfly_component_page_PageMainWizard(/** Wizard */ wizard) {
  return /**@type {PageMainWizard}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(wizard), PageMainWizard));
 }
 /** @nodts @return {PageMainWizard} */
 m_that__org_patternfly_component_page_PageMainWizard() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainWizard} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainWizard();
 }
 /** @nodts */
 static $clinit() {
  PageMainWizard.$clinit = () =>{};
  PageMainWizard.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainWizard;
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
PageMainWizard.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainWizard = 'pmw';
$Util.$setClassMetadata(PageMainWizard, 'org.patternfly.component.page.PageMainWizard');

exports = PageMainWizard;

//# sourceMappingURL=PageMainWizard.js.map
