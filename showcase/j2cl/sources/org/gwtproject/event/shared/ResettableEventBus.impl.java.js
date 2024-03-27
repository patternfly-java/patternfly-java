goog.module('org.gwtproject.event.shared.ResettableEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ResettableEventBus extends EventBus {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EventBus} @nodts*/
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_;
  /**@type {Set<HandlerRegistration>} @nodts*/
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_;
 }
 /** @nodts @return {!ResettableEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrappedBus) {
  ResettableEventBus.$clinit();
  let $instance = new ResettableEventBus();
  $instance.$ctor__org_gwtproject_event_shared_ResettableEventBus__org_gwtproject_event_shared_EventBus__void(wrappedBus);
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_ResettableEventBus__org_gwtproject_event_shared_EventBus__void(/** EventBus */ wrappedBus) {
  this.$ctor__org_gwtproject_event_shared_EventBus__void();
  this.$init__void_$p_org_gwtproject_event_shared_ResettableEventBus();
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_ = wrappedBus;
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** H */ handler) {
  let rtn = this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, handler);
  return this.m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(rtn);
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let rtn = this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, source, handler);
  return this.m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(rtn);
 }
 /** @override @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_fireEvent__org_gwtproject_event_shared_Event__void(event);
 }
 /** @override @nodts */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<?> */ event, /** * */ source) {
  this.f_wrapped__org_gwtproject_event_shared_ResettableEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(event, source);
 }
 /** @nodts */
 m_removeHandlers__void() {
  let it = this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.m_iterator__java_util_Iterator();
  while (it.m_hasNext__boolean()) {
   let r = /**@type {HandlerRegistration}*/ ($Casts.$to(it.m_next__java_lang_Object(), HandlerRegistration));
   it.m_remove__void();
   r.m_removeHandler__void();
  }
 }
 /** @nodts @return {number} */
 m_getRegistrationSize__int_$pp_org_gwtproject_event_shared() {
  return this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.size();
 }
 /** @nodts @return {HandlerRegistration} */
 m_doRegisterHandler__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_ResettableEventBus(/** HandlerRegistration */ registration) {
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.add(registration);
  return HandlerRegistration.$adapt(() =>{
   this.m_doUnregisterHandler__org_gwtproject_event_shared_HandlerRegistration__void_$p_org_gwtproject_event_shared_ResettableEventBus(registration);
  });
 }
 /** @nodts */
 m_doUnregisterHandler__org_gwtproject_event_shared_HandlerRegistration__void_$p_org_gwtproject_event_shared_ResettableEventBus(/** HandlerRegistration */ registration) {
  if (this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.contains(registration)) {
   registration.m_removeHandler__void();
   this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_.remove(registration);
  }
 }
 /** @private @nodts */
 $init__void_$p_org_gwtproject_event_shared_ResettableEventBus() {
  this.f_registrations__org_gwtproject_event_shared_ResettableEventBus_ = /**@type {!HashSet<HandlerRegistration>}*/ (HashSet.$create__());
 }
 /** @nodts */
 static $clinit() {
  ResettableEventBus.$clinit = () =>{};
  ResettableEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResettableEventBus;
 }
 
 /** @nodts */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ResettableEventBus, 'org.gwtproject.event.shared.ResettableEventBus');

exports = ResettableEventBus;

//# sourceMappingURL=ResettableEventBus.js.map
