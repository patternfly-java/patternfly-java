goog.module('org.jboss.elemento.EventType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T, V
 */
class EventType extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_jboss_elemento_EventType;
 }
 /** @nodts @template T_1, V_1 @return {EventType<T_1, V_1>} */
 static m_of__java_lang_String__org_jboss_elemento_EventType(/** ?string */ name) {
  EventType.$clinit();
  return /**@type {!EventType<T_1, V_1>}*/ (EventType.$create__java_lang_String(name));
 }
 /** @nodts @template T_1 @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** EventType<T_1, ?> */ type, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(target, type.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   listener(/**@type {T_1}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(e), $Overlay)));
  }));
 }
 /** @nodts @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** ?string */ type, /** EventListener */ listener) {
  EventType.$clinit();
  target.addEventListener(type, listener);
  return HandlerRegistration.$adapt(() =>{
   target.removeEventListener(type, listener);
  });
 }
 /** @nodts @template T_1 @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** EventType<T_1, ?> */ type, /** boolean */ useCapture, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(target, type.f_name__org_jboss_elemento_EventType, useCapture, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   listener(/**@type {T_1}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(e), $Overlay)));
  }));
 }
 /** @nodts @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** ?string */ type, /** boolean */ useCapture, /** EventListener */ listener) {
  EventType.$clinit();
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(target, type, listener, useCapture);
  return HandlerRegistration.$adapt(() =>{
   EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(target, type, listener, useCapture);
  });
 }
 /** @nodts @template T_1 @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** EventType<T_1, ?> */ type, /** AddEventListenerOptions */ options, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_AddEventListenerOptions__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(target, type.f_name__org_jboss_elemento_EventType, options, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   listener(/**@type {T_1}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(e), $Overlay)));
  }));
 }
 /** @nodts @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_AddEventListenerOptions__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** EventTarget */ target, /** ?string */ type, /** AddEventListenerOptions */ options, /** EventListener */ listener) {
  EventType.$clinit();
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_AddEventListenerOptions__void(target, type, listener, options);
  return HandlerRegistration.$adapt(() =>{
   EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_EventListenerOptions__void(target, type, listener, options);
  });
 }
 /** @nodts @template T_1, E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** EventType<T_1, ?> */ type, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, listener);
 }
 /** @nodts @template E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** ?string */ type, /** EventListener */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, listener);
 }
 /** @nodts @template T_1, E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** EventType<T_1, ?> */ type, /** boolean */ useCapture, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, useCapture, listener);
 }
 /** @nodts @template E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__java_lang_String__boolean__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** ?string */ type, /** boolean */ useCapture, /** EventListener */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, useCapture, listener);
 }
 /** @nodts @template T_1, E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** EventType<T_1, ?> */ type, /** AddEventListenerOptions */ options, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__elemental2_dom_AddEventListenerOptions__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, options, listener);
 }
 /** @nodts @template E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_AddEventListenerOptions__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/** IsElement<E> */ target, /** ?string */ type, /** AddEventListenerOptions */ options, /** EventListener */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_AddEventListenerOptions__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ (target.m_element__elemental2_dom_Element()), type, options, listener);
 }
 /** @nodts @template T, V @return {!EventType<T, V>} */
 static $create__java_lang_String(/** ?string */ name) {
  let $instance = new EventType();
  $instance.$ctor__org_jboss_elemento_EventType__java_lang_String__void(name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_EventType__java_lang_String__void(/** ?string */ name) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_jboss_elemento_EventType = name;
 }
 /** @nodts @return {?string} @deprecated */
 m_getName__java_lang_String() {
  return this.f_name__org_jboss_elemento_EventType;
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_online__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_online__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_offline__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_offline__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<FocusEvent, Element>} */
 static get f_focus__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_focus__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<FocusEvent, Element>} */
 static get f_blur__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_blur__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<PageTransitionEvent, Document>} */
 static get f_pagehide__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_pagehide__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<PageTransitionEvent, Document>} */
 static get f_pageshow__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_pageshow__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<PopStateEvent, Window>} */
 static get f_popstate__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_popstate__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_reset__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_reset__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_submit__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_submit__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_beforeprint__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_beforeprint__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_afterprint__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_afterprint__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_compositionstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_compositionstart__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_compositionupdate__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_compositionupdate__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_compositionend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_compositionend__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_fullscreenchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_fullscreenchange__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_fullscreenerror__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_fullscreenerror__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_resize__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_resize__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, EventTarget>} */
 static get f_scroll__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_scroll__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_cut__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_cut__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_copy__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_copy__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_paste__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_paste__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keydown__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_keydown__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keypress__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_keypress__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keyup__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_keyup__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseenter__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mouseenter__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseover__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mouseover__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, EventTarget>} */
 static get f_mousemove__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mousemove__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, EventTarget>} */
 static get f_mousedown__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mousedown__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseup__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mouseup__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_auxclick__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_auxclick__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_click__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_click__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_dblclick__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dblclick__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_contextmenu__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_contextmenu__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<WheelEvent, EventTarget>} */
 static get f_wheel__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_wheel__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_mouseleave__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mouseleave__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MouseEvent, Element>} */
 static get f_mouseout__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_mouseout__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_pointerlockchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_pointerlockchange__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_pointerlockerror__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_pointerlockerror__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_dragstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dragstart__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_drag__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_drag__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_dragend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dragend__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_dragenter__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dragenter__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_dragover__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dragover__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_dragleave__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_dragleave__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<DragEvent, EventTarget>} */
 static get f_drop__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_drop__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_touchcancel__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_touchcancel__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_touchend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_touchend__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_touchmove__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_touchmove__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<TouchEvent, Element>} */
 static get f_touchstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_touchstart__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<HashChangeEvent, Window>} */
 static get f_hashchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_hashchange__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_input__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_input__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_readystatechange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_readystatechange__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_change__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_change__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_search__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_search__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_invalid__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_invalid__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Element>} */
 static get f_show__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_show__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<MessageEvent<?>, EventTarget>} */
 static get f_message__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_message__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<StorageEvent, Window>} */
 static get f_storage__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_storage__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Window>} */
 static get f_load__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_load__org_jboss_elemento_EventType);
 }
 /** @nodts @return {EventType<Event, Document>} */
 static get f_visibilitychange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$static_visibilitychange__org_jboss_elemento_EventType);
 }
 /** @nodts */
 static $clinit() {
  EventType.$clinit = () =>{};
  EventType.$loadModules();
  j_l_Object.$clinit();
  EventType.$static_online__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('online'));
  EventType.$static_offline__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('offline'));
  EventType.$static_focus__org_jboss_elemento_EventType = /**@type {EventType<FocusEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('focus'));
  EventType.$static_blur__org_jboss_elemento_EventType = /**@type {EventType<FocusEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('blur'));
  EventType.$static_pagehide__org_jboss_elemento_EventType = /**@type {EventType<PageTransitionEvent, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('pagehide'));
  EventType.$static_pageshow__org_jboss_elemento_EventType = /**@type {EventType<PageTransitionEvent, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('pageshow'));
  EventType.$static_popstate__org_jboss_elemento_EventType = /**@type {EventType<PopStateEvent, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('popstate'));
  EventType.$static_reset__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('reset'));
  EventType.$static_submit__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('submit'));
  EventType.$static_beforeprint__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('beforeprint'));
  EventType.$static_afterprint__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('afterprint'));
  EventType.$static_compositionstart__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('compositionstart'));
  EventType.$static_compositionupdate__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('compositionupdate'));
  EventType.$static_compositionend__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('compositionend'));
  EventType.$static_fullscreenchange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('fullscreenchange'));
  EventType.$static_fullscreenerror__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('fullscreenerror'));
  EventType.$static_resize__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('resize'));
  EventType.$static_scroll__org_jboss_elemento_EventType = /**@type {EventType<Event, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('scroll'));
  EventType.$static_cut__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('cut'));
  EventType.$static_copy__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('copy'));
  EventType.$static_paste__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('paste'));
  EventType.$static_keydown__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('keydown'));
  EventType.$static_keypress__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('keypress'));
  EventType.$static_keyup__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('keyup'));
  EventType.$static_mouseenter__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mouseenter'));
  EventType.$static_mouseover__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mouseover'));
  EventType.$static_mousemove__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mousemove'));
  EventType.$static_mousedown__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mousedown'));
  EventType.$static_mouseup__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mouseup'));
  EventType.$static_auxclick__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('auxclick'));
  EventType.$static_click__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('click'));
  EventType.$static_dblclick__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dblclick'));
  EventType.$static_contextmenu__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('contextmenu'));
  EventType.$static_wheel__org_jboss_elemento_EventType = /**@type {EventType<WheelEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('wheel'));
  EventType.$static_mouseleave__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mouseleave'));
  EventType.$static_mouseout__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('mouseout'));
  EventType.$static_pointerlockchange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('pointerlockchange'));
  EventType.$static_pointerlockerror__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('pointerlockerror'));
  EventType.$static_dragstart__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dragstart'));
  EventType.$static_drag__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('drag'));
  EventType.$static_dragend__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dragend'));
  EventType.$static_dragenter__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dragenter'));
  EventType.$static_dragover__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dragover'));
  EventType.$static_dragleave__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('dragleave'));
  EventType.$static_drop__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('drop'));
  EventType.$static_touchcancel__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('touchcancel'));
  EventType.$static_touchend__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('touchend'));
  EventType.$static_touchmove__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('touchmove'));
  EventType.$static_touchstart__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('touchstart'));
  EventType.$static_hashchange__org_jboss_elemento_EventType = /**@type {EventType<HashChangeEvent, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('hashchange'));
  EventType.$static_input__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('input'));
  EventType.$static_readystatechange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('readystatechange'));
  EventType.$static_change__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('change'));
  EventType.$static_search__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('search'));
  EventType.$static_invalid__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('invalid'));
  EventType.$static_show__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('show'));
  EventType.$static_message__org_jboss_elemento_EventType = /**@type {EventType<MessageEvent<?>, EventTarget>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('message'));
  EventType.$static_storage__org_jboss_elemento_EventType = /**@type {EventType<StorageEvent, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('storage'));
  EventType.$static_load__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('load'));
  EventType.$static_visibilitychange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String__org_jboss_elemento_EventType('visibilitychange'));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_online__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_offline__org_jboss_elemento_EventType;
/**@private {EventType<FocusEvent, Element>} @nodts*/
EventType.$static_focus__org_jboss_elemento_EventType;
/**@private {EventType<FocusEvent, Element>} @nodts*/
EventType.$static_blur__org_jboss_elemento_EventType;
/**@private {EventType<PageTransitionEvent, Document>} @nodts*/
EventType.$static_pagehide__org_jboss_elemento_EventType;
/**@private {EventType<PageTransitionEvent, Document>} @nodts*/
EventType.$static_pageshow__org_jboss_elemento_EventType;
/**@private {EventType<PopStateEvent, Window>} @nodts*/
EventType.$static_popstate__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_reset__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_submit__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_beforeprint__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_afterprint__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_compositionstart__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_compositionupdate__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_compositionend__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_fullscreenchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_fullscreenerror__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_resize__org_jboss_elemento_EventType;
/**@private {EventType<Event, EventTarget>} @nodts*/
EventType.$static_scroll__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>} @nodts*/
EventType.$static_cut__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>} @nodts*/
EventType.$static_copy__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>} @nodts*/
EventType.$static_paste__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>} @nodts*/
EventType.$static_keydown__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>} @nodts*/
EventType.$static_keypress__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>} @nodts*/
EventType.$static_keyup__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>} @nodts*/
EventType.$static_mouseenter__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>} @nodts*/
EventType.$static_mouseover__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>} @nodts*/
EventType.$static_mousemove__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>} @nodts*/
EventType.$static_mousedown__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>} @nodts*/
EventType.$static_mouseup__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_auxclick__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_click__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_dblclick__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_contextmenu__org_jboss_elemento_EventType;
/**@private {EventType<WheelEvent, EventTarget>} @nodts*/
EventType.$static_wheel__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_mouseleave__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>} @nodts*/
EventType.$static_mouseout__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_pointerlockchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_pointerlockerror__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_dragstart__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_drag__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_dragend__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_dragenter__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_dragover__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_dragleave__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>} @nodts*/
EventType.$static_drop__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_touchcancel__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_touchend__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_touchmove__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>} @nodts*/
EventType.$static_touchstart__org_jboss_elemento_EventType;
/**@private {EventType<HashChangeEvent, Window>} @nodts*/
EventType.$static_hashchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_input__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_readystatechange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_change__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_search__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_invalid__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>} @nodts*/
EventType.$static_show__org_jboss_elemento_EventType;
/**@private {EventType<MessageEvent<?>, EventTarget>} @nodts*/
EventType.$static_message__org_jboss_elemento_EventType;
/**@private {EventType<StorageEvent, Window>} @nodts*/
EventType.$static_storage__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>} @nodts*/
EventType.$static_load__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>} @nodts*/
EventType.$static_visibilitychange__org_jboss_elemento_EventType;
$Util.$setClassMetadata(EventType, 'org.jboss.elemento.EventType');

exports = EventType;

//# sourceMappingURL=EventType.js.map
