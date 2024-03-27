goog.module('java.lang.NegativeArraySizeException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NegativeArraySizeException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NegativeArraySizeException()'.
 /** @nodts @return {!NegativeArraySizeException} */
 static $create__() {
  NegativeArraySizeException.$clinit();
  let $instance = new NegativeArraySizeException();
  $instance.$ctor__java_lang_NegativeArraySizeException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NegativeArraySizeException()'.
 /** @nodts */
 $ctor__java_lang_NegativeArraySizeException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'NegativeArraySizeException(String)'.
 /** @nodts @return {!NegativeArraySizeException} */
 static $create__java_lang_String(/** ?string */ message) {
  NegativeArraySizeException.$clinit();
  let $instance = new NegativeArraySizeException();
  $instance.$ctor__java_lang_NegativeArraySizeException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NegativeArraySizeException(String)'.
 /** @nodts */
 $ctor__java_lang_NegativeArraySizeException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  NegativeArraySizeException.$clinit = () =>{};
  NegativeArraySizeException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NegativeArraySizeException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(NegativeArraySizeException, 'java.lang.NegativeArraySizeException');

exports = NegativeArraySizeException;

//# sourceMappingURL=NegativeArraySizeException.js.map
