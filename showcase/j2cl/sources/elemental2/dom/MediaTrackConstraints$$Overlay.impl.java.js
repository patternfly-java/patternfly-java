goog.module('elemental2.dom.MediaTrackConstraints.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {MediaTrackConstraints} */
 static m_create__elemental2_dom_MediaTrackConstraints() {
  $Overlay.$clinit();
  return /**@type {MediaTrackConstraints}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setAdvanced__$devirt__elemental2_dom_MediaTrackConstraints__arrayOf_elemental2_dom_MediaTrackConstraintSet__void(/** !MediaTrackConstraints */ $thisArg, /** Array<MediaTrackConstraintSet> */ advanced) {
  $Overlay.$clinit();
  $thisArg.advanced = /**@type {Array<MediaTrackConstraintSet>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(advanced));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MediaTrackConstraints$$Overlay.js.map
