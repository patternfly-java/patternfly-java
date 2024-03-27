goog.module('org.patternfly.component.label.Label$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithIconAndText = goog.require('org.patternfly.component.WithIconAndText$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let LabelEditCancelHandler = goog.forwardDeclare('org.patternfly.component.label.LabelEditCancelHandler$impl');
let LabelEditCompleteHandler = goog.forwardDeclare('org.patternfly.component.label.LabelEditCompleteHandler$impl');
let LabelGroup = goog.forwardDeclare('org.patternfly.component.label.LabelGroup$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Label>}
 * @implements {Closeable<HTMLElement, Label>}
 * @implements {Compact<HTMLElement, Label>}
 * @implements {WithText<HTMLElement, Label>}
 * @implements {WithIcon<HTMLElement, Label>}
 * @implements {WithIconAndText<HTMLElement, Label>}
 * @implements {HasValue<?string>}
 * @implements {Attachable}
 */
class Label extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_label_Label;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_label_Label;
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionsElement__org_patternfly_component_label_Label_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_label_Label_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_label_Label_;
  /**@type {Tooltip} @nodts*/
  this.f_tooltip__org_patternfly_component_label_Label_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_label_Label_;
  /**@type {CloseHandler<Label>} @nodts*/
  this.f_closeHandler__org_patternfly_component_label_Label_;
  /**@type {ComponentHandler<Label>} @nodts*/
  this.f_clickHandler__org_patternfly_component_label_Label_;
  /**@type {LabelEditCancelHandler} @nodts*/
  this.f_editCancelHandler__org_patternfly_component_label_Label_;
  /**@type {LabelEditCompleteHandler} @nodts*/
  this.f_editCompleteHandler__org_patternfly_component_label_Label_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_;
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__org_patternfly_component_label_Label(/** ?string */ text) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), text, Color.f_grey__org_patternfly_style_Color);
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(/** ?string */ text, /** Color */ color) {
  Label.$clinit();
  return Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder(), text, color);
 }
 /** @nodts @template E @return {!Label} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text, /** Color */ color) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_patternfly_component_label_Label__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color__void(builder, text, color);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_label_Label__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text, /** Color */ color) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Label__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), color.f_modifier__org_patternfly_style_Color], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  this.f_id__org_patternfly_component_label_Label = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_contentElement__org_patternfly_component_label_Label_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_label_Label = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_tooltipToggle__org_patternfly_component_label_Label_ = TooltipToggle.$create__elemental2_dom_HTMLElement(this.f_textElement__org_patternfly_component_label_Label);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let label = /**@type {Label}*/ ($Casts.$to(o, Label));
  return Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_id__org_patternfly_component_label_Label, label.f_id__org_patternfly_component_label_Label);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([this.f_id__org_patternfly_component_label_Label]);
 }
 /** @nodts @return {Label} */
 m_outline__org_patternfly_component_label_Label() {
  return this.m_outline__boolean__org_patternfly_component_label_Label(true);
 }
 /** @nodts @return {Label} */
 m_outline__boolean__org_patternfly_component_label_Label(/** boolean */ outline) {
  return /**@type {Label}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_label_Label(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_outline__org_patternfly_style_Classes, outline), Label));
 }
 /** @nodts @return {Label} */
 m_closable__org_patternfly_component_label_Label() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(null);
 }
 /** @nodts @return {Label} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(/** CloseHandler<Label> */ closeHandler) {
  this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(closeHandler);
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_actionsElement__org_patternfly_component_label_Label_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_label_Label_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_label_Label.textContent)), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), this.f_contentElement__org_patternfly_component_label_Label_);
  return this;
 }
 /** @nodts @return {Label} */
 m_clickable__org_patternfly_component_label_Label() {
  return this.m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(null);
 }
 /** @nodts @return {Label} */
 m_clickable__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(/** ComponentHandler<Label> */ clickHandler) {
  this.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(clickHandler);
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!$Equality.$same(this.f_clickHandler__org_patternfly_component_label_Label_, null)) {
    this.f_clickHandler__org_patternfly_component_label_Label_.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
   }
  }), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Label} */
 m_editable__org_patternfly_component_label_Label() {
  return this.m_editable__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(null, null);
 }
 /** @nodts @return {Label} */
 m_editable__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(/** LabelEditCancelHandler */ cancelHandler, /** LabelEditCompleteHandler */ completeHandler) {
  this.m_onEditCancel__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_Label(cancelHandler);
  this.m_onEditComplete__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(completeHandler);
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Editable label with text ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_textElement__org_patternfly_component_label_Label.textContent)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_enterEdit__void_$p_org_patternfly_component_label_Label();
  }), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (e_2) =>{
   let e_3 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_2, KeyboardEvent_$Overlay));
   if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_3)) {
    this.m_enterEdit__void_$p_org_patternfly_component_label_Label();
   }
  }), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return /**@type {Label}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editable__org_patternfly_style_Classes)], j_l_String))), Label));
 }
 /** @nodts @return {Label} */
 m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(/** Element */ icon) {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_label_Label_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_label_Label_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), this.f_textElement__org_patternfly_component_label_Label);
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_label_Label_);
  this.f_iconContainer__org_patternfly_component_label_Label_.appendChild(icon);
  return this;
 }
 /** @nodts @return {Label} */
 m_removeIcon__org_patternfly_component_label_Label() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_label_Label_);
  return this;
 }
 /** @nodts @return {Label} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(/** Element */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(icon);
  return this.m_text__java_lang_String__org_patternfly_component_label_Label(text);
 }
 /** @nodts @return {Label} */
 m_href__java_lang_String__org_patternfly_component_label_Label(/** ?string */ href) {
  this.m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(href).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Label} */
 m_text__java_lang_String__org_patternfly_component_label_Label(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_label_Label.textContent = text;
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
  return this;
 }
 /** @nodts @return {Label} */
 m_textMaxWidth__java_lang_String__org_patternfly_component_label_Label(/** ?string */ maxWidth) {
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_MaxWidth__org_patternfly_style_Variables], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(this.f_textElement__org_patternfly_component_label_Label, maxWidth);
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
  return this;
 }
 /** @nodts @return {Label} */
 m_that__org_patternfly_component_label_Label() {
  return this;
 }
 /** @nodts @return {Label} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_label_Label(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_label_Label_, null)) {
   this.f_closeButton__org_patternfly_component_label_Label_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Label} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(/** CloseHandler<Label> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_label_Label_ = closeHandler;
  return this;
 }
 /** @nodts @return {Label} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_label_Label(/** ComponentHandler<Label> */ clickHandler) {
  this.f_clickHandler__org_patternfly_component_label_Label_ = clickHandler;
  return this;
 }
 /** @nodts @return {Label} */
 m_onEditCancel__org_patternfly_component_label_LabelEditCancelHandler__org_patternfly_component_label_Label(/** LabelEditCancelHandler */ cancelHandler) {
  this.f_editCancelHandler__org_patternfly_component_label_Label_ = cancelHandler;
  return this;
 }
 /** @nodts @return {Label} */
 m_onEditComplete__org_patternfly_component_label_LabelEditCompleteHandler__org_patternfly_component_label_Label(/** LabelEditCompleteHandler */ completeHandler) {
  this.f_editCompleteHandler__org_patternfly_component_label_Label_ = completeHandler;
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_textElement__org_patternfly_component_label_Label.textContent;
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_label_Label_, event, fireEvent)) {
   let labelGroup = /**@type {LabelGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(ComponentType.f_LabelGroup__org_patternfly_component_ComponentType, true), LabelGroup));
   if (!$Equality.$same(labelGroup, null)) {
    labelGroup.m_close__org_patternfly_component_label_Label__void_$pp_org_patternfly_component_label(this);
   } else {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   }
   CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_label_Label_, event, fireEvent);
  }
 }
 /** @nodts */
 m_replaceContent__elemental2_dom_HTMLElement__void_$p_org_patternfly_component_label_Label(/** HTMLElement */ newContent) {
  for (let iterator = Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(this.f_contentElement__org_patternfly_component_label_Label_); iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), $Overlay));
   newContent.appendChild(element);
  }
  Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_contentElement__org_patternfly_component_label_Label_, [newContent]);
  this.f_contentElement__org_patternfly_component_label_Label_ = newContent;
 }
 /** @nodts */
 m_enterEdit__void_$p_org_patternfly_component_label_Label() {
  goog.global.console.log('Enter edit mode');
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_stop__void();
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_label_Label_, false);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_actionsElement__org_patternfly_component_label_Label_, false);
  this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().value = this.f_textElement__org_patternfly_component_label_Label.textContent;
  this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, true, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().contains(/**@type {Node}*/ ($Casts.$to(e_1.target, Node_$Overlay)))) {
    this.m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().value);
   }
  });
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editableActive__org_patternfly_style_Classes));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label(), true);
  this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label().focus();
 }
 /** @nodts */
 m_cancelEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(/** Event */ event, /** ?string */ previousText) {
  goog.global.console.log('Cancel edit mode');
  if (!$Equality.$same(this.f_editCancelHandler__org_patternfly_component_label_Label_, null)) {
   this.f_editCancelHandler__org_patternfly_component_label_Label_.m_cancel__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(event, this, previousText);
  }
  this.m_leaveEdit__void_$p_org_patternfly_component_label_Label();
 }
 /** @nodts */
 m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(/** Event */ event, /** ?string */ newText) {
  goog.global.console.log('Complete edit mode');
  this.f_textElement__org_patternfly_component_label_Label.textContent = newText;
  if (!$Equality.$same(this.f_editCompleteHandler__org_patternfly_component_label_Label_, null)) {
   this.f_editCompleteHandler__org_patternfly_component_label_Label_.m_complete__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(event, this, newText);
  }
  this.m_leaveEdit__void_$p_org_patternfly_component_label_Label();
 }
 /** @nodts */
 m_leaveEdit__void_$p_org_patternfly_component_label_Label() {
  goog.global.console.log('Leave edit mode');
  if (!$Equality.$same(this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_, null)) {
   this.f_cancelEditModeOnDocumentClick__org_patternfly_component_label_Label_.m_removeHandler__void();
  }
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label(), false);
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_editableActive__org_patternfly_style_Classes));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_label_Label_, true);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_actionsElement__org_patternfly_component_label_Label_, true);
  this.f_tooltipToggle__org_patternfly_component_label_Label_.m_eval__void();
 }
 /** @nodts @return {HTMLInputElement} */
 m_failSafeInputElement__elemental2_dom_HTMLInputElement_$p_org_patternfly_component_label_Label() {
  if ($Equality.$same(this.f_inputElement__org_patternfly_component_label_Label_, null)) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_inputElement__org_patternfly_component_label_Label_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_label__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(e, KeyboardEvent_$Overlay));
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_1)) {
     this.m_completeEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, /**@type {HTMLInputElement}*/ ($Casts.$to(e_1.target, HTMLInputElement_$Overlay)).value);
    } else if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_1)) {
     this.m_cancelEdit__elemental2_dom_Event__java_lang_String__void_$p_org_patternfly_component_label_Label(e_1, this.f_textElement__org_patternfly_component_label_Label.textContent);
    }
   }), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement());
  }
  return this.f_inputElement__org_patternfly_component_label_Label_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_label_Label();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Label> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_Label(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_label_Label(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_label_Label(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_label_Label();
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Label}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Label}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Label));
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(/** Element */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__elemental2_dom_Element__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_compact__org_patternfly_component_label_Label() {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_compact__boolean__org_patternfly_component_label_Label(/** boolean */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0) {
  return /**@type {Label}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {Label}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), Label));
 }
 //Default method forwarding stub.
 /** @nodts @return {Label} */
 m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_patternfly_component_label_Label(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {Label}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_component_WithIconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), Label));
 }
 /** @nodts */
 static $clinit() {
  Label.$clinit = () =>{};
  Label.$loadModules();
  BaseComponentFlat.$clinit();
  Closeable.$clinit();
  Compact.$clinit();
  WithIcon.$clinit();
  WithIconAndText.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Label;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  LabelGroup = goog.module.get('org.patternfly.component.label.LabelGroup$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Closeable.$markImplementor(Label);
Compact.$markImplementor(Label);
WithText.$markImplementor(Label);
WithIcon.$markImplementor(Label);
WithIconAndText.$markImplementor(Label);
HasValue.$markImplementor(Label);
Attachable.$markImplementor(Label);
$Util.$setClassMetadata(Label, 'org.patternfly.component.label.Label');

exports = Label;

//# sourceMappingURL=Label.js.map
