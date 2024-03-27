goog.module('java.util.function.LongFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongFunction = goog.require('java.util.function.LongFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template R
 * @implements {LongFunction<R>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long):R */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long):R} @nodts*/
  this.f_fn__java_util_function_LongFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_LongFunction_$LambdaAdaptor__java_util_function_LongFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongFunction_$LambdaAdaptor__java_util_function_LongFunction_$JsFunction__void(/** ?function(!$Long):R */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {R} */
 m_apply__long__java_lang_Object(/** !$Long */ arg0) {
  let /** ?function(!$Long):R */ $function;
  return ($function = this.f_fn__java_util_function_LongFunction_$LambdaAdaptor, $function(arg0));
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
LongFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongFunction$$LambdaAdaptor.js.map
