goog.module('org.jboss.elemento.router.BeforePlaceHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.router.BeforePlaceHandler.$LambdaAdaptor$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');

/**
 * @interface
 */
class BeforePlaceHandler {
 /** @abstract @nodts @return {boolean} */
 m_shouldGoTo__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(/** PlaceManager */ placeManager, /** Place */ place) {}
 /** @abstract @nodts */
 m_beforePlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__void(/** PlaceManager */ placeManager, /** Place */ place) {}
 /** @nodts @return {BeforePlaceHandler} */
 static $adapt(/** ?function(PlaceManager, Place):void */ fn) {
  BeforePlaceHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {boolean} */
 static m_shouldGoTo__$default__org_jboss_elemento_router_BeforePlaceHandler__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(/** !BeforePlaceHandler */ $thisArg, /** PlaceManager */ placeManager, /** Place */ place) {
  BeforePlaceHandler.$clinit();
  return true;
 }
 /** @nodts */
 static $clinit() {
  BeforePlaceHandler.$clinit = () =>{};
  BeforePlaceHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_BeforePlaceHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_BeforePlaceHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.router.BeforePlaceHandler.$LambdaAdaptor$impl');
 }
}
BeforePlaceHandler.$markImplementor(/**@type {Function}*/ (BeforePlaceHandler));
$Util.$setClassMetadataForInterface(BeforePlaceHandler, 'org.jboss.elemento.router.BeforePlaceHandler');

exports = BeforePlaceHandler;

//# sourceMappingURL=BeforePlaceHandler.js.map
