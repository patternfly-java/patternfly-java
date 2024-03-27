goog.module('java.io.ByteArrayOutputStream$impl');

const OutputStream = goog.require('java.io.OutputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class ByteArrayOutputStream extends OutputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_buf__java_io_ByteArrayOutputStream;
  /**@type {number} @nodts*/
  this.f_count__java_io_ByteArrayOutputStream = 0;
 }
 //Factory method corresponding to constructor 'ByteArrayOutputStream()'.
 /** @nodts @return {!ByteArrayOutputStream} */
 static $create__() {
  ByteArrayOutputStream.$clinit();
  let $instance = new ByteArrayOutputStream();
  $instance.$ctor__java_io_ByteArrayOutputStream__void();
  return $instance;
 }
 //Initialization from constructor 'ByteArrayOutputStream()'.
 /** @nodts */
 $ctor__java_io_ByteArrayOutputStream__void() {
  this.$ctor__java_io_OutputStream__void();
  this.f_buf__java_io_ByteArrayOutputStream = /**@type {!Array<number>}*/ ($Arrays.$create([32], $$byte));
 }
 //Factory method corresponding to constructor 'ByteArrayOutputStream(int)'.
 /** @nodts @return {!ByteArrayOutputStream} */
 static $create__int(/** number */ size) {
  ByteArrayOutputStream.$clinit();
  let $instance = new ByteArrayOutputStream();
  $instance.$ctor__java_io_ByteArrayOutputStream__int__void(size);
  return $instance;
 }
 //Initialization from constructor 'ByteArrayOutputStream(int)'.
 /** @nodts */
 $ctor__java_io_ByteArrayOutputStream__int__void(/** number */ size) {
  this.$ctor__java_io_OutputStream__void();
  if (size >= 0) {
   this.f_buf__java_io_ByteArrayOutputStream = /**@type {!Array<number>}*/ ($Arrays.$create([size], $$byte));
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('size < 0'));
  }
 }
 /** @override @nodts */
 m_close__void() {
  super.m_close__void();
 }
 /** @nodts */
 m_expand__int__void_$p_java_io_ByteArrayOutputStream(/** number */ i) {
  if ((this.f_count__java_io_ByteArrayOutputStream + i | 0) <= this.f_buf__java_io_ByteArrayOutputStream.length) {
   return;
  }
  let newbuf = /**@type {!Array<number>}*/ ($Arrays.$create([Math.imul(this.f_count__java_io_ByteArrayOutputStream + i, 2)], $$byte));
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(this.f_buf__java_io_ByteArrayOutputStream, 0, newbuf, 0, this.f_count__java_io_ByteArrayOutputStream);
  this.f_buf__java_io_ByteArrayOutputStream = newbuf;
 }
 /** @nodts */
 m_reset__void() {
  this.f_count__java_io_ByteArrayOutputStream = 0;
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_count__java_io_ByteArrayOutputStream;
 }
 /** @nodts @return {Array<number>} */
 m_toByteArray__arrayOf_byte() {
  let newArray = /**@type {!Array<number>}*/ ($Arrays.$create([this.f_count__java_io_ByteArrayOutputStream], $$byte));
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(this.f_buf__java_io_ByteArrayOutputStream, 0, newArray, 0, this.f_count__java_io_ByteArrayOutputStream);
  return newArray;
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.$create__arrayOf_byte__int__int(this.f_buf__java_io_ByteArrayOutputStream, 0, this.f_count__java_io_ByteArrayOutputStream);
 }
 /** @nodts @return {?string} @deprecated */
 m_toString__int__java_lang_String(/** number */ hibyte) {
  let newBuf = /**@type {!Array<number>}*/ ($Arrays.$create([this.m_size__int()], $$char));
  for (let i = 0; i < newBuf.length; i = i + 1 | 0) {
   $Arrays.$set(newBuf, i, $Primitives.narrowIntToChar((hibyte & 255) << 8 | this.f_buf__java_io_ByteArrayOutputStream[i] & 255));
  }
  return j_l_String.$create__arrayOf_char(newBuf);
 }
 /** @nodts @return {?string} */
 m_toString__java_lang_String__java_lang_String(/** ?string */ charsetName) {
  return j_l_String.$create__arrayOf_byte__int__int__java_lang_String(this.f_buf__java_io_ByteArrayOutputStream, 0, this.f_count__java_io_ByteArrayOutputStream, charsetName);
 }
 /** @override @nodts */
 m_write__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ len) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, offset, len);
  if (len == 0) {
   return;
  }
  this.m_expand__int__void_$p_java_io_ByteArrayOutputStream(len);
  System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(buffer, offset, this.f_buf__java_io_ByteArrayOutputStream, this.f_count__java_io_ByteArrayOutputStream, len);
  this.f_count__java_io_ByteArrayOutputStream = this.f_count__java_io_ByteArrayOutputStream + len | 0;
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneByte) {
  let /** number */ $value;
  if (this.f_count__java_io_ByteArrayOutputStream == this.f_buf__java_io_ByteArrayOutputStream.length) {
   this.m_expand__int__void_$p_java_io_ByteArrayOutputStream(1);
  }
  $Arrays.$set(this.f_buf__java_io_ByteArrayOutputStream, ($value = this.f_count__java_io_ByteArrayOutputStream, this.f_count__java_io_ByteArrayOutputStream = this.f_count__java_io_ByteArrayOutputStream + 1 | 0, $value), $Primitives.narrowIntToByte(oneByte));
 }
 /** @nodts */
 m_writeTo__java_io_OutputStream__void(/** OutputStream */ out) {
  out.m_write__arrayOf_byte__int__int__void(this.f_buf__java_io_ByteArrayOutputStream, 0, this.f_count__java_io_ByteArrayOutputStream);
 }
 /** @nodts */
 static $clinit() {
  ByteArrayOutputStream.$clinit = () =>{};
  ByteArrayOutputStream.$loadModules();
  OutputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByteArrayOutputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  System = goog.module.get('java.lang.System$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
$Util.$setClassMetadata(ByteArrayOutputStream, 'java.io.ByteArrayOutputStream');

exports = ByteArrayOutputStream;

//# sourceMappingURL=ByteArrayOutputStream.js.map
