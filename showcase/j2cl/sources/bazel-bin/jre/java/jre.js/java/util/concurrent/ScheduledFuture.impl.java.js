goog.module('java.util.concurrent.ScheduledFuture$impl');

const Delayed = goog.require('java.util.concurrent.Delayed$impl');
const Future = goog.require('java.util.concurrent.Future$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template V
 * @extends {Delayed}
 * @extends {Future<V>}
 */
class ScheduledFuture {
 /** @nodts */
 static $clinit() {
  ScheduledFuture.$clinit = () =>{};
  ScheduledFuture.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Delayed.$markImplementor(ctor);
  Future.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_ScheduledFuture = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_ScheduledFuture;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ScheduledFuture.$markImplementor(/**@type {Function}*/ (ScheduledFuture));
$Util.$setClassMetadataForInterface(ScheduledFuture, 'java.util.concurrent.ScheduledFuture');

exports = ScheduledFuture;

//# sourceMappingURL=ScheduledFuture.js.map
