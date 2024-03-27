goog.module('javaemul.internal.NativeRegExp.Match.$Overlay$impl');

let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?string} */
 static m_getAt__$devirt__javaemul_internal_NativeRegExp_Match__int__java_lang_String(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return /**@type {!Array<?string>}*/ (JsUtils.uncheckedCast($thisArg))[index];
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=NativeRegExp$Match$$Overlay.js.map
