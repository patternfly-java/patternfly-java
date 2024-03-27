goog.module('java.util.concurrent.Callable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Callable = goog.require('java.util.concurrent.Callable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template V
 * @implements {Callable<V>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():V */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():V} @nodts*/
  this.f_fn__java_util_concurrent_Callable_$LambdaAdaptor;
  this.$ctor__java_util_concurrent_Callable_$LambdaAdaptor__java_util_concurrent_Callable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_concurrent_Callable_$LambdaAdaptor__java_util_concurrent_Callable_$JsFunction__void(/** ?function():V */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_concurrent_Callable_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {V} */
 m_call__java_lang_Object() {
  let /** ?function():V */ $function;
  return ($function = this.f_fn__java_util_concurrent_Callable_$LambdaAdaptor, $function());
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
Callable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.concurrent.Callable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Callable$$LambdaAdaptor.js.map
