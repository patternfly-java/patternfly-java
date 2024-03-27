goog.module('java.util.concurrent.RejectedExecutionException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class RejectedExecutionException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'RejectedExecutionException()'.
 /** @nodts @return {!RejectedExecutionException} */
 static $create__() {
  RejectedExecutionException.$clinit();
  let $instance = new RejectedExecutionException();
  $instance.$ctor__java_util_concurrent_RejectedExecutionException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RejectedExecutionException()'.
 /** @nodts */
 $ctor__java_util_concurrent_RejectedExecutionException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'RejectedExecutionException(String)'.
 /** @nodts @return {!RejectedExecutionException} */
 static $create__java_lang_String(/** ?string */ message) {
  RejectedExecutionException.$clinit();
  let $instance = new RejectedExecutionException();
  $instance.$ctor__java_util_concurrent_RejectedExecutionException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RejectedExecutionException(String)'.
 /** @nodts */
 $ctor__java_util_concurrent_RejectedExecutionException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'RejectedExecutionException(String, Throwable)'.
 /** @nodts @return {!RejectedExecutionException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  RejectedExecutionException.$clinit();
  let $instance = new RejectedExecutionException();
  $instance.$ctor__java_util_concurrent_RejectedExecutionException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RejectedExecutionException(String, Throwable)'.
 /** @nodts */
 $ctor__java_util_concurrent_RejectedExecutionException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'RejectedExecutionException(Throwable)'.
 /** @nodts @return {!RejectedExecutionException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  RejectedExecutionException.$clinit();
  let $instance = new RejectedExecutionException();
  $instance.$ctor__java_util_concurrent_RejectedExecutionException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RejectedExecutionException(Throwable)'.
 /** @nodts */
 $ctor__java_util_concurrent_RejectedExecutionException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  RejectedExecutionException.$clinit = () =>{};
  RejectedExecutionException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RejectedExecutionException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(RejectedExecutionException, 'java.util.concurrent.RejectedExecutionException');

exports = RejectedExecutionException;

//# sourceMappingURL=RejectedExecutionException.js.map
