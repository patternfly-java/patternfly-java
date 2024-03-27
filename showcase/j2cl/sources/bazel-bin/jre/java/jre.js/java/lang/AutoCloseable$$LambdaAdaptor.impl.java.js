goog.module('java.lang.AutoCloseable.$LambdaAdaptor$impl');

const AutoCloseable = goog.require('java.lang.AutoCloseable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {AutoCloseable}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__java_lang_AutoCloseable_$LambdaAdaptor;
  this.$ctor__java_lang_AutoCloseable_$LambdaAdaptor__java_lang_AutoCloseable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_lang_AutoCloseable_$LambdaAdaptor__java_lang_AutoCloseable_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_lang_AutoCloseable_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_close__void() {
  {
   let $function = this.f_fn__java_lang_AutoCloseable_$LambdaAdaptor;
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
AutoCloseable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.lang.AutoCloseable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=AutoCloseable$$LambdaAdaptor.js.map
