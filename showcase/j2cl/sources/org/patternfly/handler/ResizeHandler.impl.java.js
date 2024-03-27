goog.module('org.patternfly.handler.ResizeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.ResizeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class ResizeHandler {
 /** @abstract @nodts */
 m_onResize__java_lang_Object__void(/** C */ component) {}
 /** @nodts @template C @return {ResizeHandler<C>} */
 static $adapt(/** ?function(C):void */ fn) {
  ResizeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ResizeHandler.$clinit = () =>{};
  ResizeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_ResizeHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_ResizeHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.ResizeHandler.$LambdaAdaptor$impl');
 }
}
ResizeHandler.$markImplementor(/**@type {Function}*/ (ResizeHandler));
$Util.$setClassMetadataForInterface(ResizeHandler, 'org.patternfly.handler.ResizeHandler');

exports = ResizeHandler;

//# sourceMappingURL=ResizeHandler.js.map
