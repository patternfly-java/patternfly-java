goog.module('java.util.concurrent.Executor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Executor = goog.require('java.util.concurrent.Executor$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');

/**
 * @implements {Executor}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Runnable):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Runnable):void} @nodts*/
  this.f_fn__java_util_concurrent_Executor_$LambdaAdaptor;
  this.$ctor__java_util_concurrent_Executor_$LambdaAdaptor__java_util_concurrent_Executor_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_util_concurrent_Executor_$LambdaAdaptor__java_util_concurrent_Executor_$JsFunction__void(/** ?function(Runnable):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_util_concurrent_Executor_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_execute__java_lang_Runnable__void(/** Runnable */ arg0) {
  {
   let $function = this.f_fn__java_util_concurrent_Executor_$LambdaAdaptor;
   $function(arg0);
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
Executor.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.util.concurrent.Executor$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Executor$$LambdaAdaptor.js.map
