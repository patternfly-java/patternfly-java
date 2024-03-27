goog.module('org.patternfly.handler.ComponentHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.ComponentHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class ComponentHandler {
 /** @abstract @nodts */
 m_handle__elemental2_dom_Event__java_lang_Object__void(/** Event */ event, /** C */ component) {}
 /** @nodts @template C @return {ComponentHandler<C>} */
 static $adapt(/** ?function(Event, C):void */ fn) {
  ComponentHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ComponentHandler.$clinit = () =>{};
  ComponentHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_ComponentHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_ComponentHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.ComponentHandler.$LambdaAdaptor$impl');
 }
}
ComponentHandler.$markImplementor(/**@type {Function}*/ (ComponentHandler));
$Util.$setClassMetadataForInterface(ComponentHandler, 'org.patternfly.handler.ComponentHandler');

exports = ComponentHandler;

//# sourceMappingURL=ComponentHandler.js.map
