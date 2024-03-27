goog.module('elemental2.dom.ApplicationCache.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {number} */
 static get f_CHECKING__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CHECKING__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_IDLE__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_IDLE__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_UNCACHED__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_UNCACHED__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CHECKING__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.CHECKING;
  $Overlay.$static_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.DOWNLOADING;
  $Overlay.$static_IDLE__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.IDLE;
  $Overlay.$static_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.OBSOLETE;
  $Overlay.$static_UNCACHED__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.UNCACHED;
  $Overlay.$static_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay = ApplicationCache.UPDATEREADY;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplicationCache;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {number} @nodts*/
$Overlay.$static_CHECKING__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_DOWNLOADING__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_IDLE__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_OBSOLETE__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_UNCACHED__elemental2_dom_ApplicationCache_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_UPDATEREADY__elemental2_dom_ApplicationCache_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'ApplicationCache');

exports = $Overlay;

//# sourceMappingURL=ApplicationCache$$Overlay.js.map
