goog.module('org.patternfly.handler.MultiSelectHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C, T
 */
class MultiSelectHandler {
 /** @abstract @nodts */
 m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(/** Event */ event, /** C */ component, /** List<T> */ values) {}
 /** @nodts @template C, T @return {MultiSelectHandler<C, T>} */
 static $adapt(/** ?function(Event, C, List<T>):void */ fn) {
  MultiSelectHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  MultiSelectHandler.$clinit = () =>{};
  MultiSelectHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_MultiSelectHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_MultiSelectHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');
 }
}
MultiSelectHandler.$markImplementor(/**@type {Function}*/ (MultiSelectHandler));
$Util.$setClassMetadataForInterface(MultiSelectHandler, 'org.patternfly.handler.MultiSelectHandler');

exports = MultiSelectHandler;

//# sourceMappingURL=MultiSelectHandler.js.map
