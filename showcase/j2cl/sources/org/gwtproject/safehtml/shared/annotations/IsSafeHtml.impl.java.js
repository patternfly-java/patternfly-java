goog.module('org.gwtproject.safehtml.shared.annotations.IsSafeHtml$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class IsSafeHtml {
 /** @nodts */
 static $clinit() {
  IsSafeHtml.$clinit = () =>{};
  IsSafeHtml.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeHtml = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_IsSafeHtml;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IsSafeHtml.$markImplementor(/**@type {Function}*/ (IsSafeHtml));
$Util.$setClassMetadataForInterface(IsSafeHtml, 'org.gwtproject.safehtml.shared.annotations.IsSafeHtml');

exports = IsSafeHtml;

//# sourceMappingURL=IsSafeHtml.js.map
