goog.module('java.util.NoSuchElementException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NoSuchElementException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NoSuchElementException()'.
 /** @nodts @return {!NoSuchElementException} */
 static $create__() {
  NoSuchElementException.$clinit();
  let $instance = new NoSuchElementException();
  $instance.$ctor__java_util_NoSuchElementException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NoSuchElementException()'.
 /** @nodts */
 $ctor__java_util_NoSuchElementException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'NoSuchElementException(String)'.
 /** @nodts @return {!NoSuchElementException} */
 static $create__java_lang_String(/** ?string */ s) {
  NoSuchElementException.$clinit();
  let $instance = new NoSuchElementException();
  $instance.$ctor__java_util_NoSuchElementException__java_lang_String__void(s);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NoSuchElementException(String)'.
 /** @nodts */
 $ctor__java_util_NoSuchElementException__java_lang_String__void(/** ?string */ s) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(s);
 }
 /** @nodts */
 static $clinit() {
  NoSuchElementException.$clinit = () =>{};
  NoSuchElementException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoSuchElementException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(NoSuchElementException, 'java.util.NoSuchElementException');

exports = NoSuchElementException;

//# sourceMappingURL=NoSuchElementException.js.map
