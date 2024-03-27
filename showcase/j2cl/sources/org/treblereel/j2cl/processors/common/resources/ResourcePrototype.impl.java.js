goog.module('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.ResourcePrototype.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ResourcePrototype {
 /** @abstract @nodts @return {?string} */
 m_getName__java_lang_String() {}
 /** @nodts @return {ResourcePrototype} */
 static $adapt(/** ?function():?string */ fn) {
  ResourcePrototype.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  ResourcePrototype.$clinit = () =>{};
  ResourcePrototype.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ResourcePrototype = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ResourcePrototype;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.j2cl.processors.common.resources.ResourcePrototype.$LambdaAdaptor$impl');
 }
}
ResourcePrototype.$markImplementor(/**@type {Function}*/ (ResourcePrototype));
$Util.$setClassMetadataForInterface(ResourcePrototype, 'org.treblereel.j2cl.processors.common.resources.ResourcePrototype');

exports = ResourcePrototype;

//# sourceMappingURL=ResourcePrototype.js.map
