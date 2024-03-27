goog.module('org.gwtproject.safehtml.client.SafeHtmlTemplates.Template$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Template {
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates_Template = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates_Template;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Template.$markImplementor(/**@type {Function}*/ (Template));
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.safehtml.client.SafeHtmlTemplates$Template');

exports = Template;

//# sourceMappingURL=SafeHtmlTemplates$Template.js.map
