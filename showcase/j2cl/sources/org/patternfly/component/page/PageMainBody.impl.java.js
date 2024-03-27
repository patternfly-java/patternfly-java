goog.module('org.patternfly.component.page.PageMainBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLDivElement, PageMainBody>}
 */
class PageMainBody extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainBody} */
 static m_pageMainBody__org_patternfly_component_page_PageMainBody() {
  PageMainBody.$clinit();
  return PageMainBody.$create__();
 }
 /** @nodts @return {!PageMainBody} */
 static $create__() {
  PageMainBody.$clinit();
  let $instance = new PageMainBody();
  $instance.$ctor__org_patternfly_component_page_PageMainBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainBody__void() {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PageMainBody.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {PageMainBody} */
 m_that__org_patternfly_component_page_PageMainBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainBody();
 }
 /** @nodts */
 static $clinit() {
  PageMainBody.$clinit = () =>{};
  PageMainBody.$loadModules();
  PageSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainBody;
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
PageMainBody.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainBody = 'pmb';
$Util.$setClassMetadata(PageMainBody, 'org.patternfly.component.page.PageMainBody');

exports = PageMainBody;

//# sourceMappingURL=PageMainBody.js.map
