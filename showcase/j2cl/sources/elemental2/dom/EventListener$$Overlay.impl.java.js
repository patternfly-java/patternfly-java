goog.module('elemental2.dom.EventListener.$Overlay$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.EventListener.$LambdaAdaptor$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {EventListener} */
 static $adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener(/** ?function(Event):void */ fn) {
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
  $LambdaAdaptor = goog.module.get('elemental2.dom.EventListener.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=EventListener$$Overlay.js.map
