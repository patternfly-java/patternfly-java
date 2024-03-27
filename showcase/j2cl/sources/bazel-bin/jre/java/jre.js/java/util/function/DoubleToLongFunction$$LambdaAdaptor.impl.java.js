goog.module('java.util.function.DoubleToLongFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoubleToLongFunction = goog.require('java.util.function.DoubleToLongFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {DoubleToLongFunction}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):!$Long} @nodts*/
  this.f_fn__java_util_function_DoubleToLongFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_DoubleToLongFunction_$LambdaAdaptor__java_util_function_DoubleToLongFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoubleToLongFunction_$LambdaAdaptor__java_util_function_DoubleToLongFunction_$JsFunction__void(/** ?function(number):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoubleToLongFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__double__long(/** number */ arg0) {
  let /** ?function(number):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_DoubleToLongFunction_$LambdaAdaptor, $function(arg0));
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
DoubleToLongFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoubleToLongFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoubleToLongFunction$$LambdaAdaptor.js.map
