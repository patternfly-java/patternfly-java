goog.module('java.util.EventObject$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class EventObject extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {*} @nodts*/
  this.f_source__java_util_EventObject;
 }
 /** @nodts @return {!EventObject} */
 static $create__java_lang_Object(/** * */ source) {
  EventObject.$clinit();
  let $instance = new EventObject();
  $instance.$ctor__java_util_EventObject__java_lang_Object__void(source);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EventObject__java_lang_Object__void(/** * */ source) {
  this.$ctor__java_lang_Object__void();
  this.f_source__java_util_EventObject = source;
 }
 /** @nodts @return {*} */
 m_getSource__java_lang_Object() {
  return this.f_source__java_util_EventObject;
 }
 /** @nodts */
 static $clinit() {
  EventObject.$clinit = () =>{};
  EventObject.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventObject;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(EventObject, 'java.util.EventObject');

exports = EventObject;

//# sourceMappingURL=EventObject.js.map
