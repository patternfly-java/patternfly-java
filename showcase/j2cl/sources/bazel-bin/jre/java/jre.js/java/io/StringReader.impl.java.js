goog.module('java.io.StringReader$impl');

const Reader = goog.require('java.io.Reader$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

class StringReader extends Reader {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_text__java_io_StringReader_;
  /**@type {number} @nodts*/
  this.f_position__java_io_StringReader_ = 0;
  /**@type {number} @nodts*/
  this.f_mark__java_io_StringReader_ = 0;
 }
 /** @nodts @return {!StringReader} */
 static $create__java_lang_String(/** ?string */ text) {
  StringReader.$clinit();
  let $instance = new StringReader();
  $instance.$ctor__java_io_StringReader__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_StringReader__java_lang_String__void(/** ?string */ text) {
  this.$ctor__java_io_Reader__void();
  this.f_text__java_io_StringReader_ = text;
 }
 /** @override @nodts */
 m_close__void() {}
 /** @override @nodts @return {number} */
 m_read__arrayOf_char__int__int__int(/** Array<number> */ buf, /** number */ off, /** number */ readLength) {
  if (this.f_position__java_io_StringReader_ >= j_l_String.m_length__java_lang_String__int(this.f_text__java_io_StringReader_)) {
   return - 1 | 0;
  }
  let length = Math.min(j_l_String.m_length__java_lang_String__int(this.f_text__java_io_StringReader_) - this.f_position__java_io_StringReader_ | 0, readLength);
  j_l_String.m_getChars__java_lang_String__int__int__arrayOf_char__int__void(this.f_text__java_io_StringReader_, this.f_position__java_io_StringReader_, this.f_position__java_io_StringReader_ + length | 0, buf, off);
  this.f_position__java_io_StringReader_ = this.f_position__java_io_StringReader_ + length | 0;
  return length;
 }
 /** @override @nodts @return {boolean} */
 m_markSupported__boolean() {
  return true;
 }
 /** @override @nodts */
 m_mark__int__void(/** number */ readAheadLimit) {
  InternalPreconditions.m_checkArgument__boolean__void(readAheadLimit >= 0);
  this.f_mark__java_io_StringReader_ = this.f_position__java_io_StringReader_;
 }
 /** @override @nodts */
 m_reset__void() {
  this.f_position__java_io_StringReader_ = this.f_mark__java_io_StringReader_;
 }
 /** @nodts */
 static $clinit() {
  StringReader.$clinit = () =>{};
  StringReader.$loadModules();
  Reader.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringReader;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(StringReader, 'java.io.StringReader');

exports = StringReader;

//# sourceMappingURL=StringReader.js.map
