goog.module('org.patternfly.component.page.MastheadMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MastheadSubComponent = goog.require('org.patternfly.component.page.MastheadSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let MastheadBrand = goog.forwardDeclare('org.patternfly.component.page.MastheadBrand$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MastheadSubComponent<HTMLDivElement, MastheadMain>}
 */
class MastheadMain extends MastheadSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MastheadMain} */
 static m_mastheadMain__org_patternfly_component_page_MastheadMain() {
  MastheadMain.$clinit();
  return MastheadMain.$create__();
 }
 /** @nodts @return {!MastheadMain} */
 static $create__() {
  MastheadMain.$clinit();
  let $instance = new MastheadMain();
  $instance.$ctor__org_patternfly_component_page_MastheadMain__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_MastheadMain__void() {
  this.$ctor__org_patternfly_component_page_MastheadSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MastheadMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadMain, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MastheadMain} */
 m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/** MastheadBrand */ brand) {
  return /**@type {MastheadMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(brand), MastheadMain));
 }
 /** @nodts @return {MastheadMain} */
 m_that__org_patternfly_component_page_MastheadMain() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_MastheadMain();
 }
 /** @nodts */
 static $clinit() {
  MastheadMain.$clinit = () =>{};
  MastheadMain.$loadModules();
  MastheadSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadMain;
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
MastheadMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadMain = 'mhm';
$Util.$setClassMetadata(MastheadMain, 'org.patternfly.component.page.MastheadMain');

exports = MastheadMain;

//# sourceMappingURL=MastheadMain.js.map
