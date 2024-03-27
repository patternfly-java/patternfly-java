goog.module('elemental2.dom.BarProp.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.BarProp.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {BarProp} */
 static $adapt__elemental2_dom_BarProp_$JsFunction__elemental2_dom_BarProp(/** ?function():boolean */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.BarProp.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BarProp$$Overlay.js.map
