goog.module('org.jboss.elemento.router.AfterPlaceHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.router.AfterPlaceHandler.$LambdaAdaptor$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');

/**
 * @interface
 */
class AfterPlaceHandler {
 /** @abstract @nodts */
 m_afterPlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page__void(/** PlaceManager */ placeManager, /** Place */ place, /** Page */ page) {}
 /** @nodts @return {AfterPlaceHandler} */
 static $adapt(/** ?function(PlaceManager, Place, Page):void */ fn) {
  AfterPlaceHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  AfterPlaceHandler.$clinit = () =>{};
  AfterPlaceHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_AfterPlaceHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_AfterPlaceHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.router.AfterPlaceHandler.$LambdaAdaptor$impl');
 }
}
AfterPlaceHandler.$markImplementor(/**@type {Function}*/ (AfterPlaceHandler));
$Util.$setClassMetadataForInterface(AfterPlaceHandler, 'org.jboss.elemento.router.AfterPlaceHandler');

exports = AfterPlaceHandler;

//# sourceMappingURL=AfterPlaceHandler.js.map
