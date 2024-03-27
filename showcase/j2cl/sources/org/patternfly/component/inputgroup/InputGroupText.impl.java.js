goog.module('org.patternfly.component.inputgroup.InputGroupText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const InputGroupSubComponent = goog.require('org.patternfly.component.inputgroup.InputGroupSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {InputGroupSubComponent<HTMLElement, InputGroupText>}
 * @implements {ElementDelegate<HTMLElement, InputGroupText>}
 * @implements {Plain<HTMLElement, InputGroupText>}
 * @implements {WithText<HTMLElement, InputGroupText>}
 * @implements {WithIcon<HTMLElement, InputGroupText>}
 */
class InputGroupText extends InputGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_inputgroup_InputGroupText_;
 }
 /** @nodts @return {InputGroupText} */
 static m_inputGroupText__org_patternfly_component_inputgroup_InputGroupText() {
  InputGroupText.$clinit();
  return InputGroupText.$create__java_lang_String(null);
 }
 /** @nodts @return {InputGroupText} */
 static m_inputGroupText__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(/** ?string */ text) {
  InputGroupText.$clinit();
  return InputGroupText.$create__java_lang_String(text);
 }
 /** @nodts @return {!InputGroupText} */
 static $create__java_lang_String(/** ?string */ text) {
  InputGroupText.$clinit();
  let $instance = new InputGroupText();
  $instance.$ctor__org_patternfly_component_inputgroup_InputGroupText__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_inputgroup_InputGroupText__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_inputgroup_InputGroupSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(InputGroupText.f_SUB_COMPONENT_NAME__org_patternfly_component_inputgroup_InputGroupText, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_inputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_box__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_textElement__org_patternfly_component_inputgroup_InputGroupText_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_inputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.m_text__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(text);
  }
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_textElement__org_patternfly_component_inputgroup_InputGroupText_;
 }
 /** @nodts @return {InputGroupText} */
 m_icon__elemental2_dom_Element__org_patternfly_component_inputgroup_InputGroupText(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_inputgroup_InputGroupText();
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon);
  return this;
 }
 /** @nodts @return {InputGroupText} */
 m_removeIcon__org_patternfly_component_inputgroup_InputGroupText() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_inputgroup_InputGroupText_);
  return this;
 }
 /** @nodts @return {InputGroupText} */
 m_text__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_inputgroup_InputGroupText_.textContent = text;
  return this;
 }
 /** @nodts @return {InputGroupText} */
 m_that__org_patternfly_component_inputgroup_InputGroupText() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_inputgroup_InputGroupText();
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputGroupText}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_inputgroup_InputGroupText(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroupText} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_inputgroup_InputGroupText();
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_add__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_inputgroup_InputGroupText(/** SafeHtml */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_textContent__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_textNode__java_lang_String__org_patternfly_component_inputgroup_InputGroupText(/** ?string */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_add__elemental2_dom_Node__org_patternfly_component_inputgroup_InputGroupText(/** Node */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_plain__org_patternfly_component_inputgroup_InputGroupText() {
  return /**@type {InputGroupText}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_plain__boolean__org_patternfly_component_inputgroup_InputGroupText(/** boolean */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroupText} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_inputgroup_InputGroupText(/** PredefinedIcon */ arg0) {
  return /**@type {InputGroupText}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), InputGroupText));
 }
 /** @nodts */
 static $clinit() {
  InputGroupText.$clinit = () =>{};
  InputGroupText.$loadModules();
  InputGroupSubComponent.$clinit();
  ElementDelegate.$clinit();
  Plain.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputGroupText;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
InputGroupText.f_SUB_COMPONENT_NAME__org_patternfly_component_inputgroup_InputGroupText = 'igt';
ElementDelegate.$markImplementor(InputGroupText);
Plain.$markImplementor(InputGroupText);
WithText.$markImplementor(InputGroupText);
WithIcon.$markImplementor(InputGroupText);
$Util.$setClassMetadata(InputGroupText, 'org.patternfly.component.inputgroup.InputGroupText');

exports = InputGroupText;

//# sourceMappingURL=InputGroupText.js.map
