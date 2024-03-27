goog.module('org.gwtproject.event.shared.Event$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');

/**
 * @abstract
 * @template H
 */
class Event extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {*} @nodts*/
  this.f_source__org_gwtproject_event_shared_Event_;
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_Event__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @nodts @return {Type<H>} */
 m_getAssociatedType__org_gwtproject_event_shared_Event_Type() {}
 /** @nodts @return {*} */
 m_getSource__java_lang_Object() {
  return this.f_source__org_gwtproject_event_shared_Event_;
 }
 /** @nodts @return {?string} */
 m_toDebugString__java_lang_String() {
  let name = this.m_getClass__java_lang_Class().m_getName__java_lang_String();
  name = j_l_String.m_substring__java_lang_String__int__java_lang_String(name, j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int(name, '.') + 1 | 0);
  return 'event: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + ':';
 }
 /** @override @return {?string} */
 toString() {
  return 'An event type';
 }
 /** @abstract @nodts */
 m_dispatch__java_lang_Object__void(/** H */ handler) {}
 /** @nodts */
 m_setSource__java_lang_Object__void(/** * */ source) {
  this.f_source__org_gwtproject_event_shared_Event_ = source;
 }
 /** @nodts */
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(Event, 'org.gwtproject.event.shared.Event');

exports = Event;

//# sourceMappingURL=Event.js.map
