goog.module('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SafeHtmlTemplates {
 /** @nodts */
 static $clinit() {
  SafeHtmlTemplates.$clinit = () =>{};
  SafeHtmlTemplates.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SafeHtmlTemplates.$markImplementor(/**@type {Function}*/ (SafeHtmlTemplates));
$Util.$setClassMetadataForInterface(SafeHtmlTemplates, 'org.gwtproject.safehtml.client.SafeHtmlTemplates');

exports = SafeHtmlTemplates;

//# sourceMappingURL=SafeHtmlTemplates.js.map
