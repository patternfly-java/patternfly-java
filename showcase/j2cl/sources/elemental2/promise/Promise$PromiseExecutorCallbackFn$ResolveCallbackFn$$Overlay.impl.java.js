goog.module('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_IThenable__void(/** function(?):void */ $thisArg, /** IThenable<T> */ value) {
  $Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(/** function(?):void */ $thisArg, /** T */ value) {
  $Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
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

//# sourceMappingURL=Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$$Overlay.js.map
