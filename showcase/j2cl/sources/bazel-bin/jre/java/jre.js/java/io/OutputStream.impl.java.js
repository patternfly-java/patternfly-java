goog.module('java.io.OutputStream$impl');

const Closeable = goog.require('java.io.Closeable$impl');
const Flushable = goog.require('java.io.Flushable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @abstract
 * @implements {Closeable}
 * @implements {Flushable}
 */
class OutputStream extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_io_OutputStream__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_close__void() {}
 /** @override @nodts */
 m_flush__void() {}
 /** @nodts */
 m_write__arrayOf_byte__void(/** Array<number> */ buffer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buffer);
  this.m_write__arrayOf_byte__int__int__void(buffer, 0, buffer.length);
 }
 /** @nodts */
 m_write__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ count) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, offset, count);
  for (let i = offset; i < (offset + count | 0); i = i + 1 | 0) {
   this.m_write__int__void(buffer[i]);
  }
 }
 /** @abstract @nodts */
 m_write__int__void(/** number */ oneByte) {}
 /** @nodts */
 static $clinit() {
  OutputStream.$clinit = () =>{};
  OutputStream.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OutputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Closeable.$markImplementor(OutputStream);
Flushable.$markImplementor(OutputStream);
$Util.$setClassMetadata(OutputStream, 'java.io.OutputStream');

exports = OutputStream;

//# sourceMappingURL=OutputStream.js.map
