goog.module('java.lang.UnsupportedOperationException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class UnsupportedOperationException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'UnsupportedOperationException()'.
 /** @nodts @return {!UnsupportedOperationException} */
 static $create__() {
  UnsupportedOperationException.$clinit();
  let $instance = new UnsupportedOperationException();
  $instance.$ctor__java_lang_UnsupportedOperationException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedOperationException()'.
 /** @nodts */
 $ctor__java_lang_UnsupportedOperationException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'UnsupportedOperationException(String)'.
 /** @nodts @return {!UnsupportedOperationException} */
 static $create__java_lang_String(/** ?string */ message) {
  UnsupportedOperationException.$clinit();
  let $instance = new UnsupportedOperationException();
  $instance.$ctor__java_lang_UnsupportedOperationException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedOperationException(String)'.
 /** @nodts */
 $ctor__java_lang_UnsupportedOperationException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'UnsupportedOperationException(String, Throwable)'.
 /** @nodts @return {!UnsupportedOperationException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  UnsupportedOperationException.$clinit();
  let $instance = new UnsupportedOperationException();
  $instance.$ctor__java_lang_UnsupportedOperationException__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedOperationException(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_UnsupportedOperationException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'UnsupportedOperationException(Throwable)'.
 /** @nodts @return {!UnsupportedOperationException} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  UnsupportedOperationException.$clinit();
  let $instance = new UnsupportedOperationException();
  $instance.$ctor__java_lang_UnsupportedOperationException__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedOperationException(Throwable)'.
 /** @nodts */
 $ctor__java_lang_UnsupportedOperationException__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  UnsupportedOperationException.$clinit = () =>{};
  UnsupportedOperationException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnsupportedOperationException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(UnsupportedOperationException, 'java.lang.UnsupportedOperationException');

exports = UnsupportedOperationException;

//# sourceMappingURL=UnsupportedOperationException.js.map
