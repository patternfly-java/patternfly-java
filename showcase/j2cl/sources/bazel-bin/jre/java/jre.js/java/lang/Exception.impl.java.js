goog.module('java.lang.Exception$impl');

const Throwable = goog.require('java.lang.Throwable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Exception extends Throwable {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Exception()'.
 /** @nodts @return {!Exception} */
 static $create__() {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception()'.
 /** @nodts */
 $ctor__java_lang_Exception__void() {
  this.$ctor__java_lang_Throwable__void();
 }
 //Factory method corresponding to constructor 'Exception(String)'.
 /** @nodts @return {!Exception} */
 static $create__java_lang_String(/** ?string */ message) {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception(String)'.
 /** @nodts */
 $ctor__java_lang_Exception__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Throwable__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'Exception(String, Throwable)'.
 /** @nodts @return {!Exception} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'Exception(Throwable)'.
 /** @nodts @return {!Exception} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception(Throwable)'.
 /** @nodts */
 $ctor__java_lang_Exception__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_Throwable__java_lang_Throwable__void(cause);
 }
 //Factory method corresponding to constructor 'Exception(String, Throwable, boolean, boolean)'.
 /** @nodts @return {!Exception} */
 static $create__java_lang_String__java_lang_Throwable__boolean__boolean(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__boolean__boolean__void(message, cause, enableSuppression, writableStackTrace);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception(String, Throwable, boolean, boolean)'.
 /** @nodts */
 $ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__boolean__boolean__void(/** ?string */ message, /** Throwable */ cause, /** boolean */ enableSuppression, /** boolean */ writableStackTrace) {
  this.$ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__boolean__boolean__void(message, cause, enableSuppression, writableStackTrace);
 }
 //Factory method corresponding to constructor 'Exception(Object)'.
 /** @nodts @return {!Exception} */
 static $create__java_lang_Object(/** * */ backingJsObject) {
  Exception.$clinit();
  let $instance = new Exception();
  $instance.$ctor__java_lang_Exception__java_lang_Object__void(backingJsObject);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Exception(Object)'.
 /** @nodts */
 $ctor__java_lang_Exception__java_lang_Object__void(/** * */ backingJsObject) {
  this.$ctor__java_lang_Throwable__java_lang_Object__void(backingJsObject);
 }
 /** @nodts */
 static $clinit() {
  Exception.$clinit = () =>{};
  Exception.$loadModules();
  Throwable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Exception;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Exception, 'java.lang.Exception');

exports = Exception;

//# sourceMappingURL=Exception.js.map
