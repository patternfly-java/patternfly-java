goog.module('org.gwtproject.event.shared.EventBus$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @abstract
 * @implements {HasHandlers}
 */
class EventBus extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_EventBus__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template H */
 static m_dispatchEvent__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<H> */ event, /** H */ handler) {
  EventBus.$clinit();
  event.m_dispatch__java_lang_Object__void(handler);
 }
 /** @nodts */
 static m_setSourceOfEvent__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<?> */ event, /** * */ source) {
  EventBus.$clinit();
  event.m_setSource__java_lang_Object__void(source);
 }
 /** @abstract @nodts @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** H */ handler) {}
 /** @abstract @nodts @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object__org_gwtproject_event_shared_HandlerRegistration(/** Type<H> */ type, /** * */ source, /** H */ handler) {}
 /** @abstract @override @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ event) {}
 /** @abstract @nodts */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object__void(/** Event<?> */ event, /** * */ source) {}
 /** @nodts */
 static $clinit() {
  EventBus.$clinit = () =>{};
  EventBus.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventBus;
 }
 
 /** @nodts */
 static $loadModules() {}
}
HasHandlers.$markImplementor(EventBus);
$Util.$setClassMetadata(EventBus, 'org.gwtproject.event.shared.EventBus');

exports = EventBus;

//# sourceMappingURL=EventBus.js.map
