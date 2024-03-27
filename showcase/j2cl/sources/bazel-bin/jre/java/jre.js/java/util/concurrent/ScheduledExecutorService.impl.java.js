goog.module('java.util.concurrent.ScheduledExecutorService$impl');

const ExecutorService = goog.require('java.util.concurrent.ExecutorService$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Callable = goog.forwardDeclare('java.util.concurrent.Callable$impl');
let ScheduledFuture = goog.forwardDeclare('java.util.concurrent.ScheduledFuture$impl');
let TimeUnit = goog.forwardDeclare('java.util.concurrent.TimeUnit$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @extends {ExecutorService}
 */
class ScheduledExecutorService {
 /** @abstract @nodts @return {ScheduledFuture<?>} */
 m_schedule__java_lang_Runnable__long__java_util_concurrent_TimeUnit__java_util_concurrent_ScheduledFuture(/** Runnable */ command, /** !$Long */ delay, /** TimeUnit */ unit) {}
 /** @abstract @nodts @template V @return {ScheduledFuture<V>} */
 m_schedule__java_util_concurrent_Callable__long__java_util_concurrent_TimeUnit__java_util_concurrent_ScheduledFuture(/** Callable<V> */ callable, /** !$Long */ delay, /** TimeUnit */ unit) {}
 /** @abstract @nodts @return {ScheduledFuture<?>} */
 m_scheduleAtFixedRate__java_lang_Runnable__long__long__java_util_concurrent_TimeUnit__java_util_concurrent_ScheduledFuture(/** Runnable */ command, /** !$Long */ initialDelay, /** !$Long */ period, /** TimeUnit */ unit) {}
 /** @abstract @nodts @return {ScheduledFuture<?>} */
 m_scheduleWithFixedDelay__java_lang_Runnable__long__long__java_util_concurrent_TimeUnit__java_util_concurrent_ScheduledFuture(/** Runnable */ command, /** !$Long */ initialDelay, /** !$Long */ delay, /** TimeUnit */ unit) {}
 /** @nodts */
 static $clinit() {
  ScheduledExecutorService.$clinit = () =>{};
  ScheduledExecutorService.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ExecutorService.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_ScheduledExecutorService = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_ScheduledExecutorService;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ScheduledExecutorService.$markImplementor(/**@type {Function}*/ (ScheduledExecutorService));
$Util.$setClassMetadataForInterface(ScheduledExecutorService, 'java.util.concurrent.ScheduledExecutorService');

exports = ScheduledExecutorService;

//# sourceMappingURL=ScheduledExecutorService.js.map
