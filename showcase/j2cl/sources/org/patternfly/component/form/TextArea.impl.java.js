goog.module('org.patternfly.component.form.TextArea$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const FormControl = goog.require('org.patternfly.component.form.FormControl$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');
const Readonly = goog.require('org.patternfly.style.Modifiers.Readonly$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.jboss.elemento.DomGlobal.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TextAreaResize = goog.forwardDeclare('org.patternfly.component.form.TextAreaResize$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormControl<HTMLElement, TextArea>}
 * @implements {HasValue<?string>}
 * @implements {Plain<HTMLElement, TextArea>}
 * @implements {Readonly<HTMLElement, TextArea>}
 * @implements {WithText<HTMLElement, TextArea>}
 * @implements {Attachable}
 */
class TextArea extends FormControl {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLTextAreaElement} @nodts*/
  this.f_textAreaElement__org_patternfly_component_form_TextArea_;
  /**@type {boolean} @nodts*/
  this.f_autoResize__org_patternfly_component_form_TextArea_ = false;
  /**@type {TextAreaResize} @nodts*/
  this.f_resize__org_patternfly_component_form_TextArea_;
  /**@type {ChangeHandler<TextArea, ?string>} @nodts*/
  this.f_changeHandler__org_patternfly_component_form_TextArea_;
 }
 /** @nodts @return {TextArea} */
 static m_textArea__java_lang_String__org_patternfly_component_form_TextArea(/** ?string */ id) {
  TextArea.$clinit();
  return TextArea.$create__java_lang_String__java_lang_String(id, null);
 }
 /** @nodts @return {TextArea} */
 static m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea(/** ?string */ id, /** ?string */ value) {
  TextArea.$clinit();
  return TextArea.$create__java_lang_String__java_lang_String(id, value);
 }
 /** @nodts @return {!TextArea} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ value) {
  TextArea.$clinit();
  let $instance = new TextArea();
  $instance.$ctor__org_patternfly_component_form_TextArea__java_lang_String__java_lang_String__void(id, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_TextArea__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ value) {
  this.$ctor__org_patternfly_component_form_FormControl__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(id, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(FormControl.m_formControlContainer__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ ($Casts.$to(Elements.m_textarea__org_jboss_elemento_HTMLElementBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLElementBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((ta) =>{
   let ta_1 = /**@type {HTMLTextAreaElement}*/ ($Casts.$to(ta, $Overlay));
   ta_1.name = id;
   ta_1.spellcheck = false;
  })), HTMLElementBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), HTMLElementBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_TextInput__org_patternfly_component_ComponentType);
  this.f_textAreaElement__org_patternfly_component_form_TextArea_ = /**@type {HTMLTextAreaElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay));
  if (!$Equality.$same(value, null)) {
   this.m_value__java_lang_String__org_patternfly_component_form_TextArea(value);
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_autoResize__org_patternfly_component_form_TextArea_) {
   this.m_autoHeight__void_$p_org_patternfly_component_form_TextArea();
   this.f_textAreaElement__org_patternfly_component_form_TextArea_.addEventListener(EventType.f_input__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    this.m_autoHeight__void_$p_org_patternfly_component_form_TextArea();
   }));
  }
 }
 /** @nodts @return {TextArea} */
 m_autoResize__org_patternfly_component_form_TextArea() {
  this.f_autoResize__org_patternfly_component_form_TextArea_ = true;
  return this;
 }
 /** @nodts @return {TextArea} */
 m_readonly__boolean__org_patternfly_component_form_TextArea(/** boolean */ readonly) {
  this.f_textAreaElement__org_patternfly_component_form_TextArea_.readOnly = readonly;
  return /**@type {TextArea}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__boolean__org_jboss_elemento_TypedBuilder(this, readonly), TextArea));
 }
 /** @nodts @return {TextArea} */
 m_plain__boolean__org_patternfly_component_form_TextArea(/** boolean */ plain) {
  if (plain) {
   this.m_readonly__org_jboss_elemento_TypedBuilder();
  }
  return /**@type {TextArea}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, plain), TextArea));
 }
 /** @nodts @return {TextArea} */
 m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(/** TextAreaResize */ resize) {
  if (!$Equality.$same(this.f_resize__org_patternfly_component_form_TextArea_, null)) {
   this.m_element__elemental2_dom_HTMLElement().classList.remove(this.f_resize__org_patternfly_component_form_TextArea_.f_modifier__org_patternfly_component_form_TextAreaResize);
  }
  this.f_resize__org_patternfly_component_form_TextArea_ = resize;
  return /**@type {TextArea}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([resize.f_modifier__org_patternfly_component_form_TextAreaResize], j_l_String))), TextArea));
 }
 /** @nodts @return {TextArea} */
 m_required__boolean__org_patternfly_component_form_TextArea(/** boolean */ required) {
  if (required) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_textAreaElement__org_patternfly_component_form_TextArea_, Attributes.f_required__org_patternfly_core_Attributes, true);
  } else {
   this.f_textAreaElement__org_patternfly_component_form_TextArea_.removeAttribute(Attributes.f_required__org_patternfly_core_Attributes);
  }
  return this;
 }
 /** @nodts @return {TextArea} */
 m_text__java_lang_String__org_patternfly_component_form_TextArea(/** ?string */ text) {
  return this.m_value__java_lang_String__org_patternfly_component_form_TextArea(text);
 }
 /** @nodts @return {TextArea} */
 m_value__java_lang_String__org_patternfly_component_form_TextArea(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_form_TextArea(value, false);
 }
 /** @nodts @return {TextArea} */
 m_value__java_lang_String__boolean__org_patternfly_component_form_TextArea(/** ?string */ value, /** boolean */ fireEvent) {
  let changed = !Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_textAreaElement__org_patternfly_component_form_TextArea_.value, value);
  this.f_textAreaElement__org_patternfly_component_form_TextArea_.value = value;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_form_TextArea_, null)) {
   this.f_changeHandler__org_patternfly_component_form_TextArea_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, value);
  }
  return this;
 }
 /** @nodts @return {TextArea} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_TextArea(/** Consumer<HTMLElementBuilder<HTMLTextAreaElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_textAreaElement__org_jboss_elemento_HTMLElementBuilder());
  return this;
 }
 /** @nodts @return {TextArea} */
 m_that__org_patternfly_component_form_TextArea() {
  return this;
 }
 /** @nodts @return {TextArea} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_TextArea(/** ChangeHandler<TextArea, ?string> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_form_TextArea_ = changeHandler;
  this.f_textAreaElement__org_patternfly_component_form_TextArea_.addEventListener(EventType.f_keyup__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_textAreaElement__org_patternfly_component_form_TextArea_.value);
  }));
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_textAreaElement__org_patternfly_component_form_TextArea_.value;
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTextAreaElement>} */
 m_textAreaElement__org_jboss_elemento_HTMLElementBuilder() {
  return /**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_textAreaElement__org_patternfly_component_form_TextArea_));
 }
 /** @override @nodts */
 m_disableInputElement__boolean__void_$pp_org_patternfly_component_form(/** boolean */ disabled) {
  this.f_textAreaElement__org_patternfly_component_form_TextArea_.disabled = disabled;
 }
 /** @nodts */
 m_autoHeight__void_$p_org_patternfly_component_form_TextArea() {
  this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('height', 'inherit');
  let computed = DomGlobal_$Overlay.f_window__org_jboss_elemento_DomGlobal_$Overlay.getComputedStyle(this.f_textAreaElement__org_patternfly_component_form_TextArea_);
  let height = Integer.m_parseInt__java_lang_String__int(this.m_stripUnit__java_lang_String__java_lang_String_$p_org_patternfly_component_form_TextArea(computed.getPropertyValue('border-top-width'))) + Integer.m_parseInt__java_lang_String__int(this.m_stripUnit__java_lang_String__java_lang_String_$p_org_patternfly_component_form_TextArea(computed.getPropertyValue('padding-top'))) + this.f_textAreaElement__org_patternfly_component_form_TextArea_.scrollHeight + Integer.m_parseInt__java_lang_String__int(this.m_stripUnit__java_lang_String__java_lang_String_$p_org_patternfly_component_form_TextArea(computed.getPropertyValue('padding-bottom'))) + Integer.m_parseInt__java_lang_String__int(this.m_stripUnit__java_lang_String__java_lang_String_$p_org_patternfly_component_form_TextArea(computed.getPropertyValue('border-bottom-width'))) | 0;
  this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('height', height + 'px');
 }
 /** @nodts @return {?string} */
 m_stripUnit__java_lang_String__java_lang_String_$p_org_patternfly_component_form_TextArea(/** ?string */ value) {
  let index = j_l_String.m_indexOf__java_lang_String__java_lang_String__int(value, 'px');
  return index == (- 1 | 0) ? value : j_l_String.m_substring__java_lang_String__int__int__java_lang_String(value, 0, index);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_TextArea();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextArea}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextArea));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_plain__boolean__org_patternfly_component_form_TextArea(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_readonly__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextArea}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextArea));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_readonly__boolean__org_patternfly_component_form_TextArea(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextArea} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_form_TextArea(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextArea} */
 m_plain__org_patternfly_component_form_TextArea() {
  return /**@type {TextArea}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextArea));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextArea} */
 m_readonly__org_patternfly_component_form_TextArea() {
  return /**@type {TextArea}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextArea));
 }
 /** @nodts */
 static $clinit() {
  TextArea.$clinit = () =>{};
  TextArea.$loadModules();
  FormControl.$clinit();
  Plain.$clinit();
  Readonly.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextArea;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomGlobal_$Overlay = goog.module.get('org.jboss.elemento.DomGlobal.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(TextArea);
Plain.$markImplementor(TextArea);
Readonly.$markImplementor(TextArea);
WithText.$markImplementor(TextArea);
Attachable.$markImplementor(TextArea);
$Util.$setClassMetadata(TextArea, 'org.patternfly.component.form.TextArea');

exports = TextArea;

//# sourceMappingURL=TextArea.js.map
