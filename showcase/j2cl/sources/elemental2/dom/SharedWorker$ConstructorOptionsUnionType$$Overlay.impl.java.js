goog.module('elemental2.dom.SharedWorker.ConstructorOptionsUnionType.$Overlay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_SharedWorker_ConstructorOptionsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_SharedWorker_ConstructorOptionsUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {WorkerOptions} */
 static m_asWorkerOptions__$devirt__elemental2_dom_SharedWorker_ConstructorOptionsUnionType__elemental2_dom_WorkerOptions(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {WorkerOptions}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_SharedWorker_ConstructorOptionsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=SharedWorker$ConstructorOptionsUnionType$$Overlay.js.map
