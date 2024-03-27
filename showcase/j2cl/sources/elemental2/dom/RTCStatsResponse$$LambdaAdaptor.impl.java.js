goog.module('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {RTCStatsResponse}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Array<RTCStatsReport> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Array<RTCStatsReport>} @nodts*/
  this.f_fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor;
  this.$ctor__elemental2_dom_RTCStatsResponse_$LambdaAdaptor__elemental2_dom_RTCStatsResponse_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_RTCStatsResponse_$LambdaAdaptor__elemental2_dom_RTCStatsResponse_$JsFunction__void(/** ?function():Array<RTCStatsReport> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor = fn;
 }
 /** @override @return {Array<RTCStatsReport>} */
 result() {
  let /** ?function():Array<RTCStatsReport> */ $function;
  return ($function = this.f_fn__elemental2_dom_RTCStatsResponse_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.RTCStatsResponse$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=RTCStatsResponse$$LambdaAdaptor.js.map
