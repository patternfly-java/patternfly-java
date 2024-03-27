goog.module('java.util.stream.LongStreamImpl$impl');

const LongStream = goog.require('java.util.stream.LongStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let LongSummaryStatistics = goog.forwardDeclare('java.util.LongSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalLong = goog.forwardDeclare('java.util.OptionalLong$impl');
let PrimitiveIterator_OfLong = goog.forwardDeclare('java.util.PrimitiveIterator.OfLong$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
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
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let $1 = goog.forwardDeclare('java.util.stream.LongStreamImpl.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.LongStreamImpl.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.LongStreamImpl.$3$impl');
let FilterSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.FilterSpliterator$impl');
let LimitSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.LimitSpliterator$impl');
let MapToDoubleSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.MapToDoubleSpliterator$impl');
let MapToIntSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.MapToIntSpliterator$impl');
let MapToLongSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.MapToLongSpliterator$impl');
let MapToObjSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.MapToObjSpliterator$impl');
let SkipSpliterator = goog.forwardDeclare('java.util.stream.LongStreamImpl.SkipSpliterator$impl');
let ValueConsumer = goog.forwardDeclare('java.util.stream.LongStreamImpl.ValueConsumer$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @final
 * @extends {TerminatableStream<LongStreamImpl>}
 * @implements {LongStream}
 */
class LongStreamImpl extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfLong} @nodts*/
  this.f_spliterator__java_util_stream_LongStreamImpl_;
 }
 /** @nodts @return {!LongStreamImpl} */
 static $create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(/** TerminatableStream<?> */ previous, /** OfLong */ spliterator) {
  LongStreamImpl.$clinit();
  let $instance = new LongStreamImpl();
  $instance.$ctor__java_util_stream_LongStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong__void(previous, spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong__void(/** TerminatableStream<?> */ previous, /** OfLong */ spliterator) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
  this.f_spliterator__java_util_stream_LongStreamImpl_ = spliterator;
 }
 /** @override @nodts */
 m_forEach__java_util_function_LongConsumer__void(/** LongConsumer */ action) {
  this.m_forEachOrdered__java_util_function_LongConsumer__void(action);
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_LongConsumer__void(/** LongConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
  this.f_spliterator__java_util_stream_LongStreamImpl_.m_forEachRemaining__java_lang_Object__void(action);
 }
 /** @override @nodts @return {Array<!$Long>} */
 m_toArray__arrayOf_long() {
  this.m_terminate__void_$pp_java_util_stream();
  let entries = /**@type {!Array<!$Long>}*/ ($Arrays.$create([0], $$long));
  this.f_spliterator__java_util_stream_LongStreamImpl_.m_forEachRemaining__java_lang_Object__void(LongConsumer.$adapt((/** !$Long */ value) =>{
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(entries, value);
  }));
  return entries;
 }
 /** @override @nodts @return {!$Long} */
 m_reduce__long__java_util_function_LongBinaryOperator__long(/** !$Long */ identity, /** LongBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  holder.f_value__java_util_stream_LongStreamImpl_ValueConsumer = identity;
  this.f_spliterator__java_util_stream_LongStreamImpl_.m_forEachRemaining__java_lang_Object__void(LongConsumer.$adapt((/** !$Long */ value) =>{
   holder.m_accept__long__void(op.m_applyAsLong__long__long__long(holder.f_value__java_util_stream_LongStreamImpl_ValueConsumer, value));
  }));
  return holder.f_value__java_util_stream_LongStreamImpl_ValueConsumer;
 }
 /** @override @nodts @return {OptionalLong} */
 m_reduce__java_util_function_LongBinaryOperator__java_util_OptionalLong(/** LongBinaryOperator */ op) {
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_LongStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalLong.m_of__long__java_util_OptionalLong(this.m_reduce__long__java_util_function_LongBinaryOperator__long(holder.f_value__java_util_stream_LongStreamImpl_ValueConsumer, op));
  }
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjLongConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjLongConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  let acc = supplier.m_get__java_lang_Object();
  this.f_spliterator__java_util_stream_LongStreamImpl_.m_forEachRemaining__java_lang_Object__void(LongConsumer.$adapt((/** !$Long */ value) =>{
   accumulator.m_accept__java_lang_Object__long__void(acc, value);
  }));
  return acc;
 }
 /** @override @nodts @return {!$Long} */
 m_sum__long() {
  return this.m_summaryStatistics__java_util_LongSummaryStatistics().m_getSum__long();
 }
 /** @override @nodts @return {OptionalLong} */
 m_min__java_util_OptionalLong() {
  let stats = this.m_summaryStatistics__java_util_LongSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalLong.m_empty__java_util_OptionalLong();
  }
  return OptionalLong.m_of__long__java_util_OptionalLong(stats.m_getMin__long());
 }
 /** @override @nodts @return {OptionalLong} */
 m_max__java_util_OptionalLong() {
  let stats = this.m_summaryStatistics__java_util_LongSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalLong.m_empty__java_util_OptionalLong();
  }
  return OptionalLong.m_of__long__java_util_OptionalLong(stats.m_getMax__long());
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  let count = $Long.fromInt(0);
  while (this.f_spliterator__java_util_stream_LongStreamImpl_.m_tryAdvance__java_lang_Object__boolean(LongConsumer.$adapt((/** !$Long */ value) =>{}))) {
   count = $LongUtils.plus(count, $Long.fromInt(1));
  }
  return count;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {
  let stats = this.m_summaryStatistics__java_util_LongSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalDouble.m_empty__java_util_OptionalDouble();
  }
  return OptionalDouble.m_of__double__java_util_OptionalDouble(stats.m_getAverage__double());
 }
 /** @override @nodts @return {LongSummaryStatistics} */
 m_summaryStatistics__java_util_LongSummaryStatistics() {
  return /**@type {LongSummaryStatistics}*/ ($Casts.$to(this.m_collect__java_util_function_Supplier__java_util_function_ObjLongConsumer__java_util_function_BiConsumer__java_lang_Object(Supplier.$adapt(() =>{
   return LongSummaryStatistics.$create__();
  }), ObjLongConsumer.$adapt((longSummaryStatistics, /** !$Long */ value) =>{
   let longSummaryStatistics_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(longSummaryStatistics, LongSummaryStatistics));
   longSummaryStatistics_1.m_accept__long__void(value);
  }), BiConsumer.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(arg0, LongSummaryStatistics));
   let arg1_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(arg1, LongSummaryStatistics));
   arg0_1.m_combine__java_util_LongSummaryStatistics__void(arg1_1);
  })), LongSummaryStatistics));
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  return this.m_filter__java_util_function_LongPredicate__java_util_stream_LongStream(predicate).m_findFirst__java_util_OptionalLong().m_isPresent__boolean();
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_LongPredicate__boolean(predicate.m_negate__java_util_function_LongPredicate());
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_LongPredicate__boolean(predicate);
 }
 /** @override @nodts @return {OptionalLong} */
 m_findFirst__java_util_OptionalLong() {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_LongStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalLong.m_of__long__java_util_OptionalLong(holder.f_value__java_util_stream_LongStreamImpl_ValueConsumer);
  }
  return OptionalLong.m_empty__java_util_OptionalLong();
 }
 /** @override @nodts @return {OptionalLong} */
 m_findAny__java_util_OptionalLong() {
  return this.m_findFirst__java_util_OptionalLong();
 }
 /** @override @nodts @return {PrimitiveIterator_OfLong} */
 m_iterator__java_util_PrimitiveIterator_OfLong() {
  return Spliterators.m_iterator__java_util_Spliterator_OfLong__java_util_PrimitiveIterator_OfLong(this.m_spliterator__java_util_Spliterator_OfLong());
 }
 /** @override @nodts @return {OfLong} */
 m_spliterator__java_util_Spliterator_OfLong() {
  this.m_terminate__void_$pp_java_util_stream();
  return this.f_spliterator__java_util_stream_LongStreamImpl_;
 }
 /** @override @nodts @return {LongStream} */
 m_filter__java_util_function_LongPredicate__java_util_stream_LongStream(/** LongPredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, FilterSpliterator.$create__java_util_function_LongPredicate__java_util_Spliterator_OfLong(predicate, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @return {LongStream} */
 m_map__java_util_function_LongUnaryOperator__java_util_stream_LongStream(/** LongUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, MapToLongSpliterator.$create__java_util_function_LongUnaryOperator__java_util_Spliterator_OfLong(mapper, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_LongFunction__java_util_stream_Stream(/** LongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl<U>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!MapToObjSpliterator<U>}*/ (MapToObjSpliterator.$create__java_util_function_LongFunction__java_util_Spliterator_OfLong(mapper, this.f_spliterator__java_util_stream_LongStreamImpl_))));
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_LongToIntFunction__java_util_stream_IntStream(/** LongToIntFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, MapToIntSpliterator.$create__java_util_function_LongToIntFunction__java_util_Spliterator_OfLong(mapper, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_LongToDoubleFunction__java_util_stream_DoubleStream(/** LongToDoubleFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, MapToDoubleSpliterator.$create__java_util_function_LongToDoubleFunction__java_util_Spliterator_OfLong(mapper, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @return {LongStream} */
 m_flatMap__java_util_function_LongFunction__java_util_stream_LongStream(/** LongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<LongStream>}*/ (MapToObjSpliterator.$create__java_util_function_LongFunction__java_util_Spliterator_OfLong(mapper, this.f_spliterator__java_util_stream_LongStreamImpl_));
  let flatMapSpliterator = $1.$create__java_util_stream_LongStreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, flatMapSpliterator);
 }
 /** @override @nodts @return {LongStream} */
 m_distinct__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let seen = /**@type {!HashSet<Long>}*/ (HashSet.$create__());
  return this.m_filter__java_util_function_LongPredicate__java_util_stream_LongStream(LongPredicate.$adapt((/** !$Long */ arg0) =>{
   return seen.add(Long.m_valueOf__long__java_lang_Long(arg0));
  }));
 }
 /** @override @nodts @return {LongStream} */
 m_sorted__java_util_stream_LongStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let sortedSpliterator = $2.$create__java_util_stream_LongStreamImpl__long__int(this, this.f_spliterator__java_util_stream_LongStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_LongStreamImpl_.m_characteristics__int() | Spliterator.f_SORTED__java_util_Spliterator);
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, sortedSpliterator);
 }
 /** @override @nodts @return {LongStream} */
 m_peek__java_util_function_LongConsumer__java_util_stream_LongStream(/** LongConsumer */ action) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(action);
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let peekSpliterator = $3.$create__java_util_stream_LongStreamImpl__java_util_function_LongConsumer__long__int(this, action, this.f_spliterator__java_util_stream_LongStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_LongStreamImpl_.m_characteristics__int());
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, peekSpliterator);
 }
 /** @override @nodts @return {LongStream} */
 m_limit__long__java_util_stream_LongStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, LimitSpliterator.$create__long__java_util_Spliterator_OfLong(maxSize, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @return {LongStream} */
 m_skip__long__java_util_stream_LongStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  if ($LongUtils.equals(n, $Long.fromInt(0))) {
   return this;
  }
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, SkipSpliterator.$create__long__java_util_Spliterator_OfLong(n, this.f_spliterator__java_util_stream_LongStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {
  return this.m_mapToDouble__java_util_function_LongToDoubleFunction__java_util_stream_DoubleStream(LongToDoubleFunction.$adapt((/** !$Long */ x) =>{
   return $Primitives.widenLongToDouble(x);
  }));
 }
 /** @override @nodts @return {Stream<Long>} */
 m_boxed__java_util_stream_Stream() {
  return /**@type {Stream<Long>}*/ (this.m_mapToObj__java_util_function_LongFunction__java_util_stream_Stream(LongFunction.$adapt((/** !$Long */ arg0) =>{
   return Long.m_valueOf__long__java_lang_Long(arg0);
  })));
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
 /** @final @override @nodts @return {PrimitiveIterator_OfLong} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfLong();
 }
 //Bridge method.
 /** @final @override @nodts @return {LongStreamImpl} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {LongStreamImpl}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), LongStreamImpl));
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
 /** @final @override @nodts @return {OfLong} */
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
  LongStreamImpl.$clinit = () =>{};
  LongStreamImpl.$loadModules();
  TerminatableStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongStreamImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  LongSummaryStatistics = goog.module.get('java.util.LongSummaryStatistics$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  OptionalLong = goog.module.get('java.util.OptionalLong$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  LongFunction = goog.module.get('java.util.function.LongFunction$impl');
  LongPredicate = goog.module.get('java.util.function.LongPredicate$impl');
  LongToDoubleFunction = goog.module.get('java.util.function.LongToDoubleFunction$impl');
  ObjLongConsumer = goog.module.get('java.util.function.ObjLongConsumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  DoubleStreamImpl = goog.module.get('java.util.stream.DoubleStreamImpl$impl');
  IntStreamImpl = goog.module.get('java.util.stream.IntStreamImpl$impl');
  $1 = goog.module.get('java.util.stream.LongStreamImpl.$1$impl');
  $2 = goog.module.get('java.util.stream.LongStreamImpl.$2$impl');
  $3 = goog.module.get('java.util.stream.LongStreamImpl.$3$impl');
  FilterSpliterator = goog.module.get('java.util.stream.LongStreamImpl.FilterSpliterator$impl');
  LimitSpliterator = goog.module.get('java.util.stream.LongStreamImpl.LimitSpliterator$impl');
  MapToDoubleSpliterator = goog.module.get('java.util.stream.LongStreamImpl.MapToDoubleSpliterator$impl');
  MapToIntSpliterator = goog.module.get('java.util.stream.LongStreamImpl.MapToIntSpliterator$impl');
  MapToLongSpliterator = goog.module.get('java.util.stream.LongStreamImpl.MapToLongSpliterator$impl');
  MapToObjSpliterator = goog.module.get('java.util.stream.LongStreamImpl.MapToObjSpliterator$impl');
  SkipSpliterator = goog.module.get('java.util.stream.LongStreamImpl.SkipSpliterator$impl');
  ValueConsumer = goog.module.get('java.util.stream.LongStreamImpl.ValueConsumer$impl');
  StreamImpl = goog.module.get('java.util.stream.StreamImpl$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
LongStream.$markImplementor(LongStreamImpl);
$Util.$setClassMetadata(LongStreamImpl, 'java.util.stream.LongStreamImpl');

exports = LongStreamImpl;

//# sourceMappingURL=LongStreamImpl.js.map
