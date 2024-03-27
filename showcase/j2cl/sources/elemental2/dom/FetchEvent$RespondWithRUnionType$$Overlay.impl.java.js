goog.module('elemental2.dom.FetchEvent.RespondWithRUnionType.$Overlay$impl');

let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_FetchEvent_RespondWithRUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {IThenable<Response>} */
 static m_asIThenable__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType__elemental2_promise_IThenable(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IThenable<Response>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {Response} */
 static m_asResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType__elemental2_dom_Response(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Response}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Response_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isResponse__$devirt__elemental2_dom_FetchEvent_RespondWithRUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Response_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Response_$Overlay = goog.module.get('elemental2.dom.Response.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=FetchEvent$RespondWithRUnionType$$Overlay.js.map
