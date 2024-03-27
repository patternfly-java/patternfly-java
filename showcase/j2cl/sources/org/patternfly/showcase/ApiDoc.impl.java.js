goog.module('org.patternfly.showcase.ApiDoc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ApiDoc {
 /** @nodts */
 static $clinit() {
  ApiDoc.$clinit = () =>{};
  ApiDoc.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_showcase_ApiDoc = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_showcase_ApiDoc;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc = 'https://patternfly-java.github.io/apidocs/';
/**@const {string} @nodts*/
ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc = 'api-doc';
ApiDoc.$markImplementor(/**@type {Function}*/ (ApiDoc));
$Util.$setClassMetadataForInterface(ApiDoc, 'org.patternfly.showcase.ApiDoc');

exports = ApiDoc;

//# sourceMappingURL=ApiDoc.js.map
