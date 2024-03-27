goog.module('java.security.NoSuchAlgorithmException$impl');

const GeneralSecurityException = goog.require('java.security.GeneralSecurityException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NoSuchAlgorithmException extends GeneralSecurityException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NoSuchAlgorithmException()'.
 /** @nodts @return {!NoSuchAlgorithmException} */
 static $create__() {
  NoSuchAlgorithmException.$clinit();
  let $instance = new NoSuchAlgorithmException();
  $instance.$ctor__java_security_NoSuchAlgorithmException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NoSuchAlgorithmException()'.
 /** @nodts */
 $ctor__java_security_NoSuchAlgorithmException__void() {
  this.$ctor__java_security_GeneralSecurityException__void();
 }
 //Factory method corresponding to constructor 'NoSuchAlgorithmException(String)'.
 /** @nodts @return {!NoSuchAlgorithmException} */
 static $create__java_lang_String(/** ?string */ msg) {
  NoSuchAlgorithmException.$clinit();
  let $instance = new NoSuchAlgorithmException();
  $instance.$ctor__java_security_NoSuchAlgorithmException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NoSuchAlgorithmException(String)'.
 /** @nodts */
 $ctor__java_security_NoSuchAlgorithmException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_security_GeneralSecurityException__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  NoSuchAlgorithmException.$clinit = () =>{};
  NoSuchAlgorithmException.$loadModules();
  GeneralSecurityException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoSuchAlgorithmException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(NoSuchAlgorithmException, 'java.security.NoSuchAlgorithmException');

exports = NoSuchAlgorithmException;

//# sourceMappingURL=NoSuchAlgorithmException.js.map
