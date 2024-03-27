goog.module('java.lang.ThreadLocal$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');

/**
 * @template T
 */
class ThreadLocal extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_value__java_lang_ThreadLocal_;
 }
 /** @nodts @template T @return {!ThreadLocal<T>} */
 static $create__() {
  ThreadLocal.$clinit();
  let $instance = new ThreadLocal();
  $instance.$ctor__java_lang_ThreadLocal__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_ThreadLocal__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {T} */
 m_get__java_lang_Object() {
  return this.f_value__java_lang_ThreadLocal_;
 }
 /** @nodts */
 m_set__java_lang_Object__void(/** T */ value) {
  this.f_value__java_lang_ThreadLocal_ = value;
 }
 /** @nodts */
 m_remove__void() {
  this.f_value__java_lang_ThreadLocal_ = null;
 }
 /** @nodts @template S @return {ThreadLocal<S>} */
 static m_withInitial__java_util_function_Supplier__java_lang_ThreadLocal(/** Supplier<?> */ supplier) {
  ThreadLocal.$clinit();
  let threadLocal = /**@type {!ThreadLocal<S>}*/ (ThreadLocal.$create__());
  threadLocal.m_set__java_lang_Object__void(supplier.m_get__java_lang_Object());
  return threadLocal;
 }
 /** @nodts */
 static $clinit() {
  ThreadLocal.$clinit = () =>{};
  ThreadLocal.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThreadLocal;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ThreadLocal, 'java.lang.ThreadLocal');

exports = ThreadLocal;

//# sourceMappingURL=ThreadLocal.js.map
