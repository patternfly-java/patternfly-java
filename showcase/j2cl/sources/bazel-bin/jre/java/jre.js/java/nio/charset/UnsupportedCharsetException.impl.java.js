goog.module('java.nio.charset.UnsupportedCharsetException$impl');

const IllegalArgumentException = goog.require('java.lang.IllegalArgumentException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class UnsupportedCharsetException extends IllegalArgumentException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_charsetName__java_nio_charset_UnsupportedCharsetException_;
 }
 /** @nodts @return {!UnsupportedCharsetException} */
 static $create__java_lang_String(/** ?string */ charsetName) {
  UnsupportedCharsetException.$clinit();
  let $instance = new UnsupportedCharsetException();
  $instance.$ctor__java_nio_charset_UnsupportedCharsetException__java_lang_String__void(charsetName);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_nio_charset_UnsupportedCharsetException__java_lang_String__void(/** ?string */ charsetName) {
  this.$ctor__java_lang_IllegalArgumentException__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(charsetName));
  this.f_charsetName__java_nio_charset_UnsupportedCharsetException_ = charsetName;
 }
 /** @nodts @return {?string} */
 m_getCharsetName__java_lang_String() {
  return this.f_charsetName__java_nio_charset_UnsupportedCharsetException_;
 }
 /** @nodts */
 static $clinit() {
  UnsupportedCharsetException.$clinit = () =>{};
  UnsupportedCharsetException.$loadModules();
  IllegalArgumentException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnsupportedCharsetException;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(UnsupportedCharsetException, 'java.nio.charset.UnsupportedCharsetException');

exports = UnsupportedCharsetException;

//# sourceMappingURL=UnsupportedCharsetException.js.map
