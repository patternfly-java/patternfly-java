goog.module('org.patternfly.component.code.CodeEditorHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.component.code.CodeEditorSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeaderMain = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeaderMain$impl');
let CodeEditorLinks = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLinks$impl');
let CodeEditorTab = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTab$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLDivElement, CodeEditorHeader>}
 */
class CodeEditorHeader extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorHeader} */
 static m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader() {
  CodeEditorHeader.$clinit();
  return CodeEditorHeader.$create__();
 }
 /** @nodts @return {!CodeEditorHeader} */
 static $create__() {
  CodeEditorHeader.$clinit();
  let $instance = new CodeEditorHeader();
  $instance.$ctor__org_patternfly_component_code_CodeEditorHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorHeader__void() {
  this.$ctor__org_patternfly_component_code_CodeEditorSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorActions */ actions) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actions), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addMain__org_patternfly_component_code_CodeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorHeaderMain */ main) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(main), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addLinks__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorLinks */ links) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(links), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorTab */ tab) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tab), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_that__org_patternfly_component_code_CodeEditorHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorHeader();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorHeader.$clinit = () =>{};
  CodeEditorHeader.$loadModules();
  CodeEditorSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorHeader;
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
CodeEditorHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorHeader = 'ceh';
$Util.$setClassMetadata(CodeEditorHeader, 'org.patternfly.component.code.CodeEditorHeader');

exports = CodeEditorHeader;

//# sourceMappingURL=CodeEditorHeader.js.map
