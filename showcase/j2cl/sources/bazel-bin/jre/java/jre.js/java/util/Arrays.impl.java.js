goog.module('java.util.Arrays$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Byte = goog.forwardDeclare('java.lang.Byte$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Float = goog.forwardDeclare('java.lang.Float$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Short = goog.forwardDeclare('java.lang.Short$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.Arrays.ArrayList$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let DoubleBinaryOperator = goog.forwardDeclare('java.util.function.DoubleBinaryOperator$impl');
let IntBinaryOperator = goog.forwardDeclare('java.util.function.IntBinaryOperator$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let IntToDoubleFunction = goog.forwardDeclare('java.util.function.IntToDoubleFunction$impl');
let IntToLongFunction = goog.forwardDeclare('java.util.function.IntToLongFunction$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let LongBinaryOperator = goog.forwardDeclare('java.util.function.LongBinaryOperator$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $$boolean = goog.forwardDeclare('vmbootstrap.primitives.$boolean$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $$float = goog.forwardDeclare('vmbootstrap.primitives.$float$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');
let $$short = goog.forwardDeclare('vmbootstrap.primitives.$short$impl');

class Arrays extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {List<T>} */
 static m_asList__arrayOf_java_lang_Object__java_util_List(/** Array<T> */ array) {
  Arrays.$clinit();
  return /**@type {!ArrayList<T>}*/ (ArrayList.$create__arrayOf_java_lang_Object(array));
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_byte__int__int__byte__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_byte__int__int__byte__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_byte__byte__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_byte__int__int__byte__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch0__arrayOf_byte__int__int__byte__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   if (midVal < key) {
    low = mid + 1 | 0;
   } else if (midVal > key) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_char__int__int__char__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_char__int__int__char__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_char__char__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_char__int__int__char__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch0__arrayOf_char__int__int__char__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   if (midVal < key) {
    low = mid + 1 | 0;
   } else if (midVal > key) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_double__int__int__double__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return ArrayHelper.m_binarySearch__arrayOf_double__int__int__double__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_double__double__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return ArrayHelper.m_binarySearch__arrayOf_double__int__int__double__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_float__int__int__float__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  return ArrayHelper.m_binarySearch__arrayOf_float__int__int__float__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_float__float__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return ArrayHelper.m_binarySearch__arrayOf_float__int__int__float__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_int__int__int__int__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_int__int__int__int__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_int__int__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_int__int__int__int__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch0__arrayOf_int__int__int__int__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   if (midVal < key) {
    low = mid + 1 | 0;
   } else if (midVal > key) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_long__int__int__long__int(/** Array<!$Long> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** !$Long */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_long__int__int__long__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_long__long__int(/** Array<!$Long> */ sortedArray, /** !$Long */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_long__int__int__long__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch0__arrayOf_long__int__int__long__int(/** Array<!$Long> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** !$Long */ key) {
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   if ($LongUtils.less(midVal, key)) {
    low = mid + 1 | 0;
   } else if ($LongUtils.greater(midVal, key)) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_java_lang_Object__int__int__java_lang_Object__int(/** Array<*> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** * */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch__arrayOf_java_lang_Object__int__int__java_lang_Object__java_util_Comparator__int(sortedArray, fromIndex, toIndex, key, null);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_java_lang_Object__java_lang_Object__int(/** Array<*> */ sortedArray, /** * */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch__arrayOf_java_lang_Object__java_lang_Object__java_util_Comparator__int(sortedArray, key, null);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_short__int__int__short__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_short__int__int__short__int(sortedArray, fromIndex, toIndex, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_short__short__int(/** Array<number> */ sortedArray, /** number */ key) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_short__int__int__short__int(sortedArray, 0, sortedArray.length, key);
 }
 /** @nodts @return {number} */
 static m_binarySearch0__arrayOf_short__int__int__short__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   if (midVal < key) {
    low = mid + 1 | 0;
   } else if (midVal > key) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @template T @return {number} */
 static m_binarySearch__arrayOf_java_lang_Object__int__int__java_lang_Object__java_util_Comparator__int(/** Array<T> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** T */ key, /** Comparator<?> */ comparator) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, sortedArray.length);
  return Arrays.m_binarySearch0__arrayOf_java_lang_Object__int__int__java_lang_Object__java_util_Comparator__int(sortedArray, fromIndex, toIndex, key, comparator);
 }
 /** @nodts @template T @return {number} */
 static m_binarySearch__arrayOf_java_lang_Object__java_lang_Object__java_util_Comparator__int(/** Array<T> */ sortedArray, /** T */ key, /** Comparator<?> */ c) {
  Arrays.$clinit();
  return Arrays.m_binarySearch0__arrayOf_java_lang_Object__int__int__java_lang_Object__java_util_Comparator__int(sortedArray, 0, sortedArray.length, key, c);
 }
 /** @nodts @template T @return {number} */
 static m_binarySearch0__arrayOf_java_lang_Object__int__int__java_lang_Object__java_util_Comparator__int(/** Array<T> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** T */ key, /** Comparator<?> */ comparator) {
  comparator = /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(comparator));
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   let compareResult = comparator.m_compare__java_lang_Object__java_lang_Object__int(midVal, key);
   if (compareResult < 0) {
    low = mid + 1 | 0;
   } else if (compareResult > 0) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {Array<boolean>} */
 static m_copyOf__arrayOf_boolean__int__arrayOf_boolean(/** Array<boolean> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<boolean>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$boolean, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_byte__int__arrayOf_byte(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$byte, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_char__int__arrayOf_char(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$char, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_double__int__arrayOf_double(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$double, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_float__int__arrayOf_float(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$float, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_int__int__arrayOf_int(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$int, 1));
 }
 /** @nodts @return {Array<!$Long>} */
 static m_copyOf__arrayOf_long__int__arrayOf_long(/** Array<!$Long> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<!$Long>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$long, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOf__arrayOf_short__int__arrayOf_short(/** Array<number> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), $$short, 1));
 }
 /** @nodts @template T @return {Array<T>} */
 static m_copyOf__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(/** Array<T> */ original, /** number */ newLength) {
  Arrays.$clinit();
  return /**@type {Array<T>}*/ ($Arrays.$castTo(Arrays.m_copyOfImpl__java_lang_Object__int__java_lang_Object(original, newLength), j_l_Object, 1));
 }
 /** @nodts @return {Array<boolean>} */
 static m_copyOfRange__arrayOf_boolean__int__int__arrayOf_boolean(/** Array<boolean> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<boolean>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$boolean, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_byte__int__int__arrayOf_byte(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$byte, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_char__int__int__arrayOf_char(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$char, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_double__int__int__arrayOf_double(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$double, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_float__int__int__arrayOf_float(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$float, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_int__int__int__arrayOf_int(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$int, 1));
 }
 /** @nodts @return {Array<!$Long>} */
 static m_copyOfRange__arrayOf_long__int__int__arrayOf_long(/** Array<!$Long> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<!$Long>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$long, 1));
 }
 /** @nodts @return {Array<number>} */
 static m_copyOfRange__arrayOf_short__int__int__arrayOf_short(/** Array<number> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<number>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), $$short, 1));
 }
 /** @nodts @template T @return {Array<T>} */
 static m_copyOfRange__arrayOf_java_lang_Object__int__int__arrayOf_java_lang_Object(/** Array<T> */ original, /** number */ from, /** number */ to) {
  Arrays.$clinit();
  return /**@type {Array<T>}*/ ($Arrays.$castTo(Arrays.m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(original, from, to), j_l_Object, 1));
 }
 /** @nodts @template T @return {T} */
 static m_copyOfImpl__java_lang_Object__int__java_lang_Object(/** T */ original, /** number */ newLength) {
  InternalPreconditions.m_checkArraySize__int__void(newLength);
  return ArrayHelper.m_clone__java_lang_Object__int__int__java_lang_Object(original, 0, newLength);
 }
 /** @nodts @template T @return {T} */
 static m_copyOfRangeImpl__java_lang_Object__int__int__java_lang_Object(/** T */ original, /** number */ from, /** number */ to) {
  Arrays.m_checkCopyOfRange__java_lang_Object__int__int__void(original, from, to);
  return ArrayHelper.m_clone__java_lang_Object__int__int__java_lang_Object(original, from, to);
 }
 /** @nodts */
 static m_checkCopyOfRange__java_lang_Object__int__int__void(/** * */ original, /** number */ from, /** number */ to) {
  if (InternalPreconditions.m_isApiChecked__boolean()) {
   InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(from <= to, from + ' > ' + to);
  }
  let len = ArrayHelper.m_getLength__java_lang_Object__int(original);
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(from, from, len);
 }
 /** @nodts @return {boolean} */
 static m_deepEquals__arrayOf_java_lang_Object__arrayOf_java_lang_Object__boolean(/** Array<*> */ a1, /** Array<*> */ a2) {
  Arrays.$clinit();
  if ($Equality.$same(a1, a2)) {
   return true;
  }
  if ($Equality.$same(a1, null) || $Equality.$same(a2, null)) {
   return false;
  }
  if (a1.length != a2.length) {
   return false;
  }
  for (let i = 0, n = a1.length; i < n; i = i + 1 | 0) {
   if (!Objects.m_deepEquals__java_lang_Object__java_lang_Object__boolean(a1[i], a2[i])) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {number} */
 static m_deepHashCode__arrayOf_java_lang_Object__int(/** Array<*> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let obj = $array[$index];
   {
    let /** number */ hash;
    if ($Arrays.$instanceIsOfType(obj, j_l_Object, 1)) {
     hash = Arrays.m_deepHashCode__arrayOf_java_lang_Object__int(/**@type {Array<*>}*/ ($Arrays.$castTo(obj, j_l_Object, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$boolean, 1)) {
     hash = Arrays.m_hashCode__arrayOf_boolean__int(/**@type {Array<boolean>}*/ ($Arrays.$castTo(obj, $$boolean, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$byte, 1)) {
     hash = Arrays.m_hashCode__arrayOf_byte__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$byte, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$char, 1)) {
     hash = Arrays.m_hashCode__arrayOf_char__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$char, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$short, 1)) {
     hash = Arrays.m_hashCode__arrayOf_short__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$short, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$int, 1)) {
     hash = Arrays.m_hashCode__arrayOf_int__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$int, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$long, 1)) {
     hash = Arrays.m_hashCode__arrayOf_long__int(/**@type {Array<!$Long>}*/ ($Arrays.$castTo(obj, $$long, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$float, 1)) {
     hash = Arrays.m_hashCode__arrayOf_float__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$float, 1)));
    } else if ($Arrays.$instanceIsOfType(obj, $$double, 1)) {
     hash = Arrays.m_hashCode__arrayOf_double__int(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$double, 1)));
    } else {
     hash = Objects.m_hashCode__java_lang_Object__int(obj);
    }
    hashCode = Math.imul(31, hashCode) + hash | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {?string} */
 static m_deepToString__arrayOf_java_lang_Object__java_lang_String(/** Array<*> */ a) {
  Arrays.$clinit();
  return Arrays.m_deepToString__arrayOf_java_lang_Object__java_util_Set__java_lang_String(a, /**@type {!HashSet<Array<*>>}*/ (HashSet.$create__()));
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_boolean__arrayOf_boolean__boolean(/** Array<boolean> */ array1, /** Array<boolean> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if (array1[i] != array2[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_byte__arrayOf_byte__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if (array1[i] != array2[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_char__arrayOf_char__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if (array1[i] != array2[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_double__arrayOf_double__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  return ArrayHelper.m_equals__arrayOf_double__arrayOf_double__boolean(array1, array2);
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_float__arrayOf_float__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  return ArrayHelper.m_equals__arrayOf_float__arrayOf_float__boolean(array1, array2);
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_int__arrayOf_int__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if (array1[i] != array2[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_long__arrayOf_long__boolean(/** Array<!$Long> */ array1, /** Array<!$Long> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if ($LongUtils.notEquals(array1[i], array2[i])) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_java_lang_Object__arrayOf_java_lang_Object__boolean(/** Array<*> */ array1, /** Array<*> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   let val1 = array1[i];
   let val2 = array2[i];
   if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(val1, val2)) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_short__arrayOf_short__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  Arrays.$clinit();
  if ($Equality.$same(array1, array2)) {
   return true;
  }
  if ($Equality.$same(array1, null) || $Equality.$same(array2, null)) {
   return false;
  }
  if (array1.length != array2.length) {
   return false;
  }
  for (let i = 0; i < array1.length; i = i + 1 | 0) {
   if (array1[i] != array2[i]) {
    return false;
   }
  }
  return true;
 }
 /** @nodts */
 static m_fill__arrayOf_boolean__boolean__void(/** Array<boolean> */ a, /** boolean */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_boolean__int__int__boolean__void(/** Array<boolean> */ a, /** number */ fromIndex, /** number */ toIndex, /** boolean */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_byte__byte__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_byte__int__int__byte__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_char__char__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_char__int__int__char__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_double__double__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_double__int__int__double__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_float__float__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_float__int__int__float__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_int__int__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_int__int__int__int__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_long__int__int__long__void(/** Array<!$Long> */ a, /** number */ fromIndex, /** number */ toIndex, /** !$Long */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_long__long__void(/** Array<!$Long> */ a, /** !$Long */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_java_lang_Object__int__int__java_lang_Object__void(/** Array<*> */ a, /** number */ fromIndex, /** number */ toIndex, /** * */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_java_lang_Object__java_lang_Object__void(/** Array<*> */ a, /** * */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts */
 static m_fill__arrayOf_short__int__int__short__void(/** Array<number> */ a, /** number */ fromIndex, /** number */ toIndex, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__int__int__void(a, val, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__arrayOf_short__short__void(/** Array<number> */ a, /** number */ val) {
  Arrays.$clinit();
  ArrayHelper.m_fill__java_lang_Object__java_lang_Object__void(a, val);
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_boolean__int(/** Array<boolean> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Boolean.m_hashCode__boolean__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_byte__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Byte.m_hashCode__byte__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_char__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Character.m_hashCode__char__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_double__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Double.m_hashCode__double__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_float__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Float.m_hashCode__float__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_int__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Integer.m_hashCode__int__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_long__int(/** Array<!$Long> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Long.m_hashCode__long__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_java_lang_Object__int(/** Array<*> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Objects.m_hashCode__java_lang_Object__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts @return {number} */
 static m_hashCode__arrayOf_short__int(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 0;
  }
  let hashCode = 1;
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let e = $array[$index];
   {
    hashCode = Math.imul(31, hashCode) + Short.m_hashCode__short__int(e) | 0;
   }
  }
  return hashCode;
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_double__java_util_function_DoubleBinaryOperator__void(/** Array<number> */ array, /** DoubleBinaryOperator */ op) {
  Arrays.$clinit();
  Arrays.m_parallelPrefix0__arrayOf_double__int__int__java_util_function_DoubleBinaryOperator__void(array, 0, array.length, op);
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_double__int__int__java_util_function_DoubleBinaryOperator__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** DoubleBinaryOperator */ op) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  Arrays.m_parallelPrefix0__arrayOf_double__int__int__java_util_function_DoubleBinaryOperator__void(array, fromIndex, toIndex, op);
 }
 /** @nodts */
 static m_parallelPrefix0__arrayOf_double__int__int__java_util_function_DoubleBinaryOperator__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** DoubleBinaryOperator */ op) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(op);
  let acc = array[fromIndex];
  for (let i = fromIndex + 1 | 0; i < toIndex; i = i + 1 | 0) {
   $Arrays.$set(array, i, acc = op.m_applyAsDouble__double__double__double(acc, array[i]));
  }
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_int__java_util_function_IntBinaryOperator__void(/** Array<number> */ array, /** IntBinaryOperator */ op) {
  Arrays.$clinit();
  Arrays.m_parallelPrefix0__arrayOf_int__int__int__java_util_function_IntBinaryOperator__void(array, 0, array.length, op);
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_int__int__int__java_util_function_IntBinaryOperator__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** IntBinaryOperator */ op) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  Arrays.m_parallelPrefix0__arrayOf_int__int__int__java_util_function_IntBinaryOperator__void(array, fromIndex, toIndex, op);
 }
 /** @nodts */
 static m_parallelPrefix0__arrayOf_int__int__int__java_util_function_IntBinaryOperator__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** IntBinaryOperator */ op) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(op);
  let acc = array[fromIndex];
  for (let i = fromIndex + 1 | 0; i < toIndex; i = i + 1 | 0) {
   $Arrays.$set(array, i, acc = op.m_applyAsInt__int__int__int(acc, array[i]));
  }
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_long__java_util_function_LongBinaryOperator__void(/** Array<!$Long> */ array, /** LongBinaryOperator */ op) {
  Arrays.$clinit();
  Arrays.m_parallelPrefix0__arrayOf_long__int__int__java_util_function_LongBinaryOperator__void(array, 0, array.length, op);
 }
 /** @nodts */
 static m_parallelPrefix__arrayOf_long__int__int__java_util_function_LongBinaryOperator__void(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex, /** LongBinaryOperator */ op) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  Arrays.m_parallelPrefix0__arrayOf_long__int__int__java_util_function_LongBinaryOperator__void(array, fromIndex, toIndex, op);
 }
 /** @nodts */
 static m_parallelPrefix0__arrayOf_long__int__int__java_util_function_LongBinaryOperator__void(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex, /** LongBinaryOperator */ op) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(op);
  let acc = array[fromIndex];
  for (let i = fromIndex + 1 | 0; i < toIndex; i = i + 1 | 0) {
   $Arrays.$set(array, i, acc = op.m_applyAsLong__long__long__long(acc, array[i]));
  }
 }
 /** @nodts @template T */
 static m_parallelPrefix__arrayOf_java_lang_Object__java_util_function_BinaryOperator__void(/** Array<T> */ array, /** BinaryOperator<T> */ op) {
  Arrays.$clinit();
  Arrays.m_parallelPrefix0__arrayOf_java_lang_Object__int__int__java_util_function_BinaryOperator__void(array, 0, array.length, op);
 }
 /** @nodts @template T */
 static m_parallelPrefix__arrayOf_java_lang_Object__int__int__java_util_function_BinaryOperator__void(/** Array<T> */ array, /** number */ fromIndex, /** number */ toIndex, /** BinaryOperator<T> */ op) {
  Arrays.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  Arrays.m_parallelPrefix0__arrayOf_java_lang_Object__int__int__java_util_function_BinaryOperator__void(array, fromIndex, toIndex, op);
 }
 /** @nodts @template T */
 static m_parallelPrefix0__arrayOf_java_lang_Object__int__int__java_util_function_BinaryOperator__void(/** Array<T> */ array, /** number */ fromIndex, /** number */ toIndex, /** BinaryOperator<T> */ op) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(op);
  let acc = array[fromIndex];
  for (let i = fromIndex + 1 | 0; i < toIndex; i = i + 1 | 0) {
   $Arrays.$set(array, i, acc = op.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(acc, array[i]));
  }
 }
 /** @nodts @template T */
 static m_setAll__arrayOf_java_lang_Object__java_util_function_IntFunction__void(/** Array<T> */ array, /** IntFunction<?> */ generator) {
  Arrays.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(generator);
  for (let i = 0; i < array.length; i = i + 1 | 0) {
   $Arrays.$set(array, i, generator.m_apply__int__java_lang_Object(i));
  }
 }
 /** @nodts */
 static m_setAll__arrayOf_double__java_util_function_IntToDoubleFunction__void(/** Array<number> */ array, /** IntToDoubleFunction */ generator) {
  Arrays.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(generator);
  for (let i = 0; i < array.length; i = i + 1 | 0) {
   $Arrays.$set(array, i, generator.m_applyAsDouble__int__double(i));
  }
 }
 /** @nodts */
 static m_setAll__arrayOf_int__java_util_function_IntUnaryOperator__void(/** Array<number> */ array, /** IntUnaryOperator */ generator) {
  Arrays.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(generator);
  for (let i = 0; i < array.length; i = i + 1 | 0) {
   $Arrays.$set(array, i, generator.m_applyAsInt__int__int(i));
  }
 }
 /** @nodts */
 static m_setAll__arrayOf_long__java_util_function_IntToLongFunction__void(/** Array<!$Long> */ array, /** IntToLongFunction */ generator) {
  Arrays.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(generator);
  for (let i = 0; i < array.length; i = i + 1 | 0) {
   $Arrays.$set(array, i, generator.m_applyAsLong__int__long(i));
  }
 }
 /** @nodts @template T */
 static m_parallelSetAll__arrayOf_java_lang_Object__java_util_function_IntFunction__void(/** Array<T> */ array, /** IntFunction<?> */ generator) {
  Arrays.$clinit();
  Arrays.m_setAll__arrayOf_java_lang_Object__java_util_function_IntFunction__void(array, generator);
 }
 /** @nodts */
 static m_parallelSetAll__arrayOf_double__java_util_function_IntToDoubleFunction__void(/** Array<number> */ array, /** IntToDoubleFunction */ generator) {
  Arrays.$clinit();
  Arrays.m_setAll__arrayOf_double__java_util_function_IntToDoubleFunction__void(array, generator);
 }
 /** @nodts */
 static m_parallelSetAll__arrayOf_int__java_util_function_IntUnaryOperator__void(/** Array<number> */ array, /** IntUnaryOperator */ generator) {
  Arrays.$clinit();
  Arrays.m_setAll__arrayOf_int__java_util_function_IntUnaryOperator__void(array, generator);
 }
 /** @nodts */
 static m_parallelSetAll__arrayOf_long__java_util_function_IntToLongFunction__void(/** Array<!$Long> */ array, /** IntToLongFunction */ generator) {
  Arrays.$clinit();
  Arrays.m_setAll__arrayOf_long__java_util_function_IntToLongFunction__void(array, generator);
 }
 /** @nodts */
 static m_sort__arrayOf_byte__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_byte__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_char__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_char__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_double__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_double__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_double__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_double__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_float__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_float__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_float__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_float__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_short__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_short__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_int__void(/** Array<number> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_int__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_long__void(/** Array<!$Long> */ array) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_long__void(array);
 }
 /** @nodts */
 static m_sort__arrayOf_long__int__int__void(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  ArrayHelper.m_sortPrimitive__arrayOf_long__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_sort__arrayOf_java_lang_Object__void(/** Array<*> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(array, null);
 }
 /** @nodts */
 static m_sort__arrayOf_java_lang_Object__int__int__void(/** Array<*> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(array, fromIndex, toIndex, null);
 }
 /** @nodts @template T */
 static m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(/** Array<T> */ x, /** Comparator<?> */ c) {
  Arrays.$clinit();
  ArrayHelper.m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(x, /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(c)));
 }
 /** @nodts @template T */
 static m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ x, /** number */ fromIndex, /** number */ toIndex, /** Comparator<?> */ c) {
  Arrays.$clinit();
  ArrayHelper.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(x, fromIndex, toIndex, /**@type {Comparator<*>}*/ (Comparators.m_nullToNaturalOrder__java_util_Comparator__java_util_Comparator(c)));
 }
 /** @nodts */
 static m_parallelSort__arrayOf_byte__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_byte__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_byte__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_byte__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_char__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_char__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_char__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_char__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_double__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_double__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_double__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_double__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_float__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_float__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_float__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_float__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_int__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_int__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_int__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_int__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_long__void(/** Array<!$Long> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_long__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_long__int__int__void(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_long__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_short__void(/** Array<number> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_short__void(array);
 }
 /** @nodts */
 static m_parallelSort__arrayOf_short__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_short__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts @template T */
 static m_parallelSort__arrayOf_java_lang_Comparable__void(/** Array<T> */ array) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__void(array);
 }
 /** @nodts @template T */
 static m_parallelSort__arrayOf_java_lang_Object__java_util_Comparator__void(/** Array<T> */ array, /** Comparator<?> */ c) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(array, c);
 }
 /** @nodts @template T */
 static m_parallelSort__arrayOf_java_lang_Comparable__int__int__void(/** Array<T> */ array, /** number */ fromIndex, /** number */ toIndex) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__int__int__void(array, fromIndex, toIndex);
 }
 /** @nodts @template T */
 static m_parallelSort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ array, /** number */ fromIndex, /** number */ toIndex, /** Comparator<?> */ c) {
  Arrays.$clinit();
  Arrays.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(array, fromIndex, toIndex, c);
 }
 /** @nodts @return {OfDouble} */
 static m_spliterator__arrayOf_double__java_util_Spliterator_OfDouble(/** Array<number> */ array) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_double__int__java_util_Spliterator_OfDouble(array, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @return {OfDouble} */
 static m_spliterator__arrayOf_double__int__int__java_util_Spliterator_OfDouble(/** Array<number> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_double__int__int__int__java_util_Spliterator_OfDouble(array, startInclusive, endExclusive, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @return {OfInt} */
 static m_spliterator__arrayOf_int__java_util_Spliterator_OfInt(/** Array<number> */ array) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_int__int__java_util_Spliterator_OfInt(array, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @return {OfInt} */
 static m_spliterator__arrayOf_int__int__int__java_util_Spliterator_OfInt(/** Array<number> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_int__int__int__int__java_util_Spliterator_OfInt(array, startInclusive, endExclusive, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @return {OfLong} */
 static m_spliterator__arrayOf_long__java_util_Spliterator_OfLong(/** Array<!$Long> */ array) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_long__int__java_util_Spliterator_OfLong(array, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @return {OfLong} */
 static m_spliterator__arrayOf_long__int__int__java_util_Spliterator_OfLong(/** Array<!$Long> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return Spliterators.m_spliterator__arrayOf_long__int__int__int__java_util_Spliterator_OfLong(array, startInclusive, endExclusive, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__arrayOf_java_lang_Object__java_util_Spliterator(/** Array<T> */ array) {
  Arrays.$clinit();
  return /**@type {Spliterator<T>}*/ (Spliterators.m_spliterator__arrayOf_java_lang_Object__int__java_util_Spliterator(array, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator));
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__arrayOf_java_lang_Object__int__int__java_util_Spliterator(/** Array<T> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return /**@type {Spliterator<T>}*/ (Spliterators.m_spliterator__arrayOf_java_lang_Object__int__int__int__java_util_Spliterator(array, startInclusive, endExclusive, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator));
 }
 /** @nodts @return {DoubleStream} */
 static m_stream__arrayOf_double__java_util_stream_DoubleStream(/** Array<number> */ array) {
  Arrays.$clinit();
  return Arrays.m_stream__arrayOf_double__int__int__java_util_stream_DoubleStream(array, 0, array.length);
 }
 /** @nodts @return {DoubleStream} */
 static m_stream__arrayOf_double__int__int__java_util_stream_DoubleStream(/** Array<number> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return StreamSupport.m_doubleStream__java_util_Spliterator_OfDouble__boolean__java_util_stream_DoubleStream(Arrays.m_spliterator__arrayOf_double__int__int__java_util_Spliterator_OfDouble(array, startInclusive, endExclusive), false);
 }
 /** @nodts @return {IntStream} */
 static m_stream__arrayOf_int__java_util_stream_IntStream(/** Array<number> */ array) {
  Arrays.$clinit();
  return Arrays.m_stream__arrayOf_int__int__int__java_util_stream_IntStream(array, 0, array.length);
 }
 /** @nodts @return {IntStream} */
 static m_stream__arrayOf_int__int__int__java_util_stream_IntStream(/** Array<number> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return StreamSupport.m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(Arrays.m_spliterator__arrayOf_int__int__int__java_util_Spliterator_OfInt(array, startInclusive, endExclusive), false);
 }
 /** @nodts @return {LongStream} */
 static m_stream__arrayOf_long__java_util_stream_LongStream(/** Array<!$Long> */ array) {
  Arrays.$clinit();
  return Arrays.m_stream__arrayOf_long__int__int__java_util_stream_LongStream(array, 0, array.length);
 }
 /** @nodts @return {LongStream} */
 static m_stream__arrayOf_long__int__int__java_util_stream_LongStream(/** Array<!$Long> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return StreamSupport.m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(Arrays.m_spliterator__arrayOf_long__int__int__java_util_Spliterator_OfLong(array, startInclusive, endExclusive), false);
 }
 /** @nodts @template T @return {Stream<T>} */
 static m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(/** Array<T> */ array) {
  Arrays.$clinit();
  return /**@type {Stream<T>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__int__int__java_util_stream_Stream(array, 0, array.length));
 }
 /** @nodts @template T @return {Stream<T>} */
 static m_stream__arrayOf_java_lang_Object__int__int__java_util_stream_Stream(/** Array<T> */ array, /** number */ startInclusive, /** number */ endExclusive) {
  Arrays.$clinit();
  return /**@type {Stream<T>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<T>}*/ (Arrays.m_spliterator__arrayOf_java_lang_Object__int__int__java_util_Spliterator(array, startInclusive, endExclusive)), false));
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_boolean__java_lang_String(/** Array<boolean> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__boolean__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_byte__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__int__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_char__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__char__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_double__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__double__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_float__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__float__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_int__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__int__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_long__java_lang_String(/** Array<!$Long> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__long__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_java_lang_Object__java_lang_String(/** Array<*> */ x) {
  Arrays.$clinit();
  if ($Equality.$same(x, null)) {
   return 'null';
  }
  return $Objects.m_toString__java_lang_Object__java_lang_String(/**@type {List<*>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(x)));
 }
 /** @nodts @return {?string} */
 static m_toString__arrayOf_short__java_lang_String(/** Array<number> */ a) {
  Arrays.$clinit();
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__int__java_lang_String(element));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_deepToString__arrayOf_java_lang_Object__java_util_Set__java_lang_String(/** Array<*> */ a, /** Set<Array<*>> */ arraysIveSeen) {
  if ($Equality.$same(a, null)) {
   return 'null';
  }
  if (!arraysIveSeen.add(a)) {
   return '[...]';
  }
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $array = a, $index = 0; $index < $array.length; $index++) {
   let obj = $array[$index];
   {
    if (!$Equality.$same(obj, null) && $Objects.m_getClass__java_lang_Object__java_lang_Class(obj).m_isArray__boolean()) {
     if ($Arrays.$instanceIsOfType(obj, j_l_Object, 1)) {
      if (arraysIveSeen.contains(obj)) {
       joiner.m_add__java_lang_CharSequence__java_util_StringJoiner('[...]');
      } else {
       let objArray = /**@type {Array<*>}*/ ($Arrays.$castTo(obj, j_l_Object, 1));
       let tempSet = /**@type {!HashSet<Array<*>>}*/ (HashSet.$create__java_util_Collection(arraysIveSeen));
       joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_deepToString__arrayOf_java_lang_Object__java_util_Set__java_lang_String(objArray, tempSet));
      }
     } else if ($Arrays.$instanceIsOfType(obj, $$boolean, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_boolean__java_lang_String(/**@type {Array<boolean>}*/ ($Arrays.$castTo(obj, $$boolean, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$byte, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_byte__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$byte, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$char, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_char__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$char, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$short, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_short__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$short, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$int, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_int__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$int, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$long, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_long__java_lang_String(/**@type {Array<!$Long>}*/ ($Arrays.$castTo(obj, $$long, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$float, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_float__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$float, 1))));
     } else if ($Arrays.$instanceIsOfType(obj, $$double, 1)) {
      joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(Arrays.m_toString__arrayOf_double__java_lang_String(/**@type {Array<number>}*/ ($Arrays.$castTo(obj, $$double, 1))));
     } else {
      $Asserts.$assertWithMessage(false, 'Unexpected array type: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($Objects.m_getClass__java_lang_Object__java_lang_Class(obj).m_getName__java_lang_String()));
     }
    } else {
     joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__java_lang_Object__java_lang_String(obj));
    }
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {!Arrays} */
 static $create__() {
  let $instance = new Arrays();
  $instance.$ctor__java_util_Arrays__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Arrays__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Arrays.$clinit = () =>{};
  Arrays.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Arrays;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Byte = goog.module.get('java.lang.Byte$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Float = goog.module.get('java.lang.Float$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  Short = goog.module.get('java.lang.Short$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.Arrays.ArrayList$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $$boolean = goog.module.get('vmbootstrap.primitives.$boolean$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $$float = goog.module.get('vmbootstrap.primitives.$float$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
  $$short = goog.module.get('vmbootstrap.primitives.$short$impl');
 }
}
$Util.$setClassMetadata(Arrays, 'java.util.Arrays');

exports = Arrays;

//# sourceMappingURL=Arrays.js.map
