goog.module('java.util.function.LongPredicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongPredicate = goog.require('java.util.function.LongPredicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongPredicate}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long):boolean} @nodts*/
  this.f_fn__java_util_function_LongPredicate_$LambdaAdaptor;
  this.$ctor__java_util_function_LongPredicate_$LambdaAdaptor__java_util_function_LongPredicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongPredicate_$LambdaAdaptor__java_util_function_LongPredicate_$JsFunction__void(/** ?function(!$Long):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongPredicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__long__boolean(/** !$Long */ arg0) {
  let /** ?function(!$Long):boolean */ $function;
  return ($function = this.f_fn__java_util_function_LongPredicate_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongPredicate} */
 m_and__java_util_function_LongPredicate__java_util_function_LongPredicate(/** LongPredicate */ arg0) {
  return LongPredicate.m_and__$default__java_util_function_LongPredicate__java_util_function_LongPredicate__java_util_function_LongPredicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongPredicate} */
 m_negate__java_util_function_LongPredicate() {
  return LongPredicate.m_negate__$default__java_util_function_LongPredicate__java_util_function_LongPredicate(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongPredicate} */
 m_or__java_util_function_LongPredicate__java_util_function_LongPredicate(/** LongPredicate */ arg0) {
  return LongPredicate.m_or__$default__java_util_function_LongPredicate__java_util_function_LongPredicate__java_util_function_LongPredicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  LongPredicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
LongPredicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongPredicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongPredicate$$LambdaAdaptor.js.map
