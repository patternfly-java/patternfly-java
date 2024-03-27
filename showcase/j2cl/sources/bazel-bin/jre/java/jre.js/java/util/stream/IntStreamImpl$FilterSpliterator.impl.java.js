goog.module('java.util.stream.IntStreamImpl.FilterSpliterator$impl');

const AbstractIntSpliterator = goog.require('java.util.Spliterators.AbstractIntSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntPredicate = goog.forwardDeclare('java.util.function.IntPredicate$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class FilterSpliterator extends AbstractIntSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {IntPredicate} @nodts*/
  this.f_filter__java_util_stream_IntStreamImpl_FilterSpliterator_;
  /**@type {OfInt} @nodts*/
  this.f_original__java_util_stream_IntStreamImpl_FilterSpliterator_;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_IntStreamImpl_FilterSpliterator_ = false;
 }
 /** @nodts @return {!FilterSpliterator} */
 static $create__java_util_function_IntPredicate__java_util_Spliterator_OfInt(/** IntPredicate */ filter, /** OfInt */ original) {
  FilterSpliterator.$clinit();
  let $instance = new FilterSpliterator();
  $instance.$ctor__java_util_stream_IntStreamImpl_FilterSpliterator__java_util_function_IntPredicate__java_util_Spliterator_OfInt__void(filter, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_FilterSpliterator__java_util_function_IntPredicate__java_util_Spliterator_OfInt__void(/** IntPredicate */ filter, /** OfInt */ original) {
  this.$ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  this.f_filter__java_util_stream_IntStreamImpl_FilterSpliterator_ = filter;
  this.f_original__java_util_stream_IntStreamImpl_FilterSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_IntStreamImpl_FilterSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_IntConsumer__boolean(/** IntConsumer */ action) {
  this.f_found__java_util_stream_IntStreamImpl_FilterSpliterator_ = false;
  while (!this.f_found__java_util_stream_IntStreamImpl_FilterSpliterator_ && this.f_original__java_util_stream_IntStreamImpl_FilterSpliterator_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ item) =>{
   if (this.f_filter__java_util_stream_IntStreamImpl_FilterSpliterator_.m_test__int__boolean(item)) {
    this.f_found__java_util_stream_IntStreamImpl_FilterSpliterator_ = true;
    action.m_accept__int__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_IntStreamImpl_FilterSpliterator_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_IntConsumer__boolean(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 /** @nodts */
 static $clinit() {
  FilterSpliterator.$clinit = () =>{};
  FilterSpliterator.$loadModules();
  AbstractIntSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FilterSpliterator, 'java.util.stream.IntStreamImpl$FilterSpliterator');

exports = FilterSpliterator;

//# sourceMappingURL=IntStreamImpl$FilterSpliterator.js.map
