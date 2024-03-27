goog.module('javaemul.internal.EmulatedCharset.LatinCharset$impl');

const EmulatedCharset = goog.require('javaemul.internal.EmulatedCharset$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class LatinCharset extends EmulatedCharset {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LatinCharset} */
 static $create__java_lang_String(/** ?string */ name) {
  LatinCharset.$clinit();
  let $instance = new LatinCharset();
  $instance.$ctor__javaemul_internal_EmulatedCharset_LatinCharset__java_lang_String__void(name);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_EmulatedCharset_LatinCharset__java_lang_String__void(/** ?string */ name) {
  this.$ctor__javaemul_internal_EmulatedCharset__java_lang_String__void(name);
 }
 /** @override @nodts @return {Array<number>} */
 m_getBytes__arrayOf_char__int__int__boolean__arrayOf_byte(/** Array<number> */ buffer, /** number */ offset, /** number */ count, /** boolean */ throwOnInvalid) {
  let n = offset + count | 0;
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$byte));
  ArrayHelper.m_setLength__java_lang_Object__int__void(bytes, count);
  for (let i = offset; i < n; i = i + 1 | 0) {
   $Arrays.$set(bytes, i, $Primitives.narrowIntToByte(buffer[i] & 255));
  }
  return bytes;
 }
 /** @override @nodts @return {Array<number>} */
 m_getBytes__java_lang_String__boolean__arrayOf_byte(/** ?string */ str, /** boolean */ throwOnInvalid) {
  let n = j_l_String.m_length__java_lang_String__int(str);
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$byte));
  ArrayHelper.m_setLength__java_lang_Object__int__void(bytes, n);
  for (let i = 0; i < n; i = i + 1 | 0) {
   $Arrays.$set(bytes, i, $Primitives.narrowIntToByte(j_l_String.m_charAt__java_lang_String__int__char(str, i) & 255));
  }
  return bytes;
 }
 /** @override @nodts @return {Array<number>} */
 m_decodeString__arrayOf_byte__int__int__boolean__arrayOf_char(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** boolean */ throwOnInvalid) {
  let chars = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$char));
  ArrayHelper.m_setLength__java_lang_Object__int__void(chars, len);
  for (let i = 0; i < len; i = i + 1 | 0) {
   $Arrays.$set(chars, i, $Primitives.narrowIntToChar(bytes[ofs + i | 0] & 255));
  }
  return chars;
 }
 /** @nodts */
 static $clinit() {
  LatinCharset.$clinit = () =>{};
  LatinCharset.$loadModules();
  EmulatedCharset.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LatinCharset;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
$Util.$setClassMetadata(LatinCharset, 'javaemul.internal.EmulatedCharset$LatinCharset');

exports = LatinCharset;

//# sourceMappingURL=EmulatedCharset$LatinCharset.js.map
