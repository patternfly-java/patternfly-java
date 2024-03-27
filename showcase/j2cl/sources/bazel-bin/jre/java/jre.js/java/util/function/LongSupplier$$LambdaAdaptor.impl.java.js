goog.module('java.util.function.LongSupplier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongSupplier = goog.require('java.util.function.LongSupplier$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongSupplier}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():!$Long */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():!$Long} @nodts*/
  this.f_fn__java_util_function_LongSupplier_$LambdaAdaptor;
  this.$ctor__java_util_function_LongSupplier_$LambdaAdaptor__java_util_function_LongSupplier_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongSupplier_$LambdaAdaptor__java_util_function_LongSupplier_$JsFunction__void(/** ?function():!$Long */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongSupplier_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {!$Long} */
 m_getAsLong__long() {
  let /** ?function():!$Long */ $function;
  return ($function = this.f_fn__java_util_function_LongSupplier_$LambdaAdaptor, $function());
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
LongSupplier.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongSupplier$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongSupplier$$LambdaAdaptor.js.map
