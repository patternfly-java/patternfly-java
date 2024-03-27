goog.module('org.jboss.elemento.router.BeforePlaceHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BeforePlaceHandler = goog.require('org.jboss.elemento.router.BeforePlaceHandler$impl');

let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');

/**
 * @implements {BeforePlaceHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(PlaceManager, Place):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(PlaceManager, Place):void} @nodts*/
  this.f_fn__org_jboss_elemento_router_BeforePlaceHandler_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_BeforePlaceHandler_$LambdaAdaptor__org_jboss_elemento_router_BeforePlaceHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_BeforePlaceHandler_$LambdaAdaptor__org_jboss_elemento_router_BeforePlaceHandler_$JsFunction__void(/** ?function(PlaceManager, Place):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_BeforePlaceHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_beforePlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__void(/** PlaceManager */ arg0, /** Place */ arg1) {
  {
   let $function = this.f_fn__org_jboss_elemento_router_BeforePlaceHandler_$LambdaAdaptor;
   $function(arg0, arg1);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_shouldGoTo__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(/** PlaceManager */ arg0, /** Place */ arg1) {
  return BeforePlaceHandler.m_shouldGoTo__$default__org_jboss_elemento_router_BeforePlaceHandler__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(this, arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BeforePlaceHandler.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BeforePlaceHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.BeforePlaceHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=BeforePlaceHandler$$LambdaAdaptor.js.map
