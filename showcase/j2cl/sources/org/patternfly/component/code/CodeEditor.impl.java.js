goog.module('org.patternfly.component.code.CodeEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Readonly2 = goog.require('org.patternfly.style.Modifiers.Readonly2$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLPreElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPreElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeader$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, CodeEditor>}
 * @implements {Readonly2<HTMLElement, CodeEditor>}
 */
class CodeEditor extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_preElement__org_patternfly_component_code_CodeEditor_;
 }
 /** @nodts @return {CodeEditor} */
 static m_codeEditor__org_patternfly_component_code_CodeEditor() {
  CodeEditor.$clinit();
  return CodeEditor.$create__java_lang_String(null);
 }
 /** @nodts @return {CodeEditor} */
 static m_codeEditor__java_lang_String__org_patternfly_component_code_CodeEditor(/** ?string */ code) {
  CodeEditor.$clinit();
  return CodeEditor.$create__java_lang_String(code);
 }
 /** @nodts @return {!CodeEditor} */
 static $create__java_lang_String(/** ?string */ code) {
  CodeEditor.$clinit();
  let $instance = new CodeEditor();
  $instance.$ctor__org_patternfly_component_code_CodeEditor__java_lang_String__void(code);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditor__java_lang_String__void(/** ?string */ code) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_CodeEditor__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_code__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_code__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('dir', 'ltr'), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_preElement__org_patternfly_component_code_CodeEditor_ = /**@type {HTMLPreElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLPreElement>}*/ ($Casts.$to(Elements.m_pre__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_code__org_patternfly_style_Classes, Classes.f_pre__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLPreElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)));
  if (!$Equality.$same(code, null)) {
   this.f_preElement__org_patternfly_component_code_CodeEditor_.textContent = code;
  }
  this.m_storeComponent__void();
 }
 /** @nodts @return {CodeEditor} */
 m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(/** CodeEditorHeader */ header) {
  return this.m_add__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(header);
 }
 /** @nodts @return {CodeEditor} */
 m_add__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(/** CodeEditorHeader */ header) {
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(header.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {CodeEditor} */
 m_code__java_lang_String__org_patternfly_component_code_CodeEditor(/** ?string */ code) {
  this.f_preElement__org_patternfly_component_code_CodeEditor_.textContent = code;
  return this;
 }
 /** @nodts @return {CodeEditor} */
 m_that__org_patternfly_component_code_CodeEditor() {
  return this;
 }
 /** @nodts @return {?string} */
 m_code__java_lang_String() {
  return this.f_preElement__org_patternfly_component_code_CodeEditor_.textContent;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditor} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditor();
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditor} */
 m_readonly__org_jboss_elemento_TypedBuilder() {
  return /**@type {CodeEditor}*/ ($Casts.$to(Readonly2.m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__org_jboss_elemento_TypedBuilder(this), CodeEditor));
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditor} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {CodeEditor}*/ ($Casts.$to(Readonly2.m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditor));
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeEditor} */
 m_readonly__org_patternfly_component_code_CodeEditor() {
  return /**@type {CodeEditor}*/ ($Casts.$to(Readonly2.m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__org_jboss_elemento_TypedBuilder(this), CodeEditor));
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeEditor} */
 m_readonly__boolean__org_patternfly_component_code_CodeEditor(/** boolean */ arg0) {
  return /**@type {CodeEditor}*/ ($Casts.$to(Readonly2.m_readonly__$default__org_patternfly_style_Modifiers_Readonly2__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditor));
 }
 /** @nodts */
 static $clinit() {
  CodeEditor.$clinit = () =>{};
  CodeEditor.$loadModules();
  BaseComponent.$clinit();
  Readonly2.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditor;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLPreElement_$Overlay = goog.module.get('elemental2.dom.HTMLPreElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Readonly2.$markImplementor(CodeEditor);
$Util.$setClassMetadata(CodeEditor, 'org.patternfly.component.code.CodeEditor');

exports = CodeEditor;

//# sourceMappingURL=CodeEditor.js.map
