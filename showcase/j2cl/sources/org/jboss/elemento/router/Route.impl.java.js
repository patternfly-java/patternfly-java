goog.module('org.jboss.elemento.router.Route$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Route {
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_title__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_selector__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  Route.$clinit = () =>{};
  Route.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_router_Route = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_Route;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Route.$markImplementor(/**@type {Function}*/ (Route));
$Util.$setClassMetadataForInterface(Route, 'org.jboss.elemento.router.Route');

exports = Route;

//# sourceMappingURL=Route.js.map
