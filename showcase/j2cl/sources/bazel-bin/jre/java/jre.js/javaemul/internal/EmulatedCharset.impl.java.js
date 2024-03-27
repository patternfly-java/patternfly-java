goog.module('javaemul.internal.EmulatedCharset$impl');

const Charset = goog.require('java.nio.charset.Charset$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LatinCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset.LatinCharset$impl');
let UtfCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset.UtfCharset$impl');

/**
 * @abstract
 */
class EmulatedCharset extends Charset {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__javaemul_internal_EmulatedCharset__java_lang_String__void(/** ?string */ name) {
  this.$ctor__java_nio_charset_Charset__java_lang_String__arrayOf_java_lang_String__void(name, null);
 }
 /** @final @nodts @return {Array<number>} */
 m_getBytes__java_lang_String__arrayOf_byte(/** ?string */ string_1) {
  return this.m_getBytes__java_lang_String__boolean__arrayOf_byte(string_1, false);
 }
 /** @abstract @nodts @return {Array<number>} */
 m_getBytes__java_lang_String__boolean__arrayOf_byte(/** ?string */ string_1, /** boolean */ throwOnInvalid) {}
 /** @final @nodts @return {Array<number>} */
 m_getBytes__arrayOf_char__int__int__arrayOf_byte(/** Array<number> */ buffer, /** number */ offset, /** number */ count) {
  return this.m_getBytes__arrayOf_char__int__int__boolean__arrayOf_byte(buffer, offset, count, false);
 }
 /** @abstract @nodts @return {Array<number>} */
 m_getBytes__arrayOf_char__int__int__boolean__arrayOf_byte(/** Array<number> */ buffer, /** number */ offset, /** number */ count, /** boolean */ throwOnInvalid) {}
 /** @final @nodts @return {Array<number>} */
 m_decodeString__arrayOf_byte__int__int__arrayOf_char(/** Array<number> */ bytes, /** number */ ofs, /** number */ len) {
  return this.m_decodeString__arrayOf_byte__int__int__boolean__arrayOf_char(bytes, ofs, len, false);
 }
 /** @abstract @nodts @return {Array<number>} */
 m_decodeString__arrayOf_byte__int__int__boolean__arrayOf_char(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** boolean */ throwOnInvalid) {}
 /** @nodts @return {EmulatedCharset} */
 static get f_UTF_8__javaemul_internal_EmulatedCharset() {
  return (EmulatedCharset.$clinit(), EmulatedCharset.$static_UTF_8__javaemul_internal_EmulatedCharset);
 }
 /** @nodts @return {EmulatedCharset} */
 static get f_ISO_LATIN_1__javaemul_internal_EmulatedCharset() {
  return (EmulatedCharset.$clinit(), EmulatedCharset.$static_ISO_LATIN_1__javaemul_internal_EmulatedCharset);
 }
 /** @nodts @return {EmulatedCharset} */
 static get f_ISO_8859_1__javaemul_internal_EmulatedCharset() {
  return (EmulatedCharset.$clinit(), EmulatedCharset.$static_ISO_8859_1__javaemul_internal_EmulatedCharset);
 }
 /** @nodts */
 static $clinit() {
  EmulatedCharset.$clinit = () =>{};
  EmulatedCharset.$loadModules();
  Charset.$clinit();
  EmulatedCharset.$static_UTF_8__javaemul_internal_EmulatedCharset = UtfCharset.$create__java_lang_String('UTF-8');
  EmulatedCharset.$static_ISO_LATIN_1__javaemul_internal_EmulatedCharset = LatinCharset.$create__java_lang_String('ISO-LATIN-1');
  EmulatedCharset.$static_ISO_8859_1__javaemul_internal_EmulatedCharset = LatinCharset.$create__java_lang_String('ISO-8859-1');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmulatedCharset;
 }
 
 /** @nodts */
 static $loadModules() {
  LatinCharset = goog.module.get('javaemul.internal.EmulatedCharset.LatinCharset$impl');
  UtfCharset = goog.module.get('javaemul.internal.EmulatedCharset.UtfCharset$impl');
 }
}
/**@private {EmulatedCharset} @nodts*/
EmulatedCharset.$static_UTF_8__javaemul_internal_EmulatedCharset;
/**@private {EmulatedCharset} @nodts*/
EmulatedCharset.$static_ISO_LATIN_1__javaemul_internal_EmulatedCharset;
/**@private {EmulatedCharset} @nodts*/
EmulatedCharset.$static_ISO_8859_1__javaemul_internal_EmulatedCharset;
$Util.$setClassMetadata(EmulatedCharset, 'javaemul.internal.EmulatedCharset');

exports = EmulatedCharset;

//# sourceMappingURL=EmulatedCharset.js.map
