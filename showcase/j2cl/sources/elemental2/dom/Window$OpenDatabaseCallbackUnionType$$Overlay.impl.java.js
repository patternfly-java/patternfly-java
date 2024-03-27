goog.module('elemental2.dom.Window.OpenDatabaseCallbackUnionType.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Window_OpenDatabaseCallbackUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {DatabaseCallback} */
 static m_asDatabaseCallback__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType__elemental2_dom_DatabaseCallback(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {DatabaseCallback}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {?function(Database):*} */
 static m_asOpenDatabaseCallbackFn__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType__elemental2_dom_Window_OpenDatabaseCallbackFn(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(Database):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @nodts @return {boolean} */
 static m_isOpenDatabaseCallbackFn__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Window$OpenDatabaseCallbackUnionType$$Overlay.js.map
