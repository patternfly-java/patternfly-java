goog.module('java.util.stream.StreamImpl.Empty$impl');

const Stream = goog.require('java.util.stream.Stream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Object = goog.forwardDeclare('java.lang.Object$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Optional = goog.forwardDeclare('java.util.Optional$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl_Empty = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.Empty$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl_Empty = goog.forwardDeclare('java.util.stream.IntStreamImpl.Empty$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl_Empty = goog.forwardDeclare('java.util.stream.LongStreamImpl.Empty$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @template T
 * @extends {TerminatableStream<Empty<T>>}
 * @implements {Stream<T>}
 */
class Empty extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {!Empty<T>} */
 static $create__java_util_stream_TerminatableStream(/** TerminatableStream<?> */ previous) {
  Empty.$clinit();
  let $instance = new Empty();
  $instance.$ctor__java_util_stream_StreamImpl_Empty__java_util_stream_TerminatableStream__void(previous);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_Empty__java_util_stream_TerminatableStream__void(/** TerminatableStream<?> */ previous) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
 }
 /** @override @nodts @return {Stream<T>} */
 m_filter__java_util_function_Predicate__java_util_stream_Stream(/** Predicate<?> */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @template R @return {Stream<R>} */
 m_map__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!Stream}*/ (this);
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_ToIntFunction__java_util_stream_IntStream(/** ToIntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_ToLongFunction__java_util_stream_LongStream(/** ToLongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_ToDoubleFunction__java_util_stream_DoubleStream(/** ToDoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @template R @return {Stream<R>} */
 m_flatMap__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!Stream}*/ (this);
 }
 /** @override @nodts @return {IntStream} */
 m_flatMapToInt__java_util_function_Function__java_util_stream_IntStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {LongStream} */
 m_flatMapToLong__java_util_function_Function__java_util_stream_LongStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {DoubleStream} */
 m_flatMapToDouble__java_util_function_Function__java_util_stream_DoubleStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl_Empty.$create__java_util_stream_TerminatableStream(this);
 }
 /** @override @nodts @return {Stream<T>} */
 m_distinct__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {Stream<T>} */
 m_sorted__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {Stream<T>} */
 m_sorted__java_util_Comparator__java_util_stream_Stream(/** Comparator<?> */ comparator) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {Stream<T>} */
 m_peek__java_util_function_Consumer__java_util_stream_Stream(/** Consumer<?> */ action) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @override @nodts @return {Stream<T>} */
 m_limit__long__java_util_stream_Stream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return this;
 }
 /** @override @nodts @return {Stream<T>} */
 m_skip__long__java_util_stream_Stream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  return this;
 }
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_Consumer__void(/** Consumer<?> */ action) {
  this.m_terminate__void_$pp_java_util_stream();
 }
 /** @override @nodts @return {Array<*>} */
 m_toArray__arrayOf_java_lang_Object() {
  this.m_terminate__void_$pp_java_util_stream();
  return new Array(0);
 }
 /** @override @nodts @template A @return {Array<A>} */
 m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(/** IntFunction<Array<A>> */ generator) {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Array<A>}*/ ($Arrays.$castTo(generator.m_apply__int__java_lang_Object(0), j_l_Object, 1));
 }
 /** @override @nodts @return {T} */
 m_reduce__java_lang_Object__java_util_function_BinaryOperator__java_lang_Object(/** T */ identity, /** BinaryOperator<T> */ accumulator) {
  this.m_terminate__void_$pp_java_util_stream();
  return identity;
 }
 /** @override @nodts @return {Optional<T>} */
 m_reduce__java_util_function_BinaryOperator__java_util_Optional(/** BinaryOperator<T> */ accumulator) {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @template U @return {U} */
 m_reduce__java_lang_Object__java_util_function_BiFunction__java_util_function_BinaryOperator__java_lang_Object(/** U */ identity, /** BiFunction<U, ?, U> */ accumulator, /** BinaryOperator<U> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  return identity;
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** BiConsumer<R, ?> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  return supplier.m_get__java_lang_Object();
 }
 /** @override @nodts @template R, A @return {R} */
 m_collect__java_util_stream_Collector__java_lang_Object(/** Collector<?, A, R> */ collector) {
  this.m_terminate__void_$pp_java_util_stream();
  return collector.m_finisher__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(collector.m_supplier__java_util_function_Supplier().m_get__java_lang_Object());
 }
 /** @override @nodts @return {Optional<T>} */
 m_min__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @return {Optional<T>} */
 m_max__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  return $Long.fromInt(0);
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return false;
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  this.m_terminate__void_$pp_java_util_stream();
  return true;
 }
 /** @override @nodts @return {Optional<T>} */
 m_findFirst__java_util_Optional() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @return {Optional<T>} */
 m_findAny__java_util_Optional() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Iterator<T>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  this.m_terminate__void_$pp_java_util_stream();
  return /**@type {Spliterator<T>}*/ (Spliterators.m_emptySpliterator__java_util_Spliterator());
 }
 /** @override @nodts @return {boolean} */
 m_isParallel__boolean() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return false;
 }
 /** @nodts @return {Stream<T>} */
 m_sequential__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @nodts @return {Stream<T>} */
 m_parallel__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 /** @nodts @return {Stream<T>} */
 m_unordered__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Empty<T>} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {Empty<T>}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), Empty));
 }
 //Bridge method.
 /** @final @override @nodts @return {Stream<T>} */
 m_parallel__java_util_stream_BaseStream() {
  return this.m_parallel__java_util_stream_Stream();
 }
 //Bridge method.
 /** @final @override @nodts @return {Stream<T>} */
 m_sequential__java_util_stream_BaseStream() {
  return this.m_sequential__java_util_stream_Stream();
 }
 //Bridge method.
 /** @final @override @nodts @return {Stream<T>} */
 m_unordered__java_util_stream_BaseStream() {
  return this.m_unordered__java_util_stream_Stream();
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
  j_l_Object = goog.module.get('java.lang.Object$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Optional = goog.module.get('java.util.Optional$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  DoubleStreamImpl_Empty = goog.module.get('java.util.stream.DoubleStreamImpl.Empty$impl');
  IntStreamImpl_Empty = goog.module.get('java.util.stream.IntStreamImpl.Empty$impl');
  LongStreamImpl_Empty = goog.module.get('java.util.stream.LongStreamImpl.Empty$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
Stream.$markImplementor(Empty);
$Util.$setClassMetadata(Empty, 'java.util.stream.StreamImpl$Empty');

exports = Empty;

//# sourceMappingURL=StreamImpl$Empty.js.map
