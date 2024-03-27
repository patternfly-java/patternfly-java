goog.module('org.treblereel.j2cl.processors.common.resources.ClientBundle.MavenArtifactSource$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class MavenArtifactSource {
 /** @abstract @nodts @return {?string} */
 m_repositoryId__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_repositoryType__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_repositoryUrl__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_group__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_artifact__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_version__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_path__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_copyTo__java_lang_String() {}
 /** @abstract @nodts @return {boolean} */
 m_unzip__boolean() {}
 /** @nodts */
 static $clinit() {
  MavenArtifactSource.$clinit = () =>{};
  MavenArtifactSource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle_MavenArtifactSource = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle_MavenArtifactSource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
MavenArtifactSource.$markImplementor(/**@type {Function}*/ (MavenArtifactSource));
$Util.$setClassMetadataForInterface(MavenArtifactSource, 'org.treblereel.j2cl.processors.common.resources.ClientBundle$MavenArtifactSource');

exports = MavenArtifactSource;

//# sourceMappingURL=ClientBundle$MavenArtifactSource.js.map
