goog.module('org.treblereel.j2cl.processors.common.resources.DataResource.MimeType$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class MimeType {
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  MimeType.$clinit = () =>{};
  MimeType.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_DataResource_MimeType = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_DataResource_MimeType;
 }
 
 /** @nodts */
 static $loadModules() {}
}
MimeType.$markImplementor(/**@type {Function}*/ (MimeType));
$Util.$setClassMetadataForInterface(MimeType, 'org.treblereel.j2cl.processors.common.resources.DataResource$MimeType');

exports = MimeType;

//# sourceMappingURL=DataResource$MimeType.js.map
