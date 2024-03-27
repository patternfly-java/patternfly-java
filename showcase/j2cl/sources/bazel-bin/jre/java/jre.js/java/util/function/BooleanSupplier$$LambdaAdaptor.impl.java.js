goog.module('java.util.function.BooleanSupplier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BooleanSupplier = goog.require('java.util.function.BooleanSupplier$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {BooleanSupplier}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():boolean} @nodts*/
  this.f_fn__java_util_function_BooleanSupplier_$LambdaAdaptor;
  this.$ctor__java_util_function_BooleanSupplier_$LambdaAdaptor__java_util_function_BooleanSupplier_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_BooleanSupplier_$LambdaAdaptor__java_util_function_BooleanSupplier_$JsFunction__void(/** ?function():boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_BooleanSupplier_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_getAsBoolean__boolean() {
  let /** ?function():boolean */ $function;
  return ($function = this.f_fn__java_util_function_BooleanSupplier_$LambdaAdaptor, $function());
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
BooleanSupplier.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.BooleanSupplier$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BooleanSupplier$$LambdaAdaptor.js.map
