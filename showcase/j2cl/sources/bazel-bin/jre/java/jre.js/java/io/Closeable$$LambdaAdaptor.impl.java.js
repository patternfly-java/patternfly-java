goog.module('java.io.Closeable.$LambdaAdaptor$impl');

const Closeable = goog.require('java.io.Closeable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {Closeable}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__java_io_Closeable_$LambdaAdaptor;
  this.$ctor__java_io_Closeable_$LambdaAdaptor__java_io_Closeable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_io_Closeable_$LambdaAdaptor__java_io_Closeable_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_io_Closeable_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_close__void() {
  {
   let $function = this.f_fn__java_io_Closeable_$LambdaAdaptor;
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
Closeable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.io.Closeable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Closeable$$LambdaAdaptor.js.map
