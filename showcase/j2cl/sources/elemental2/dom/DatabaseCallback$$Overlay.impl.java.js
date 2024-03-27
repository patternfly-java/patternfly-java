goog.module('elemental2.dom.DatabaseCallback.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {DatabaseCallback} */
 static $adapt__elemental2_dom_DatabaseCallback_$JsFunction__elemental2_dom_DatabaseCallback(/** ?function(Database):void */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DatabaseCallback$$Overlay.js.map
