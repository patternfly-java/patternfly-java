goog.module('java.util.function.IntPredicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const IntPredicate = goog.require('java.util.function.IntPredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {IntPredicate}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):boolean} @nodts*/
  this.f_fn__java_util_function_IntPredicate_$LambdaAdaptor;
  this.$ctor__java_util_function_IntPredicate_$LambdaAdaptor__java_util_function_IntPredicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_IntPredicate_$LambdaAdaptor__java_util_function_IntPredicate_$JsFunction__void(/** ?function(number):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_IntPredicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__int__boolean(/** number */ arg0) {
  let /** ?function(number):boolean */ $function;
  return ($function = this.f_fn__java_util_function_IntPredicate_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntPredicate} */
 m_and__java_util_function_IntPredicate__java_util_function_IntPredicate(/** IntPredicate */ arg0) {
  return IntPredicate.m_and__$default__java_util_function_IntPredicate__java_util_function_IntPredicate__java_util_function_IntPredicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntPredicate} */
 m_negate__java_util_function_IntPredicate() {
  return IntPredicate.m_negate__$default__java_util_function_IntPredicate__java_util_function_IntPredicate(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntPredicate} */
 m_or__java_util_function_IntPredicate__java_util_function_IntPredicate(/** IntPredicate */ arg0) {
  return IntPredicate.m_or__$default__java_util_function_IntPredicate__java_util_function_IntPredicate__java_util_function_IntPredicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IntPredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IntPredicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.IntPredicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IntPredicate$$LambdaAdaptor.js.map
