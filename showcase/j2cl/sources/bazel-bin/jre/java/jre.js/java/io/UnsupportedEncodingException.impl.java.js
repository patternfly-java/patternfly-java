goog.module('java.io.UnsupportedEncodingException$impl');

const IOException = goog.require('java.io.IOException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class UnsupportedEncodingException extends IOException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'UnsupportedEncodingException()'.
 /** @nodts @return {!UnsupportedEncodingException} */
 static $create__() {
  UnsupportedEncodingException.$clinit();
  let $instance = new UnsupportedEncodingException();
  $instance.$ctor__java_io_UnsupportedEncodingException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedEncodingException()'.
 /** @nodts */
 $ctor__java_io_UnsupportedEncodingException__void() {
  this.$ctor__java_io_IOException__void();
 }
 //Factory method corresponding to constructor 'UnsupportedEncodingException(String)'.
 /** @nodts @return {!UnsupportedEncodingException} */
 static $create__java_lang_String(/** ?string */ msg) {
  UnsupportedEncodingException.$clinit();
  let $instance = new UnsupportedEncodingException();
  $instance.$ctor__java_io_UnsupportedEncodingException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UnsupportedEncodingException(String)'.
 /** @nodts */
 $ctor__java_io_UnsupportedEncodingException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_io_IOException__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  UnsupportedEncodingException.$clinit = () =>{};
  UnsupportedEncodingException.$loadModules();
  IOException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnsupportedEncodingException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(UnsupportedEncodingException, 'java.io.UnsupportedEncodingException');

exports = UnsupportedEncodingException;

//# sourceMappingURL=UnsupportedEncodingException.js.map
