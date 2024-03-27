goog.module('java.util.concurrent.ExecutionException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class ExecutionException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ExecutionException()'.
 /** @nodts @return {!ExecutionException} */
 static $create__() {
  ExecutionException.$clinit();
  let $instance = new ExecutionException();
  $instance.$ctor__java_util_concurrent_ExecutionException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ExecutionException()'.
 /** @nodts */
 $ctor__java_util_concurrent_ExecutionException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'ExecutionException(String)'.
 /** @nodts @return {!ExecutionException} */
 static $create__java_lang_String(/** ?string */ message) {
  ExecutionException.$clinit();
  let $instance = new ExecutionException();
  $instance.$ctor__java_util_concurrent_ExecutionException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ExecutionException(String)'.
 /** @nodts */
 $ctor__java_util_concurrent_ExecutionException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'ExecutionException(String, Throwable)'.
 /** @nodts @return {!ExecutionException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  ExecutionException.$clinit();
  let $instance = new ExecutionException();
  $instance.$ctor__java_util_concurrent_ExecutionException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ExecutionException(String, Throwable)'.
 /** @nodts */
 $ctor__java_util_concurrent_ExecutionException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'ExecutionException(Throwable)'.
 /** @nodts @return {!ExecutionException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  ExecutionException.$clinit();
  let $instance = new ExecutionException();
  $instance.$ctor__java_util_concurrent_ExecutionException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ExecutionException(Throwable)'.
 /** @nodts */
 $ctor__java_util_concurrent_ExecutionException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_Exception__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  ExecutionException.$clinit = () =>{};
  ExecutionException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExecutionException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ExecutionException, 'java.util.concurrent.ExecutionException');

exports = ExecutionException;

//# sourceMappingURL=ExecutionException.js.map
