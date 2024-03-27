goog.module('org.gwtproject.safehtml.shared.SafeUri$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SafeUri {
 /** @abstract @nodts @return {?string} */
 m_asString__java_lang_String() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {boolean} */
 equals(/** * */ anObject) {}
 /** @nodts @return {SafeUri} */
 static $adapt(/** ?function():?string */ fn) {
  SafeUri.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  SafeUri.$clinit = () =>{};
  SafeUri.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_SafeUri = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeUri;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');
 }
}
SafeUri.$markImplementor(/**@type {Function}*/ (SafeUri));
$Util.$setClassMetadataForInterface(SafeUri, 'org.gwtproject.safehtml.shared.SafeUri');

exports = SafeUri;

//# sourceMappingURL=SafeUri.js.map
