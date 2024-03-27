goog.module('org.patternfly.component.code.CodeEditorAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const CodeEditorSubComponent = goog.require('org.patternfly.component.code.CodeEditorSubComponent$impl');

let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.jboss.elemento.DomGlobal.$Overlay$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeEditorSubComponent<HTMLElement, CodeEditorAction>}
 * @implements {WithIcon<HTMLElement, CodeEditorAction>}
 */
class CodeEditorAction extends CodeEditorSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_code_CodeEditorAction_;
  /**@type {ComponentHandler<CodeEditorAction>} @nodts*/
  this.f_handler__org_patternfly_component_code_CodeEditorAction_;
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(/** PredefinedIcon */ icon) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(Button.m_button__org_patternfly_component_button_Button().m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon.m_element__org_jboss_elemento_svg_SVGElement()).m_control__org_patternfly_component_button_Button());
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__elemental2_dom_Element__org_patternfly_component_code_CodeEditorAction(/** Element */ icon) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(Button.m_button__org_patternfly_component_button_Button().m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon).m_control__org_patternfly_component_button_Button());
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/** Button */ button) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(button);
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction() {
  CodeEditorAction.$clinit();
  return CodeEditorAction.m_codeEditorCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_component_code_CodeEditorAction('Copy to clipboard', 'Successfully copied to clipboard!');
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_component_code_CodeEditorAction(/** ?string */ copyText, /** ?string */ copiedText) {
  CodeEditorAction.$clinit();
  let copyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_CodeEditor__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['copy'], j_l_String)));
  let copyTooltip = Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(copyId), copyText).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(CloseHandler.$adapt((/** Event */ e, t) =>{
   let t_1 = /**@type {Tooltip}*/ ($Casts.$to(t, Tooltip));
   t_1.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(copyText);
  })).m_appendToBody__org_patternfly_component_tooltip_Tooltip();
  return /**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.$create__org_patternfly_component_button_Button(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_copy__org_patternfly_icon_PredefinedIcon()), Button)).m_control__org_patternfly_component_button_Button()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(copyId), CodeEditorAction)).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorAction(copyText).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event, codeBlock) =>{
   let codeBlock_1 = /**@type {CodeEditor}*/ ($Casts.$to(codeBlock, CodeEditor));
   copyTooltip.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(copiedText);
   DomGlobal_$Overlay.f_navigator__org_jboss_elemento_DomGlobal_$Overlay.clipboard.writeText(codeBlock_1.m_code__java_lang_String());
  }));
 }
 /** @nodts @return {!CodeEditorAction} */
 static $create__org_patternfly_component_button_Button(/** Button */ button) {
  CodeEditorAction.$clinit();
  let $instance = new CodeEditorAction();
  $instance.$ctor__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_button_Button__void(button);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_button_Button__void(/** Button */ button) {
  this.$ctor__org_patternfly_component_code_CodeEditorSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeEditorAction.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorAction, button.m_element__elemental2_dom_HTMLElement());
  this.f_button__org_patternfly_component_code_CodeEditorAction_ = button;
 }
 /** @nodts @return {CodeEditorAction} */
 m_icon__elemental2_dom_Element__org_patternfly_component_code_CodeEditorAction(/** Element */ icon) {
  this.f_button__org_patternfly_component_code_CodeEditorAction_.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon);
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_removeIcon__org_patternfly_component_code_CodeEditorAction() {
  this.f_button__org_patternfly_component_code_CodeEditorAction_.m_removeIcon__org_patternfly_component_button_Button();
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_that__org_patternfly_component_code_CodeEditorAction() {
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorAction(/** ?string */ label) {
  if (!$Equality.$same(this.f_button__org_patternfly_component_code_CodeEditorAction_, null)) {
   this.f_button__org_patternfly_component_code_CodeEditorAction_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(/** ComponentHandler<CodeEditor> */ handler) {
  this.f_button__org_patternfly_component_code_CodeEditorAction_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {CodeEditor}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), CodeEditor)));
  });
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {CodeEditorAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorAction} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_code_CodeEditorAction(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorAction} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_code_CodeEditorAction();
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeEditorAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(/** PredefinedIcon */ arg0) {
  return /**@type {CodeEditorAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), CodeEditorAction));
 }
 /** @nodts */
 static $clinit() {
  CodeEditorAction.$clinit = () =>{};
  CodeEditorAction.$loadModules();
  CodeEditorSubComponent.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorAction;
 }
 
 /** @nodts */
 static $loadModules() {
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  DomGlobal_$Overlay = goog.module.get('org.jboss.elemento.DomGlobal.$Overlay$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeEditorAction.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeEditorAction = 'cea';
WithIcon.$markImplementor(CodeEditorAction);
$Util.$setClassMetadata(CodeEditorAction, 'org.patternfly.component.code.CodeEditorAction');

exports = CodeEditorAction;

//# sourceMappingURL=CodeEditorAction.js.map
