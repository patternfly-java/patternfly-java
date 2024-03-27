goog.module('org.patternfly.handler.ToggleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.ToggleHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class ToggleHandler {
 /** @abstract @nodts */
 m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(/** Event */ event, /** C */ component, /** boolean */ expanded) {}
 /** @nodts @template C @return {ToggleHandler<C>} */
 static $adapt(/** ?function(Event, C, boolean):void */ fn) {
  ToggleHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ToggleHandler.$clinit = () =>{};
  ToggleHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_ToggleHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_ToggleHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.ToggleHandler.$LambdaAdaptor$impl');
 }
}
ToggleHandler.$markImplementor(/**@type {Function}*/ (ToggleHandler));
$Util.$setClassMetadataForInterface(ToggleHandler, 'org.patternfly.handler.ToggleHandler');

exports = ToggleHandler;

//# sourceMappingURL=ToggleHandler.js.map
