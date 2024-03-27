goog.module('java.util.function.BiPredicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BiPredicate = goog.require('java.util.function.BiPredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T, U
 * @implements {BiPredicate<T, U>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, U):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, U):boolean} @nodts*/
  this.f_fn__java_util_function_BiPredicate_$LambdaAdaptor;
  this.$ctor__java_util_function_BiPredicate_$LambdaAdaptor__java_util_function_BiPredicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_BiPredicate_$LambdaAdaptor__java_util_function_BiPredicate_$JsFunction__void(/** ?function(T, U):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_BiPredicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__java_lang_Object__java_lang_Object__boolean(/** T */ arg0, /** U */ arg1) {
  let /** ?function(T, U):boolean */ $function;
  return ($function = this.f_fn__java_util_function_BiPredicate_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<T, U>} */
 m_and__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ arg0) {
  return BiPredicate.m_and__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<T, U>} */
 m_negate__java_util_function_BiPredicate() {
  return BiPredicate.m_negate__$default__java_util_function_BiPredicate__java_util_function_BiPredicate(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BiPredicate<T, U>} */
 m_or__java_util_function_BiPredicate__java_util_function_BiPredicate(/** BiPredicate<?, ?> */ arg0) {
  return BiPredicate.m_or__$default__java_util_function_BiPredicate__java_util_function_BiPredicate__java_util_function_BiPredicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BiPredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BiPredicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.BiPredicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BiPredicate$$LambdaAdaptor.js.map
