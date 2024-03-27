goog.module('java.util.function.BinaryOperator$impl');

const BiFunction = goog.require('java.util.function.BiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let $LambdaAdaptor = goog.forwardDeclare('java.util.function.BinaryOperator.$LambdaAdaptor$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template T
 * @extends {BiFunction<T, T, T>}
 */
class BinaryOperator {
 /** @nodts @template T_1 @return {BinaryOperator<T_1>} */
 static m_maxBy__java_util_Comparator__java_util_function_BinaryOperator(/** Comparator<?> */ comparator) {
  BinaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(comparator);
  return BinaryOperator.$adapt((/** T_1 */ t, /** T_1 */ u) =>{
   return comparator.m_compare__java_lang_Object__java_lang_Object__int(t, u) <= 0 ? u : t;
  });
 }
 /** @nodts @template T_1 @return {BinaryOperator<T_1>} */
 static m_minBy__java_util_Comparator__java_util_function_BinaryOperator(/** Comparator<?> */ comparator) {
  BinaryOperator.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(comparator);
  return BinaryOperator.$adapt((/** T_1 */ t, /** T_1 */ u) =>{
   return comparator.m_compare__java_lang_Object__java_lang_Object__int(t, u) <= 0 ? t : u;
  });
 }
 /** @nodts @template T @return {BinaryOperator<T>} */
 static $adapt(/** ?function(T, T):T */ fn) {
  BinaryOperator.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  BinaryOperator.$clinit = () =>{};
  BinaryOperator.$loadModules();
  BiFunction.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  BiFunction.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_function_BinaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_BinaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.BinaryOperator.$LambdaAdaptor$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
BinaryOperator.$markImplementor(/**@type {Function}*/ (BinaryOperator));
$Util.$setClassMetadataForInterface(BinaryOperator, 'java.util.function.BinaryOperator');

exports = BinaryOperator;

//# sourceMappingURL=BinaryOperator.js.map
