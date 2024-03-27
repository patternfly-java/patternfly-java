goog.module('org.jboss.elemento.ObserverCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ObserverCallback {
 /** @abstract @nodts */
 m_onObserved__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {}
 /** @nodts @return {ObserverCallback} */
 static $adapt(/** ?function(MutationRecord):void */ fn) {
  ObserverCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  ObserverCallback.$clinit = () =>{};
  ObserverCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_ObserverCallback = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ObserverCallback;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');
 }
}
ObserverCallback.$markImplementor(/**@type {Function}*/ (ObserverCallback));
$Util.$setClassMetadataForInterface(ObserverCallback, 'org.jboss.elemento.ObserverCallback');

exports = ObserverCallback;

//# sourceMappingURL=ObserverCallback.js.map
