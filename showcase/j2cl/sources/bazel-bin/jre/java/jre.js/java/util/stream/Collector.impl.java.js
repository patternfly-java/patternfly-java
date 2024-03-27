goog.module('java.util.stream.Collector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Characteristics = goog.forwardDeclare('java.util.stream.Collector.Characteristics$impl');
let CollectorImpl = goog.forwardDeclare('java.util.stream.CollectorImpl$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T, A, R
 */
class Collector {
 /** @nodts @template T_1, A_1, R_1 @return {Collector<T_1, A_1, R_1>} */
 static m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(/** Supplier<A_1> */ supplier, /** BiConsumer<A_1, T_1> */ accumulator, /** BinaryOperator<A_1> */ combiner, /** j_u_function_Function<A_1, R_1> */ finisher, /** Array<Characteristics> */ characteristics) {
  Collector.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(supplier);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(accumulator);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(combiner);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(finisher);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(characteristics);
  return /**@type {!CollectorImpl<T_1, A_1, R_1>}*/ (CollectorImpl.$create__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics(supplier, accumulator, combiner, finisher, characteristics));
 }
 /** @nodts @template T_1, R_1 @return {Collector<T_1, R_1, R_1>} */
 static m_of__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__arrayOf_java_util_stream_Collector_Characteristics__java_util_stream_Collector(/** Supplier<R_1> */ supplier, /** BiConsumer<R_1, T_1> */ accumulator, /** BinaryOperator<R_1> */ combiner, /** Array<Characteristics> */ characteristics) {
  Collector.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(supplier);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(accumulator);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(combiner);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(characteristics);
  return /**@type {!CollectorImpl<T_1, R_1, R_1>}*/ (CollectorImpl.$create__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics(supplier, accumulator, combiner, /**@type {j_u_function_Function<R_1, R_1>}*/ (j_u_function_Function.m_identity__java_util_function_Function()), characteristics));
 }
 /** @abstract @nodts @return {Supplier<A>} */
 m_supplier__java_util_function_Supplier() {}
 /** @abstract @nodts @return {BiConsumer<A, T>} */
 m_accumulator__java_util_function_BiConsumer() {}
 /** @abstract @nodts @return {Set<Characteristics>} */
 m_characteristics__java_util_Set() {}
 /** @abstract @nodts @return {BinaryOperator<A>} */
 m_combiner__java_util_function_BinaryOperator() {}
 /** @abstract @nodts @return {j_u_function_Function<A, R>} */
 m_finisher__java_util_function_Function() {}
 /** @nodts */
 static $clinit() {
  Collector.$clinit = () =>{};
  Collector.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_stream_Collector = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_stream_Collector;
 }
 
 /** @nodts */
 static $loadModules() {
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  CollectorImpl = goog.module.get('java.util.stream.CollectorImpl$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Collector.$markImplementor(/**@type {Function}*/ (Collector));
$Util.$setClassMetadataForInterface(Collector, 'java.util.stream.Collector');

exports = Collector;

//# sourceMappingURL=Collector.js.map
