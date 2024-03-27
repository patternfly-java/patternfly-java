goog.module('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');

/**
 * @implements {Attachable}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(MutationRecord):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(MutationRecord):void} @nodts*/
  this.f_fn__org_jboss_elemento_Attachable_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_Attachable_$LambdaAdaptor__org_jboss_elemento_Attachable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Attachable_$LambdaAdaptor__org_jboss_elemento_Attachable_$JsFunction__void(/** ?function(MutationRecord):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_Attachable_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  {
   let $function = this.f_fn__org_jboss_elemento_Attachable_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Attachable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.Attachable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Attachable$$LambdaAdaptor.js.map
