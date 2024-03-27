goog.module('java.util.function.ObjLongConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ObjLongConsumer = goog.require('java.util.function.ObjLongConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @implements {ObjLongConsumer<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, !$Long):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, !$Long):void} @nodts*/
  this.f_fn__java_util_function_ObjLongConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_ObjLongConsumer_$LambdaAdaptor__java_util_function_ObjLongConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ObjLongConsumer_$LambdaAdaptor__java_util_function_ObjLongConsumer_$JsFunction__void(/** ?function(T, !$Long):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ObjLongConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__java_lang_Object__long__void(/** T */ arg0, /** !$Long */ arg1) {
  {
   let $function = this.f_fn__java_util_function_ObjLongConsumer_$LambdaAdaptor;
   $function(arg0, arg1);
  }
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
ObjLongConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ObjLongConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ObjLongConsumer$$LambdaAdaptor.js.map
