goog.module('java.io.OutputStreamWriter$impl');

const Writer = goog.require('java.io.Writer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let OutputStream = goog.forwardDeclare('java.io.OutputStream$impl');
let Charset = goog.forwardDeclare('java.nio.charset.Charset$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class OutputStreamWriter extends Writer {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OutputStream} @nodts*/
  this.f_out__java_io_OutputStreamWriter_;
  /**@type {Charset} @nodts*/
  this.f_charset__java_io_OutputStreamWriter_;
 }
 //Factory method corresponding to constructor 'OutputStreamWriter(OutputStream, String)'.
 /** @nodts @return {!OutputStreamWriter} */
 static $create__java_io_OutputStream__java_lang_String(/** OutputStream */ out, /** ?string */ charsetName) {
  OutputStreamWriter.$clinit();
  let $instance = new OutputStreamWriter();
  $instance.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_lang_String__void(out, charsetName);
  return $instance;
 }
 //Initialization from constructor 'OutputStreamWriter(OutputStream, String)'.
 /** @nodts */
 $ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_lang_String__void(/** OutputStream */ out, /** ?string */ charsetName) {
  this.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(out, Charset.m_forName__java_lang_String__java_nio_charset_Charset(charsetName));
 }
 //Factory method corresponding to constructor 'OutputStreamWriter(OutputStream, Charset)'.
 /** @nodts @return {!OutputStreamWriter} */
 static $create__java_io_OutputStream__java_nio_charset_Charset(/** OutputStream */ out, /** Charset */ charset) {
  OutputStreamWriter.$clinit();
  let $instance = new OutputStreamWriter();
  $instance.$ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(out, charset);
  return $instance;
 }
 //Initialization from constructor 'OutputStreamWriter(OutputStream, Charset)'.
 /** @nodts */
 $ctor__java_io_OutputStreamWriter__java_io_OutputStream__java_nio_charset_Charset__void(/** OutputStream */ out, /** Charset */ charset) {
  this.$ctor__java_io_Writer__void();
  this.f_out__java_io_OutputStreamWriter_ = /**@type {OutputStream}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(out), OutputStream));
  this.f_charset__java_io_OutputStreamWriter_ = /**@type {Charset}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(charset), Charset));
 }
 /** @override @nodts */
 m_close__void() {
  this.f_out__java_io_OutputStreamWriter_.m_close__void();
 }
 /** @override @nodts */
 m_flush__void() {
  this.f_out__java_io_OutputStreamWriter_.m_flush__void();
 }
 /** @nodts @return {?string} */
 m_getEncoding__java_lang_String() {
  return this.f_charset__java_io_OutputStreamWriter_.m_name__java_lang_String();
 }
 /** @override @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ count) {
  IOUtils.m_checkOffsetAndCount__arrayOf_char__int__int__void(buffer, offset, count);
  let byteBuffer = /**@type {EmulatedCharset}*/ ($Casts.$to(this.f_charset__java_io_OutputStreamWriter_, EmulatedCharset)).m_getBytes__arrayOf_char__int__int__arrayOf_byte(buffer, offset, count);
  this.f_out__java_io_OutputStreamWriter_.m_write__arrayOf_byte__int__int__void(byteBuffer, 0, byteBuffer.length);
 }
 /** @nodts */
 static $clinit() {
  OutputStreamWriter.$clinit = () =>{};
  OutputStreamWriter.$loadModules();
  Writer.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OutputStreamWriter;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  OutputStream = goog.module.get('java.io.OutputStream$impl');
  Charset = goog.module.get('java.nio.charset.Charset$impl');
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OutputStreamWriter, 'java.io.OutputStreamWriter');

exports = OutputStreamWriter;

//# sourceMappingURL=OutputStreamWriter.js.map
