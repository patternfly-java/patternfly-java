goog.module('java.security.DigestException$impl');

const GeneralSecurityException = goog.require('java.security.GeneralSecurityException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class DigestException extends GeneralSecurityException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DigestException()'.
 /** @nodts @return {!DigestException} */
 static $create__() {
  DigestException.$clinit();
  let $instance = new DigestException();
  $instance.$ctor__java_security_DigestException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'DigestException()'.
 /** @nodts */
 $ctor__java_security_DigestException__void() {
  this.$ctor__java_security_GeneralSecurityException__void();
 }
 //Factory method corresponding to constructor 'DigestException(String)'.
 /** @nodts @return {!DigestException} */
 static $create__java_lang_String(/** ?string */ msg) {
  DigestException.$clinit();
  let $instance = new DigestException();
  $instance.$ctor__java_security_DigestException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'DigestException(String)'.
 /** @nodts */
 $ctor__java_security_DigestException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_security_GeneralSecurityException__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  DigestException.$clinit = () =>{};
  DigestException.$loadModules();
  GeneralSecurityException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DigestException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(DigestException, 'java.security.DigestException');

exports = DigestException;

//# sourceMappingURL=DigestException.js.map
