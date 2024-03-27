goog.module('java.io.Flushable.$LambdaAdaptor$impl');

const Flushable = goog.require('java.io.Flushable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {Flushable}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__java_io_Flushable_$LambdaAdaptor;
  this.$ctor__java_io_Flushable_$LambdaAdaptor__java_io_Flushable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_io_Flushable_$LambdaAdaptor__java_io_Flushable_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_io_Flushable_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_flush__void() {
  {
   let $function = this.f_fn__java_io_Flushable_$LambdaAdaptor;
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
Flushable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.io.Flushable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Flushable$$LambdaAdaptor.js.map
