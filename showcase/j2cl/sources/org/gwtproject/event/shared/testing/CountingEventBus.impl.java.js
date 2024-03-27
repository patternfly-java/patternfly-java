goog.module('org.gwtproject.event.shared.testing.CountingEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');
let KeyedCounter = goog.forwardDeclare('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');
let TypeSourcePair = goog.forwardDeclare('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair$impl');

class CountingEventBus extends EventBus {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {KeyedCounter<Type<?>>} @nodts*/
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {KeyedCounter<Type<?>>} @nodts*/
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {KeyedCounter<TypeSourcePair>} @nodts*/
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_;
  /**@type {EventBus} @nodts*/
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_;
 }
 //Factory method corresponding to constructor 'CountingEventBus()'.
 /** @nodts @return {!CountingEventBus} */
 static $create__() {
  CountingEventBus.$clinit();
  let $instance = new CountingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__void();
  return $instance;
 }
 //Initialization from constructor 'CountingEventBus()'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus__void() {
  this.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus__void(SimpleEventBus.$create__());
 }
 //Factory method corresponding to constructor 'CountingEventBus(EventBus)'.
 /** @nodts @return {!CountingEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  CountingEventBus.$clinit();
  let $instance = new CountingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus__void(wrapped);
  return $instance;
 }
 //Initialization from constructor 'CountingEventBus(EventBus)'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus__org_gwtproject_event_shared_EventBus__void(/** EventBus */ wrapped) {
  this.$ctor__org_gwtproject_event_shared_EventBus__void();
  this.$init__void_$p_org_gwtproject_event_shared_testing_CountingEventBus();
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_ = wrapped;
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** H */ handler) {
  let superReg = this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, handler);
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(type);
  return this.m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(type, superReg);
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let superReg = this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, source, handler);
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(type);
  return this.m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(type, superReg);
 }
 /** @override @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_fireEvent__org_gwtproject_event_shared_Event__void(event);
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(event.m_getAssociatedType__org_gwtproject_event_shared_Event_Type());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(event.m_getAssociatedType__org_gwtproject_event_shared_Event_Type(), null));
 }
 /** @override @nodts */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<?> */ event, /** * */ source) {
  this.f_wrapped__org_gwtproject_event_shared_testing_CountingEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(event, source);
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(event.m_getAssociatedType__org_gwtproject_event_shared_Event_Type());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(event.m_getAssociatedType__org_gwtproject_event_shared_Event_Type(), source));
 }
 /** @nodts @return {number} */
 m_getFiredCount__org_gwtproject_event_shared_Event_Type__int(/** Type<?> */ type) {
  return this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(type);
 }
 /** @nodts @return {number} */
 m_getFiredCountFromSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__int(/** Type<?> */ type, /** * */ source) {
  return this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(TypeSourcePair.$create__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, source));
 }
 /** @nodts @return {number} */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type__int(/** Type<?> */ type) {
  return this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(type);
 }
 /** @nodts @template H @return {HandlerRegistration} */
 m_makeReg__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration_$p_org_gwtproject_event_shared_testing_CountingEventBus(/** Type<H> */ type, /** HandlerRegistration */ superReg) {
  return HandlerRegistration.$adapt(() =>{
   this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_.m_decrement__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(type);
   superReg.m_removeHandler__void();
  });
 }
 /** @private @nodts */
 $init__void_$p_org_gwtproject_event_shared_testing_CountingEventBus() {
  this.f_handlerCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<Type<?>>}*/ (KeyedCounter.$create__());
  this.f_firedCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<Type<?>>}*/ (KeyedCounter.$create__());
  this.f_sourceCounts__org_gwtproject_event_shared_testing_CountingEventBus_ = /**@type {!KeyedCounter<TypeSourcePair>}*/ (KeyedCounter.$create__());
 }
 /** @nodts */
 static $clinit() {
  CountingEventBus.$clinit = () =>{};
  CountingEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CountingEventBus;
 }
 
 /** @nodts */
 static $loadModules() {
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
  KeyedCounter = goog.module.get('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');
  TypeSourcePair = goog.module.get('org.gwtproject.event.shared.testing.CountingEventBus.TypeSourcePair$impl');
 }
}
$Util.$setClassMetadata(CountingEventBus, 'org.gwtproject.event.shared.testing.CountingEventBus');

exports = CountingEventBus;

//# sourceMappingURL=CountingEventBus.js.map
