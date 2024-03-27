goog.module('elemental2.dom.MessageEvent.InitMessageEventNSSourceArgUnionType.$Overlay$impl');

let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {MessagePort} */
 static m_asMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__elemental2_dom_MessagePort(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MessagePort}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MessagePort_$Overlay));
 }
 /** @nodts @return {ServiceWorker} */
 static m_asServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__elemental2_dom_ServiceWorker(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorker}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /** @nodts @return {Window} */
 static m_asWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__elemental2_dom_Window(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Window}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Window_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MessagePort_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Window_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  MessagePort_$Overlay = goog.module.get('elemental2.dom.MessagePort.$Overlay$impl');
  ServiceWorker_$Overlay = goog.module.get('elemental2.dom.ServiceWorker.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=MessageEvent$InitMessageEventNSSourceArgUnionType$$Overlay.js.map
