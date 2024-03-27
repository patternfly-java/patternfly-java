goog.module('org.gwtproject.safehtml.shared.annotations.IsSafeUri$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsSafeUri {
 /** @nodts */
 static $clinit() {
  IsSafeUri.$clinit = () =>{};
  IsSafeUri.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeUri = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeUri;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IsSafeUri.$markImplementor(/**@type {Function}*/ (IsSafeUri));
$Util.$setClassMetadataForInterface(IsSafeUri, 'org.gwtproject.safehtml.shared.annotations.IsSafeUri');

exports = IsSafeUri;

//# sourceMappingURL=IsSafeUri.js.map
