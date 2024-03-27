goog.module('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {WritableStreamDefaultController}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(*):Promise<?void> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(*):Promise<?void>} @nodts*/
  this.f_fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor;
  this.$ctor__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor__elemental2_dom_WritableStreamDefaultController_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor__elemental2_dom_WritableStreamDefaultController_$JsFunction__void(/** ?function(*):Promise<?void> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor = fn;
 }
 /** @override @return {Promise<?void>} */
 error(/** * */ arg0) {
  let /** ?function(*):Promise<?void> */ $function;
  return ($function = this.f_fn__elemental2_dom_WritableStreamDefaultController_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.WritableStreamDefaultController$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=WritableStreamDefaultController$$LambdaAdaptor.js.map
