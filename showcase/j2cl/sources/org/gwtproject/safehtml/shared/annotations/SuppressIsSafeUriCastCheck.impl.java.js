goog.module('org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressIsSafeUriCastCheck {
 /** @nodts */
 static $clinit() {
  SuppressIsSafeUriCastCheck.$clinit = () =>{};
  SuppressIsSafeUriCastCheck.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_SuppressIsSafeUriCastCheck;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SuppressIsSafeUriCastCheck.$markImplementor(/**@type {Function}*/ (SuppressIsSafeUriCastCheck));
$Util.$setClassMetadataForInterface(SuppressIsSafeUriCastCheck, 'org.gwtproject.safehtml.shared.annotations.SuppressIsSafeUriCastCheck');

exports = SuppressIsSafeUriCastCheck;

//# sourceMappingURL=SuppressIsSafeUriCastCheck.js.map
