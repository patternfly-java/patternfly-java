goog.module('java.util.stream.LongStreamImpl.FilterSpliterator$impl');

const AbstractLongSpliterator = goog.require('java.util.Spliterators.AbstractLongSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongPredicate = goog.forwardDeclare('java.util.function.LongPredicate$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class FilterSpliterator extends AbstractLongSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LongPredicate} @nodts*/
  this.f_filter__java_util_stream_LongStreamImpl_FilterSpliterator_;
  /**@type {OfLong} @nodts*/
  this.f_original__java_util_stream_LongStreamImpl_FilterSpliterator_;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_LongStreamImpl_FilterSpliterator_ = false;
 }
 /** @nodts @return {!FilterSpliterator} */
 static $create__java_util_function_LongPredicate__java_util_Spliterator_OfLong(/** LongPredicate */ filter, /** OfLong */ original) {
  FilterSpliterator.$clinit();
  let $instance = new FilterSpliterator();
  $instance.$ctor__java_util_stream_LongStreamImpl_FilterSpliterator__java_util_function_LongPredicate__java_util_Spliterator_OfLong__void(filter, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_FilterSpliterator__java_util_function_LongPredicate__java_util_Spliterator_OfLong__void(/** LongPredicate */ filter, /** OfLong */ original) {
  this.$ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  this.f_filter__java_util_stream_LongStreamImpl_FilterSpliterator_ = filter;
  this.f_original__java_util_stream_LongStreamImpl_FilterSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_LongStreamImpl_FilterSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_util_function_LongConsumer__boolean(/** LongConsumer */ action) {
  this.f_found__java_util_stream_LongStreamImpl_FilterSpliterator_ = false;
  while (!this.f_found__java_util_stream_LongStreamImpl_FilterSpliterator_ && this.f_original__java_util_stream_LongStreamImpl_FilterSpliterator_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ item) =>{
   if (this.f_filter__java_util_stream_LongStreamImpl_FilterSpliterator_.m_test__long__boolean(item)) {
    this.f_found__java_util_stream_LongStreamImpl_FilterSpliterator_ = true;
    action.m_accept__long__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_LongStreamImpl_FilterSpliterator_;
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {
  return this.m_tryAdvance__java_util_function_LongConsumer__boolean(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 /** @nodts */
 static $clinit() {
  FilterSpliterator.$clinit = () =>{};
  FilterSpliterator.$loadModules();
  AbstractLongSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FilterSpliterator, 'java.util.stream.LongStreamImpl$FilterSpliterator');

exports = FilterSpliterator;

//# sourceMappingURL=LongStreamImpl$FilterSpliterator.js.map
