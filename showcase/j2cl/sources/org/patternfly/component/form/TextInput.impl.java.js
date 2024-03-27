goog.module('org.patternfly.component.form.TextInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const FormControl = goog.require('org.patternfly.component.form.FormControl$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');
const Readonly = goog.require('org.patternfly.style.Modifiers.Readonly$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TextInputType = goog.forwardDeclare('org.patternfly.component.form.TextInputType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormControl<HTMLElement, TextInput>}
 * @implements {HasValue<?string>}
 * @implements {Plain<HTMLElement, TextInput>}
 * @implements {Readonly<HTMLElement, TextInput>}
 * @implements {WithIcon<HTMLElement, TextInput>}
 * @implements {WithText<HTMLElement, TextInput>}
 */
class TextInput extends FormControl {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_form_TextInput_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_form_TextInput_;
  /**@type {ChangeHandler<TextInput, ?string>} @nodts*/
  this.f_changeHandler__org_patternfly_component_form_TextInput_;
 }
 /** @nodts @return {TextInput} */
 static m_textInput__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ id) {
  TextInput.$clinit();
  return TextInput.$create__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String(TextInputType.f_text__org_patternfly_component_form_TextInputType, id, null);
 }
 /** @nodts @return {TextInput} */
 static m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ id, /** ?string */ value) {
  TextInput.$clinit();
  return TextInput.$create__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String(TextInputType.f_text__org_patternfly_component_form_TextInputType, id, value);
 }
 /** @nodts @return {TextInput} */
 static m_textInput__org_patternfly_component_form_TextInputType__java_lang_String__org_patternfly_component_form_TextInput(/** TextInputType */ type, /** ?string */ id) {
  TextInput.$clinit();
  return TextInput.$create__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String(type, id, null);
 }
 /** @nodts @return {TextInput} */
 static m_textInput__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput(/** TextInputType */ type, /** ?string */ id, /** ?string */ value) {
  TextInput.$clinit();
  return TextInput.$create__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String(type, id, value);
 }
 /** @nodts @return {!TextInput} */
 static $create__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String(/** TextInputType */ type, /** ?string */ id, /** ?string */ value) {
  TextInput.$clinit();
  let $instance = new TextInput();
  $instance.$ctor__org_patternfly_component_form_TextInput__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String__void(type, id, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_TextInput__org_patternfly_component_form_TextInputType__java_lang_String__java_lang_String__void(/** TextInputType */ type, /** ?string */ id, /** ?string */ value) {
  this.$ctor__org_patternfly_component_form_FormControl__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(id, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(FormControl.m_formControlContainer__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(/**@type {InputType}*/ ($Casts.$to(TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.getOrDefault(type, InputType.f_text__org_jboss_elemento_InputType), InputType))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), InputElementBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_TextInput__org_patternfly_component_ComponentType);
  this.f_inputElement__org_patternfly_component_form_TextInput_ = /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay));
  if (!$Equality.$same(value, null)) {
   this.m_value__java_lang_String__org_patternfly_component_form_TextInput(value);
  }
 }
 /** @nodts @return {TextInput} */
 m_readonly__boolean__org_patternfly_component_form_TextInput(/** boolean */ readonly) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.readOnly = readonly;
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__boolean__org_jboss_elemento_TypedBuilder(this, readonly), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_expanded__org_patternfly_component_form_TextInput() {
  return this.m_expanded__boolean__org_patternfly_component_form_TextInput(true);
 }
 /** @nodts @return {TextInput} */
 m_expanded__boolean__org_patternfly_component_form_TextInput(/** boolean */ expanded) {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, expanded);
  return /**@type {TextInput}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_form_TextInput(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_expanded__org_patternfly_style_Classes, expanded), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_plain__boolean__org_patternfly_component_form_TextInput(/** boolean */ plain) {
  if (plain) {
   this.m_readonly__org_jboss_elemento_TypedBuilder();
  }
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, plain), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_required__boolean__org_patternfly_component_form_TextInput(/** boolean */ required) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.required = required;
  return this;
 }
 /** @nodts @return {TextInput} */
 m_text__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ text) {
  return this.m_value__java_lang_String__org_patternfly_component_form_TextInput(text);
 }
 /** @nodts @return {TextInput} */
 m_value__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_form_TextInput(value, false);
 }
 /** @nodts @return {TextInput} */
 m_value__java_lang_String__boolean__org_patternfly_component_form_TextInput(/** ?string */ value, /** boolean */ fireEvent) {
  let changed = !Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_inputElement__org_patternfly_component_form_TextInput_.value, value);
  this.f_inputElement__org_patternfly_component_form_TextInput_.value = value;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_form_TextInput_, null)) {
   this.f_changeHandler__org_patternfly_component_form_TextInput_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, value);
  }
  return this;
 }
 /** @nodts @return {TextInput} */
 m_placeholder__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ placeholder) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.placeholder = placeholder;
  return this;
 }
 /** @nodts @return {TextInput} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_TextInput(/** Consumer<InputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_InputElementBuilder());
  return this;
 }
 /** @nodts @return {TextInput} */
 m_icon__elemental2_dom_Element__org_patternfly_component_form_TextInput(/** Element */ icon) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_form_TextInput_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_failSafeUtilitiesContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form(), this.f_iconContainer__org_patternfly_component_form_TextInput_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_form_TextInput_);
  this.f_iconContainer__org_patternfly_component_form_TextInput_.appendChild(icon);
  return this;
 }
 /** @nodts @return {TextInput} */
 m_removeIcon__org_patternfly_component_form_TextInput() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_form_TextInput_);
  if (!$Equality.$same(this.f_utilitiesContainer__org_patternfly_component_form_FormControl, null) && this.f_utilitiesContainer__org_patternfly_component_form_FormControl.childElementCount == 0) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_utilitiesContainer__org_patternfly_component_form_FormControl);
  }
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {TextInput} */
 m_that__org_patternfly_component_form_TextInput() {
  return this;
 }
 /** @nodts @return {TextInput} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_TextInput(/** ChangeHandler<TextInput, ?string> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_form_TextInput_ = changeHandler;
  this.f_inputElement__org_patternfly_component_form_TextInput_.addEventListener(EventType.f_keyup__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_inputElement__org_patternfly_component_form_TextInput_.value);
  }));
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_inputElement__org_patternfly_component_form_TextInput_.value;
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_inputElement__org_patternfly_component_form_TextInput_));
 }
 /** @override @nodts */
 m_disableInputElement__boolean__void_$pp_org_patternfly_component_form(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.disabled = disabled;
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_TextInput();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_plain__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_readonly__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_readonly__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {TextInput}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_form_TextInput();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_form_TextInput(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_plain__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_readonly__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_style_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_form_TextInput(/** PredefinedIcon */ arg0) {
  return /**@type {TextInput}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TextInput));
 }
 /** @nodts */
 static $clinit() {
  TextInput.$clinit = () =>{};
  TextInput.$loadModules();
  FormControl.$clinit();
  Plain.$clinit();
  Readonly.$clinit();
  WithIcon.$clinit();
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_ = /**@type {!HashMap<TextInputType, InputType>}*/ (HashMap.$create__());
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_date__org_patternfly_component_form_TextInputType, InputType.f_date__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_email__org_patternfly_component_form_TextInputType, InputType.f_email__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_month__org_patternfly_component_form_TextInputType, InputType.f_month__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_number__org_patternfly_component_form_TextInputType, InputType.f_number__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_search__org_patternfly_component_form_TextInputType, InputType.f_search__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_tel__org_patternfly_component_form_TextInputType, InputType.f_tel__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_text__org_patternfly_component_form_TextInputType, InputType.f_text__org_jboss_elemento_InputType);
  TextInput.f_typeMapping__org_patternfly_component_form_TextInput_.put(TextInputType.f_time__org_patternfly_component_form_TextInputType, InputType.f_time__org_jboss_elemento_InputType);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInput;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TextInputType = goog.module.get('org.patternfly.component.form.TextInputType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<TextInputType, InputType>} @nodts*/
TextInput.f_typeMapping__org_patternfly_component_form_TextInput_;
HasValue.$markImplementor(TextInput);
Plain.$markImplementor(TextInput);
Readonly.$markImplementor(TextInput);
WithIcon.$markImplementor(TextInput);
WithText.$markImplementor(TextInput);
$Util.$setClassMetadata(TextInput, 'org.patternfly.component.form.TextInput');

exports = TextInput;

//# sourceMappingURL=TextInput.js.map
