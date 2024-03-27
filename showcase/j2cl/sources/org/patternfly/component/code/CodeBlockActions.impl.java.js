goog.module('org.patternfly.component.code.CodeBlockActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeBlockSubComponent = goog.require('org.patternfly.component.code.CodeBlockSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlockAction = goog.forwardDeclare('org.patternfly.component.code.CodeBlockAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeBlockSubComponent<HTMLDivElement, CodeBlockActions>}
 */
class CodeBlockActions extends CodeBlockSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeBlockActions} */
 static m_codeBlockActions__org_patternfly_component_code_CodeBlockActions() {
  CodeBlockActions.$clinit();
  return CodeBlockActions.$create__();
 }
 /** @nodts @return {!CodeBlockActions} */
 static $create__() {
  CodeBlockActions.$clinit();
  let $instance = new CodeBlockActions();
  $instance.$ctor__org_patternfly_component_code_CodeBlockActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockActions__void() {
  this.$ctor__org_patternfly_component_code_CodeBlockSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeBlockActions.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockActions, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CodeBlockActions} */
 m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlockActions(/** CodeBlockAction */ action) {
  return /**@type {CodeBlockActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(action), CodeBlockActions));
 }
 /** @nodts @return {CodeBlockActions} */
 m_that__org_patternfly_component_code_CodeBlockActions() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockActions();
 }
 /** @nodts */
 static $clinit() {
  CodeBlockActions.$clinit = () =>{};
  CodeBlockActions.$loadModules();
  CodeBlockSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockActions;
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
CodeBlockActions.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockActions = 'cbas';
$Util.$setClassMetadata(CodeBlockActions, 'org.patternfly.component.code.CodeBlockActions');

exports = CodeBlockActions;

//# sourceMappingURL=CodeBlockActions.js.map
