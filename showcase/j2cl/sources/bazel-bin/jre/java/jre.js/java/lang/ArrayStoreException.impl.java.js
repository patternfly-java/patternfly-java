goog.module('java.lang.ArrayStoreException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ArrayStoreException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ArrayStoreException()'.
 /** @nodts @return {!ArrayStoreException} */
 static $create__() {
  ArrayStoreException.$clinit();
  let $instance = new ArrayStoreException();
  $instance.$ctor__java_lang_ArrayStoreException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArrayStoreException()'.
 /** @nodts */
 $ctor__java_lang_ArrayStoreException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'ArrayStoreException(String)'.
 /** @nodts @return {!ArrayStoreException} */
 static $create__java_lang_String(/** ?string */ message) {
  ArrayStoreException.$clinit();
  let $instance = new ArrayStoreException();
  $instance.$ctor__java_lang_ArrayStoreException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArrayStoreException(String)'.
 /** @nodts */
 $ctor__java_lang_ArrayStoreException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  ArrayStoreException.$clinit = () =>{};
  ArrayStoreException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayStoreException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ArrayStoreException, 'java.lang.ArrayStoreException');

exports = ArrayStoreException;

//# sourceMappingURL=ArrayStoreException.js.map
