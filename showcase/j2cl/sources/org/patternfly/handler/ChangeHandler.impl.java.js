goog.module('org.patternfly.handler.ChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.ChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C, T
 */
class ChangeHandler {
 /** @abstract @nodts */
 m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(/** Event */ event, /** C */ component, /** T */ value) {}
 /** @nodts @template C, T @return {ChangeHandler<C, T>} */
 static $adapt(/** ?function(Event, C, T):void */ fn) {
  ChangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ChangeHandler.$clinit = () =>{};
  ChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_ChangeHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_ChangeHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.ChangeHandler.$LambdaAdaptor$impl');
 }
}
ChangeHandler.$markImplementor(/**@type {Function}*/ (ChangeHandler));
$Util.$setClassMetadataForInterface(ChangeHandler, 'org.patternfly.handler.ChangeHandler');

exports = ChangeHandler;

//# sourceMappingURL=ChangeHandler.js.map
