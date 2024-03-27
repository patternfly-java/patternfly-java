goog.module('org.patternfly.component.code.CodeEditorLinks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.component.code.CodeEditorSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeEditorLink = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLink$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLDivElement, CodeEditorLinks>}
 */
class CodeEditorLinks extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorLinks} */
 static m_codeEditorLinks__org_patternfly_component_code_CodeEditorLinks() {
  CodeEditorLinks.$clinit();
  return CodeEditorLinks.$create__();
 }
 /** @nodts @return {!CodeEditorLinks} */
 static $create__() {
  CodeEditorLinks.$clinit();
  let $instance = new CodeEditorLinks();
  $instance.$ctor__org_patternfly_component_code_CodeEditorLinks__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorLinks__void() {
  this.$ctor__org_patternfly_component_code_CodeEditorSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorLinks.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorLinks, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_keyboard__org_patternfly_style_Classes, Classes.f_shortcuts__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CodeEditorLinks} */
 m_addLink__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(/** CodeEditorLink */ link) {
  return /**@type {CodeEditorLinks}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(link), CodeEditorLinks));
 }
 /** @nodts @return {CodeEditorLinks} */
 m_that__org_patternfly_component_code_CodeEditorLinks() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorLinks} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorLinks();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorLinks.$clinit = () =>{};
  CodeEditorLinks.$loadModules();
  CodeEditorSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorLinks;
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
CodeEditorLinks.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorLinks = 'cels';
$Util.$setClassMetadata(CodeEditorLinks, 'org.patternfly.component.code.CodeEditorLinks');

exports = CodeEditorLinks;

//# sourceMappingURL=CodeEditorLinks.js.map
