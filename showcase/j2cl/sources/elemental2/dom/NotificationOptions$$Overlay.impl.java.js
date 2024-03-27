goog.module('elemental2.dom.NotificationOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {NotificationOptions} */
 static m_create__elemental2_dom_NotificationOptions() {
  $Overlay.$clinit();
  return /**@type {NotificationOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setActions__$devirt__elemental2_dom_NotificationOptions__arrayOf_elemental2_dom_NotificationAction__void(/** !NotificationOptions */ $thisArg, /** Array<NotificationAction> */ actions) {
  $Overlay.$clinit();
  $thisArg.actions = /**@type {Array<NotificationAction>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(actions));
 }
 /** @nodts */
 static m_setVibrate__$devirt__elemental2_dom_NotificationOptions__arrayOf_double__void(/** !NotificationOptions */ $thisArg, /** Array<number> */ vibrate) {
  $Overlay.$clinit();
  $thisArg.vibrate = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(vibrate));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=NotificationOptions$$Overlay.js.map
