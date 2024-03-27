goog.module('org.gwtproject.safehtml.shared.annotations.GwtIncompatible$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GwtIncompatible {
 /** @nodts */
 static $clinit() {
  GwtIncompatible.$clinit = () =>{};
  GwtIncompatible.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_safehtml_shared_annotations_GwtIncompatible = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_annotations_GwtIncompatible;
 }
 
 /** @nodts */
 static $loadModules() {}
}
GwtIncompatible.$markImplementor(/**@type {Function}*/ (GwtIncompatible));
$Util.$setClassMetadataForInterface(GwtIncompatible, 'org.gwtproject.safehtml.shared.annotations.GwtIncompatible');

exports = GwtIncompatible;

//# sourceMappingURL=GwtIncompatible.js.map
