goog.module('elemental2.dom.DocumentRange.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {DocumentRange} */
 static $adapt__elemental2_dom_DocumentRange_$JsFunction__elemental2_dom_DocumentRange(/** ?function():Range */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DocumentRange$$Overlay.js.map
