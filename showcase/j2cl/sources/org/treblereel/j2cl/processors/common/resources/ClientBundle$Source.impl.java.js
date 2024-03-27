goog.module('org.treblereel.j2cl.processors.common.resources.ClientBundle.Source$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Source {
 /** @abstract @nodts @return {Array<?string>} */
 m_value__arrayOf_java_lang_String() {}
 /** @nodts */
 static $clinit() {
  Source.$clinit = () =>{};
  Source.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle_Source = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle_Source;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Source.$markImplementor(/**@type {Function}*/ (Source));
$Util.$setClassMetadataForInterface(Source, 'org.treblereel.j2cl.processors.common.resources.ClientBundle$Source');

exports = Source;

//# sourceMappingURL=ClientBundle$Source.js.map
