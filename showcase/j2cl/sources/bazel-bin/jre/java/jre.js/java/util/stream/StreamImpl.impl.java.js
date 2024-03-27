goog.module('java.util.stream.StreamImpl$impl');

const Stream = goog.require('java.util.stream.Stream$impl');
const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Object = goog.forwardDeclare('java.lang.Object$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
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
let Characteristics = goog.forwardDeclare('java.util.stream.Collector.Characteristics$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let LongStreamImpl = goog.forwardDeclare('java.util.stream.LongStreamImpl$impl');
let $1 = goog.forwardDeclare('java.util.stream.StreamImpl.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.StreamImpl.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.StreamImpl.$3$impl');
let $4 = goog.forwardDeclare('java.util.stream.StreamImpl.$4$impl');
let $5 = goog.forwardDeclare('java.util.stream.StreamImpl.$5$impl');
let $6 = goog.forwardDeclare('java.util.stream.StreamImpl.$6$impl');
let FilterSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.FilterSpliterator$impl');
let LimitSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.LimitSpliterator$impl');
let MapToDoubleSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.MapToDoubleSpliterator$impl');
let MapToIntSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.MapToIntSpliterator$impl');
let MapToLongSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.MapToLongSpliterator$impl');
let MapToObjSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.MapToObjSpliterator$impl');
let SkipSpliterator = goog.forwardDeclare('java.util.stream.StreamImpl.SkipSpliterator$impl');
let ValueConsumer = goog.forwardDeclare('java.util.stream.StreamImpl.ValueConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @final
 * @template T
 * @extends {TerminatableStream<StreamImpl<T>>}
 * @implements {Stream<T>}
 */
class StreamImpl extends TerminatableStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Spliterator<T>} @nodts*/
  this.f_spliterator__java_util_stream_StreamImpl_;
 }
 /** @nodts @template T @return {!StreamImpl<T>} */
 static $create__java_util_stream_TerminatableStream__java_util_Spliterator(/** TerminatableStream<?> */ prev, /** Spliterator<T> */ spliterator) {
  StreamImpl.$clinit();
  let $instance = new StreamImpl();
  $instance.$ctor__java_util_stream_StreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator__void(prev, spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl__java_util_stream_TerminatableStream__java_util_Spliterator__void(/** TerminatableStream<?> */ prev, /** Spliterator<T> */ spliterator) {
  this.$ctor__java_util_stream_TerminatableStream__java_util_stream_TerminatableStream__void(prev);
  this.f_spliterator__java_util_stream_StreamImpl_ = spliterator;
 }
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  this.m_terminate__void_$pp_java_util_stream();
  return this.f_spliterator__java_util_stream_StreamImpl_;
 }
 /** @override @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {
  return /**@type {Iterator<T>}*/ (Spliterators.m_iterator__java_util_Spliterator__java_util_Iterator(this.m_spliterator__java_util_Spliterator()));
 }
 /** @override @nodts @return {!$Long} */
 m_count__long() {
  this.m_terminate__void_$pp_java_util_stream();
  let count = $Long.fromInt(0);
  while (this.f_spliterator__java_util_stream_StreamImpl_.m_tryAdvance__java_util_function_Consumer__boolean(Consumer.$adapt((/** ? */ a) =>{}))) {
   count = $LongUtils.plus(count, $Long.fromInt(1));
  }
  return count;
 }
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ action) {
  this.m_forEachOrdered__java_util_function_Consumer__void(action);
 }
 /** @override @nodts */
 m_forEachOrdered__java_util_function_Consumer__void(/** Consumer<?> */ action) {
  this.m_terminate__void_$pp_java_util_stream();
  this.f_spliterator__java_util_stream_StreamImpl_.m_forEachRemaining__java_util_function_Consumer__void(action);
 }
 /** @override @nodts @return {Array<*>} */
 m_toArray__arrayOf_java_lang_Object() {
  return this.m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(IntFunction.$adapt((/** number */ arg0) =>{
   return new Array(arg0);
  }));
 }
 /** @override @nodts @template A @return {Array<A>} */
 m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(/** IntFunction<Array<A>> */ generator) {
  let collected = /**@type {List<T>}*/ ($Casts.$to(this.m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<T, *, List<T>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
  return collected.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {Array<A>}*/ ($Arrays.$castTo(generator.m_apply__int__java_lang_Object(collected.size()), j_l_Object, 1)));
 }
 /** @override @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** BiConsumer<R, ?> */ accumulator, /** BiConsumer<R, R> */ combiner) {
  return this.m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<*, R, R>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(supplier, accumulator, BinaryOperator.$adapt((/** R */ a, /** R */ b) =>{
   combiner.m_accept__java_lang_Object__java_lang_Object__void(a, b);
   return a;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics)))));
 }
 /** @override @nodts @template R, A @return {R} */
 m_collect__java_util_stream_Collector__java_lang_Object(/** Collector<?, A, R> */ collector) {
  return collector.m_finisher__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(this.m_reduce__java_lang_Object__java_util_function_BiFunction__java_util_function_BinaryOperator__java_lang_Object(collector.m_supplier__java_util_function_Supplier().m_get__java_lang_Object(), BiFunction.$adapt((/** A */ a, /** ? */ t) =>{
   collector.m_accumulator__java_util_function_BiConsumer().m_accept__java_lang_Object__java_lang_Object__void(a, t);
   return a;
  }), collector.m_combiner__java_util_function_BinaryOperator()));
 }
 /** @override @nodts @return {Optional<T>} */
 m_findFirst__java_util_Optional() {
  this.m_terminate__void_$pp_java_util_stream();
  let holder = /**@type {!ValueConsumer<T>}*/ (ValueConsumer.$create__());
  if (this.f_spliterator__java_util_stream_StreamImpl_.m_tryAdvance__java_util_function_Consumer__boolean(holder)) {
   return /**@type {Optional<T>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(holder.f_value__java_util_stream_StreamImpl_ValueConsumer));
  }
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @override @nodts @return {Optional<T>} */
 m_findAny__java_util_Optional() {
  return this.m_findFirst__java_util_Optional();
 }
 /** @override @nodts @return {boolean} */
 m_anyMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  return this.m_filter__java_util_function_Predicate__java_util_stream_Stream(predicate).m_spliterator__java_util_Spliterator().m_tryAdvance__java_util_function_Consumer__boolean(StreamImpl.f_NULL_CONSUMER__java_util_stream_StreamImpl_);
 }
 /** @override @nodts @return {boolean} */
 m_allMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  return !this.m_anyMatch__java_util_function_Predicate__boolean(predicate.m_negate__java_util_function_Predicate());
 }
 /** @override @nodts @return {boolean} */
 m_noneMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {
  return !this.m_anyMatch__java_util_function_Predicate__boolean(predicate);
 }
 /** @override @nodts @return {Optional<T>} */
 m_min__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {
  return this.m_reduce__java_util_function_BinaryOperator__java_util_Optional(/**@type {BinaryOperator<T>}*/ (BinaryOperator.m_minBy__java_util_Comparator__java_util_function_BinaryOperator(comparator)));
 }
 /** @override @nodts @return {Optional<T>} */
 m_max__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {
  return this.m_reduce__java_util_function_BinaryOperator__java_util_Optional(/**@type {BinaryOperator<T>}*/ (BinaryOperator.m_maxBy__java_util_Comparator__java_util_function_BinaryOperator(comparator)));
 }
 /** @override @nodts @return {T} */
 m_reduce__java_lang_Object__java_util_function_BinaryOperator__java_lang_Object(/** T */ identity, /** BinaryOperator<T> */ accumulator) {
  return this.m_reduce__java_lang_Object__java_util_function_BiFunction__java_util_function_BinaryOperator__java_lang_Object(identity, accumulator, accumulator);
 }
 /** @override @nodts @return {Optional<T>} */
 m_reduce__java_util_function_BinaryOperator__java_util_Optional(/** BinaryOperator<T> */ accumulator) {
  let consumer = /**@type {!ValueConsumer<T>}*/ (ValueConsumer.$create__());
  if (!this.f_spliterator__java_util_stream_StreamImpl_.m_tryAdvance__java_util_function_Consumer__boolean(consumer)) {
   this.m_terminate__void_$pp_java_util_stream();
   return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
  }
  return /**@type {Optional<T>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(this.m_reduce__java_lang_Object__java_util_function_BinaryOperator__java_lang_Object(consumer.f_value__java_util_stream_StreamImpl_ValueConsumer, accumulator)));
 }
 /** @override @nodts @template U @return {U} */
 m_reduce__java_lang_Object__java_util_function_BiFunction__java_util_function_BinaryOperator__java_lang_Object(/** U */ identity, /** BiFunction<U, ?, U> */ accumulator, /** BinaryOperator<U> */ combiner) {
  this.m_terminate__void_$pp_java_util_stream();
  let consumer = /**@type {!ValueConsumer<U>}*/ (ValueConsumer.$create__());
  consumer.f_value__java_util_stream_StreamImpl_ValueConsumer = identity;
  this.f_spliterator__java_util_stream_StreamImpl_.m_forEachRemaining__java_util_function_Consumer__void(Consumer.$adapt((/** ? */ item) =>{
   consumer.m_accept__java_lang_Object__void(accumulator.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(consumer.f_value__java_util_stream_StreamImpl_ValueConsumer, item));
  }));
  return consumer.f_value__java_util_stream_StreamImpl_ValueConsumer;
 }
 /** @override @nodts @return {Stream<T>} */
 m_filter__java_util_function_Predicate__java_util_stream_Stream(/** Predicate<?> */ predicate) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!FilterSpliterator<T>}*/ (FilterSpliterator.$create__java_util_function_Predicate__java_util_Spliterator(predicate, this.f_spliterator__java_util_stream_StreamImpl_))));
 }
 /** @override @nodts @template R @return {Stream<R>} */
 m_map__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return /**@type {!StreamImpl<R>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!MapToObjSpliterator<T, R>}*/ (MapToObjSpliterator.$create__java_util_function_Function__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_))));
 }
 /** @override @nodts @return {IntStream} */
 m_mapToInt__java_util_function_ToIntFunction__java_util_stream_IntStream(/** ToIntFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, /**@type {!MapToIntSpliterator<T>}*/ (MapToIntSpliterator.$create__java_util_function_ToIntFunction__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_)));
 }
 /** @override @nodts @return {LongStream} */
 m_mapToLong__java_util_function_ToLongFunction__java_util_stream_LongStream(/** ToLongFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, /**@type {!MapToLongSpliterator<T>}*/ (MapToLongSpliterator.$create__java_util_function_ToLongFunction__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_)));
 }
 /** @override @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_ToDoubleFunction__java_util_stream_DoubleStream(/** ToDoubleFunction<?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, /**@type {!MapToDoubleSpliterator<T>}*/ (MapToDoubleSpliterator.$create__java_util_function_ToDoubleFunction__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_)));
 }
 /** @override @nodts @template R @return {Stream<R>} */
 m_flatMap__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<T, Stream>}*/ (MapToObjSpliterator.$create__java_util_function_Function__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_));
  let flatMapSpliterator = /**@type {!$1<R, T>}*/ ($1.$create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0));
  return /**@type {!StreamImpl<R>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, flatMapSpliterator));
 }
 /** @override @nodts @return {IntStream} */
 m_flatMapToInt__java_util_function_Function__java_util_stream_IntStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<T, IntStream>}*/ (MapToObjSpliterator.$create__java_util_function_Function__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_));
  let flatMapSpliterator = /**@type {!$2<T>}*/ ($2.$create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0));
  return IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(this, flatMapSpliterator);
 }
 /** @override @nodts @return {LongStream} */
 m_flatMapToLong__java_util_function_Function__java_util_stream_LongStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<T, LongStream>}*/ (MapToObjSpliterator.$create__java_util_function_Function__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_));
  let flatMapSpliterator = /**@type {!$3<T>}*/ ($3.$create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0));
  return LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(this, flatMapSpliterator);
 }
 /** @override @nodts @return {DoubleStream} */
 m_flatMapToDouble__java_util_function_Function__java_util_stream_DoubleStream(/** j_u_function_Function<?, ?> */ mapper) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let spliteratorOfStreams = /**@type {!MapToObjSpliterator<T, DoubleStream>}*/ (MapToObjSpliterator.$create__java_util_function_Function__java_util_Spliterator(mapper, this.f_spliterator__java_util_stream_StreamImpl_));
  let flatMapSpliterator = /**@type {!$4<T>}*/ ($4.$create__java_util_stream_StreamImpl__java_util_Spliterator__long__int(this, spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0));
  return DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(this, flatMapSpliterator);
 }
 /** @override @nodts @return {Stream<T>} */
 m_distinct__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let seen = /**@type {!HashSet<T>}*/ (HashSet.$create__());
  return this.m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((/** ? */ arg0) =>{
   return seen.add(arg0);
  }));
 }
 /** @override @nodts @return {Stream<T>} */
 m_sorted__java_util_stream_Stream() {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let c = /**@type {Comparator}*/ (Comparator.m_naturalOrder__java_util_Comparator());
  return this.m_sorted__java_util_Comparator__java_util_stream_Stream(c);
 }
 /** @override @nodts @return {Stream<T>} */
 m_sorted__java_util_Comparator__java_util_stream_Stream(/** Comparator<?> */ comparator) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let sortedSpliterator = /**@type {!$5<T>}*/ ($5.$create__java_util_stream_StreamImpl__java_util_Comparator__long__int(this, comparator, this.f_spliterator__java_util_stream_StreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_StreamImpl_.m_characteristics__int() | Spliterator.f_SORTED__java_util_Spliterator));
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, sortedSpliterator));
 }
 /** @override @nodts @return {Stream<T>} */
 m_peek__java_util_function_Consumer__java_util_stream_Stream(/** Consumer<?> */ action) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(action);
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  let peekSpliterator = /**@type {!$6<T>}*/ ($6.$create__java_util_stream_StreamImpl__java_util_function_Consumer__long__int(this, action, this.f_spliterator__java_util_stream_StreamImpl_.m_estimateSize__long(), this.f_spliterator__java_util_stream_StreamImpl_.m_characteristics__int()));
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, peekSpliterator));
 }
 /** @override @nodts @return {Stream<T>} */
 m_limit__long__java_util_stream_Stream(/** !$Long */ maxSize) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(maxSize, $Long.fromInt(0)), 'maxSize may not be negative');
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!LimitSpliterator<T>}*/ (LimitSpliterator.$create__long__java_util_Spliterator(maxSize, this.f_spliterator__java_util_stream_StreamImpl_))));
 }
 /** @override @nodts @return {Stream<T>} */
 m_skip__long__java_util_stream_Stream(/** !$Long */ n) {
  this.m_throwIfTerminated__void_$pp_java_util_stream();
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void($LongUtils.greaterEquals(n, $Long.fromInt(0)), 'n may not be negative');
  if ($LongUtils.equals(n, $Long.fromInt(0))) {
   return this;
  }
  return /**@type {!StreamImpl<T>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(this, /**@type {!SkipSpliterator<T>}*/ (SkipSpliterator.$create__long__java_util_Spliterator(n, this.f_spliterator__java_util_stream_StreamImpl_))));
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
 /** @final @override @nodts @return {StreamImpl<T>} */
 m_onClose__java_lang_Runnable__java_util_stream_BaseStream(/** Runnable */ arg0) {
  return /**@type {StreamImpl<T>}*/ ($Casts.$to(this.m_onClose__java_lang_Runnable__java_util_stream_TerminatableStream(arg0), StreamImpl));
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
  StreamImpl.$clinit = () =>{};
  StreamImpl.$loadModules();
  TerminatableStream.$clinit();
  StreamImpl.f_NULL_CONSUMER__java_util_stream_StreamImpl_ = Consumer.$adapt((/** * */ value) =>{});
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StreamImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  j_l_Object = goog.module.get('java.lang.Object$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  List = goog.module.get('java.util.List$impl');
  Optional = goog.module.get('java.util.Optional$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  BinaryOperator = goog.module.get('java.util.function.BinaryOperator$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  IntFunction = goog.module.get('java.util.function.IntFunction$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collector = goog.module.get('java.util.stream.Collector$impl');
  Characteristics = goog.module.get('java.util.stream.Collector.Characteristics$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  DoubleStreamImpl = goog.module.get('java.util.stream.DoubleStreamImpl$impl');
  IntStreamImpl = goog.module.get('java.util.stream.IntStreamImpl$impl');
  LongStreamImpl = goog.module.get('java.util.stream.LongStreamImpl$impl');
  $1 = goog.module.get('java.util.stream.StreamImpl.$1$impl');
  $2 = goog.module.get('java.util.stream.StreamImpl.$2$impl');
  $3 = goog.module.get('java.util.stream.StreamImpl.$3$impl');
  $4 = goog.module.get('java.util.stream.StreamImpl.$4$impl');
  $5 = goog.module.get('java.util.stream.StreamImpl.$5$impl');
  $6 = goog.module.get('java.util.stream.StreamImpl.$6$impl');
  FilterSpliterator = goog.module.get('java.util.stream.StreamImpl.FilterSpliterator$impl');
  LimitSpliterator = goog.module.get('java.util.stream.StreamImpl.LimitSpliterator$impl');
  MapToDoubleSpliterator = goog.module.get('java.util.stream.StreamImpl.MapToDoubleSpliterator$impl');
  MapToIntSpliterator = goog.module.get('java.util.stream.StreamImpl.MapToIntSpliterator$impl');
  MapToLongSpliterator = goog.module.get('java.util.stream.StreamImpl.MapToLongSpliterator$impl');
  MapToObjSpliterator = goog.module.get('java.util.stream.StreamImpl.MapToObjSpliterator$impl');
  SkipSpliterator = goog.module.get('java.util.stream.StreamImpl.SkipSpliterator$impl');
  ValueConsumer = goog.module.get('java.util.stream.StreamImpl.ValueConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@type {Consumer<*>} @nodts*/
StreamImpl.f_NULL_CONSUMER__java_util_stream_StreamImpl_;
Stream.$markImplementor(StreamImpl);
$Util.$setClassMetadata(StreamImpl, 'java.util.stream.StreamImpl');

exports = StreamImpl;

//# sourceMappingURL=StreamImpl.js.map
