goog.module('java.util.concurrent.Executors$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Callable = goog.forwardDeclare('java.util.concurrent.Callable$impl');
let RunnableAdapter = goog.forwardDeclare('java.util.concurrent.Executors.RunnableAdapter$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Executors extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {Callable<T>} */
 static m_callable__java_lang_Runnable__java_lang_Object__java_util_concurrent_Callable(/** Runnable */ task, /** T */ result) {
  Executors.$clinit();
  if ($Equality.$same(task, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  return /**@type {!RunnableAdapter<T>}*/ (RunnableAdapter.$create__java_lang_Runnable__java_lang_Object(task, result));
 }
 /** @nodts @return {Callable<*>} */
 static m_callable__java_lang_Runnable__java_util_concurrent_Callable(/** Runnable */ task) {
  Executors.$clinit();
  if ($Equality.$same(task, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  return /**@type {!RunnableAdapter<*>}*/ (RunnableAdapter.$create__java_lang_Runnable__java_lang_Object(task, null));
 }
 /** @nodts @return {!Executors} */
 static $create__() {
  let $instance = new Executors();
  $instance.$ctor__java_util_concurrent_Executors__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_Executors__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Executors.$clinit = () =>{};
  Executors.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Executors;
 }
 
 /** @nodts */
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  RunnableAdapter = goog.module.get('java.util.concurrent.Executors.RunnableAdapter$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(Executors, 'java.util.concurrent.Executors');

exports = Executors;

//# sourceMappingURL=Executors.js.map
