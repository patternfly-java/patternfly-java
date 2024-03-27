goog.module('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @implements {HandlerRegistration}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor__org_gwtproject_event_shared_HandlerRegistration_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_removeHandler__void() {
  {
   let $function = this.f_fn__org_gwtproject_event_shared_HandlerRegistration_$LambdaAdaptor;
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
HandlerRegistration.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.shared.HandlerRegistration$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HandlerRegistration$$LambdaAdaptor.js.map
