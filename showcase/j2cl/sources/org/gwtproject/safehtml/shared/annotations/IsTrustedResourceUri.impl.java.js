goog.module('org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsTrustedResourceUri {
 /** @nodts */
 static $clinit() {
  IsTrustedResourceUri.$clinit = () =>{};
  IsTrustedResourceUri.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsTrustedResourceUri;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IsTrustedResourceUri.$markImplementor(/**@type {Function}*/ (IsTrustedResourceUri));
$Util.$setClassMetadataForInterface(IsTrustedResourceUri, 'org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri');

exports = IsTrustedResourceUri;

//# sourceMappingURL=IsTrustedResourceUri.js.map
