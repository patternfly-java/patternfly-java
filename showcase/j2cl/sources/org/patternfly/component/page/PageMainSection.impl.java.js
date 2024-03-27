goog.module('org.patternfly.component.page.PageMainSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainSection>}
 * @implements {Fill<HTMLElement, PageMainSection>}
 * @implements {NoFill<HTMLElement, PageMainSection>}
 */
class PageMainSection extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainSection} */
 static m_pageMainSection__org_patternfly_component_page_PageMainSection() {
  PageMainSection.$clinit();
  return PageMainSection.$create__();
 }
 /** @nodts @return {!PageMainSection} */
 static $create__() {
  PageMainSection.$clinit();
  let $instance = new PageMainSection();
  $instance.$ctor__org_patternfly_component_page_PageMainSection__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainSection__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(PageMainSection.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainSection, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainSection} */
 m_background__org_patternfly_style_Brightness__org_patternfly_component_page_PageMainSection(/** Brightness */ brightness) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean('PF5/PageMainSection', this.m_element__elemental2_dom_HTMLElement(), 'background', brightness, Brightness.f_light__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light100__org_patternfly_style_Brightness, Brightness.f_dark100__org_patternfly_style_Brightness, Brightness.f_dark200__org_patternfly_style_Brightness], Brightness)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([brightness.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {PageMainSection} */
 m_that__org_patternfly_component_page_PageMainSection() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainSection();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_fill__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_fill__boolean__org_patternfly_component_page_PageMainSection(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_noFill__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_noFill__boolean__org_patternfly_component_page_PageMainSection(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 /** @nodts */
 static $clinit() {
  PageMainSection.$clinit = () =>{};
  PageMainSection.$loadModules();
  PageSectionBuilder.$clinit();
  Fill.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainSection;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMainSection.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainSection = 'pms';
Fill.$markImplementor(PageMainSection);
NoFill.$markImplementor(PageMainSection);
$Util.$setClassMetadata(PageMainSection, 'org.patternfly.component.page.PageMainSection');

exports = PageMainSection;

//# sourceMappingURL=PageMainSection.js.map
