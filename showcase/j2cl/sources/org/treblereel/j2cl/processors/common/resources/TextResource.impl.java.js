goog.module('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class TextResource {
 /** @abstract @nodts @return {?string} */
 m_getText__java_lang_String() {}
 /** @abstract @nodts */
 m_insureInjectedAsScript__void() {}
 /** @abstract @nodts */
 m_insureInjectedAsStyle__void() {}
 /** @nodts */
 static $clinit() {
  TextResource.$clinit = () =>{};
  TextResource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_TextResource = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_TextResource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
TextResource.$markImplementor(/**@type {Function}*/ (TextResource));
$Util.$setClassMetadataForInterface(TextResource, 'org.treblereel.j2cl.processors.common.resources.TextResource');

exports = TextResource;

//# sourceMappingURL=TextResource.js.map
