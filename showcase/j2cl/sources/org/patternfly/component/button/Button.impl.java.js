goog.module('org.patternfly.component.button.Button$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithIconAndText = goog.require('org.patternfly.component.WithIconAndText$impl');
const WithProgress = goog.require('org.patternfly.component.WithProgress$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');
const Secondary = goog.require('org.patternfly.style.Modifiers.Secondary$impl');

let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Button>}
 * @implements {Disabled<HTMLElement, Button>}
 * @implements {Inline<HTMLElement, Button>}
 * @implements {Plain<HTMLElement, Button>}
 * @implements {NoPadding<HTMLElement, Button>}
 * @implements {Secondary<HTMLElement, Button>}
 * @implements {WithIcon<HTMLElement, Button>}
 * @implements {WithText<HTMLElement, Button>}
 * @implements {WithIconAndText<HTMLElement, Button>}
 * @implements {WithProgress<HTMLElement, Button>}
 */
class Button extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLButtonElement} @nodts*/
  this.f_buttonElement__org_patternfly_component_button_Button_;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_button_Button_;
  /**@type {Element} @nodts*/
  this.f_icon__org_patternfly_component_button_Button_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_button_Button_;
  /**@type {Spinner} @nodts*/
  this.f_spinner__org_patternfly_component_button_Button_;
 }
 /** @nodts @return {Button} */
 static m_button__org_patternfly_component_button_Button() {
  Button.$clinit();
  return Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @return {Button} */
 static m_button__java_lang_String__org_patternfly_component_button_Button(/** ?string */ text) {
  Button.$clinit();
  return Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder()).m_text__java_lang_String__org_patternfly_component_button_Button(text);
 }
 /** @nodts @return {Button} */
 static m_button__java_lang_String__java_lang_String__org_patternfly_component_button_Button(/** ?string */ text, /** ?string */ href) {
  Button.$clinit();
  return Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_text__java_lang_String__org_patternfly_component_button_Button(text).m_href__java_lang_String__org_patternfly_component_button_Button(href);
 }
 /** @nodts @return {Button} */
 static m_button__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_button_Button(/** ?string */ text, /** ?string */ href, /** ?string */ target) {
  Button.$clinit();
  return Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_text__java_lang_String__org_patternfly_component_button_Button(text).m_href__java_lang_String__org_patternfly_component_button_Button(href).m_target__java_lang_String__org_patternfly_component_button_Button(target);
 }
 /** @nodts @template E @return {Button} */
 static m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(/** HTMLContainerBuilder<E> */ builder) {
  Button.$clinit();
  return Button.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Button} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_patternfly_component_button_Button__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_button_Button__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Button__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().tagName, 'button')) {
   this.f_anchorElement__org_patternfly_component_button_Button_ = null;
   this.f_buttonElement__org_patternfly_component_button_Button_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay));
  } else {
   this.f_anchorElement__org_patternfly_component_button_Button_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay));
   this.f_buttonElement__org_patternfly_component_button_Button_ = null;
  }
 }
 /** @nodts @return {Button} */
 m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_button_Button(/** Badge */ badge) {
  return this.m_add__org_patternfly_component_badge_Badge__org_patternfly_component_button_Button(badge);
 }
 /** @nodts @return {Button} */
 m_add__org_patternfly_component_badge_Badge__org_patternfly_component_button_Button(/** Badge */ badge) {
  return /**@type {Button}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_count__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(badge), HTMLContainerBuilder))), Button));
 }
 /** @nodts @return {Button} */
 m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_button_Button();
  this.f_icon__org_patternfly_component_button_Button_ = icon;
  return /**@type {Button}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), Button));
 }
 /** @nodts @return {Button} */
 m_removeIcon__org_patternfly_component_button_Button() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_icon__org_patternfly_component_button_Button_);
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_button_Button_);
  this.f_icon__org_patternfly_component_button_Button_ = null;
  this.f_iconContainer__org_patternfly_component_button_Button_ = null;
  return this;
 }
 /** @nodts @return {Button} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_button_Button(/** Element */ icon, /** ?string */ text, /** IconPosition */ position) {
  this.m_removeIcon__org_patternfly_component_button_Button();
  this.f_icon__org_patternfly_component_button_Button_ = icon;
  switch (position.ordinal()) {
   case IconPosition.$ordinal_start__org_patternfly_component_IconPosition: 
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_iconContainer__org_patternfly_component_button_Button_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_start__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
    this.m_text__java_lang_String__org_patternfly_component_button_Button(text);
    break;
   case IconPosition.$ordinal_end__org_patternfly_component_IconPosition: 
    this.m_text__java_lang_String__org_patternfly_component_button_Button(text);
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_button_Button_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_end__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
    break;
  }
  return this;
 }
 /** @nodts @return {Button} */
 m_text__java_lang_String__org_patternfly_component_button_Button(/** ?string */ text) {
  return /**@type {Button}*/ ($Casts.$to(this.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text), Button));
 }
 /** @nodts @return {Button} */
 m_href__java_lang_String__org_patternfly_component_button_Button(/** ?string */ href) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_button_Button_, null)) {
   this.f_anchorElement__org_patternfly_component_button_Button_.href = href;
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unable to set href: This button is not an <a/> button.');
  }
  return this;
 }
 /** @nodts @return {Button} */
 m_target__java_lang_String__org_patternfly_component_button_Button(/** ?string */ target) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_button_Button_, null)) {
   this.f_anchorElement__org_patternfly_component_button_Button_.target = target;
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unable to set target: This button is not an <a/> button.');
  }
  return this;
 }
 /** @nodts @return {Button} */
 m_primary__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_primary__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_danger__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_danger__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_tertiary__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_tertiary__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_warning__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_warning__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_small__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_small__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_link__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_link__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_control__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_control__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_block__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_block__org_patternfly_style_Classes)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_callToAction__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String))), Button));
 }
 /** @nodts @return {Button} */
 m_disabled__boolean__org_patternfly_component_button_Button(/** boolean */ disabled) {
  Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled);
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, disabled);
  if (!$Equality.$same(this.f_buttonElement__org_patternfly_component_button_Button_, null)) {
   this.f_buttonElement__org_patternfly_component_button_Button_.disabled = disabled;
  }
  return this;
 }
 /** @nodts @return {Button} */
 m_progress__boolean__java_lang_String__java_util_function_Consumer__org_patternfly_component_button_Button(/** boolean */ inProgress, /** ?string */ label, /** Consumer<Spinner> */ spinnerConsumer) {
  if (!this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_style_Classes)) && !this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes))) {
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes));
  }
  let element = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_progress__org_patternfly_style_Classes], j_l_String)))));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  if (inProgress) {
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inProgress__org_patternfly_style_Classes));
   if ($Equality.$same(this.f_spinner__org_patternfly_component_button_Button_, null)) {
    this.f_spinner__org_patternfly_component_button_Button_ = Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner(label).m_size__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size);
   }
   if (!$Equality.$same(spinnerConsumer, null)) {
    spinnerConsumer.m_accept__java_lang_Object__void(this.f_spinner__org_patternfly_component_button_Button_);
   }
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_progress__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_spinner__org_patternfly_component_button_Button_), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inProgress__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {Button} */
 m_that__org_patternfly_component_button_Button() {
  return this;
 }
 /** @nodts @return {Button} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(/** ComponentHandler<Button> */ actionHandler) {
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_button_Button();
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_button_Button(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_secondary__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_button_Button(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_button_Button();
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_button_Button(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Button}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_button_Button(arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_inProgress__boolean() {
  return WithProgress.m_inProgress__$default__org_patternfly_component_WithProgress__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_progress__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_progress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** ?string */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_progress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** Consumer<Spinner> */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_progress__boolean__java_lang_String__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** boolean */ arg0, /** ?string */ arg1, /** Consumer<Spinner> */ arg2) {
  return this.m_progress__boolean__java_lang_String__java_util_function_Consumer__org_patternfly_component_button_Button(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_startProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_startProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_stopProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_stopProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Bridge method.
 /** @final @override @nodts @return {Button} */
 m_toggleProgress__org_jboss_elemento_TypedBuilder() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_toggleProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_disabled__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_inline__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_inline__boolean__org_patternfly_component_button_Button(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_plain__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_plain__boolean__org_patternfly_component_button_Button(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_noPadding__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_noPadding__boolean__org_patternfly_component_button_Button(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_secondary__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_secondary__boolean__org_patternfly_component_button_Button(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(/** PredefinedIcon */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_button_Button(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Button}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_progress__boolean__org_patternfly_component_button_Button(/** boolean */ arg0) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_progress__boolean__java_lang_String__org_patternfly_component_button_Button(/** boolean */ arg0, /** ?string */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_progress__boolean__java_util_function_Consumer__org_patternfly_component_button_Button(/** boolean */ arg0, /** Consumer<Spinner> */ arg1) {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_progress__$default__org_patternfly_component_WithProgress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_startProgress__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_startProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_stopProgress__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_stopProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 //Default method forwarding stub.
 /** @nodts @return {Button} */
 m_toggleProgress__org_patternfly_component_button_Button() {
  return /**@type {Button}*/ ($Casts.$to(WithProgress.m_toggleProgress__$default__org_patternfly_component_WithProgress__org_jboss_elemento_TypedBuilder(this), Button));
 }
 /** @nodts */
 static $clinit() {
  Button.$clinit = () =>{};
  Button.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  Inline.$clinit();
  Plain.$clinit();
  NoPadding.$clinit();
  Secondary.$clinit();
  WithIcon.$clinit();
  WithIconAndText.$clinit();
  WithProgress.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Button;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(Button);
Inline.$markImplementor(Button);
Plain.$markImplementor(Button);
NoPadding.$markImplementor(Button);
Secondary.$markImplementor(Button);
WithIcon.$markImplementor(Button);
WithText.$markImplementor(Button);
WithIconAndText.$markImplementor(Button);
WithProgress.$markImplementor(Button);
$Util.$setClassMetadata(Button, 'org.patternfly.component.button.Button');

exports = Button;

//# sourceMappingURL=Button.js.map
