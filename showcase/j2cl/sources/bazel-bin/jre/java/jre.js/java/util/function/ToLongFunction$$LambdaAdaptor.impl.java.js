goog.module('java.util.function.ToLongFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ToLongFunction = goog.require('java.util.function.ToLongFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @implements {ToLongFunction<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):!$Long} @nodts*/
  this.f_fn__java_util_function_ToLongFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_ToLongFunction_$LambdaAdaptor__java_util_function_ToLongFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ToLongFunction_$LambdaAdaptor__java_util_function_ToLongFunction_$JsFunction__void(/** ?function(T):!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ToLongFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_applyAsLong__java_lang_Object__long(/** T */ arg0) {
  let /** ?function(T):!$Long */ $function;
  return ($function = this.f_fn__java_util_function_ToLongFunction_$LambdaAdaptor, $function(arg0));
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
ToLongFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ToLongFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToLongFunction$$LambdaAdaptor.js.map
