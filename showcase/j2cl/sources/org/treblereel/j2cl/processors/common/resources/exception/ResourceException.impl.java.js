goog.module('org.treblereel.j2cl.processors.common.resources.exception.ResourceException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ResourceException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ResourceException} */
 static $create__java_lang_String(/** ?string */ msg) {
  ResourceException.$clinit();
  let $instance = new ResourceException();
  $instance.$ctor__org_treblereel_j2cl_processors_common_resources_exception_ResourceException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_resources_exception_ResourceException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  ResourceException.$clinit = () =>{};
  ResourceException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourceException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ResourceException, 'org.treblereel.j2cl.processors.common.resources.exception.ResourceException');

exports = ResourceException;

//# sourceMappingURL=ResourceException.js.map
