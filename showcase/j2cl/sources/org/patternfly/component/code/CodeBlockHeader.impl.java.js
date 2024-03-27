goog.module('org.patternfly.component.code.CodeBlockHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeBlockSubComponent = goog.require('org.patternfly.component.code.CodeBlockSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlockActions = goog.forwardDeclare('org.patternfly.component.code.CodeBlockActions$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeBlockSubComponent<HTMLDivElement, CodeBlockHeader>}
 */
class CodeBlockHeader extends CodeBlockSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CodeBlockActions} @nodts*/
  this.f_actions__org_patternfly_component_code_CodeBlockHeader;
 }
 /** @nodts @return {CodeBlockHeader} */
 static m_codeBlockHeader__org_patternfly_component_code_CodeBlockHeader() {
  CodeBlockHeader.$clinit();
  return CodeBlockHeader.$create__();
 }
 /** @nodts @return {!CodeBlockHeader} */
 static $create__() {
  CodeBlockHeader.$clinit();
  let $instance = new CodeBlockHeader();
  $instance.$ctor__org_patternfly_component_code_CodeBlockHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockHeader__void() {
  this.$ctor__org_patternfly_component_code_CodeBlockSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeBlockHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CodeBlockHeader} */
 m_addActions__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(/** CodeBlockActions */ actions) {
  return this.m_add__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(actions);
 }
 /** @nodts @return {CodeBlockHeader} */
 m_add__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(/** CodeBlockActions */ actions) {
  this.f_actions__org_patternfly_component_code_CodeBlockHeader = actions;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {CodeBlockHeader} */
 m_that__org_patternfly_component_code_CodeBlockHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockHeader();
 }
 /** @nodts */
 static $clinit() {
  CodeBlockHeader.$clinit = () =>{};
  CodeBlockHeader.$loadModules();
  CodeBlockSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockHeader;
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
CodeBlockHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockHeader = 'cbh';
$Util.$setClassMetadata(CodeBlockHeader, 'org.patternfly.component.code.CodeBlockHeader');

exports = CodeBlockHeader;

//# sourceMappingURL=CodeBlockHeader.js.map
