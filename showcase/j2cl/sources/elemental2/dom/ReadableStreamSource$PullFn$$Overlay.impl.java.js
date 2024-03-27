goog.module('elemental2.dom.ReadableStreamSource.PullFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableByteStreamController__elemental2_promise_IThenable(/** function(?):IThenable<*> */ $thisArg, /** ReadableByteStreamController */ p0) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)));
 }
 /** @nodts @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableStreamDefaultController__elemental2_promise_IThenable(/** function(?):IThenable<*> */ $thisArg, /** ReadableStreamDefaultController<VALUE> */ p0) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ReadableStreamSource$PullFn$$Overlay.js.map
