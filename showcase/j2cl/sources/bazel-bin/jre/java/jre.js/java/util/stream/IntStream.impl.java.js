goog.module('java.util.stream.IntStream$impl');

const BaseStream = goog.require('java.util.stream.BaseStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let IntSummaryStatistics = goog.forwardDeclare('java.util.IntSummaryStatistics$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OptionalInt = goog.forwardDeclare('java.util.OptionalInt$impl');
let OfInt = goog.forwardDeclare('java.util.PrimitiveIterator.OfInt$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterator_OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let IntBinaryOperator = goog.forwardDeclare('java.util.function.IntBinaryOperator$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntFunction = goog.forwardDeclare('java.util.function.IntFunction$impl');
let IntPredicate = goog.forwardDeclare('java.util.function.IntPredicate$impl');
let IntSupplier = goog.forwardDeclare('java.util.function.IntSupplier$impl');
let IntToDoubleFunction = goog.forwardDeclare('java.util.function.IntToDoubleFunction$impl');
let IntToLongFunction = goog.forwardDeclare('java.util.function.IntToLongFunction$impl');
let IntUnaryOperator = goog.forwardDeclare('java.util.function.IntUnaryOperator$impl');
let ObjIntConsumer = goog.forwardDeclare('java.util.function.ObjIntConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let $1 = goog.forwardDeclare('java.util.stream.IntStream.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.IntStream.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.IntStream.$3$impl');
let $4 = goog.forwardDeclare('java.util.stream.IntStream.$4$impl');
let $5 = goog.forwardDeclare('java.util.stream.IntStream.$5$impl');
let Builder = goog.forwardDeclare('java.util.stream.IntStream.Builder$impl');
let IntStreamImpl = goog.forwardDeclare('java.util.stream.IntStreamImpl$impl');
let Empty = goog.forwardDeclare('java.util.stream.IntStreamImpl.Empty$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @interface
 * @extends {BaseStream<Integer, IntStream>}
 */
class IntStream {
 /** @nodts @return {Builder} */
 static m_builder__java_util_stream_IntStream_Builder() {
  IntStream.$clinit();
  return $1.$create__();
 }
 /** @nodts @return {IntStream} */
 static m_concat__java_util_stream_IntStream__java_util_stream_IntStream__java_util_stream_IntStream(/** IntStream */ a, /** IntStream */ b) {
  IntStream.$clinit();
  let spliteratorOfStreams = /**@type {List<IntStream>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<IntStream>}*/ ($Arrays.$init([a, b], IntStream)))).m_spliterator__java_util_Spliterator();
  let spliterator = $2.$create__java_util_Spliterator__long__int(spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  let result = IntStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfInt(null, spliterator);
  return /**@type {IntStream}*/ ($Casts.$to(/**@type {IntStream}*/ ($Casts.$to(result.m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   a.m_close__void();
  })), IntStream)).m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   b.m_close__void();
  })), IntStream));
 }
 /** @nodts @return {IntStream} */
 static m_empty__java_util_stream_IntStream() {
  IntStream.$clinit();
  return Empty.$create__java_util_stream_TerminatableStream(null);
 }
 /** @nodts @return {IntStream} */
 static m_generate__java_util_function_IntSupplier__java_util_stream_IntStream(/** IntSupplier */ s) {
  IntStream.$clinit();
  let spliterator = $3.$create__java_util_function_IntSupplier__long__int(s, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(spliterator, false);
 }
 /** @nodts @return {IntStream} */
 static m_iterate__int__java_util_function_IntUnaryOperator__java_util_stream_IntStream(/** number */ seed, /** IntUnaryOperator */ f) {
  IntStream.$clinit();
  let spliterator = $4.$create__int__java_util_function_IntUnaryOperator__long__int(seed, f, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(spliterator, false);
 }
 /** @nodts @return {IntStream} */
 static m_of__arrayOf_int__java_util_stream_IntStream(/** Array<number> */ values) {
  IntStream.$clinit();
  return Arrays.m_stream__arrayOf_int__java_util_stream_IntStream(values);
 }
 /** @nodts @return {IntStream} */
 static m_of__int__java_util_stream_IntStream(/** number */ t) {
  IntStream.$clinit();
  return IntStream.m_of__arrayOf_int__java_util_stream_IntStream(/**@type {!Array<number>}*/ ($Arrays.$init([t], $$int)));
 }
 /** @nodts @return {IntStream} */
 static m_range__int__int__java_util_stream_IntStream(/** number */ startInclusive, /** number */ endExclusive) {
  IntStream.$clinit();
  if (startInclusive >= endExclusive) {
   return IntStream.m_empty__java_util_stream_IntStream();
  }
  return IntStream.m_rangeClosed__int__int__java_util_stream_IntStream(startInclusive, endExclusive - 1 | 0);
 }
 /** @nodts @return {IntStream} */
 static m_rangeClosed__int__int__java_util_stream_IntStream(/** number */ startInclusive, /** number */ endInclusive) {
  IntStream.$clinit();
  if (startInclusive > endInclusive) {
   return IntStream.m_empty__java_util_stream_IntStream();
  }
  let count = endInclusive - startInclusive + 1 | 0;
  let spliterator = $5.$create__int__int__long__int(startInclusive, endInclusive, $Primitives.widenIntToLong(count), Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator | Spliterator.f_SORTED__java_util_Spliterator | Spliterator.f_DISTINCT__java_util_Spliterator);
  return StreamSupport.m_intStream__java_util_Spliterator_OfInt__boolean__java_util_stream_IntStream(spliterator, false);
 }
 /** @abstract @nodts @return {boolean} */
 m_allMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {}
 /** @abstract @nodts @return {boolean} */
 m_anyMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_asDoubleStream__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {LongStream} */
 m_asLongStream__java_util_stream_LongStream() {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {Stream<Integer>} */
 m_boxed__java_util_stream_Stream() {}
 /** @abstract @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjIntConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjIntConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {}
 /** @abstract @nodts @return {!$Long} */
 m_count__long() {}
 /** @abstract @nodts @return {IntStream} */
 m_distinct__java_util_stream_IntStream() {}
 /** @abstract @nodts @return {IntStream} */
 m_filter__java_util_function_IntPredicate__java_util_stream_IntStream(/** IntPredicate */ predicate) {}
 /** @abstract @nodts @return {OptionalInt} */
 m_findAny__java_util_OptionalInt() {}
 /** @abstract @nodts @return {OptionalInt} */
 m_findFirst__java_util_OptionalInt() {}
 /** @abstract @nodts @return {IntStream} */
 m_flatMap__java_util_function_IntFunction__java_util_stream_IntStream(/** IntFunction<?> */ mapper) {}
 /** @abstract @nodts */
 m_forEach__java_util_function_IntConsumer__void(/** IntConsumer */ action) {}
 /** @abstract @nodts */
 m_forEachOrdered__java_util_function_IntConsumer__void(/** IntConsumer */ action) {}
 /** @abstract @nodts @return {OfInt} */
 m_iterator__java_util_PrimitiveIterator_OfInt() {}
 /** @abstract @nodts @return {IntStream} */
 m_limit__long__java_util_stream_IntStream(/** !$Long */ maxSize) {}
 /** @abstract @nodts @return {IntStream} */
 m_map__java_util_function_IntUnaryOperator__java_util_stream_IntStream(/** IntUnaryOperator */ mapper) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_IntToDoubleFunction__java_util_stream_DoubleStream(/** IntToDoubleFunction */ mapper) {}
 /** @abstract @nodts @return {LongStream} */
 m_mapToLong__java_util_function_IntToLongFunction__java_util_stream_LongStream(/** IntToLongFunction */ mapper) {}
 /** @abstract @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_IntFunction__java_util_stream_Stream(/** IntFunction<?> */ mapper) {}
 /** @abstract @nodts @return {OptionalInt} */
 m_max__java_util_OptionalInt() {}
 /** @abstract @nodts @return {OptionalInt} */
 m_min__java_util_OptionalInt() {}
 /** @abstract @nodts @return {boolean} */
 m_noneMatch__java_util_function_IntPredicate__boolean(/** IntPredicate */ predicate) {}
 /** @abstract @nodts @return {IntStream} */
 m_parallel__java_util_stream_IntStream() {}
 /** @abstract @nodts @return {IntStream} */
 m_peek__java_util_function_IntConsumer__java_util_stream_IntStream(/** IntConsumer */ action) {}
 /** @abstract @nodts @return {OptionalInt} */
 m_reduce__java_util_function_IntBinaryOperator__java_util_OptionalInt(/** IntBinaryOperator */ op) {}
 /** @abstract @nodts @return {number} */
 m_reduce__int__java_util_function_IntBinaryOperator__int(/** number */ identity, /** IntBinaryOperator */ op) {}
 /** @abstract @nodts @return {IntStream} */
 m_sequential__java_util_stream_IntStream() {}
 /** @abstract @nodts @return {IntStream} */
 m_skip__long__java_util_stream_IntStream(/** !$Long */ n) {}
 /** @abstract @nodts @return {IntStream} */
 m_sorted__java_util_stream_IntStream() {}
 /** @abstract @nodts @return {Spliterator_OfInt} */
 m_spliterator__java_util_Spliterator_OfInt() {}
 /** @abstract @nodts @return {number} */
 m_sum__int() {}
 /** @abstract @nodts @return {IntSummaryStatistics} */
 m_summaryStatistics__java_util_IntSummaryStatistics() {}
 /** @abstract @nodts @return {Array<number>} */
 m_toArray__arrayOf_int() {}
 /** @nodts */
 static $clinit() {
  IntStream.$clinit = () =>{};
  IntStream.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BaseStream.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_IntStream = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_IntStream;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  $1 = goog.module.get('java.util.stream.IntStream.$1$impl');
  $2 = goog.module.get('java.util.stream.IntStream.$2$impl');
  $3 = goog.module.get('java.util.stream.IntStream.$3$impl');
  $4 = goog.module.get('java.util.stream.IntStream.$4$impl');
  $5 = goog.module.get('java.util.stream.IntStream.$5$impl');
  IntStreamImpl = goog.module.get('java.util.stream.IntStreamImpl$impl');
  Empty = goog.module.get('java.util.stream.IntStreamImpl.Empty$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
IntStream.$markImplementor(/**@type {Function}*/ (IntStream));
$Util.$setClassMetadataForInterface(IntStream, 'java.util.stream.IntStream');

exports = IntStream;

//# sourceMappingURL=IntStream.js.map
