goog.module('java.util.stream.DoubleStream$impl');

const BaseStream = goog.require('java.util.stream.BaseStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let DoubleSummaryStatistics = goog.forwardDeclare('java.util.DoubleSummaryStatistics$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let OptionalDouble = goog.forwardDeclare('java.util.OptionalDouble$impl');
let OfDouble = goog.forwardDeclare('java.util.PrimitiveIterator.OfDouble$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterator_OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let DoubleBinaryOperator = goog.forwardDeclare('java.util.function.DoubleBinaryOperator$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleFunction = goog.forwardDeclare('java.util.function.DoubleFunction$impl');
let DoublePredicate = goog.forwardDeclare('java.util.function.DoublePredicate$impl');
let DoubleSupplier = goog.forwardDeclare('java.util.function.DoubleSupplier$impl');
let DoubleToIntFunction = goog.forwardDeclare('java.util.function.DoubleToIntFunction$impl');
let DoubleToLongFunction = goog.forwardDeclare('java.util.function.DoubleToLongFunction$impl');
let DoubleUnaryOperator = goog.forwardDeclare('java.util.function.DoubleUnaryOperator$impl');
let ObjDoubleConsumer = goog.forwardDeclare('java.util.function.ObjDoubleConsumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $1 = goog.forwardDeclare('java.util.stream.DoubleStream.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.DoubleStream.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.DoubleStream.$3$impl');
let $4 = goog.forwardDeclare('java.util.stream.DoubleStream.$4$impl');
let Builder = goog.forwardDeclare('java.util.stream.DoubleStream.Builder$impl');
let DoubleStreamImpl = goog.forwardDeclare('java.util.stream.DoubleStreamImpl$impl');
let Empty = goog.forwardDeclare('java.util.stream.DoubleStreamImpl.Empty$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @interface
 * @extends {BaseStream<?number, DoubleStream>}
 */
class DoubleStream {
 /** @nodts @return {Builder} */
 static m_builder__java_util_stream_DoubleStream_Builder() {
  DoubleStream.$clinit();
  return $1.$create__();
 }
 /** @nodts @return {DoubleStream} */
 static m_concat__java_util_stream_DoubleStream__java_util_stream_DoubleStream__java_util_stream_DoubleStream(/** DoubleStream */ a, /** DoubleStream */ b) {
  DoubleStream.$clinit();
  let spliteratorOfStreams = /**@type {List<DoubleStream>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<DoubleStream>}*/ ($Arrays.$init([a, b], DoubleStream)))).m_spliterator__java_util_Spliterator();
  let spliterator = $2.$create__java_util_Spliterator__long__int(spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0);
  let result = DoubleStreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator_OfDouble(null, spliterator);
  return /**@type {DoubleStream}*/ ($Casts.$to(/**@type {DoubleStream}*/ ($Casts.$to(result.m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   a.m_close__void();
  })), DoubleStream)).m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   b.m_close__void();
  })), DoubleStream));
 }
 /** @nodts @return {DoubleStream} */
 static m_empty__java_util_stream_DoubleStream() {
  DoubleStream.$clinit();
  return Empty.$create__java_util_stream_TerminatableStream(null);
 }
 /** @nodts @return {DoubleStream} */
 static m_generate__java_util_function_DoubleSupplier__java_util_stream_DoubleStream(/** DoubleSupplier */ s) {
  DoubleStream.$clinit();
  let spliterator = $3.$create__java_util_function_DoubleSupplier__long__int(s, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_doubleStream__java_util_Spliterator_OfDouble__boolean__java_util_stream_DoubleStream(spliterator, false);
 }
 /** @nodts @return {DoubleStream} */
 static m_iterate__double__java_util_function_DoubleUnaryOperator__java_util_stream_DoubleStream(/** number */ seed, /** DoubleUnaryOperator */ f) {
  DoubleStream.$clinit();
  let spliterator = $4.$create__double__java_util_function_DoubleUnaryOperator__long__int(seed, f, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator);
  return StreamSupport.m_doubleStream__java_util_Spliterator_OfDouble__boolean__java_util_stream_DoubleStream(spliterator, false);
 }
 /** @nodts @return {DoubleStream} */
 static m_of__arrayOf_double__java_util_stream_DoubleStream(/** Array<number> */ values) {
  DoubleStream.$clinit();
  return Arrays.m_stream__arrayOf_double__java_util_stream_DoubleStream(values);
 }
 /** @nodts @return {DoubleStream} */
 static m_of__double__java_util_stream_DoubleStream(/** number */ t) {
  DoubleStream.$clinit();
  return DoubleStream.m_of__arrayOf_double__java_util_stream_DoubleStream(/**@type {!Array<number>}*/ ($Arrays.$init([t], $$double)));
 }
 /** @abstract @nodts @return {boolean} */
 m_allMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {}
 /** @abstract @nodts @return {boolean} */
 m_anyMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_average__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {Stream<?number>} */
 m_boxed__java_util_stream_Stream() {}
 /** @abstract @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_ObjDoubleConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** ObjDoubleConsumer<R> */ accumulator, /** BiConsumer<R, R> */ combiner) {}
 /** @abstract @nodts @return {!$Long} */
 m_count__long() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_distinct__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_filter__java_util_function_DoublePredicate__java_util_stream_DoubleStream(/** DoublePredicate */ predicate) {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_findAny__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_findFirst__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_flatMap__java_util_function_DoubleFunction__java_util_stream_DoubleStream(/** DoubleFunction<?> */ mapper) {}
 /** @abstract @nodts */
 m_forEach__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {}
 /** @abstract @nodts */
 m_forEachOrdered__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ action) {}
 /** @abstract @nodts @return {OfDouble} */
 m_iterator__java_util_PrimitiveIterator_OfDouble() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_limit__long__java_util_stream_DoubleStream(/** !$Long */ maxSize) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_map__java_util_function_DoubleUnaryOperator__java_util_stream_DoubleStream(/** DoubleUnaryOperator */ mapper) {}
 /** @abstract @nodts @return {IntStream} */
 m_mapToInt__java_util_function_DoubleToIntFunction__java_util_stream_IntStream(/** DoubleToIntFunction */ mapper) {}
 /** @abstract @nodts @return {LongStream} */
 m_mapToLong__java_util_function_DoubleToLongFunction__java_util_stream_LongStream(/** DoubleToLongFunction */ mapper) {}
 /** @abstract @nodts @template U @return {Stream<U>} */
 m_mapToObj__java_util_function_DoubleFunction__java_util_stream_Stream(/** DoubleFunction<?> */ mapper) {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_max__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_min__java_util_OptionalDouble() {}
 /** @abstract @nodts @return {boolean} */
 m_noneMatch__java_util_function_DoublePredicate__boolean(/** DoublePredicate */ predicate) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_parallel__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_peek__java_util_function_DoubleConsumer__java_util_stream_DoubleStream(/** DoubleConsumer */ action) {}
 /** @abstract @nodts @return {OptionalDouble} */
 m_reduce__java_util_function_DoubleBinaryOperator__java_util_OptionalDouble(/** DoubleBinaryOperator */ op) {}
 /** @abstract @nodts @return {number} */
 m_reduce__double__java_util_function_DoubleBinaryOperator__double(/** number */ identity, /** DoubleBinaryOperator */ op) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_sequential__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {DoubleStream} */
 m_skip__long__java_util_stream_DoubleStream(/** !$Long */ n) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_sorted__java_util_stream_DoubleStream() {}
 /** @abstract @nodts @return {Spliterator_OfDouble} */
 m_spliterator__java_util_Spliterator_OfDouble() {}
 /** @abstract @nodts @return {number} */
 m_sum__double() {}
 /** @abstract @nodts @return {DoubleSummaryStatistics} */
 m_summaryStatistics__java_util_DoubleSummaryStatistics() {}
 /** @abstract @nodts @return {Array<number>} */
 m_toArray__arrayOf_double() {}
 /** @nodts */
 static $clinit() {
  DoubleStream.$clinit = () =>{};
  DoubleStream.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BaseStream.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_DoubleStream = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_DoubleStream;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  $1 = goog.module.get('java.util.stream.DoubleStream.$1$impl');
  $2 = goog.module.get('java.util.stream.DoubleStream.$2$impl');
  $3 = goog.module.get('java.util.stream.DoubleStream.$3$impl');
  $4 = goog.module.get('java.util.stream.DoubleStream.$4$impl');
  DoubleStreamImpl = goog.module.get('java.util.stream.DoubleStreamImpl$impl');
  Empty = goog.module.get('java.util.stream.DoubleStreamImpl.Empty$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
DoubleStream.$markImplementor(/**@type {Function}*/ (DoubleStream));
$Util.$setClassMetadataForInterface(DoubleStream, 'java.util.stream.DoubleStream');

exports = DoubleStream;

//# sourceMappingURL=DoubleStream.js.map
