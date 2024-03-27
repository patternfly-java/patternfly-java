goog.module('java.util.Comparators.ReverseNaturalOrderComparator$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const Comparator = goog.require('java.util.Comparator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Comparables = goog.forwardDeclare('vmbootstrap.Comparables$impl');

/**
 * @final
 * @implements {Comparator<(Comparable<*>|boolean|number|string)>}
 * @implements {Serializable}
 */
class ReverseNaturalOrderComparator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ReverseNaturalOrderComparator} */
 static $create__() {
  ReverseNaturalOrderComparator.$clinit();
  let $instance = new ReverseNaturalOrderComparator();
  $instance.$ctor__java_util_Comparators_ReverseNaturalOrderComparator__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Comparators_ReverseNaturalOrderComparator__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 m_compare__java_lang_Comparable__java_lang_Comparable__int(/** (Comparable<*>|boolean|number|string) */ a, /** (Comparable<*>|boolean|number|string) */ b) {
  return $Comparables.m_compareTo__java_lang_Comparable__java_lang_Object__int(/**@type {(Comparable<*>|boolean|number|string)}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(b), Comparable)), /**@type {(Comparable<*>|boolean|number|string)}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(a), Comparable)));
 }
 /** @override @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_reversed__java_util_Comparator() {
  return Comparators.f_NATURAL_ORDER__java_util_Comparators_;
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compare__java_lang_Object__java_lang_Object__int(/** (Comparable<*>|boolean|number|string) */ arg0, /** (Comparable<*>|boolean|number|string) */ arg1) {
  return this.m_compare__java_lang_Comparable__java_lang_Comparable__int(/**@type {(Comparable<*>|boolean|number|string)}*/ ($Casts.$to(arg0, Comparable)), /**@type {(Comparable<*>|boolean|number|string)}*/ ($Casts.$to(arg1, Comparable)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparing__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ arg0) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_Comparator__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0, /** Comparator<?> */ arg1) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator__java_util_Comparator(this, arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(/** ToDoubleFunction<?> */ arg0) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparingInt__java_util_function_ToIntFunction__java_util_Comparator(/** ToIntFunction<?> */ arg0) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<(Comparable<*>|boolean|number|string)>} */
 m_thenComparingLong__java_util_function_ToLongFunction__java_util_Comparator(/** ToLongFunction<?> */ arg0) {
  return /**@type {Comparator<(Comparable<*>|boolean|number|string)>}*/ (Comparator.m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction__java_util_Comparator(this, arg0));
 }
 /** @nodts */
 static $clinit() {
  ReverseNaturalOrderComparator.$clinit = () =>{};
  ReverseNaturalOrderComparator.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ReverseNaturalOrderComparator;
 }
 
 /** @nodts */
 static $loadModules() {
  Comparable = goog.module.get('java.lang.Comparable$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Comparables = goog.module.get('vmbootstrap.Comparables$impl');
 }
}
Comparator.$markImplementor(ReverseNaturalOrderComparator);
Serializable.$markImplementor(ReverseNaturalOrderComparator);
$Util.$setClassMetadata(ReverseNaturalOrderComparator, 'java.util.Comparators$ReverseNaturalOrderComparator');

exports = ReverseNaturalOrderComparator;

//# sourceMappingURL=Comparators$ReverseNaturalOrderComparator.js.map
