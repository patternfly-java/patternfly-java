goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeHtmlCastCheck {
 /** @nodts */
 static $clinit() {
  SuppressIsSafeHtmlCastCheck.$clinit = () =>{};
  SuppressIsSafeHtmlCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeHtmlCastCheck;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SuppressIsSafeHtmlCastCheck.$markImplementor(/**@type {Function}*/ (SuppressIsSafeHtmlCastCheck));
$Util.$setClassMetadataForInterface(SuppressIsSafeHtmlCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeHtmlCastCheck');

exports = SuppressIsSafeHtmlCastCheck;

//# sourceMappingURL=SuppressIsSafeHtmlCastCheck.js.map
