goog.module('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {IdleCallbackOptions} */
 static m_asIdleCallbackOptions__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType__elemental2_dom_IdleCallbackOptions(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IdleCallbackOptions}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {number} */
 static m_asInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType__int(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asInt__java_lang_Object__int($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DomGlobal$RequestIdleCallbackOptionsUnionType$$Overlay.js.map
