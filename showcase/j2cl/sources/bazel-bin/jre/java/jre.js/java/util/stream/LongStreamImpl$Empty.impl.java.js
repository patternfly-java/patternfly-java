goog.module('java.util.stream.LongStreamImpl.Empty$impl');

const LongStream = goog.require('java.util.stream.LongStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let LongSummaryStatistics = goog.forwardDeclare('java.util.LongSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalLong = goog.forwardDeclare('java.util.OptionalLong$impl');
let OfLong = goog.forwardDeclare('java.util.PrimitiveIterator.OfLong$impl');
let Spliterator_OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let LongBinaryOperator = goog.forwardDeclare('java.util.function.LongBinaryOperator$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongFunction = goog.forwardDeclare('java.util.function.LongFunction$impl');
let LongPredicate = goog.forwardDeclare('java.util.function.LongPredicate$impl');
let LongToDoubleFunction = goog.forwardDeclare('java.util.function.LongToDoubleFunction$impl');
let LongToIntFunction = goog.forwardDeclare('java.util.function.LongToIntFunction$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let ObjLongConsumer = goog.forwardDeclare('java.util.function.ObjLongConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl_Empty = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.Empty$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl_Empty = goog.forwardDeclare('java.util.stream.IntStreamImpl.Empty$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl_Empty = goog.forwardDeclare('java.util.stream.StreamImpl.Empty$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @extends {TerminatableStream<Empty>}
 * @implements {LongStream}
 */
class Empty extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Empty} */
 static $create__java_util_stream_TerminatableStream(/** TerminatableStream<?> */ previous) {
  Empty.$clinit();
  let $instance = new Empty();
  $instance.$ctor__java_util_stream_LongStreamImpl_Empty__java_util_stream_TerminatableStream__void(previous);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl_Empty__java_util_stream_TerminatableStream__void(/** TerminatableStream<?> */ previous) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
 }
 /** @override @nodts @return {LongStream} */
 m_filter__java_util_function_LongPredicate__java_util_stream_LongStream(/** LongPredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_map__java_util_function_LongUnaryOperator__java_util_stream_LongStream(/** LongUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_LongFunction__java_util_stream_Stream(/** LongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<U>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_LongToIntFunction__java_util_stream_IntStream(/** LongToIntFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_LongToDoubleFunction__java_util_stream_DoubleStream(/** LongToDoubleFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {LongStream} */
 m_flatMap__java_util_function_LongFunction__java_util_stream_LongStream(/** LongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_distinct__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_sorted__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_peek__java_util_function_LongConsumer__java_util_stream_LongStream(/** LongConsumer */ action) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_limit__long__java_util_stream_LongStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_skip__long__java_util_stream_LongStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  return this;
 }
 /** @override @nodts */
 m_forEach__java_util_function_LongConsumer__void(/** LongConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_LongConsumer__void(/** LongConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts @return {Array<!$Long>} */
 m_toArray__arrayOf_long() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {!Array<!$Long>}*/ ($Arrays.$create([0], $$long));
 }
 /** @override @nodts @return {!$Long} */
 m_reduce__long__java_util_function_LongBinaryOperator__long(/** !$Long */ identity, /** LongBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return identity;
 }
 /** @override @nodts @return {OptionalLong} */
 m_reduce__java_util_function_LongBinaryOperator__java_util_OptionalLong(/** LongBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjLongConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjLongConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  return supplier.m_get__java_lang_Object();
 }
 /** @override @nodts @return {!$Long} */
 m_sum__long() {
  this.m_terminate__void_$pp_java_util_stream();
  return $Long.fromInt(0);
 }
 /** @override @nodts @return {OptionalLong} */
 m_min__java_util_OptionalLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @return {OptionalLong} */
 m_max__java_util_OptionalLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  return $Long.fromInt(0);
 }
 /** @override @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @return {LongSummaryStatistics} */
 m_summaryStatistics__java_util_LongSummaryStatistics() {
  this.m_terminate__void_$pp_java_util_stream();
  return LongSummaryStatistics.$create__();
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return false;
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {OptionalLong} */
 m_findFirst__java_util_OptionalLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @return {OptionalLong} */
 m_findAny__java_util_OptionalLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {Stream<Long>} */
 m_boxed__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<Long>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {LongStream} */
 m_sequential__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {LongStream} */
 m_parallel__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {OfLong} */
 m_iterator__java_util_PrimitiveIterator_OfLong() {
  return Spliterators.m_iterator__java_util_Spliterator_OfLong__java_util_PrimitiveIterator_OfLong(this.m_spliterator__java_util_Spliterator_OfLong());
 }
 /** @override @nodts @return {Spliterator_OfLong} */
 m_spliterator__java_util_Spliterator_OfLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return Spliterators.m_emptyLongSpliterator__java_util_Spliterator_OfLong();
 }
 /** @override @nodts @return {boolean} */
 m_isParallel__boolean() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return false;
 }
 /** @nodts @return {LongStream} */
 m_unordered__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {OfLong} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfLong();
 }
 //Bridge method.
 /** @final @override @nodts @return {Empty} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {Empty}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), Empty));
 }
 //Bridge method.
 /** @final @override @nodts @return {LongStream} */
 m_parallel__java_util_stream_BaseStream() {
  return this.m_parallel__java_util_stream_LongStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {LongStream} */
 m_sequential__java_util_stream_BaseStream() {
  return this.m_sequential__java_util_stream_LongStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfLong} */
 m_spliterator__java_util_Spliterator() {
  return this.m_spliterator__java_util_Spliterator_OfLong();
 }
 //Bridge method.
 /** @final @override @nodts @return {LongStream} */
 m_unordered__java_util_stream_BaseStream() {
  return this.m_unordered__java_util_stream_LongStream();
 }
 /** @nodts */
 static $clinit() {
  Empty.$clinit = () =>{};
  Empty.$loadModules();
  TerminatableStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Empty;
 }
 
 /** @nodts */
 static $loadModules() {
  LongSummaryStatistics = goog.module.get('java.util.LongSummaryStatistics$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  OptionalLong = goog.module.get('java.util.OptionalLong$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  DoubleStreamImpl_Empty = goog.module.get('java.util.stream.DoubleStreamImpl.Empty$impl');
  IntStreamImpl_Empty = goog.module.get('java.util.stream.IntStreamImpl.Empty$impl');
  StreamImpl_Empty = goog.module.get('java.util.stream.StreamImpl.Empty$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
LongStream.$markImplementor(Empty);
$Util.$setClassMetadata(Empty, 'java.util.stream.LongStreamImpl$Empty');

exports = Empty;

//# sourceMappingURL=LongStreamImpl$Empty.js.map
