goog.module('java.util.Spliterators.DoubleIteratorSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let OfDouble = goog.forwardDeclare('java.util.PrimitiveIterator.OfDouble$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class DoubleIteratorSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfDouble} @nodts*/
  this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_;
 }
 //Factory method corresponding to constructor 'DoubleIteratorSpliterator(OfDouble, long, int)'.
 /** @nodts @return {!DoubleIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfDouble__long__int(/** OfDouble */ it, /** !$Long */ size, /** number */ characteristics) {
  DoubleIteratorSpliterator.$clinit();
  let $instance = new DoubleIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_DoubleIteratorSpliterator__java_util_PrimitiveIterator_OfDouble__long__int__void(it, size, characteristics);
  return $instance;
 }
 //Initialization from constructor 'DoubleIteratorSpliterator(OfDouble, long, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_DoubleIteratorSpliterator__java_util_PrimitiveIterator_OfDouble__long__int__void(/** OfDouble */ it, /** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(size, Spliterators.m_sizeKnownIteratorSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_ = /**@type {OfDouble}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfDouble));
 }
 //Factory method corresponding to constructor 'DoubleIteratorSpliterator(OfDouble, int)'.
 /** @nodts @return {!DoubleIteratorSpliterator} */
 static $create__java_util_PrimitiveIterator_OfDouble__int(/** OfDouble */ it, /** number */ characteristics) {
  DoubleIteratorSpliterator.$clinit();
  let $instance = new DoubleIteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_DoubleIteratorSpliterator__java_util_PrimitiveIterator_OfDouble__int__void(it, characteristics);
  return $instance;
 }
 //Initialization from constructor 'DoubleIteratorSpliterator(OfDouble, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_DoubleIteratorSpliterator__java_util_PrimitiveIterator_OfDouble__int__void(/** OfDouble */ it, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(Long.f_MAX_VALUE__java_lang_Long, Spliterators.m_sizeUnknownSpliteratorCharacteristics__int__int(characteristics));
  this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_ = /**@type {OfDouble}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), OfDouble));
 }
 /** @override @nodts */
 m_forEachRemaining__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ consumer) {
  this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_.m_forEachRemaining__java_util_function_DoubleConsumer__void(consumer);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  Spliterators.m_checkSorted__int__void(this.m_characteristics__int());
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  if (this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_.m_hasNext__boolean()) {
   consumer.m_accept__double__void(this.f_it__java_util_Spliterators_DoubleIteratorSpliterator_.m_nextDouble__double());
   return true;
  }
  return false;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  DoubleIteratorSpliterator.$clinit = () =>{};
  DoubleIteratorSpliterator.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleIteratorSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  OfDouble = goog.module.get('java.util.PrimitiveIterator.OfDouble$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DoubleIteratorSpliterator, 'java.util.Spliterators$DoubleIteratorSpliterator');

exports = DoubleIteratorSpliterator;

//# sourceMappingURL=Spliterators$DoubleIteratorSpliterator.js.map
