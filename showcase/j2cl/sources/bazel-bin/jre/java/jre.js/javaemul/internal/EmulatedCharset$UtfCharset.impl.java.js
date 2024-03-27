goog.module('javaemul.internal.EmulatedCharset.UtfCharset$impl');

const EmulatedCharset = goog.require('javaemul.internal.EmulatedCharset$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class UtfCharset extends EmulatedCharset {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!UtfCharset} */
 static $create__java_lang_String(/** ?string */ name) {
  UtfCharset.$clinit();
  let $instance = new UtfCharset();
  $instance.$ctor__javaemul_internal_EmulatedCharset_UtfCharset__java_lang_String__void(name);
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_EmulatedCharset_UtfCharset__java_lang_String__void(/** ?string */ name) {
  this.$ctor__javaemul_internal_EmulatedCharset__java_lang_String__void(name);
 }
 /** @override @nodts @return {Array<number>} */
 m_decodeString__arrayOf_byte__int__int__boolean__arrayOf_char(/** Array<number> */ bytes, /** number */ ofs, /** number */ len, /** boolean */ throwOnInvalid) {
  let chars = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$char));
  ArrayHelper.m_setLength__java_lang_Object__int__void(chars, Math.imul(len, 2));
  let outIdx = 0;
  let count = 0;
  for (let i = 0; i < len; ) {
   let /** number */ $value;
   let invalid = false;
   let runStartIdx = i;
   let ch = bytes[ofs + ($value = i, i = i + 1 | 0, $value) | 0];
   if ((ch & 128) == 0) {
    count = 1;
    ch &= 127;
   } else if ((ch & 224) == 192) {
    count = 2;
    ch &= 31;
   } else if ((ch & 240) == 224) {
    count = 3;
    ch &= 15;
   } else if ((ch & 248) == 240) {
    count = 4;
    ch &= 7;
   } else {
    invalid = true;
    count = 1;
   }
   let end = i + count - 1 | 0;
   if (end > len) {
    if (throwOnInvalid) {
     throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
    } else {
     invalid = true;
    }
   }
   while (!invalid && i < end) {
    let /** number */ $value_1;
    let b = bytes[ofs + ($value_1 = i, i = i + 1 | 0, $value_1) | 0];
    if ((b & 192) != 128) {
     invalid = true;
     i = i - 1 | 0;
    } else {
     ch = ch << 6 | b & 63;
    }
   }
   if (ch <= Character.f_MAX_VALUE__java_lang_Character && Character.m_isSurrogate__char__boolean($Primitives.narrowIntToChar(ch))) {
    invalid = true;
   }
   if (invalid || UtfCharset.m_isOverlong__int__int__boolean(ch, count)) {
    if (throwOnInvalid) {
     throw $Exceptions.toJs(IllegalArgumentException.$create__());
    } else {
     let /** number */ $value_2;
     let j = runStartIdx;
     while (($value_2 = j, j = j + 1 | 0, $value_2) < i) {
      let /** number */ $value_3;
      $Arrays.$set(chars, ($value_3 = outIdx, outIdx = outIdx + 1 | 0, $value_3), UtfCharset.f_REPLACEMENT_CHAR__javaemul_internal_EmulatedCharset_UtfCharset_);
     }
    }
   } else {
    outIdx = outIdx + Character.m_toChars__int__arrayOf_char__int__int(ch, chars, outIdx) | 0;
   }
  }
  ArrayHelper.m_setLength__java_lang_Object__int__void(chars, outIdx);
  return chars;
 }
 /** @nodts @return {boolean} */
 static m_isOverlong__int__int__boolean(/** number */ codepoint, /** number */ count) {
  return codepoint <= 127 && count > 1 || codepoint <= 2047 && count > 2 || codepoint <= 65535 && count > 3;
 }
 /** @override @nodts @return {Array<number>} */
 m_getBytes__arrayOf_char__int__int__boolean__arrayOf_byte(/** Array<number> */ buffer, /** number */ offset, /** number */ count, /** boolean */ throwOnInvalid) {
  let n = offset + count | 0;
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$byte));
  for (let i = offset; i < n; ) {
   let ch = UtfCharset.m_getCodePointAt__arrayOf_char__int__boolean__int(buffer, i, throwOnInvalid);
   i = i + Character.m_charCount__int__int(ch) | 0;
   this.m_encodeUtf8__arrayOf_byte__int__boolean__void_$p_javaemul_internal_EmulatedCharset_UtfCharset(bytes, ch, throwOnInvalid);
  }
  return bytes;
 }
 /** @nodts @return {number} */
 static m_getCodePointAt__arrayOf_char__int__boolean__int(/** Array<number> */ buffer, /** number */ pos, /** boolean */ throwOnInvalid) {
  let ch = buffer[pos];
  if (!Character.m_isSurrogate__char__boolean(ch)) {
   return ch;
  }
  let high = ch;
  let low = (pos + 1 | 0) < buffer.length ? buffer[pos + 1 | 0] : 255 /* '\u00FF' */;
  if (!Character.m_isSurrogatePair__char__char__boolean(high, low)) {
   if (throwOnInvalid) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid surrogate pair'));
   } else {
    return 63;
   }
  }
  return Character.m_toCodePoint__char__char__int(high, low);
 }
 /** @override @nodts @return {Array<number>} */
 m_getBytes__java_lang_String__boolean__arrayOf_byte(/** ?string */ str, /** boolean */ throwOnInvalid) {
  let n = j_l_String.m_length__java_lang_String__int(str);
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$byte));
  for (let i = 0; i < n; ) {
   let ch = UtfCharset.m_getCodePointAt__java_lang_String__int__int__boolean__int(str, i, n, throwOnInvalid);
   i = i + Character.m_charCount__int__int(ch) | 0;
   this.m_encodeUtf8__arrayOf_byte__int__boolean__void_$p_javaemul_internal_EmulatedCharset_UtfCharset(bytes, ch, throwOnInvalid);
  }
  return bytes;
 }
 /** @nodts @return {number} */
 static m_getCodePointAt__java_lang_String__int__int__boolean__int(/** ?string */ str, /** number */ pos, /** number */ length, /** boolean */ throwOnInvalid) {
  let ch = j_l_String.m_charAt__java_lang_String__int__char(str, pos);
  if (!Character.m_isSurrogate__char__boolean(ch)) {
   return ch;
  }
  let high = ch;
  let low = (pos + 1 | 0) < length ? j_l_String.m_charAt__java_lang_String__int__char(str, pos + 1 | 0) : 255 /* '\u00FF' */;
  if (!Character.m_isSurrogatePair__char__char__boolean(high, low)) {
   if (throwOnInvalid) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid surrogate pair'));
   } else {
    return 63;
   }
  }
  return Character.m_toCodePoint__char__char__int(high, low);
 }
 /** @nodts */
 m_encodeUtf8__arrayOf_byte__int__boolean__void_$p_javaemul_internal_EmulatedCharset_UtfCharset(/** Array<number> */ bytes, /** number */ codePoint, /** boolean */ throwOnInvalid) {
  if (codePoint >= 1 << 26) {
   if (throwOnInvalid) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Character out of range: ' + codePoint));
   } else {
    codePoint = UtfCharset.f_REPLACEMENT_CHAR__javaemul_internal_EmulatedCharset_UtfCharset_;
   }
  }
  if (codePoint < 1 << 7) {
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint & 127));
  } else if (codePoint < 1 << 11) {
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 6 & 31 | 192));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint & 63 | 128));
  } else if (codePoint < 1 << 16) {
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 12 & 15 | 224));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 6 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint & 63 | 128));
  } else if (codePoint < 1 << 21) {
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 18 & 7 | 240));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 12 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 6 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint & 63 | 128));
  } else {
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 24 & 3 | 248));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 18 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 12 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint >> 6 & 63 | 128));
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(bytes, $Primitives.narrowIntToByte(codePoint & 63 | 128));
  }
 }
 /** @nodts */
 static $clinit() {
  UtfCharset.$clinit = () =>{};
  UtfCharset.$loadModules();
  EmulatedCharset.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UtfCharset;
 }
 
 /** @nodts */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
/**@const {number} @nodts*/
UtfCharset.f_REPLACEMENT_CHAR__javaemul_internal_EmulatedCharset_UtfCharset_ = 65533 /* '\uFFFD' */;
$Util.$setClassMetadata(UtfCharset, 'javaemul.internal.EmulatedCharset$UtfCharset');

exports = UtfCharset;

//# sourceMappingURL=EmulatedCharset$UtfCharset.js.map
