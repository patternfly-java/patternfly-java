goog.module('org.gwtproject.event.shared.SimpleEventBus.Command.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.event.shared.SimpleEventBus.Command$impl');

/**
 * @implements {Command}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor__org_gwtproject_event_shared_SimpleEventBus_Command_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor__org_gwtproject_event_shared_SimpleEventBus_Command_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_execute__void() {
  {
   let $function = this.f_fn__org_gwtproject_event_shared_SimpleEventBus_Command_$LambdaAdaptor;
   $function();
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Command.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.SimpleEventBus$Command$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=SimpleEventBus$Command$$LambdaAdaptor.js.map
