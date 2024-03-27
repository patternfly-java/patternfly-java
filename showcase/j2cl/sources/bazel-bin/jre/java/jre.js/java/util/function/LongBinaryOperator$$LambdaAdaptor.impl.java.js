goog.module('java.util.function.LongBinaryOperator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongBinaryOperator = goog.require('java.util.function.LongBinaryOperator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongBinaryOperator}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long, !$Long):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long, !$Long):!$Long} @nodts*/
  this.f_fn__java_util_function_LongBinaryOperator_$LambdaAdaptor;
  this.$ctor__java_util_function_LongBinaryOperator_$LambdaAdaptor__java_util_function_LongBinaryOperator_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongBinaryOperator_$LambdaAdaptor__java_util_function_LongBinaryOperator_$JsFunction__void(/** ?function(!$Long, !$Long):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongBinaryOperator_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__long__long__long(/** !$Long */ arg0, /** !$Long */ arg1) {
  let /** ?function(!$Long, !$Long):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_LongBinaryOperator_$LambdaAdaptor, $function(arg0, arg1));
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
LongBinaryOperator.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongBinaryOperator$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongBinaryOperator$$LambdaAdaptor.js.map
