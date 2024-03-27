goog.module('org.treblereel.j2cl.processors.annotations.GWT3Export$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GWT3Export {
 /** @abstract @nodts @return {?string} */
 m_namespace__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_name__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  GWT3Export.$clinit = () =>{};
  GWT3Export.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_GWT3Export = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_GWT3Export;
 }
 
 /** @nodts */
 static $loadModules() {}
}
GWT3Export.$markImplementor(/**@type {Function}*/ (GWT3Export));
$Util.$setClassMetadataForInterface(GWT3Export, 'org.treblereel.j2cl.processors.annotations.GWT3Export');

exports = GWT3Export;

//# sourceMappingURL=GWT3Export.js.map
