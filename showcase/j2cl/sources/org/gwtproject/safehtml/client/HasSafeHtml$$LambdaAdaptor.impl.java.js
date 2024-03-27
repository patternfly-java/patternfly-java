goog.module('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {HasSafeHtml}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(SafeHtml):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SafeHtml):void} @nodts*/
  this.f_fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_client_HasSafeHtml_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_client_HasSafeHtml_$JsFunction__void(/** ?function(SafeHtml):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__void(/** SafeHtml */ arg0) {
  {
   let $function = this.f_fn__org_gwtproject_safehtml_client_HasSafeHtml_$LambdaAdaptor;
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
HasSafeHtml.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.client.HasSafeHtml$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HasSafeHtml$$LambdaAdaptor.js.map
