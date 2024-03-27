goog.module('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ObserverCallback = goog.require('org.jboss.elemento.ObserverCallback$impl');

/**
 * @implements {ObserverCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(MutationRecord):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MutationRecord):void} @nodts*/
  this.f_fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_ObserverCallback_$LambdaAdaptor__org_jboss_elemento_ObserverCallback_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ObserverCallback_$LambdaAdaptor__org_jboss_elemento_ObserverCallback_$JsFunction__void(/** ?function(MutationRecord):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onObserved__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  {
   let $function = this.f_fn__org_jboss_elemento_ObserverCallback_$LambdaAdaptor;
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
ObserverCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.ObserverCallback$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ObserverCallback$$LambdaAdaptor.js.map
