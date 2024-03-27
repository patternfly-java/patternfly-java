goog.module('java.util.function.UnaryOperator$impl');

const j_u_function_Function = goog.require('java.util.function.Function$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.util.function.UnaryOperator.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {j_u_function_Function<T, T>}
 */
class UnaryOperator {
 /** @nodts @template T_1 @return {UnaryOperator<T_1>} */
 static m_identity__java_util_function_UnaryOperator() {
  UnaryOperator.$clinit();
  return UnaryOperator.$adapt((/** T_1 */ t) =>{
   return t;
  });
 }
 /** @nodts @template T @return {UnaryOperator<T>} */
 static $adapt(/** ?function(T):T */ fn) {
  UnaryOperator.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  UnaryOperator.$clinit = () =>{};
  UnaryOperator.$loadModules();
  j_u_function_Function.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  j_u_function_Function.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_function_UnaryOperator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_function_UnaryOperator;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.util.function.UnaryOperator.$LambdaAdaptor$impl');
 }
}
UnaryOperator.$markImplementor(/**@type {Function}*/ (UnaryOperator));
$Util.$setClassMetadataForInterface(UnaryOperator, 'java.util.function.UnaryOperator');

exports = UnaryOperator;

//# sourceMappingURL=UnaryOperator.js.map
