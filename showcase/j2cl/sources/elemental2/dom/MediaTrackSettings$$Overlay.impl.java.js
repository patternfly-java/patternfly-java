goog.module('elemental2.dom.MediaTrackSettings.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_setPointsOfInterest__$devirt__elemental2_dom_MediaTrackSettings__arrayOf_elemental2_dom_MediaTrackSettings_PointsOfInterestFieldType__void(/** !MediaTrackSettings */ $thisArg, /** Array<?> */ pointsOfInterest) {
  $Overlay.$clinit();
  $thisArg.pointsOfInterest = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(pointsOfInterest));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MediaTrackSettings$$Overlay.js.map
