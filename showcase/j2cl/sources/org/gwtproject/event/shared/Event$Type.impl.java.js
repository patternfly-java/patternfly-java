goog.module('org.gwtproject.event.shared.Event.Type$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template H
 */
class Type extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_index__org_gwtproject_event_shared_Event_Type_ = 0;
 }
 /** @nodts @template H @return {!Type<H>} */
 static $create__() {
  Type.$clinit();
  let $instance = new Type();
  $instance.$ctor__org_gwtproject_event_shared_Event_Type__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_Event_Type__void() {
  this.$ctor__java_lang_Object__void();
  this.f_index__org_gwtproject_event_shared_Event_Type_ = Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_ = Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_ + 1 | 0;
 }
 /** @final @override @return {number} */
 hashCode() {
  return this.f_index__org_gwtproject_event_shared_Event_Type_;
 }
 /** @override @return {?string} */
 toString() {
  return 'Event type';
 }
 /** @nodts */
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Type;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@type {number} @nodts*/
Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_ = 0;
$Util.$setClassMetadata(Type, 'org.gwtproject.event.shared.Event$Type');

exports = Type;

//# sourceMappingURL=Event$Type.js.map
