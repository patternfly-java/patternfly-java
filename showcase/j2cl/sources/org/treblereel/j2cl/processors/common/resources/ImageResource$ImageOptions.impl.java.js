goog.module('org.treblereel.j2cl.processors.common.resources.ImageResource.ImageOptions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ImageOptions {
 /** @abstract @nodts @return {number} */
 m_height__int() {}
 /** @abstract @nodts @return {number} */
 m_width__int() {}
 /** @nodts */
 static $clinit() {
  ImageOptions.$clinit = () =>{};
  ImageOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ImageResource_ImageOptions = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ImageResource_ImageOptions;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ImageOptions.$markImplementor(/**@type {Function}*/ (ImageOptions));
$Util.$setClassMetadataForInterface(ImageOptions, 'org.treblereel.j2cl.processors.common.resources.ImageResource$ImageOptions');

exports = ImageOptions;

//# sourceMappingURL=ImageResource$ImageOptions.js.map
