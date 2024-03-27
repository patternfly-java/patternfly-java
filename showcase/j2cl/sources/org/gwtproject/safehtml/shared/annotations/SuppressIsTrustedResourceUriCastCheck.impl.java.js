goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsTrustedResourceUriCastCheck {
 /** @nodts */
 static $clinit() {
  SuppressIsTrustedResourceUriCastCheck.$clinit = () =>{};
  SuppressIsTrustedResourceUriCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsTrustedResourceUriCastCheck;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SuppressIsTrustedResourceUriCastCheck.$markImplementor(/**@type {Function}*/ (SuppressIsTrustedResourceUriCastCheck));
$Util.$setClassMetadataForInterface(SuppressIsTrustedResourceUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck');

exports = SuppressIsTrustedResourceUriCastCheck;

//# sourceMappingURL=SuppressIsTrustedResourceUriCastCheck.js.map
