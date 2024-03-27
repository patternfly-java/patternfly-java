goog.module('org.patternfly.component.navigation.NavigationLinkText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLElement, NavigationLinkText>}
 */
class NavigationLinkText extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {NavigationLinkText} */
 static m_navigationLinkText__org_patternfly_component_navigation_NavigationLinkText() {
  NavigationLinkText.$clinit();
  return NavigationLinkText.$create__();
 }
 /** @nodts @return {!NavigationLinkText} */
 static $create__() {
  NavigationLinkText.$clinit();
  let $instance = new NavigationLinkText();
  $instance.$ctor__org_patternfly_component_navigation_NavigationLinkText__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationLinkText__void() {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(NavigationLinkText.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationLinkText, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {NavigationLinkText} */
 m_that__org_patternfly_component_navigation_NavigationLinkText() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationLinkText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationLinkText();
 }
 /** @nodts */
 static $clinit() {
  NavigationLinkText.$clinit = () =>{};
  NavigationLinkText.$loadModules();
  NavigationSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationLinkText;
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
NavigationLinkText.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationLinkText = 'nlt';
$Util.$setClassMetadata(NavigationLinkText, 'org.patternfly.component.navigation.NavigationLinkText');

exports = NavigationLinkText;

//# sourceMappingURL=NavigationLinkText.js.map
