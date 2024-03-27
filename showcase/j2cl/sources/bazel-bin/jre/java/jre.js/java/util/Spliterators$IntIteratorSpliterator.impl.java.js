goog.module('java.util.Spliterators.IntIteratorSpliterator$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let OfInt = goog.forwardDeclare('java.util.PrimitiveIterator.OfInt$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class IntIteratorSpliterator extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfInt} @nodts*/
  this.f_it__java_util_Spliterators_IntIteratorSpliterator_;
 }
 //Factory method corresponding to constructor 'IntIteratorSpliterator(OfInt, long, int)'.
 /** @nodts @return {!IntIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfInt__long__int(/** OfInt */ it, /** !$Long */ size, /** number */ characteristics) {
  IntIteratorSpliterator.$clinit();
  let $instance = new IntIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_IntIteratorSpliterator__java_util_PrimitiveIterator_OfInt__long__int__void(it, size, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IntIteratorSpliterator(OfInt, long, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IntIteratorSpliterator__java_util_PrimitiveIterator_OfInt__long__int__void(/** OfInt */ it, /** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(size, Spliterators.m_sizeKnownIteratorSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_IntIteratorSpliterator_ = /**@type {OfInt}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfInt));
 }
 //Factory method corresponding to constructor 'IntIteratorSpliterator(OfInt, int)'.
 /** @nodts @return {!IntIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfInt__int(/** OfInt */ it, /** number */ characteristics) {
  IntIteratorSpliterator.$clinit();
  let $instance = new IntIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_IntIteratorSpliterator__java_util_PrimitiveIterator_OfInt__int__void(it, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IntIteratorSpliterator(OfInt, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IntIteratorSpliterator__java_util_PrimitiveIterator_OfInt__int__void(/** OfInt */ it, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(Long.f_MAX_VALUE__java_lang_Long, Spliterators.m_sizeUnknownSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_IntIteratorSpliterator_ = /**@type {OfInt}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfInt));
 }
 /** @override @nodts */
 m_forEachRemaining__java_util_function_IntConsumer__void(/** IntConsumer */ consumer) {
  this.f_it__java_util_Spliterators_IntIteratorSpliterator_.m_forEachRemaining__java_util_function_IntConsumer__void(consumer);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  Spliterators.m_checkSorted__int__void(this.m_characteristics__int());
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  if (this.f_it__java_util_Spliterators_IntIteratorSpliterator_.m_hasNext__boolean()) {
   consumer.m_accept__int__void(this.f_it__java_util_Spliterators_IntIteratorSpliterator_.m_nextInt__int());
   return true;
  }
  return false;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  IntIteratorSpliterator.$clinit = () =>{};
  IntIteratorSpliterator.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntIteratorSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  OfInt = goog.module.get('java.util.PrimitiveIterator.OfInt$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(IntIteratorSpliterator, 'java.util.Spliterators$IntIteratorSpliterator');

exports = IntIteratorSpliterator;

//# sourceMappingURL=Spliterators$IntIteratorSpliterator.js.map
