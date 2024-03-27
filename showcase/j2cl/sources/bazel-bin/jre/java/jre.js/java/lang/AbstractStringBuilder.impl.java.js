goog.module('java.lang.AbstractStringBuilder$impl');

const Appendable = goog.require('java.lang.Appendable$impl');
const CharSequence = goog.require('java.lang.CharSequence$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

/**
 * @abstract
 * @implements {CharSequence}
 * @implements {Appendable}
 */
class AbstractStringBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_string__java_lang_AbstractStringBuilder;
 }
 /** @nodts */
 $ctor__java_lang_AbstractStringBuilder__java_lang_String__void(/** ?string */ string_1) {
  this.$ctor__java_lang_Object__void();
  this.f_string__java_lang_AbstractStringBuilder = string_1;
 }
 /** @override @nodts @return {number} */
 m_length__int() {
  return j_l_String.m_length__java_lang_String__int(this.f_string__java_lang_AbstractStringBuilder);
 }
 /** @nodts */
 m_setLength__int__void(/** number */ newLength) {
  let oldLength = this.m_length__int();
  if (newLength < oldLength) {
   this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, 0, newLength);
  } else if (newLength > oldLength) {
   this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__arrayOf_char__java_lang_String(/**@type {!Array<number>}*/ ($Arrays.$create([newLength - oldLength | 0], $$char))));
  }
 }
 /** @nodts @return {number} */
 m_capacity__int() {
  return Integer.f_MAX_VALUE__java_lang_Integer;
 }
 /** @nodts */
 m_ensureCapacity__int__void(/** number */ ignoredCapacity) {}
 /** @nodts */
 m_trimToSize__void() {}
 /** @override @nodts @return {number} */
 m_charAt__int__char(/** number */ index) {
  return j_l_String.m_charAt__java_lang_String__int__char(this.f_string__java_lang_AbstractStringBuilder, index);
 }
 /** @nodts */
 m_getChars__int__int__arrayOf_char__int__void(/** number */ srcStart, /** number */ srcEnd, /** Array<number> */ dst, /** number */ dstStart) {
  j_l_String.m_getChars__java_lang_String__int__int__arrayOf_char__int__void(this.f_string__java_lang_AbstractStringBuilder, srcStart, srcEnd, dst, dstStart);
 }
 /** @nodts */
 m_setCharAt__int__char__void(/** number */ index, /** number */ x) {
  this.m_replace0__int__int__java_lang_String__void_$pp_java_lang(index, index + 1 | 0, j_l_String.m_valueOf__char__java_lang_String(x));
 }
 /** @override @nodts @return {(CharSequence|string)} */
 m_subSequence__int__int__java_lang_CharSequence(/** number */ start, /** number */ end) {
  return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, start, end);
 }
 /** @nodts @return {?string} */
 m_substring__int__java_lang_String(/** number */ begin) {
  return j_l_String.m_substring__java_lang_String__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, begin);
 }
 /** @nodts @return {?string} */
 m_substring__int__int__java_lang_String(/** number */ begin, /** number */ end) {
  return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, begin, end);
 }
 /** @nodts @return {number} */
 m_indexOf__java_lang_String__int(/** ?string */ x) {
  return j_l_String.m_indexOf__java_lang_String__java_lang_String__int(this.f_string__java_lang_AbstractStringBuilder, x);
 }
 /** @nodts @return {number} */
 m_indexOf__java_lang_String__int__int(/** ?string */ x, /** number */ start) {
  return j_l_String.m_indexOf__java_lang_String__java_lang_String__int__int(this.f_string__java_lang_AbstractStringBuilder, x, start);
 }
 /** @nodts @return {number} */
 m_lastIndexOf__java_lang_String__int(/** ?string */ s) {
  return j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int(this.f_string__java_lang_AbstractStringBuilder, s);
 }
 /** @nodts @return {number} */
 m_lastIndexOf__java_lang_String__int__int(/** ?string */ s, /** number */ start) {
  return j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int__int(this.f_string__java_lang_AbstractStringBuilder, s, start);
 }
 /** @override @return {?string} */
 toString() {
  return this.f_string__java_lang_AbstractStringBuilder;
 }
 /** @nodts */
 m_appendCodePoint0__int__void_$pp_java_lang(/** number */ x) {
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_string__java_lang_AbstractStringBuilder) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_fromCodePoint__int__java_lang_String(x));
 }
 /** @nodts */
 m_replace0__int__int__java_lang_String__void_$pp_java_lang(/** number */ start, /** number */ end, /** ?string */ toInsert) {
  let length = j_l_String.m_length__java_lang_String__int(this.f_string__java_lang_AbstractStringBuilder);
  if (end > length) {
   end = length;
  } else {
   InternalPreconditions.m_checkStringElementIndex__int__int__void(start, end + 1 | 0);
  }
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, 0, start)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toInsert) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String(this.f_string__java_lang_AbstractStringBuilder, end));
 }
 /** @nodts */
 m_reverse0__void_$pp_java_lang() {
  let length = j_l_String.m_length__java_lang_String__int(this.f_string__java_lang_AbstractStringBuilder);
  if (length <= 1) {
   return;
  }
  let buffer = /**@type {!Array<number>}*/ ($Arrays.$create([length], $$char));
  $Arrays.$set(buffer, 0, j_l_String.m_charAt__java_lang_String__int__char(this.f_string__java_lang_AbstractStringBuilder, length - 1 | 0));
  for (let i = 1; i < length; i = i + 1 | 0) {
   $Arrays.$set(buffer, i, j_l_String.m_charAt__java_lang_String__int__char(this.f_string__java_lang_AbstractStringBuilder, length - 1 - i | 0));
   if (Character.m_isSurrogatePair__char__char__boolean(buffer[i], buffer[i - 1 | 0])) {
    AbstractStringBuilder.m_swap__arrayOf_char__int__int__void(buffer, i - 1 | 0, i);
   }
  }
  this.f_string__java_lang_AbstractStringBuilder = j_l_String.$create__arrayOf_char(buffer);
 }
 /** @nodts */
 static m_swap__arrayOf_char__int__int__void(/** Array<number> */ buffer, /** number */ f, /** number */ s) {
  let tmp = buffer[f];
  $Arrays.$set(buffer, f, buffer[s]);
  $Arrays.$set(buffer, s, tmp);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntStream} */
 m_chars__java_util_stream_IntStream() {
  return CharSequence.m_chars__$default__java_lang_CharSequence__java_util_stream_IntStream(this);
 }
 /** @nodts */
 static $clinit() {
  AbstractStringBuilder.$clinit = () =>{};
  AbstractStringBuilder.$loadModules();
  j_l_Object.$clinit();
  CharSequence.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractStringBuilder;
 }
 /** @abstract @override @nodts @return {Appendable} */
 m_append__char__java_lang_Appendable(/** number */ arg0) {}
 /** @abstract @override @nodts @return {Appendable} */
 m_append__java_lang_CharSequence__java_lang_Appendable(/** (CharSequence|string) */ arg0) {}
 /** @abstract @override @nodts @return {Appendable} */
 m_append__java_lang_CharSequence__int__int__java_lang_Appendable(/** (CharSequence|string) */ arg0, /** number */ arg1, /** number */ arg2) {}
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
CharSequence.$markImplementor(AbstractStringBuilder);
Appendable.$markImplementor(AbstractStringBuilder);
$Util.$setClassMetadata(AbstractStringBuilder, 'java.lang.AbstractStringBuilder');

exports = AbstractStringBuilder;

//# sourceMappingURL=AbstractStringBuilder.js.map
