goog.module('java.lang.ClassCastException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ClassCastException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ClassCastException()'.
 /** @nodts @return {!ClassCastException} */
 static $create__() {
  ClassCastException.$clinit();
  let $instance = new ClassCastException();
  $instance.$ctor__java_lang_ClassCastException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ClassCastException()'.
 /** @nodts */
 $ctor__java_lang_ClassCastException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 //Factory method corresponding to constructor 'ClassCastException(String)'.
 /** @nodts @return {!ClassCastException} */
 static $create__java_lang_String(/** ?string */ message) {
  ClassCastException.$clinit();
  let $instance = new ClassCastException();
  $instance.$ctor__java_lang_ClassCastException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'ClassCastException(String)'.
 /** @nodts */
 $ctor__java_lang_ClassCastException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  ClassCastException.$clinit = () =>{};
  ClassCastException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClassCastException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ClassCastException, 'java.lang.ClassCastException');

exports = ClassCastException;

//# sourceMappingURL=ClassCastException.js.map
