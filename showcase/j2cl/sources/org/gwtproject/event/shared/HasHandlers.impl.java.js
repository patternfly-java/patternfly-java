goog.module('org.gwtproject.event.shared.HasHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasHandlers {
 /** @abstract @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ event) {}
 /** @nodts @return {HasHandlers} */
 static $adapt(/** ?function(Event<?>):void */ fn) {
  HasHandlers.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  HasHandlers.$clinit = () =>{};
  HasHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_event_shared_HasHandlers = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HasHandlers;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');
 }
}
HasHandlers.$markImplementor(/**@type {Function}*/ (HasHandlers));
$Util.$setClassMetadataForInterface(HasHandlers, 'org.gwtproject.event.shared.HasHandlers');

exports = HasHandlers;

//# sourceMappingURL=HasHandlers.js.map
