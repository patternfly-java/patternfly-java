goog.module('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');

/**
 * @implements {HasHandlers}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event<?>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event<?>):void} @nodts*/
  this.f_fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor__org_gwtproject_event_shared_HasHandlers_$JsFunction__void(/** ?function(Event<?>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_fireEvent__org_gwtproject_event_shared_Event__void(/** Event<?> */ arg0) {
  {
   let $function = this.f_fn__org_gwtproject_event_shared_HasHandlers_$LambdaAdaptor;
   $function(arg0);
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
HasHandlers.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HasHandlers$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HasHandlers$$LambdaAdaptor.js.map
