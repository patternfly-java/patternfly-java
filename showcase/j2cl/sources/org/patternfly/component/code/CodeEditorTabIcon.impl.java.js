goog.module('org.patternfly.component.code.CodeEditorTabIcon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.component.code.CodeEditorSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLElement, CodeEditorTabIcon>}
 */
class CodeEditorTabIcon extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorTabIcon} */
 static m_codeEditorTabIcon__org_patternfly_component_code_CodeEditorTabIcon() {
  CodeEditorTabIcon.$clinit();
  return CodeEditorTabIcon.$create__elemental2_dom_Element(null);
 }
 /** @nodts @return {CodeEditorTabIcon} */
 static m_codeEditorTabIcon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorTabIcon(/** PredefinedIcon */ icon) {
  CodeEditorTabIcon.$clinit();
  return CodeEditorTabIcon.$create__elemental2_dom_Element(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts @return {CodeEditorTabIcon} */
 static m_codeEditorTabIcon__elemental2_dom_Element__org_patternfly_component_code_CodeEditorTabIcon(/** Element */ icon) {
  CodeEditorTabIcon.$clinit();
  return CodeEditorTabIcon.$create__elemental2_dom_Element(icon);
 }
 /** @nodts @return {!CodeEditorTabIcon} */
 static $create__elemental2_dom_Element(/** Element */ icon) {
  CodeEditorTabIcon.$clinit();
  let $instance = new CodeEditorTabIcon();
  $instance.$ctor__org_patternfly_component_code_CodeEditorTabIcon__elemental2_dom_Element__void(icon);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorTabIcon__elemental2_dom_Element__void(/** Element */ icon) {
  this.$ctor__org_patternfly_component_code_CodeEditorSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorTabIcon.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorTabIcon, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tab__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(icon, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon);
  }
 }
 /** @nodts @return {CodeEditorTabIcon} */
 m_that__org_patternfly_component_code_CodeEditorTabIcon() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorTabIcon} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorTabIcon();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorTabIcon.$clinit = () =>{};
  CodeEditorTabIcon.$loadModules();
  CodeEditorSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorTabIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeEditorTabIcon.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorTabIcon = 'ceti';
$Util.$setClassMetadata(CodeEditorTabIcon, 'org.patternfly.component.code.CodeEditorTabIcon');

exports = CodeEditorTabIcon;

//# sourceMappingURL=CodeEditorTabIcon.js.map
