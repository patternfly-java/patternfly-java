goog.module('java.util.function.LongUnaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongUnaryOperator = goog.require('java.util.function.LongUnaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongUnaryOperator}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long):!$Long} @nodts*/
  this.f_fn__java_util_function_LongUnaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_LongUnaryOperator_$LambdaAdaptor__java_util_function_LongUnaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongUnaryOperator_$LambdaAdaptor__java_util_function_LongUnaryOperator_$JsFunction__void(/** ?function(!$Long):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongUnaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__long__long(/** !$Long */ arg0) {
  let /** ?function(!$Long):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_LongUnaryOperator_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongUnaryOperator} */
 m_andThen__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** LongUnaryOperator */ arg0) {
  return LongUnaryOperator.m_andThen__$default__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongUnaryOperator} */
 m_compose__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(/** LongUnaryOperator */ arg0) {
  return LongUnaryOperator.m_compose__$default__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator__java_util_function_LongUnaryOperator(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  LongUnaryOperator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
LongUnaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongUnaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongUnaryOperator$$LambdaAdaptor.js.map
