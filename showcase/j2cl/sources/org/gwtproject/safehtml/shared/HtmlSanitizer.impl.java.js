goog.module('org.gwtproject.safehtml.shared.HtmlSanitizer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.HtmlSanitizer.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 */
class HtmlSanitizer {
 /** @abstract @nodts @return {SafeHtml} */
 m_sanitize__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ html) {}
 /** @nodts @return {HtmlSanitizer} */
 static $adapt(/** ?function(?string):SafeHtml */ fn) {
  HtmlSanitizer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  HtmlSanitizer.$clinit = () =>{};
  HtmlSanitizer.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_HtmlSanitizer = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_HtmlSanitizer;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.HtmlSanitizer.$LambdaAdaptor$impl');
 }
}
HtmlSanitizer.$markImplementor(/**@type {Function}*/ (HtmlSanitizer));
$Util.$setClassMetadataForInterface(HtmlSanitizer, 'org.gwtproject.safehtml.shared.HtmlSanitizer');

exports = HtmlSanitizer;

//# sourceMappingURL=HtmlSanitizer.js.map
