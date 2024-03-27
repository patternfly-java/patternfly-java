goog.module('java.util.Spliterators$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayIndexOutOfBoundsException = goog.forwardDeclare('java.lang.ArrayIndexOutOfBoundsException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let PrimitiveIterator_OfDouble = goog.forwardDeclare('java.util.PrimitiveIterator.OfDouble$impl');
let PrimitiveIterator_OfInt = goog.forwardDeclare('java.util.PrimitiveIterator.OfInt$impl');
let PrimitiveIterator_OfLong = goog.forwardDeclare('java.util.PrimitiveIterator.OfLong$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let ArraySpliterator = goog.forwardDeclare('java.util.Spliterators.ArraySpliterator$impl');
let ConsumerIterator = goog.forwardDeclare('java.util.Spliterators.ConsumerIterator$impl');
let DoubleArraySpliterator = goog.forwardDeclare('java.util.Spliterators.DoubleArraySpliterator$impl');
let DoubleConsumerIterator = goog.forwardDeclare('java.util.Spliterators.DoubleConsumerIterator$impl');
let DoubleIteratorSpliterator = goog.forwardDeclare('java.util.Spliterators.DoubleIteratorSpliterator$impl');
let EmptySpliterator = goog.forwardDeclare('java.util.Spliterators.EmptySpliterator$impl');
let IntArraySpliterator = goog.forwardDeclare('java.util.Spliterators.IntArraySpliterator$impl');
let IntConsumerIterator = goog.forwardDeclare('java.util.Spliterators.IntConsumerIterator$impl');
let IntIteratorSpliterator = goog.forwardDeclare('java.util.Spliterators.IntIteratorSpliterator$impl');
let IteratorSpliterator = goog.forwardDeclare('java.util.Spliterators.IteratorSpliterator$impl');
let LongArraySpliterator = goog.forwardDeclare('java.util.Spliterators.LongArraySpliterator$impl');
let LongConsumerIterator = goog.forwardDeclare('java.util.Spliterators.LongConsumerIterator$impl');
let LongIteratorSpliterator = goog.forwardDeclare('java.util.Spliterators.LongIteratorSpliterator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class Spliterators extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_emptySpliterator__java_util_Spliterator() {
  Spliterators.$clinit();
  return /**@type {Spliterator<T>}*/ (EmptySpliterator.f_OF_REF__java_util_Spliterators_EmptySpliterator);
 }
 /** @nodts @return {OfDouble} */
 static m_emptyDoubleSpliterator__java_util_Spliterator_OfDouble() {
  Spliterators.$clinit();
  return EmptySpliterator.f_OF_DOUBLE__java_util_Spliterators_EmptySpliterator;
 }
 /** @nodts @return {OfInt} */
 static m_emptyIntSpliterator__java_util_Spliterator_OfInt() {
  Spliterators.$clinit();
  return EmptySpliterator.f_OF_INT__java_util_Spliterators_EmptySpliterator;
 }
 /** @nodts @return {OfLong} */
 static m_emptyLongSpliterator__java_util_Spliterator_OfLong() {
  Spliterators.$clinit();
  return EmptySpliterator.f_OF_LONG__java_util_Spliterators_EmptySpliterator;
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__arrayOf_java_lang_Object__int__java_util_Spliterator(/** Array<*> */ array, /** number */ characteristics) {
  Spliterators.$clinit();
  return /**@type {!ArraySpliterator<T>}*/ (ArraySpliterator.$create__arrayOf_java_lang_Object__int(array, characteristics));
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__arrayOf_java_lang_Object__int__int__int__java_util_Spliterator(/** Array<*> */ array, /** number */ fromIndex, /** number */ toIndex, /** number */ characteristics) {
  Spliterators.$clinit();
  Spliterators.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  return /**@type {!ArraySpliterator<T>}*/ (ArraySpliterator.$create__arrayOf_java_lang_Object__int__int__int(array, fromIndex, toIndex, characteristics));
 }
 /** @nodts @return {OfInt} */
 static m_spliterator__arrayOf_int__int__java_util_Spliterator_OfInt(/** Array<number> */ array, /** number */ characteristics) {
  Spliterators.$clinit();
  return IntArraySpliterator.$create__arrayOf_int__int(array, characteristics);
 }
 /** @nodts @return {OfInt} */
 static m_spliterator__arrayOf_int__int__int__int__java_util_Spliterator_OfInt(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** number */ characteristics) {
  Spliterators.$clinit();
  Spliterators.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  return IntArraySpliterator.$create__arrayOf_int__int__int__int(array, fromIndex, toIndex, characteristics);
 }
 /** @nodts @return {OfLong} */
 static m_spliterator__arrayOf_long__int__java_util_Spliterator_OfLong(/** Array<!$Long> */ array, /** number */ characteristics) {
  Spliterators.$clinit();
  return LongArraySpliterator.$create__arrayOf_long__int(array, characteristics);
 }
 /** @nodts @return {OfLong} */
 static m_spliterator__arrayOf_long__int__int__int__java_util_Spliterator_OfLong(/** Array<!$Long> */ array, /** number */ fromIndex, /** number */ toIndex, /** number */ characteristics) {
  Spliterators.$clinit();
  Spliterators.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  return LongArraySpliterator.$create__arrayOf_long__int__int__int(array, fromIndex, toIndex, characteristics);
 }
 /** @nodts @return {OfDouble} */
 static m_spliterator__arrayOf_double__int__java_util_Spliterator_OfDouble(/** Array<number> */ array, /** number */ characteristics) {
  Spliterators.$clinit();
  return DoubleArraySpliterator.$create__arrayOf_double__int(array, characteristics);
 }
 /** @nodts @return {OfDouble} */
 static m_spliterator__arrayOf_double__int__int__int__java_util_Spliterator_OfDouble(/** Array<number> */ array, /** number */ fromIndex, /** number */ toIndex, /** number */ characteristics) {
  Spliterators.$clinit();
  Spliterators.m_checkCriticalArrayBounds__int__int__int__void(fromIndex, toIndex, array.length);
  return DoubleArraySpliterator.$create__arrayOf_double__int__int__int(array, fromIndex, toIndex, characteristics);
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__java_util_Collection__int__java_util_Spliterator(/** Collection<?> */ c, /** number */ characteristics) {
  Spliterators.$clinit();
  return /**@type {!IteratorSpliterator<T>}*/ (IteratorSpliterator.$create__java_util_Collection__int(c, characteristics));
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliterator__java_util_Iterator__long__int__java_util_Spliterator(/** Iterator<?> */ it, /** !$Long */ size, /** number */ characteristics) {
  Spliterators.$clinit();
  return /**@type {!IteratorSpliterator<T>}*/ (IteratorSpliterator.$create__java_util_Iterator__long__int(it, size, characteristics));
 }
 /** @nodts @template T @return {Spliterator<T>} */
 static m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator(/** Iterator<?> */ it, /** number */ characteristics) {
  Spliterators.$clinit();
  return /**@type {!IteratorSpliterator<T>}*/ (IteratorSpliterator.$create__java_util_Iterator__int(it, characteristics));
 }
 /** @nodts @return {OfInt} */
 static m_spliterator__java_util_PrimitiveIterator_OfInt__long__int__java_util_Spliterator_OfInt(/** PrimitiveIterator_OfInt */ it, /** !$Long */ size, /** number */ characteristics) {
  Spliterators.$clinit();
  return IntIteratorSpliterator.$create__java_util_PrimitiveIterator_OfInt__long__int(it, size, characteristics);
 }
 /** @nodts @return {OfInt} */
 static m_spliteratorUnknownSize__java_util_PrimitiveIterator_OfInt__int__java_util_Spliterator_OfInt(/** PrimitiveIterator_OfInt */ it, /** number */ characteristics) {
  Spliterators.$clinit();
  return IntIteratorSpliterator.$create__java_util_PrimitiveIterator_OfInt__int(it, characteristics);
 }
 /** @nodts @return {OfLong} */
 static m_spliterator__java_util_PrimitiveIterator_OfLong__long__int__java_util_Spliterator_OfLong(/** PrimitiveIterator_OfLong */ it, /** !$Long */ size, /** number */ characteristics) {
  Spliterators.$clinit();
  return LongIteratorSpliterator.$create__java_util_PrimitiveIterator_OfLong__long__int(it, size, characteristics);
 }
 /** @nodts @return {OfLong} */
 static m_spliteratorUnknownSize__java_util_PrimitiveIterator_OfLong__int__java_util_Spliterator_OfLong(/** PrimitiveIterator_OfLong */ it, /** number */ characteristics) {
  Spliterators.$clinit();
  return LongIteratorSpliterator.$create__java_util_PrimitiveIterator_OfLong__int(it, characteristics);
 }
 /** @nodts @return {OfDouble} */
 static m_spliterator__java_util_PrimitiveIterator_OfDouble__long__int__java_util_Spliterator_OfDouble(/** PrimitiveIterator_OfDouble */ it, /** !$Long */ size, /** number */ characteristics) {
  Spliterators.$clinit();
  return DoubleIteratorSpliterator.$create__java_util_PrimitiveIterator_OfDouble__long__int(it, size, characteristics);
 }
 /** @nodts @return {OfDouble} */
 static m_spliteratorUnknownSize__java_util_PrimitiveIterator_OfDouble__int__java_util_Spliterator_OfDouble(/** PrimitiveIterator_OfDouble */ it, /** number */ characteristics) {
  Spliterators.$clinit();
  return DoubleIteratorSpliterator.$create__java_util_PrimitiveIterator_OfDouble__int(it, characteristics);
 }
 /** @nodts @template T @return {Iterator<T>} */
 static m_iterator__java_util_Spliterator__java_util_Iterator(/** Spliterator<?> */ spliterator) {
  Spliterators.$clinit();
  return /**@type {!ConsumerIterator<T>}*/ (ConsumerIterator.$create__java_util_Spliterator(spliterator));
 }
 /** @nodts @return {PrimitiveIterator_OfDouble} */
 static m_iterator__java_util_Spliterator_OfDouble__java_util_PrimitiveIterator_OfDouble(/** OfDouble */ spliterator) {
  Spliterators.$clinit();
  return DoubleConsumerIterator.$create__java_util_Spliterator_OfDouble(spliterator);
 }
 /** @nodts @return {PrimitiveIterator_OfInt} */
 static m_iterator__java_util_Spliterator_OfInt__java_util_PrimitiveIterator_OfInt(/** OfInt */ spliterator) {
  Spliterators.$clinit();
  return IntConsumerIterator.$create__java_util_Spliterator_OfInt(spliterator);
 }
 /** @nodts @return {PrimitiveIterator_OfLong} */
 static m_iterator__java_util_Spliterator_OfLong__java_util_PrimitiveIterator_OfLong(/** OfLong */ spliterator) {
  Spliterators.$clinit();
  return LongConsumerIterator.$create__java_util_Spliterator_OfLong(spliterator);
 }
 /** @nodts */
 static m_checkSorted__int__void(/** number */ characteristics) {
  Spliterators.$clinit();
  InternalPreconditions.m_checkCriticalState__boolean__void((characteristics & Spliterator.f_SORTED__java_util_Spliterator) != 0);
 }
 /** @nodts @return {number} */
 static m_sizeKnownSpliteratorCharacteristics__int__int(/** number */ characteristics) {
  Spliterators.$clinit();
  return characteristics | Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator;
 }
 /** @nodts @return {number} */
 static m_sizeKnownIteratorSpliteratorCharacteristics__int__int(/** number */ characteristics) {
  Spliterators.$clinit();
  return (characteristics & Spliterator.f_CONCURRENT__java_util_Spliterator) == 0 ? Spliterators.m_sizeKnownSpliteratorCharacteristics__int__int(characteristics) : characteristics;
 }
 /** @nodts @return {number} */
 static m_sizeUnknownSpliteratorCharacteristics__int__int(/** number */ characteristics) {
  Spliterators.$clinit();
  return characteristics & ~(Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator);
 }
 /** @nodts */
 static m_checkCriticalArrayBounds__int__int__int__void(/** number */ start, /** number */ end, /** number */ length) {
  if (start > end || start < 0 || end > length) {
   throw $Exceptions.toJs(ArrayIndexOutOfBoundsException.$create__java_lang_String('fromIndex: ' + start + ', toIndex: ' + end + ', length: ' + length));
  }
 }
 /** @nodts @return {!Spliterators} */
 static $create__() {
  let $instance = new Spliterators();
  $instance.$ctor__java_util_Spliterators__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Spliterators.$clinit = () =>{};
  Spliterators.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Spliterators;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayIndexOutOfBoundsException = goog.module.get('java.lang.ArrayIndexOutOfBoundsException$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  ArraySpliterator = goog.module.get('java.util.Spliterators.ArraySpliterator$impl');
  ConsumerIterator = goog.module.get('java.util.Spliterators.ConsumerIterator$impl');
  DoubleArraySpliterator = goog.module.get('java.util.Spliterators.DoubleArraySpliterator$impl');
  DoubleConsumerIterator = goog.module.get('java.util.Spliterators.DoubleConsumerIterator$impl');
  DoubleIteratorSpliterator = goog.module.get('java.util.Spliterators.DoubleIteratorSpliterator$impl');
  EmptySpliterator = goog.module.get('java.util.Spliterators.EmptySpliterator$impl');
  IntArraySpliterator = goog.module.get('java.util.Spliterators.IntArraySpliterator$impl');
  IntConsumerIterator = goog.module.get('java.util.Spliterators.IntConsumerIterator$impl');
  IntIteratorSpliterator = goog.module.get('java.util.Spliterators.IntIteratorSpliterator$impl');
  IteratorSpliterator = goog.module.get('java.util.Spliterators.IteratorSpliterator$impl');
  LongArraySpliterator = goog.module.get('java.util.Spliterators.LongArraySpliterator$impl');
  LongConsumerIterator = goog.module.get('java.util.Spliterators.LongConsumerIterator$impl');
  LongIteratorSpliterator = goog.module.get('java.util.Spliterators.LongIteratorSpliterator$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(Spliterators, 'java.util.Spliterators');

exports = Spliterators;

//# sourceMappingURL=Spliterators.js.map
