goog.module('java.io.BufferedWriter$impl');

const Writer = goog.require('java.io.Writer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let System = goog.forwardDeclare('java.lang.System$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class BufferedWriter extends Writer {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Writer} @nodts*/
  this.f_out__java_io_BufferedWriter_;
  /**@type {Array<number>} @nodts*/
  this.f_buf__java_io_BufferedWriter_;
  /**@type {number} @nodts*/
  this.f_pos__java_io_BufferedWriter_ = 0;
  /**@type {number} @nodts*/
  this.f_size__java_io_BufferedWriter_ = 0;
 }
 //Factory method corresponding to constructor 'BufferedWriter(Writer)'.
 /** @nodts @return {!BufferedWriter} */
 static $create__java_io_Writer(/** Writer */ out) {
  BufferedWriter.$clinit();
  let $instance = new BufferedWriter();
  $instance.$ctor__java_io_BufferedWriter__java_io_Writer__void(out);
  return $instance;
 }
 //Initialization from constructor 'BufferedWriter(Writer)'.
 /** @nodts */
 $ctor__java_io_BufferedWriter__java_io_Writer__void(/** Writer */ out) {
  this.$ctor__java_io_BufferedWriter__java_io_Writer__int__void(out, BufferedWriter.f_defaultCharBufferSize__java_io_BufferedWriter_);
 }
 //Factory method corresponding to constructor 'BufferedWriter(Writer, int)'.
 /** @nodts @return {!BufferedWriter} */
 static $create__java_io_Writer__int(/** Writer */ out, /** number */ size) {
  BufferedWriter.$clinit();
  let $instance = new BufferedWriter();
  $instance.$ctor__java_io_BufferedWriter__java_io_Writer__int__void(out, size);
  return $instance;
 }
 //Initialization from constructor 'BufferedWriter(Writer, int)'.
 /** @nodts */
 $ctor__java_io_BufferedWriter__java_io_Writer__int__void(/** Writer */ out, /** number */ size) {
  this.$ctor__java_io_Writer__java_lang_Object__void(out);
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(size > 0, 'Buffer size <= 0');
  this.f_out__java_io_BufferedWriter_ = out;
  this.f_buf__java_io_BufferedWriter_ = /**@type {!Array<number>}*/ ($Arrays.$create([size], $$char));
  this.f_size__java_io_BufferedWriter_ = size;
  this.f_pos__java_io_BufferedWriter_ = 0;
 }
 /** @override @nodts */
 m_close__void() {
  if ($Equality.$same(this.f_out__java_io_BufferedWriter_, null)) {
   return;
  }
  try {
   let $primaryExc = null;
   let w = null;
   try {
    w = this.f_out__java_io_BufferedWriter_;
    this.m_flushBuffer__void_$p_java_io_BufferedWriter();
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    {
     let $exceptionFromTry = /**@type {Throwable}*/ (__$exc);
     $primaryExc = $exceptionFromTry;
     throw $Exceptions.toJs($exceptionFromTry);
    }
   } finally {
    $primaryExc = $Exceptions.safeClose(w, $primaryExc);
    if (!$Equality.$same($primaryExc, null)) {
     throw $Exceptions.toJs($primaryExc);
    }
   }
  } finally {
   this.f_out__java_io_BufferedWriter_ = null;
   this.f_buf__java_io_BufferedWriter_ = null;
  }
 }
 /** @override @nodts */
 m_flush__void() {
  this.m_flushBuffer__void_$p_java_io_BufferedWriter();
  this.f_out__java_io_BufferedWriter_.m_flush__void();
 }
 /** @nodts */
 m_ensureOpen__void_$p_java_io_BufferedWriter() {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_out__java_io_BufferedWriter_, null), 'stream closed');
 }
 /** @nodts */
 m_flushBuffer__void_$p_java_io_BufferedWriter() {
  this.m_ensureOpen__void_$p_java_io_BufferedWriter();
  if (this.f_pos__java_io_BufferedWriter_ > 0) {
   this.f_out__java_io_BufferedWriter_.m_write__arrayOf_char__int__int__void(this.f_buf__java_io_BufferedWriter_, 0, this.f_pos__java_io_BufferedWriter_);
  }
  this.f_pos__java_io_BufferedWriter_ = 0;
 }
 /** @nodts */
 m_newLine__void() {
  this.m_write__java_lang_String__void('\n');
 }
 /** @override @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ count) {
  this.m_ensureOpen__void_$p_java_io_BufferedWriter();
  IOUtils.m_checkOffsetAndCount__arrayOf_char__int__int__void(buffer, offset, count);
  if (count >= this.f_size__java_io_BufferedWriter_) {
   this.m_flushBuffer__void_$p_java_io_BufferedWriter();
   this.f_out__java_io_BufferedWriter_.m_write__arrayOf_char__int__int__void(buffer, offset, count);
   return;
  }
  let b = offset, t = offset + count | 0;
  while (b < t) {
   let d = Math.min(this.f_size__java_io_BufferedWriter_ - this.f_pos__java_io_BufferedWriter_ | 0, t - b | 0);
   System.m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(buffer, b, this.f_buf__java_io_BufferedWriter_, this.f_pos__java_io_BufferedWriter_, d);
   b = b + d | 0;
   this.f_pos__java_io_BufferedWriter_ = this.f_pos__java_io_BufferedWriter_ + d | 0;
   if (this.f_pos__java_io_BufferedWriter_ >= this.f_size__java_io_BufferedWriter_) {
    this.m_flushBuffer__void_$p_java_io_BufferedWriter();
   }
  }
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneChar) {
  let /** number */ $value;
  this.m_ensureOpen__void_$p_java_io_BufferedWriter();
  if (this.f_pos__java_io_BufferedWriter_ >= this.f_size__java_io_BufferedWriter_) {
   this.f_out__java_io_BufferedWriter_.m_write__arrayOf_char__int__int__void(this.f_buf__java_io_BufferedWriter_, 0, this.f_buf__java_io_BufferedWriter_.length);
   this.f_pos__java_io_BufferedWriter_ = 0;
  }
  $Arrays.$set(this.f_buf__java_io_BufferedWriter_, ($value = this.f_pos__java_io_BufferedWriter_, this.f_pos__java_io_BufferedWriter_ = this.f_pos__java_io_BufferedWriter_ + 1 | 0, $value), $Primitives.narrowIntToChar(oneChar));
 }
 /** @override @nodts */
 m_write__java_lang_String__int__int__void(/** ?string */ str, /** number */ offset, /** number */ count) {
  this.m_ensureOpen__void_$p_java_io_BufferedWriter();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(str);
  let b = offset, t = offset + count | 0;
  while (b < t) {
   let d = Math.min(this.f_size__java_io_BufferedWriter_ - this.f_pos__java_io_BufferedWriter_ | 0, t - b | 0);
   j_l_String.m_getChars__java_lang_String__int__int__arrayOf_char__int__void(str, b, b + d | 0, this.f_buf__java_io_BufferedWriter_, this.f_pos__java_io_BufferedWriter_);
   b = b + d | 0;
   this.f_pos__java_io_BufferedWriter_ = this.f_pos__java_io_BufferedWriter_ + d | 0;
   if (this.f_pos__java_io_BufferedWriter_ >= this.f_size__java_io_BufferedWriter_) {
    this.m_flushBuffer__void_$p_java_io_BufferedWriter();
   }
  }
 }
 /** @nodts */
 static $clinit() {
  BufferedWriter.$clinit = () =>{};
  BufferedWriter.$loadModules();
  Writer.$clinit();
  BufferedWriter.f_defaultCharBufferSize__java_io_BufferedWriter_ = 8192;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BufferedWriter;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  System = goog.module.get('java.lang.System$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
/**@type {number} @nodts*/
BufferedWriter.f_defaultCharBufferSize__java_io_BufferedWriter_ = 0;
$Util.$setClassMetadata(BufferedWriter, 'java.io.BufferedWriter');

exports = BufferedWriter;

//# sourceMappingURL=BufferedWriter.js.map
