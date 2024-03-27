goog.module('java.util.stream.DoubleStreamImpl.Empty$impl');

const DoubleStream = goog.require('java.util.stream.DoubleStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let DoubleSummaryStatistics = goog.forwardDeclare('java.util.DoubleSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OfDouble = goog.forwardDeclare('java.util.PrimitiveIterator.OfDouble$impl');
let Spliterator_OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let DoubleBinaryOperator = goog.forwardDeclare('java.util.function.DoubleBinaryOperator$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleFunction = goog.forwardDeclare('java.util.function.DoubleFunction$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let DoubleToIntFunction = goog.forwardDeclare('java.util.function.DoubleToIntFunction$impl');
let DoubleToLongFunction = goog.forwardDeclare('java.util.function.DoubleToLongFunction$impl');
let DoubleUnaryOperator = goog.forwardDeclare('java.util.function.DoubleUnaryOperator$impl');
let ObjDoubleConsumer = goog.forwardDeclare('java.util.function.ObjDoubleConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl_Empty = goog.forwardDeclare('java.util.stream.IntStreamImpl.Empty$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl_Empty = goog.forwardDeclare('java.util.stream.LongStreamImpl.Empty$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl_Empty = goog.forwardDeclare('java.util.stream.StreamImpl.Empty$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @extends {TerminatableStream<Empty>}
 * @implements {DoubleStream}
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
  $instance.$ctor__java_util_stream_DoubleStreamImpl_Empty__java_util_stream_TerminatableStream__void(previous);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl_Empty__java_util_stream_TerminatableStream__void(/** TerminatableStream<?> */ previous) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
 }
 /** @override @nodts @return {DoubleStream} */
 m_filter__java_util_function_DoublePredicate__java_util_stream_DoubleStream(/** DoublePredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_map__java_util_function_DoubleUnaryOperator__java_util_stream_DoubleStream(/** DoubleUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_DoubleFunction__java_util_stream_Stream(/** DoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<U>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_DoubleToIntFunction__java_util_stream_IntStream(/** DoubleToIntFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_DoubleToLongFunction__java_util_stream_LongStream(/** DoubleToLongFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_flatMap__java_util_function_DoubleFunction__java_util_stream_DoubleStream(/** DoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_distinct__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_sorted__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_peek__java_util_function_DoubleConsumer__java_util_stream_DoubleStream(/** DoubleConsumer */ action) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_limit__long__java_util_stream_DoubleStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_skip__long__java_util_stream_DoubleStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  return this;
 }
 /** @override @nodts */
 m_forEach__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts @return {Array<number>} */
 m_toArray__arrayOf_double() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {!Array<number>}*/ ($Arrays.$create([0], $$double));
 }
 /** @override @nodts @return {number} */
 m_reduce__double__java_util_function_DoubleBinaryOperator__double(/** number */ identity, /** DoubleBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return identity;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_reduce__java_util_function_DoubleBinaryOperator__java_util_OptionalDouble(/** DoubleBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjDoubleConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjDoubleConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  return supplier.m_get__java_lang_Object();
 }
 /** @override @nodts @return {number} */
 m_sum__double() {
  this.m_terminate__void_$pp_java_util_stream();
  return 0;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_min__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @return {OptionalDouble} */
 m_max__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
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
 /** @override @nodts @return {DoubleSummaryStatistics} */
 m_summaryStatistics__java_util_DoubleSummaryStatistics() {
  this.m_terminate__void_$pp_java_util_stream();
  return DoubleSummaryStatistics.$create__();
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return false;
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_findFirst__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @return {OptionalDouble} */
 m_findAny__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @return {Stream<?number>} */
 m_boxed__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<?number>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {DoubleStream} */
 m_sequential__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {DoubleStream} */
 m_parallel__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {OfDouble} */
 m_iterator__java_util_PrimitiveIterator_OfDouble() {
  return Spliterators.m_iterator__java_util_Spliterator_OfDouble__java_util_PrimitiveIterator_OfDouble(this.m_spliterator__java_util_Spliterator_OfDouble());
 }
 /** @override @nodts @return {Spliterator_OfDouble} */
 m_spliterator__java_util_Spliterator_OfDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return Spliterators.m_emptyDoubleSpliterator__java_util_Spliterator_OfDouble();
 }
 /** @override @nodts @return {boolean} */
 m_isParallel__boolean() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return false;
 }
 /** @nodts @return {DoubleStream} */
 m_unordered__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {OfDouble} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfDouble();
 }
 //Bridge method.
 /** @final @override @nodts @return {Empty} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {Empty}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), Empty));
 }
 //Bridge method.
 /** @final @override @nodts @return {DoubleStream} */
 m_parallel__java_util_stream_BaseStream() {
  return this.m_parallel__java_util_stream_DoubleStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {DoubleStream} */
 m_sequential__java_util_stream_BaseStream() {
  return this.m_sequential__java_util_stream_DoubleStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfDouble} */
 m_spliterator__java_util_Spliterator() {
  return this.m_spliterator__java_util_Spliterator_OfDouble();
 }
 //Bridge method.
 /** @final @override @nodts @return {DoubleStream} */
 m_unordered__java_util_stream_BaseStream() {
  return this.m_unordered__java_util_stream_DoubleStream();
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
  DoubleSummaryStatistics = goog.module.get('java.util.DoubleSummaryStatistics$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  IntStreamImpl_Empty = goog.module.get('java.util.stream.IntStreamImpl.Empty$impl');
  LongStreamImpl_Empty = goog.module.get('java.util.stream.LongStreamImpl.Empty$impl');
  StreamImpl_Empty = goog.module.get('java.util.stream.StreamImpl.Empty$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
DoubleStream.$markImplementor(Empty);
$Util.$setClassMetadata(Empty, 'java.util.stream.DoubleStreamImpl$Empty');

exports = Empty;

//# sourceMappingURL=DoubleStreamImpl$Empty.js.map
