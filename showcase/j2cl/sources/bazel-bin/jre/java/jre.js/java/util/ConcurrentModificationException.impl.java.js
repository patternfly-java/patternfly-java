goog.module('java.util.ConcurrentModificationException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class ConcurrentModificationException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ConcurrentModificationException()'.
 /** @nodts @return {!ConcurrentModificationException} */
 static $create__() {
  ConcurrentModificationException.$clinit();
  let $instance = new ConcurrentModificationException();
  $instance.$ctor__java_util_ConcurrentModificationException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ConcurrentModificationException()'.
 /** @nodts */
 $ctor__java_util_ConcurrentModificationException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'ConcurrentModificationException(String)'.
 /** @nodts @return {!ConcurrentModificationException} */
 static $create__java_lang_String(/** ?string */ message) {
  ConcurrentModificationException.$clinit();
  let $instance = new ConcurrentModificationException();
  $instance.$ctor__java_util_ConcurrentModificationException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ConcurrentModificationException(String)'.
 /** @nodts */
 $ctor__java_util_ConcurrentModificationException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'ConcurrentModificationException(Throwable)'.
 /** @nodts @return {!ConcurrentModificationException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  ConcurrentModificationException.$clinit();
  let $instance = new ConcurrentModificationException();
  $instance.$ctor__java_util_ConcurrentModificationException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ConcurrentModificationException(Throwable)'.
 /** @nodts */
 $ctor__java_util_ConcurrentModificationException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
 }
 //Factory method corresponding to constructor 'ConcurrentModificationException(String, Throwable)'.
 /** @nodts @return {!ConcurrentModificationException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  ConcurrentModificationException.$clinit();
  let $instance = new ConcurrentModificationException();
  $instance.$ctor__java_util_ConcurrentModificationException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ConcurrentModificationException(String, Throwable)'.
 /** @nodts */
 $ctor__java_util_ConcurrentModificationException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 /** @nodts */
 static $clinit() {
  ConcurrentModificationException.$clinit = () =>{};
  ConcurrentModificationException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConcurrentModificationException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ConcurrentModificationException, 'java.util.ConcurrentModificationException');

exports = ConcurrentModificationException;

//# sourceMappingURL=ConcurrentModificationException.js.map
