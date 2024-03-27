goog.module('elemental2.dom.RTCStatsResponse.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCStatsResponse} */
 static $adapt__elemental2_dom_RTCStatsResponse_$JsFunction__elemental2_dom_RTCStatsResponse(/** ?function():Array<RTCStatsReport> */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.RTCStatsResponse.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCStatsResponse$$Overlay.js.map
