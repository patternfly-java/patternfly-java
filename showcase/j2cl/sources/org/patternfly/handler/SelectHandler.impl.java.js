goog.module('org.patternfly.handler.SelectHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.SelectHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class SelectHandler {
 /** @abstract @nodts */
 m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(/** Event */ event, /** C */ component, /** boolean */ selected) {}
 /** @nodts @template C @return {SelectHandler<C>} */
 static $adapt(/** ?function(Event, C, boolean):void */ fn) {
  SelectHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  SelectHandler.$clinit = () =>{};
  SelectHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_SelectHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_SelectHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.SelectHandler.$LambdaAdaptor$impl');
 }
}
SelectHandler.$markImplementor(/**@type {Function}*/ (SelectHandler));
$Util.$setClassMetadataForInterface(SelectHandler, 'org.patternfly.handler.SelectHandler');

exports = SelectHandler;

//# sourceMappingURL=SelectHandler.js.map
