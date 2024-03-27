goog.module('elemental2.webstorage.WebStorageWindow.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Window} */
 static m_of__elemental2_dom_Window__elemental2_webstorage_WebStorageWindow(/** Window */ o) {
  $Overlay.$clinit();
  return /**@type {Window}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(o), $Overlay));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Window');

exports = $Overlay;

//# sourceMappingURL=WebStorageWindow$$Overlay.js.map
