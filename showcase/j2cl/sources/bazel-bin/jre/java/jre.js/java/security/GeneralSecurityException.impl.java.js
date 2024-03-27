goog.module('java.security.GeneralSecurityException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class GeneralSecurityException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'GeneralSecurityException()'.
 /** @nodts @return {!GeneralSecurityException} */
 static $create__() {
  GeneralSecurityException.$clinit();
  let $instance = new GeneralSecurityException();
  $instance.$ctor__java_security_GeneralSecurityException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'GeneralSecurityException()'.
 /** @nodts */
 $ctor__java_security_GeneralSecurityException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'GeneralSecurityException(String)'.
 /** @nodts @return {!GeneralSecurityException} */
 static $create__java_lang_String(/** ?string */ msg) {
  GeneralSecurityException.$clinit();
  let $instance = new GeneralSecurityException();
  $instance.$ctor__java_security_GeneralSecurityException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'GeneralSecurityException(String)'.
 /** @nodts */
 $ctor__java_security_GeneralSecurityException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_Exception__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  GeneralSecurityException.$clinit = () =>{};
  GeneralSecurityException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeneralSecurityException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(GeneralSecurityException, 'java.security.GeneralSecurityException');

exports = GeneralSecurityException;

//# sourceMappingURL=GeneralSecurityException.js.map
