goog.module('elemental2.webstorage.StorageEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_initStorageEvent__$devirt__elemental2_webstorage_StorageEvent__java_lang_String__boolean__boolean__java_lang_String__java_lang_String__java_lang_String__java_lang_String__elemental2_webstorage_Storage__void(/** !StorageEvent */ $thisArg, /** ?string */ typeArg, /** boolean */ canBubbleArg, /** boolean */ cancelableArg, /** ?string */ keyArg, /** ?string */ oldValueArg, /** ?string */ newValueArg, /** ?string */ urlArg, /** Storage */ storageAreaArg) {
  $Overlay.$clinit();
  $thisArg.initStorageEvent(typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urlArg)), storageAreaArg);
 }
 /** @final @nodts */
 static m_initStorageEvent__$devirt__elemental2_webstorage_StorageEvent__java_lang_String__boolean__boolean__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_URL__elemental2_webstorage_Storage__void(/** !StorageEvent */ $thisArg, /** ?string */ typeArg, /** boolean */ canBubbleArg, /** boolean */ cancelableArg, /** ?string */ keyArg, /** ?string */ oldValueArg, /** ?string */ newValueArg, /** URL */ urlArg, /** Storage */ storageAreaArg) {
  $Overlay.$clinit();
  $thisArg.initStorageEvent(typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urlArg)), storageAreaArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StorageEvent;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'StorageEvent');

exports = $Overlay;

//# sourceMappingURL=StorageEvent$$Overlay.js.map
