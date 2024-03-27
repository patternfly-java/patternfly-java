goog.module('java.util.Spliterators.LongIteratorSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let OfLong = goog.forwardDeclare('java.util.PrimitiveIterator.OfLong$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class LongIteratorSpliterator extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfLong} @nodts*/
  this.f_it__java_util_Spliterators_LongIteratorSpliterator_;
 }
 //Factory method corresponding to constructor 'LongIteratorSpliterator(OfLong, long, int)'.
 /** @nodts @return {!LongIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfLong__long__int(/** OfLong */ it, /** !$Long */ size, /** number */ characteristics) {
  LongIteratorSpliterator.$clinit();
  let $instance = new LongIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_LongIteratorSpliterator__java_util_PrimitiveIterator_OfLong__long__int__void(it, size, characteristics);
  return $instance;
 }
 //Initialization from constructor 'LongIteratorSpliterator(OfLong, long, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_LongIteratorSpliterator__java_util_PrimitiveIterator_OfLong__long__int__void(/** OfLong */ it, /** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(size, Spliterators.m_sizeKnownIteratorSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_LongIteratorSpliterator_ = /**@type {OfLong}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfLong));
 }
 //Factory method corresponding to constructor 'LongIteratorSpliterator(OfLong, int)'.
 /** @nodts @return {!LongIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfLong__int(/** OfLong */ it, /** number */ characteristics) {
  LongIteratorSpliterator.$clinit();
  let $instance = new LongIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_LongIteratorSpliterator__java_util_PrimitiveIterator_OfLong__int__void(it, characteristics);
  return $instance;
 }
 //Initialization from constructor 'LongIteratorSpliterator(OfLong, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_LongIteratorSpliterator__java_util_PrimitiveIterator_OfLong__int__void(/** OfLong */ it, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(Long.f_MAX_VALUE__java_lang_Long, Spliterators.m_sizeUnknownSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_LongIteratorSpliterator_ = /**@type {OfLong}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfLong));
 }
 /** @override @nodts */
 m_forEachRemaining__java_util_function_LongConsumer__void(/** LongConsumer */ consumer) {
  this.f_it__java_util_Spliterators_LongIteratorSpliterator_.m_forEachRemaining__java_util_function_LongConsumer__void(consumer);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  Spliterators.m_checkSorted__int__void(this.m_characteristics__int());
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  if (this.f_it__java_util_Spliterators_LongIteratorSpliterator_.m_hasNext__boolean()) {
   consumer.m_accept__long__void(this.f_it__java_util_Spliterators_LongIteratorSpliterator_.m_nextLong__long());
   return true;
  }
  return false;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  LongIteratorSpliterator.$clinit = () =>{};
  LongIteratorSpliterator.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongIteratorSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  OfLong = goog.module.get('java.util.PrimitiveIterator.OfLong$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LongIteratorSpliterator, 'java.util.Spliterators$LongIteratorSpliterator');

exports = LongIteratorSpliterator;

//# sourceMappingURL=Spliterators$LongIteratorSpliterator.js.map
