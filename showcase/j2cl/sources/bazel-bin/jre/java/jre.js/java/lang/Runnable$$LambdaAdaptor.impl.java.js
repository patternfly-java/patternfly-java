goog.module('java.lang.Runnable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Runnable = goog.require('java.lang.Runnable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {Runnable}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__java_lang_Runnable_$LambdaAdaptor;
  this.$ctor__java_lang_Runnable_$LambdaAdaptor__java_lang_Runnable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_lang_Runnable_$LambdaAdaptor__java_lang_Runnable_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_lang_Runnable_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_run__void() {
  {
   let $function = this.f_fn__java_lang_Runnable_$LambdaAdaptor;
   $function();
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
Runnable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.lang.Runnable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Runnable$$LambdaAdaptor.js.map
