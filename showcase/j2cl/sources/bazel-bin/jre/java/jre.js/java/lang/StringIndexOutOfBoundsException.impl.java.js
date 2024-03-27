goog.module('java.lang.StringIndexOutOfBoundsException$impl');

const IndexOutOfBoundsException = goog.require('java.lang.IndexOutOfBoundsException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class StringIndexOutOfBoundsException extends IndexOutOfBoundsException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'StringIndexOutOfBoundsException()'.
 /** @nodts @return {!StringIndexOutOfBoundsException} */
 static $create__() {
  StringIndexOutOfBoundsException.$clinit();
  let $instance = new StringIndexOutOfBoundsException();
  $instance.$ctor__java_lang_StringIndexOutOfBoundsException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'StringIndexOutOfBoundsException()'.
 /** @nodts */
 $ctor__java_lang_StringIndexOutOfBoundsException__void() {
  this.$ctor__java_lang_IndexOutOfBoundsException__void();
 }
 //Factory method corresponding to constructor 'StringIndexOutOfBoundsException(String)'.
 /** @nodts @return {!StringIndexOutOfBoundsException} */
 static $create__java_lang_String(/** ?string */ message) {
  StringIndexOutOfBoundsException.$clinit();
  let $instance = new StringIndexOutOfBoundsException();
  $instance.$ctor__java_lang_StringIndexOutOfBoundsException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'StringIndexOutOfBoundsException(String)'.
 /** @nodts */
 $ctor__java_lang_StringIndexOutOfBoundsException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'StringIndexOutOfBoundsException(int)'.
 /** @nodts @return {!StringIndexOutOfBoundsException} */
 static $create__int(/** number */ index) {
  StringIndexOutOfBoundsException.$clinit();
  let $instance = new StringIndexOutOfBoundsException();
  $instance.$ctor__java_lang_StringIndexOutOfBoundsException__int__void(index);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'StringIndexOutOfBoundsException(int)'.
 /** @nodts */
 $ctor__java_lang_StringIndexOutOfBoundsException__int__void(/** number */ index) {
  this.$ctor__java_lang_IndexOutOfBoundsException__java_lang_String__void('String index out of range: ' + index);
 }
 /** @nodts */
 static $clinit() {
  StringIndexOutOfBoundsException.$clinit = () =>{};
  StringIndexOutOfBoundsException.$loadModules();
  IndexOutOfBoundsException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringIndexOutOfBoundsException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(StringIndexOutOfBoundsException, 'java.lang.StringIndexOutOfBoundsException');

exports = StringIndexOutOfBoundsException;

//# sourceMappingURL=StringIndexOutOfBoundsException.js.map
