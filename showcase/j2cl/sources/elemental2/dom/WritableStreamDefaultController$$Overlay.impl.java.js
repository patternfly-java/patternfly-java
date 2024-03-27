goog.module('elemental2.dom.WritableStreamDefaultController.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {WritableStreamDefaultController} */
 static $adapt__elemental2_dom_WritableStreamDefaultController_$JsFunction__elemental2_dom_WritableStreamDefaultController(/** ?function(*):Promise<?void> */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=WritableStreamDefaultController$$Overlay.js.map
