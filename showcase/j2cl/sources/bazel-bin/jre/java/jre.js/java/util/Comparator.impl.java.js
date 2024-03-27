goog.module('java.util.Comparator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let $LambdaAdaptor$1 = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$1$impl');
let $LambdaAdaptor$2 = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$2$impl');
let $LambdaAdaptor$3 = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$3$impl');
let $LambdaAdaptor$4 = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$4$impl');
let $LambdaAdaptor$5 = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$5$impl');
let $LambdaAdaptor = goog.forwardDeclare('java.util.Comparator.$LambdaAdaptor$impl');
let Comparators = goog.forwardDeclare('java.util.Comparators$impl');
let NullComparator = goog.forwardDeclare('java.util.Comparators.NullComparator$impl');
let ReversedComparator = goog.forwardDeclare('java.util.Comparators.ReversedComparator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template T
 */
class Comparator {
 /** @abstract @nodts @return {number} */
 m_compare__java_lang_Object__java_lang_Object__int(/** T */ a, /** T */ b) {}
 /** @abstract @return {boolean} */
 equals(/** * */ other) {}
 /** @abstract @nodts @return {Comparator<T>} */
 m_reversed__java_util_Comparator() {}
 /** @abstract @nodts @return {Comparator<T>} */
 m_thenComparing__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ other) {}
 /** @abstract @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** j_u_function_Function<?, ?> */ keyExtractor, /** Comparator<?> */ keyComparator) {}
 /** @abstract @nodts @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ keyExtractor) {}
 /** @abstract @nodts @return {Comparator<T>} */
 m_thenComparingInt__java_util_function_ToIntFunction__java_util_Comparator(/** ToIntFunction<?> */ keyExtractor) {}
 /** @abstract @nodts @return {Comparator<T>} */
 m_thenComparingLong__java_util_function_ToLongFunction__java_util_Comparator(/** ToLongFunction<?> */ keyExtractor) {}
 /** @abstract @nodts @return {Comparator<T>} */
 m_thenComparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(/** ToDoubleFunction<?> */ keyExtractor) {}
 /** @nodts @template T_1, U @return {Comparator<T_1>} */
 static m_comparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** j_u_function_Function<?, ?> */ keyExtractor, /** Comparator<?> */ keyComparator) {
  Comparator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(keyExtractor);
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(keyComparator);
  return /**@type {Comparator<T_1>}*/ ($Casts.$to(new $LambdaAdaptor$2((/** T_1 */ a, /** T_1 */ b) =>{
   return keyComparator.m_compare__java_lang_Object__java_lang_Object__int(keyExtractor.m_apply__java_lang_Object__java_lang_Object(a), keyExtractor.m_apply__java_lang_Object__java_lang_Object(b));
  }), Comparator));
 }
 /** @nodts @template T_1, U @return {Comparator<T_1>} */
 static m_comparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ keyExtractor) {
  Comparator.$clinit();
  return /**@type {Comparator<T_1>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(keyExtractor, /**@type {Comparator<(Comparable|boolean|number|string)>}*/ (Comparator.m_naturalOrder__java_util_Comparator())));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_comparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(/** ToDoubleFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(keyExtractor);
  return /**@type {Comparator<T_1>}*/ ($Casts.$to(new $LambdaAdaptor$3((/** T_1 */ a, /** T_1 */ b) =>{
   return Double.m_compare__double__double__int(keyExtractor.m_applyAsDouble__java_lang_Object__double(a), keyExtractor.m_applyAsDouble__java_lang_Object__double(b));
  }), Comparator));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_comparingInt__java_util_function_ToIntFunction__java_util_Comparator(/** ToIntFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(keyExtractor);
  return /**@type {Comparator<T_1>}*/ ($Casts.$to(new $LambdaAdaptor$4((/** T_1 */ a, /** T_1 */ b) =>{
   return Integer.m_compare__int__int__int(keyExtractor.m_applyAsInt__java_lang_Object__int(a), keyExtractor.m_applyAsInt__java_lang_Object__int(b));
  }), Comparator));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_comparingLong__java_util_function_ToLongFunction__java_util_Comparator(/** ToLongFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(keyExtractor);
  return /**@type {Comparator<T_1>}*/ ($Casts.$to(new $LambdaAdaptor$5((/** T_1 */ a, /** T_1 */ b) =>{
   return Long.m_compare__long__long__int(keyExtractor.m_applyAsLong__java_lang_Object__long(a), keyExtractor.m_applyAsLong__java_lang_Object__long(b));
  }), Comparator));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_naturalOrder__java_util_Comparator() {
  Comparator.$clinit();
  return /**@type {Comparator<T_1>}*/ (Comparators.m_naturalOrder__java_util_Comparator());
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_nullsFirst__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ comparator) {
  Comparator.$clinit();
  return /**@type {!NullComparator<T_1>}*/ (NullComparator.$create__boolean__java_util_Comparator(true, comparator));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_nullsLast__java_util_Comparator__java_util_Comparator(/** Comparator<?> */ comparator) {
  Comparator.$clinit();
  return /**@type {!NullComparator<T_1>}*/ (NullComparator.$create__boolean__java_util_Comparator(false, comparator));
 }
 /** @nodts @template T_1 @return {Comparator<T_1>} */
 static m_reverseOrder__java_util_Comparator() {
  Comparator.$clinit();
  return /**@type {Comparator<T_1>}*/ (Comparators.m_reverseNaturalOrder__java_util_Comparator());
 }
 /** @nodts @template T @return {Comparator<T>} */
 static $adapt(/** ?function(T, T):number */ fn) {
  Comparator.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_reversed__$default__java_util_Comparator__java_util_Comparator(/** !Comparator<T> */ $thisArg) {
  Comparator.$clinit();
  return /**@type {!ReversedComparator<T>}*/ (ReversedComparator.$create__java_util_Comparator($thisArg));
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_thenComparing__$default__java_util_Comparator__java_util_Comparator__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** Comparator<?> */ other) {
  Comparator.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(other);
  return /**@type {Comparator<T>}*/ ($Casts.$to(new $LambdaAdaptor$1((/** T */ a, /** T */ b) =>{
   let c = $thisArg.m_compare__java_lang_Object__java_lang_Object__int(a, b);
   return c != 0 ? c : other.m_compare__java_lang_Object__java_lang_Object__int(a, b);
  }), Comparator));
 }
 /** @nodts @template T, U @return {Comparator<T>} */
 static m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** j_u_function_Function<?, ?> */ keyExtractor, /** Comparator<?> */ keyComparator) {
  Comparator.$clinit();
  return $thisArg.m_thenComparing__java_util_Comparator__java_util_Comparator(/**@type {Comparator<T>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator__java_util_Comparator(keyExtractor, keyComparator)));
 }
 /** @nodts @template T, U @return {Comparator<T>} */
 static m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** j_u_function_Function<?, ?> */ keyExtractor) {
  Comparator.$clinit();
  return $thisArg.m_thenComparing__java_util_Comparator__java_util_Comparator(/**@type {Comparator<T>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(keyExtractor)));
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** ToIntFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  return $thisArg.m_thenComparing__java_util_Comparator__java_util_Comparator(/**@type {Comparator<T>}*/ (Comparator.m_comparingInt__java_util_function_ToIntFunction__java_util_Comparator(keyExtractor)));
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** ToLongFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  return $thisArg.m_thenComparing__java_util_Comparator__java_util_Comparator(/**@type {Comparator<T>}*/ (Comparator.m_comparingLong__java_util_function_ToLongFunction__java_util_Comparator(keyExtractor)));
 }
 /** @nodts @template T @return {Comparator<T>} */
 static m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction__java_util_Comparator(/** !Comparator<T> */ $thisArg, /** ToDoubleFunction<?> */ keyExtractor) {
  Comparator.$clinit();
  return $thisArg.m_thenComparing__java_util_Comparator__java_util_Comparator(/**@type {Comparator<T>}*/ (Comparator.m_comparingDouble__java_util_function_ToDoubleFunction__java_util_Comparator(keyExtractor)));
 }
 /** @nodts */
 static $clinit() {
  Comparator.$clinit = () =>{};
  Comparator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Comparator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Comparator;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  $LambdaAdaptor$1 = goog.module.get('java.util.Comparator.$LambdaAdaptor$1$impl');
  $LambdaAdaptor$2 = goog.module.get('java.util.Comparator.$LambdaAdaptor$2$impl');
  $LambdaAdaptor$3 = goog.module.get('java.util.Comparator.$LambdaAdaptor$3$impl');
  $LambdaAdaptor$4 = goog.module.get('java.util.Comparator.$LambdaAdaptor$4$impl');
  $LambdaAdaptor$5 = goog.module.get('java.util.Comparator.$LambdaAdaptor$5$impl');
  $LambdaAdaptor = goog.module.get('java.util.Comparator.$LambdaAdaptor$impl');
  Comparators = goog.module.get('java.util.Comparators$impl');
  NullComparator = goog.module.get('java.util.Comparators.NullComparator$impl');
  ReversedComparator = goog.module.get('java.util.Comparators.ReversedComparator$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Comparator.$markImplementor(/**@type {Function}*/ (Comparator));
$Util.$setClassMetadataForInterface(Comparator, 'java.util.Comparator');

exports = Comparator;

//# sourceMappingURL=Comparator.js.map
