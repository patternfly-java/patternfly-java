goog.module('org.patternfly.component.code.CodeEditorLink$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.component.code.CodeEditorSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLElement, CodeEditorLink>}
 */
class CodeEditorLink extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_buttonElement__org_patternfly_component_code_CodeEditorLink_;
 }
 /** @nodts @return {CodeEditorLink} */
 static m_codeEditorLink__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorLink(/** Button */ button) {
  CodeEditorLink.$clinit();
  return CodeEditorLink.$create__org_patternfly_component_button_Button(button);
 }
 /** @nodts @return {CodeEditorLink} */
 static m_codeEditorViewShortcutsLink__org_patternfly_component_code_CodeEditorLink() {
  CodeEditorLink.$clinit();
  return CodeEditorLink.$create__org_patternfly_component_button_Button(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(patternfly.m_help__org_patternfly_icon_PredefinedIcon(), 'View shortcuts'), Button))).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorLink('View shortcuts');
 }
 /** @nodts @return {!CodeEditorLink} */
 static $create__org_patternfly_component_button_Button(/** Button */ button) {
  CodeEditorLink.$clinit();
  let $instance = new CodeEditorLink();
  $instance.$ctor__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_button_Button__void(button);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_button_Button__void(/** Button */ button) {
  this.$ctor__org_patternfly_component_code_CodeEditorSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorLink.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorLink, button.m_element__elemental2_dom_HTMLElement());
  this.f_buttonElement__org_patternfly_component_code_CodeEditorLink_ = this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {CodeEditorLink} */
 m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorLink(/** ?string */ label) {
  if (!$Equality.$same(this.f_buttonElement__org_patternfly_component_code_CodeEditorLink_, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_buttonElement__org_patternfly_component_code_CodeEditorLink_, Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {CodeEditorLink} */
 m_that__org_patternfly_component_code_CodeEditorLink() {
  return this;
 }
 /** @nodts @return {CodeEditorLink} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorLink(/** ComponentHandler<CodeEditor> */ handler) {
  this.f_buttonElement__org_patternfly_component_code_CodeEditorLink_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, /**@type {CodeEditor}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), CodeEditor)));
  }));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorLink} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorLink();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorLink.$clinit = () =>{};
  CodeEditorLink.$loadModules();
  CodeEditorSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorLink;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeEditorLink.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorLink = 'cel';
$Util.$setClassMetadata(CodeEditorLink, 'org.patternfly.component.code.CodeEditorLink');

exports = CodeEditorLink;

//# sourceMappingURL=CodeEditorLink.js.map
