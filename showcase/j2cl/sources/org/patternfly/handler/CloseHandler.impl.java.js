goog.module('org.patternfly.handler.CloseHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.CloseHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class CloseHandler {
 /** @nodts @template C_1 @return {boolean} */
 static m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(/** C_1 */ component, /** CloseHandler<C_1> */ closeHandler, /** Event */ event, /** boolean */ fireEvent) {
  CloseHandler.$clinit();
  if (fireEvent && !$Equality.$same(closeHandler, null)) {
   return closeHandler.m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(event, component);
  }
  return true;
 }
 /** @nodts @template C_1 */
 static m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(/** C_1 */ component, /** CloseHandler<C_1> */ closeHandler, /** Event */ event, /** boolean */ fireEvent) {
  CloseHandler.$clinit();
  if (fireEvent && !$Equality.$same(closeHandler, null)) {
   closeHandler.m_onClose__elemental2_dom_Event__java_lang_Object__void(event, component);
  }
 }
 /** @abstract @nodts @return {boolean} */
 m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(/** Event */ event, /** C */ component) {}
 /** @abstract @nodts */
 m_onClose__elemental2_dom_Event__java_lang_Object__void(/** Event */ event, /** C */ component) {}
 /** @nodts @template C @return {CloseHandler<C>} */
 static $adapt(/** ?function(Event, C):void */ fn) {
  CloseHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template C @return {boolean} */
 static m_shouldClose__$default__org_patternfly_handler_CloseHandler__elemental2_dom_Event__java_lang_Object__boolean(/** !CloseHandler<C> */ $thisArg, /** Event */ event, /** C */ component) {
  CloseHandler.$clinit();
  return true;
 }
 /** @nodts */
 static $clinit() {
  CloseHandler.$clinit = () =>{};
  CloseHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_CloseHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_CloseHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.CloseHandler.$LambdaAdaptor$impl');
 }
}
CloseHandler.$markImplementor(/**@type {Function}*/ (CloseHandler));
$Util.$setClassMetadataForInterface(CloseHandler, 'org.patternfly.handler.CloseHandler');

exports = CloseHandler;

//# sourceMappingURL=CloseHandler.js.map
