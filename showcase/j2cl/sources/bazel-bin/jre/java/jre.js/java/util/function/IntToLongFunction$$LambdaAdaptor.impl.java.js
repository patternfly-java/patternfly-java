goog.module('java.util.function.IntToLongFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntToLongFunction = goog.require('java.util.function.IntToLongFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {IntToLongFunction}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):!$Long} @nodts*/
  this.f_fn__java_util_function_IntToLongFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_IntToLongFunction_$LambdaAdaptor__java_util_function_IntToLongFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntToLongFunction_$LambdaAdaptor__java_util_function_IntToLongFunction_$JsFunction__void(/** ?function(number):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntToLongFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__int__long(/** number */ arg0) {
  let /** ?function(number):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_IntToLongFunction_$LambdaAdaptor, $function(arg0));
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
IntToLongFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntToLongFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntToLongFunction$$LambdaAdaptor.js.map
