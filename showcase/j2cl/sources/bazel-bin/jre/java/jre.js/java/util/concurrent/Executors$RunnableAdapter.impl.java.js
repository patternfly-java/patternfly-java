goog.module('java.util.concurrent.Executors.RunnableAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Callable = goog.require('java.util.concurrent.Callable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');

/**
 * @final
 * @template T
 * @implements {Callable<T>}
 */
class RunnableAdapter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Runnable} @nodts*/
  this.f_task__java_util_concurrent_Executors_RunnableAdapter;
  /**@type {T} @nodts*/
  this.f_result__java_util_concurrent_Executors_RunnableAdapter;
 }
 /** @nodts @template T @return {!RunnableAdapter<T>} */
 static $create__java_lang_Runnable__java_lang_Object(/** Runnable */ task, /** T */ result) {
  RunnableAdapter.$clinit();
  let $instance = new RunnableAdapter();
  $instance.$ctor__java_util_concurrent_Executors_RunnableAdapter__java_lang_Runnable__java_lang_Object__void(task, result);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_Executors_RunnableAdapter__java_lang_Runnable__java_lang_Object__void(/** Runnable */ task, /** T */ result) {
  this.$ctor__java_lang_Object__void();
  this.f_task__java_util_concurrent_Executors_RunnableAdapter = task;
  this.f_result__java_util_concurrent_Executors_RunnableAdapter = result;
 }
 /** @override @nodts @return {T} */
 m_call__java_lang_Object() {
  this.f_task__java_util_concurrent_Executors_RunnableAdapter.m_run__void();
  return this.f_result__java_util_concurrent_Executors_RunnableAdapter;
 }
 /** @nodts */
 static $clinit() {
  RunnableAdapter.$clinit = () =>{};
  RunnableAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RunnableAdapter;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Callable.$markImplementor(RunnableAdapter);
$Util.$setClassMetadata(RunnableAdapter, 'java.util.concurrent.Executors$RunnableAdapter');

exports = RunnableAdapter;

//# sourceMappingURL=Executors$RunnableAdapter.js.map
