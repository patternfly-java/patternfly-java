goog.module('org.patternfly.component.page.MastheadBrand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MastheadSubComponent = goog.require('org.patternfly.component.page.MastheadSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MastheadSubComponent<HTMLElement, MastheadBrand>}
 */
class MastheadBrand extends MastheadSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MastheadBrand} */
 static m_mastheadBrand__org_patternfly_component_page_MastheadBrand() {
  MastheadBrand.$clinit();
  return MastheadBrand.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {MastheadBrand} */
 static m_mastheadBrand__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_page_MastheadBrand(/** HTMLContainerBuilder<E> */ builder) {
  MastheadBrand.$clinit();
  return MastheadBrand.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!MastheadBrand} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  MastheadBrand.$clinit();
  let $instance = new MastheadBrand();
  $instance.$ctor__org_patternfly_component_page_MastheadBrand__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_page_MastheadBrand__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_page_MastheadSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MastheadBrand.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadBrand, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_brand__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {MastheadBrand} */
 m_addBrand__org_patternfly_component_brand_Brand__org_patternfly_component_page_MastheadBrand(/** Brand */ brand) {
  return /**@type {MastheadBrand}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(brand), MastheadBrand));
 }
 /** @nodts @return {MastheadBrand} */
 m_that__org_patternfly_component_page_MastheadBrand() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadBrand} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_MastheadBrand();
 }
 /** @nodts */
 static $clinit() {
  MastheadBrand.$clinit = () =>{};
  MastheadBrand.$loadModules();
  MastheadSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadBrand;
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
MastheadBrand.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadBrand = 'mb';
$Util.$setClassMetadata(MastheadBrand, 'org.patternfly.component.page.MastheadBrand');

exports = MastheadBrand;

//# sourceMappingURL=MastheadBrand.js.map
