goog.module('java.lang.IllegalArgumentException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class IllegalArgumentException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'IllegalArgumentException()'.
 /** @nodts @return {!IllegalArgumentException} */
 static $create__() {
  IllegalArgumentException.$clinit();
  let $instance = new IllegalArgumentException();
  $instance.$ctor__java_lang_IllegalArgumentException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalArgumentException()'.
 /** @nodts */
 $ctor__java_lang_IllegalArgumentException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'IllegalArgumentException(String)'.
 /** @nodts @return {!IllegalArgumentException} */
 static $create__java_lang_String(/** ?string */ message) {
  IllegalArgumentException.$clinit();
  let $instance = new IllegalArgumentException();
  $instance.$ctor__java_lang_IllegalArgumentException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalArgumentException(String)'.
 /** @nodts */
 $ctor__java_lang_IllegalArgumentException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'IllegalArgumentException(String, Throwable)'.
 /** @nodts @return {!IllegalArgumentException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  IllegalArgumentException.$clinit();
  let $instance = new IllegalArgumentException();
  $instance.$ctor__java_lang_IllegalArgumentException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalArgumentException(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_IllegalArgumentException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'IllegalArgumentException(Throwable)'.
 /** @nodts @return {!IllegalArgumentException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  IllegalArgumentException.$clinit();
  let $instance = new IllegalArgumentException();
  $instance.$ctor__java_lang_IllegalArgumentException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalArgumentException(Throwable)'.
 /** @nodts */
 $ctor__java_lang_IllegalArgumentException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  IllegalArgumentException.$clinit = () =>{};
  IllegalArgumentException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IllegalArgumentException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IllegalArgumentException, 'java.lang.IllegalArgumentException');

exports = IllegalArgumentException;

//# sourceMappingURL=IllegalArgumentException.js.map
