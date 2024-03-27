goog.module('org.jboss.elemento.router.AfterPlaceHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AfterPlaceHandler = goog.require('org.jboss.elemento.router.AfterPlaceHandler$impl');

let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');

/**
 * @implements {AfterPlaceHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(PlaceManager, Place, Page):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(PlaceManager, Place, Page):void} @nodts*/
  this.f_fn__org_jboss_elemento_router_AfterPlaceHandler_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_router_AfterPlaceHandler_$LambdaAdaptor__org_jboss_elemento_router_AfterPlaceHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_AfterPlaceHandler_$LambdaAdaptor__org_jboss_elemento_router_AfterPlaceHandler_$JsFunction__void(/** ?function(PlaceManager, Place, Page):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_router_AfterPlaceHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_afterPlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page__void(/** PlaceManager */ arg0, /** Place */ arg1, /** Page */ arg2) {
  {
   let $function = this.f_fn__org_jboss_elemento_router_AfterPlaceHandler_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
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
AfterPlaceHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.router.AfterPlaceHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=AfterPlaceHandler$$LambdaAdaptor.js.map
