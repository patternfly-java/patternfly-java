goog.module('org.treblereel.j2cl.processors.common.resources.impl.ImageResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ImageResource = goog.require('org.treblereel.j2cl.processors.common.resources.ImageResource$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Image_$Overlay = goog.forwardDeclare('elemental2.dom.Image.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ImageResource}
 */
class ImageResourcePrototype extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  /**@type {?string} @nodts*/
  this.f_src__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  /**@type {number} @nodts*/
  this.f_width__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = 0;
  /**@type {number} @nodts*/
  this.f_height__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = 0;
 }
 /** @nodts @return {!ImageResourcePrototype} */
 static $create__java_lang_String__java_lang_String__int__int(/** ?string */ name, /** ?string */ src, /** number */ width, /** number */ height) {
  ImageResourcePrototype.$clinit();
  let $instance = new ImageResourcePrototype();
  $instance.$ctor__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype__java_lang_String__java_lang_String__int__int__void(name, src, width, height);
  return $instance;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype__java_lang_String__java_lang_String__int__int__void(/** ?string */ name, /** ?string */ src, /** number */ width, /** number */ height) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = name;
  this.f_height__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = height;
  this.f_width__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = width;
  this.f_src__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_ = src;
 }
 /** @override @nodts @return {number} */
 m_getWidth__int() {
  return this.f_width__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
 }
 /** @override @nodts @return {number} */
 m_getHeight__int() {
  return this.f_height__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
 }
 /** @override @nodts @return {Image} */
 m_getImage__elemental2_dom_Image() {
  let image = /**@type {Image}*/ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement('img'), Image_$Overlay));
  image.src = this.f_src__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  image.name = this.f_name__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  image.width = this.f_width__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  image.height = this.f_height__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
  return image;
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return this.f_name__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
 }
 /** @override @nodts @return {?string} */
 m_getSrc__java_lang_String() {
  return this.f_src__org_treblereel_j2cl_processors_common_resources_impl_ImageResourcePrototype_;
 }
 /** @nodts */
 static $clinit() {
  ImageResourcePrototype.$clinit = () =>{};
  ImageResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageResourcePrototype;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Image_$Overlay = goog.module.get('elemental2.dom.Image.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ImageResource.$markImplementor(ImageResourcePrototype);
$Util.$setClassMetadata(ImageResourcePrototype, 'org.treblereel.j2cl.processors.common.resources.impl.ImageResourcePrototype');

exports = ImageResourcePrototype;

//# sourceMappingURL=ImageResourcePrototype.js.map
