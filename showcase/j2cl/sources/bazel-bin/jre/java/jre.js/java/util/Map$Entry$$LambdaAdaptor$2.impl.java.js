goog.module('java.util.Map.Entry.$LambdaAdaptor$2$impl');

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
 * @template T
 * @implements {Serializable}
 * @implements {Comparator<T>}
 */
class $LambdaAdaptor$2 extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, T):number */ fn) {
  $LambdaAdaptor$2.$clinit();
  super();
  /**@type {?function(T, T):number} @nodts*/
  this.f_fn__java_util_Map_Entry_$LambdaAdaptor$2;
  this.$ctor__java_util_Map_Entry_$LambdaAdaptor$2__java_util_Comparator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_Map_Entry_$LambdaAdaptor$2__java_util_Comparator_$JsFunction__void(/** ?function(T, T):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_Map_Entry_$LambdaAdaptor$2 = fn;
 }
 /** @override @nodts @return {number} */
 m_compare__java_lang_Object__java_lang_Object__int(/** T */ arg0, /** T */ arg1) {
  let /** ?function(T, T):number */ $function;
  return ($function = this.f_fn__java_util_Map_Entry_$LambdaAdaptor$2, $function(arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_reversed__java_util_Comparator() {
  return Comparator.m_reversed__$default__java_util_Comparator__java_util_Comparator(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparing__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ arg0) {
  return Comparator.m_thenComparing__$default__java_util_Comparator__java_util_Comparator__java_util_Comparator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0, /** Comparator<?> */ arg1) {
  return Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator__java_util_Comparator(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0) {
  return Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(/** ToDoubleFunction<?> */ arg0) {
  return Comparator.m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction__java_util_Comparator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingInt__java_util_function_ToIntFunction__java_util_Comparator(/** ToIntFunction<?> */ arg0) {
  return Comparator.m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction__java_util_Comparator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<T>} */
 m_thenComparingLong__java_util_function_ToLongFunction__java_util_Comparator(/** ToLongFunction<?> */ arg0) {
  return Comparator.m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction__java_util_Comparator(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor$2.$clinit = () =>{};
  $LambdaAdaptor$2.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor$2;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Serializable.$markImplementor($LambdaAdaptor$2);
Comparator.$markImplementor($LambdaAdaptor$2);
$Util.$setClassMetadata($LambdaAdaptor$2, 'java.util.Map$Entry$$LambdaAdaptor$2');

exports = $LambdaAdaptor$2;

//# sourceMappingURL=Map$Entry$$LambdaAdaptor$2.js.map
