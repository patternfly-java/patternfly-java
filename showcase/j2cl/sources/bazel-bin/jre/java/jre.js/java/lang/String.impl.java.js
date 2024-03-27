goog.module('java.lang.String$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const CharSequence = goog.require('java.lang.CharSequence$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedEncodingException = goog.forwardDeclare('java.io.UnsupportedEncodingException$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let StringBuffer = goog.forwardDeclare('java.lang.StringBuffer$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Charset = goog.forwardDeclare('java.nio.charset.Charset$impl');
let UnsupportedCharsetException = goog.forwardDeclare('java.nio.charset.UnsupportedCharsetException$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let Match_$Overlay = goog.forwardDeclare('javaemul.internal.NativeRegExp.Match.$Overlay$impl');
let StringUtil = goog.forwardDeclare('javaemul.internal.StringUtil$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

/**
 * @abstract
 * @final
 * @implements {Comparable<?string>}
 * @implements {CharSequence}
 * @implements {Serializable}
 */
class j_l_String extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__java_lang_String_;
 }
 /** @nodts @return {?string} */
 static m_copyValueOf__arrayOf_char__java_lang_String(/** Array<number> */ v) {
  j_l_String.$clinit();
  return j_l_String.m_valueOf__arrayOf_char__java_lang_String(v);
 }
 /** @nodts @return {?string} */
 static m_copyValueOf__arrayOf_char__int__int__java_lang_String(/** Array<number> */ v, /** number */ offset, /** number */ count) {
  j_l_String.$clinit();
  return j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(v, offset, count);
 }
 /** @nodts @return {?string} */
 static m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence__java_lang_String(/** (CharSequence|string) */ delimiter, /** Array<(CharSequence|string)> */ elements) {
  j_l_String.$clinit();
  let joiner = StringJoiner.$create__java_lang_CharSequence(delimiter);
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(e);
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_join__java_lang_CharSequence__java_lang_Iterable__java_lang_String(/** (CharSequence|string) */ delimiter, /** Iterable<?> */ elements) {
  j_l_String.$clinit();
  let joiner = StringJoiner.$create__java_lang_CharSequence(delimiter);
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {(CharSequence|string)}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), CharSequence));
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(e);
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_valueOf__boolean__java_lang_String(/** boolean */ x) {
  j_l_String.$clinit();
  return '' + x;
 }
 /** @nodts @return {?string} */
 static m_valueOf__char__java_lang_String(/** number */ x) {
  j_l_String.$clinit();
  return String.fromCharCode(x);
 }
 /** @nodts @return {?string} */
 static m_valueOf__arrayOf_char__int__int__java_lang_String(/** Array<number> */ x, /** number */ offset, /** number */ count) {
  j_l_String.$clinit();
  let end = offset + count | 0;
  InternalPreconditions.m_checkCriticalStringBounds__int__int__int__void(offset, end, x.length);
  let batchSize = ArrayHelper.f_ARRAY_PROCESS_BATCH_SIZE__javaemul_internal_ArrayHelper;
  let s = '';
  for (let batchStart = offset; batchStart < end; ) {
   let batchEnd = Math.min(batchStart + batchSize | 0, end);
   s = j_l_String.m_valueOf__java_lang_Object__java_lang_String(s) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_fromCharCode__arrayOf_java_lang_Object__java_lang_String(ArrayHelper.m_unsafeClone__java_lang_Object__int__int__arrayOf_java_lang_Object(x, batchStart, batchEnd)));
   batchStart = batchEnd;
  }
  return s;
 }
 /** @nodts @return {?string} */
 static m_fromCharCode__arrayOf_java_lang_Object__java_lang_String(/** Array<*> */ array) {
  return String.fromCharCode.apply(null, array);
 }
 /** @nodts @return {?string} */
 static m_valueOf__arrayOf_char__java_lang_String(/** Array<number> */ x) {
  j_l_String.$clinit();
  return j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(x, 0, x.length);
 }
 /** @nodts @return {?string} */
 static m_valueOf__double__java_lang_String(/** number */ x) {
  j_l_String.$clinit();
  return '' + x;
 }
 /** @nodts @return {?string} */
 static m_valueOf__float__java_lang_String(/** number */ x) {
  j_l_String.$clinit();
  return '' + x;
 }
 /** @nodts @return {?string} */
 static m_valueOf__int__java_lang_String(/** number */ x) {
  j_l_String.$clinit();
  return '' + x;
 }
 /** @nodts @return {?string} */
 static m_valueOf__long__java_lang_String(/** !$Long */ x) {
  j_l_String.$clinit();
  return '' + x;
 }
 /** @nodts @return {string} */
 static m_valueOf__java_lang_Object__java_lang_String(/** * */ x) {
  j_l_String.$clinit();
  return $Equality.$same(x, null) ? 'null' : $Objects.m_toString__java_lang_Object__java_lang_String(x);
 }
 /** @nodts @return {Charset} */
 static m_getCharset__java_lang_String__java_nio_charset_Charset(/** ?string */ charsetName) {
  try {
   return Charset.m_forName__java_lang_String__java_nio_charset_Charset(charsetName);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (UnsupportedCharsetException.$isInstance(__$exc)) {
    let e = /**@type {UnsupportedCharsetException}*/ (__$exc);
    throw $Exceptions.toJs(UnsupportedEncodingException.$create__java_lang_String(charsetName));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @nodts @return {?string} */
 static m_fromCodePoint__int__java_lang_String(/** number */ codePoint) {
  j_l_String.$clinit();
  return String.fromCodePoint(codePoint);
 }
 /** @nodts @return {string} */
 static $create__() {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = '';
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte(/** Array<number> */ bytes) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__java_nio_charset_Charset__java_lang_String(bytes, EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte__int__int(/** Array<number> */ bytes, /** number */ ofs, /** number */ len) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__int__int__java_nio_charset_Charset__java_lang_String(bytes, ofs, len, EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte__int__int__java_lang_String(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** ?string */ charsetName) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__int__int__java_nio_charset_Charset__java_lang_String(bytes, ofs, len, j_l_String.m_getCharset__java_lang_String__java_nio_charset_Charset(charsetName));
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte__int__int__java_nio_charset_Charset(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** Charset */ charset) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__int__int__java_nio_charset_Charset__java_lang_String(bytes, ofs, len, charset);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte__java_lang_String(/** Array<number> */ bytes, /** ?string */ charsetName) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__java_nio_charset_Charset__java_lang_String(bytes, j_l_String.m_getCharset__java_lang_String__java_nio_charset_Charset(charsetName));
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_byte__java_nio_charset_Charset(/** Array<number> */ bytes, /** Charset */ charset) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_createImpl__arrayOf_byte__java_nio_charset_Charset__java_lang_String(bytes, charset);
  return $thisArg;
 }
 /** @nodts @return {?string} */
 static m_createImpl__arrayOf_byte__java_nio_charset_Charset__java_lang_String(/** Array<number> */ bytes, /** Charset */ charset) {
  return j_l_String.m_createImpl__arrayOf_byte__int__int__java_nio_charset_Charset__java_lang_String(bytes, 0, bytes.length, charset);
 }
 /** @nodts @return {?string} */
 static m_createImpl__arrayOf_byte__int__int__java_nio_charset_Charset__java_lang_String(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** Charset */ charset) {
  InternalPreconditions.m_checkPositionIndexes__int__int__int__void(ofs, ofs + len | 0, bytes.length);
  return j_l_String.m_valueOf__arrayOf_char__java_lang_String(/**@type {EmulatedCharset}*/ ($Casts.$to(charset, EmulatedCharset)).m_decodeString__arrayOf_byte__int__int__arrayOf_char(bytes, ofs, len));
 }
 /** @nodts @return {string} */
 static $create__arrayOf_char(/** Array<number> */ value) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_valueOf__arrayOf_char__java_lang_String(value);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_char__int__int(/** Array<number> */ value, /** number */ offset, /** number */ count) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(value, offset, count);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__arrayOf_int__int__int(/** Array<number> */ codePoints, /** number */ offset, /** number */ count) {
  let /** number */ $value;
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  let chars = /**@type {!Array<number>}*/ ($Arrays.$create([Math.imul(count, 2)], $$char));
  let charIdx = 0;
  while (($value = count, count = count - 1 | 0, $value) > 0) {
   let /** number */ $value_1;
   charIdx = charIdx + Character.m_toChars__int__arrayOf_char__int__int(codePoints[($value_1 = offset, offset = offset + 1 | 0, $value_1)], chars, charIdx) | 0;
  }
  $thisArg = j_l_String.m_valueOf__arrayOf_char__int__int__java_lang_String(chars, 0, charIdx);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__java_lang_String(/** ?string */ other) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = j_l_String.m_toString__java_lang_String__java_lang_String(other);
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__java_lang_StringBuffer(/** StringBuffer */ sb) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = sb.toString();
  return $thisArg;
 }
 /** @nodts @return {string} */
 static $create__java_lang_StringBuilder(/** StringBuilder */ sb) {
  j_l_String.$clinit();
  let /** ?string */ $thisArg;
  $thisArg = sb.toString();
  return $thisArg;
 }
 /** @nodts @return {String} */
 static m_asNativeString__java_lang_String__java_lang_String_NativeString(/** string */ $thisArg) {
  return /**@type {String}*/ (JsUtils.uncheckedCast($thisArg));
 }
 /** @nodts @return {number} */
 static m_charAt__java_lang_String__int__char(/** string */ $thisArg, /** number */ index) {
  j_l_String.$clinit();
  InternalPreconditions.m_checkStringElementIndex__int__int__void(index, j_l_String.m_length__java_lang_String__int($thisArg));
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).charCodeAt(index);
 }
 /** @nodts @return {number} */
 static m_codePointAt__java_lang_String__int__int(/** string */ $thisArg, /** number */ index) {
  j_l_String.$clinit();
  return Character.m_codePointAt__java_lang_CharSequence__int__int__int($thisArg, index, j_l_String.m_length__java_lang_String__int($thisArg));
 }
 /** @nodts @return {number} */
 static m_codePointBefore__java_lang_String__int__int(/** string */ $thisArg, /** number */ index) {
  j_l_String.$clinit();
  return Character.m_codePointBefore__java_lang_CharSequence__int__int__int($thisArg, index, 0);
 }
 /** @nodts @return {number} */
 static m_codePointCount__java_lang_String__int__int__int(/** string */ $thisArg, /** number */ beginIndex, /** number */ endIndex) {
  j_l_String.$clinit();
  return Character.m_codePointCount__java_lang_CharSequence__int__int__int($thisArg, beginIndex, endIndex);
 }
 /** @nodts @return {number} */
 static m_compareTo__java_lang_String__java_lang_String__int(/** string */ $thisArg, /** ?string */ other) {
  j_l_String.$clinit();
  let a = Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ (JsUtils.uncheckedCast($thisArg)));
  let b = Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ (JsUtils.uncheckedCast(other)));
  return a == b ? 0 : a < b ? - 1 | 0 : 1;
 }
 /** @nodts @return {number} */
 static m_compareToIgnoreCase__java_lang_String__java_lang_String__int(/** string */ $thisArg, /** ?string */ other) {
  j_l_String.$clinit();
  return j_l_String.m_compareTo__java_lang_String__java_lang_String__int(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(other));
 }
 /** @nodts @return {?string} */
 static m_concat__java_lang_String__java_lang_String__java_lang_String(/** string */ $thisArg, /** ?string */ str) {
  j_l_String.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(str), j_l_String)));
 }
 /** @nodts @return {boolean} */
 static m_contains__java_lang_String__java_lang_CharSequence__boolean(/** string */ $thisArg, /** (CharSequence|string) */ s) {
  j_l_String.$clinit();
  return j_l_String.m_indexOf__java_lang_String__java_lang_String__int($thisArg, $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(s)) != (- 1 | 0);
 }
 /** @nodts @return {boolean} */
 static m_contentEquals__java_lang_String__java_lang_CharSequence__boolean(/** string */ $thisArg, /** (CharSequence|string) */ cs) {
  j_l_String.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean($thisArg, $CharSequences.m_toString__java_lang_CharSequence__java_lang_String(cs));
 }
 /** @nodts @return {boolean} */
 static m_contentEquals__java_lang_String__java_lang_StringBuffer__boolean(/** string */ $thisArg, /** StringBuffer */ sb) {
  j_l_String.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean($thisArg, sb.toString());
 }
 /** @nodts @return {boolean} */
 static m_endsWith__java_lang_String__java_lang_String__boolean(/** string */ $thisArg, /** ?string */ suffix) {
  j_l_String.$clinit();
  let suffixlength = j_l_String.m_length__java_lang_String__int(suffix);
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).substr(j_l_String.m_length__java_lang_String__int($thisArg) - suffixlength | 0, suffixlength), suffix);
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_String__java_lang_Object__boolean(/** string */ $thisArg, /** * */ other) {
  j_l_String.$clinit();
  return $Equality.$same(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg), other);
 }
 /** @nodts @return {boolean} */
 static m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(/** string */ $thisArg, /** ?string */ other) {
  j_l_String.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean($thisArg, other)) {
   return true;
  }
  if ($Equality.$same(other, null)) {
   return false;
  }
  return j_l_String.m_length__java_lang_String__int($thisArg) == j_l_String.m_length__java_lang_String__int(other) && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(other));
 }
 /** @nodts @return {Array<number>} */
 static m_getBytes__java_lang_String__arrayOf_byte(/** string */ $thisArg) {
  j_l_String.$clinit();
  return j_l_String.m_getBytes__java_lang_String__java_nio_charset_Charset__arrayOf_byte($thisArg, EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset);
 }
 /** @nodts @return {Array<number>} */
 static m_getBytes__java_lang_String__java_lang_String__arrayOf_byte(/** string */ $thisArg, /** ?string */ charsetName) {
  j_l_String.$clinit();
  return j_l_String.m_getBytes__java_lang_String__java_nio_charset_Charset__arrayOf_byte($thisArg, j_l_String.m_getCharset__java_lang_String__java_nio_charset_Charset(charsetName));
 }
 /** @nodts @return {Array<number>} */
 static m_getBytes__java_lang_String__java_nio_charset_Charset__arrayOf_byte(/** string */ $thisArg, /** Charset */ charset) {
  j_l_String.$clinit();
  return /**@type {EmulatedCharset}*/ ($Casts.$to(charset, EmulatedCharset)).m_getBytes__java_lang_String__arrayOf_byte($thisArg);
 }
 /** @nodts */
 static m_getChars__java_lang_String__int__int__arrayOf_char__int__void(/** string */ $thisArg, /** number */ srcBegin, /** number */ srcEnd, /** Array<number> */ dst, /** number */ dstBegin) {
  j_l_String.$clinit();
  InternalPreconditions.m_checkCriticalStringBounds__int__int__int__void(srcBegin, srcEnd, j_l_String.m_length__java_lang_String__int($thisArg));
  InternalPreconditions.m_checkCriticalStringBounds__int__int__int__void(dstBegin, dstBegin + (srcEnd - srcBegin) | 0, dst.length);
  j_l_String.m_getChars0__java_lang_String__int__int__arrayOf_char__int__void($thisArg, srcBegin, srcEnd, dst, dstBegin);
 }
 /** @nodts */
 static m_getChars0__java_lang_String__int__int__arrayOf_char__int__void(/** string */ $thisArg, /** number */ srcBegin, /** number */ srcEnd, /** Array<number> */ dst, /** number */ dstBegin) {
  while (srcBegin < srcEnd) {
   let /** number */ $value, /** number */ $value_1;
   $Arrays.$set(dst, ($value = dstBegin, dstBegin = dstBegin + 1 | 0, $value), j_l_String.m_charAt__java_lang_String__int__char($thisArg, ($value_1 = srcBegin, srcBegin = srcBegin + 1 | 0, $value_1)));
  }
 }
 /** @nodts @return {number} */
 static m_hashCode__java_lang_String__int(/** string */ $thisArg) {
  j_l_String.$clinit();
  let h = 0;
  for (let i = 0; i < j_l_String.m_length__java_lang_String__int($thisArg); i = i + 1 | 0) {
   h = (h << 5) - h + j_l_String.m_charAt__java_lang_String__int__char($thisArg, i) | 0;
  }
  return h;
 }
 /** @nodts @return {number} */
 static m_indexOf__java_lang_String__int__int(/** string */ $thisArg, /** number */ codePoint) {
  j_l_String.$clinit();
  return j_l_String.m_indexOf__java_lang_String__java_lang_String__int($thisArg, j_l_String.m_fromCodePoint__int__java_lang_String(codePoint));
 }
 /** @nodts @return {number} */
 static m_indexOf__java_lang_String__int__int__int(/** string */ $thisArg, /** number */ codePoint, /** number */ startIndex) {
  j_l_String.$clinit();
  return j_l_String.m_indexOf__java_lang_String__java_lang_String__int__int($thisArg, j_l_String.m_fromCodePoint__int__java_lang_String(codePoint), startIndex);
 }
 /** @nodts @return {number} */
 static m_indexOf__java_lang_String__java_lang_String__int(/** string */ $thisArg, /** ?string */ str) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).indexOf(str);
 }
 /** @nodts @return {number} */
 static m_indexOf__java_lang_String__java_lang_String__int__int(/** string */ $thisArg, /** ?string */ str, /** number */ startIndex) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).indexOf(str, startIndex);
 }
 /** @nodts @return {?string} */
 static m_intern__java_lang_String__java_lang_String(/** string */ $thisArg) {
  j_l_String.$clinit();
  return /**@type {?string}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg), j_l_String));
 }
 /** @nodts @return {boolean} */
 static m_isEmpty__java_lang_String__boolean(/** string */ $thisArg) {
  j_l_String.$clinit();
  return j_l_String.m_length__java_lang_String__int($thisArg) == 0;
 }
 /** @nodts @return {number} */
 static m_lastIndexOf__java_lang_String__int__int(/** string */ $thisArg, /** number */ codePoint) {
  j_l_String.$clinit();
  return j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int($thisArg, j_l_String.m_fromCodePoint__int__java_lang_String(codePoint));
 }
 /** @nodts @return {number} */
 static m_lastIndexOf__java_lang_String__int__int__int(/** string */ $thisArg, /** number */ codePoint, /** number */ startIndex) {
  j_l_String.$clinit();
  return j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int__int($thisArg, j_l_String.m_fromCodePoint__int__java_lang_String(codePoint), startIndex);
 }
 /** @nodts @return {number} */
 static m_lastIndexOf__java_lang_String__java_lang_String__int(/** string */ $thisArg, /** ?string */ str) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).lastIndexOf(str);
 }
 /** @nodts @return {number} */
 static m_lastIndexOf__java_lang_String__java_lang_String__int__int(/** string */ $thisArg, /** ?string */ str, /** number */ start) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).lastIndexOf(str, start);
 }
 /** @nodts @return {number} */
 static m_length__java_lang_String__int(/** string */ $thisArg) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).length;
 }
 /** @nodts @return {boolean} */
 static m_matches__java_lang_String__java_lang_String__boolean(/** string */ $thisArg, /** ?string */ regex) {
  j_l_String.$clinit();
  return new RegExp('^(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(regex) + ')$').test($thisArg);
 }
 /** @nodts @return {number} */
 static m_offsetByCodePoints__java_lang_String__int__int__int(/** string */ $thisArg, /** number */ index, /** number */ codePointOffset) {
  j_l_String.$clinit();
  return Character.m_offsetByCodePoints__java_lang_CharSequence__int__int__int($thisArg, index, codePointOffset);
 }
 /** @nodts @return {boolean} */
 static m_regionMatches__java_lang_String__boolean__int__java_lang_String__int__int__boolean(/** string */ $thisArg, /** boolean */ ignoreCase, /** number */ toffset, /** ?string */ other, /** number */ ooffset, /** number */ len) {
  j_l_String.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(other);
  if (toffset < 0 || ooffset < 0) {
   return false;
  }
  if ((toffset + len | 0) > j_l_String.m_length__java_lang_String__int($thisArg) || (ooffset + len | 0) > j_l_String.m_length__java_lang_String__int(other)) {
   return false;
  }
  if (len <= 0) {
   return true;
  }
  let left = j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).substr(toffset, len);
  let right = j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString(other).substr(ooffset, len);
  return ignoreCase ? j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(left, right) : j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(left, right);
 }
 /** @nodts @return {boolean} */
 static m_regionMatches__java_lang_String__int__java_lang_String__int__int__boolean(/** string */ $thisArg, /** number */ toffset, /** ?string */ other, /** number */ ooffset, /** number */ len) {
  j_l_String.$clinit();
  return j_l_String.m_regionMatches__java_lang_String__boolean__int__java_lang_String__int__int__boolean($thisArg, false, toffset, other, ooffset, len);
 }
 /** @nodts @return {?string} */
 static m_replace__java_lang_String__char__char__java_lang_String(/** string */ $thisArg, /** number */ from, /** number */ to) {
  j_l_String.$clinit();
  return StringUtil.m_replace__java_lang_String__char__char__boolean__java_lang_String($thisArg, from, to, false);
 }
 /** @nodts @return {?string} */
 static m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__java_lang_String(/** string */ $thisArg, /** (CharSequence|string) */ from, /** (CharSequence|string) */ to) {
  j_l_String.$clinit();
  return StringUtil.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__boolean__java_lang_String($thisArg, from, to, false);
 }
 /** @nodts @return {?string} */
 static m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** string */ $thisArg, /** ?string */ regex, /** ?string */ replace) {
  j_l_String.$clinit();
  return StringUtil.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__boolean__java_lang_String($thisArg, regex, replace, false);
 }
 /** @nodts @return {?string} */
 static m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** string */ $thisArg, /** ?string */ regex, /** ?string */ replace) {
  j_l_String.$clinit();
  return StringUtil.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__boolean__java_lang_String($thisArg, regex, replace, false);
 }
 /** @nodts @return {?string} */
 static m_nativeReplace__java_lang_String__javaemul_internal_NativeRegExp__char__java_lang_String(/** string */ $thisArg, /** RegExp */ regExp, /** number */ replacement) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).replace(regExp, String.fromCharCode(replacement));
 }
 /** @nodts @return {?string} */
 static m_nativeReplace__java_lang_String__javaemul_internal_NativeRegExp__java_lang_String__java_lang_String(/** string */ $thisArg, /** RegExp */ regExp, /** ?string */ replacement) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).replace(regExp, replacement);
 }
 /** @nodts @return {Array<?string>} */
 static m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(/** string */ $thisArg, /** ?string */ regex) {
  j_l_String.$clinit();
  return j_l_String.m_split__java_lang_String__java_lang_String__int__arrayOf_java_lang_String($thisArg, regex, 0);
 }
 /** @nodts @return {Array<?string>} */
 static m_split__java_lang_String__java_lang_String__int__arrayOf_java_lang_String(/** string */ $thisArg, /** ?string */ regex, /** number */ maxMatch) {
  j_l_String.$clinit();
  let compiled = new RegExp(regex, 'g');
  let out = /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String));
  let count = 0;
  let trail = $thisArg;
  let lastTrail = null;
  while (true) {
   let matchObj = compiled.exec(trail);
   if ($Equality.$same(matchObj, null) || $Equality.$same(trail, '') || count == (maxMatch - 1 | 0) && maxMatch > 0) {
    $Arrays.$set(out, count, trail);
    break;
   } else {
    let matchIndex = matchObj.index;
    $Arrays.$set(out, count, j_l_String.m_substring__java_lang_String__int__int__java_lang_String(trail, 0, matchIndex));
    trail = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(trail, matchIndex + j_l_String.m_length__java_lang_String__int(Match_$Overlay.m_getAt__$devirt__javaemul_internal_NativeRegExp_Match__int__java_lang_String(matchObj, 0)) | 0, j_l_String.m_length__java_lang_String__int(trail));
    compiled.lastIndex = 0;
    if ($Equality.$same(lastTrail, trail)) {
     $Arrays.$set(out, count, j_l_String.m_substring__java_lang_String__int__int__java_lang_String(trail, 0, 1));
     trail = j_l_String.m_substring__java_lang_String__int__java_lang_String(trail, 1);
    }
    lastTrail = trail;
    count = count + 1 | 0;
   }
  }
  if (maxMatch == 0 && j_l_String.m_length__java_lang_String__int($thisArg) > 0) {
   let lastNonEmpty = out.length;
   while (lastNonEmpty > 0 && $Equality.$same(out[lastNonEmpty - 1 | 0], '')) {
    lastNonEmpty = lastNonEmpty - 1 | 0;
   }
   if (lastNonEmpty < out.length) {
    ArrayHelper.m_setLength__java_lang_Object__int__void(out, lastNonEmpty);
   }
  }
  return out;
 }
 /** @nodts @return {boolean} */
 static m_startsWith__java_lang_String__java_lang_String__boolean(/** string */ $thisArg, /** ?string */ prefix) {
  j_l_String.$clinit();
  return j_l_String.m_startsWith__java_lang_String__java_lang_String__int__boolean($thisArg, prefix, 0);
 }
 /** @nodts @return {boolean} */
 static m_startsWith__java_lang_String__java_lang_String__int__boolean(/** string */ $thisArg, /** ?string */ prefix, /** number */ toffset) {
  j_l_String.$clinit();
  return toffset >= 0 && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).substr(toffset, j_l_String.m_length__java_lang_String__int(prefix)), prefix);
 }
 /** @nodts @return {(CharSequence|string)} */
 static m_subSequence__java_lang_String__int__int__java_lang_CharSequence(/** string */ $thisArg, /** number */ beginIndex, /** number */ endIndex) {
  j_l_String.$clinit();
  return j_l_String.m_substring__java_lang_String__int__int__java_lang_String($thisArg, beginIndex, endIndex);
 }
 /** @nodts @return {?string} */
 static m_substring__java_lang_String__int__java_lang_String(/** string */ $thisArg, /** number */ beginIndex) {
  j_l_String.$clinit();
  InternalPreconditions.m_checkStringElementIndex__int__int__void(beginIndex, j_l_String.m_length__java_lang_String__int($thisArg) + 1 | 0);
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).substr(beginIndex);
 }
 /** @nodts @return {?string} */
 static m_substring__java_lang_String__int__int__java_lang_String(/** string */ $thisArg, /** number */ beginIndex, /** number */ endIndex) {
  j_l_String.$clinit();
  InternalPreconditions.m_checkStringBounds__int__int__int__void(beginIndex, endIndex, j_l_String.m_length__java_lang_String__int($thisArg));
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).substr(beginIndex, endIndex - beginIndex | 0);
 }
 /** @nodts @return {Array<number>} */
 static m_toCharArray__java_lang_String__arrayOf_char(/** string */ $thisArg) {
  j_l_String.$clinit();
  let n = j_l_String.m_length__java_lang_String__int($thisArg);
  let charArr = /**@type {!Array<number>}*/ ($Arrays.$create([n], $$char));
  j_l_String.m_getChars0__java_lang_String__int__int__arrayOf_char__int__void($thisArg, 0, n, charArr, 0);
  return charArr;
 }
 /** @nodts @return {?string} */
 static m_toLowerCase__java_lang_String__java_lang_String(/** string */ $thisArg) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toLowerCase();
 }
 /** @nodts @return {?string} */
 static m_toLowerCase__java_lang_String__java_util_Locale__java_lang_String(/** string */ $thisArg, /** Locale */ locale) {
  j_l_String.$clinit();
  return $Equality.$same(locale, Locale.m_getDefault__java_util_Locale()) ? j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toLocaleLowerCase() : j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toLowerCase();
 }
 /** @nodts @return {?string} */
 static m_toUpperCase__java_lang_String__java_lang_String(/** string */ $thisArg) {
  j_l_String.$clinit();
  return j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toUpperCase();
 }
 /** @nodts @return {?string} */
 static m_toUpperCase__java_lang_String__java_util_Locale__java_lang_String(/** string */ $thisArg, /** Locale */ locale) {
  j_l_String.$clinit();
  return $Equality.$same(locale, Locale.m_getDefault__java_util_Locale()) ? j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toLocaleUpperCase() : j_l_String.m_asNativeString__java_lang_String__java_lang_String_NativeString($thisArg).toUpperCase();
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_String__java_lang_String(/** string */ $thisArg) {
  j_l_String.$clinit();
  return /**@type {?string}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg), j_l_String));
 }
 /** @nodts @return {?string} */
 static m_trim__java_lang_String__java_lang_String(/** string */ $thisArg) {
  j_l_String.$clinit();
  let length = j_l_String.m_length__java_lang_String__int($thisArg);
  let start = 0;
  while (start < length && j_l_String.m_charAt__java_lang_String__int__char($thisArg, start) <= 32 /* ' ' */) {
   start = start + 1 | 0;
  }
  let end = length;
  while (end > start && j_l_String.m_charAt__java_lang_String__int__char($thisArg, end - 1 | 0) <= 32 /* ' ' */) {
   end = end - 1 | 0;
  }
  return start > 0 || end < length ? j_l_String.m_substring__java_lang_String__int__int__java_lang_String($thisArg, start, end) : $thisArg;
 }
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  j_l_String.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('string', typeof(instance));
 }
 /** @final @nodts @return {number} */
 static m_compareTo__java_lang_Object__int(/** string */ $thisArg, /** ?string */ arg0) {
  j_l_String.$clinit();
  return j_l_String.m_compareTo__java_lang_String__java_lang_String__int($thisArg, /**@type {?string}*/ ($Casts.$to(arg0, j_l_String)));
 }
 /** @nodts @return {IntStream} */
 static m_chars__java_lang_String__java_util_stream_IntStream(/** string */ $thisArg) {
  j_l_String.$clinit();
  return CharSequence.m_chars__$default__java_lang_CharSequence__java_util_stream_IntStream($thisArg);
 }
 /** @nodts @return {Comparator<?string>} */
 static get f_CASE_INSENSITIVE_ORDER__java_lang_String() {
  return (j_l_String.$clinit(), j_l_String.$static_CASE_INSENSITIVE_ORDER__java_lang_String);
 }
 /** @nodts */
 static $clinit() {
  j_l_String.$clinit = () =>{};
  j_l_String.$loadModules();
  j_l_Object.$clinit();
  CharSequence.$clinit();
  j_l_String.$static_CASE_INSENSITIVE_ORDER__java_lang_String = Comparator.$adapt((a, b) =>{
   let a_1 = /**@type {?string}*/ ($Casts.$to(a, j_l_String));
   let b_1 = /**@type {?string}*/ ($Casts.$to(b, j_l_String));
   return j_l_String.m_compareToIgnoreCase__java_lang_String__java_lang_String__int(a_1, b_1);
  });
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedEncodingException = goog.module.get('java.io.UnsupportedEncodingException$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Charset = goog.module.get('java.nio.charset.Charset$impl');
  UnsupportedCharsetException = goog.module.get('java.nio.charset.UnsupportedCharsetException$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  Match_$Overlay = goog.module.get('javaemul.internal.NativeRegExp.Match.$Overlay$impl');
  StringUtil = goog.module.get('javaemul.internal.StringUtil$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
/**@private {Comparator<?string>} @nodts*/
j_l_String.$static_CASE_INSENSITIVE_ORDER__java_lang_String;
Comparable.$markImplementor(j_l_String);
CharSequence.$markImplementor(j_l_String);
Serializable.$markImplementor(j_l_String);
$Util.$setClassMetadata(j_l_String, 'java.lang.String');

exports = j_l_String;

//# sourceMappingURL=String.js.map
