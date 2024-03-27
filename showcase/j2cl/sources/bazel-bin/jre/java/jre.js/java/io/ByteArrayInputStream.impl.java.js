goog.module('java.io.ByteArrayInputStream$impl');

const InputStream = goog.require('java.io.InputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ByteArrayInputStream extends InputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_buf__java_io_ByteArrayInputStream;
  /**@type {number} @nodts*/
  this.f_pos__java_io_ByteArrayInputStream = 0;
  /**@type {number} @nodts*/
  this.f_mark__java_io_ByteArrayInputStream = 0;
  /**@type {number} @nodts*/
  this.f_count__java_io_ByteArrayInputStream = 0;
 }
 //Factory method corresponding to constructor 'ByteArrayInputStream(byte[])'.
 /** @nodts @return {!ByteArrayInputStream} */
 static $create__arrayOf_byte(/** Array<number> */ buf) {
  ByteArrayInputStream.$clinit();
  let $instance = new ByteArrayInputStream();
  $instance.$ctor__java_io_ByteArrayInputStream__arrayOf_byte__void(buf);
  return $instance;
 }
 //Initialization from constructor 'ByteArrayInputStream(byte[])'.
 /** @nodts */
 $ctor__java_io_ByteArrayInputStream__arrayOf_byte__void(/** Array<number> */ buf) {
  this.$ctor__java_io_InputStream__void();
  this.f_mark__java_io_ByteArrayInputStream = 0;
  this.f_buf__java_io_ByteArrayInputStream = buf;
  this.f_count__java_io_ByteArrayInputStream = buf.length;
 }
 //Factory method corresponding to constructor 'ByteArrayInputStream(byte[], int, int)'.
 /** @nodts @return {!ByteArrayInputStream} */
 static $create__arrayOf_byte__int__int(/** Array<number> */ buf, /** number */ offset, /** number */ length) {
  ByteArrayInputStream.$clinit();
  let $instance = new ByteArrayInputStream();
  $instance.$ctor__java_io_ByteArrayInputStream__arrayOf_byte__int__int__void(buf, offset, length);
  return $instance;
 }
 //Initialization from constructor 'ByteArrayInputStream(byte[], int, int)'.
 /** @nodts */
 $ctor__java_io_ByteArrayInputStream__arrayOf_byte__int__int__void(/** Array<number> */ buf, /** number */ offset, /** number */ length) {
  this.$ctor__java_io_InputStream__void();
  this.f_buf__java_io_ByteArrayInputStream = buf;
  this.f_pos__java_io_ByteArrayInputStream = offset;
  this.f_mark__java_io_ByteArrayInputStream = offset;
  this.f_count__java_io_ByteArrayInputStream = (offset + length | 0) > buf.length ? buf.length : offset + length | 0;
 }
 /** @override @nodts @return {number} */
 m_available__int() {
  return this.f_count__java_io_ByteArrayInputStream - this.f_pos__java_io_ByteArrayInputStream | 0;
 }
 /** @override @nodts */
 m_close__void() {}
 /** @override @nodts */
 m_mark__int__void(/** number */ readlimit) {
  this.f_mark__java_io_ByteArrayInputStream = this.f_pos__java_io_ByteArrayInputStream;
 }
 /** @override @nodts @return {boolean} */
 m_markSupported__boolean() {
  return true;
 }
 /** @override @nodts @return {number} */
 m_read__int() {
  let /** number */ $value;
  return this.f_pos__java_io_ByteArrayInputStream < this.f_count__java_io_ByteArrayInputStream ? this.f_buf__java_io_ByteArrayInputStream[($value = this.f_pos__java_io_ByteArrayInputStream, this.f_pos__java_io_ByteArrayInputStream = this.f_pos__java_io_ByteArrayInputStream + 1 | 0, $value)] & 255 : - 1 | 0;
 }
 /** @override @nodts @return {number} */
 m_read__arrayOf_byte__int__int__int(/** Array<number> */ buffer, /** number */ byteOffset, /** number */ byteCount) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, byteOffset, byteCount);
  if (this.f_pos__java_io_ByteArrayInputStream >= this.f_count__java_io_ByteArrayInputStream) {
   return - 1 | 0;
  }
  if (byteCount == 0) {
   return 0;
  }
  let copylen = (this.f_count__java_io_ByteArrayInputStream - this.f_pos__java_io_ByteArrayInputStream | 0) < byteCount ? this.f_count__java_io_ByteArrayInputStream - this.f_pos__java_io_ByteArrayInputStream | 0 : byteCount;
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(this.f_buf__java_io_ByteArrayInputStream, this.f_pos__java_io_ByteArrayInputStream, buffer, byteOffset, copylen);
  this.f_pos__java_io_ByteArrayInputStream = this.f_pos__java_io_ByteArrayInputStream + copylen | 0;
  return copylen;
 }
 /** @override @nodts */
 m_reset__void() {
  this.f_pos__java_io_ByteArrayInputStream = this.f_mark__java_io_ByteArrayInputStream;
 }
 /** @override @nodts @return {!$Long} */
 m_skip__long__long(/** !$Long */ byteCount) {
  if ($LongUtils.lessEquals(byteCount, $Long.fromInt(0))) {
   return $Long.fromInt(0);
  }
  let temp = this.f_pos__java_io_ByteArrayInputStream;
  this.f_pos__java_io_ByteArrayInputStream = $LongUtils.less($Primitives.widenIntToLong(this.f_count__java_io_ByteArrayInputStream - this.f_pos__java_io_ByteArrayInputStream | 0), byteCount) ? this.f_count__java_io_ByteArrayInputStream : $Primitives.narrowLongToInt($LongUtils.plus($Primitives.widenIntToLong(this.f_pos__java_io_ByteArrayInputStream), byteCount));
  return $Primitives.widenIntToLong(this.f_pos__java_io_ByteArrayInputStream - temp | 0);
 }
 /** @nodts */
 static $clinit() {
  ByteArrayInputStream.$clinit = () =>{};
  ByteArrayInputStream.$loadModules();
  InputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByteArrayInputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  System = goog.module.get('java.lang.System$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(ByteArrayInputStream, 'java.io.ByteArrayInputStream');

exports = ByteArrayInputStream;

//# sourceMappingURL=ByteArrayInputStream.js.map
