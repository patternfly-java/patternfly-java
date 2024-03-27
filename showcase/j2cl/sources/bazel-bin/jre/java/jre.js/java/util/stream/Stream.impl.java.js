goog.module('java.util.stream.Stream$impl');

const BaseStream = goog.require('java.util.stream.BaseStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Optional = goog.forwardDeclare('java.util.Optional$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
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
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let DoubleStream = goog.forwardDeclare('java.util.stream.DoubleStream$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let $1 = goog.forwardDeclare('java.util.stream.Stream.$1$impl');
let $2 = goog.forwardDeclare('java.util.stream.Stream.$2$impl');
let $3 = goog.forwardDeclare('java.util.stream.Stream.$3$impl');
let $4 = goog.forwardDeclare('java.util.stream.Stream.$4$impl');
let Builder = goog.forwardDeclare('java.util.stream.Stream.Builder$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let Empty = goog.forwardDeclare('java.util.stream.StreamImpl.Empty$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template T
 * @extends {BaseStream<T, Stream<T>>}
 */
class Stream {
 /** @nodts @template T_1 @return {Builder<T_1>} */
 static m_builder__java_util_stream_Stream_Builder() {
  Stream.$clinit();
  return /**@type {!$1<T_1>}*/ ($1.$create__());
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_concat__java_util_stream_Stream__java_util_stream_Stream__java_util_stream_Stream(/** Stream<?> */ a, /** Stream<?> */ b) {
  Stream.$clinit();
  let spliteratorOfStreams = /**@type {List<Stream<?>>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<Stream<?>>}*/ ($Arrays.$init([a, b], Stream)))).m_spliterator__java_util_Spliterator();
  let spliterator = /**@type {!$2<T_1>}*/ ($2.$create__java_util_Spliterator__long__int(spliteratorOfStreams, Long.f_MAX_VALUE__java_lang_Long, 0));
  let result = /**@type {!StreamImpl<T_1>}*/ (StreamImpl.$create__java_util_stream_TerminatableStream__java_util_Spliterator(null, spliterator));
  return /**@type {Stream<T_1>}*/ ($Casts.$to(/**@type {Stream<T_1>}*/ ($Casts.$to(result.m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   a.m_close__void();
  })), Stream)).m_onClose__java_lang_Runnable__java_util_stream_BaseStream(Runnable.$adapt(() =>{
   b.m_close__void();
  })), Stream));
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_empty__java_util_stream_Stream() {
  Stream.$clinit();
  return /**@type {!Empty<T_1>}*/ (Empty.$create__java_util_stream_TerminatableStream(null));
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_generate__java_util_function_Supplier__java_util_stream_Stream(/** Supplier<T_1> */ s) {
  Stream.$clinit();
  let spliterator = /**@type {!$3<T_1>}*/ ($3.$create__java_util_function_Supplier__long__int(s, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator));
  return /**@type {Stream<T_1>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(spliterator, false));
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_iterate__java_lang_Object__java_util_function_UnaryOperator__java_util_stream_Stream(/** T_1 */ seed, /** UnaryOperator<T_1> */ f) {
  Stream.$clinit();
  let spliterator = /**@type {!$4<T_1>}*/ ($4.$create__java_lang_Object__java_util_function_UnaryOperator__long__int(seed, f, Long.f_MAX_VALUE__java_lang_Long, Spliterator.f_IMMUTABLE__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator));
  return /**@type {Stream<T_1>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(spliterator, false));
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_of__java_lang_Object__java_util_stream_Stream(/** T_1 */ t) {
  Stream.$clinit();
  return /**@type {Set<T_1>}*/ (Collections.m_singleton__java_lang_Object__java_util_Set(t)).m_stream__java_util_stream_Stream();
 }
 /** @nodts @template T_1 @return {Stream<T_1>} */
 static m_of__arrayOf_java_lang_Object__java_util_stream_Stream(/** Array<T_1> */ values) {
  Stream.$clinit();
  return /**@type {Stream<T_1>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(values));
 }
 /** @abstract @nodts @return {boolean} */
 m_allMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {}
 /** @abstract @nodts @return {boolean} */
 m_anyMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {}
 /** @abstract @nodts @template R, A @return {R} */
 m_collect__java_util_stream_Collector__java_lang_Object(/** Collector<?, A, R> */ collector) {}
 /** @abstract @nodts @template R @return {R} */
 m_collect__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BiConsumer__java_lang_Object(/** Supplier<R> */ supplier, /** BiConsumer<R, ?> */ accumulator, /** BiConsumer<R, R> */ combiner) {}
 /** @abstract @nodts @return {!$Long} */
 m_count__long() {}
 /** @abstract @nodts @return {Stream<T>} */
 m_distinct__java_util_stream_Stream() {}
 /** @abstract @nodts @return {Stream<T>} */
 m_filter__java_util_function_Predicate__java_util_stream_Stream(/** Predicate<?> */ predicate) {}
 /** @abstract @nodts @return {Optional<T>} */
 m_findAny__java_util_Optional() {}
 /** @abstract @nodts @return {Optional<T>} */
 m_findFirst__java_util_Optional() {}
 /** @abstract @nodts @template R @return {Stream<R>} */
 m_flatMap__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_flatMapToDouble__java_util_function_Function__java_util_stream_DoubleStream(/** j_u_function_Function<?, ?> */ mapper) {}
 /** @abstract @nodts @return {IntStream} */
 m_flatMapToInt__java_util_function_Function__java_util_stream_IntStream(/** j_u_function_Function<?, ?> */ mapper) {}
 /** @abstract @nodts @return {LongStream} */
 m_flatMapToLong__java_util_function_Function__java_util_stream_LongStream(/** j_u_function_Function<?, ?> */ mapper) {}
 /** @abstract @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ action) {}
 /** @abstract @nodts */
 m_forEachOrdered__java_util_function_Consumer__void(/** Consumer<?> */ action) {}
 /** @abstract @nodts @return {Stream<T>} */
 m_limit__long__java_util_stream_Stream(/** !$Long */ maxSize) {}
 /** @abstract @nodts @template R @return {Stream<R>} */
 m_map__java_util_function_Function__java_util_stream_Stream(/** j_u_function_Function<?, ?> */ mapper) {}
 /** @abstract @nodts @return {DoubleStream} */
 m_mapToDouble__java_util_function_ToDoubleFunction__java_util_stream_DoubleStream(/** ToDoubleFunction<?> */ mapper) {}
 /** @abstract @nodts @return {IntStream} */
 m_mapToInt__java_util_function_ToIntFunction__java_util_stream_IntStream(/** ToIntFunction<?> */ mapper) {}
 /** @abstract @nodts @return {LongStream} */
 m_mapToLong__java_util_function_ToLongFunction__java_util_stream_LongStream(/** ToLongFunction<?> */ mapper) {}
 /** @abstract @nodts @return {Optional<T>} */
 m_max__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {}
 /** @abstract @nodts @return {Optional<T>} */
 m_min__java_util_Comparator__java_util_Optional(/** Comparator<?> */ comparator) {}
 /** @abstract @nodts @return {boolean} */
 m_noneMatch__java_util_function_Predicate__boolean(/** Predicate<?> */ predicate) {}
 /** @abstract @nodts @return {Stream<T>} */
 m_peek__java_util_function_Consumer__java_util_stream_Stream(/** Consumer<?> */ action) {}
 /** @abstract @nodts @return {Optional<T>} */
 m_reduce__java_util_function_BinaryOperator__java_util_Optional(/** BinaryOperator<T> */ accumulator) {}
 /** @abstract @nodts @return {T} */
 m_reduce__java_lang_Object__java_util_function_BinaryOperator__java_lang_Object(/** T */ identity, /** BinaryOperator<T> */ accumulator) {}
 /** @abstract @nodts @template U @return {U} */
 m_reduce__java_lang_Object__java_util_function_BiFunction__java_util_function_BinaryOperator__java_lang_Object(/** U */ identity, /** BiFunction<U, ?, U> */ accumulator, /** BinaryOperator<U> */ combiner) {}
 /** @abstract @nodts @return {Stream<T>} */
 m_skip__long__java_util_stream_Stream(/** !$Long */ n) {}
 /** @abstract @nodts @return {Stream<T>} */
 m_sorted__java_util_stream_Stream() {}
 /** @abstract @nodts @return {Stream<T>} */
 m_sorted__java_util_Comparator__java_util_stream_Stream(/** Comparator<?> */ comparator) {}
 /** @abstract @nodts @return {Array<*>} */
 m_toArray__arrayOf_java_lang_Object() {}
 /** @abstract @nodts @template A @return {Array<A>} */
 m_toArray__java_util_function_IntFunction__arrayOf_java_lang_Object(/** IntFunction<Array<A>> */ generator) {}
 /** @nodts */
 static $clinit() {
  Stream.$clinit = () =>{};
  Stream.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BaseStream.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_stream_Stream = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_Stream;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Runnable = goog.module.get('java.lang.Runnable$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  $1 = goog.module.get('java.util.stream.Stream.$1$impl');
  $2 = goog.module.get('java.util.stream.Stream.$2$impl');
  $3 = goog.module.get('java.util.stream.Stream.$3$impl');
  $4 = goog.module.get('java.util.stream.Stream.$4$impl');
  StreamImpl = goog.module.get('java.util.stream.StreamImpl$impl');
  Empty = goog.module.get('java.util.stream.StreamImpl.Empty$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Stream.$markImplementor(/**@type {Function}*/ (Stream));
$Util.$setClassMetadataForInterface(Stream, 'java.util.stream.Stream');

exports = Stream;

//# sourceMappingURL=Stream.js.map
