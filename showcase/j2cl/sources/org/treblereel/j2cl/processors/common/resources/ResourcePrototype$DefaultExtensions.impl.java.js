goog.module('org.treblereel.j2cl.processors.common.resources.ResourcePrototype.DefaultExtensions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultExtensions {
 /** @abstract @nodts @return {Array<?string>} */
 m_value__arrayOf_java_lang_String() {}
 /** @nodts */
 static $clinit() {
  DefaultExtensions.$clinit = () =>{};
  DefaultExtensions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_DefaultExtensions = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_DefaultExtensions;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DefaultExtensions.$markImplementor(/**@type {Function}*/ (DefaultExtensions));
$Util.$setClassMetadataForInterface(DefaultExtensions, 'org.treblereel.j2cl.processors.common.resources.ResourcePrototype$DefaultExtensions');

exports = DefaultExtensions;

//# sourceMappingURL=ResourcePrototype$DefaultExtensions.js.map
