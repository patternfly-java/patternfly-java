goog.module('org.gwtproject.safehtml.shared.SafeHtml$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Serializable}
 */
class SafeHtml {
 /** @abstract @nodts @return {?string} */
 m_asString__java_lang_String() {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {boolean} */
 equals(/** * */ anObject) {}
 /** @nodts @return {SafeHtml} */
 static $adapt(/** ?function():?string */ fn) {
  SafeHtml.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  SafeHtml.$clinit = () =>{};
  SafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Serializable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_SafeHtml = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_SafeHtml;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');
 }
}
SafeHtml.$markImplementor(/**@type {Function}*/ (SafeHtml));
$Util.$setClassMetadataForInterface(SafeHtml, 'org.gwtproject.safehtml.shared.SafeHtml');

exports = SafeHtml;

//# sourceMappingURL=SafeHtml.js.map
