goog.module('org.jboss.elemento.router.Routes.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Routes = goog.require('org.jboss.elemento.router.Routes$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');

/**
 * @implements {Routes}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Map<Place, Supplier<Page>> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Map<Place, Supplier<Page>>} @nodts*/
  this.f_fn__org_jboss_elemento_router_Routes_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_Routes_$LambdaAdaptor__org_jboss_elemento_router_Routes_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Routes_$LambdaAdaptor__org_jboss_elemento_router_Routes_$JsFunction__void(/** ?function():Map<Place, Supplier<Page>> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_Routes_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Map<Place, Supplier<Page>>} */
 m_places__java_util_Map() {
  let /** ?function():Map<Place, Supplier<Page>> */ $function;
  return ($function = this.f_fn__org_jboss_elemento_router_Routes_$LambdaAdaptor, $function());
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
Routes.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.Routes$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Routes$$LambdaAdaptor.js.map
