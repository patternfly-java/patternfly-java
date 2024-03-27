goog.module('org.patternfly.handler.CloseHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.patternfly.handler.CloseHandler$impl');

/**
 * @template C
 * @implements {CloseHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C):void} @nodts*/
  this.f_fn__org_patternfly_handler_CloseHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_CloseHandler_$LambdaAdaptor__org_patternfly_handler_CloseHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_CloseHandler_$LambdaAdaptor__org_patternfly_handler_CloseHandler_$JsFunction__void(/** ?function(Event, C):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_CloseHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onClose__elemental2_dom_Event__java_lang_Object__void(/** Event */ arg0, /** C */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_handler_CloseHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(/** Event */ arg0, /** C */ arg1) {
  return CloseHandler.m_shouldClose__$default__org_patternfly_handler_CloseHandler__elemental2_dom_Event__java_lang_Object__boolean(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  CloseHandler.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
CloseHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.CloseHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=CloseHandler$$LambdaAdaptor.js.map
