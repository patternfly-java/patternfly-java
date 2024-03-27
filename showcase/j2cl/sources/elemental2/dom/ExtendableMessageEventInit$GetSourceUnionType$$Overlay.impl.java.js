goog.module('elemental2.dom.ExtendableMessageEventInit.GetSourceUnionType.$Overlay$impl');

let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let ServiceWorkerClient_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {MessagePort} */
 static m_asMessagePort__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__elemental2_dom_MessagePort(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MessagePort}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MessagePort_$Overlay));
 }
 /** @nodts @return {ServiceWorker} */
 static m_asServiceWorker__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__elemental2_dom_ServiceWorker(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorker}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /** @nodts @return {ServiceWorkerClient} */
 static m_asServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__elemental2_dom_ServiceWorkerClient(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ServiceWorkerClient}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ServiceWorkerClient_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isMessagePort__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MessagePort_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isServiceWorker__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ServiceWorkerClient_$Overlay.$isInstance($thisArg);
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
  ServiceWorkerClient_$Overlay = goog.module.get('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ExtendableMessageEventInit$GetSourceUnionType$$Overlay.js.map
