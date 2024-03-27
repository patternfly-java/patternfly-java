goog.module('elemental2.dom.DocumentEvent.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {DocumentEvent} */
 static $adapt__elemental2_dom_DocumentEvent_$JsFunction__elemental2_dom_DocumentEvent(/** ?function(?string):Event */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DocumentEvent$$Overlay.js.map
