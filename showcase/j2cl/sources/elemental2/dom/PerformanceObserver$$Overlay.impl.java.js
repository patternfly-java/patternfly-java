goog.module('elemental2.dom.PerformanceObserver.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Array<?string>} */
 static get f_supportedEntryTypes__elemental2_dom_PerformanceObserver_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_supportedEntryTypes__elemental2_dom_PerformanceObserver_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_supportedEntryTypes__elemental2_dom_PerformanceObserver_$Overlay = PerformanceObserver.supportedEntryTypes;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PerformanceObserver;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {Array<?string>} @nodts*/
$Overlay.$static_supportedEntryTypes__elemental2_dom_PerformanceObserver_$Overlay;
$Util.$setClassMetadata($Overlay, 'PerformanceObserver');

exports = $Overlay;

//# sourceMappingURL=PerformanceObserver$$Overlay.js.map
