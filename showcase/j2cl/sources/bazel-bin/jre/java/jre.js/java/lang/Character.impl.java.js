goog.module('java.lang.Character$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CaseMapper = goog.forwardDeclare('java.lang.CaseMapper$impl');
let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let BoxedValues = goog.forwardDeclare('java.lang.Character.BoxedValues$impl');
let CharSequenceAdapter = goog.forwardDeclare('java.lang.Character.CharSequenceAdapter$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let StringUtil = goog.forwardDeclare('javaemul.internal.StringUtil$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

/**
 * @final
 * @implements {Comparable<Character>}
 * @implements {Serializable}
 */
class Character extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_lang_Character_ = 0 /* '\u0000' */;
 }
 /** @nodts @return {number} */
 static m_charCount__int__int(/** number */ codePoint) {
  Character.$clinit();
  return codePoint >= Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character ? 2 : 1;
 }
 /** @nodts @return {number} */
 static m_codePointAt__arrayOf_char__int__int(/** Array<number> */ a, /** number */ index) {
  Character.$clinit();
  return Character.m_codePointAt__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char(a), index, a.length);
 }
 /** @nodts @return {number} */
 static m_codePointAt__arrayOf_char__int__int__int(/** Array<number> */ a, /** number */ index, /** number */ limit) {
  Character.$clinit();
  return Character.m_codePointAt__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char(a), index, limit);
 }
 /** @nodts @return {number} */
 static m_codePointAt__java_lang_CharSequence__int__int(/** (CharSequence|string) */ seq, /** number */ index) {
  Character.$clinit();
  return Character.m_codePointAt__java_lang_CharSequence__int__int__int(seq, index, $CharSequences.m_length__java_lang_CharSequence__int(seq));
 }
 /** @nodts @return {number} */
 static m_codePointBefore__arrayOf_char__int__int(/** Array<number> */ a, /** number */ index) {
  Character.$clinit();
  return Character.m_codePointBefore__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char(a), index, 0);
 }
 /** @nodts @return {number} */
 static m_codePointBefore__arrayOf_char__int__int__int(/** Array<number> */ a, /** number */ index, /** number */ start) {
  Character.$clinit();
  return Character.m_codePointBefore__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char(a), index, start);
 }
 /** @nodts @return {number} */
 static m_codePointBefore__java_lang_CharSequence__int__int(/** (CharSequence|string) */ cs, /** number */ index) {
  Character.$clinit();
  return Character.m_codePointBefore__java_lang_CharSequence__int__int__int(cs, index, 0);
 }
 /** @nodts @return {number} */
 static m_codePointCount__arrayOf_char__int__int__int(/** Array<number> */ a, /** number */ offset, /** number */ count) {
  Character.$clinit();
  return Character.m_codePointCount__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char(a), offset, offset + count | 0);
 }
 /** @nodts @return {number} */
 static m_codePointCount__java_lang_CharSequence__int__int__int(/** (CharSequence|string) */ seq, /** number */ beginIndex, /** number */ endIndex) {
  Character.$clinit();
  let count = 0;
  for (let idx = beginIndex; idx < endIndex; ) {
   let /** number */ $value;
   let ch = $CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, ($value = idx, idx = idx + 1 | 0, $value));
   if (Character.m_isHighSurrogate__char__boolean(ch) && idx < endIndex && Character.m_isLowSurrogate__char__boolean($CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, idx))) {
    idx = idx + 1 | 0;
   }
   count = count + 1 | 0;
  }
  return count;
 }
 /** @nodts @return {number} */
 static m_compare__char__char__int(/** number */ x, /** number */ y) {
  Character.$clinit();
  return x - y | 0;
 }
 /** @nodts @return {number} */
 static m_digit__char__int__int(/** number */ c, /** number */ radix) {
  Character.$clinit();
  if (radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   return - 1 | 0;
  }
  if (c >= 48 /* '0' */ && c < (48 /* '0' */ + Math.min(radix, 10) | 0)) {
   return c - 48 /* '0' */ | 0;
  }
  if (c >= 97 /* 'a' */ && c < (radix + 97 /* 'a' */ - 10 | 0)) {
   return c - 97 /* 'a' */ + 10 | 0;
  }
  if (c >= 65 /* 'A' */ && c < (radix + 65 /* 'A' */ - 10 | 0)) {
   return c - 65 /* 'A' */ + 10 | 0;
  }
  return - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_forDigit__int__int__char(/** number */ digit, /** number */ radix) {
  Character.$clinit();
  if (radix < Character.f_MIN_RADIX__java_lang_Character || radix > Character.f_MAX_RADIX__java_lang_Character) {
   return 0 /* '\u0000' */;
  }
  if (digit < 0 || digit >= radix) {
   return 0 /* '\u0000' */;
  }
  return Character.m_forDigit__int__char(digit);
 }
 /** @nodts @return {number} */
 static m_hashCode__char__int(/** number */ c) {
  Character.$clinit();
  return c;
 }
 /** @nodts @return {boolean} */
 static m_isBmpCodePoint__int__boolean(/** number */ codePoint) {
  Character.$clinit();
  return codePoint >= Character.f_MIN_VALUE__java_lang_Character && codePoint <= Character.f_MAX_VALUE__java_lang_Character;
 }
 /** @nodts @return {boolean} */
 static m_isDigit__char__boolean(/** number */ c) {
  Character.$clinit();
  if ($Equality.$same(Character.f_digitRegex__java_lang_Character_, null)) {
   Character.f_digitRegex__java_lang_Character_ = new RegExp('\\d');
  }
  return Character.f_digitRegex__java_lang_Character_.test(j_l_String.m_valueOf__char__java_lang_String(c));
 }
 /** @nodts @return {boolean} */
 static m_isHighSurrogate__char__boolean(/** number */ ch) {
  Character.$clinit();
  return ch >= Character.f_MIN_HIGH_SURROGATE__java_lang_Character && ch <= Character.f_MAX_HIGH_SURROGATE__java_lang_Character;
 }
 /** @nodts @return {boolean} */
 static m_isLetter__char__boolean(/** number */ c) {
  Character.$clinit();
  if ($Equality.$same(Character.f_leterRegex__java_lang_Character_, null)) {
   Character.f_leterRegex__java_lang_Character_ = new RegExp('[A-Z]', 'i');
  }
  return Character.f_leterRegex__java_lang_Character_.test(j_l_String.m_valueOf__char__java_lang_String(c));
 }
 /** @nodts @return {boolean} */
 static m_isLetterOrDigit__char__boolean(/** number */ c) {
  Character.$clinit();
  if ($Equality.$same(Character.f_isLeterOrDigitRegex__java_lang_Character_, null)) {
   Character.f_isLeterOrDigitRegex__java_lang_Character_ = new RegExp('[A-Z\\d]', 'i');
  }
  return Character.f_isLeterOrDigitRegex__java_lang_Character_.test(j_l_String.m_valueOf__char__java_lang_String(c));
 }
 /** @nodts @return {boolean} */
 static m_isLowerCase__char__boolean(/** number */ c) {
  Character.$clinit();
  return Character.m_toLowerCase__char__char(c) == c && Character.m_isLetter__char__boolean(c);
 }
 /** @nodts @return {boolean} */
 static m_isLowSurrogate__char__boolean(/** number */ ch) {
  Character.$clinit();
  return ch >= Character.f_MIN_LOW_SURROGATE__java_lang_Character && ch <= Character.f_MAX_LOW_SURROGATE__java_lang_Character;
 }
 /** @nodts @return {boolean} */
 static m_isSurrogate__char__boolean(/** number */ ch) {
  Character.$clinit();
  return ch >= Character.f_MIN_SURROGATE__java_lang_Character && ch <= Character.f_MAX_SURROGATE__java_lang_Character;
 }
 /** @nodts @return {boolean} @deprecated */
 static m_isSpace__char__boolean(/** number */ c) {
  Character.$clinit();
  switch (c) {
   case 32 /* ' ' */: 
    return true;
   case 10 /* '\n' */: 
    return true;
   case 9 /* '\t' */: 
    return true;
   case 12 /* '\u000C' */: 
    return true;
   case 13 /* '\r' */: 
    return true;
   default: 
    return false;
  }
 }
 /** @nodts @return {boolean} */
 static m_isWhitespace__char__boolean(/** number */ ch) {
  Character.$clinit();
  return StringUtil.m_isWhitespace__java_lang_String__boolean(j_l_String.m_valueOf__char__java_lang_String(ch));
 }
 /** @nodts @return {boolean} */
 static m_isWhitespace__int__boolean(/** number */ codePoint) {
  Character.$clinit();
  return Character.m_isValidCodePoint__int__boolean(codePoint) && StringUtil.m_isWhitespace__java_lang_String__boolean(j_l_String.m_fromCodePoint__int__java_lang_String(codePoint));
 }
 /** @nodts @return {boolean} */
 static m_isSpaceChar__char__boolean(/** number */ ch) {
  Character.$clinit();
  return StringUtil.m_isSpace__java_lang_String__boolean(j_l_String.m_valueOf__char__java_lang_String(ch));
 }
 /** @nodts @return {boolean} */
 static m_isSpaceChar__int__boolean(/** number */ codePoint) {
  Character.$clinit();
  return Character.m_isValidCodePoint__int__boolean(codePoint) && StringUtil.m_isSpace__java_lang_String__boolean(j_l_String.m_fromCodePoint__int__java_lang_String(codePoint));
 }
 /** @nodts @return {boolean} */
 static m_isSupplementaryCodePoint__int__boolean(/** number */ codePoint) {
  Character.$clinit();
  return codePoint >= Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character && codePoint <= Character.f_MAX_CODE_POINT__java_lang_Character;
 }
 /** @nodts @return {boolean} */
 static m_isSurrogatePair__char__char__boolean(/** number */ highSurrogate, /** number */ lowSurrogate) {
  Character.$clinit();
  return Character.m_isHighSurrogate__char__boolean(highSurrogate) && Character.m_isLowSurrogate__char__boolean(lowSurrogate);
 }
 /** @nodts @return {boolean} */
 static m_isTitleCase__char__boolean(/** number */ c) {
  Character.$clinit();
  return c != Character.m_toUpperCase__char__char(c) && c != Character.m_toLowerCase__char__char(c);
 }
 /** @nodts @return {number} */
 static m_toTitleCase__char__char(/** number */ c) {
  Character.$clinit();
  if (c >= 452 /* '\u01C4' */ && c <= 460 /* '\u01CC' */ || c >= 497 /* '\u01F1' */ && c <= 499 /* '\u01F3' */) {
   return $Primitives.narrowIntToChar(Math.imul($Primitives.coerceDivision((c + 1 | 0) / 3), 3));
  } else if (c >= 4304 /* '\u10D0' */ && c <= 4346 /* '\u10FA' */ || c >= 4349 /* '\u10FD' */ && c <= 4351 /* '\u10FF' */) {
   return c;
  }
  return Character.m_toUpperCase__char__char(c);
 }
 /** @nodts @return {boolean} */
 static m_isUpperCase__char__boolean(/** number */ c) {
  Character.$clinit();
  return Character.m_toUpperCase__char__char(c) == c && Character.m_isLetter__char__boolean(c);
 }
 /** @nodts @return {boolean} */
 static m_isValidCodePoint__int__boolean(/** number */ codePoint) {
  Character.$clinit();
  return codePoint >= Character.f_MIN_CODE_POINT__java_lang_Character && codePoint <= Character.f_MAX_CODE_POINT__java_lang_Character;
 }
 /** @nodts @return {number} */
 static m_offsetByCodePoints__arrayOf_char__int__int__int__int__int(/** Array<number> */ a, /** number */ start, /** number */ count, /** number */ index, /** number */ codePointOffset) {
  Character.$clinit();
  return Character.m_offsetByCodePoints__java_lang_CharSequence__int__int__int(CharSequenceAdapter.$create__arrayOf_char__int__int(a, start, count), index, codePointOffset);
 }
 /** @nodts @return {number} */
 static m_offsetByCodePoints__java_lang_CharSequence__int__int__int(/** (CharSequence|string) */ seq, /** number */ index, /** number */ codePointOffset) {
  Character.$clinit();
  if (codePointOffset < 0) {
   while (codePointOffset < 0) {
    index = index - 1 | 0;
    if (Character.m_isLowSurrogate__char__boolean($CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, index)) && Character.m_isHighSurrogate__char__boolean($CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, index - 1 | 0))) {
     index = index - 1 | 0;
    }
    codePointOffset = codePointOffset + 1 | 0;
   }
  } else {
   while (codePointOffset > 0) {
    if (Character.m_isHighSurrogate__char__boolean($CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, index)) && Character.m_isLowSurrogate__char__boolean($CharSequences.m_charAt__java_lang_CharSequence__int__char(seq, index + 1 | 0))) {
     index = index + 1 | 0;
    }
    index = index + 1 | 0;
    codePointOffset = codePointOffset - 1 | 0;
   }
  }
  return index;
 }
 /** @nodts @return {Array<number>} */
 static m_toChars__int__arrayOf_char(/** number */ codePoint) {
  Character.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void(Character.m_isValidCodePoint__int__boolean(codePoint));
  if (codePoint >= Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character) {
   return /**@type {!Array<number>}*/ ($Arrays.$init([Character.m_getHighSurrogate__int__char(codePoint), Character.m_getLowSurrogate__int__char(codePoint)], $$char));
  } else {
   return /**@type {!Array<number>}*/ ($Arrays.$init([$Primitives.narrowIntToChar(codePoint)], $$char));
  }
 }
 /** @nodts @return {number} */
 static m_toChars__int__arrayOf_char__int__int(/** number */ codePoint, /** Array<number> */ dst, /** number */ dstIndex) {
  Character.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void(Character.m_isValidCodePoint__int__boolean(codePoint));
  if (codePoint >= Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character) {
   let /** number */ $value;
   $Arrays.$set(dst, ($value = dstIndex, dstIndex = dstIndex + 1 | 0, $value), Character.m_getHighSurrogate__int__char(codePoint));
   $Arrays.$set(dst, dstIndex, Character.m_getLowSurrogate__int__char(codePoint));
   return 2;
  } else {
   $Arrays.$set(dst, dstIndex, $Primitives.narrowIntToChar(codePoint));
   return 1;
  }
 }
 /** @nodts @return {number} */
 static m_toCodePoint__char__char__int(/** number */ highSurrogate, /** number */ lowSurrogate) {
  Character.$clinit();
  return Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character + ((highSurrogate & 1023) << 10) + (lowSurrogate & 1023) | 0;
 }
 /** @nodts @return {number} */
 static m_toLowerCase__int__int(/** number */ c) {
  Character.$clinit();
  return CaseMapper.m_codePointToLowerCase__int__int(c);
 }
 /** @nodts @return {number} */
 static m_toUpperCase__int__int(/** number */ c) {
  Character.$clinit();
  return CaseMapper.m_codePointToUpperCase__int__int(c);
 }
 /** @nodts @return {number} */
 static m_toLowerCase__char__char(/** number */ c) {
  Character.$clinit();
  return CaseMapper.m_charToLowerCase__char__char(c);
 }
 /** @nodts @return {number} */
 static m_toUpperCase__char__char(/** number */ c) {
  Character.$clinit();
  return CaseMapper.m_charToUpperCase__char__char(c);
 }
 /** @nodts @return {?string} */
 static m_toString__char__java_lang_String(/** number */ x) {
  Character.$clinit();
  return j_l_String.m_valueOf__char__java_lang_String(x);
 }
 /** @nodts @return {?string} */
 static m_toString__int__java_lang_String(/** number */ x) {
  Character.$clinit();
  return j_l_String.m_fromCodePoint__int__java_lang_String(x);
 }
 /** @nodts @return {Character} */
 static m_valueOf__char__java_lang_Character(/** number */ c) {
  Character.$clinit();
  if (c < 128) {
   return BoxedValues.m_get__char__java_lang_Character(c);
  }
  return Character.$create__char(c);
 }
 /** @nodts @return {number} */
 static m_codePointAt__java_lang_CharSequence__int__int__int(/** (CharSequence|string) */ cs, /** number */ index, /** number */ limit) {
  let /** number */ $value;
  Character.$clinit();
  let hiSurrogate = $CharSequences.m_charAt__java_lang_CharSequence__int__char(cs, ($value = index, index = index + 1 | 0, $value));
  let /** number */ loSurrogate;
  if (Character.m_isHighSurrogate__char__boolean(hiSurrogate) && index < limit && Character.m_isLowSurrogate__char__boolean(loSurrogate = $CharSequences.m_charAt__java_lang_CharSequence__int__char(cs, index))) {
   return Character.m_toCodePoint__char__char__int(hiSurrogate, loSurrogate);
  }
  return hiSurrogate;
 }
 /** @nodts @return {number} */
 static m_codePointBefore__java_lang_CharSequence__int__int__int(/** (CharSequence|string) */ cs, /** number */ index, /** number */ start) {
  Character.$clinit();
  let loSurrogate = $CharSequences.m_charAt__java_lang_CharSequence__int__char(cs, index = index - 1 | 0);
  let /** number */ highSurrogate;
  if (Character.m_isLowSurrogate__char__boolean(loSurrogate) && index > start && Character.m_isHighSurrogate__char__boolean(highSurrogate = $CharSequences.m_charAt__java_lang_CharSequence__int__char(cs, index - 1 | 0))) {
   return Character.m_toCodePoint__char__char__int(highSurrogate, loSurrogate);
  }
  return loSurrogate;
 }
 /** @nodts @return {number} */
 static m_forDigit__int__char(/** number */ digit) {
  Character.$clinit();
  let overBaseTen = digit - 10 | 0;
  return $Primitives.narrowIntToChar(overBaseTen < 0 ? 48 /* '0' */ + digit | 0 : 97 /* 'a' */ + overBaseTen | 0);
 }
 /** @nodts @return {number} */
 static m_getHighSurrogate__int__char(/** number */ codePoint) {
  Character.$clinit();
  return $Primitives.narrowIntToChar(Character.f_MIN_HIGH_SURROGATE__java_lang_Character + ((codePoint - Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character | 0) >> 10 & 1023) | 0);
 }
 /** @nodts @return {number} */
 static m_getLowSurrogate__int__char(/** number */ codePoint) {
  Character.$clinit();
  return $Primitives.narrowIntToChar(Character.f_MIN_LOW_SURROGATE__java_lang_Character + ((codePoint - Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character | 0) & 1023) | 0);
 }
 /** @nodts @return {!Character} */
 static $create__char(/** number */ value) {
  Character.$clinit();
  let $instance = new Character();
  $instance.$ctor__java_lang_Character__char__void(value);
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Character__char__void(/** number */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_value__java_lang_Character_ = value;
 }
 /** @nodts @return {number} */
 m_charValue__char() {
  return this.f_value__java_lang_Character_;
 }
 /** @nodts @return {number} */
 m_compareTo__java_lang_Character__int(/** Character */ c) {
  return Character.m_compare__char__char__int(this.f_value__java_lang_Character_, c.f_value__java_lang_Character_);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return Character.$isInstance(o) && /**@type {Character}*/ ($Casts.$to(o, Character)).f_value__java_lang_Character_ == this.f_value__java_lang_Character_;
 }
 /** @override @return {number} */
 hashCode() {
  return Character.m_hashCode__char__int(this.f_value__java_lang_Character_);
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__char__java_lang_String(this.f_value__java_lang_Character_);
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** Character */ arg0) {
  return this.m_compareTo__java_lang_Character__int(/**@type {Character}*/ ($Casts.$to(arg0, Character)));
 }
 /** @nodts @return {Class<Character>} */
 static get f_TYPE__java_lang_Character() {
  return (Character.$clinit(), Character.$static_TYPE__java_lang_Character);
 }
 /** @nodts */
 static $clinit() {
  Character.$clinit = () =>{};
  Character.$loadModules();
  j_l_Object.$clinit();
  Character.$static_TYPE__java_lang_Character = Class.$get($$char);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Character;
 }
 
 /** @nodts */
 static $loadModules() {
  CaseMapper = goog.module.get('java.lang.CaseMapper$impl');
  BoxedValues = goog.module.get('java.lang.Character.BoxedValues$impl');
  CharSequenceAdapter = goog.module.get('java.lang.Character.CharSequenceAdapter$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  StringUtil = goog.module.get('javaemul.internal.StringUtil$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
/**@private {Class<Character>} @nodts*/
Character.$static_TYPE__java_lang_Character;
/**@const {number} @nodts*/
Character.f_MIN_RADIX__java_lang_Character = 2;
/**@const {number} @nodts*/
Character.f_MAX_RADIX__java_lang_Character = 36;
/**@const {number} @nodts*/
Character.f_MIN_VALUE__java_lang_Character = 0 /* '\u0000' */;
/**@const {number} @nodts*/
Character.f_MAX_VALUE__java_lang_Character = 65535 /* '\uFFFF' */;
/**@const {number} @nodts*/
Character.f_MIN_SURROGATE__java_lang_Character = 55296 /* '\uD800' */;
/**@const {number} @nodts*/
Character.f_MAX_SURROGATE__java_lang_Character = 57343 /* '\uDFFF' */;
/**@const {number} @nodts*/
Character.f_MIN_LOW_SURROGATE__java_lang_Character = 56320 /* '\uDC00' */;
/**@const {number} @nodts*/
Character.f_MAX_LOW_SURROGATE__java_lang_Character = 57343 /* '\uDFFF' */;
/**@const {number} @nodts*/
Character.f_MIN_HIGH_SURROGATE__java_lang_Character = 55296 /* '\uD800' */;
/**@const {number} @nodts*/
Character.f_MAX_HIGH_SURROGATE__java_lang_Character = 56319 /* '\uDBFF' */;
/**@const {number} @nodts*/
Character.f_MIN_SUPPLEMENTARY_CODE_POINT__java_lang_Character = 65536;
/**@const {number} @nodts*/
Character.f_MIN_CODE_POINT__java_lang_Character = 0;
/**@const {number} @nodts*/
Character.f_MAX_CODE_POINT__java_lang_Character = 1114111;
/**@const {number} @nodts*/
Character.f_SIZE__java_lang_Character = 16;
/**@const {number} @nodts*/
Character.f_BYTES__java_lang_Character = 2;
/**@type {RegExp} @nodts*/
Character.f_digitRegex__java_lang_Character_;
/**@type {RegExp} @nodts*/
Character.f_leterRegex__java_lang_Character_;
/**@type {RegExp} @nodts*/
Character.f_isLeterOrDigitRegex__java_lang_Character_;
Comparable.$markImplementor(Character);
Serializable.$markImplementor(Character);
$Util.$setClassMetadata(Character, 'java.lang.Character');

exports = Character;

//# sourceMappingURL=Character.js.map
