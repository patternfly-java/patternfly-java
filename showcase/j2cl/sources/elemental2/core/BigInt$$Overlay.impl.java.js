goog.module('elemental2.core.BigInt.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__elemental2_core_JsObject__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)), options);
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__java_lang_Object__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__elemental2_core_JsObject__java_lang_String($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__java_lang_String__elemental2_core_JsObject__java_lang_String(/** !BigInt */ $thisArg, /** ?string */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)), options);
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__arrayOf_java_lang_String__elemental2_core_JsObject__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales, /** Object */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__elemental2_core_JsObject__java_lang_String($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)), options);
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__java_lang_String__java_lang_Object__java_lang_String(/** !BigInt */ $thisArg, /** ?string */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_BigInt__java_lang_String__elemental2_core_JsObject__java_lang_String($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__arrayOf_java_lang_String__java_lang_Object__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_BigInt__arrayOf_java_lang_String__elemental2_core_JsObject__java_lang_String($thisArg, locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__java_lang_String__java_lang_String(/** !BigInt */ $thisArg, /** ?string */ locales) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__arrayOf_java_lang_String__java_lang_String(/** !BigInt */ $thisArg, /** Array<?string> */ locales) {
  $Overlay.$clinit();
  return $Overlay.m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_JsArray__java_lang_String($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(locales)));
 }
 /** @final @nodts @return {?string} */
 static m_toLocaleString__$devirt__elemental2_core_BigInt__elemental2_core_BigInt_ToLocaleStringLocalesUnionType__java_lang_Object__java_lang_String(/** !BigInt */ $thisArg, /** ? */ locales, /** * */ options) {
  $Overlay.$clinit();
  return $thisArg.toLocaleString(locales, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BigInt;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'BigInt');

exports = $Overlay;

//# sourceMappingURL=BigInt$$Overlay.js.map
