goog.module('java.util.concurrent.RunnableFuture$impl');

const Runnable = goog.require('java.lang.Runnable$impl');
const Future = goog.require('java.util.concurrent.Future$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template V
 * @extends {Runnable}
 * @extends {Future<V>}
 */
class RunnableFuture {
 /** @nodts */
 static $clinit() {
  RunnableFuture.$clinit = () =>{};
  RunnableFuture.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Runnable.$markImplementor(ctor);
  Future.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_RunnableFuture = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_RunnableFuture;
 }
 
 /** @nodts */
 static $loadModules() {}
}
RunnableFuture.$markImplementor(/**@type {Function}*/ (RunnableFuture));
$Util.$setClassMetadataForInterface(RunnableFuture, 'java.util.concurrent.RunnableFuture');

exports = RunnableFuture;

//# sourceMappingURL=RunnableFuture.js.map
