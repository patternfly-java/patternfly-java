goog.module('elemental2.dom.URL.CreateObjectURLObjUnionType.$Overlay$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let MediaSource_$Overlay = goog.forwardDeclare('elemental2.dom.MediaSource.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_URL_CreateObjectURLObjUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__elemental2_dom_Blob(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /** @nodts @return {MediaSource} */
 static m_asMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__elemental2_dom_MediaSource(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MediaSource}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MediaSource_$Overlay));
 }
 /** @nodts @return {MediaStream} */
 static m_asMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__elemental2_dom_MediaStream(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MediaStream}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MediaStream_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Blob_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isMediaSource__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MediaSource_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isMediaStream__$devirt__elemental2_dom_URL_CreateObjectURLObjUnionType__boolean(/** ? */ $thisArg) {
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
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  MediaSource_$Overlay = goog.module.get('elemental2.dom.MediaSource.$Overlay$impl');
  MediaStream_$Overlay = goog.module.get('elemental2.dom.MediaStream.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=URL$CreateObjectURLObjUnionType$$Overlay.js.map
