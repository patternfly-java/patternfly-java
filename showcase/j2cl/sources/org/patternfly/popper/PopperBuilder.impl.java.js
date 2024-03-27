goog.module('org.patternfly.popper.PopperBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let OpacityUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let ZIndexUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.ZIndexUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let org_patternfly_popper_Popper = goog.forwardDeclare('org.patternfly.popper.Popper$impl');
let PopperError = goog.forwardDeclare('org.patternfly.popper.PopperError$impl');
let PopperImpl = goog.forwardDeclare('org.patternfly.popper.PopperImpl$impl');
let TriggerAction = goog.forwardDeclare('org.patternfly.popper.TriggerAction$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PopperBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_componentName__org_patternfly_popper_PopperBuilder_;
  /**@type {HTMLElement} @nodts*/
  this.f_triggerElement__org_patternfly_popper_PopperBuilder_;
  /**@type {HTMLElement} @nodts*/
  this.f_popperElement__org_patternfly_popper_PopperBuilder_;
  /**@type {Array<Object>} @nodts*/
  this.f_modifiers__org_patternfly_popper_PopperBuilder_;
  /**@type {List<HandlerRegistration>} @nodts*/
  this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_popper_PopperBuilder_ = 0;
  /**@type {number} @nodts*/
  this.f_entryDelay__org_patternfly_popper_PopperBuilder_ = 0;
  /**@type {number} @nodts*/
  this.f_exitDelay__org_patternfly_popper_PopperBuilder_ = 0;
  /**@type {number} @nodts*/
  this.f_zIndex__org_patternfly_popper_PopperBuilder_ = 0;
  /**@type {Placement} @nodts*/
  this.f_placement__org_patternfly_popper_PopperBuilder_;
 }
 /** @nodts @return {!PopperBuilder} */
 static $create__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement(/** ?string */ componentName, /** HTMLElement */ triggerElement, /** HTMLElement */ popperElement) {
  PopperBuilder.$clinit();
  let $instance = new PopperBuilder();
  $instance.$ctor__org_patternfly_popper_PopperBuilder__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(componentName, triggerElement, popperElement);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_PopperBuilder__java_lang_String__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/** ?string */ componentName, /** HTMLElement */ triggerElement, /** HTMLElement */ popperElement) {
  this.$ctor__java_lang_Object__void();
  this.f_componentName__org_patternfly_popper_PopperBuilder_ = componentName;
  this.f_triggerElement__org_patternfly_popper_PopperBuilder_ = triggerElement;
  this.f_popperElement__org_patternfly_popper_PopperBuilder_ = popperElement;
  this.f_modifiers__org_patternfly_popper_PopperBuilder_ = /**@type {!Array<Object>}*/ (new Array());
  this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_ = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  this.f_animationDuration__org_patternfly_popper_PopperBuilder_ = org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper;
  this.f_entryDelay__org_patternfly_popper_PopperBuilder_ = org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper;
  this.f_exitDelay__org_patternfly_popper_PopperBuilder_ = org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper;
  this.f_zIndex__org_patternfly_popper_PopperBuilder_ = org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper;
  this.f_placement__org_patternfly_popper_PopperBuilder_ = Placement.f_auto__org_patternfly_popper_Placement;
 }
 /** @nodts @return {PopperBuilder} */
 m_animationDuration__int__org_patternfly_popper_PopperBuilder(/** number */ animationDuration) {
  this.f_animationDuration__org_patternfly_popper_PopperBuilder_ = animationDuration;
  if (animationDuration != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   this.f_popperElement__org_patternfly_popper_PopperBuilder_.style.opacity = OpacityUnionType_$Overlay.m_of__java_lang_Object__elemental2_dom_CSSProperties_OpacityUnionType(Integer.m_valueOf__int__java_lang_Integer(0));
   this.f_popperElement__org_patternfly_popper_PopperBuilder_.style.transition = 'opacity ' + animationDuration + 'ms cubic-bezier(.54, 1.5, .38, 1.11)';
  }
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_entryDelay__int__org_patternfly_popper_PopperBuilder(/** number */ entryDelay) {
  this.f_entryDelay__org_patternfly_popper_PopperBuilder_ = entryDelay;
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_exitDelay__int__org_patternfly_popper_PopperBuilder(/** number */ exitDelay) {
  this.f_exitDelay__org_patternfly_popper_PopperBuilder_ = exitDelay;
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_zIndex__int__org_patternfly_popper_PopperBuilder(/** number */ zIndex) {
  this.f_zIndex__org_patternfly_popper_PopperBuilder_ = zIndex;
  if (zIndex != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   this.f_popperElement__org_patternfly_popper_PopperBuilder_.style.zIndex = ZIndexUnionType_$Overlay.m_of__java_lang_Object__elemental2_dom_CSSProperties_ZIndexUnionType(Integer.m_valueOf__int__java_lang_Integer(zIndex));
  }
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_placement__org_patternfly_popper_Placement__org_patternfly_popper_PopperBuilder(/** Placement */ placement) {
  this.f_placement__org_patternfly_popper_PopperBuilder_ = placement;
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_addModifier__arrayOf_org_patternfly_popper_Modifier__org_patternfly_popper_PopperBuilder(/** Array<Object> */ modifiers) {
  this.f_modifiers__org_patternfly_popper_PopperBuilder_.push(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(modifiers));
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_registerHandler__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(/** Set<TriggerAction> */ triggerActions, /** Consumer<Event> */ show, /** Consumer<Event> */ hide) {
  return this.m_registerHandler__elemental2_dom_HTMLElement__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(this.f_triggerElement__org_patternfly_popper_PopperBuilder_, triggerActions, show, hide);
 }
 /** @nodts @return {PopperBuilder} */
 m_registerHandler__elemental2_dom_HTMLElement__java_util_Set__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_popper_PopperBuilder(/** HTMLElement */ triggerElement, /** Set<TriggerAction> */ triggerActions, /** Consumer<Event> */ show, /** Consumer<Event> */ hide) {
  if (triggerActions.contains(TriggerAction.f_mouseenter__org_patternfly_popper_TriggerAction)) {
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(triggerElement, EventType.f_mouseenter__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    show.m_accept__java_lang_Object__void(e_1);
   }));
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(triggerElement, EventType.f_mouseleave__org_jboss_elemento_EventType, (e_2) =>{
    let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
    hide.m_accept__java_lang_Object__void(e_3);
   }));
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_popperElement__org_patternfly_popper_PopperBuilder_, EventType.f_mouseenter__org_jboss_elemento_EventType, (e_4) =>{
    let e_5 = /**@type {MouseEvent}*/ ($Casts.$to(e_4, MouseEvent_$Overlay));
    show.m_accept__java_lang_Object__void(e_5);
   }));
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_popperElement__org_patternfly_popper_PopperBuilder_, EventType.f_mouseleave__org_jboss_elemento_EventType, (e_6) =>{
    let e_7 = /**@type {MouseEvent}*/ ($Casts.$to(e_6, MouseEvent_$Overlay));
    hide.m_accept__java_lang_Object__void(e_7);
   }));
  }
  if (triggerActions.contains(TriggerAction.f_focus__org_patternfly_popper_TriggerAction)) {
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(triggerElement, EventType.f_focus__org_jboss_elemento_EventType, (e_8) =>{
    let e_9 = /**@type {FocusEvent}*/ ($Casts.$to(e_8, FocusEvent_$Overlay));
    show.m_accept__java_lang_Object__void(e_9);
   }));
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(triggerElement, EventType.f_blur__org_jboss_elemento_EventType, (e_10) =>{
    let e_11 = /**@type {FocusEvent}*/ ($Casts.$to(e_10, FocusEvent_$Overlay));
    hide.m_accept__java_lang_Object__void(e_11);
   }));
  }
  if (triggerActions.contains(TriggerAction.f_click__org_patternfly_popper_TriggerAction)) {
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, true, (e_12) =>{
    let e_13 = /**@type {MouseEvent}*/ ($Casts.$to(e_12, MouseEvent_$Overlay));
    if (Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(this.f_popperElement__org_patternfly_popper_PopperBuilder_)) {
     hide.m_accept__java_lang_Object__void(e_13);
    } else if ($Equality.$same(e_13.target, triggerElement) || triggerElement.contains(/**@type {Node}*/ ($Casts.$to(e_13.target, Node_$Overlay)))) {
     show.m_accept__java_lang_Object__void(e_13);
    }
   }));
  }
  if (!triggerActions.contains(TriggerAction.f_manual__org_patternfly_popper_TriggerAction)) {
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_keydown__org_jboss_elemento_EventType, true, (e_14) =>{
    let e_15 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_14, KeyboardEvent_$Overlay));
    if (Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(this.f_popperElement__org_patternfly_popper_PopperBuilder_) && Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_15)) {
     hide.m_accept__java_lang_Object__void(e_15);
    }
   }));
   this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_popperElement__org_patternfly_popper_PopperBuilder_, EventType.f_keydown__org_jboss_elemento_EventType, (e_16) =>{
    let e_17 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_16, KeyboardEvent_$Overlay));
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_17)) {
     if (Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(this.f_popperElement__org_patternfly_popper_PopperBuilder_)) {
      hide.m_accept__java_lang_Object__void(e_17);
     } else {
      show.m_accept__java_lang_Object__void(e_17);
     }
    }
   }));
  }
  return this;
 }
 /** @nodts @return {PopperBuilder} */
 m_removePopperOnTriggerDetach__org_patternfly_popper_PopperBuilder() {
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(this.f_triggerElement__org_patternfly_popper_PopperBuilder_, ObserverCallback.$adapt((/** MutationRecord */ mr) =>{
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_popperElement__org_patternfly_popper_PopperBuilder_);
  }));
  return this;
 }
 /** @nodts @return {org_patternfly_popper_Popper} */
 m_build__org_patternfly_popper_Popper() {
  let createPopperFn = JsPropertyMap_$Overlay.m_nestedGetAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any(goog.global, org_patternfly_popper_Popper.f_POPPER_CREATE__org_patternfly_popper_Popper);
  if ($Equality.$same(createPopperFn, null) || Js.isTripleEqual(createPopperFn, undefined)) {
   return PopperError.$create__java_lang_String(this.f_componentName__org_patternfly_popper_PopperBuilder_);
  } else {
   let options = new Object();
   options.placement = this.f_placement__org_patternfly_popper_PopperBuilder_.f_value__org_patternfly_popper_Placement;
   options.modifiers = this.f_modifiers__org_patternfly_popper_PopperBuilder_;
   let popper = Popper.createPopper(this.f_triggerElement__org_patternfly_popper_PopperBuilder_, this.f_popperElement__org_patternfly_popper_PopperBuilder_, options);
   return PopperImpl.$create__org_patternfly_popper_PopperJs__java_util_List__int__int__int(popper, this.f_handlerRegistrations__org_patternfly_popper_PopperBuilder_, this.f_animationDuration__org_patternfly_popper_PopperBuilder_, this.f_entryDelay__org_patternfly_popper_PopperBuilder_, this.f_exitDelay__org_patternfly_popper_PopperBuilder_);
  }
 }
 /** @nodts */
 static $clinit() {
  PopperBuilder.$clinit = () =>{};
  PopperBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  OpacityUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
  ZIndexUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.ZIndexUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  org_patternfly_popper_Popper = goog.module.get('org.patternfly.popper.Popper$impl');
  PopperError = goog.module.get('org.patternfly.popper.PopperError$impl');
  PopperImpl = goog.module.get('org.patternfly.popper.PopperImpl$impl');
  TriggerAction = goog.module.get('org.patternfly.popper.TriggerAction$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PopperBuilder, 'org.patternfly.popper.PopperBuilder');

exports = PopperBuilder;

//# sourceMappingURL=PopperBuilder.js.map
