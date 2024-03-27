goog.module('java.lang.SecurityException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class SecurityException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SecurityException} */
 static $create__() {
  let $instance = new SecurityException();
  $instance.$ctor__java_lang_SecurityException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_SecurityException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 /** @nodts */
 static $clinit() {
  SecurityException.$clinit = () =>{};
  SecurityException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SecurityException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(SecurityException, 'java.lang.SecurityException');

exports = SecurityException;

//# sourceMappingURL=SecurityException.js.map
