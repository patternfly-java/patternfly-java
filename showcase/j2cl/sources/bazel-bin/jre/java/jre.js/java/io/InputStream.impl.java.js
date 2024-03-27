goog.module('java.io.InputStream$impl');

const Closeable = goog.require('java.io.Closeable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');

/**
 * @abstract
 * @implements {Closeable}
 */
class InputStream extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_io_InputStream__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 m_available__int() {
  return 0;
 }
 /** @override @nodts */
 m_close__void() {}
 /** @nodts */
 m_mark__int__void(/** number */ readlimit) {}
 /** @nodts @return {boolean} */
 m_markSupported__boolean() {
  return false;
 }
 /** @abstract @nodts @return {number} */
 m_read__int() {}
 /** @nodts @return {number} */
 m_read__arrayOf_byte__int(/** Array<number> */ buffer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buffer);
  return this.m_read__arrayOf_byte__int__int__int(buffer, 0, buffer.length);
 }
 /** @nodts @return {number} */
 m_read__arrayOf_byte__int__int__int(/** Array<number> */ buffer, /** number */ byteOffset, /** number */ byteCount) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, byteOffset, byteCount);
  for (let i = 0; i < byteCount; i = i + 1 | 0) {
   let /** number */ c;
   try {
    if ((c = this.m_read__int()) == (- 1 | 0)) {
     return i == 0 ? - 1 | 0 : i;
    }
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     if (i != 0) {
      return i;
     }
     throw $Exceptions.toJs(e);
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
   $Arrays.$set(buffer, byteOffset + i | 0, $Primitives.narrowIntToByte(c));
  }
  return byteCount;
 }
 /** @nodts */
 m_reset__void() {
  throw $Exceptions.toJs(IOException.$create__());
 }
 /** @nodts @return {!$Long} */
 m_skip__long__long(/** !$Long */ byteCount) {
  if ($LongUtils.lessEquals(byteCount, $Long.fromInt(0))) {
   return $Long.fromInt(0);
  }
  let bSize = $Primitives.narrowLongToInt(Math.m_min__long__long__long($Primitives.widenIntToLong(InputStream.f_MAX_SKIP_BUFFER_SIZE__java_io_InputStream_), byteCount));
  let b = /**@type {!Array<number>}*/ ($Arrays.$create([bSize], $$byte));
  let skipped = $Long.fromInt(0);
  while ($LongUtils.less(skipped, byteCount)) {
   let toRead = $Primitives.narrowLongToInt(Math.m_min__long__long__long($LongUtils.minus(byteCount, skipped), $Primitives.widenIntToLong(b.length)));
   let readCount = this.m_read__arrayOf_byte__int__int__int(b, 0, toRead);
   if (readCount == (- 1 | 0)) {
    break;
   }
   skipped = $LongUtils.plus(skipped, $Primitives.widenIntToLong(readCount));
   if (readCount < toRead) {
    break;
   }
  }
  return skipped;
 }
 /** @nodts */
 static $clinit() {
  InputStream.$clinit = () =>{};
  InputStream.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  Math = goog.module.get('java.lang.Math$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
 }
}
/**@const {number} @nodts*/
InputStream.f_MAX_SKIP_BUFFER_SIZE__java_io_InputStream_ = 4096;
Closeable.$markImplementor(InputStream);
$Util.$setClassMetadata(InputStream, 'java.io.InputStream');

exports = InputStream;

//# sourceMappingURL=InputStream.js.map
