goog.module('java.util.stream.StreamImpl.FilterSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class FilterSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Predicate<?>} @nodts*/
  this.f_filter__java_util_stream_StreamImpl_FilterSpliterator_;
  /**@type {Spliterator<T>} @nodts*/
  this.f_original__java_util_stream_StreamImpl_FilterSpliterator_;
  /**@type {boolean} @nodts*/
  this.f_found__java_util_stream_StreamImpl_FilterSpliterator_ = false;
 }
 /** @nodts @template T @return {!FilterSpliterator<T>} */
 static $create__java_util_function_Predicate__java_util_Spliterator(/** Predicate<?> */ filter, /** Spliterator<T> */ original) {
  FilterSpliterator.$clinit();
  let $instance = new FilterSpliterator();
  $instance.$ctor__java_util_stream_StreamImpl_FilterSpliterator__java_util_function_Predicate__java_util_Spliterator__void(filter, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_FilterSpliterator__java_util_function_Predicate__java_util_Spliterator__void(/** Predicate<?> */ filter, /** Spliterator<T> */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_estimateSize__long(), original.m_characteristics__int() & ~(Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator));
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  this.f_filter__java_util_stream_StreamImpl_FilterSpliterator_ = filter;
  this.f_original__java_util_stream_StreamImpl_FilterSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_StreamImpl_FilterSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  this.f_found__java_util_stream_StreamImpl_FilterSpliterator_ = false;
  while (!this.f_found__java_util_stream_StreamImpl_FilterSpliterator_ && this.f_original__java_util_stream_StreamImpl_FilterSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ item) =>{
   if (this.f_filter__java_util_stream_StreamImpl_FilterSpliterator_.m_test__java_lang_Object__boolean(item)) {
    this.f_found__java_util_stream_StreamImpl_FilterSpliterator_ = true;
    action.m_accept__java_lang_Object__void(item);
   }
  }))) {}
  return this.f_found__java_util_stream_StreamImpl_FilterSpliterator_;
 }
 /** @nodts */
 static $clinit() {
  FilterSpliterator.$clinit = () =>{};
  FilterSpliterator.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(FilterSpliterator, 'java.util.stream.StreamImpl$FilterSpliterator');

exports = FilterSpliterator;

//# sourceMappingURL=StreamImpl$FilterSpliterator.js.map
