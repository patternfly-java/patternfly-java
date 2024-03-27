goog.module('org.jboss.elemento.router.Routes$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.router.Routes.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Routes {
 /** @abstract @nodts @return {Map<Place, Supplier<Page>>} */
 m_places__java_util_Map() {}
 /** @nodts @return {Routes} */
 static $adapt(/** ?function():Map<Place, Supplier<Page>> */ fn) {
  Routes.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Routes.$clinit = () =>{};
  Routes.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_Routes = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_Routes;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.router.Routes.$LambdaAdaptor$impl');
 }
}
Routes.$markImplementor(/**@type {Function}*/ (Routes));
$Util.$setClassMetadataForInterface(Routes, 'org.jboss.elemento.router.Routes');

exports = Routes;

//# sourceMappingURL=Routes.js.map
