goog.module('org.patternfly.component.tooltip.Tooltip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
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
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TriggerAria = goog.forwardDeclare('org.patternfly.component.tooltip.TriggerAria$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.popper.Modifiers$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperBuilder = goog.forwardDeclare('org.patternfly.popper.PopperBuilder$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Tooltip>}
 * @implements {Closeable<HTMLDivElement, Tooltip>}
 * @implements {WithText<HTMLDivElement, Tooltip>}
 * @implements {Attachable}
 */
class Tooltip extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_tooltip_Tooltip_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_tooltip_Tooltip_;
  /**@type {Set<TriggerAction>} @nodts*/
  this.f_triggerActions__org_patternfly_component_tooltip_Tooltip_;
  /**@type {By} @nodts*/
  this.f_selector__org_patternfly_component_tooltip_Tooltip_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_trigger__org_patternfly_component_tooltip_Tooltip_;
  /**@type {boolean} @nodts*/
  this.f_flip__org_patternfly_component_tooltip_Tooltip_ = false;
  /**@type {number} @nodts*/
  this.f_distance__org_patternfly_component_tooltip_Tooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_component_tooltip_Tooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_entryDelay__org_patternfly_component_tooltip_Tooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_exitDelay__org_patternfly_component_tooltip_Tooltip_ = 0;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_component_tooltip_Tooltip_ = 0;
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_component_tooltip_Tooltip_;
  /**@type {TriggerAria} @nodts*/
  this.f_aria__org_patternfly_component_tooltip_Tooltip_;
  /**@type {Placement} @nodts*/
  this.f_placement__org_patternfly_component_tooltip_Tooltip_;
  /**@type {CloseHandler<Tooltip>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_;
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_patternfly_component_tooltip_Tooltip() {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(null, null, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(null, text, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_jboss_elemento_By__org_patternfly_component_tooltip_Tooltip(/** By */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  }), null, trigger);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** By */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  }), text, trigger);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(Supplier.$adapt(() =>{
   return trigger;
  }), null, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__elemental2_dom_HTMLElement__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(Supplier.$adapt(() =>{
   return trigger;
  }), text, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(trigger, null, null);
 }
 /** @nodts @return {Tooltip} */
 static m_tooltip__java_util_function_Supplier__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger, /** ?string */ text) {
  Tooltip.$clinit();
  return Tooltip.$create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(trigger, text, null);
 }
 /** @nodts @return {!Tooltip} */
 static $create__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By(/** Supplier<HTMLElement> */ trigger, /** ?string */ text, /** By */ selector) {
  Tooltip.$clinit();
  let $instance = new Tooltip();
  $instance.$ctor__org_patternfly_component_tooltip_Tooltip__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By__void(trigger, text, selector);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tooltip_Tooltip__java_util_function_Supplier__java_lang_String__org_jboss_elemento_By__void(/** Supplier<HTMLElement> */ trigger, /** ?string */ text, /** By */ selector) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Tooltip__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('display', 'none'), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'tooltip'), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_id__org_patternfly_component_tooltip_Tooltip_ = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.f_trigger__org_patternfly_component_tooltip_Tooltip_ = trigger;
  this.f_triggerActions__org_patternfly_component_tooltip_Tooltip_ = /**@type {EnumSet<TriggerAction>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(TriggerAction.f_mouseenter__org_patternfly_popper_TriggerAction, /**@type {!Array<TriggerAction>}*/ ($Arrays.$init([TriggerAction.f_focus__org_patternfly_popper_TriggerAction], TriggerAction))));
  this.f_selector__org_patternfly_component_tooltip_Tooltip_ = selector;
  this.f_flip__org_patternfly_component_tooltip_Tooltip_ = true;
  this.f_placement__org_patternfly_component_tooltip_Tooltip_ = Placement.f_top__org_patternfly_popper_Placement;
  this.f_aria__org_patternfly_component_tooltip_Tooltip_ = TriggerAria.f_describedBy__org_patternfly_component_tooltip_TriggerAria;
  this.f_zIndex__org_patternfly_component_tooltip_Tooltip_ = Tooltip.f_Z_INDEX__org_patternfly_component_tooltip_Tooltip;
  this.f_distance__org_patternfly_component_tooltip_Tooltip_ = Tooltip.f_DISTANCE__org_patternfly_component_tooltip_Tooltip;
  this.f_entryDelay__org_patternfly_component_tooltip_Tooltip_ = Tooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_Tooltip;
  this.f_exitDelay__org_patternfly_component_tooltip_Tooltip_ = Tooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_Tooltip;
  this.f_animationDuration__org_patternfly_component_tooltip_Tooltip_ = Tooltip.f_ANIMATION_DURATION__org_patternfly_component_tooltip_Tooltip;
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_tooltip_Tooltip_);
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_arrow__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentElement__org_patternfly_component_tooltip_Tooltip_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(text, null)) {
   this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.textContent = text;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_Tooltip_, null)) {
   let triggerElement = /**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_Tooltip_.m_get__java_lang_Object(), $Overlay));
   if (!$Equality.$same(triggerElement, null)) {
    if (Elements.m_isAttached__elemental2_dom_Node__boolean(triggerElement)) {
     this.f_popper__org_patternfly_component_tooltip_Tooltip_ = PopperBuilder.$create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, triggerElement, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).m_animationDuration__int__org_patternfly_popper_PopperBuilder(this.f_animationDuration__org_patternfly_component_tooltip_Tooltip_).m_entryDelay__int__org_patternfly_popper_PopperBuilder(this.f_entryDelay__org_patternfly_component_tooltip_Tooltip_).m_exitDelay__int__org_patternfly_popper_PopperBuilder(this.f_exitDelay__org_patternfly_component_tooltip_Tooltip_).m_zIndex__int__org_patternfly_popper_PopperBuilder(this.f_zIndex__org_patternfly_component_tooltip_Tooltip_).m_placement__org_patternfly_popper_Placement__org_patternfly_popper_PopperBuilder(this.f_placement__org_patternfly_component_tooltip_Tooltip_).m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder([Modifiers.m_offset__int__org_patternfly_popper_Modifier(this.f_distance__org_patternfly_component_tooltip_Tooltip_), Modifiers.m_noOverflow__org_patternfly_popper_Modifier(), Modifiers.m_hide__org_patternfly_popper_Modifier(), Modifiers.m_flip__boolean__org_patternfly_popper_Modifier($Equality.$same(this.f_placement__org_patternfly_component_tooltip_Tooltip_, Placement.f_auto__org_patternfly_popper_Placement) || this.f_flip__org_patternfly_component_tooltip_Tooltip_), Modifiers.m_placement__org_patternfly_popper_Modifier(), Modifiers.m_eventListeners__boolean__org_patternfly_popper_Modifier(false)]).m_registerHandler__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_triggerActions__org_patternfly_component_tooltip_Tooltip_, Consumer.$adapt((arg0) =>{
      let arg0_1 = /**@type {Event}*/ ($Casts.$to(arg0, Event_$Overlay));
      this.m_show__elemental2_dom_Event__void(arg0_1);
     }), Consumer.$adapt((arg0_2) =>{
      let arg0_3 = /**@type {Event}*/ ($Casts.$to(arg0_2, Event_$Overlay));
      this.m_close__elemental2_dom_Event__void(arg0_3);
     })).m_removePopperOnTriggerDetach__org_patternfly_popper_PopperBuilder().m_build__org_patternfly_popper_Popper();
    } else {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Trigger element ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Elements.m_toString__elemental2_dom_Element__java_lang_String(triggerElement)) + ' is not attached');
    }
   } else {
    if (!$Equality.$same(this.f_selector__org_patternfly_component_tooltip_Tooltip_, null)) {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Unable to get trigger element using selector \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_selector__org_patternfly_component_tooltip_Tooltip_) + '\'');
    } else {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Unable to get trigger element');
    }
   }
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'No trigger element defined');
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_popper__org_patternfly_component_tooltip_Tooltip_.m_cleanup__void();
 }
 /** @nodts @return {Tooltip} */
 m_appendToBody__org_patternfly_component_tooltip_Tooltip() {
  return this.m_appendTo__elemental2_dom_Node__org_patternfly_component_tooltip_Tooltip(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body);
 }
 /** @nodts @return {Tooltip} */
 m_appendTo__elemental2_dom_Node__org_patternfly_component_tooltip_Tooltip(/** Node */ node) {
  if (!$Equality.$same(node, null)) {
   node.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_animationDuration__int__org_patternfly_component_tooltip_Tooltip(/** number */ animationDuration) {
  this.f_animationDuration__org_patternfly_component_tooltip_Tooltip_ = animationDuration;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_distance__int__org_patternfly_component_tooltip_Tooltip(/** number */ distance) {
  this.f_distance__org_patternfly_component_tooltip_Tooltip_ = distance;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_flip__boolean__org_patternfly_component_tooltip_Tooltip(/** boolean */ flip) {
  this.f_flip__org_patternfly_component_tooltip_Tooltip_ = flip;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_entryDelay__int__org_patternfly_component_tooltip_Tooltip(/** number */ delay) {
  this.f_entryDelay__org_patternfly_component_tooltip_Tooltip_ = delay;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_exitDelay__int__org_patternfly_component_tooltip_Tooltip(/** number */ delay) {
  this.f_exitDelay__org_patternfly_component_tooltip_Tooltip_ = delay;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_leftAligned__org_patternfly_component_tooltip_Tooltip() {
  this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_textAlignLeft__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_placement__org_patternfly_popper_Placement__org_patternfly_component_tooltip_Tooltip(/** Placement */ placement) {
  if ($Equality.$same(placement, Placement.f_auto__org_patternfly_popper_Placement)) {
   this.f_flip__org_patternfly_component_tooltip_Tooltip_ = true;
  }
  this.f_placement__org_patternfly_component_tooltip_Tooltip_ = placement;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ text) {
  this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.textContent = text;
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this) && Elements.m_isVisible__org_jboss_elemento_IsElement__boolean(this)) {
   this.f_popper__org_patternfly_component_tooltip_Tooltip_.m_update__elemental2_promise_Promise();
  }
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_trigger__java_lang_String__org_patternfly_component_tooltip_Tooltip(/** ?string */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(trigger));
  }));
 }
 /** @nodts @return {Tooltip} */
 m_trigger__org_jboss_elemento_By__org_patternfly_component_tooltip_Tooltip(/** By */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, trigger);
  }));
 }
 /** @nodts @return {Tooltip} */
 m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/** HTMLElement */ trigger) {
  return this.m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(Supplier.$adapt(() =>{
   return trigger;
  }));
 }
 /** @nodts @return {Tooltip} */
 m_trigger__java_util_function_Supplier__org_patternfly_component_tooltip_Tooltip(/** Supplier<HTMLElement> */ trigger) {
  this.f_trigger__org_patternfly_component_tooltip_Tooltip_ = trigger;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_triggerActions__arrayOf_org_patternfly_popper_TriggerAction__org_patternfly_component_tooltip_Tooltip(/** Array<TriggerAction> */ triggerActions) {
  if (!$Equality.$same(triggerActions, null)) {
   this.f_triggerActions__org_patternfly_component_tooltip_Tooltip_.clear();
   this.f_triggerActions__org_patternfly_component_tooltip_Tooltip_.addAll(/**@type {List<TriggerAction>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(triggerActions)));
  }
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_zIndex__int__org_patternfly_component_tooltip_Tooltip(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_component_tooltip_Tooltip_ = zIndex;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_that__org_patternfly_component_tooltip_Tooltip() {
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_aria__org_patternfly_component_tooltip_TriggerAria__org_patternfly_component_tooltip_Tooltip(/** TriggerAria */ aria) {
  this.f_aria__org_patternfly_component_tooltip_Tooltip_ = aria;
  return this;
 }
 /** @nodts @return {Tooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(/** CloseHandler<Tooltip> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_ = closeHandler;
  return this;
 }
 /** @nodts */
 m_show__void() {
  this.m_show__elemental2_dom_Event__void(new Event(''));
 }
 /** @nodts */
 m_show__elemental2_dom_Event__void(/** Event */ event) {
  this.f_popper__org_patternfly_component_tooltip_Tooltip_.m_show__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
   if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_Tooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_Tooltip_.m_get__java_lang_Object(), null)) {
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_Tooltip_.m_get__java_lang_Object(), $Overlay)), this.f_aria__org_patternfly_component_tooltip_Tooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria, this.f_id__org_patternfly_component_tooltip_Tooltip_);
   }
  }));
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_, event, fireEvent)) {
   this.f_popper__org_patternfly_component_tooltip_Tooltip_.m_hide__org_jboss_elemento_Callback__void(Callback.$adapt(() =>{
    if (!$Equality.$same(this.f_aria__org_patternfly_component_tooltip_Tooltip_, TriggerAria.f_none__org_patternfly_component_tooltip_TriggerAria) && !$Equality.$same(this.f_trigger__org_patternfly_component_tooltip_Tooltip_.m_get__java_lang_Object(), null)) {
     /**@type {HTMLElement}*/ ($Casts.$to(this.f_trigger__org_patternfly_component_tooltip_Tooltip_.m_get__java_lang_Object(), $Overlay)).removeAttribute(this.f_aria__org_patternfly_component_tooltip_Tooltip_.f_attribute__org_patternfly_component_tooltip_TriggerAria);
    }
    CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_tooltip_Tooltip_, event, fireEvent);
   }));
  }
 }
 /** @nodts @return {?string} */
 m_text__java_lang_String() {
  return this.f_contentElement__org_patternfly_component_tooltip_Tooltip_.textContent;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tooltip_Tooltip();
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
 /** @final @override @nodts @return {Tooltip} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<Tooltip> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(arg0);
 }
 /** @nodts */
 static $clinit() {
  Tooltip.$clinit = () =>{};
  Tooltip.$loadModules();
  BaseComponent.$clinit();
  Closeable.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tooltip;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TriggerAria = goog.module.get('org.patternfly.component.tooltip.TriggerAria$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
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
Tooltip.f_ANIMATION_DURATION__org_patternfly_component_tooltip_Tooltip = 300;
/**@const {number} @nodts*/
Tooltip.f_ENTRY_DELAY__org_patternfly_component_tooltip_Tooltip = 300;
/**@const {number} @nodts*/
Tooltip.f_EXIT_DELAY__org_patternfly_component_tooltip_Tooltip = 300;
/**@const {number} @nodts*/
Tooltip.f_DISTANCE__org_patternfly_component_tooltip_Tooltip = 15;
/**@const {number} @nodts*/
Tooltip.f_Z_INDEX__org_patternfly_component_tooltip_Tooltip = 9999;
Closeable.$markImplementor(Tooltip);
WithText.$markImplementor(Tooltip);
Attachable.$markImplementor(Tooltip);
$Util.$setClassMetadata(Tooltip, 'org.patternfly.component.tooltip.Tooltip');

exports = Tooltip;

//# sourceMappingURL=Tooltip.js.map
