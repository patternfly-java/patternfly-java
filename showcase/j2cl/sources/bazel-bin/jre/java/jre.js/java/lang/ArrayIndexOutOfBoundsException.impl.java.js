goog.module('java.lang.ArrayIndexOutOfBoundsException$impl');

const IndexOutOfBoundsException = goog.require('java.lang.IndexOutOfBoundsException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ArrayIndexOutOfBoundsException extends IndexOutOfBoundsException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ArrayIndexOutOfBoundsException()'.
 /** @nodts @return {!ArrayIndexOutOfBoundsException} */
 static $create__() {
  ArrayIndexOutOfBoundsException.$clinit();
  let $instance = new ArrayIndexOutOfBoundsException();
  $instance.$ctor__java_lang_ArrayIndexOutOfBoundsException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArrayIndexOutOfBoundsException()'.
 /** @nodts */
 $ctor__java_lang_ArrayIndexOutOfBoundsException__void() {
  this.$ctor__java_lang_IndexOutOfBoundsException__void();
 }
 //Factory method corresponding to constructor 'ArrayIndexOutOfBoundsException(int)'.
 /** @nodts @return {!ArrayIndexOutOfBoundsException} */
 static $create__int(/** number */ index) {
  ArrayIndexOutOfBoundsException.$clinit();
  let $instance = new ArrayIndexOutOfBoundsException();
  $instance.$ctor__java_lang_ArrayIndexOutOfBoundsException__int__void(index);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArrayIndexOutOfBoundsException(int)'.
 /** @nodts */
 $ctor__java_lang_ArrayIndexOutOfBoundsException__int__void(/** number */ index) {
  this.$ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void('Array index ' + index + ' out of range');
 }
 //Factory method corresponding to constructor 'ArrayIndexOutOfBoundsException(String)'.
 /** @nodts @return {!ArrayIndexOutOfBoundsException} */
 static $create__java_lang_String(/** ?string */ msg) {
  ArrayIndexOutOfBoundsException.$clinit();
  let $instance = new ArrayIndexOutOfBoundsException();
  $instance.$ctor__java_lang_ArrayIndexOutOfBoundsException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ArrayIndexOutOfBoundsException(String)'.
 /** @nodts */
 $ctor__java_lang_ArrayIndexOutOfBoundsException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  ArrayIndexOutOfBoundsException.$clinit = () =>{};
  ArrayIndexOutOfBoundsException.$loadModules();
  IndexOutOfBoundsException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayIndexOutOfBoundsException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ArrayIndexOutOfBoundsException, 'java.lang.ArrayIndexOutOfBoundsException');

exports = ArrayIndexOutOfBoundsException;

//# sourceMappingURL=ArrayIndexOutOfBoundsException.js.map
