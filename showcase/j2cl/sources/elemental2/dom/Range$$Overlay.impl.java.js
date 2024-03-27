goog.module('elemental2.dom.Range.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {number} */
 static get f_END_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_END_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_START_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_START_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay = Range.END_TO_END;
  $Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay = Range.END_TO_START;
  $Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay = Range.START_TO_END;
  $Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay = Range.START_TO_START;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Range;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {number} @nodts*/
$Overlay.$static_END_TO_END__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_END_TO_START__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_START_TO_END__elemental2_dom_Range_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_START_TO_START__elemental2_dom_Range_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Range');

exports = $Overlay;

//# sourceMappingURL=Range$$Overlay.js.map
