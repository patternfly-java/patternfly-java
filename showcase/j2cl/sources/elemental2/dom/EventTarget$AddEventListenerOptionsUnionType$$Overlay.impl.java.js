goog.module('elemental2.dom.EventTarget.AddEventListenerOptionsUnionType.$Overlay$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {AddEventListenerOptions} */
 static m_asAddEventListenerOptions__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType__elemental2_dom_AddEventListenerOptions(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {AddEventListenerOptions}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_asBoolean__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object__boolean($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isBoolean__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Boolean.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=EventTarget$AddEventListenerOptionsUnionType$$Overlay.js.map
