goog.module('elemental2.dom.Event.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {number} */
 static get f_AT_TARGET__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_AT_TARGET__elemental2_dom_Event_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_BUBBLING_PHASE__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BUBBLING_PHASE__elemental2_dom_Event_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CAPTURING_PHASE__elemental2_dom_Event_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CAPTURING_PHASE__elemental2_dom_Event_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_AT_TARGET__elemental2_dom_Event_$Overlay = Event.AT_TARGET;
  $Overlay.$static_BUBBLING_PHASE__elemental2_dom_Event_$Overlay = Event.BUBBLING_PHASE;
  $Overlay.$static_CAPTURING_PHASE__elemental2_dom_Event_$Overlay = Event.CAPTURING_PHASE;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Event;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {number} @nodts*/
$Overlay.$static_AT_TARGET__elemental2_dom_Event_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_BUBBLING_PHASE__elemental2_dom_Event_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CAPTURING_PHASE__elemental2_dom_Event_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Event');

exports = $Overlay;

//# sourceMappingURL=Event$$Overlay.js.map
