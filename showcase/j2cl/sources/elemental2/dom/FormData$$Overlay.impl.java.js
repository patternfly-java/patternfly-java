goog.module('elemental2.dom.FormData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)), filename);
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__void(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)), filename);
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)), filename);
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__void(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)), filename);
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__void(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormData;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'FormData');

exports = $Overlay;

//# sourceMappingURL=FormData$$Overlay.js.map
