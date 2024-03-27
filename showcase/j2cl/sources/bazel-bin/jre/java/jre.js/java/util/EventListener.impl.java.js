goog.module('java.util.EventListener$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class EventListener {
 /** @nodts */
 static $clinit() {
  EventListener.$clinit = () =>{};
  EventListener.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_EventListener = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_EventListener;
 }
 
 /** @nodts */
 static $loadModules() {}
}
EventListener.$markImplementor(/**@type {Function}*/ (EventListener));
$Util.$setClassMetadataForInterface(EventListener, 'java.util.EventListener');

exports = EventListener;

//# sourceMappingURL=EventListener.js.map
