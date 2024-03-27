goog.module('javaemul.internal.ArrayHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let ArrayStamper = goog.forwardDeclare('javaemul.internal.ArrayStamper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let MergeSorter = goog.forwardDeclare('javaemul.internal.MergeSorter$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class ArrayHelper extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {T} */
 static m_clone__java_lang_Object__java_lang_Object(/** T */ array) {
  ArrayHelper.$clinit();
  let result = ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).slice();
  return ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__java_lang_Object__java_lang_Object(JsUtils.uncheckedCast(result), array);
 }
 /** @nodts @template T @return {T} */
 static m_clone__java_lang_Object__int__int__java_lang_Object(/** T */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  let result = ArrayHelper.m_unsafeClone__java_lang_Object__int__int__arrayOf_java_lang_Object(array, fromIndex, toIndex);
  let length = result.length;
  let requestedLength = toIndex - fromIndex | 0;
  if (requestedLength > length) {
   let initialValue = $Arrays.$getElementInitialValue(array);
   if ($Equality.$same(initialValue, null)) {
    ArrayHelper.m_setLength__java_lang_Object__int__void(result, requestedLength);
   } else {
    for (let i = length; i < requestedLength; i = i + 1 | 0) {
     $Arrays.$set(result, i, initialValue);
    }
   }
  }
  return ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__java_lang_Object__java_lang_Object(JsUtils.uncheckedCast(result), array);
 }
 /** @nodts @return {Array<*>} */
 static m_unsafeClone__java_lang_Object__int__int__arrayOf_java_lang_Object(/** * */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  return ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).slice(fromIndex, toIndex);
 }
 /** @nodts @template T @return {Array<T>} */
 static m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(/** Array<T> */ array, /** number */ length) {
  ArrayHelper.$clinit();
  return ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__arrayOf_java_lang_Object__arrayOf_java_lang_Object(new Array(length), array);
 }
 /** @nodts @return {number} */
 static m_getLength__java_lang_Object__int(/** * */ array) {
  ArrayHelper.$clinit();
  return ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).length;
 }
 /** @nodts */
 static m_setLength__java_lang_Object__int__void(/** * */ array, /** number */ length) {
  ArrayHelper.$clinit();
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).length = length;
 }
 /** @nodts */
 static m_push__java_lang_Object__java_lang_Object__void(/** * */ array, /** * */ o) {
  ArrayHelper.$clinit();
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).push(o);
 }
 /** @nodts */
 static m_fill__java_lang_Object__java_lang_Object__int__int__void(/** * */ array, /** * */ value, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, ArrayHelper.m_getLength__java_lang_Object__int(array));
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).fill(value, fromIndex, toIndex);
 }
 /** @nodts */
 static m_fill__java_lang_Object__java_lang_Object__void(/** * */ array, /** * */ value) {
  ArrayHelper.$clinit();
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).fill(value);
 }
 /** @nodts @template T @return {T} */
 static m_setAt__arrayOf_java_lang_Object__int__java_lang_Object__java_lang_Object(/** Array<T> */ array, /** number */ index, /** T */ value) {
  ArrayHelper.$clinit();
  let originalValue = array[index];
  $Arrays.$set(array, index, value);
  return originalValue;
 }
 /** @nodts */
 static m_removeFrom__arrayOf_java_lang_Object__int__int__void(/** Array<*> */ array, /** number */ index, /** number */ deleteCount) {
  ArrayHelper.$clinit();
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).splice(index, deleteCount);
 }
 /** @nodts */
 static m_insertTo__arrayOf_java_lang_Object__int__java_lang_Object__void(/** Array<*> */ array, /** number */ index, /** * */ value) {
  ArrayHelper.$clinit();
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).splice(index, 0, value);
 }
 /** @nodts */
 static m_insertTo__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__void(/** Array<*> */ array, /** number */ insertIndex, /** Array<*> */ values) {
  ArrayHelper.$clinit();
  let newLength = array.length + values.length | 0;
  ArrayHelper.m_setLength__java_lang_Object__int__void(array, newLength);
  let insertEndIndex = insertIndex + values.length | 0;
  ArrayHelper.m_copy__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__int__int__void(array, insertIndex, array, insertEndIndex, newLength - insertEndIndex | 0);
  ArrayHelper.m_copy__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__int__int__void(values, 0, array, insertIndex, values.length);
 }
 /** @nodts */
 static m_copy__java_lang_Object__int__java_lang_Object__int__int__void(/** * */ array, /** number */ srcOfs, /** * */ dest, /** number */ destOfs, /** number */ len) {
  ArrayHelper.$clinit();
  ArrayHelper.m_copy__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__int__int__void(/**@type {Array<*>}*/ (JsUtils.uncheckedCast(array)), srcOfs, /**@type {Array<*>}*/ (JsUtils.uncheckedCast(dest)), destOfs, len);
 }
 /** @nodts */
 static m_copy__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object__int__int__void(/** Array<*> */ src, /** number */ srcOfs, /** Array<*> */ dest, /** number */ destOfs, /** number */ len) {
  if (len == 0) {
   return;
  }
  if ($Equality.$same(src, dest) && srcOfs < destOfs) {
   srcOfs = srcOfs + len | 0;
   for (let destEnd = destOfs + len | 0; destEnd > destOfs; ) {
    $Arrays.$set(dest, destEnd = destEnd - 1 | 0, src[srcOfs = srcOfs - 1 | 0]);
   }
  } else {
   for (let destEnd_1 = destOfs + len | 0; destOfs < destEnd_1; ) {
    let /** number */ $value, /** number */ $value_1;
    $Arrays.$set(dest, ($value = destOfs, destOfs = destOfs + 1 | 0, $value), src[($value_1 = srcOfs, srcOfs = srcOfs + 1 | 0, $value_1)]);
   }
  }
 }
 /** @nodts @template T @return {T} */
 static m_concat__java_lang_Object__java_lang_Object__java_lang_Object(/** T */ a, /** T */ b) {
  ArrayHelper.$clinit();
  let result = ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(a).slice();
  ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__java_lang_Object__java_lang_Object(result, a);
  ArrayHelper.m_copy__java_lang_Object__int__java_lang_Object__int__int__void(b, 0, result, ArrayHelper.m_getLength__java_lang_Object__int(a), ArrayHelper.m_getLength__java_lang_Object__int(b));
  return JsUtils.uncheckedCast(result);
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_double__arrayOf_double__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  ArrayHelper.$clinit();
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
   if (!Double.m_equals__java_lang_Double__java_lang_Object__boolean(/**@type {number}*/ ($Casts.$to(array1[i], Double)), array2[i])) {
    return false;
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_equals__arrayOf_float__arrayOf_float__boolean(/** Array<number> */ array1, /** Array<number> */ array2) {
  ArrayHelper.$clinit();
  return ArrayHelper.m_equals__arrayOf_double__arrayOf_double__boolean(/**@type {Array<number>}*/ (JsUtils.uncheckedCast(array1)), /**@type {Array<number>}*/ (JsUtils.uncheckedCast(array2)));
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_double__int__int__double__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  ArrayHelper.$clinit();
  let low = fromIndex;
  let high = toIndex - 1 | 0;
  while (low <= high) {
   let mid = low + ((high - low | 0) >> 1) | 0;
   let midVal = sortedArray[mid];
   let cmp = Double.m_compare__double__double__int(midVal, key);
   if (cmp < 0) {
    low = mid + 1 | 0;
   } else if (cmp > 0) {
    high = mid - 1 | 0;
   } else {
    return mid;
   }
  }
  return - low - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_binarySearch__arrayOf_float__int__int__float__int(/** Array<number> */ sortedArray, /** number */ fromIndex, /** number */ toIndex, /** number */ key) {
  ArrayHelper.$clinit();
  return ArrayHelper.m_binarySearch__arrayOf_double__int__int__double__int(/**@type {Array<number>}*/ (JsUtils.uncheckedCast(sortedArray)), fromIndex, toIndex, key);
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_float__void(/** Array<number> */ array) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(array, ArrayHelper.m_getDoubleComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_double__void(/** Array<number> */ array) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(array, ArrayHelper.m_getDoubleComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_long__void(/** Array<!$Long> */ array) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(array, ArrayHelper.m_getLongComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__java_lang_Object__void(/** * */ array) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(array, ArrayHelper.m_getIntComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_float__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__javaemul_internal_ArrayHelper_CompareFunction__void(array, fromIndex, toIndex, ArrayHelper.m_getDoubleComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_double__int__int__void(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__javaemul_internal_ArrayHelper_CompareFunction__void(array, fromIndex, toIndex, ArrayHelper.m_getDoubleComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__arrayOf_long__int__int__void(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__javaemul_internal_ArrayHelper_CompareFunction__void(array, fromIndex, toIndex, ArrayHelper.m_getLongComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__java_lang_Object__int__int__void(/** * */ array, /** number */ fromIndex, /** number */ toIndex) {
  ArrayHelper.$clinit();
  ArrayHelper.m_sortPrimitive__java_lang_Object__int__int__javaemul_internal_ArrayHelper_CompareFunction__void(array, fromIndex, toIndex, ArrayHelper.m_getIntComparator__javaemul_internal_ArrayHelper_CompareFunction());
 }
 /** @nodts */
 static m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(/** * */ array, /** ?function(*, *):number */ fn) {
  ArrayHelper.m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(array).sort(fn);
 }
 /** @nodts */
 static m_sortPrimitive__java_lang_Object__int__int__javaemul_internal_ArrayHelper_CompareFunction__void(/** * */ array, /** number */ fromIndex, /** number */ toIndex, /** ?function(*, *):number */ fn) {
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, ArrayHelper.m_getLength__java_lang_Object__int(array));
  let temp = ArrayHelper.m_unsafeClone__java_lang_Object__int__int__arrayOf_java_lang_Object(array, fromIndex, toIndex);
  ArrayHelper.m_sortPrimitive__java_lang_Object__javaemul_internal_ArrayHelper_CompareFunction__void(temp, fn);
  ArrayHelper.m_copy__java_lang_Object__int__java_lang_Object__int__int__void(temp, 0, array, fromIndex, toIndex - fromIndex | 0);
 }
 /** @nodts @template T */
 static m_sort__arrayOf_java_lang_Object__java_util_Comparator__void(/** Array<T> */ array, /** Comparator<?> */ c) {
  ArrayHelper.$clinit();
  MergeSorter.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(array, 0, array.length, c);
 }
 /** @nodts @template T */
 static m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ array, /** number */ fromIndex, /** number */ toIndex, /** Comparator<?> */ c) {
  ArrayHelper.$clinit();
  InternalPreconditions.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  MergeSorter.m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(array, fromIndex, toIndex, c);
 }
 /** @nodts @return {?function(*, *):number} */
 static m_getIntComparator__javaemul_internal_ArrayHelper_CompareFunction() {
  return /**@type {?function(*, *):number}*/ (JsUtils.uncheckedCast(/**@type {function(number, number):number}*/ ((/** number */ a, /** number */ b) =>{
   return a - b;
  })));
 }
 /** @nodts @return {?function(*, *):number} */
 static m_getDoubleComparator__javaemul_internal_ArrayHelper_CompareFunction() {
  return /**@type {?function(*, *):number}*/ (JsUtils.uncheckedCast(/**@type {?function(number, number):number}*/ ((/** number */ arg0, /** number */ arg1) =>{
   return Double.m_compare__double__double__int(arg0, arg1);
  })));
 }
 /** @nodts @return {?function(*, *):number} */
 static m_getLongComparator__javaemul_internal_ArrayHelper_CompareFunction() {
  return /**@type {?function(*, *):number}*/ (JsUtils.uncheckedCast(/**@type {?function(!$Long, !$Long):number}*/ ((/** !$Long */ arg0, /** !$Long */ arg1) =>{
   return Long.m_compare__long__long__int(arg0, arg1);
  })));
 }
 /** @nodts @return {Array} */
 static m_asNativeArray__java_lang_Object__javaemul_internal_ArrayHelper_NativeArray(/** * */ array) {
  return /**@type {Array}*/ (JsUtils.uncheckedCast(array));
 }
 /** @nodts @return {!ArrayHelper} */
 static $create__() {
  let $instance = new ArrayHelper();
  $instance.$ctor__javaemul_internal_ArrayHelper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_ArrayHelper__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  ArrayHelper.$clinit = () =>{};
  ArrayHelper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayHelper;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Long = goog.module.get('java.lang.Long$impl');
  ArrayStamper = goog.module.get('javaemul.internal.ArrayStamper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  MergeSorter = goog.module.get('javaemul.internal.MergeSorter$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
ArrayHelper.f_ARRAY_PROCESS_BATCH_SIZE__javaemul_internal_ArrayHelper = 10000;
$Util.$setClassMetadata(ArrayHelper, 'javaemul.internal.ArrayHelper');

exports = ArrayHelper;

//# sourceMappingURL=ArrayHelper.js.map
