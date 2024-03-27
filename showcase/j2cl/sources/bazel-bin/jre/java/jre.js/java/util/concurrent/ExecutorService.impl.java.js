goog.module('java.util.concurrent.ExecutorService$impl');

const Executor = goog.require('java.util.concurrent.Executor$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Callable = goog.forwardDeclare('java.util.concurrent.Callable$impl');
let Future = goog.forwardDeclare('java.util.concurrent.Future$impl');
let TimeUnit = goog.forwardDeclare('java.util.concurrent.TimeUnit$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @interface
 * @extends {Executor}
 */
class ExecutorService {
 /** @abstract @nodts */
 m_shutdown__void() {}
 /** @abstract @nodts @return {List<Runnable>} */
 m_shutdownNow__java_util_List() {}
 /** @abstract @nodts @return {boolean} */
 m_isShutdown__boolean() {}
 /** @abstract @nodts @return {boolean} */
 m_isTerminated__boolean() {}
 /** @abstract @nodts @template T @return {Future<T>} */
 m_submit__java_util_concurrent_Callable__java_util_concurrent_Future(/** Callable<T> */ task) {}
 /** @abstract @nodts @template T @return {Future<T>} */
 m_submit__java_lang_Runnable__java_lang_Object__java_util_concurrent_Future(/** Runnable */ task, /** T */ result) {}
 /** @abstract @nodts @return {Future<?>} */
 m_submit__java_lang_Runnable__java_util_concurrent_Future(/** Runnable */ task) {}
 /** @abstract @nodts @template T @return {List<Future<T>>} */
 m_invokeAll__java_util_Collection__java_util_List(/** Collection<?> */ tasks) {}
 /** @abstract @nodts @template T @return {List<Future<T>>} */
 m_invokeAll__java_util_Collection__long__java_util_concurrent_TimeUnit__java_util_List(/** Collection<?> */ tasks, /** !$Long */ timeout, /** TimeUnit */ unit) {}
 /** @abstract @nodts @template T @return {T} */
 m_invokeAny__java_util_Collection__java_lang_Object(/** Collection<?> */ tasks) {}
 /** @abstract @nodts @template T @return {T} */
 m_invokeAny__java_util_Collection__long__java_util_concurrent_TimeUnit__java_lang_Object(/** Collection<?> */ tasks, /** !$Long */ timeout, /** TimeUnit */ unit) {}
 /** @nodts */
 static $clinit() {
  ExecutorService.$clinit = () =>{};
  ExecutorService.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Executor.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_ExecutorService = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_ExecutorService;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ExecutorService.$markImplementor(/**@type {Function}*/ (ExecutorService));
$Util.$setClassMetadataForInterface(ExecutorService, 'java.util.concurrent.ExecutorService');

exports = ExecutorService;

//# sourceMappingURL=ExecutorService.js.map
