goog.module('java.lang.IndexOutOfBoundsException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class IndexOutOfBoundsException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'IndexOutOfBoundsException()'.
 /** @nodts @return {!IndexOutOfBoundsException} */
 static $create__() {
  IndexOutOfBoundsException.$clinit();
  let $instance = new IndexOutOfBoundsException();
  $instance.$ctor__java_lang_IndexOutOfBoundsException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IndexOutOfBoundsException()'.
 /** @nodts */
 $ctor__java_lang_IndexOutOfBoundsException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'IndexOutOfBoundsException(String)'.
 /** @nodts @return {!IndexOutOfBoundsException} */
 static $create__java_lang_String(/** ?string */ message) {
  IndexOutOfBoundsException.$clinit();
  let $instance = new IndexOutOfBoundsException();
  $instance.$ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IndexOutOfBoundsException(String)'.
 /** @nodts */
 $ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  IndexOutOfBoundsException.$clinit = () =>{};
  IndexOutOfBoundsException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IndexOutOfBoundsException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IndexOutOfBoundsException, 'java.lang.IndexOutOfBoundsException');

exports = IndexOutOfBoundsException;

//# sourceMappingURL=IndexOutOfBoundsException.js.map
