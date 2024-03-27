goog.module('org.patternfly.component.chip.Chip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {BaseComponent<HTMLElement, Chip>}
 * @implements {Closeable<HTMLElement, Chip>}
 * @implements {HasValue<?string>}
 * @implements {WithText<HTMLElement, Chip>}
 * @implements {Attachable}
 */
class Chip extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_chip_Chip;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_chip_Chip;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_chip_Chip_;
  /**@type {HTMLElement} @nodts*/
  this.f_actionsElement__org_patternfly_component_chip_Chip_;
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_chip_Chip_;
  /**@type {Badge} @nodts*/
  this.f_badge__org_patternfly_component_chip_Chip_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_chip_Chip_;
  /**@type {CloseHandler<Chip>} @nodts*/
  this.f_closeHandler__org_patternfly_component_chip_Chip_;
 }
 /** @nodts @return {Chip} */
 static m_chip__java_lang_String__org_patternfly_component_chip_Chip(/** ?string */ text) {
  Chip.$clinit();
  return Chip.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), text);
 }
 /** @nodts @template E @return {!Chip} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text) {
  Chip.$clinit();
  let $instance = new Chip();
  $instance.$ctor__org_patternfly_component_chip_Chip__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__void(builder, text);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_chip_Chip__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Chip__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  this.f_id__org_patternfly_component_chip_Chip = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  let textId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_id__org_patternfly_component_chip_Chip, /**@type {!Array<?string>}*/ ($Arrays.$init(['text'], j_l_String)));
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.f_id__org_patternfly_component_chip_Chip, /**@type {!Array<?string>}*/ ($Arrays.$init(['close'], j_l_String)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_chip_Chip_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_chip_Chip = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(textId), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_actionsElement__org_patternfly_component_chip_Chip_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_chip_Chip_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(buttonId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(textId)), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_tooltipToggle__org_patternfly_component_chip_Chip_ = TooltipToggle.$create__elemental2_dom_HTMLElement(this.f_textElement__org_patternfly_component_chip_Chip);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_tooltipToggle__org_patternfly_component_chip_Chip_.m_eval__java_util_function_Consumer__java_util_function_Consumer__void(Consumer.$adapt((tt) =>{
   let tt_1 = /**@type {Tooltip}*/ ($Casts.$to(tt, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().tabIndex = 0;
  }), Consumer.$adapt((tt_2) =>{
   let tt_3 = /**@type {Tooltip}*/ ($Casts.$to(tt_2, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
  }));
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let chip = /**@type {Chip}*/ ($Casts.$to(o, Chip));
  return Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_id__org_patternfly_component_chip_Chip, chip.f_id__org_patternfly_component_chip_Chip);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([this.f_id__org_patternfly_component_chip_Chip]);
 }
 /** @nodts @return {Chip} */
 m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_chip_Chip(/** Badge */ badge) {
  return this.m_add__org_patternfly_component_badge_Badge__org_patternfly_component_chip_Chip(badge);
 }
 /** @nodts @return {Chip} */
 m_add__org_patternfly_component_badge_Badge__org_patternfly_component_chip_Chip(/** Badge */ badge) {
  this.f_badge__org_patternfly_component_chip_Chip_ = badge;
  this.f_contentElement__org_patternfly_component_chip_Chip_.appendChild(badge.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Chip} */
 m_readonly__org_patternfly_component_chip_Chip() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_actionsElement__org_patternfly_component_chip_Chip_);
  this.f_closeButton__org_patternfly_component_chip_Chip_ = null;
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(null);
 }
 /** @nodts @return {Chip} */
 m_text__java_lang_String__org_patternfly_component_chip_Chip(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_chip_Chip.textContent = text;
  this.f_tooltipToggle__org_patternfly_component_chip_Chip_.m_eval__java_util_function_Consumer__java_util_function_Consumer__void(Consumer.$adapt((tt) =>{
   let tt_1 = /**@type {Tooltip}*/ ($Casts.$to(tt, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().tabIndex = 0;
  }), Consumer.$adapt((tt_2) =>{
   let tt_3 = /**@type {Tooltip}*/ ($Casts.$to(tt_2, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
  }));
  return this;
 }
 /** @nodts @return {Chip} */
 m_textMaxWidth__java_lang_String__org_patternfly_component_chip_Chip(/** ?string */ maxWidth) {
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_MaxWidth__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, maxWidth);
  this.f_tooltipToggle__org_patternfly_component_chip_Chip_.m_eval__java_util_function_Consumer__java_util_function_Consumer__void(Consumer.$adapt((tt) =>{
   let tt_1 = /**@type {Tooltip}*/ ($Casts.$to(tt, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().tabIndex = 0;
  }), Consumer.$adapt((tt_2) =>{
   let tt_3 = /**@type {Tooltip}*/ ($Casts.$to(tt_2, Tooltip));
   this.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
  }));
  return this;
 }
 /** @nodts @return {Chip} */
 m_that__org_patternfly_component_chip_Chip() {
  return this;
 }
 /** @nodts @return {Chip} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_chip_Chip(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_chip_Chip_, null)) {
   this.f_closeButton__org_patternfly_component_chip_Chip_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Chip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(/** CloseHandler<Chip> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_chip_Chip_ = closeHandler;
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_textElement__org_patternfly_component_chip_Chip.textContent;
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_chip_Chip_, event, fireEvent)) {
   let chipGroup = /**@type {ChipGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(ComponentType.f_ChipGroup__org_patternfly_component_ComponentType, true), ChipGroup));
   if (!$Equality.$same(chipGroup, null)) {
    chipGroup.m_close__org_patternfly_component_chip_Chip__void_$pp_org_patternfly_component_chip(this);
   } else {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   }
   CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_chip_Chip_, event, fireEvent);
  }
 }
 /** @nodts @return {Badge} */
 m_badge__org_patternfly_component_badge_Badge() {
  return this.f_badge__org_patternfly_component_chip_Chip_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Chip} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_chip_Chip();
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
 /** @final @override @nodts @return {Chip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Chip> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {Chip} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_chip_Chip(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  Chip.$clinit = () =>{};
  Chip.$loadModules();
  BaseComponent.$clinit();
  Closeable.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Chip;
 }
 
 /** @nodts */
 static $loadModules() {
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ChipGroup = goog.module.get('org.patternfly.component.chip.ChipGroup$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number} @nodts*/
Chip.f_DEFAULT_MAX_WIDTH__org_patternfly_component_chip_Chip_ = 16;
Closeable.$markImplementor(Chip);
HasValue.$markImplementor(Chip);
WithText.$markImplementor(Chip);
Attachable.$markImplementor(Chip);
$Util.$setClassMetadata(Chip, 'org.patternfly.component.chip.Chip');

exports = Chip;

//# sourceMappingURL=Chip.js.map
