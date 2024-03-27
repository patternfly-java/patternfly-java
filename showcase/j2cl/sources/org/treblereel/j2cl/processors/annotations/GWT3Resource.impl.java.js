goog.module('org.treblereel.j2cl.processors.annotations.GWT3Resource$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GWT3Resource {
 /** @nodts */
 static $clinit() {
  GWT3Resource.$clinit = () =>{};
  GWT3Resource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_GWT3Resource = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_GWT3Resource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
GWT3Resource.$markImplementor(/**@type {Function}*/ (GWT3Resource));
$Util.$setClassMetadataForInterface(GWT3Resource, 'org.treblereel.j2cl.processors.annotations.GWT3Resource');

exports = GWT3Resource;

//# sourceMappingURL=GWT3Resource.js.map
