goog.module('java.util.stream.IntStreamImpl.Empty$impl');

const IntStream = goog.require('java.util.stream.IntStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let IntSummaryStatistics = goog.forwardDeclare('java.util.IntSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalInt = goog.forwardDeclare('java.util.OptionalInt$impl');
let OfInt = goog.forwardDeclare('java.util.PrimitiveIterator.OfInt$impl');
let Spliterator_OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let IntBinaryOperator = goog.forwardDeclare('java.util.function.IntBinaryOperator$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let IntPredicate = goog.forwardDeclare('java.util.function.IntPredicate$impl');
let IntToDoubleFunction = goog.forwardDeclare('java.util.function.IntToDoubleFunction$impl');
let IntToLongFunction = goog.forwardDeclare('java.util.function.IntToLongFunction$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let ObjIntConsumer = goog.forwardDeclare('java.util.function.ObjIntConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl_Empty = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.Empty$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl_Empty = goog.forwardDeclare('java.util.stream.LongStreamImpl.Empty$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl_Empty = goog.forwardDeclare('java.util.stream.StreamImpl.Empty$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @extends {TerminatableStream<Empty>}
 * @implements {IntStream}
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
  $instance.$ctor__java_util_stream_IntStreamImpl_Empty__java_util_stream_TerminatableStream__void(previous);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl_Empty__java_util_stream_TerminatableStream__void(/** TerminatableStream<?> */ previous) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
 }
 /** @override @nodts @return {IntStream} */
 m_filter__java_util_function_IntPredicate__java_util_stream_IntStream(/** IntPredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_map__java_util_function_IntUnaryOperator__java_util_stream_IntStream(/** IntUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_IntFunction__java_util_stream_Stream(/** IntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<U>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_IntToLongFunction__java_util_stream_LongStream(/** IntToLongFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_IntToDoubleFunction__java_util_stream_DoubleStream(/** IntToDoubleFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {IntStream} */
 m_flatMap__java_util_function_IntFunction__java_util_stream_IntStream(/** IntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_distinct__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_sorted__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_peek__java_util_function_IntConsumer__java_util_stream_IntStream(/** IntConsumer */ action) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_limit__long__java_util_stream_IntStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_skip__long__java_util_stream_IntStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  return this;
 }
 /** @override @nodts */
 m_forEach__java_util_function_IntConsumer__void(/** IntConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_IntConsumer__void(/** IntConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts @return {Array<number>} */
 m_toArray__arrayOf_int() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {!Array<number>}*/ ($Arrays.$create([0], $$int));
 }
 /** @override @nodts @return {number} */
 m_reduce__int__java_util_function_IntBinaryOperator__int(/** number */ identity, /** IntBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return identity;
 }
 /** @override @nodts @return {OptionalInt} */
 m_reduce__java_util_function_IntBinaryOperator__java_util_OptionalInt(/** IntBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjIntConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjIntConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  return supplier.m_get__java_lang_Object();
 }
 /** @override @nodts @return {number} */
 m_sum__int() {
  this.m_terminate__void_$pp_java_util_stream();
  return 0;
 }
 /** @override @nodts @return {OptionalInt} */
 m_min__java_util_OptionalInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @return {OptionalInt} */
 m_max__java_util_OptionalInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
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
 /** @override @nodts @return {IntSummaryStatistics} */
 m_summaryStatistics__java_util_IntSummaryStatistics() {
  this.m_terminate__void_$pp_java_util_stream();
  return IntSummaryStatistics.$create__();
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return false;
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {OptionalInt} */
 m_findFirst__java_util_OptionalInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @return {OptionalInt} */
 m_findAny__java_util_OptionalInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @return {LongStream} */
 m_asLongStream__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {Stream<Integer>} */
 m_boxed__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl_Empty<Integer>}*/ (StreamImpl_Empty.$create__java_util_stream_TerminatableStream(this));
 }
 /** @override @nodts @return {IntStream} */
 m_sequential__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {IntStream} */
 m_parallel__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {OfInt} */
 m_iterator__java_util_PrimitiveIterator_OfInt() {
  return Spliterators.m_iterator__java_util_Spliterator_OfInt__java_util_PrimitiveIterator_OfInt(this.m_spliterator__java_util_Spliterator_OfInt());
 }
 /** @override @nodts @return {Spliterator_OfInt} */
 m_spliterator__java_util_Spliterator_OfInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return Spliterators.m_emptyIntSpliterator__java_util_Spliterator_OfInt();
 }
 /** @override @nodts @return {boolean} */
 m_isParallel__boolean() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return false;
 }
 /** @nodts @return {IntStream} */
 m_unordered__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {OfInt} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfInt();
 }
 //Bridge method.
 /** @final @override @nodts @return {Empty} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {Empty}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), Empty));
 }
 //Bridge method.
 /** @final @override @nodts @return {IntStream} */
 m_parallel__java_util_stream_BaseStream() {
  return this.m_parallel__java_util_stream_IntStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {IntStream} */
 m_sequential__java_util_stream_BaseStream() {
  return this.m_sequential__java_util_stream_IntStream();
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfInt} */
 m_spliterator__java_util_Spliterator() {
  return this.m_spliterator__java_util_Spliterator_OfInt();
 }
 //Bridge method.
 /** @final @override @nodts @return {IntStream} */
 m_unordered__java_util_stream_BaseStream() {
  return this.m_unordered__java_util_stream_IntStream();
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
  IntSummaryStatistics = goog.module.get('java.util.IntSummaryStatistics$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  OptionalInt = goog.module.get('java.util.OptionalInt$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  DoubleStreamImpl_Empty = goog.module.get('java.util.stream.DoubleStreamImpl.Empty$impl');
  LongStreamImpl_Empty = goog.module.get('java.util.stream.LongStreamImpl.Empty$impl');
  StreamImpl_Empty = goog.module.get('java.util.stream.StreamImpl.Empty$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
IntStream.$markImplementor(Empty);
$Util.$setClassMetadata(Empty, 'java.util.stream.IntStreamImpl$Empty');

exports = Empty;

//# sourceMappingURL=IntStreamImpl$Empty.js.map
