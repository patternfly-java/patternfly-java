goog.module('java.util.concurrent.Flow.Subscriber$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Subscription = goog.forwardDeclare('java.util.concurrent.Flow.Subscription$impl');

/**
 * @interface
 * @template T
 */
class Subscriber {
 /** @abstract @nodts */
 m_onSubscribe__java_util_concurrent_Flow_Subscription__void(/** Subscription */ subscription) {}
 /** @abstract @nodts */
 m_onNext__java_lang_Object__void(/** T */ item) {}
 /** @abstract @nodts */
 m_onError__java_lang_Throwable__void(/** Throwable */ throwable) {}
 /** @abstract @nodts */
 m_onComplete__void() {}
 /** @nodts */
 static $clinit() {
  Subscriber.$clinit = () =>{};
  Subscriber.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Flow_Subscriber = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Flow_Subscriber;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Subscriber.$markImplementor(/**@type {Function}*/ (Subscriber));
$Util.$setClassMetadataForInterface(Subscriber, 'java.util.concurrent.Flow$Subscriber');

exports = Subscriber;

//# sourceMappingURL=Flow$Subscriber.js.map
