goog.module('java.lang.NullPointerException$impl');

const JsException = goog.require('java.lang.JsException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NullPointerException extends JsException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NullPointerException()'.
 /** @nodts @return {!NullPointerException} */
 static $create__() {
  NullPointerException.$clinit();
  let $instance = new NullPointerException();
  $instance.$ctor__java_lang_NullPointerException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new TypeError($instance));
  return $instance;
 }
 //Initialization from constructor 'NullPointerException()'.
 /** @nodts */
 $ctor__java_lang_NullPointerException__void() {
  this.$ctor__java_lang_JsException__void();
 }
 //Factory method corresponding to constructor 'NullPointerException(String)'.
 /** @nodts @return {!NullPointerException} */
 static $create__java_lang_String(/** ?string */ message) {
  NullPointerException.$clinit();
  let $instance = new NullPointerException();
  $instance.$ctor__java_lang_NullPointerException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new TypeError($instance));
  return $instance;
 }
 //Initialization from constructor 'NullPointerException(String)'.
 /** @nodts */
 $ctor__java_lang_NullPointerException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_JsException__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'NullPointerException(Object)'.
 /** @nodts @return {!NullPointerException} */
 static $create__java_lang_Object(/** * */ typeError) {
  NullPointerException.$clinit();
  let $instance = new NullPointerException();
  $instance.$ctor__java_lang_NullPointerException__java_lang_Object__void(typeError);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new TypeError($instance));
  return $instance;
 }
 //Initialization from constructor 'NullPointerException(Object)'.
 /** @nodts */
 $ctor__java_lang_NullPointerException__java_lang_Object__void(/** * */ typeError) {
  this.$ctor__java_lang_JsException__java_lang_Object__void(typeError);
 }
 /** @nodts */
 static $clinit() {
  NullPointerException.$clinit = () =>{};
  NullPointerException.$loadModules();
  JsException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NullPointerException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(NullPointerException, 'java.lang.NullPointerException');

exports = NullPointerException;

//# sourceMappingURL=NullPointerException.js.map
