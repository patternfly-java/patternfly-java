goog.module('java.util.BitSet$impl');

const Cloneable = goog.require('java.lang.Cloneable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Byte = goog.forwardDeclare('java.lang.Byte$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let vmbootstrap_$LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @implements {Cloneable}
 */
class BitSet extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_array__java_util_BitSet_;
 }
 //Factory method corresponding to constructor 'BitSet()'.
 /** @nodts @return {!BitSet} */
 static $create__() {
  BitSet.$clinit();
  let $instance = new BitSet();
  $instance.$ctor__java_util_BitSet__void();
  return $instance;
 }
 //Initialization from constructor 'BitSet()'.
 /** @nodts */
 $ctor__java_util_BitSet__void() {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_BitSet_ = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$int));
 }
 //Factory method corresponding to constructor 'BitSet(int)'.
 /** @nodts @return {!BitSet} */
 static $create__int(/** number */ nbits) {
  BitSet.$clinit();
  let $instance = new BitSet();
  $instance.$ctor__java_util_BitSet__int__void(nbits);
  return $instance;
 }
 //Initialization from constructor 'BitSet(int)'.
 /** @nodts */
 $ctor__java_util_BitSet__int__void(/** number */ nbits) {
  this.$ctor__java_lang_Object__void();
  InternalPreconditions.m_checkArraySize__int__void(nbits);
  let length = BitSet.m_wordIndex__int__int(nbits - 1 | 0) + 1 | 0;
  this.f_array__java_util_BitSet_ = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$int));
  ArrayHelper.m_setLength__java_lang_Object__int__void(this.f_array__java_util_BitSet_, length);
 }
 //Factory method corresponding to constructor 'BitSet(int[])'.
 /** @nodts @return {!BitSet} */
 static $create__arrayOf_int(/** Array<number> */ array) {
  let $instance = new BitSet();
  $instance.$ctor__java_util_BitSet__arrayOf_int__void(array);
  return $instance;
 }
 //Initialization from constructor 'BitSet(int[])'.
 /** @nodts */
 $ctor__java_util_BitSet__arrayOf_int__void(/** Array<number> */ array) {
  this.$ctor__java_lang_Object__void();
  this.f_array__java_util_BitSet_ = array;
 }
 /** @nodts */
 static m_checkIndex__int__void(/** number */ bitIndex) {
  if (bitIndex < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('bitIndex < 0: ' + bitIndex));
  }
 }
 /** @nodts */
 static m_checkRange__int__int__void(/** number */ fromIndex, /** number */ toIndex) {
  if (fromIndex < 0 || toIndex < 0 || fromIndex > toIndex) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex));
  }
 }
 /** @nodts @return {number} */
 static m_wordIndex__int__int(/** number */ bitIndex) {
  return $Primitives.coerceDivision(bitIndex / BitSet.f_BITS_PER_WORD__java_util_BitSet_);
 }
 /** @nodts @return {number} */
 static m_bitIndex__int__int(/** number */ wordIndex) {
  return Math.imul(wordIndex, BitSet.f_BITS_PER_WORD__java_util_BitSet_);
 }
 /** @nodts @return {number} */
 static m_bitOffset__int__int(/** number */ bitIndex) {
  return $Primitives.coerceDivision(bitIndex % BitSet.f_BITS_PER_WORD__java_util_BitSet_);
 }
 /** @nodts */
 static m_setInternal__arrayOf_int__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  let first = BitSet.m_wordIndex__int__int(fromIndex);
  let last = BitSet.m_wordIndex__int__int(toIndex);
  BitSet.m_maybeGrowArrayToIndex__arrayOf_int__int__void(array, last);
  let startBit = BitSet.m_bitOffset__int__int(fromIndex);
  let endBit = BitSet.m_bitOffset__int__int(toIndex);
  if (first == last) {
   BitSet.m_maskInWord__arrayOf_int__int__int__int__void(array, first, startBit, endBit);
  } else {
   BitSet.m_maskInWord__arrayOf_int__int__int__int__void(array, first, startBit, BitSet.f_BITS_PER_WORD__java_util_BitSet_);
   BitSet.m_maskInWord__arrayOf_int__int__int__int__void(array, last, 0, endBit);
   for (let i = first + 1 | 0; i < last; i = i + 1 | 0) {
    $Arrays.$set(array, i, BitSet.f_WORD_MASK__java_util_BitSet_);
   }
  }
 }
 /** @nodts */
 static m_maybeGrowArrayToIndex__arrayOf_int__int__void(/** Array<number> */ array, /** number */ newMaxIndex) {
  let newLength = newMaxIndex + 1 | 0;
  if (newLength > array.length) {
   ArrayHelper.m_setLength__java_lang_Object__int__void(array, newLength);
  }
 }
 /** @nodts @return {number} */
 static m_lastSetWordIndex__arrayOf_int__int(/** Array<number> */ array) {
  let i = array.length - 1 | 0;
  for (; i >= 0 && BitSet.m_wordAt__arrayOf_int__int__int(array, i) == 0; i = i - 1 | 0) {}
  return i;
 }
 /** @nodts */
 static m_flipMaskedWord__arrayOf_int__int__int__int__void(/** Array<number> */ array, /** number */ index, /** number */ from, /** number */ to) {
  if (from == to) {
   return;
  }
  to = 32 - to | 0;
  let word = BitSet.m_wordAt__arrayOf_int__int__int(array, index);
  word ^= (-1 >>> from | 0) << (from + to | 0) >>> to | 0;
  $Arrays.$set(array, index, word & BitSet.f_WORD_MASK__java_util_BitSet_);
 }
 /** @nodts */
 static m_maskInWord__arrayOf_int__int__int__int__void(/** Array<number> */ array, /** number */ index, /** number */ from, /** number */ to) {
  if (from == to) {
   return;
  }
  to = 32 - to | 0;
  let word = BitSet.m_wordAt__arrayOf_int__int__int(array, index);
  word |= (-1 >>> from | 0) << (from + to | 0) >>> to | 0;
  $Arrays.$set(array, index, word & BitSet.f_WORD_MASK__java_util_BitSet_);
 }
 /** @nodts */
 static m_maskOutWord__arrayOf_int__int__int__int__void(/** Array<number> */ array, /** number */ index, /** number */ from, /** number */ to) {
  if (from == to) {
   return;
  }
  let word = BitSet.m_wordAt__arrayOf_int__int__int(array, index);
  if (word == 0) {
   return;
  }
  let /** number */ mask;
  if (from != 0) {
   mask = -1 >>> 32 - from | 0;
  } else {
   mask = 0;
  }
  if (to != 32) {
   mask |= -1 << to;
  }
  word &= mask;
  $Arrays.$set(array, index, word & BitSet.f_WORD_MASK__java_util_BitSet_);
 }
 /** @nodts @return {number} */
 static m_wordAt__arrayOf_int__int__int(/** Array<number> */ array, /** number */ index) {
  return array[index] | 0;
 }
 /** @nodts @return {number} */
 static m_enforceOverflow__int__int(/** number */ value) {
  return value & -1;
 }
 /** @nodts */
 m_and__java_util_BitSet__void(/** BitSet */ set) {
  if ($Equality.$same(this, set)) {
   return;
  }
  let limit = Math.min(this.f_array__java_util_BitSet_.length, set.f_array__java_util_BitSet_.length);
  let index = 0;
  for (; index < limit; index = index + 1 | 0) {
   let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
   if (word != 0) {
    $Arrays.$set(this.f_array__java_util_BitSet_, index, word & BitSet.m_wordAt__arrayOf_int__int__int(set.f_array__java_util_BitSet_, index));
   }
  }
  Arrays.m_fill__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, index, this.f_array__java_util_BitSet_.length, 0);
 }
 /** @nodts */
 m_andNot__java_util_BitSet__void(/** BitSet */ set) {
  if ($Equality.$same(this, set)) {
   this.m_clear__void();
   return;
  }
  let limit = Math.min(this.f_array__java_util_BitSet_.length, set.f_array__java_util_BitSet_.length);
  for (let index = 0; index < limit; index = index + 1 | 0) {
   let otherWord = BitSet.m_wordAt__arrayOf_int__int__int(set.f_array__java_util_BitSet_, index);
   if (otherWord != 0) {
    let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
    if (word != 0) {
     $Arrays.$set(this.f_array__java_util_BitSet_, index, word & (~otherWord & BitSet.f_WORD_MASK__java_util_BitSet_));
    }
   }
  }
 }
 /** @nodts @return {number} */
 m_cardinality__int() {
  let count = 0;
  for (let i = 0; i < this.f_array__java_util_BitSet_.length; i = i + 1 | 0) {
   count = count + Integer.m_bitCount__int__int(BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, i)) | 0;
  }
  return count;
 }
 /** @nodts */
 m_clear__void() {
  ArrayHelper.m_setLength__java_lang_Object__int__void(this.f_array__java_util_BitSet_, 0);
 }
 /** @nodts */
 m_clear__int__void(/** number */ bitIndex) {
  BitSet.m_checkIndex__int__void(bitIndex);
  let index = BitSet.m_wordIndex__int__int(bitIndex);
  if (index >= this.f_array__java_util_BitSet_.length) {
   return;
  }
  let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
  if (word != 0) {
   $Arrays.$set(this.f_array__java_util_BitSet_, index, word & ~(1 << BitSet.m_bitOffset__int__int(bitIndex)) & BitSet.f_WORD_MASK__java_util_BitSet_);
  }
 }
 /** @nodts */
 m_clear__int__int__void(/** number */ fromIndex, /** number */ toIndex) {
  BitSet.m_checkRange__int__int__void(fromIndex, toIndex);
  if (fromIndex == toIndex) {
   return;
  }
  let first = BitSet.m_wordIndex__int__int(fromIndex);
  if (first >= this.f_array__java_util_BitSet_.length) {
   return;
  }
  let last = BitSet.m_wordIndex__int__int(toIndex);
  if (last >= this.f_array__java_util_BitSet_.length) {
   toIndex = this.m_length__int();
   last = BitSet.m_wordIndex__int__int(toIndex);
  }
  let startBit = BitSet.m_bitOffset__int__int(fromIndex);
  let endBit = BitSet.m_bitOffset__int__int(toIndex);
  if (first == last) {
   BitSet.m_maskOutWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, first, startBit, endBit);
  } else {
   BitSet.m_maskOutWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, first, startBit, BitSet.f_BITS_PER_WORD__java_util_BitSet_);
   BitSet.m_maskOutWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, last, 0, endBit);
   Arrays.m_fill__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, first + 1 | 0, last, 0);
  }
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return BitSet.$create__arrayOf_int(Arrays.m_copyOf__arrayOf_int__int__arrayOf_int(this.f_array__java_util_BitSet_, this.f_array__java_util_BitSet_.length));
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if (!BitSet.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {BitSet}*/ ($Casts.$to(obj, BitSet));
  let lastIndex = BitSet.m_lastSetWordIndex__arrayOf_int__int(this.f_array__java_util_BitSet_);
  if (lastIndex != BitSet.m_lastSetWordIndex__arrayOf_int__int(other.f_array__java_util_BitSet_)) {
   return false;
  }
  for (let index = 0; index <= lastIndex; index = index + 1 | 0) {
   if (BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) != BitSet.m_wordAt__arrayOf_int__int__int(other.f_array__java_util_BitSet_, index)) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 m_flip__int__void(/** number */ bitIndex) {
  BitSet.m_checkIndex__int__void(bitIndex);
  let index = BitSet.m_wordIndex__int__int(bitIndex);
  let offset = BitSet.m_bitOffset__int__int(bitIndex);
  BitSet.m_maybeGrowArrayToIndex__arrayOf_int__int__void(this.f_array__java_util_BitSet_, index);
  let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
  if (((word >>> offset | 0) & 1) == 1) {
   word = word & ~(1 << offset);
  } else {
   word = word | 1 << offset;
  }
  $Arrays.$set(this.f_array__java_util_BitSet_, index, word & BitSet.f_WORD_MASK__java_util_BitSet_);
 }
 /** @nodts */
 m_flip__int__int__void(/** number */ fromIndex, /** number */ toIndex) {
  BitSet.m_checkRange__int__int__void(fromIndex, toIndex);
  if (fromIndex == toIndex) {
   return;
  }
  let length = this.m_length__int();
  if (fromIndex >= length) {
   BitSet.m_setInternal__arrayOf_int__int__int__void(this.f_array__java_util_BitSet_, fromIndex, toIndex);
   return;
  }
  if (toIndex >= length) {
   BitSet.m_setInternal__arrayOf_int__int__int__void(this.f_array__java_util_BitSet_, length, toIndex);
   toIndex = length;
  }
  let first = BitSet.m_wordIndex__int__int(fromIndex);
  let last = BitSet.m_wordIndex__int__int(toIndex);
  let startBit = BitSet.m_bitOffset__int__int(fromIndex);
  let endBit = BitSet.m_bitOffset__int__int(toIndex);
  if (first == last) {
   BitSet.m_flipMaskedWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, first, startBit, endBit);
  } else {
   BitSet.m_flipMaskedWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, first, startBit, BitSet.f_BITS_PER_WORD__java_util_BitSet_);
   BitSet.m_flipMaskedWord__arrayOf_int__int__int__int__void(this.f_array__java_util_BitSet_, last, 0, endBit);
   for (let i = first + 1 | 0; i < last; i = i + 1 | 0) {
    $Arrays.$set(this.f_array__java_util_BitSet_, i, ~BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, i) & BitSet.f_WORD_MASK__java_util_BitSet_);
   }
  }
 }
 /** @nodts @return {boolean} */
 m_get__int__boolean(/** number */ bitIndex) {
  BitSet.m_checkIndex__int__void(bitIndex);
  let index = BitSet.m_wordIndex__int__int(bitIndex);
  return index < this.f_array__java_util_BitSet_.length && ((BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) >>> BitSet.m_bitOffset__int__int(bitIndex) | 0) & 1) == 1;
 }
 /** @nodts @return {BitSet} */
 m_get__int__int__java_util_BitSet(/** number */ fromIndex, /** number */ toIndex) {
  BitSet.m_checkRange__int__int__void(fromIndex, toIndex);
  let length = this.m_length__int();
  if (length <= fromIndex || fromIndex == toIndex) {
   return BitSet.$create__int(0);
  }
  toIndex = Math.min(toIndex, length);
  let rightShift = BitSet.m_bitOffset__int__int(fromIndex);
  if (rightShift == 0) {
   let subFrom = BitSet.m_wordIndex__int__int(fromIndex);
   let subTo = BitSet.m_wordIndex__int__int(toIndex + BitSet.f_BITS_PER_WORD__java_util_BitSet_ | 0);
   let subArray = Arrays.m_copyOfRange__arrayOf_int__int__int__arrayOf_int(this.f_array__java_util_BitSet_, subFrom, subTo);
   let leftOvers = BitSet.m_bitOffset__int__int(toIndex);
   BitSet.m_maskOutWord__arrayOf_int__int__int__int__void(subArray, subTo - subFrom - 1 | 0, leftOvers, BitSet.f_BITS_PER_WORD__java_util_BitSet_);
   return BitSet.$create__arrayOf_int(subArray);
  }
  let first = BitSet.m_wordIndex__int__int(fromIndex);
  let last = BitSet.m_wordIndex__int__int(toIndex);
  let subArray_1 = /**@type {!Array<number>}*/ ($Arrays.$create([last - first + 1 | 0], $$int));
  if (first == last) {
   let end = 32 - BitSet.m_bitOffset__int__int(toIndex) | 0;
   let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, first);
   $Arrays.$set(subArray_1, 0, word << end >>> rightShift + end | 0);
  } else {
   let word_1 = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, first);
   let current = word_1 >>> rightShift | 0;
   let subIndex = 0;
   let leftShift = BitSet.f_BITS_PER_WORD__java_util_BitSet_ - rightShift | 0;
   for (let i = first + 1 | 0; i <= last; i = i + 1 | 0) {
    let /** number */ $value;
    word_1 = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, i);
    current |= word_1 << leftShift;
    $Arrays.$set(subArray_1, ($value = subIndex, subIndex = subIndex + 1 | 0, $value), current & BitSet.f_WORD_MASK__java_util_BitSet_);
    current = word_1 >>> rightShift | 0;
   }
   let end_1 = 32 - BitSet.m_bitOffset__int__int(toIndex) | 0;
   current = current << (rightShift + end_1 | 0) >>> rightShift + end_1 | 0;
   $Arrays.$set(subArray_1, subIndex, current & BitSet.f_WORD_MASK__java_util_BitSet_);
  }
  return BitSet.$create__arrayOf_int(subArray_1);
 }
 /** @override @return {number} */
 hashCode() {
  let fnvOffset = -2128831035;
  let fnvPrime = 16777619;
  let lastIndex = BitSet.m_lastSetWordIndex__arrayOf_int__int(this.f_array__java_util_BitSet_);
  let hash = fnvOffset ^ lastIndex;
  for (let i = 0; i <= lastIndex; i = i + 1 | 0) {
   let value = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, i);
   hash = BitSet.m_enforceOverflow__int__int(Math.imul(hash, fnvPrime)) ^ value & 255;
   hash = BitSet.m_enforceOverflow__int__int(Math.imul(hash, fnvPrime)) ^ (value >>> 8 | 0) & 255;
   hash = BitSet.m_enforceOverflow__int__int(Math.imul(hash, fnvPrime)) ^ (value >>> 16 | 0) & 255;
   hash = BitSet.m_enforceOverflow__int__int(Math.imul(hash, fnvPrime)) ^ (value >>> 24 | 0);
  }
  return hash;
 }
 /** @nodts @return {boolean} */
 m_intersects__java_util_BitSet__boolean(/** BitSet */ set) {
  if ($Equality.$same(this, set)) {
   return this.m_length__int() > 0;
  }
  let limit = Math.min(this.f_array__java_util_BitSet_.length, set.f_array__java_util_BitSet_.length);
  for (let index = 0; index < limit; index = index + 1 | 0) {
   let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
   if (word != 0 && (word & BitSet.m_wordAt__arrayOf_int__int__int(set.f_array__java_util_BitSet_, index)) != 0) {
    return true;
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.m_length__int() == 0;
 }
 /** @nodts @return {number} */
 m_length__int() {
  let lastIndex = BitSet.m_lastSetWordIndex__arrayOf_int__int(this.f_array__java_util_BitSet_);
  if (lastIndex == (- 1 | 0)) {
   return 0;
  }
  let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, lastIndex);
  return BitSet.m_bitIndex__int__int(lastIndex) + (32 - Integer.m_numberOfLeadingZeros__int__int(word)) | 0;
 }
 /** @nodts @return {number} */
 m_nextClearBit__int__int(/** number */ fromIndex) {
  BitSet.m_checkIndex__int__void(fromIndex);
  let index = BitSet.m_wordIndex__int__int(fromIndex);
  let length = this.f_array__java_util_BitSet_.length;
  if (index >= length) {
   return fromIndex;
  }
  let word = ~BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & BitSet.f_WORD_MASK__java_util_BitSet_;
  word &= BitSet.f_WORD_MASK__java_util_BitSet_ << BitSet.m_bitOffset__int__int(fromIndex);
  while (word == 0) {
   if ((index = index + 1 | 0) >= length) {
    return BitSet.m_bitIndex__int__int(index);
   }
   word = ~BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & BitSet.f_WORD_MASK__java_util_BitSet_;
  }
  return BitSet.m_bitIndex__int__int(index) + Integer.m_numberOfTrailingZeros__int__int(word) | 0;
 }
 /** @nodts @return {number} */
 m_nextSetBit__int__int(/** number */ fromIndex) {
  BitSet.m_checkIndex__int__void(fromIndex);
  let index = BitSet.m_wordIndex__int__int(fromIndex);
  let length = this.f_array__java_util_BitSet_.length;
  if (index >= length) {
   return - 1 | 0;
  }
  let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & BitSet.f_WORD_MASK__java_util_BitSet_ << BitSet.m_bitOffset__int__int(fromIndex);
  while (word == 0) {
   if ((index = index + 1 | 0) >= length) {
    return - 1 | 0;
   }
   word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
  }
  return BitSet.m_bitIndex__int__int(index) + Integer.m_numberOfTrailingZeros__int__int(word) | 0;
 }
 /** @nodts @return {number} */
 m_previousClearBit__int__int(/** number */ fromIndex) {
  if (fromIndex == (- 1 | 0)) {
   return - 1 | 0;
  }
  BitSet.m_checkIndex__int__void(fromIndex);
  let index = BitSet.m_wordIndex__int__int(fromIndex);
  if (index >= this.f_array__java_util_BitSet_.length) {
   return fromIndex;
  }
  let word = ~BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & BitSet.f_WORD_MASK__java_util_BitSet_;
  word &= BitSet.f_WORD_MASK__java_util_BitSet_ >>> BitSet.f_BITS_PER_WORD__java_util_BitSet_ - BitSet.m_bitOffset__int__int(fromIndex) - 1 | 0;
  while (word == 0) {
   if ((index = index - 1 | 0) < 0) {
    return - 1 | 0;
   }
   word = ~BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & BitSet.f_WORD_MASK__java_util_BitSet_;
  }
  return BitSet.m_bitIndex__int__int(index) + (32 - Integer.m_numberOfLeadingZeros__int__int(word)) - 1 | 0;
 }
 /** @nodts @return {number} */
 m_previousSetBit__int__int(/** number */ fromIndex) {
  if (fromIndex == (- 1 | 0)) {
   return - 1 | 0;
  }
  BitSet.m_checkIndex__int__void(fromIndex);
  let index = BitSet.m_wordIndex__int__int(fromIndex);
  if (index >= this.f_array__java_util_BitSet_.length) {
   return this.m_length__int() - 1 | 0;
  }
  let word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) & (BitSet.f_WORD_MASK__java_util_BitSet_ >>> BitSet.f_BITS_PER_WORD__java_util_BitSet_ - BitSet.m_bitOffset__int__int(fromIndex) - 1 | 0);
  while (word == 0) {
   if ((index = index - 1 | 0) < 0) {
    return - 1 | 0;
   }
   word = BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index);
  }
  return BitSet.m_bitIndex__int__int(index) + (32 - Integer.m_numberOfLeadingZeros__int__int(word)) - 1 | 0;
 }
 /** @nodts */
 m_or__java_util_BitSet__void(/** BitSet */ set) {
  if ($Equality.$same(this, set)) {
   return;
  }
  BitSet.m_maybeGrowArrayToIndex__arrayOf_int__int__void(this.f_array__java_util_BitSet_, set.f_array__java_util_BitSet_.length - 1 | 0);
  for (let index = 0; index < set.f_array__java_util_BitSet_.length; index = index + 1 | 0) {
   let word = BitSet.m_wordAt__arrayOf_int__int__int(set.f_array__java_util_BitSet_, index);
   if (word != 0) {
    $Arrays.$set(this.f_array__java_util_BitSet_, index, BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) | word);
   }
  }
 }
 /** @nodts */
 m_set__int__void(/** number */ bitIndex) {
  BitSet.m_checkIndex__int__void(bitIndex);
  let index = BitSet.m_wordIndex__int__int(bitIndex);
  BitSet.m_maybeGrowArrayToIndex__arrayOf_int__int__void(this.f_array__java_util_BitSet_, index);
  $Arrays.$set(this.f_array__java_util_BitSet_, index, BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) | 1 << BitSet.m_bitOffset__int__int(bitIndex));
 }
 /** @nodts */
 m_set__int__boolean__void(/** number */ bitIndex, /** boolean */ value) {
  if (value) {
   this.m_set__int__void(bitIndex);
  } else {
   this.m_clear__int__void(bitIndex);
  }
 }
 /** @nodts */
 m_set__int__int__void(/** number */ fromIndex, /** number */ toIndex) {
  BitSet.m_checkRange__int__int__void(fromIndex, toIndex);
  if (fromIndex != toIndex) {
   BitSet.m_setInternal__arrayOf_int__int__int__void(this.f_array__java_util_BitSet_, fromIndex, toIndex);
  }
 }
 /** @nodts */
 m_set__int__int__boolean__void(/** number */ fromIndex, /** number */ toIndex, /** boolean */ value) {
  if (value) {
   this.m_set__int__int__void(fromIndex, toIndex);
  } else {
   this.m_clear__int__int__void(fromIndex, toIndex);
  }
 }
 /** @nodts @return {number} */
 m_size__int() {
  return Math.imul(this.f_array__java_util_BitSet_.length, 32);
 }
 /** @override @return {?string} */
 toString() {
  if (this.m_isEmpty__boolean()) {
   return '{}';
  }
  let sb = StringBuilder.$create__java_lang_String('{');
  let next = this.m_nextSetBit__int__int(0);
  sb.m_append__int__java_lang_StringBuilder(next);
  while ((next = this.m_nextSetBit__int__int(next + 1 | 0)) != (- 1 | 0)) {
   sb.m_append__java_lang_String__java_lang_StringBuilder(', ');
   sb.m_append__int__java_lang_StringBuilder(next);
  }
  sb.m_append__java_lang_String__java_lang_StringBuilder('}');
  return sb.toString();
 }
 /** @nodts */
 m_xor__java_util_BitSet__void(/** BitSet */ set) {
  if ($Equality.$same(this, set)) {
   this.m_clear__void();
   return;
  }
  BitSet.m_maybeGrowArrayToIndex__arrayOf_int__int__void(this.f_array__java_util_BitSet_, set.f_array__java_util_BitSet_.length - 1 | 0);
  for (let index = 0; index < set.f_array__java_util_BitSet_.length; index = index + 1 | 0) {
   let word = BitSet.m_wordAt__arrayOf_int__int__int(set.f_array__java_util_BitSet_, index);
   if (word != 0) {
    $Arrays.$set(this.f_array__java_util_BitSet_, index, BitSet.m_wordAt__arrayOf_int__int__int(this.f_array__java_util_BitSet_, index) ^ word);
   }
  }
 }
 /** @nodts @return {Array<number>} */
 m_toByteArray__arrayOf_byte() {
  let nbits = this.m_length__int();
  let nbytes = $Primitives.coerceDivision(nbits / Byte.f_SIZE__java_lang_Byte);
  if ($Primitives.coerceDivision(nbits % Byte.f_SIZE__java_lang_Byte) != 0) {
   nbytes = nbytes + 1 | 0;
  }
  let bytes = /**@type {!Array<number>}*/ ($Arrays.$create([nbytes], $$byte));
  let bitOffset = 0;
  for (let i = 0; i < nbytes; i = i + 1 | 0) {
   $Arrays.$set(bytes, i, BitSet.m_getByte__arrayOf_int__int__byte(this.f_array__java_util_BitSet_, bitOffset));
   bitOffset = bitOffset + Byte.f_SIZE__java_lang_Byte | 0;
  }
  return bytes;
 }
 /** @nodts @return {Array<!$Long>} */
 m_toLongArray__arrayOf_long() {
  let nbits = this.m_length__int();
  let nlongs = $Primitives.coerceDivision(nbits / Long.f_SIZE__java_lang_Long);
  if ($Primitives.coerceDivision(nbits % Long.f_SIZE__java_lang_Long) != 0) {
   nlongs = nlongs + 1 | 0;
  }
  let longs = /**@type {!Array<!$Long>}*/ ($Arrays.$create([nlongs], $$long));
  let bitOffset = 0;
  for (let i = 0; i < nlongs; i = i + 1 | 0) {
   $Arrays.$set(longs, i, BitSet.m_getLong__arrayOf_int__int__long(this.f_array__java_util_BitSet_, bitOffset));
   bitOffset = bitOffset + Long.f_SIZE__java_lang_Long | 0;
  }
  return longs;
 }
 /** @nodts @return {number} */
 static m_getByte__arrayOf_int__int__byte(/** Array<number> */ words, /** number */ bitIndex) {
  let wordIndex = BitSet.m_wordIndex__int__int(bitIndex);
  if (wordIndex >= words.length) {
   return 0;
  }
  let bitOffset = BitSet.m_bitOffset__int__int(bitIndex);
  let word = BitSet.m_wordAt__arrayOf_int__int__int(words, wordIndex);
  let b = word >>> bitOffset | 0;
  let leftBits = Byte.f_SIZE__java_lang_Byte - BitSet.f_BITS_PER_WORD__java_util_BitSet_ + bitOffset | 0;
  if (leftBits > 0 && (wordIndex + 1 | 0) < words.length) {
   word = BitSet.m_wordAt__arrayOf_int__int__int(words, wordIndex + 1 | 0);
   if (word != 0) {
    word &= ~(BitSet.f_WORD_MASK__java_util_BitSet_ << leftBits);
    word <<= Byte.f_SIZE__java_lang_Byte - leftBits | 0;
    b |= word;
   }
  }
  return $Primitives.narrowIntToByte(b & 255);
 }
 /** @nodts @return {number} */
 static m_getInt__arrayOf_int__int__int(/** Array<number> */ words, /** number */ bitIndex) {
  let b1 = BitSet.m_getByte__arrayOf_int__int__byte(words, bitIndex);
  let b2 = BitSet.m_getByte__arrayOf_int__int__byte(words, bitIndex + 8 | 0);
  let b3 = BitSet.m_getByte__arrayOf_int__int__byte(words, bitIndex + 16 | 0);
  let b4 = BitSet.m_getByte__arrayOf_int__int__byte(words, bitIndex + 24 | 0);
  return b1 & 255 | (b2 & 255) << 8 | (b3 & 255) << 16 | (b4 & 255) << 24;
 }
 /** @nodts @return {!$Long} */
 static m_getLong__arrayOf_int__int__long(/** Array<number> */ words, /** number */ bitIndex) {
  let low = BitSet.m_getInt__arrayOf_int__int__int(words, bitIndex);
  let high = BitSet.m_getInt__arrayOf_int__int__int(words, bitIndex + 32 | 0);
  return $LongUtils.fromBits(low, high);
 }
 /** @nodts @return {BitSet} */
 static m_valueOf__arrayOf_byte__java_util_BitSet(/** Array<number> */ words) {
  BitSet.$clinit();
  let len = words.length;
  while (len > 0 && words[len - 1 | 0] == 0) {
   len = len - 1 | 0;
  }
  let array = /**@type {!Array<number>}*/ ($Arrays.$create([Math.imul(len, Byte.f_SIZE__java_lang_Byte)], $$int));
  let bitIndex = 0;
  for (let i = 0; i < len; i = i + 1 | 0) {
   BitSet.m_addByte__arrayOf_int__byte__int__void(array, words[i], bitIndex);
   bitIndex = bitIndex + Byte.f_SIZE__java_lang_Byte | 0;
  }
  return BitSet.$create__arrayOf_int(array);
 }
 /** @nodts @return {BitSet} */
 static m_valueOf__arrayOf_long__java_util_BitSet(/** Array<!$Long> */ words) {
  BitSet.$clinit();
  let len = words.length;
  while (len > 0 && vmbootstrap_$LongUtils.equals(words[len - 1 | 0], $Long.fromInt(0))) {
   len = len - 1 | 0;
  }
  let array = /**@type {!Array<number>}*/ ($Arrays.$create([Math.imul(len, Long.f_SIZE__java_lang_Long)], $$int));
  let bitIndex = 0;
  for (let i = 0; i < len; i = i + 1 | 0) {
   BitSet.m_addLong__arrayOf_int__long__int__void(array, words[i], bitIndex);
   bitIndex = bitIndex + Long.f_SIZE__java_lang_Long | 0;
  }
  return BitSet.$create__arrayOf_int(array);
 }
 /** @nodts */
 static m_addByte__arrayOf_int__byte__int__void(/** Array<number> */ words, /** number */ bits, /** number */ bitIndex) {
  if (bits != 0) {
   let wordIndex = BitSet.m_wordIndex__int__int(bitIndex);
   let bitOffset = BitSet.m_bitOffset__int__int(bitIndex);
   let first = (bits & 255) << bitOffset & BitSet.f_WORD_MASK__java_util_BitSet_;
   if (first != 0) {
    $Arrays.$set(words, wordIndex, BitSet.m_wordAt__arrayOf_int__int__int(words, wordIndex) | first);
   }
   let second = bitOffset == 0 ? 0 : (bits & 255) >>> BitSet.f_BITS_PER_WORD__java_util_BitSet_ - bitOffset | 0;
   if (second != 0) {
    $Arrays.$set(words, wordIndex + 1 | 0, BitSet.m_wordAt__arrayOf_int__int__int(words, wordIndex + 1 | 0) | second);
   }
  }
 }
 /** @nodts */
 static m_addInt__arrayOf_int__int__int__void(/** Array<number> */ words, /** number */ bits, /** number */ bitIndex) {
  if (bits != 0) {
   BitSet.m_addByte__arrayOf_int__byte__int__void(words, $Primitives.narrowIntToByte(bits & 255), bitIndex);
   BitSet.m_addByte__arrayOf_int__byte__int__void(words, $Primitives.narrowIntToByte(bits >> 8 & 255), bitIndex + Byte.f_SIZE__java_lang_Byte | 0);
   BitSet.m_addByte__arrayOf_int__byte__int__void(words, $Primitives.narrowIntToByte(bits >> 16 & 255), bitIndex + Math.imul(2, Byte.f_SIZE__java_lang_Byte) | 0);
   BitSet.m_addByte__arrayOf_int__byte__int__void(words, $Primitives.narrowIntToByte(bits >> 24 & 255), bitIndex + Math.imul(3, Byte.f_SIZE__java_lang_Byte) | 0);
  }
 }
 /** @nodts */
 static m_addLong__arrayOf_int__long__int__void(/** Array<number> */ words, /** !$Long */ bits, /** number */ bitIndex) {
  if (vmbootstrap_$LongUtils.notEquals(bits, $Long.fromInt(0))) {
   let low = $Primitives.narrowLongToInt(bits);
   BitSet.m_addInt__arrayOf_int__int__int__void(words, low, bitIndex);
   let high = $Primitives.narrowLongToInt(vmbootstrap_$LongUtils.rightShiftUnsigned(bits, 32));
   BitSet.m_addInt__arrayOf_int__int__int__void(words, high, bitIndex + Integer.f_SIZE__java_lang_Integer | 0);
  }
 }
 /** @nodts */
 static $clinit() {
  BitSet.$clinit = () =>{};
  BitSet.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BitSet;
 }
 
 /** @nodts */
 static $loadModules() {
  Byte = goog.module.get('java.lang.Byte$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  vmbootstrap_$LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
/**@const {number} @nodts*/
BitSet.f_WORD_MASK__java_util_BitSet_ = 2147483647;
/**@const {number} @nodts*/
BitSet.f_BITS_PER_WORD__java_util_BitSet_ = 31;
Cloneable.$markImplementor(BitSet);
$Util.$setClassMetadata(BitSet, 'java.util.BitSet');

exports = BitSet;

//# sourceMappingURL=BitSet.js.map
