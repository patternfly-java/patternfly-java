goog.module('org.gwtproject.safehtml.client.HasSafeHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 */
class HasSafeHtml {
 /** @abstract @nodts */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__void(/** SafeHtml */ html) {}
 /** @nodts @return {HasSafeHtml} */
 static $adapt(/** ?function(SafeHtml):void */ fn) {
  HasSafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  HasSafeHtml.$clinit = () =>{};
  HasSafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_safehtml_client_HasSafeHtml = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_HasSafeHtml;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.client.HasSafeHtml.$LambdaAdaptor$impl');
 }
}
HasSafeHtml.$markImplementor(/**@type {Function}*/ (HasSafeHtml));
$Util.$setClassMetadataForInterface(HasSafeHtml, 'org.gwtproject.safehtml.client.HasSafeHtml');

exports = HasSafeHtml;

//# sourceMappingURL=HasSafeHtml.js.map
