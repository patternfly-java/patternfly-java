goog.module('elemental2.dom.EventSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {number} */
 static get f_CLOSED__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CONNECTING__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_OPEN__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay = EventSource.CLOSED;
  $Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay = EventSource.CONNECTING;
  $Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay = EventSource.OPEN;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventSource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {number} @nodts*/
$Overlay.$static_CLOSED__elemental2_dom_EventSource_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CONNECTING__elemental2_dom_EventSource_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_OPEN__elemental2_dom_EventSource_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'EventSource');

exports = $Overlay;

//# sourceMappingURL=EventSource$$Overlay.js.map
