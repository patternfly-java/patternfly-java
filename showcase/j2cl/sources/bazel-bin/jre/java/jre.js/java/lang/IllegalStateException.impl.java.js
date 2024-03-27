goog.module('java.lang.IllegalStateException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class IllegalStateException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'IllegalStateException()'.
 /** @nodts @return {!IllegalStateException} */
 static $create__() {
  IllegalStateException.$clinit();
  let $instance = new IllegalStateException();
  $instance.$ctor__java_lang_IllegalStateException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalStateException()'.
 /** @nodts */
 $ctor__java_lang_IllegalStateException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'IllegalStateException(String)'.
 /** @nodts @return {!IllegalStateException} */
 static $create__java_lang_String(/** ?string */ s) {
  IllegalStateException.$clinit();
  let $instance = new IllegalStateException();
  $instance.$ctor__java_lang_IllegalStateException__java_lang_String__void(s);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalStateException(String)'.
 /** @nodts */
 $ctor__java_lang_IllegalStateException__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(s);
 }
 //Factory method corresponding to constructor 'IllegalStateException(String, Throwable)'.
 /** @nodts @return {!IllegalStateException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  IllegalStateException.$clinit();
  let $instance = new IllegalStateException();
  $instance.$ctor__java_lang_IllegalStateException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalStateException(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_IllegalStateException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'IllegalStateException(Throwable)'.
 /** @nodts @return {!IllegalStateException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  IllegalStateException.$clinit();
  let $instance = new IllegalStateException();
  $instance.$ctor__java_lang_IllegalStateException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IllegalStateException(Throwable)'.
 /** @nodts */
 $ctor__java_lang_IllegalStateException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  IllegalStateException.$clinit = () =>{};
  IllegalStateException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IllegalStateException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IllegalStateException, 'java.lang.IllegalStateException');

exports = IllegalStateException;

//# sourceMappingURL=IllegalStateException.js.map
