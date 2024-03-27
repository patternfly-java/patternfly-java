goog.module('elemental2.dom.BarProp.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {BarProp}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():boolean} @nodts*/
  this.f_fn__elemental2_dom_BarProp_$LambdaAdaptor;
  this.$ctor__elemental2_dom_BarProp_$LambdaAdaptor__elemental2_dom_BarProp_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_BarProp_$LambdaAdaptor__elemental2_dom_BarProp_$JsFunction__void(/** ?function():boolean */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_BarProp_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 get visible() {
  let /** ?function():boolean */ $function;
  return ($function = this.f_fn__elemental2_dom_BarProp_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.BarProp$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BarProp$$LambdaAdaptor.js.map
