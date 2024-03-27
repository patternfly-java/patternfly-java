goog.module('org.patternfly.component.popover.Popover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let PopoverBody = goog.forwardDeclare('org.patternfly.component.popover.PopoverBody$impl');
let PopoverFooter = goog.forwardDeclare('org.patternfly.component.popover.PopoverFooter$impl');
let PopoverHeader = goog.forwardDeclare('org.patternfly.component.popover.PopoverHeader$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Popover>}
 * @implements {Closeable<HTMLDivElement, Popover>}
 * @implements {NoPadding<HTMLDivElement, Popover>}
 * @implements {WithIcon<HTMLDivElement, Popover>}
 * @implements {Attachable}
 */
class Popover extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_popover_Popover_;
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_popover_Popover_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_trigger__org_patternfly_component_popover_Popover_;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_popover_Popover_ = false;
  /**@type {boolean} @nodts*/
  this.f_showClose__org_patternfly_component_popover_Popover_ = false;
  /**@type {number} @nodts*/
  this.f_distance__org_patternfly_component_popover_Popover_ = 0;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_component_popover_Popover_ = 0;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_popover_Popover_ = 0;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_popover_Popover_;
  /**@type {Placement} @nodts*/
  this.f_placement__org_patternfly_component_popover_Popover_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_popover_Popover_;
  /**@type {Severity} @nodts*/
  this.f_severity__org_patternfly_component_popover_Popover_;
  /**@type {PopoverHeader} @nodts*/
  this.f_header__org_patternfly_component_popover_Popover_;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_popover_Popover_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_popover_Popover_;
  /**@type {CloseHandler<Popover>} @nodts*/
  this.f_closeHandler__org_patternfly_component_popover_Popover_;
 }
 /** @nodts @return {Popover} */
 static m_popover__org_patternfly_component_popover_Popover() {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(null);
 }
 /** @nodts @return {Popover} */
 static m_popover__org_jboss_elemento_By__org_patternfly_component_popover_Popover(/** By */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  }));
 }
 /** @nodts @return {Popover} */
 static m_popover__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(/** HTMLElement */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return trigger;
  }));
 }
 /** @nodts @return {Popover} */
 static m_popover__java_util_function_Supplier__org_patternfly_component_popover_Popover(/** Supplier<HTMLElement> */ trigger) {
  Popover.$clinit();
  return Popover.$create__java_util_function_Supplier(trigger);
 }
 /** @nodts @return {!Popover} */
 static $create__java_util_function_Supplier(/** Supplier<HTMLElement> */ trigger) {
  Popover.$clinit();
  let $instance = new Popover();
  $instance.$ctor__org_patternfly_component_popover_Popover__java_util_function_Supplier__void(trigger);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_popover_Popover__java_util_function_Supplier__void(/** Supplier<HTMLElement> */ trigger) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Popover__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('display', 'none'), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'dialog'), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_modal__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_trigger__org_patternfly_component_popover_Popover_ = trigger;
  this.f_triggerActions__org_patternfly_component_popover_Popover_ = /**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__java_util_EnumSet(TriggerAction.f_click__org_patternfly_popper_TriggerAction));
  this.f_flip__org_patternfly_component_popover_Popover_ = true;
  this.f_showClose__org_patternfly_component_popover_Popover_ = true;
  this.f_placement__org_patternfly_component_popover_Popover_ = Placement.f_top__org_patternfly_popper_Placement;
  this.f_zIndex__org_patternfly_component_popover_Popover_ = Popover.f_Z_INDEX__org_patternfly_component_popover_Popover;
  this.f_distance__org_patternfly_component_popover_Popover_ = Popover.f_DISTANCE__org_patternfly_component_popover_Popover;
  this.f_animationDuration__org_patternfly_component_popover_Popover_ = Popover.f_ANIMATION_DURATION__org_patternfly_component_popover_Popover;
  let bodyId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['body'], j_l_String)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_popover_Popover_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, bodyId);
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_showClose__org_patternfly_component_popover_Popover_) {
   this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(this.f_closeHandler__org_patternfly_component_popover_Popover_);
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_closeButton__org_patternfly_component_popover_Popover_);
  }
  if (!$Equality.$same(this.f_trigger__org_patternfly_component_popover_Popover_, null)) {
   let triggerElement = /**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_popover_Popover_.m_get__java_lang_Object(), $Overlay));
   if (!$Equality.$same(triggerElement, null)) {
    this.f_popper__org_patternfly_component_popover_Popover_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, triggerElement, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_animationDuration__int__org_patternfly_popper_PopperBuilder(this.f_animationDuration__org_patternfly_component_popover_Popover_).m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_popover_Popover_).m_placement__org_patternfly_popper_Placement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_popover_Popover_).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_offset__int__org_patternfly_popper_Modifier(this.f_distance__org_patternfly_component_popover_Popover_), Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_popover_Popover_, Placement.f_auto__org_patternfly_popper_Placement) || this.f_flip__org_patternfly_component_popover_Popover_), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false)]).m_registerHandler__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_triggerActions__org_patternfly_component_popover_Popover_, Consumer.$adapt((arg0) =>{
     let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
     this.m_show__elemental2_dom_Event__void(arg0_1);
    }), Consumer.$adapt((arg0_2) =>{
     let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
     this.m_close__elemental2_dom_Event__void(arg0_3);
    })).m_removePopperOnTriggerDetach__org_patternfly_popper_PopperBuilder().m_build__org_patternfly_popper_Popper();
   } else {
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Unable to get trigger element');
   }
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'No trigger element defined');
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_popper__org_patternfly_component_popover_Popover_.m_cleanup__void();
 }
 /** @nodts @return {Popover} */
 m_addHeader__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ header) {
  return this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/**@type {PopoverHeader}*/ ($Casts.$to(PopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopoverHeader().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(header), PopoverHeader)));
 }
 /** @nodts @return {Popover} */
 m_addHeader__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/** PopoverHeader */ header) {
  return this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(header);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(/** PopoverHeader */ header) {
  this.f_header__org_patternfly_component_popover_Popover_ = header;
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(header.m_element__elemental2_dom_HTMLElement());
  this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, header.f_headerId__org_patternfly_component_popover_PopoverHeader);
  return this;
 }
 /** @nodts @return {Popover} */
 m_addBody__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ body) {
  return this.m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/**@type {PopoverBody}*/ ($Casts.$to(PopoverBody.m_popoverBody__org_patternfly_component_popover_PopoverBody().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(body), PopoverBody)));
 }
 /** @nodts @return {Popover} */
 m_addBody__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/** PopoverBody */ body) {
  return this.m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(body);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverBody__org_patternfly_component_popover_Popover(/** PopoverBody */ body) {
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Popover} */
 m_addFooter__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ footer) {
  return this.m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/**@type {PopoverFooter}*/ ($Casts.$to(PopoverFooter.m_popoverFooter__org_patternfly_component_popover_PopoverFooter().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(footer), PopoverFooter)));
 }
 /** @nodts @return {Popover} */
 m_addFooter__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/** PopoverFooter */ footer) {
  return this.m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(footer);
 }
 /** @nodts @return {Popover} */
 m_add__org_patternfly_component_popover_PopoverFooter__org_patternfly_component_popover_Popover(/** PopoverFooter */ footer) {
  this.f_contentElement__org_patternfly_component_popover_Popover_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Popover} */
 m_appendToBody__org_patternfly_component_popover_Popover() {
  return this.m_appendTo__elemental2_dom_Node__org_patternfly_component_popover_Popover(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body);
 }
 /** @nodts @return {Popover} */
 m_appendTo__elemental2_dom_Node__org_patternfly_component_popover_Popover(/** Node */ node) {
  if (!$Equality.$same(node, null)) {
   node.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {Popover} */
 m_animationDuration__int__org_patternfly_component_popover_Popover(/** number */ animationDuration) {
  this.f_animationDuration__org_patternfly_component_popover_Popover_ = animationDuration;
  return this;
 }
 /** @nodts @return {Popover} */
 m_autoWidth__org_patternfly_component_popover_Popover() {
  return /**@type {Popover}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_widthAuto__org_patternfly_style_Classes)], j_l_String))), Popover));
 }
 /** @nodts @return {Popover} */
 m_closable__org_patternfly_component_popover_Popover() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(null);
 }
 /** @nodts @return {Popover} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(/** CloseHandler<Popover> */ closeHandler) {
  if ($Equality.$same(this.f_closeButton__org_patternfly_component_popover_Popover_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_contentElement__org_patternfly_component_popover_Popover_, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_popover_Popover_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close'), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
    let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
    this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
   }), Button))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(closeHandler);
 }
 /** @nodts @return {Popover} */
 m_distance__int__org_patternfly_component_popover_Popover(/** number */ distance) {
  this.f_distance__org_patternfly_component_popover_Popover_ = distance;
  return this;
 }
 /** @nodts @return {Popover} */
 m_flip__boolean__org_patternfly_component_popover_Popover(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_popover_Popover_ = flip;
  return this;
 }
 /** @nodts @return {Popover} */
 m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_popover_Popover();
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover().appendChild(icon);
  return this;
 }
 /** @nodts @return {Popover} */
 m_removeIcon__org_patternfly_component_popover_Popover() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_popover_Popover_);
  return this;
 }
 /** @nodts @return {Popover} */
 m_noClose__org_patternfly_component_popover_Popover() {
  this.f_showClose__org_patternfly_component_popover_Popover_ = false;
  return this;
 }
 /** @nodts @return {Popover} */
 m_placement__org_patternfly_popper_Placement__org_patternfly_component_popover_Popover(/** Placement */ placement) {
  if ($Equality.$same(placement, Placement.f_auto__org_patternfly_popper_Placement)) {
   this.f_flip__org_patternfly_component_popover_Popover_ = true;
  }
  this.f_placement__org_patternfly_component_popover_Popover_ = placement;
  return this;
 }
 /** @nodts @return {Popover} */
 m_severity__org_patternfly_component_Severity__org_patternfly_component_popover_Popover(/** Severity */ severity) {
  return this.m_severity__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_Popover(severity, severity.f_aria__org_patternfly_component_Severity);
 }
 /** @nodts @return {Popover} */
 m_severity__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_popover_Popover(/** Severity */ severity, /** ?string */ screenReaderText) {
  if (!$Equality.$same(this.f_severity__org_patternfly_component_popover_Popover_, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.remove(this.f_severity__org_patternfly_component_popover_Popover_.f_status__org_patternfly_component_Severity.f_modifier__org_patternfly_style_Status);
  }
  this.f_severity__org_patternfly_component_popover_Popover_ = severity;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([severity.f_status__org_patternfly_component_Severity.f_modifier__org_patternfly_style_Status], j_l_String)));
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover());
  this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(/**@type {PredefinedIcon}*/ ($Casts.$to(severity.f_icon__org_patternfly_component_Severity.m_get__java_lang_Object(), PredefinedIcon)).m_element__org_jboss_elemento_svg_SVGElement());
  this.m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover().textContent = screenReaderText;
  return this;
 }
 /** @nodts @return {Popover} */
 m_trigger__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_Popover(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(trigger));
  }));
 }
 /** @nodts @return {Popover} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_popover_Popover(/** By */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_Popover(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  }));
 }
 /** @nodts @return {Popover} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(/** HTMLElement */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_popover_Popover(Supplier.$adapt(() =>{
   return trigger;
  }));
 }
 /** @nodts @return {Popover} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_popover_Popover(/** Supplier<HTMLElement> */ trigger) {
  this.f_trigger__org_patternfly_component_popover_Popover_ = trigger;
  return this;
 }
 /** @nodts @return {Popover} */
 m_triggerActions__arrayOf_org_patternfly_popper_TriggerAction__org_patternfly_component_popover_Popover(/** Array<TriggerAction> */ triggerActions) {
  if (!$Equality.$same(triggerActions, null)) {
   this.f_triggerActions__org_patternfly_component_popover_Popover_.clear();
   this.f_triggerActions__org_patternfly_component_popover_Popover_.addAll(/**@type {List<TriggerAction>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(triggerActions)));
  }
  return this;
 }
 /** @nodts @return {Popover} */
 m_zIndex__int__org_patternfly_component_popover_Popover(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_popover_Popover_ = zIndex;
  return this;
 }
 /** @nodts @return {Popover} */
 m_that__org_patternfly_component_popover_Popover() {
  return this;
 }
 /** @nodts @return {Popover} */
 m_ariaLabel__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ label) {
  return /**@type {Popover}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Popover));
 }
 /** @nodts @return {Popover} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_popover_Popover(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_popover_Popover_, null)) {
   this.f_closeButton__org_patternfly_component_popover_Popover_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Popover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(/** CloseHandler<Popover> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_popover_Popover_ = closeHandler;
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  this.f_popper__org_patternfly_component_popover_Popover_.m_show__org_jboss_elemento_Callback__void(null);
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_popover_Popover_, event, fireEvent)) {
   this.f_popper__org_patternfly_component_popover_Popover_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
    CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_popover_Popover_, event, fireEvent);
   }));
  }
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeHeaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover() {
  if ($Equality.$same(this.f_header__org_patternfly_component_popover_Popover_, null)) {
   this.m_add__org_patternfly_component_popover_PopoverHeader__org_patternfly_component_popover_Popover(PopoverHeader.m_popoverHeader__org_patternfly_component_popover_PopoverHeader());
  }
  return this.f_header__org_patternfly_component_popover_Popover_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_popover_Popover_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_popover_Popover_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_popover__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), this.m_failSafeHeaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover());
  }
  return this.f_iconContainer__org_patternfly_component_popover_Popover_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover() {
  if ($Equality.$same(this.f_screenReaderElement__org_patternfly_component_popover_Popover_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_failSafeHeaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_popover_Popover(), this.f_screenReaderElement__org_patternfly_component_popover_Popover_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_screenReaderElement__org_patternfly_component_popover_Popover_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_popover_Popover();
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
 /** @final @override @nodts @return {Popover} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Popover> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_popover_Popover(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Popover));
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_popover_Popover(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_popover_Popover();
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_noPadding__org_patternfly_component_popover_Popover() {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), Popover));
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_noPadding__boolean__org_patternfly_component_popover_Popover(/** boolean */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 //Default method forwarding stub.
 /** @nodts @return {Popover} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_popover_Popover(/** PredefinedIcon */ arg0) {
  return /**@type {Popover}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), Popover));
 }
 /** @nodts */
 static $clinit() {
  Popover.$clinit = () =>{};
  Popover.$loadModules();
  BaseComponent.$clinit();
  Closeable.$clinit();
  NoPadding.$clinit();
  WithIcon.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Popover;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  PopoverBody = goog.module.get('org.patternfly.component.popover.PopoverBody$impl');
  PopoverFooter = goog.module.get('org.patternfly.component.popover.PopoverFooter$impl');
  PopoverHeader = goog.module.get('org.patternfly.component.popover.PopoverHeader$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  Modifiers = goog.module.get('org.patternfly.popper.Modifiers$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  PopperBuilder = goog.module.get('org.patternfly.popper.PopperBuilder$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
Popover.f_ANIMATION_DURATION__org_patternfly_component_popover_Popover = 300;
/**@const {number} @nodts*/
Popover.f_ENTRY_DELAY__org_patternfly_component_popover_Popover = 300;
/**@const {number} @nodts*/
Popover.f_EXIT_DELAY__org_patternfly_component_popover_Popover = 300;
/**@const {number} @nodts*/
Popover.f_DISTANCE__org_patternfly_component_popover_Popover = 25;
/**@const {number} @nodts*/
Popover.f_Z_INDEX__org_patternfly_component_popover_Popover = 9999;
Closeable.$markImplementor(Popover);
NoPadding.$markImplementor(Popover);
WithIcon.$markImplementor(Popover);
Attachable.$markImplementor(Popover);
$Util.$setClassMetadata(Popover, 'org.patternfly.component.popover.Popover');

exports = Popover;

//# sourceMappingURL=Popover.js.map
