goog.module('elemental2.dom.FetchEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_promise_IThenable__void(/** !FetchEvent */ $thisArg, /** IThenable<Response> */ r) {
  $Overlay.$clinit();
  $thisArg.respondWith(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(r)));
 }
 /** @final @nodts */
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_dom_Response__void(/** !FetchEvent */ $thisArg, /** Response */ r) {
  $Overlay.$clinit();
  $thisArg.respondWith(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(r)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FetchEvent;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'FetchEvent');

exports = $Overlay;

//# sourceMappingURL=FetchEvent$$Overlay.js.map
