goog.module('org.gwtproject.event.shared.SimpleEventBus.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus.Command.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Command {
 /** @abstract @nodts */
 m_execute__void() {}
 /** @nodts @return {Command} */
 static $adapt(/** ?function():void */ fn) {
  Command.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Command.$clinit = () =>{};
  Command.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_event_shared_SimpleEventBus_Command = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_SimpleEventBus_Command;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.SimpleEventBus.Command.$LambdaAdaptor$impl');
 }
}
Command.$markImplementor(/**@type {Function}*/ (Command));
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.event.shared.SimpleEventBus$Command');

exports = Command;

//# sourceMappingURL=SimpleEventBus$Command.js.map
