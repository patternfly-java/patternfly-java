goog.module('java.util.function.LongToIntFunction.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const LongToIntFunction = goog.require('java.util.function.LongToIntFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @implements {LongToIntFunction}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(!$Long):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(!$Long):number} @nodts*/
  this.f_fn__java_util_function_LongToIntFunction_$LambdaAdaptor;
  this.$ctor__java_util_function_LongToIntFunction_$LambdaAdaptor__java_util_function_LongToIntFunction_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_LongToIntFunction_$LambdaAdaptor__java_util_function_LongToIntFunction_$JsFunction__void(/** ?function(!$Long):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_LongToIntFunction_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_applyAsInt__long__int(/** !$Long */ arg0) {
  let /** ?function(!$Long):number */ $function;
  return ($function = this.f_fn__java_util_function_LongToIntFunction_$LambdaAdaptor, $function(arg0));
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
LongToIntFunction.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.LongToIntFunction$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LongToIntFunction$$LambdaAdaptor.js.map
