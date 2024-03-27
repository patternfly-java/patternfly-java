goog.module('elemental2.dom.MediaStream.ConstructorStreamOrTracksUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Array<MediaStreamTrack>} */
 static m_asJsArray__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<MediaStreamTrack>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {MediaStream} */
 static m_asMediaStream__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType__elemental2_dom_MediaStream(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MediaStream}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MediaStream_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isMediaStream__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MediaStream_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  MediaStream_$Overlay = goog.module.get('elemental2.dom.MediaStream.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MediaStream$ConstructorStreamOrTracksUnionType$$Overlay.js.map
