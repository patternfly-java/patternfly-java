goog.module('java.util.stream.DoubleStreamImpl$impl');

const DoubleStream = goog.require('java.util.stream.DoubleStream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let DoubleSummaryStatistics = goog.forwardDeclare('java.util.DoubleSummaryStatistics$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let PrimitiveIterator_OfDouble = goog.forwardDeclare('java.util.PrimitiveIterator.OfDouble$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
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
let $1 = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.$3$impl');
let FilterSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.FilterSpliterator$impl');
let LimitSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.LimitSpliterator$impl');
let MapToDoubleSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.MapToDoubleSpliterator$impl');
let MapToIntSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.MapToIntSpliterator$impl');
let MapToLongSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.MapToLongSpliterator$impl');
let MapToObjSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.MapToObjSpliterator$impl');
let SkipSpliterator = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.SkipSpliterator$impl');
let ValueConsumer = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.ValueConsumer$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
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
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @final
 * @extends {TerminatableStream<DoubleStreamImpl>}
 * @implements {DoubleStream}
 */
class DoubleStreamImpl extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfDouble} @nodts*/
  this.f_spliterator__java_util_stream_DoubleStreamImpl_;
 }
 /** @nodts @return {!DoubleStreamImpl} */
 static $create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(/** TerminatableStream<?> */ previous, /** OfDouble */ spliterator) {
  DoubleStreamImpl.$clinit();
  let $instance = new DoubleStreamImpl();
  $instance.$ctor__java_util_stream_DoubleStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble__void(previous, spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_DoubleStreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble__void(/** TerminatableStream<?> */ previous, /** OfDouble */ spliterator) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(previous);
  this.f_spliterator__java_util_stream_DoubleStreamImpl_ = spliterator;
 }
 /** @override @nodts */
 m_forEach__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {
  this.m_forEachOrdered__java_util_function_DoubleConsumer__void(action);
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {
  this.m_terminate__void_$pp_java_util_stream();
  this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_forEachRemaining__java_lang_Object__void(action);
 }
 /** @override @nodts @return {Array<number>} */
 m_toArray__arrayOf_double() {
  this.m_terminate__void_$pp_java_util_stream();
  let entries = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$double));
  this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_forEachRemaining__java_lang_Object__void(DoubleConsumer.$adapt((/** number */ value) =>{
   ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(entries, value);
  }));
  return entries;
 }
 /** @override @nodts @return {number} */
 m_reduce__double__java_util_function_DoubleBinaryOperator__double(/** number */ identity, /** DoubleBinaryOperator */ op) {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  holder.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer = identity;
  this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_forEachRemaining__java_lang_Object__void(DoubleConsumer.$adapt((/** number */ value) =>{
   holder.m_accept__double__void(op.m_applyAsDouble__double__double__double(holder.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer, value));
  }));
  return holder.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_reduce__java_util_function_DoubleBinaryOperator__java_util_OptionalDouble(/** DoubleBinaryOperator */ op) {
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalDouble.m_of__double__java_util_OptionalDouble(this.m_reduce__double__java_util_function_DoubleBinaryOperator__double(holder.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer, op));
  }
  this.m_terminate__void_$pp_java_util_stream();
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjDoubleConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjDoubleConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  let acc = supplier.m_get__java_lang_Object();
  this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_forEachRemaining__java_lang_Object__void(DoubleConsumer.$adapt((/** number */ value) =>{
   accumulator.m_accept__java_lang_Object__double__void(acc, value);
  }));
  return acc;
 }
 /** @override @nodts @return {number} */
 m_sum__double() {
  return this.m_summaryStatistics__java_util_DoubleSummaryStatistics().m_getSum__double();
 }
 /** @override @nodts @return {OptionalDouble} */
 m_min__java_util_OptionalDouble() {
  let stats = this.m_summaryStatistics__java_util_DoubleSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalDouble.m_empty__java_util_OptionalDouble();
  }
  return OptionalDouble.m_of__double__java_util_OptionalDouble(stats.m_getMin__double());
 }
 /** @override @nodts @return {OptionalDouble} */
 m_max__java_util_OptionalDouble() {
  let stats = this.m_summaryStatistics__java_util_DoubleSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalDouble.m_empty__java_util_OptionalDouble();
  }
  return OptionalDouble.m_of__double__java_util_OptionalDouble(stats.m_getMax__double());
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  let count = $Long.fromInt(0);
  while (this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_tryAdvance__java_lang_Object__boolean(DoubleConsumer.$adapt((/** number */ value) =>{}))) {
   count = $LongUtils.plus(count, $Long.fromInt(1));
  }
  return count;
 }
 /** @override @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {
  let stats = this.m_summaryStatistics__java_util_DoubleSummaryStatistics();
  if ($LongUtils.equals(stats.m_getCount__long(), $Long.fromInt(0))) {
   return OptionalDouble.m_empty__java_util_OptionalDouble();
  }
  return OptionalDouble.m_of__double__java_util_OptionalDouble(stats.m_getAverage__double());
 }
 /** @override @nodts @return {DoubleSummaryStatistics} */
 m_summaryStatistics__java_util_DoubleSummaryStatistics() {
  return /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(this.m_collect__java_util_function_Supplier__java_util_function_ObjDoubleConsumer__java_util_function_BiConsumer__java_lang_Object(Supplier.$adapt(() =>{
   return DoubleSummaryStatistics.$create__();
  }), ObjDoubleConsumer.$adapt((doubleSummaryStatistics, /** number */ value) =>{
   let doubleSummaryStatistics_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(doubleSummaryStatistics, DoubleSummaryStatistics));
   doubleSummaryStatistics_1.m_accept__double__void(value);
  }), BiConsumer.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(arg0, DoubleSummaryStatistics));
   let arg1_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(arg1, DoubleSummaryStatistics));
   arg0_1.m_combine__java_util_DoubleSummaryStatistics__void(arg1_1);
  })), DoubleSummaryStatistics));
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  return this.m_filter__java_util_function_DoublePredicate__java_util_stream_DoubleStream(predicate).m_findFirst__java_util_OptionalDouble().m_isPresent__boolean();
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_DoublePredicate__boolean(predicate.m_negate__java_util_function_DoublePredicate());
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {
  return !this.m_anyMatch__java_util_function_DoublePredicate__boolean(predicate);
 }
 /** @override @nodts @return {OptionalDouble} */
 m_findFirst__java_util_OptionalDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = ValueConsumer.$create__();
  if (this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_tryAdvance__java_lang_Object__boolean(holder)) {
   return OptionalDouble.m_of__double__java_util_OptionalDouble(holder.f_value__java_util_stream_DoubleStreamImpl_ValueConsumer);
  }
  return OptionalDouble.m_empty__java_util_OptionalDouble();
 }
 /** @override @nodts @return {OptionalDouble} */
 m_findAny__java_util_OptionalDouble() {
  return this.m_findFirst__java_util_OptionalDouble();
 }
 /** @override @nodts @return {PrimitiveIterator_OfDouble} */
 m_iterator__java_util_PrimitiveIterator_OfDouble() {
  return Spliterators.m_iterator__java_util_Spliterator_OfDouble__java_util_PrimitiveIterator_OfDouble(this.m_spliterator__java_util_Spliterator_OfDouble());
 }
 /** @override @nodts @return {OfDouble} */
 m_spliterator__java_util_Spliterator_OfDouble() {
  this.m_terminate__void_$pp_java_util_stream();
  return this.f_spliterator__java_util_stream_DoubleStreamImpl_;
 }
 /** @override @nodts @return {DoubleStream} */
 m_filter__java_util_function_DoublePredicate__java_util_stream_DoubleStream(/** DoublePredicate */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, FilterSpliterator.$create__java_util_function_DoublePredicate__java_util_Spliterator_OfDouble(predicate, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_map__java_util_function_DoubleUnaryOperator__java_util_stream_DoubleStream(/** DoubleUnaryOperator */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, MapToDoubleSpliterator.$create__java_util_function_DoubleUnaryOperator__java_util_Spliterator_OfDouble(mapper, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_DoubleFunction__java_util_stream_Stream(/** DoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl<U>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!MapToObjSpliterator<U>}*/ (MapToObjSpliterator.$create__java_util_function_DoubleFunction__java_util_Spliterator_OfDouble(mapper, this.f_spliterator__java_util_stream_DoubleStreamImpl_))));
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_DoubleToIntFunction__java_util_stream_IntStream(/** DoubleToIntFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, MapToIntSpliterator.$create__java_util_function_DoubleToIntFunction__java_util_Spliterator_OfDouble(mapper, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_DoubleToLongFunction__java_util_stream_LongStream(/** DoubleToLongFunction */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, MapToLongSpliterator.$create__java_util_function_DoubleToLongFunction__java_util_Spliterator_OfDouble(mapper, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_flatMap__java_util_function_DoubleFunction__java_util_stream_DoubleStream(/** DoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<DoubleStream>}*/ (MapToObjSpliterator.$create__java_util_function_DoubleFunction__java_util_Spliterator_OfDouble(mapper, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
  let flatMapSpliterator = $1.$create__java_util_stream_DoubleStreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, flatMapSpliterator);
 }
 /** @override @nodts @return {DoubleStream} */
 m_distinct__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let seen = /**@type {!HashSet<?number>}*/ (HashSet.$create__());
  return this.m_filter__java_util_function_DoublePredicate__java_util_stream_DoubleStream(DoublePredicate.$adapt((/** number */ arg0) =>{
   return seen.add(arg0);
  }));
 }
 /** @override @nodts @return {DoubleStream} */
 m_sorted__java_util_stream_DoubleStream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let sortingSpliterator = $2.$create__java_util_stream_DoubleStreamImpl__long__int(this, this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_characteristics__int() | Spliterator.f_SORTED__java_util_Spliterator);
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, sortingSpliterator);
 }
 /** @override @nodts @return {DoubleStream} */
 m_peek__java_util_function_DoubleConsumer__java_util_stream_DoubleStream(/** DoubleConsumer */ action) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(action);
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let peekSpliterator = $3.$create__java_util_stream_DoubleStreamImpl__java_util_function_DoubleConsumer__long__int(this, action, this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_DoubleStreamImpl_.m_characteristics__int());
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, peekSpliterator);
 }
 /** @override @nodts @return {DoubleStream} */
 m_limit__long__java_util_stream_DoubleStream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, LimitSpliterator.$create__long__java_util_Spliterator_OfDouble(maxSize, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @return {DoubleStream} */
 m_skip__long__java_util_stream_DoubleStream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  if ($LongUtils.equals(n, $Long.fromInt(0))) {
   return this;
  }
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, SkipSpliterator.$create__long__java_util_Spliterator_OfDouble(n, this.f_spliterator__java_util_stream_DoubleStreamImpl_));
 }
 /** @override @nodts @return {Stream<?number>} */
 m_boxed__java_util_stream_Stream() {
  return /**@type {Stream<?number>}*/ (this.m_mapToObj__java_util_function_DoubleFunction__java_util_stream_Stream(DoubleFunction.$adapt((/** number */ arg0) =>{
   return Double.m_valueOf__double__java_lang_Double(arg0);
  })));
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
 /** @final @override @nodts @return {PrimitiveIterator_OfDouble} */
 m_iterator__java_util_Iterator() {
  return this.m_iterator__java_util_PrimitiveIterator_OfDouble();
 }
 //Bridge method.
 /** @final @override @nodts @return {DoubleStreamImpl} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {DoubleStreamImpl}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), DoubleStreamImpl));
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
 /** @final @override @nodts @return {OfDouble} */
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
  DoubleStreamImpl.$clinit = () =>{};
  DoubleStreamImpl.$loadModules();
  TerminatableStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleStreamImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Long = goog.module.get('java.lang.Long$impl');
  DoubleSummaryStatistics = goog.module.get('java.util.DoubleSummaryStatistics$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  OptionalDouble = goog.module.get('java.util.OptionalDouble$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  DoubleFunction = goog.module.get('java.util.function.DoubleFunction$impl');
  DoublePredicate = goog.module.get('java.util.function.DoublePredicate$impl');
  ObjDoubleConsumer = goog.module.get('java.util.function.ObjDoubleConsumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $1 = goog.module.get('java.util.stream.DoubleStreamImpl.$1$impl');
  $2 = goog.module.get('java.util.stream.DoubleStreamImpl.$2$impl');
  $3 = goog.module.get('java.util.stream.DoubleStreamImpl.$3$impl');
  FilterSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.FilterSpliterator$impl');
  LimitSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.LimitSpliterator$impl');
  MapToDoubleSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.MapToDoubleSpliterator$impl');
  MapToIntSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.MapToIntSpliterator$impl');
  MapToLongSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.MapToLongSpliterator$impl');
  MapToObjSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.MapToObjSpliterator$impl');
  SkipSpliterator = goog.module.get('java.util.stream.DoubleStreamImpl.SkipSpliterator$impl');
  ValueConsumer = goog.module.get('java.util.stream.DoubleStreamImpl.ValueConsumer$impl');
  IntStreamImpl = goog.module.get('java.util.stream.IntStreamImpl$impl');
  LongStreamImpl = goog.module.get('java.util.stream.LongStreamImpl$impl');
  StreamImpl = goog.module.get('java.util.stream.StreamImpl$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
DoubleStream.$markImplementor(DoubleStreamImpl);
$Util.$setClassMetadata(DoubleStreamImpl, 'java.util.stream.DoubleStreamImpl');

exports = DoubleStreamImpl;

//# sourceMappingURL=DoubleStreamImpl.js.map
