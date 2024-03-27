goog.module('javaemul.internal.MergeSorter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class MergeSorter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T */
 static m_sort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ x, /** number */ fromIndex, /** number */ toIndex, /** Comparator<?> */ comp) {
  MergeSorter.$clinit();
  let temp = /**@type {Array<T>}*/ (ArrayHelper.m_unsafeClone__java_lang_Object__int__int__arrayOf_java_lang_Object(x, fromIndex, toIndex));
  MergeSorter.m_mergeSort__arrayOf_java_lang_Object__arrayOf_java_lang_Object__int__int__int__java_util_Comparator__void(temp, x, fromIndex, toIndex, - fromIndex | 0, comp);
 }
 /** @nodts @template T */
 static m_mergeSort__arrayOf_java_lang_Object__arrayOf_java_lang_Object__int__int__int__java_util_Comparator__void(/** Array<T> */ temp, /** Array<T> */ array, /** number */ low, /** number */ high, /** number */ ofs, /** Comparator<?> */ comp) {
  let length = high - low | 0;
  if (length < 7) {
   MergeSorter.m_insertionSort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(array, low, high, comp);
   return;
  }
  let tempLow = low + ofs | 0;
  let tempHigh = high + ofs | 0;
  let tempMid = tempLow + ((tempHigh - tempLow | 0) >> 1) | 0;
  MergeSorter.m_mergeSort__arrayOf_java_lang_Object__arrayOf_java_lang_Object__int__int__int__java_util_Comparator__void(array, temp, tempLow, tempMid, - ofs | 0, comp);
  MergeSorter.m_mergeSort__arrayOf_java_lang_Object__arrayOf_java_lang_Object__int__int__int__java_util_Comparator__void(array, temp, tempMid, tempHigh, - ofs | 0, comp);
  if (comp.m_compare__java_lang_Object__java_lang_Object__int(temp[tempMid - 1 | 0], temp[tempMid]) <= 0) {
   while (low < high) {
    let /** number */ $value, /** number */ $value_1;
    $Arrays.$set(array, ($value = low, low = low + 1 | 0, $value), temp[($value_1 = tempLow, tempLow = tempLow + 1 | 0, $value_1)]);
   }
   return;
  }
  MergeSorter.m_merge__arrayOf_java_lang_Object__int__int__int__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
 }
 /** @nodts @template T */
 static m_insertionSort__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ array, /** number */ low, /** number */ high, /** Comparator<?> */ comp) {
  for (let i = low + 1 | 0; i < high; i = i + 1 | 0) {
   for (let j = i; j > low && comp.m_compare__java_lang_Object__java_lang_Object__int(array[j - 1 | 0], array[j]) > 0; j = j - 1 | 0) {
    let t = array[j];
    $Arrays.$set(array, j, array[j - 1 | 0]);
    $Arrays.$set(array, j - 1 | 0, t);
   }
  }
 }
 /** @nodts @template T */
 static m_merge__arrayOf_java_lang_Object__int__int__int__arrayOf_java_lang_Object__int__int__java_util_Comparator__void(/** Array<T> */ src, /** number */ srcLow, /** number */ srcMid, /** number */ srcHigh, /** Array<T> */ dest, /** number */ destLow, /** number */ destHigh, /** Comparator<T> */ comp) {
  let topIdx = srcMid;
  while (destLow < destHigh) {
   if (topIdx >= srcHigh || srcLow < srcMid && comp.m_compare__java_lang_Object__java_lang_Object__int(src[srcLow], src[topIdx]) <= 0) {
    let /** number */ $value, /** number */ $value_1;
    $Arrays.$set(dest, ($value = destLow, destLow = destLow + 1 | 0, $value), src[($value_1 = srcLow, srcLow = srcLow + 1 | 0, $value_1)]);
   } else {
    let /** number */ $value_2, /** number */ $value_3;
    $Arrays.$set(dest, ($value_2 = destLow, destLow = destLow + 1 | 0, $value_2), src[($value_3 = topIdx, topIdx = topIdx + 1 | 0, $value_3)]);
   }
  }
 }
 /** @nodts @return {!MergeSorter} */
 static $create__() {
  let $instance = new MergeSorter();
  $instance.$ctor__javaemul_internal_MergeSorter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_MergeSorter__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  MergeSorter.$clinit = () =>{};
  MergeSorter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MergeSorter;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(MergeSorter, 'javaemul.internal.MergeSorter');

exports = MergeSorter;

//# sourceMappingURL=MergeSorter.js.map
