goog.module('org.patternfly.layout.gallery.Gallery$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Gutter = goog.require('org.patternfly.style.Modifiers.Gutter$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Gallery>}
 * @implements {Gutter<HTMLElement, Gallery>}
 */
class Gallery extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Gallery} */
 static m_gallery__org_patternfly_layout_gallery_Gallery() {
  Gallery.$clinit();
  return Gallery.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Gallery} */
 static m_gallery__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_Gallery(/** HTMLContainerBuilder<E> */ builder) {
  Gallery.$clinit();
  return Gallery.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Gallery} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Gallery.$clinit();
  let $instance = new Gallery();
  $instance.$ctor__org_patternfly_layout_gallery_Gallery__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_gallery_Gallery__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @template T @return {Gallery} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_layout_gallery_Gallery(/** Iterable<T> */ items, /** j_u_function_Function<T, GalleryItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let galleryItem = /**@type {GalleryItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), GalleryItem));
    this.m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(galleryItem);
   }
  }
  return this;
 }
 /** @nodts @return {Gallery} */
 m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/** GalleryItem */ item) {
  return /**@type {Gallery}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Gallery));
 }
 /** @final @nodts @return {Gallery} */
 m_minWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/** Tuple<Breakpoint, ?string> */ first, /** Array<Tuple<Breakpoint, ?string>> */ rest) {
  this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('min', first);
  if (!$Equality.$same(rest, null)) {
   for (let $array = rest, $index = 0; $index < $array.length; $index++) {
    let tuple = $array[$index];
    {
     this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('min', tuple);
    }
   }
  }
  return this;
 }
 /** @final @nodts @return {Gallery} */
 m_maxWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/** Tuple<Breakpoint, ?string> */ first, /** Array<Tuple<Breakpoint, ?string>> */ rest) {
  this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('max', first);
  if (!$Equality.$same(rest, null)) {
   for (let $array = rest, $index = 0; $index < $array.length; $index++) {
    let tuple = $array[$index];
    {
     this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('max', tuple);
    }
   }
  }
  return this;
 }
 /** @nodts @return {Gallery} */
 m_that__org_patternfly_layout_gallery_Gallery() {
  return this;
 }
 /** @nodts */
 m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery(/** ?string */ minMax, /** Tuple<Breakpoint, ?string> */ tuple) {
  let minMaxBreak = $Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? minMax : j_l_String.m_valueOf__java_lang_Object__java_lang_String(minMax) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_GridTemplateColumns__org_patternfly_style_Variables, minMaxBreak], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {?string}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, j_l_String)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Gallery} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_gallery_Gallery();
 }
 //Bridge method.
 /** @final @override @nodts @return {Gallery} */
 m_gutter__org_jboss_elemento_TypedBuilder() {
  return /**@type {Gallery}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Gallery));
 }
 //Bridge method.
 /** @final @override @nodts @return {Gallery} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Gallery}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Gallery));
 }
 //Default method forwarding stub.
 /** @nodts @return {Gallery} */
 m_gutter__org_patternfly_layout_gallery_Gallery() {
  return /**@type {Gallery}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Gallery));
 }
 //Default method forwarding stub.
 /** @nodts @return {Gallery} */
 m_gutter__boolean__org_patternfly_layout_gallery_Gallery(/** boolean */ arg0) {
  return /**@type {Gallery}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Gallery));
 }
 /** @nodts */
 static $clinit() {
  Gallery.$clinit = () =>{};
  Gallery.$loadModules();
  BaseLayout.$clinit();
  Gutter.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Gallery;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  GalleryItem = goog.module.get('org.patternfly.layout.gallery.GalleryItem$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Gutter.$markImplementor(Gallery);
$Util.$setClassMetadata(Gallery, 'org.patternfly.layout.gallery.Gallery');

exports = Gallery;

//# sourceMappingURL=Gallery.js.map
