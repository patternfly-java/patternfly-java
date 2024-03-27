goog.module('java.util.function.DoublePredicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const DoublePredicate = goog.require('java.util.function.DoublePredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DoublePredicate}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):boolean} @nodts*/
  this.f_fn__java_util_function_DoublePredicate_$LambdaAdaptor;
  this.$ctor__java_util_function_DoublePredicate_$LambdaAdaptor__java_util_function_DoublePredicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_DoublePredicate_$LambdaAdaptor__java_util_function_DoublePredicate_$JsFunction__void(/** ?function(number):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_DoublePredicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__double__boolean(/** number */ arg0) {
  let /** ?function(number):boolean */ $function;
  return ($function = this.f_fn__java_util_function_DoublePredicate_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoublePredicate} */
 m_and__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** DoublePredicate */ arg0) {
  return DoublePredicate.m_and__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate__java_util_function_DoublePredicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoublePredicate} */
 m_negate__java_util_function_DoublePredicate() {
  return DoublePredicate.m_negate__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoublePredicate} */
 m_or__java_util_function_DoublePredicate__java_util_function_DoublePredicate(/** DoublePredicate */ arg0) {
  return DoublePredicate.m_or__$default__java_util_function_DoublePredicate__java_util_function_DoublePredicate__java_util_function_DoublePredicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  DoublePredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DoublePredicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.DoublePredicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DoublePredicate$$LambdaAdaptor.js.map
