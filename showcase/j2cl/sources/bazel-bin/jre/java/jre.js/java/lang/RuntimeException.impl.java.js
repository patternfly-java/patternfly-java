goog.module('java.lang.RuntimeException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class RuntimeException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'RuntimeException()'.
 /** @nodts @return {!RuntimeException} */
 static $create__() {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException()'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'RuntimeException(String)'.
 /** @nodts @return {!RuntimeException} */
 static $create__java_lang_String(/** ?string */ message) {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException(String)'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'RuntimeException(String, Throwable)'.
 /** @nodts @return {!RuntimeException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'RuntimeException(Throwable)'.
 /** @nodts @return {!RuntimeException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException(Throwable)'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_Exception__java_lang_Throwable__void(cause);
 }
 //Factory method corresponding to constructor 'RuntimeException(String, Throwable, boolean, boolean)'.
 /** @nodts @return {!RuntimeException} */
 static $create__java_lang_String__java_lang_Throwable__boolean__boolean(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__boolean__boolean__void(message, cause, enableSuppression, writableStackTrace);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException(String, Throwable, boolean, boolean)'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__boolean__boolean__void(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__boolean__boolean__void(message, cause, enableSuppression, writableStackTrace);
 }
 //Factory method corresponding to constructor 'RuntimeException(Object)'.
 /** @nodts @return {!RuntimeException} */
 static $create__java_lang_Object(/** * */ backingJsObject) {
  RuntimeException.$clinit();
  let $instance = new RuntimeException();
  $instance.$ctor__java_lang_RuntimeException__java_lang_Object__void(backingJsObject);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'RuntimeException(Object)'.
 /** @nodts */
 $ctor__java_lang_RuntimeException__java_lang_Object__void(/** * */ backingJsObject) {
  this.$ctor__java_lang_Exception__java_lang_Object__void(backingJsObject);
 }
 /** @nodts */
 static $clinit() {
  RuntimeException.$clinit = () =>{};
  RuntimeException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RuntimeException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(RuntimeException, 'java.lang.RuntimeException');

exports = RuntimeException;

//# sourceMappingURL=RuntimeException.js.map
