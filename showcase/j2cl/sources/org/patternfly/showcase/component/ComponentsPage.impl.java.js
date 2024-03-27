goog.module('org.patternfly.showcase.component.ComponentsPage$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');
const OverviewPage = goog.require('org.patternfly.showcase.OverviewPage$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let CardBody = goog.forwardDeclare('org.patternfly.component.card.CardBody$impl');
let CardTitle = goog.forwardDeclare('org.patternfly.component.card.CardTitle$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {OverviewPage<Object>}
 * @implements {Page}
 */
class ComponentsPage extends OverviewPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ComponentsPage} */
 static $create__() {
  ComponentsPage.$clinit();
  let $instance = new ComponentsPage();
  $instance.$ctor__org_patternfly_showcase_component_ComponentsPage__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ComponentsPage__void() {
  this.$ctor__org_patternfly_showcase_OverviewPage__java_lang_String__void('All components');
 }
 /** @override @nodts @return {Gallery} */
 m_createGallery__org_patternfly_layout_gallery_Gallery() {
  return /**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_layout_gallery_Gallery(Data.m_components__java_util_List(), j_u_function_Function.$adapt((component) =>{
   let component_1 = /**@type {Object}*/ ($Casts.$to(component, $Overlay));
   return /**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(component_1.route).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-section-gallery-item'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.m_createCard__org_patternfly_showcase_component_Component__org_patternfly_component_card_Card(component_1)), HTMLContainerBuilder))), GalleryItem));
  }));
 }
 /** @nodts @return {Card} */
 m_createCard__org_patternfly_showcase_component_Component__org_patternfly_component_card_Card(/** Object */ component) {
  return /**@type {Card}*/ ($Casts.$to(Card.m_card__org_patternfly_component_card_Card().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('selectable-raised')], j_l_String))), Card)).m_addTitle__org_patternfly_component_card_CardTitle__org_patternfly_component_card_Card(CardTitle.m_cardTitle__java_lang_String__org_patternfly_component_card_CardTitle(component.title)).m_addBody__org_patternfly_component_card_CardBody__org_patternfly_component_card_Card(/**@type {CardBody}*/ ($Casts.$to(CardBody.m_cardBody__org_patternfly_component_card_CardBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder($Overlay.m_illustration__$devirt__org_patternfly_showcase_component_Component__java_lang_String(component)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('alt', component.title), HTMLElementBuilder))), CardBody)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_createCard__java_lang_Object__org_patternfly_component_card_Card(/** Object */ arg0) {
  return this.m_createCard__org_patternfly_showcase_component_Component__org_patternfly_component_card_Card(/**@type {Object}*/ ($Casts.$to(arg0, $Overlay)));
 }
 /** @nodts */
 static $clinit() {
  ComponentsPage.$clinit = () =>{};
  ComponentsPage.$loadModules();
  OverviewPage.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentsPage;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  CardBody = goog.module.get('org.patternfly.component.card.CardBody$impl');
  CardTitle = goog.module.get('org.patternfly.component.card.CardTitle$impl');
  Gallery = goog.module.get('org.patternfly.layout.gallery.Gallery$impl');
  GalleryItem = goog.module.get('org.patternfly.layout.gallery.GalleryItem$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(ComponentsPage);
$Util.$setClassMetadata(ComponentsPage, 'org.patternfly.showcase.component.ComponentsPage');

exports = ComponentsPage;

//# sourceMappingURL=ComponentsPage.js.map
