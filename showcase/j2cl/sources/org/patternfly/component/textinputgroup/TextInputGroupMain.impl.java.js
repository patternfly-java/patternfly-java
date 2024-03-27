goog.module('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const TextInputGroupSubComponent = goog.require('org.patternfly.component.textinputgroup.TextInputGroupSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TextInputGroupSubComponent<HTMLDivElement, TextInputGroupMain>}
 * @implements {HasValue<?string>}
 * @implements {Disabled<HTMLDivElement, TextInputGroupMain>}
 * @implements {WithIcon<HTMLDivElement, TextInputGroupMain>}
 * @implements {WithText<HTMLDivElement, TextInputGroupMain>}
 */
class TextInputGroupMain extends TextInputGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {HTMLElement} @nodts*/
  this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {ChipGroup} @nodts*/
  this.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {TextInputGroup} @nodts*/
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {ChangeHandler<TextInputGroup, ?string>} @nodts*/
  this.f_changeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain_;
 }
 /** @nodts @return {TextInputGroupMain} */
 static m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ id) {
  TextInputGroupMain.$clinit();
  return TextInputGroupMain.$create__java_lang_String(id);
 }
 /** @nodts @return {!TextInputGroupMain} */
 static $create__java_lang_String(/** ?string */ id) {
  TextInputGroupMain.$clinit();
  let $instance = new TextInputGroupMain();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroupMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroupMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_textinputgroup_TextInputGroupSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(TextInputGroupMain.f_SUB_COMPONENT_NAME__org_patternfly_component_textinputgroup_TextInputGroupMain, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_textInput__org_patternfly_style_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {TextInputGroupMain} */
 m_addChipGroup__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ChipGroup */ chipGroup) {
  return this.m_add__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(chipGroup);
 }
 /** @nodts @return {TextInputGroupMain} */
 m_add__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ChipGroup */ chipGroup) {
  this.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_ = chipGroup;
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), chipGroup);
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_icon__elemental2_dom_Element__org_patternfly_component_textinputgroup_TextInputGroupMain(/** Element */ icon) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes)], j_l_String)));
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_, this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_);
  this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_.appendChild(icon);
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_removeIcon__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_);
  this.f_iconContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_ = null;
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ placeholder) {
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.placeholder = placeholder;
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_text__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ text) {
  return this.m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(text);
 }
 /** @nodts @return {TextInputGroupMain} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_TextInputGroupMain(value, false);
 }
 /** @nodts @return {TextInputGroupMain} */
 m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ value, /** boolean */ fireEvent) {
  let changed = !Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.value, value);
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.value = value;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain_, null)) {
   if ($Equality.$same(this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, null)) {
    this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {TextInputGroup}*/ ($Casts.$to(this.m_lookupComponent__boolean__org_patternfly_component_BaseComponent(true), TextInputGroup));
    if (!$Equality.$same(this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, null)) {
     this.f_changeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, value);
    }
   } else {
    this.f_changeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, value);
   }
  }
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_textinputgroup_TextInputGroupMain(/** Consumer<InputElementBuilder<HTMLInputElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_InputElementBuilder());
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ChangeHandler<TextInputGroup, ?string> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain_ = changeHandler;
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.addEventListener(EventType.f_keyup__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   if ($Equality.$same(this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, null)) {
    this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {TextInputGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), TextInputGroup));
   }
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_, this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.value);
  }));
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_.value;
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain_));
 }
 /** @nodts @return {ChipGroup} */
 m_chipGroup__org_patternfly_component_chip_ChipGroup() {
  return this.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_;
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroupMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroupMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_textinputgroup_TextInputGroupMain(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_textinputgroup_TextInputGroupMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroupMain} */
 m_disabled__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroupMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroupMain} */
 m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroupMain(/** boolean */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroupMain} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(/** PredefinedIcon */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupMain.$clinit = () =>{};
  TextInputGroupMain.$loadModules();
  TextInputGroupSubComponent.$clinit();
  Disabled.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupMain;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TextInputGroupMain.f_SUB_COMPONENT_NAME__org_patternfly_component_textinputgroup_TextInputGroupMain = 'tigm';
HasValue.$markImplementor(TextInputGroupMain);
Disabled.$markImplementor(TextInputGroupMain);
WithIcon.$markImplementor(TextInputGroupMain);
WithText.$markImplementor(TextInputGroupMain);
$Util.$setClassMetadata(TextInputGroupMain, 'org.patternfly.component.textinputgroup.TextInputGroupMain');

exports = TextInputGroupMain;

//# sourceMappingURL=TextInputGroupMain.js.map
