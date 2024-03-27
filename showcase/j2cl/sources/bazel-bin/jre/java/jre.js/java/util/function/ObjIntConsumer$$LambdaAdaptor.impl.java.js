goog.module('java.util.function.ObjIntConsumer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ObjIntConsumer = goog.require('java.util.function.ObjIntConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {ObjIntConsumer<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, number):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, number):void} @nodts*/
  this.f_fn__java_util_function_ObjIntConsumer_$LambdaAdaptor;
  this.$ctor__java_util_function_ObjIntConsumer_$LambdaAdaptor__java_util_function_ObjIntConsumer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_function_ObjIntConsumer_$LambdaAdaptor__java_util_function_ObjIntConsumer_$JsFunction__void(/** ?function(T, number):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_function_ObjIntConsumer_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_accept__java_lang_Object__int__void(/** T */ arg0, /** number */ arg1) {
  {
   let $function = this.f_fn__java_util_function_ObjIntConsumer_$LambdaAdaptor;
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
ObjIntConsumer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.function.ObjIntConsumer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ObjIntConsumer$$LambdaAdaptor.js.map
