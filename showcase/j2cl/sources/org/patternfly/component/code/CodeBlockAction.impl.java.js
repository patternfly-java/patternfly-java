goog.module('org.patternfly.component.code.CodeBlockAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const CodeBlockSubComponent = goog.require('org.patternfly.component.code.CodeBlockSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.jboss.elemento.DomGlobal.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CodeBlockSubComponent<HTMLDivElement, CodeBlockAction>}
 * @implements {WithIcon<HTMLDivElement, CodeBlockAction>}
 */
class CodeBlockAction extends CodeBlockSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_code_CodeBlockAction_;
  /**@type {ComponentHandler<CodeBlockAction>} @nodts*/
  this.f_handler__org_patternfly_component_code_CodeBlockAction_;
  /**@type {CodeBlock} @nodts*/
  this.f_codeBlock__org_patternfly_component_code_CodeBlockAction_;
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(/** PredefinedIcon */ icon) {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__elemental2_dom_Element(icon.m_element__org_jboss_elemento_svg_SVGElement());
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockAction__elemental2_dom_Element__org_patternfly_component_code_CodeBlockAction(/** Element */ icon) {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__elemental2_dom_Element(icon);
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction() {
  CodeBlockAction.$clinit();
  return CodeBlockAction.m_codeBlockCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_component_code_CodeBlockAction('Copy to clipboard', 'Successfully copied to clipboard!');
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_component_code_CodeBlockAction(/** ?string */ copyText, /** ?string */ copiedText) {
  CodeBlockAction.$clinit();
  let copyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_CodeBlock__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['copy'], j_l_String)));
  let copyTooltip = Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(copyId), copyText).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(CloseHandler.$adapt((/** Event */ e, t) =>{
   let t_1 = /**@type {Tooltip}*/ ($Casts.$to(t, Tooltip));
   t_1.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(copyText);
  })).m_appendToBody__org_patternfly_component_tooltip_Tooltip();
  return /**@type {CodeBlockAction}*/ ($Casts.$to(CodeBlockAction.$create__elemental2_dom_Element(fas.m_copy__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(copyId), CodeBlockAction)).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction(copyText).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ event, codeBlock) =>{
   let codeBlock_1 = /**@type {CodeBlock}*/ ($Casts.$to(codeBlock, CodeBlock));
   copyTooltip.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(copiedText);
   DomGlobal_$Overlay.f_navigator__org_jboss_elemento_DomGlobal_$Overlay.clipboard.writeText(codeBlock_1.m_code__java_lang_String());
  }));
 }
 /** @nodts @return {!CodeBlockAction} */
 static $create__elemental2_dom_Element(/** Element */ icon) {
  CodeBlockAction.$clinit();
  let $instance = new CodeBlockAction();
  $instance.$ctor__org_patternfly_component_code_CodeBlockAction__elemental2_dom_Element__void(icon);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockAction__elemental2_dom_Element__void(/** Element */ icon) {
  this.$ctor__org_patternfly_component_code_CodeBlockSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CodeBlockAction.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockAction, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_code_CodeBlockAction_ = /**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon));
 }
 /** @nodts @return {CodeBlockAction} */
 m_icon__elemental2_dom_Element__org_patternfly_component_code_CodeBlockAction(/** Element */ icon) {
  this.f_button__org_patternfly_component_code_CodeBlockAction_.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(icon);
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_removeIcon__org_patternfly_component_code_CodeBlockAction() {
  this.f_button__org_patternfly_component_code_CodeBlockAction_.m_removeIcon__org_patternfly_component_button_Button();
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_that__org_patternfly_component_code_CodeBlockAction() {
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction(/** ?string */ label) {
  this.f_button__org_patternfly_component_code_CodeBlockAction_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(/** ComponentHandler<CodeBlock> */ handler) {
  this.f_button__org_patternfly_component_code_CodeBlockAction_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {CodeBlock}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), CodeBlock)));
  });
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockAction();
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {CodeBlockAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), CodeBlockAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockAction} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_code_CodeBlockAction(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockAction} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_code_CodeBlockAction();
 }
 //Default method forwarding stub.
 /** @nodts @return {CodeBlockAction} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(/** PredefinedIcon */ arg0) {
  return /**@type {CodeBlockAction}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), CodeBlockAction));
 }
 /** @nodts */
 static $clinit() {
  CodeBlockAction.$clinit = () =>{};
  CodeBlockAction.$loadModules();
  CodeBlockSubComponent.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockAction;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  DomGlobal_$Overlay = goog.module.get('org.jboss.elemento.DomGlobal.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeBlockAction.f_SUB_COMPONENT_NAME__org_patternfly_component_code_CodeBlockAction = 'cba';
WithIcon.$markImplementor(CodeBlockAction);
$Util.$setClassMetadata(CodeBlockAction, 'org.patternfly.component.code.CodeBlockAction');

exports = CodeBlockAction;

//# sourceMappingURL=CodeBlockAction.js.map
