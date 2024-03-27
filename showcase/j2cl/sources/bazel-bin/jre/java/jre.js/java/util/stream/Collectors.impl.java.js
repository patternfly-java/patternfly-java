goog.module('java.util.stream.Collectors$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let DoubleSummaryStatistics = goog.forwardDeclare('java.util.DoubleSummaryStatistics$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let IntSummaryStatistics = goog.forwardDeclare('java.util.IntSummaryStatistics$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let LongSummaryStatistics = goog.forwardDeclare('java.util.LongSummaryStatistics$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Optional = goog.forwardDeclare('java.util.Optional$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Characteristics = goog.forwardDeclare('java.util.stream.Collector.Characteristics$impl');
let CollectorImpl = goog.forwardDeclare('java.util.stream.CollectorImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class Collectors extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {Collector<T, ?, ?number>} */
 static m_averagingDouble__java_util_function_ToDoubleFunction__java_util_stream_Collector(/** ToDoubleFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, ?number>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, DoubleSummaryStatistics>}*/ (Collectors.m_summarizingDouble__java_util_function_ToDoubleFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(arg0, DoubleSummaryStatistics));
   return arg0_1.m_getAverage__double();
  })));
 }
 /** @nodts @template T @return {Collector<T, ?, ?number>} */
 static m_averagingInt__java_util_function_ToIntFunction__java_util_stream_Collector(/** ToIntFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, ?number>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, IntSummaryStatistics>}*/ (Collectors.m_summarizingInt__java_util_function_ToIntFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(arg0, IntSummaryStatistics));
   return arg0_1.m_getAverage__double();
  })));
 }
 /** @nodts @template T @return {Collector<T, ?, ?number>} */
 static m_averagingLong__java_util_function_ToLongFunction__java_util_stream_Collector(/** ToLongFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, ?number>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, LongSummaryStatistics>}*/ (Collectors.m_summarizingLong__java_util_function_ToLongFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(arg0, LongSummaryStatistics));
   return arg0_1.m_getAverage__double();
  })));
 }
 /** @nodts @template T, A, R, RR @return {Collector<T, A, RR>} */
 static m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/** Collector<T, A, R> */ downstream, /** j_u_function_Function<R, RR> */ finisher) {
  Collectors.$clinit();
  return /**@type {!CollectorImpl<T, A, RR>}*/ (CollectorImpl.$create__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics(downstream.m_supplier__java_util_function_Supplier(), downstream.m_accumulator__java_util_function_BiConsumer(), downstream.m_combiner__java_util_function_BinaryOperator(), /**@type {j_u_function_Function<A, RR>}*/ (downstream.m_finisher__java_util_function_Function().m_andThen__java_util_function_Function__java_util_function_Function(finisher)), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, Long>} */
 static m_counting__java_util_stream_Collector() {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Long>}*/ (Collectors.m_reducing__java_lang_Object__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(Long.m_valueOf__long__java_lang_Long($Long.fromInt(0)), j_u_function_Function.$adapt((/** ? */ item) =>{
   return Long.m_valueOf__long__java_lang_Long($Long.fromInt(1));
  }), BinaryOperator.$adapt((a, b) =>{
   let a_1 = /**@type {Long}*/ ($Casts.$to(a, Long));
   let b_1 = /**@type {Long}*/ ($Casts.$to(b, Long));
   return Long.m_valueOf__long__java_lang_Long($LongUtils.plus(Long.m_valueOf__long__java_lang_Long(a_1.m_longValue__long()).m_longValue__long(), b_1.m_longValue__long()));
  })));
 }
 /** @nodts @template T, K @return {Collector<T, ?, Map<K, List<T>>>} */
 static m_groupingBy__java_util_function_Function__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ classifier) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<K, List<T>>>}*/ (Collectors.m_groupingBy__java_util_function_Function__java_util_stream_Collector__java_util_stream_Collector(classifier, /**@type {Collector<T, *, List<T>>}*/ (Collectors.m_toList__java_util_stream_Collector())));
 }
 /** @nodts @template T, K, A, D @return {Collector<T, ?, Map<K, D>>} */
 static m_groupingBy__java_util_function_Function__java_util_stream_Collector__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ classifier, /** Collector<?, A, D> */ downstream) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<K, D>>}*/ (Collectors.m_groupingBy__java_util_function_Function__java_util_function_Supplier__java_util_stream_Collector__java_util_stream_Collector(classifier, Supplier.$adapt(() =>{
   return /**@type {!HashMap<K, D>}*/ (HashMap.$create__());
  }), downstream));
 }
 /** @nodts @template T, K, D, A, M @return {Collector<T, ?, M>} */
 static m_groupingBy__java_util_function_Function__java_util_function_Supplier__java_util_stream_Collector__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ classifier, /** Supplier<M> */ mapFactory, /** Collector<?, A, D> */ downstream) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, M>}*/ (Collectors.m_groupingBy0__java_util_function_Supplier__java_util_function_Function__java_util_function_Supplier__java_util_stream_Collector__java_util_stream_Collector(Supplier.$adapt(() =>{
   return /**@type {!LinkedHashMap<K, List<T>>}*/ (LinkedHashMap.$create__());
  }), classifier, mapFactory, downstream));
 }
 /** @nodts @template T, K, D, A, M @return {Collector<T, ?, M>} */
 static m_groupingBy0__java_util_function_Supplier__java_util_function_Function__java_util_function_Supplier__java_util_stream_Collector__java_util_stream_Collector(/** Supplier<Map<K, List<T>>> */ supplier, /** j_u_function_Function<?, ?> */ classifier, /** Supplier<M> */ mapFactory, /** Collector<?, A, D> */ downstream) {
  return /**@type {Collector<T, Map<K, List<T>>, M>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(supplier, BiConsumer.$adapt((m, /** T */ o) =>{
   let m_1 = /**@type {Map}*/ ($Casts.$to(m, Map));
   let k = classifier.m_apply__java_lang_Object__java_lang_Object(o);
   let l = /**@type {List<T>}*/ ($Casts.$to(m_1.get(k), List));
   if ($Equality.$same(l, null)) {
    l = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
    m_1.put(k, l);
   }
   l.add(o);
  }), BinaryOperator.$adapt((m1, m2) =>{
   let m1_1 = /**@type {Map}*/ ($Casts.$to(m1, Map));
   let m2_1 = /**@type {Map}*/ ($Casts.$to(m2, Map));
   return Collectors.m_mergeAll__java_util_Map__java_util_Map__java_util_function_BinaryOperator__java_util_Map(m1_1, m2_1, BinaryOperator.$adapt((arg0, arg1) =>{
    let arg0_1 = /**@type {List}*/ ($Casts.$to(arg0, List));
    let arg1_1 = /**@type {List}*/ ($Casts.$to(arg1, List));
    return /**@type {List<T>}*/ ($Casts.$to(Collectors.m_addAll__java_util_Collection__java_util_Collection__java_util_Collection(arg0_1, arg1_1), List));
   }));
  }), j_u_function_Function.$adapt((m_2) =>{
   let m_3 = /**@type {Map}*/ ($Casts.$to(m_2, Map));
   let result = /**@type {M}*/ ($Casts.$to(mapFactory.m_get__java_lang_Object(), Map));
   for (let $iterator = m_3.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let entry = /**@type {Entry<K, List<T>>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
    {
     /**@type {!Map<K, D>}*/ (result).put(entry.m_getKey__java_lang_Object(), Collectors.m_streamAndCollect__java_util_stream_Collector__java_util_List__java_lang_Object(downstream, /**@type {List<T>}*/ ($Casts.$to(entry.m_getValue__java_lang_Object(), List))));
    }
   }
   return result;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @return {Collector<(CharSequence|string), ?, ?string>} */
 static m_joining__java_util_stream_Collector() {
  Collectors.$clinit();
  return /**@type {Collector<(CharSequence|string), StringBuilder, ?string>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return StringBuilder.$create__();
  }), BiConsumer.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {StringBuilder}*/ ($Casts.$to(arg0, StringBuilder));
   let arg1_1 = /**@type {(CharSequence|string)}*/ ($Casts.$to(arg1, CharSequence));
   arg0_1.m_append__java_lang_CharSequence__java_lang_StringBuilder(arg1_1);
  }), BinaryOperator.$adapt((arg0_2, arg1_2) =>{
   let arg0_3 = /**@type {StringBuilder}*/ ($Casts.$to(arg0_2, StringBuilder));
   let arg1_3 = /**@type {StringBuilder}*/ ($Casts.$to(arg1_2, StringBuilder));
   return arg0_3.m_append__java_lang_CharSequence__java_lang_StringBuilder(arg1_3);
  }), j_u_function_Function.$adapt((arg0_4) =>{
   let arg0_5 = /**@type {StringBuilder}*/ ($Casts.$to(arg0_4, StringBuilder));
   return arg0_5.toString();
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @return {Collector<(CharSequence|string), ?, ?string>} */
 static m_joining__java_lang_CharSequence__java_util_stream_Collector(/** (CharSequence|string) */ delimiter) {
  Collectors.$clinit();
  return Collectors.m_joining__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__java_util_stream_Collector(delimiter, '', '');
 }
 /** @nodts @return {Collector<(CharSequence|string), ?, ?string>} */
 static m_joining__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence__java_util_stream_Collector(/** (CharSequence|string) */ delimiter, /** (CharSequence|string) */ prefix, /** (CharSequence|string) */ suffix) {
  Collectors.$clinit();
  return /**@type {Collector<(CharSequence|string), StringJoiner, ?string>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(delimiter, prefix, suffix);
  }), BiConsumer.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {StringJoiner}*/ ($Casts.$to(arg0, StringJoiner));
   let arg1_1 = /**@type {(CharSequence|string)}*/ ($Casts.$to(arg1, CharSequence));
   arg0_1.m_add__java_lang_CharSequence__java_util_StringJoiner(arg1_1);
  }), BinaryOperator.$adapt((arg0_2, arg1_2) =>{
   let arg0_3 = /**@type {StringJoiner}*/ ($Casts.$to(arg0_2, StringJoiner));
   let arg1_3 = /**@type {StringJoiner}*/ ($Casts.$to(arg1_2, StringJoiner));
   return arg0_3.m_merge__java_util_StringJoiner__java_util_StringJoiner(arg1_3);
  }), j_u_function_Function.$adapt((arg0_4) =>{
   let arg0_5 = /**@type {StringJoiner}*/ ($Casts.$to(arg0_4, StringJoiner));
   return arg0_5.toString();
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @template T, U, A, R @return {Collector<T, ?, R>} */
 static m_mapping__java_util_function_Function__java_util_stream_Collector__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ mapper, /** Collector<?, A, R> */ downstream) {
  Collectors.$clinit();
  return /**@type {!CollectorImpl<T, A, R>}*/ (CollectorImpl.$create__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics(downstream.m_supplier__java_util_function_Supplier(), /**@type {!BiConsumer<A, T>}*/ (BiConsumer.$adapt((/** A */ a, /** T */ t) =>{
   downstream.m_accumulator__java_util_function_BiConsumer().m_accept__java_lang_Object__java_lang_Object__void(a, mapper.m_apply__java_lang_Object__java_lang_Object(t));
  })), downstream.m_combiner__java_util_function_BinaryOperator(), downstream.m_finisher__java_util_function_Function(), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, Optional<T>>} */
 static m_maxBy__java_util_Comparator__java_util_stream_Collector(/** Comparator<?> */ comparator) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Optional<T>>}*/ (Collectors.m_reducing__java_util_function_BinaryOperator__java_util_stream_Collector(/**@type {BinaryOperator<T>}*/ (BinaryOperator.m_maxBy__java_util_Comparator__java_util_function_BinaryOperator(comparator))));
 }
 /** @nodts @template T @return {Collector<T, ?, Optional<T>>} */
 static m_minBy__java_util_Comparator__java_util_stream_Collector(/** Comparator<?> */ comparator) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Optional<T>>}*/ (Collectors.m_reducing__java_util_function_BinaryOperator__java_util_stream_Collector(/**@type {BinaryOperator<T>}*/ (BinaryOperator.m_minBy__java_util_Comparator__java_util_function_BinaryOperator(comparator))));
 }
 /** @nodts @template T @return {Collector<T, ?, Map<?boolean, List<T>>>} */
 static m_partitioningBy__java_util_function_Predicate__java_util_stream_Collector(/** Predicate<?> */ predicate) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<?boolean, List<T>>>}*/ (Collectors.m_partitioningBy__java_util_function_Predicate__java_util_stream_Collector__java_util_stream_Collector(predicate, /**@type {Collector<T, *, List<T>>}*/ (Collectors.m_toList__java_util_stream_Collector())));
 }
 /** @nodts @template T, D, A @return {Collector<T, ?, Map<?boolean, D>>} */
 static m_partitioningBy__java_util_function_Predicate__java_util_stream_Collector__java_util_stream_Collector(/** Predicate<?> */ predicate, /** Collector<?, A, D> */ downstream) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<?boolean, D>>}*/ (Collectors.m_groupingBy0__java_util_function_Supplier__java_util_function_Function__java_util_function_Supplier__java_util_stream_Collector__java_util_stream_Collector(/**@type {Supplier<Map<?boolean, List<T>>>}*/ (Collectors.m_partitionSupplier__java_util_function_Supplier()), j_u_function_Function.$adapt((/** ? */ arg0) =>{
   return predicate.m_test__java_lang_Object__boolean(arg0);
  }), Supplier.$adapt(() =>{
   return /**@type {!HashMap<?boolean, D>}*/ (HashMap.$create__());
  }), downstream));
 }
 /** @nodts @template T @return {Supplier<Map<?boolean, List<T>>>} */
 static m_partitionSupplier__java_util_function_Supplier() {
  return Supplier.$adapt(() =>{
   let partition = /**@type {!LinkedHashMap<?boolean, List<T>>}*/ (LinkedHashMap.$create__());
   partition.put(false, /**@type {!ArrayList<T>}*/ (ArrayList.$create__()));
   partition.put(true, /**@type {!ArrayList<T>}*/ (ArrayList.$create__()));
   return partition;
  });
 }
 /** @nodts @template T @return {Collector<T, ?, Optional<T>>} */
 static m_reducing__java_util_function_BinaryOperator__java_util_stream_Collector(/** BinaryOperator<T> */ op) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Optional<T>>}*/ (Collectors.m_reducing__java_lang_Object__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(/**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional()), j_u_function_Function.$adapt((/** ? */ arg0) =>{
   return /**@type {Optional<T>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(arg0));
  }), BinaryOperator.$adapt((a, b) =>{
   let a_1 = /**@type {Optional}*/ ($Casts.$to(a, Optional));
   let b_1 = /**@type {Optional}*/ ($Casts.$to(b, Optional));
   if (!a_1.m_isPresent__boolean()) {
    return b_1;
   }
   if (!b_1.m_isPresent__boolean()) {
    return a_1;
   }
   return /**@type {Optional<T>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(op.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(a_1.m_get__java_lang_Object(), b_1.m_get__java_lang_Object())));
  })));
 }
 /** @nodts @template T @return {Collector<T, ?, T>} */
 static m_reducing__java_lang_Object__java_util_function_BinaryOperator__java_util_stream_Collector(/** T */ identity, /** BinaryOperator<T> */ op) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, T>}*/ (Collectors.m_reducing__java_lang_Object__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(identity, /**@type {j_u_function_Function<T, T>}*/ (j_u_function_Function.m_identity__java_util_function_Function()), op));
 }
 /** @nodts @template T, U @return {Collector<T, ?, U>} */
 static m_reducing__java_lang_Object__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(/** U */ identity, /** j_u_function_Function<?, ?> */ mapper, /** BinaryOperator<U> */ op) {
  Collectors.$clinit();
  return /**@type {Collector<T, Array<*>, U>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return [identity];
  }), BiConsumer.$adapt((u, /** T */ t) =>{
   let u_1 = /**@type {Array<*>}*/ ($Arrays.$castTo(u, j_l_Object, 1));
   $Arrays.$set(u_1, 0, op.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {U}*/ (u_1[0]), mapper.m_apply__java_lang_Object__java_lang_Object(t)));
  }), BinaryOperator.$adapt((u1, u2) =>{
   let u1_1 = /**@type {Array<*>}*/ ($Arrays.$castTo(u1, j_l_Object, 1));
   let u2_1 = /**@type {Array<*>}*/ ($Arrays.$castTo(u2, j_l_Object, 1));
   $Arrays.$set(u1_1, 0, op.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {U}*/ (u1_1[0]), /**@type {U}*/ (u2_1[0])));
   return u1_1;
  }), j_u_function_Function.$adapt((a) =>{
   let a_1 = /**@type {Array<*>}*/ ($Arrays.$castTo(a, j_l_Object, 1));
   return /**@type {U}*/ (a_1[0]);
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, DoubleSummaryStatistics>} */
 static m_summarizingDouble__java_util_function_ToDoubleFunction__java_util_stream_Collector(/** ToDoubleFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, DoubleSummaryStatistics, DoubleSummaryStatistics>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return DoubleSummaryStatistics.$create__();
  }), BiConsumer.$adapt((stats, /** T */ item) =>{
   let stats_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(stats, DoubleSummaryStatistics));
   stats_1.m_accept__double__void(mapper.m_applyAsDouble__java_lang_Object__double(item));
  }), BinaryOperator.$adapt((t, u) =>{
   let t_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(t, DoubleSummaryStatistics));
   let u_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(u, DoubleSummaryStatistics));
   t_1.m_combine__java_util_DoubleSummaryStatistics__void(u_1);
   return t_1;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics, Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, IntSummaryStatistics>} */
 static m_summarizingInt__java_util_function_ToIntFunction__java_util_stream_Collector(/** ToIntFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, IntSummaryStatistics, IntSummaryStatistics>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return IntSummaryStatistics.$create__();
  }), BiConsumer.$adapt((stats, /** T */ item) =>{
   let stats_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(stats, IntSummaryStatistics));
   stats_1.m_accept__int__void(mapper.m_applyAsInt__java_lang_Object__int(item));
  }), BinaryOperator.$adapt((t, u) =>{
   let t_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(t, IntSummaryStatistics));
   let u_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(u, IntSummaryStatistics));
   t_1.m_combine__java_util_IntSummaryStatistics__void(u_1);
   return t_1;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics, Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, LongSummaryStatistics>} */
 static m_summarizingLong__java_util_function_ToLongFunction__java_util_stream_Collector(/** ToLongFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, LongSummaryStatistics, LongSummaryStatistics>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return LongSummaryStatistics.$create__();
  }), BiConsumer.$adapt((stats, /** T */ item) =>{
   let stats_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(stats, LongSummaryStatistics));
   stats_1.m_accept__long__void(mapper.m_applyAsLong__java_lang_Object__long(item));
  }), BinaryOperator.$adapt((t, u) =>{
   let t_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(t, LongSummaryStatistics));
   let u_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(u, LongSummaryStatistics));
   t_1.m_combine__java_util_LongSummaryStatistics__void(u_1);
   return t_1;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics, Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, ?number>} */
 static m_summingDouble__java_util_function_ToDoubleFunction__java_util_stream_Collector(/** ToDoubleFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, ?number>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, DoubleSummaryStatistics>}*/ (Collectors.m_summarizingDouble__java_util_function_ToDoubleFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {DoubleSummaryStatistics}*/ ($Casts.$to(arg0, DoubleSummaryStatistics));
   return arg0_1.m_getSum__double();
  })));
 }
 /** @nodts @template T @return {Collector<T, ?, Integer>} */
 static m_summingInt__java_util_function_ToIntFunction__java_util_stream_Collector(/** ToIntFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Integer>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, IntSummaryStatistics>}*/ (Collectors.m_summarizingInt__java_util_function_ToIntFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((intSummaryStatistics) =>{
   let intSummaryStatistics_1 = /**@type {IntSummaryStatistics}*/ ($Casts.$to(intSummaryStatistics, IntSummaryStatistics));
   return Integer.m_valueOf__int__java_lang_Integer($Primitives.narrowLongToInt(intSummaryStatistics_1.m_getSum__long()));
  })));
 }
 /** @nodts @template T @return {Collector<T, ?, Long>} */
 static m_summingLong__java_util_function_ToLongFunction__java_util_stream_Collector(/** ToLongFunction<?> */ mapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Long>}*/ (Collectors.m_collectingAndThen__java_util_stream_Collector__java_util_function_Function__java_util_stream_Collector(/**@type {Collector<T, *, LongSummaryStatistics>}*/ (Collectors.m_summarizingLong__java_util_function_ToLongFunction__java_util_stream_Collector(mapper)), j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {LongSummaryStatistics}*/ ($Casts.$to(arg0, LongSummaryStatistics));
   return Long.m_valueOf__long__java_lang_Long(arg0_1.m_getSum__long());
  })));
 }
 /** @nodts @template T, C @return {Collector<T, ?, C>} */
 static m_toCollection__java_util_function_Supplier__java_util_stream_Collector(/** Supplier<C> */ collectionFactory) {
  Collectors.$clinit();
  return /**@type {Collector<T, C, C>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(collectionFactory, BiConsumer.$adapt((arg0, /** T */ arg1) =>{
   let arg0_1 = /**@type {Collection}*/ ($Casts.$to(arg0, Collection));
   /**@type {!Collection<T>}*/ (arg0_1).add(arg1);
  }), BinaryOperator.$adapt((c1, c2) =>{
   let c1_1 = /**@type {Collection}*/ ($Casts.$to(c1, Collection));
   let c2_1 = /**@type {Collection}*/ ($Casts.$to(c2, Collection));
   return Collectors.m_addAll__java_util_Collection__java_util_Collection__java_util_Collection(c1_1, /**@type {Collection<T>}*/ (c2_1));
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, List<T>>} */
 static m_toList__java_util_stream_Collector() {
  Collectors.$clinit();
  return /**@type {Collector<T, *, List<T>>}*/ (Collectors.m_toCollection__java_util_function_Supplier__java_util_stream_Collector(Supplier.$adapt(() =>{
   return /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  })));
 }
 /** @nodts @template T, K, U @return {Collector<T, ?, Map<K, U>>} */
 static m_toMap__java_util_function_Function__java_util_function_Function__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ keyMapper, /** j_u_function_Function<?, ?> */ valueMapper) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<K, U>>}*/ (Collectors.m_toMap__java_util_function_Function__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(keyMapper, valueMapper, BinaryOperator.$adapt((/** U */ m1, /** U */ m2) =>{
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String('Can\'t assign multiple values to the same key'));
  })));
 }
 /** @nodts @template T, K, U @return {Collector<T, ?, Map<K, U>>} */
 static m_toMap__java_util_function_Function__java_util_function_Function__java_util_function_BinaryOperator__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ keyMapper, /** j_u_function_Function<?, ?> */ valueMapper, /** BinaryOperator<U> */ mergeFunction) {
  Collectors.$clinit();
  return /**@type {Collector<T, *, Map<K, U>>}*/ (Collectors.m_toMap__java_util_function_Function__java_util_function_Function__java_util_function_BinaryOperator__java_util_function_Supplier__java_util_stream_Collector(keyMapper, valueMapper, mergeFunction, Supplier.$adapt(() =>{
   return /**@type {!HashMap<K, U>}*/ (HashMap.$create__());
  })));
 }
 /** @nodts @template T, K, U, M @return {Collector<T, ?, M>} */
 static m_toMap__java_util_function_Function__java_util_function_Function__java_util_function_BinaryOperator__java_util_function_Supplier__java_util_stream_Collector(/** j_u_function_Function<?, ?> */ keyMapper, /** j_u_function_Function<?, ?> */ valueMapper, /** BinaryOperator<U> */ mergeFunction, /** Supplier<M> */ mapSupplier) {
  Collectors.$clinit();
  return /**@type {Collector<T, M, M>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(mapSupplier, BiConsumer.$adapt((map, /** T */ item) =>{
   let map_1 = /**@type {Map}*/ ($Casts.$to(map, Map));
   let key = keyMapper.m_apply__java_lang_Object__java_lang_Object(item);
   let newValue = valueMapper.m_apply__java_lang_Object__java_lang_Object(item);
   if (/**@type {!Map<K, U>}*/ (map_1).containsKey(key)) {
    /**@type {!Map<K, U>}*/ (map_1).put(key, mergeFunction.m_apply__java_lang_Object__java_lang_Object__java_lang_Object(/**@type {!Map<K, U>}*/ (map_1).get(key), newValue));
   } else {
    /**@type {!Map<K, U>}*/ (map_1).put(key, newValue);
   }
  }), BinaryOperator.$adapt((m1, m2) =>{
   let m1_1 = /**@type {Map}*/ ($Casts.$to(m1, Map));
   let m2_1 = /**@type {Map}*/ ($Casts.$to(m2, Map));
   return Collectors.m_mergeAll__java_util_Map__java_util_Map__java_util_function_BinaryOperator__java_util_Map(m1_1, m2_1, mergeFunction);
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T @return {Collector<T, ?, Set<T>>} */
 static m_toSet__java_util_stream_Collector() {
  Collectors.$clinit();
  return /**@type {Collector<T, HashSet<T>, Set<T>>}*/ (Collector.m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(Supplier.$adapt(() =>{
   return /**@type {!HashSet<T>}*/ (HashSet.$create__());
  }), BiConsumer.$adapt((arg0, /** T */ arg1) =>{
   let arg0_1 = /**@type {HashSet}*/ ($Casts.$to(arg0, HashSet));
   arg0_1.add(arg1);
  }), BinaryOperator.$adapt((c1, c2) =>{
   let c1_1 = /**@type {HashSet}*/ ($Casts.$to(c1, HashSet));
   let c2_1 = /**@type {HashSet}*/ ($Casts.$to(c2, HashSet));
   return /**@type {HashSet<T>}*/ ($Casts.$to(Collectors.m_addAll__java_util_Collection__java_util_Collection__java_util_Collection(c1_1, c2_1), HashSet));
  }), j_u_function_Function.$adapt((s) =>{
   let s_1 = /**@type {HashSet}*/ ($Casts.$to(s, HashSet));
   return s_1;
  }), /**@type {!Array<Characteristics>}*/ ($Arrays.$init([Characteristics.f_UNORDERED__java_util_stream_Collector_Characteristics, Characteristics.f_IDENTITY_FINISH__java_util_stream_Collector_Characteristics], Characteristics))));
 }
 /** @nodts @template T, D, A @return {D} */
 static m_streamAndCollect__java_util_stream_Collector__java_util_List__java_lang_Object(/** Collector<?, A, D> */ downstream, /** List<T> */ list) {
  let a = downstream.m_supplier__java_util_function_Supplier().m_get__java_lang_Object();
  for (let $iterator = list.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let t = $iterator.m_next__java_lang_Object();
   {
    downstream.m_accumulator__java_util_function_BiConsumer().m_accept__java_lang_Object__java_lang_Object__void(a, t);
   }
  }
  return downstream.m_finisher__java_util_function_Function().m_apply__java_lang_Object__java_lang_Object(a);
 }
 /** @nodts @template K, V, M @return {M} */
 static m_mergeAll__java_util_Map__java_util_Map__java_util_function_BinaryOperator__java_util_Map(/** M */ m1, /** M */ m2, /** BinaryOperator<V> */ mergeFunction) {
  for (let $iterator = /**@type {!Map<K, V>}*/ (m2).m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<K, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    /**@type {!Map<K, V>}*/ (m1).m_merge__java_lang_Object__java_lang_Object__java_util_function_BiFunction__java_lang_Object(entry.m_getKey__java_lang_Object(), entry.m_getValue__java_lang_Object(), mergeFunction);
   }
  }
  return m1;
 }
 /** @nodts @template T, C @return {C} */
 static m_addAll__java_util_Collection__java_util_Collection__java_util_Collection(/** C */ collection, /** Collection<T> */ items) {
  /**@type {!Collection<T>}*/ (collection).addAll(items);
  return collection;
 }
 /** @nodts @return {!Collectors} */
 static $create__() {
  let $instance = new Collectors();
  $instance.$ctor__java_util_stream_Collectors__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Collectors__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Collectors.$clinit = () =>{};
  Collectors.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Collectors;
 }
 
 /** @nodts */
 static $loadModules() {
  CharSequence = goog.module.get('java.lang.CharSequence$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  DoubleSummaryStatistics = goog.module.get('java.util.DoubleSummaryStatistics$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  IntSummaryStatistics = goog.module.get('java.util.IntSummaryStatistics$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  List = goog.module.get('java.util.List$impl');
  LongSummaryStatistics = goog.module.get('java.util.LongSummaryStatistics$impl');
  Map = goog.module.get('java.util.Map$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Optional = goog.module.get('java.util.Optional$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BinaryOperator = goog.module.get('java.util.function.BinaryOperator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collector = goog.module.get('java.util.stream.Collector$impl');
  Characteristics = goog.module.get('java.util.stream.Collector.Characteristics$impl');
  CollectorImpl = goog.module.get('java.util.stream.CollectorImpl$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(Collectors, 'java.util.stream.Collectors');

exports = Collectors;

//# sourceMappingURL=Collectors.js.map
