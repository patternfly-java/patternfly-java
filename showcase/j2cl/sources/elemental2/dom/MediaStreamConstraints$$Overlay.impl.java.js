goog.module('elemental2.dom.MediaStreamConstraints.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {MediaStreamConstraints} */
 static m_create__elemental2_dom_MediaStreamConstraints() {
  $Overlay.$clinit();
  return /**@type {MediaStreamConstraints}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints__void(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ audio) {
  $Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(audio));
 }
 /** @nodts */
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__boolean__void(/** !MediaStreamConstraints */ $thisArg, /** boolean */ audio) {
  $Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(audio));
 }
 /** @nodts */
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints__void(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ video) {
  $Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(video));
 }
 /** @nodts */
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__boolean__void(/** !MediaStreamConstraints */ $thisArg, /** boolean */ video) {
  $Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(video));
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

//# sourceMappingURL=MediaStreamConstraints$$Overlay.js.map
