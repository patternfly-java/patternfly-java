goog.module('java.util.stream.CollectorImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Collector = goog.require('java.util.stream.Collector$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Characteristics = goog.forwardDeclare('java.util.stream.Collector.Characteristics$impl');

/**
 * @final
 * @template T, A, R
 * @implements {Collector<T, A, R>}
 */
class CollectorImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Supplier<A>} @nodts*/
  this.f_supplier__java_util_stream_CollectorImpl_;
  /**@type {BiConsumer<A, T>} @nodts*/
  this.f_accumulator__java_util_stream_CollectorImpl_;
  /**@type {Set<Characteristics>} @nodts*/
  this.f_characteristics__java_util_stream_CollectorImpl_;
  /**@type {BinaryOperator<A>} @nodts*/
  this.f_combiner__java_util_stream_CollectorImpl_;
  /**@type {j_u_function_Function<A, R>} @nodts*/
  this.f_finisher__java_util_stream_CollectorImpl_;
 }
 /** @nodts @template T, A, R @return {!CollectorImpl<T, A, R>} */
 static $create__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics(/** Supplier<A> */ supplier, /** BiConsumer<A, T> */ accumulator, /** BinaryOperator<A> */ combiner, /** j_u_function_Function<A, R> */ finisher, /** Array<Characteristics> */ characteristics) {
  CollectorImpl.$clinit();
  let $instance = new CollectorImpl();
  $instance.$ctor__java_util_stream_CollectorImpl__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__void(supplier, accumulator, combiner, finisher, characteristics);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_CollectorImpl__java_util_function_Supplier__java_util_function_BiConsumer__java_util_function_BinaryOperator__java_util_function_Function__arrayOf_java_util_stream_Collector_Characteristics__void(/** Supplier<A> */ supplier, /** BiConsumer<A, T> */ accumulator, /** BinaryOperator<A> */ combiner, /** j_u_function_Function<A, R> */ finisher, /** Array<Characteristics> */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_supplier__java_util_stream_CollectorImpl_ = supplier;
  this.f_accumulator__java_util_stream_CollectorImpl_ = accumulator;
  this.f_characteristics__java_util_stream_CollectorImpl_ = /**@type {Set<Characteristics>}*/ (Collections.m_emptySet__java_util_Set());
  this.f_combiner__java_util_stream_CollectorImpl_ = combiner;
  this.f_finisher__java_util_stream_CollectorImpl_ = finisher;
 }
 /** @override @nodts @return {Supplier<A>} */
 m_supplier__java_util_function_Supplier() {
  return this.f_supplier__java_util_stream_CollectorImpl_;
 }
 /** @override @nodts @return {BiConsumer<A, T>} */
 m_accumulator__java_util_function_BiConsumer() {
  return this.f_accumulator__java_util_stream_CollectorImpl_;
 }
 /** @override @nodts @return {BinaryOperator<A>} */
 m_combiner__java_util_function_BinaryOperator() {
  return this.f_combiner__java_util_stream_CollectorImpl_;
 }
 /** @override @nodts @return {j_u_function_Function<A, R>} */
 m_finisher__java_util_function_Function() {
  return this.f_finisher__java_util_stream_CollectorImpl_;
 }
 /** @override @nodts @return {Set<Characteristics>} */
 m_characteristics__java_util_Set() {
  return this.f_characteristics__java_util_stream_CollectorImpl_;
 }
 /** @nodts */
 static $clinit() {
  CollectorImpl.$clinit = () =>{};
  CollectorImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CollectorImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
Collector.$markImplementor(CollectorImpl);
$Util.$setClassMetadata(CollectorImpl, 'java.util.stream.CollectorImpl');

exports = CollectorImpl;

//# sourceMappingURL=CollectorImpl.js.map
