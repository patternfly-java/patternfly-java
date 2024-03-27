goog.module('org.gwtproject.event.shared.testing.RecordingEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');

class RecordingEventBus extends EventBus {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Set<Event<?>>} @nodts*/
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_;
  /**@type {EventBus} @nodts*/
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_;
 }
 //Factory method corresponding to constructor 'RecordingEventBus()'.
 /** @nodts @return {!RecordingEventBus} */
 static $create__() {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__void();
  return $instance;
 }
 //Initialization from constructor 'RecordingEventBus()'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__void() {
  this.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus__void(SimpleEventBus.$create__());
 }
 //Factory method corresponding to constructor 'RecordingEventBus(EventBus)'.
 /** @nodts @return {!RecordingEventBus} */
 static $create__org_gwtproject_event_shared_EventBus(/** EventBus */ wrapped) {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus__void(wrapped);
  return $instance;
 }
 //Initialization from constructor 'RecordingEventBus(EventBus)'.
 /** @nodts */
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus__void(/** EventBus */ wrapped) {
  this.$ctor__org_gwtproject_event_shared_EventBus__void();
  this.$init__void_$p_org_gwtproject_event_shared_testing_RecordingEventBus();
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_ = wrapped;
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** H */ handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, handler);
 }
 /** @override @nodts @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(type, source, handler);
 }
 /** @nodts */
 m_clearFiredEvents__void() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.clear();
 }
 /** @override @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ event) {
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEvent__org_gwtproject_event_shared_Event__void(event);
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
 }
 /** @override @nodts */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<?> */ event, /** * */ source) {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(event, source);
 }
 /** @nodts @return {boolean} */
 m_wasEventFired__org_gwtproject_event_shared_Event__boolean(/** Event<?> */ event) {
  return this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.contains(event);
 }
 /** @private @nodts */
 $init__void_$p_org_gwtproject_event_shared_testing_RecordingEventBus() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_ = /**@type {!HashSet<Event<?>>}*/ (HashSet.$create__());
 }
 /** @nodts */
 static $clinit() {
  RecordingEventBus.$clinit = () =>{};
  RecordingEventBus.$loadModules();
  EventBus.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RecordingEventBus;
 }
 
 /** @nodts */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
 }
}
$Util.$setClassMetadata(RecordingEventBus, 'org.gwtproject.event.shared.testing.RecordingEventBus');

exports = RecordingEventBus;

//# sourceMappingURL=RecordingEventBus.js.map
