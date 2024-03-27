goog.module('org.treblereel.j2cl.processors.common.resources.DataResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class DataResource {
 /** @abstract @nodts @return {?string} */
 m_asString__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  DataResource.$clinit = () =>{};
  DataResource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_DataResource = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_DataResource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DataResource.$markImplementor(/**@type {Function}*/ (DataResource));
$Util.$setClassMetadataForInterface(DataResource, 'org.treblereel.j2cl.processors.common.resources.DataResource');

exports = DataResource;

//# sourceMappingURL=DataResource.js.map
