goog.module('java.nio.charset.IllegalCharsetNameException$impl');

const IllegalArgumentException = goog.require('java.lang.IllegalArgumentException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class IllegalCharsetNameException extends IllegalArgumentException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_charsetName__java_nio_charset_IllegalCharsetNameException_;
 }
 /** @nodts @return {!IllegalCharsetNameException} */
 static $create__java_lang_String(/** ?string */ charsetName) {
  IllegalCharsetNameException.$clinit();
  let $instance = new IllegalCharsetNameException();
  $instance.$ctor__java_nio_charset_IllegalCharsetNameException__java_lang_String__void(charsetName);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_nio_charset_IllegalCharsetNameException__java_lang_String__void(/** ?string */ charsetName) {
  this.$ctor__java_lang_IllegalArgumentException__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(charsetName));
  this.f_charsetName__java_nio_charset_IllegalCharsetNameException_ = charsetName;
 }
 /** @nodts @return {?string} */
 m_getCharsetName__java_lang_String() {
  return this.f_charsetName__java_nio_charset_IllegalCharsetNameException_;
 }
 /** @nodts */
 static $clinit() {
  IllegalCharsetNameException.$clinit = () =>{};
  IllegalCharsetNameException.$loadModules();
  IllegalArgumentException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IllegalCharsetNameException;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(IllegalCharsetNameException, 'java.nio.charset.IllegalCharsetNameException');

exports = IllegalCharsetNameException;

//# sourceMappingURL=IllegalCharsetNameException.js.map
