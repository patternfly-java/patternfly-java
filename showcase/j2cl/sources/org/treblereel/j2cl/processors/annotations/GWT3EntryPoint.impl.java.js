goog.module('org.treblereel.j2cl.processors.annotations.GWT3EntryPoint$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GWT3EntryPoint {
 /** @nodts */
 static $clinit() {
  GWT3EntryPoint.$clinit = () =>{};
  GWT3EntryPoint.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_GWT3EntryPoint = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_GWT3EntryPoint;
 }
 
 /** @nodts */
 static $loadModules() {}
}
GWT3EntryPoint.$markImplementor(/**@type {Function}*/ (GWT3EntryPoint));
$Util.$setClassMetadataForInterface(GWT3EntryPoint, 'org.treblereel.j2cl.processors.annotations.GWT3EntryPoint');

exports = GWT3EntryPoint;

//# sourceMappingURL=GWT3EntryPoint.js.map
