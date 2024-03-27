goog.module('java.util.function.Predicate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Predicate = goog.require('java.util.function.Predicate$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Predicate<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):boolean} @nodts*/
  this.f_fn__java_util_function_Predicate_$LambdaAdaptor;
  this.$ctor__java_util_function_Predicate_$LambdaAdaptor__java_util_function_Predicate_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_Predicate_$LambdaAdaptor__java_util_function_Predicate_$JsFunction__void(/** ?function(T):boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_Predicate_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {boolean} */
 m_test__java_lang_Object__boolean(/** T */ arg0) {
  let /** ?function(T):boolean */ $function;
  return ($function = this.f_fn__java_util_function_Predicate_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Predicate<T>} */
 m_and__java_util_function_Predicate__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return Predicate.m_and__$default__java_util_function_Predicate__java_util_function_Predicate__java_util_function_Predicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Predicate<T>} */
 m_negate__java_util_function_Predicate() {
  return Predicate.m_negate__$default__java_util_function_Predicate__java_util_function_Predicate(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Predicate<T>} */
 m_or__java_util_function_Predicate__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return Predicate.m_or__$default__java_util_function_Predicate__java_util_function_Predicate__java_util_function_Predicate(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Predicate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Predicate.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.Predicate$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Predicate$$LambdaAdaptor.js.map
