goog.module('java.util.stream.LongStream$impl');

const BaseStream = goog.require('java.util.stream.BaseStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let LongSummaryStatistics = goog.forwardDeclare('java.util.LongSummaryStatistics$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalLong = goog.forwardDeclare('java.util.OptionalLong$impl');
let OfLong = goog.forwardDeclare('java.util.PrimitiveIterator.OfLong$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterator_OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let LongBinaryOperator = goog.forwardDeclare('java.util.function.LongBinaryOperator$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongFunction = goog.forwardDeclare('java.util.function.LongFunction$impl');
let LongPredicate = goog.forwardDeclare('java.util.function.LongPredicate$impl');
let LongSupplier = goog.forwardDeclare('java.util.function.LongSupplier$impl');
let LongToDoubleFunction = goog.forwardDeclare('java.util.function.LongToDoubleFunction$impl');
let LongToIntFunction = goog.forwardDeclare('java.util.function.LongToIntFunction$impl');
let LongUnaryOperator = goog.forwardDeclare('java.util.function.LongUnaryOperator$impl');
let ObjLongConsumer = goog.forwardDeclare('java.util.function.ObjLongConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $1 = goog.forwardDeclare('java.util.stream.LongStream.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.LongStream.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.LongStream.$3$impl');
let $4 = goog.forwardDeclare('java.util.stream.LongStream.$4$impl');
let $5 = goog.forwardDeclare('java.util.stream.LongStream.$5$impl');
let Builder = goog.forwardDeclare('java.util.stream.LongStream.Builder$impl');
let LongStreamImpl = goog.forwardDeclare('java.util.stream.LongStreamImpl$impl');
let Empty = goog.forwardDeclare('java.util.stream.LongStreamImpl.Empty$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @interface
 * @extends {BaseStream<Long, LongStream>}
 */
class LongStream {
 /** @nodts @return {Builder} */
 static m_builder__java_util_stream_LongStream_Builder() {
  LongStream.$clinit();
  return $1.$create__();
 }
 /** @nodts @return {LongStream} */
 static m_concat__java_util_stream_LongStream__java_util_stream_LongStream__java_util_stream_LongStream(/** LongStream */ a, /** LongStream */ b) {
  LongStream.$clinit();
  let spliteratorOfStreams = /**@type {List<LongStream>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<LongStream>}*/ ($Arrays.$init([a, b], LongStream)))).m_spliterator__java_util_Spliterator();
  let spliterator = $2.$create__java_util_Spliterator__long__int(spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  let result = LongStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfLong(null, spliterator);
  return /**@type {LongStream}*/ ($Casts.$to(/**@type {LongStream}*/ ($Casts.$to(result.m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   a.m_close__void();
  })), LongStream)).m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   b.m_close__void();
  })), LongStream));
 }
 /** @nodts @return {LongStream} */
 static m_empty__java_util_stream_LongStream() {
  LongStream.$clinit();
  return Empty.$create__java_util_stream_TerminatableStream(null);
 }
 /** @nodts @return {LongStream} */
 static m_generate__java_util_function_LongSupplier__java_util_stream_LongStream(/** LongSupplier */ s) {
  LongStream.$clinit();
  let spltierator = $3.$create__java_util_function_LongSupplier__long__int(s, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(spltierator, false);
 }
 /** @nodts @return {LongStream} */
 static m_iterate__long__java_util_function_LongUnaryOperator__java_util_stream_LongStream(/** !$Long */ seed, /** LongUnaryOperator */ f) {
  LongStream.$clinit();
  let spliterator = $4.$create__long__java_util_function_LongUnaryOperator__long__int(seed, f, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(spliterator, false);
 }
 /** @nodts @return {LongStream} */
 static m_of__arrayOf_long__java_util_stream_LongStream(/** Array<!$Long> */ values) {
  LongStream.$clinit();
  return Arrays.m_stream__arrayOf_long__java_util_stream_LongStream(values);
 }
 /** @nodts @return {LongStream} */
 static m_of__long__java_util_stream_LongStream(/** !$Long */ t) {
  LongStream.$clinit();
  return LongStream.m_of__arrayOf_long__java_util_stream_LongStream(/**@type {!Array<!$Long>}*/ ($Arrays.$init([t], $$long)));
 }
 /** @nodts @return {LongStream} */
 static m_range__long__long__java_util_stream_LongStream(/** !$Long */ startInclusive, /** !$Long */ endExclusive) {
  LongStream.$clinit();
  if ($LongUtils.greaterEquals(startInclusive, endExclusive)) {
   return LongStream.m_empty__java_util_stream_LongStream();
  }
  return LongStream.m_rangeClosed__long__long__java_util_stream_LongStream(startInclusive, $LongUtils.minus(endExclusive, $Long.fromInt(1)));
 }
 /** @nodts @return {LongStream} */
 static m_rangeClosed__long__long__java_util_stream_LongStream(/** !$Long */ startInclusive, /** !$Long */ endInclusive) {
  LongStream.$clinit();
  if ($LongUtils.greater(startInclusive, endInclusive)) {
   return LongStream.m_empty__java_util_stream_LongStream();
  }
  let count = $LongUtils.plus($LongUtils.minus(endInclusive, startInclusive), $Long.fromInt(1));
  let spliterator = $5.$create__long__long__long__int(startInclusive, endInclusive, count, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator | Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator);
  return StreamSupport.m_longStream__java_util_Spliterator_OfLong__boolean__java_util_stream_LongStream(spliterator, false);
 }
 /** @abstract @nodts @return {boolean} */
 m_allMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {}
 /** @abstract @nodts @return {boolean} */
 m_anyMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {Stream<Long>} */
 m_boxed__java_util_stream_Stream() {}
 /** @abstract @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjLongConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjLongConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {}
 /** @abstract @nodts @return {!$Long} */
 m_count__long() {}
 /** @abstract @nodts @return {LongStream} */
 m_distinct__java_util_stream_LongStream() {}
 /** @abstract @nodts @return {LongStream} */
 m_filter__java_util_function_LongPredicate__java_util_stream_LongStream(/** LongPredicate */ predicate) {}
 /** @abstract @nodts @return {OptionalLong} */
 m_findAny__java_util_OptionalLong() {}
 /** @abstract @nodts @return {OptionalLong} */
 m_findFirst__java_util_OptionalLong() {}
 /** @abstract @nodts @return {LongStream} */
 m_flatMap__java_util_function_LongFunction__java_util_stream_LongStream(/** LongFunction<?> */ mapper) {}
 /** @abstract @nodts */
 m_forEach__java_util_function_LongConsumer__void(/** LongConsumer */ action) {}
 /** @abstract @nodts */
 m_forEachOrdered__java_util_function_LongConsumer__void(/** LongConsumer */ action) {}
 /** @abstract @nodts @return {OfLong} */
 m_iterator__java_util_PrimitiveIterator_OfLong() {}
 /** @abstract @nodts @return {LongStream} */
 m_limit__long__java_util_stream_LongStream(/** !$Long */ maxSize) {}
 /** @abstract @nodts @return {LongStream} */
 m_map__java_util_function_LongUnaryOperator__java_util_stream_LongStream(/** LongUnaryOperator */ mapper) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_LongToDoubleFunction__java_util_stream_DoubleStream(/** LongToDoubleFunction */ mapper) {}
 /** @abstract @nodts @return {IntStream} */
 m_mapToInt__java_util_function_LongToIntFunction__java_util_stream_IntStream(/** LongToIntFunction */ mapper) {}
 /** @abstract @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_LongFunction__java_util_stream_Stream(/** LongFunction<?> */ mapper) {}
 /** @abstract @nodts @return {OptionalLong} */
 m_max__java_util_OptionalLong() {}
 /** @abstract @nodts @return {OptionalLong} */
 m_min__java_util_OptionalLong() {}
 /** @abstract @nodts @return {boolean} */
 m_noneMatch__java_util_function_LongPredicate__boolean(/** LongPredicate */ predicate) {}
 /** @abstract @nodts @return {LongStream} */
 m_parallel__java_util_stream_LongStream() {}
 /** @abstract @nodts @return {LongStream} */
 m_peek__java_util_function_LongConsumer__java_util_stream_LongStream(/** LongConsumer */ action) {}
 /** @abstract @nodts @return {OptionalLong} */
 m_reduce__java_util_function_LongBinaryOperator__java_util_OptionalLong(/** LongBinaryOperator */ op) {}
 /** @abstract @nodts @return {!$Long} */
 m_reduce__long__java_util_function_LongBinaryOperator__long(/** !$Long */ identity, /** LongBinaryOperator */ op) {}
 /** @abstract @nodts @return {LongStream} */
 m_sequential__java_util_stream_LongStream() {}
 /** @abstract @nodts @return {LongStream} */
 m_skip__long__java_util_stream_LongStream(/** !$Long */ n) {}
 /** @abstract @nodts @return {LongStream} */
 m_sorted__java_util_stream_LongStream() {}
 /** @abstract @nodts @return {Spliterator_OfLong} */
 m_spliterator__java_util_Spliterator_OfLong() {}
 /** @abstract @nodts @return {!$Long} */
 m_sum__long() {}
 /** @abstract @nodts @return {LongSummaryStatistics} */
 m_summaryStatistics__java_util_LongSummaryStatistics() {}
 /** @abstract @nodts @return {Array<!$Long>} */
 m_toArray__arrayOf_long() {}
 /** @nodts */
 static $clinit() {
  LongStream.$clinit = () =>{};
  LongStream.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BaseStream.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_LongStream = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_LongStream;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  $1 = goog.module.get('java.util.stream.LongStream.$1$impl');
  $2 = goog.module.get('java.util.stream.LongStream.$2$impl');
  $3 = goog.module.get('java.util.stream.LongStream.$3$impl');
  $4 = goog.module.get('java.util.stream.LongStream.$4$impl');
  $5 = goog.module.get('java.util.stream.LongStream.$5$impl');
  LongStreamImpl = goog.module.get('java.util.stream.LongStreamImpl$impl');
  Empty = goog.module.get('java.util.stream.LongStreamImpl.Empty$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
LongStream.$markImplementor(/**@type {Function}*/ (LongStream));
$Util.$setClassMetadataForInterface(LongStream, 'java.util.stream.LongStream');

exports = LongStream;

//# sourceMappingURL=LongStream.js.map
