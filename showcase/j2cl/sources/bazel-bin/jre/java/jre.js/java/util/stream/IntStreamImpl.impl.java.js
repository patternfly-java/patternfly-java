goog.module('java.util.stream.IntStreamImpl$impl');

const IntStream = goog.require('java.util.stream.IntStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let IntSummaryStatistics = goog.forwardDeclare('java.util.IntSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalInt = goog.forwardDeclare('java.util.OptionalInt$impl');
let PrimitiveIterator_OfInt = goog.forwardDeclare('java.util.PrimitiveIterator.OfInt$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
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
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let $1 = goog.forwardDeclare('java.util.stream.IntStreamImpl.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.IntStreamImpl.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.IntStreamImpl.$3$impl');
let FilterSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.FilterSpliterator$impl');
let LimitSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.LimitSpliterator$impl');
let MapToDoubleSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.MapToDoubleSpliterator$impl');
let MapToIntSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.MapToIntSpliterator$impl');
let MapToLongSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.MapToLongSpliterator$impl');
let MapToObjSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.MapToObjSpliterator$impl');
let SkipSpliterator = goog.forwardDeclare('java.util.stream.IntStreamImpl.SkipSpliterator$impl');
let ValueConsumer = goog.forwardDeclare('java.util.stream.IntStreamImpl.ValueConsumer$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl = goog.forwardDeclare('java.util.stream.LongStreamImpl$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @final
 * @extends {TerminatableStream<IntStreamImpl>}
 * @implements {IntStream}
 */
class IntStreamImpl extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfInt} @nodts*/
  this.f_spliterator__java_util_stream_IntStreamImpl_;
 }
 /** @nodts @return {!IntStreamImpl} */
 static $create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(/** TerminatableStream<?> */ previous, /** OfInt */ spliterator) {
  IntStreamImpl.$clinit();
  let $instance = new IntStreamImpl();
  $instance.$ctor__java_util_stream_IntStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt__void(previous, spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt__void(/** TerminatableStream<?> */ previous, /** OfInt */ spliterator) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
  this.f_spliterator__java_util_stream_IntStreamImpl_ = spliterator;
 }
 /** @override @nodts @return {OfInt} */
 m_spliterator__java_util_Spliterator_OfInt() {
  this.m_terminate__void_$pp_java_util_stream();
  return this.f_spliterator__java_util_stream_IntStreamImpl_;
 }
 /** @override @nodts @return {PrimitiveIterator_OfInt} */
 m_iterator__java_util_PrimitiveIterator_OfInt() {
  return Spliterators.m_iterator__java_util_Spliterator_OfInt__java_util_PrimitiveIterator_OfInt(this.m_spliterator__java_util_Spliterator_OfInt());
 }
 /** @override @nodts @return {OptionalInt} */
 m_findFirst__java_util_OptionalInt() {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_IntStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalInt.m_of__int__java_util_OptionalInt(holder.f_value__java_util_stream_IntStreamImpl_ValueConsumer);
  }
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @return {OptionalInt} */
 m_findAny__java_util_OptionalInt() {
  return this.m_findFirst__java_util_OptionalInt();
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_IntPredicate__boolean(predicate);
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_IntPredicate__boolean(predicate.m_negate__java_util_function_IntPredicate());
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {
  return this.m_filter__java_util_function_IntPredicate__java_util_stream_IntStream(predicate).m_findFirst__java_util_OptionalInt().m_isPresent__boolean();
 }
 /** @override @nodts @return {IntSummaryStatistics} */
 m_summaryStatistics__java_util_IntSummaryStatistics() {
  return /**@type {IntSummaryStatistics}*/ ($Casts.$to(this.m_collect__java_util_function_Supplier__java_util_function_ObjIntConsumer__java_util_function_BiConsumer__java_lang_Object(Supplier.$adapt(() =>{
   return IntSummaryStatistics.$create__();
  }), ObjIntConsumer.$adapt((intSummaryStatistics, /** number */ value) =>{
   let intSummaryStatistics_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(intSummaryStatistics, IntSummaryStatistics));
   intSummaryStatistics_1.m_accept__int__void(value);
  }), BiConsumer.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(arg0, IntSummaryStatistics));
   let arg1_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(arg1, IntSummaryStatistics));
   arg0_1.m_combine__java_util_IntSummaryStatistics__void(arg1_1);
  })), IntSummaryStatistics));
 }
 /** @override @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {
  let stats = this.m_summaryStatistics__java_util_IntSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalDouble.m_empty__java_util_OptionalDouble();
  }
  return OptionalDouble.m_of__double__java_util_OptionalDouble(stats.m_getAverage__double());
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  let count = $Long.fromInt(0);
  while (this.f_spliterator__java_util_stream_IntStreamImpl_.m_tryAdvance__java_lang_Object__boolean(IntConsumer.$adapt((/** number */ value) =>{}))) {
   count = $LongUtils.plus(count, $Long.fromInt(1));
  }
  return count;
 }
 /** @override @nodts @return {OptionalInt} */
 m_max__java_util_OptionalInt() {
  let stats = this.m_summaryStatistics__java_util_IntSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalInt.m_empty__java_util_OptionalInt();
  }
  return OptionalInt.m_of__int__java_util_OptionalInt(stats.m_getMax__int());
 }
 /** @override @nodts @return {OptionalInt} */
 m_min__java_util_OptionalInt() {
  let stats = this.m_summaryStatistics__java_util_IntSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalInt.m_empty__java_util_OptionalInt();
  }
  return OptionalInt.m_of__int__java_util_OptionalInt(stats.m_getMin__int());
 }
 /** @override @nodts @return {number} */
 m_sum__int() {
  return $Primitives.narrowLongToInt(this.m_summaryStatistics__java_util_IntSummaryStatistics().m_getSum__long());
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjIntConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjIntConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  let acc = supplier.m_get__java_lang_Object();
  this.f_spliterator__java_util_stream_IntStreamImpl_.m_forEachRemaining__java_lang_Object__void(IntConsumer.$adapt((/** number */ value) =>{
   accumulator.m_accept__java_lang_Object__int__void(acc, value);
  }));
  return acc;
 }
 /** @override @nodts @return {OptionalInt} */
 m_reduce__java_util_function_IntBinaryOperator__java_util_OptionalInt(/** IntBinaryOperator */ op) {
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_IntStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalInt.m_of__int__java_util_OptionalInt(this.m_reduce__int__java_util_function_IntBinaryOperator__int(holder.f_value__java_util_stream_IntStreamImpl_ValueConsumer, op));
  }
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalInt.m_empty__java_util_OptionalInt();
 }
 /** @override @nodts @return {number} */
 m_reduce__int__java_util_function_IntBinaryOperator__int(/** number */ identity, /** IntBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  holder.f_value__java_util_stream_IntStreamImpl_ValueConsumer = identity;
  this.f_spliterator__java_util_stream_IntStreamImpl_.m_forEachRemaining__java_lang_Object__void(IntConsumer.$adapt((/** number */ value) =>{
   holder.m_accept__int__void(op.m_applyAsInt__int__int__int(holder.f_value__java_util_stream_IntStreamImpl_ValueConsumer, value));
  }));
  return holder.f_value__java_util_stream_IntStreamImpl_ValueConsumer;
 }
 /** @override @nodts @return {Array<number>} */
 m_toArray__arrayOf_int() {
  this.m_terminate__void_$pp_java_util_stream();
  let entries = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$int));
  this.f_spliterator__java_util_stream_IntStreamImpl_.m_forEachRemaining__java_lang_Object__void(IntConsumer.$adapt((/** number */ value) =>{
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(entries, value);
  }));
  return entries;
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_IntConsumer__void(/** IntConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
  this.f_spliterator__java_util_stream_IntStreamImpl_.m_forEachRemaining__java_lang_Object__void(action);
 }
 /** @override @nodts */
 m_forEach__java_util_function_IntConsumer__void(/** IntConsumer */ action) {
  this.m_forEachOrdered__java_util_function_IntConsumer__void(action);
 }
 /** @override @nodts @return {IntStream} */
 m_filter__java_util_function_IntPredicate__java_util_stream_IntStream(/** IntPredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, FilterSpliterator.$create__java_util_function_IntPredicate__java_util_Spliterator_OfInt(predicate, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @return {IntStream} */
 m_map__java_util_function_IntUnaryOperator__java_util_stream_IntStream(/** IntUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, MapToIntSpliterator.$create__java_util_function_IntUnaryOperator__java_util_Spliterator_OfInt(mapper, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_IntFunction__java_util_stream_Stream(/** IntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl<U>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!MapToObjSpliterator<U>}*/ (MapToObjSpliterator.$create__java_util_function_IntFunction__java_util_Spliterator_OfInt(mapper, this.f_spliterator__java_util_stream_IntStreamImpl_))));
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_IntToLongFunction__java_util_stream_LongStream(/** IntToLongFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, MapToLongSpliterator.$create__java_util_function_IntToLongFunction__java_util_Spliterator_OfInt(mapper, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_IntToDoubleFunction__java_util_stream_DoubleStream(/** IntToDoubleFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, MapToDoubleSpliterator.$create__java_util_function_IntToDoubleFunction__java_util_Spliterator_OfInt(mapper, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @return {IntStream} */
 m_flatMap__java_util_function_IntFunction__java_util_stream_IntStream(/** IntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<IntStream>}*/ (MapToObjSpliterator.$create__java_util_function_IntFunction__java_util_Spliterator_OfInt(mapper, this.f_spliterator__java_util_stream_IntStreamImpl_));
  let flatMapSpliterator = $1.$create__java_util_stream_IntStreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, flatMapSpliterator);
 }
 /** @override @nodts @return {IntStream} */
 m_distinct__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let seen = /**@type {!HashSet<Integer>}*/ (HashSet.$create__());
  return this.m_filter__java_util_function_IntPredicate__java_util_stream_IntStream(IntPredicate.$adapt((/** number */ arg0) =>{
   return seen.add(Integer.m_valueOf__int__java_lang_Integer(arg0));
  }));
 }
 /** @override @nodts @return {IntStream} */
 m_sorted__java_util_stream_IntStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let sortedSpliterator = $2.$create__java_util_stream_IntStreamImpl__long__int(this, this.f_spliterator__java_util_stream_IntStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_IntStreamImpl_.m_characteristics__int() | Spliterator.f_SORTED__java_util_Spliterator);
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, sortedSpliterator);
 }
 /** @override @nodts @return {IntStream} */
 m_peek__java_util_function_IntConsumer__java_util_stream_IntStream(/** IntConsumer */ action) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(action);
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let peekSpliterator = $3.$create__java_util_stream_IntStreamImpl__java_util_function_IntConsumer__long__int(this, action, this.f_spliterator__java_util_stream_IntStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_IntStreamImpl_.m_characteristics__int());
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, peekSpliterator);
 }
 /** @override @nodts @return {IntStream} */
 m_limit__long__java_util_stream_IntStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, LimitSpliterator.$create__long__java_util_Spliterator_OfInt(maxSize, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @return {IntStream} */
 m_skip__long__java_util_stream_IntStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  if ($LongUtils.equals(n, $Long.fromInt(0))) {
   return this;
  }
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, SkipSpliterator.$create__long__java_util_Spliterator_OfInt(n, this.f_spliterator__java_util_stream_IntStreamImpl_));
 }
 /** @override @nodts @return {LongStream} */
 m_asLongStream__java_util_stream_LongStream() {
  return this.m_mapToLong__java_util_function_IntToLongFunction__java_util_stream_LongStream(IntToLongFunction.$adapt((/** number */ i) =>{
   return $Primitives.widenIntToLong(i);
  }));
 }
 /** @override @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {
  return this.m_mapToDouble__java_util_function_IntToDoubleFunction__java_util_stream_DoubleStream(IntToDoubleFunction.$adapt((/** number */ i) =>{
   return i;
  }));
 }
 /** @override @nodts @return {Stream<Integer>} */
 m_boxed__java_util_stream_Stream() {
  return /**@type {Stream<Integer>}*/ (this.m_mapToObj__java_util_function_IntFunction__java_util_stream_Stream(IntFunction.$adapt((/** number */ arg0) =>{
   return Integer.m_valueOf__int__java_lang_Integer(arg0);
  })));
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
 /** @final @override @nodts @return {PrimitiveIterator_OfInt} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfInt();
 }
 //Bridge method.
 /** @final @override @nodts @return {IntStreamImpl} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {IntStreamImpl}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), IntStreamImpl));
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
 /** @final @override @nodts @return {OfInt} */
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
  IntStreamImpl.$clinit = () =>{};
  IntStreamImpl.$loadModules();
  TerminatableStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntStreamImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  IntSummaryStatistics = goog.module.get('java.util.IntSummaryStatistics$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  OptionalInt = goog.module.get('java.util.OptionalInt$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  IntFunction = goog.module.get('java.util.function.IntFunction$impl');
  IntPredicate = goog.module.get('java.util.function.IntPredicate$impl');
  IntToDoubleFunction = goog.module.get('java.util.function.IntToDoubleFunction$impl');
  IntToLongFunction = goog.module.get('java.util.function.IntToLongFunction$impl');
  ObjIntConsumer = goog.module.get('java.util.function.ObjIntConsumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  DoubleStreamImpl = goog.module.get('java.util.stream.DoubleStreamImpl$impl');
  $1 = goog.module.get('java.util.stream.IntStreamImpl.$1$impl');
  $2 = goog.module.get('java.util.stream.IntStreamImpl.$2$impl');
  $3 = goog.module.get('java.util.stream.IntStreamImpl.$3$impl');
  FilterSpliterator = goog.module.get('java.util.stream.IntStreamImpl.FilterSpliterator$impl');
  LimitSpliterator = goog.module.get('java.util.stream.IntStreamImpl.LimitSpliterator$impl');
  MapToDoubleSpliterator = goog.module.get('java.util.stream.IntStreamImpl.MapToDoubleSpliterator$impl');
  MapToIntSpliterator = goog.module.get('java.util.stream.IntStreamImpl.MapToIntSpliterator$impl');
  MapToLongSpliterator = goog.module.get('java.util.stream.IntStreamImpl.MapToLongSpliterator$impl');
  MapToObjSpliterator = goog.module.get('java.util.stream.IntStreamImpl.MapToObjSpliterator$impl');
  SkipSpliterator = goog.module.get('java.util.stream.IntStreamImpl.SkipSpliterator$impl');
  ValueConsumer = goog.module.get('java.util.stream.IntStreamImpl.ValueConsumer$impl');
  LongStreamImpl = goog.module.get('java.util.stream.LongStreamImpl$impl');
  StreamImpl = goog.module.get('java.util.stream.StreamImpl$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
IntStream.$markImplementor(IntStreamImpl);
$Util.$setClassMetadata(IntStreamImpl, 'java.util.stream.IntStreamImpl');

exports = IntStreamImpl;

//# sourceMappingURL=IntStreamImpl.js.map
