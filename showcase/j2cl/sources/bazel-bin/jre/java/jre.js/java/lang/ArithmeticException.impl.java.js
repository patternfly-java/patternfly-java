goog.module('java.lang.ArithmeticException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ArithmeticException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ArithmeticException(String)'.
 /** @nodts @return {!ArithmeticException} */
 static $create__java_lang_String(/** ?string */ explanation) {
  ArithmeticException.$clinit();
  let $instance = new ArithmeticException();
  $instance.$ctor__java_lang_ArithmeticException__java_lang_String__void(explanation);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArithmeticException(String)'.
 /** @nodts */
 $ctor__java_lang_ArithmeticException__java_lang_String__void(/** ?string */ explanation) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(explanation);
 }
 //Factory method corresponding to constructor 'ArithmeticException()'.
 /** @nodts @return {!ArithmeticException} */
 static $create__() {
  ArithmeticException.$clinit();
  let $instance = new ArithmeticException();
  $instance.$ctor__java_lang_ArithmeticException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArithmeticException()'.
 /** @nodts */
 $ctor__java_lang_ArithmeticException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 /** @nodts */
 static $clinit() {
  ArithmeticException.$clinit = () =>{};
  ArithmeticException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArithmeticException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ArithmeticException, 'java.lang.ArithmeticException');

exports = ArithmeticException;

//# sourceMappingURL=ArithmeticException.js.map
