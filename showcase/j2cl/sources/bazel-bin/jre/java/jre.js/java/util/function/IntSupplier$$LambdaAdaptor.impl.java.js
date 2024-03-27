goog.module('java.util.function.IntSupplier.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntSupplier = goog.require('java.util.function.IntSupplier$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntSupplier}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():number} @nodts*/
  this.f_fn__java_util_function_IntSupplier_$LambdaAdaptor;
  this.$ctor__java_util_function_IntSupplier_$LambdaAdaptor__java_util_function_IntSupplier_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntSupplier_$LambdaAdaptor__java_util_function_IntSupplier_$JsFunction__void(/** ?function():number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntSupplier_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_getAsInt__int() {
  let /** ?function():number */ $function;
  return ($function = this.f_fn__java_util_function_IntSupplier_$LambdaAdaptor, $function());
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
IntSupplier.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntSupplier$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntSupplier$$LambdaAdaptor.js.map
