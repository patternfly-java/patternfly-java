goog.module('org.treblereel.j2cl.processors.common.resources.ImageResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class ImageResource {
 /** @abstract @nodts @return {number} */
 m_getHeight__int() {}
 /** @abstract @nodts @return {Image} */
 m_getImage__elemental2_dom_Image() {}
 /** @abstract @nodts @return {number} */
 m_getWidth__int() {}
 /** @abstract @nodts @return {?string} */
 m_getSrc__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  ImageResource.$clinit = () =>{};
  ImageResource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ImageResource = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ImageResource;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ImageResource.$markImplementor(/**@type {Function}*/ (ImageResource));
$Util.$setClassMetadataForInterface(ImageResource, 'org.treblereel.j2cl.processors.common.resources.ImageResource');

exports = ImageResource;

//# sourceMappingURL=ImageResource.js.map
