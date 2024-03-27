goog.module('java.util.concurrent.Flow.Subscription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 */
class Subscription {
 /** @abstract @nodts */
 m_request__long__void(/** !$Long */ n) {}
 /** @abstract @nodts */
 m_cancel__void() {}
 /** @nodts */
 static $clinit() {
  Subscription.$clinit = () =>{};
  Subscription.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Flow_Subscription = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Flow_Subscription;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Subscription.$markImplementor(/**@type {Function}*/ (Subscription));
$Util.$setClassMetadataForInterface(Subscription, 'java.util.concurrent.Flow$Subscription');

exports = Subscription;

//# sourceMappingURL=Flow$Subscription.js.map
