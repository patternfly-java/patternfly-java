goog.module('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');

let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template V @return {?string} */
 static m_getKey__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_String(/** !IIterableResult<V> */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?string}*/ (JsUtils.uncheckedCast($thisArg.value[0]));
 }
 /** @nodts @template V @return {V} */
 static m_getValue__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_Object(/** !IIterableResult<V> */ $thisArg) {
  $Overlay.$clinit();
  return JsUtils.uncheckedCast($thisArg.value[1]);
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

//# sourceMappingURL=InternalJsMap$IteratorEntry$$Overlay.js.map
