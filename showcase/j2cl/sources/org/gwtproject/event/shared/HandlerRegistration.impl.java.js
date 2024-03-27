goog.module('org.gwtproject.event.shared.HandlerRegistration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HandlerRegistration {
 /** @abstract @nodts */
 m_removeHandler__void() {}
 /** @nodts @return {HandlerRegistration} */
 static $adapt(/** ?function():void */ fn) {
  HandlerRegistration.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  HandlerRegistration.$clinit = () =>{};
  HandlerRegistration.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_event_shared_HandlerRegistration = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HandlerRegistration;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');
 }
}
HandlerRegistration.$markImplementor(/**@type {Function}*/ (HandlerRegistration));
$Util.$setClassMetadataForInterface(HandlerRegistration, 'org.gwtproject.event.shared.HandlerRegistration');

exports = HandlerRegistration;

//# sourceMappingURL=HandlerRegistration.js.map
