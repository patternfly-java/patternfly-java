goog.module('java.util.Comparators.NullComparator$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const Comparator = goog.require('java.util.Comparator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 * @template T
 * @implements {Comparator<T>}
 * @implements {Serializable}
 */
class NullComparator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_nullFirst__java_util_Comparators_NullComparator_ = false;
  /**@type {Comparator<T>} @nodts*/
  this.f_delegate__java_util_Comparators_NullComparator_;
 }
 /** @nodts @template T @return {!NullComparator<T>} */
 static $create__boolean__java_util_Comparator(/** boolean */ nullFirst, /** Comparator<?> */ delegate) {
  NullComparator.$clinit();
  let $instance = new NullComparator();
  $instance.$ctor__java_util_Comparators_NullComparator__boolean__java_util_Comparator__void(nullFirst, delegate);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Comparators_NullComparator__boolean__java_util_Comparator__void(/** boolean */ nullFirst, /** Comparator<?> */ delegate) {
  this.$ctor__java_lang_Object__void();
  this.f_nullFirst__java_util_Comparators_NullComparator_ = nullFirst;
  this.f_delegate__java_util_Comparators_NullComparator_ = /**@type {Comparator<T>}*/ (delegate);
 }
 /** @override @nodts @return {number} */
 m_compare__java_lang_Object__java_lang_Object__int(/** T */ a, /** T */ b) {
  if ($Equality.$same(a, null)) {
   return $Equality.$same(b, null) ? 0 : this.f_nullFirst__java_util_Comparators_NullComparator_ ? - 1 | 0 : 1;
  }
  if ($Equality.$same(b, null)) {
   return this.f_nullFirst__java_util_Comparators_NullComparator_ ? 1 : - 1 | 0;
  }
  return $Equality.$same(this.f_delegate__java_util_Comparators_NullComparator_, null) ? 0 : this.f_delegate__java_util_Comparators_NullComparator_.m_compare__java_lang_Object__java_lang_Object__int(a, b);
 }
 /** @override @nodts @return {Comparator<T>} */
 m_reversed__java_util_Comparator() {
  return /**@type {!NullComparator<T>}*/ (NullComparator.$create__boolean__java_util_Comparator(!this.f_nullFirst__java_util_Comparators_NullComparator_, $Equality.$same(this.f_delegate__java_util_Comparators_NullComparator_, null) ? null : this.f_delegate__java_util_Comparators_NullComparator_.m_reversed__java_util_Comparator()));
 }
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparing__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ other) {
  return /**@type {!NullComparator<T>}*/ (NullComparator.$create__boolean__java_util_Comparator(this.f_nullFirst__java_util_Comparators_NullComparator_, $Equality.$same(this.f_delegate__java_util_Comparators_NullComparator_, null) ? other : this.f_delegate__java_util_Comparators_NullComparator_.m_thenComparing__java_util_Comparator__java_util_Comparator(other)));
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
  NullComparator.$clinit = () =>{};
  NullComparator.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NullComparator;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Comparator.$markImplementor(NullComparator);
Serializable.$markImplementor(NullComparator);
$Util.$setClassMetadata(NullComparator, 'java.util.Comparators$NullComparator');

exports = NullComparator;

//# sourceMappingURL=Comparators$NullComparator.js.map
