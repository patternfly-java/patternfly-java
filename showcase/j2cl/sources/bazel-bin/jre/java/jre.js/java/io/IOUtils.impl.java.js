goog.module('java.io.IOUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class IOUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_checkOffsetAndCount__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ byteOffset, /** number */ byteCount) {
  IOUtils.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buffer);
  IOUtils.m_checkOffsetAndCount__int__int__int__void(buffer.length, byteOffset, byteCount);
 }
 /** @nodts */
 static m_checkOffsetAndCount__arrayOf_char__int__int__void(/** Array<number> */ buffer, /** number */ charOffset, /** number */ charCount) {
  IOUtils.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buffer);
  IOUtils.m_checkOffsetAndCount__int__int__int__void(buffer.length, charOffset, charCount);
 }
 /** @nodts */
 static m_checkOffsetAndCount__java_lang_String__int__int__void(/** ?string */ str, /** number */ offset, /** number */ count) {
  IOUtils.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(str);
  IOUtils.m_checkOffsetAndCount__int__int__int__void(j_l_String.m_length__java_lang_String__int(str), offset, count);
 }
 /** @nodts */
 static m_checkOffsetAndCount__int__int__int__void(/** number */ length, /** number */ offset, /** number */ count) {
  if (offset < 0 || count < 0 || (offset + count | 0) > length) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /** @nodts @return {!IOUtils} */
 static $create__() {
  let $instance = new IOUtils();
  $instance.$ctor__java_io_IOUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_IOUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  IOUtils.$clinit = () =>{};
  IOUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IOUtils;
 }
 
 /** @nodts */
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(IOUtils, 'java.io.IOUtils');

exports = IOUtils;

//# sourceMappingURL=IOUtils.js.map
