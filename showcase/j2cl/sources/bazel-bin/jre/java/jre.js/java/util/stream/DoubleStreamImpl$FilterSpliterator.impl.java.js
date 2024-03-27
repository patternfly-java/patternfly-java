goog.module('java.util.stream.DoubleStreamImpl.FilterSpliterator$impl');

const AbstractDoubleSpliterator = goog.require('java.util.Spliterators.AbstractDoubleSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class FilterSpliterator extends AbstractDoubleSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DoublePredicate} @nodts*/
  this.f_filter__java_util_stream_DoubleStreamImpl_FilterSpliterator_;
  /**@type {OfDouble} @nodts*/
  this.f_original__java_util_stream_DoubleStreamImpl_FilterSpliterator_;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_DoubleStreamImpl_FilterSpliterator_ = false;
 }
 /** @nodts @return {!FilterSpliterator} */
 static $create__java_util_function_DoublePredicate__java_util_Spliterator_OfDouble(/** DoublePredicate */ filter, /** OfDouble */ original) {
  FilterSpliterator.$clinit();
  let $instance = new FilterSpliterator();
  $instance.$ctor__java_util_stream_DoubleStreamImpl_FilterSpliterator__java_util_function_DoublePredicate__java_util_Spliterator_OfDouble__void(filter, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_FilterSpliterator__java_util_function_DoublePredicate__java_util_Spliterator_OfDouble__void(/** DoublePredicate */ filter, /** OfDouble */ original) {
  this.$ctor__java_util_Spliterators_AbstractDoubleSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  this.f_filter__java_util_stream_DoubleStreamImpl_FilterSpliterator_ = filter;
  this.f_original__java_util_stream_DoubleStreamImpl_FilterSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_DoubleStreamImpl_FilterSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_DoubleConsumer__boolean(/** DoubleConsumer */ action) {
  this.f_found__java_util_stream_DoubleStreamImpl_FilterSpliterator_ = false;
  while (!this.f_found__java_util_stream_DoubleStreamImpl_FilterSpliterator_ && this.f_original__java_util_stream_DoubleStreamImpl_FilterSpliterator_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ item) =>{
   if (this.f_filter__java_util_stream_DoubleStreamImpl_FilterSpliterator_.m_test__double__boolean(item)) {
    this.f_found__java_util_stream_DoubleStreamImpl_FilterSpliterator_ = true;
    action.m_accept__double__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_DoubleStreamImpl_FilterSpliterator_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** DoubleConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_DoubleConsumer__boolean(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 /** @nodts */
 static $clinit() {
  FilterSpliterator.$clinit = () =>{};
  FilterSpliterator.$loadModules();
  AbstractDoubleSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FilterSpliterator, 'java.util.stream.DoubleStreamImpl$FilterSpliterator');

exports = FilterSpliterator;

//# sourceMappingURL=DoubleStreamImpl$FilterSpliterator.js.map
