goog.module('java.lang.NumberFormatException$impl');

const IllegalArgumentException = goog.require('java.lang.IllegalArgumentException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class NumberFormatException extends IllegalArgumentException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {NumberFormatException} */
 static m_forInputString__java_lang_String__java_lang_NumberFormatException(/** ?string */ s) {
  NumberFormatException.$clinit();
  return NumberFormatException.$create__java_lang_String('For input string: \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s) + '\"');
 }
 /** @nodts @return {NumberFormatException} */
 static m_forNullInputString__java_lang_NumberFormatException() {
  NumberFormatException.$clinit();
  return NumberFormatException.$create__java_lang_String('null');
 }
 /** @nodts @return {NumberFormatException} */
 static m_forRadix__int__java_lang_NumberFormatException(/** number */ radix) {
  NumberFormatException.$clinit();
  return NumberFormatException.$create__java_lang_String('radix ' + radix + ' out of range');
 }
 //Factory method corresponding to constructor 'NumberFormatException()'.
 /** @nodts @return {!NumberFormatException} */
 static $create__() {
  NumberFormatException.$clinit();
  let $instance = new NumberFormatException();
  $instance.$ctor__java_lang_NumberFormatException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NumberFormatException()'.
 /** @nodts */
 $ctor__java_lang_NumberFormatException__void() {
  this.$ctor__java_lang_IllegalArgumentException__void();
 }
 //Factory method corresponding to constructor 'NumberFormatException(String)'.
 /** @nodts @return {!NumberFormatException} */
 static $create__java_lang_String(/** ?string */ message) {
  NumberFormatException.$clinit();
  let $instance = new NumberFormatException();
  $instance.$ctor__java_lang_NumberFormatException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'NumberFormatException(String)'.
 /** @nodts */
 $ctor__java_lang_NumberFormatException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_IllegalArgumentException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  NumberFormatException.$clinit = () =>{};
  NumberFormatException.$loadModules();
  IllegalArgumentException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatException;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(NumberFormatException, 'java.lang.NumberFormatException');

exports = NumberFormatException;

//# sourceMappingURL=NumberFormatException.js.map
