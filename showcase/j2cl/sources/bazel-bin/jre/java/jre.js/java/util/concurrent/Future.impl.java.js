goog.module('java.util.concurrent.Future$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TimeUnit = goog.forwardDeclare('java.util.concurrent.TimeUnit$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @template V
 */
class Future {
 /** @abstract @nodts @return {boolean} */
 m_cancel__boolean__boolean(/** boolean */ mayInterruptIfRunning) {}
 /** @abstract @nodts @return {boolean} */
 m_isCancelled__boolean() {}
 /** @abstract @nodts @return {boolean} */
 m_isDone__boolean() {}
 /** @abstract @nodts @return {V} */
 m_get__java_lang_Object() {}
 /** @abstract @nodts @return {V} */
 m_get__long__java_util_concurrent_TimeUnit__java_lang_Object(/** !$Long */ timeout, /** TimeUnit */ unit) {}
 /** @nodts */
 static $clinit() {
  Future.$clinit = () =>{};
  Future.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_concurrent_Future = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_Future;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Future.$markImplementor(/**@type {Function}*/ (Future));
$Util.$setClassMetadataForInterface(Future, 'java.util.concurrent.Future');

exports = Future;

//# sourceMappingURL=Future.js.map
