goog.module('elemental2.core.TypedArray.SetArrayUnionType.$Overlay$impl');

let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_TypedArray_SetArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {ArrayBufferView} */
 static m_asArrayBufferView__$devirt__elemental2_core_TypedArray_SetArrayUnionType__elemental2_core_ArrayBufferView(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBufferView}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /** @nodts @return {Array<?number>} */
 static m_asJsArray__$devirt__elemental2_core_TypedArray_SetArrayUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<?number>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isArrayBufferView__$devirt__elemental2_core_TypedArray_SetArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_TypedArray_SetArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=TypedArray$SetArrayUnionType$$Overlay.js.map
