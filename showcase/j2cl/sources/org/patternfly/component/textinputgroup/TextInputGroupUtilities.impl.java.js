goog.module('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextInputGroupSubComponent = goog.require('org.patternfly.component.textinputgroup.TextInputGroupSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TextInputGroupSubComponent<HTMLDivElement, TextInputGroupUtilities>}
 */
class TextInputGroupUtilities extends TextInputGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TextInputGroup} @nodts*/
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupUtilities_;
 }
 /** @nodts @return {TextInputGroupUtilities} */
 static m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  TextInputGroupUtilities.$clinit();
  return TextInputGroupUtilities.$create__boolean(true);
 }
 /** @nodts @return {TextInputGroupUtilities} */
 static m_textInputGroupUtilities__boolean__org_patternfly_component_textinputgroup_TextInputGroupUtilities(/** boolean */ hidden) {
  TextInputGroupUtilities.$clinit();
  return TextInputGroupUtilities.$create__boolean(hidden);
 }
 /** @nodts @return {!TextInputGroupUtilities} */
 static $create__boolean(/** boolean */ hidden) {
  TextInputGroupUtilities.$clinit();
  let $instance = new TextInputGroupUtilities();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroupUtilities__boolean__void(hidden);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroupUtilities__boolean__void(/** boolean */ hidden) {
  this.$ctor__org_patternfly_component_textinputgroup_TextInputGroupSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(TextInputGroupUtilities.f_SUB_COMPONENT_NAME__org_patternfly_component_textinputgroup_TextInputGroupUtilities, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_utilities__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (hidden) {
   this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('display', 'none');
  }
 }
 /** @nodts @return {TextInputGroupUtilities} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupUtilities} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroupUtilities();
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupUtilities.$clinit = () =>{};
  TextInputGroupUtilities.$loadModules();
  TextInputGroupSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupUtilities;
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
TextInputGroupUtilities.f_SUB_COMPONENT_NAME__org_patternfly_component_textinputgroup_TextInputGroupUtilities = 'tigu';
$Util.$setClassMetadata(TextInputGroupUtilities, 'org.patternfly.component.textinputgroup.TextInputGroupUtilities');

exports = TextInputGroupUtilities;

//# sourceMappingURL=TextInputGroupUtilities.js.map
