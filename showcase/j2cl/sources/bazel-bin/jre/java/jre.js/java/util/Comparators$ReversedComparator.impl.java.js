goog.module('java.util.Comparators.ReversedComparator$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const Comparator = goog.require('java.util.Comparator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');

/**
 * @final
 * @template T
 * @implements {Comparator<T>}
 * @implements {Serializable}
 */
class ReversedComparator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Comparator<T>} @nodts*/
  this.f_comparator__java_util_Comparators_ReversedComparator_;
 }
 /** @nodts @template T @return {!ReversedComparator<T>} */
 static $create__java_util_Comparator(/** Comparator<T> */ comparator) {
  ReversedComparator.$clinit();
  let $instance = new ReversedComparator();
  $instance.$ctor__java_util_Comparators_ReversedComparator__java_util_Comparator__void(comparator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Comparators_ReversedComparator__java_util_Comparator__void(/** Comparator<T> */ comparator) {
  this.$ctor__java_lang_Object__void();
  this.f_comparator__java_util_Comparators_ReversedComparator_ = comparator;
 }
 /** @override @nodts @return {number} */
 m_compare__java_lang_Object__java_lang_Object__int(/** T */ a, /** T */ b) {
  return this.f_comparator__java_util_Comparators_ReversedComparator_.m_compare__java_lang_Object__java_lang_Object__int(b, a);
 }
 /** @override @nodts @return {Comparator<T>} */
 m_reversed__java_util_Comparator() {
  return this.f_comparator__java_util_Comparators_ReversedComparator_;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparing__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_Comparator__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0, /** Comparator<?> */ arg1) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator__java_util_Comparator(this, arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(/** ToDoubleFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingInt__java_util_function_ToIntFunction__java_util_Comparator(/** ToIntFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingLong__java_util_function_ToLongFunction__java_util_Comparator(/** ToLongFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction__java_util_Comparator(this, arg0));
 }
 /** @nodts */
 static $clinit() {
  ReversedComparator.$clinit = () =>{};
  ReversedComparator.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ReversedComparator;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Comparator.$markImplementor(ReversedComparator);
Serializable.$markImplementor(ReversedComparator);
$Util.$setClassMetadata(ReversedComparator, 'java.util.Comparators$ReversedComparator');

exports = ReversedComparator;

//# sourceMappingURL=Comparators$ReversedComparator.js.map
