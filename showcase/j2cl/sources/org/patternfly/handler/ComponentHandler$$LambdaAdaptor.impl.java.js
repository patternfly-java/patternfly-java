goog.module('org.patternfly.handler.ComponentHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentHandler = goog.require('org.patternfly.handler.ComponentHandler$impl');

/**
 * @template C
 * @implements {ComponentHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C):void} @nodts*/
  this.f_fn__org_patternfly_handler_ComponentHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_ComponentHandler_$LambdaAdaptor__org_patternfly_handler_ComponentHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_ComponentHandler_$LambdaAdaptor__org_patternfly_handler_ComponentHandler_$JsFunction__void(/** ?function(Event, C):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_ComponentHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_handle__elemental2_dom_Event__java_lang_Object__void(/** Event */ arg0, /** C */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_handler_ComponentHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ComponentHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.ComponentHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ComponentHandler$$LambdaAdaptor.js.map
