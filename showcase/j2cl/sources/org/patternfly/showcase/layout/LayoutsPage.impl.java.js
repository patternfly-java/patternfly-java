goog.module('org.patternfly.showcase.layout.LayoutsPage$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');
const OverviewPage = goog.require('org.patternfly.showcase.OverviewPage$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let CardBody = goog.forwardDeclare('org.patternfly.component.card.CardBody$impl');
let CardTitle = goog.forwardDeclare('org.patternfly.component.card.CardTitle$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {OverviewPage<Object>}
 * @implements {Page}
 */
class LayoutsPage extends OverviewPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LayoutsPage} */
 static $create__() {
  LayoutsPage.$clinit();
  let $instance = new LayoutsPage();
  $instance.$ctor__org_patternfly_showcase_layout_LayoutsPage__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_LayoutsPage__void() {
  this.$ctor__org_patternfly_showcase_OverviewPage__java_lang_String__void('Layouts');
 }
 /** @override @nodts */
 m_landingPages__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<HTMLDivElement> */ div) {
  div.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<SpaceItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, SpaceItems.f_none__org_patternfly_layout_flex_SpaceItems))).m_alignItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<AlignItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, AlignItems.f_center__org_patternfly_layout_flex_AlignItems))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__3xl__org_patternfly_style_Size, 'About')), Flex)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading ws-title ws-h1'], j_l_String))), Flex)));
  div.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-p'], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('PatternFly\u2019s layouts are used to place components on a page. They create a fully responsive structure to keep components organized and aligned across screen sizes.'), HTMLContainerBuilder)));
  div.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-p'], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Think of layouts as the scaffolding within which your components will live. When laying out your page, consider the layout pattern that suits your content. Multiple layouts can be used within the same page to create versatile and effective UIs.'), HTMLContainerBuilder)));
 }
 /** @override @nodts @return {Gallery} */
 m_createGallery__org_patternfly_layout_gallery_Gallery() {
  return /**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_layout_gallery_Gallery(Data.m_layouts__java_util_List(), j_u_function_Function.$adapt((layout) =>{
   let layout_1 = /**@type {Object}*/ ($Casts.$to(layout, Layout_$Overlay));
   return /**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(layout_1.route).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-section-gallery-item'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(layout_1)), HTMLContainerBuilder))), GalleryItem));
  }));
 }
 /** @nodts @return {Card} */
 m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(/** Object */ layout) {
  return /**@type {Card}*/ ($Casts.$to(Card.m_card__org_patternfly_component_card_Card().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('selectable-raised')], j_l_String))), Card)).m_addTitle__org_patternfly_component_card_CardTitle__org_patternfly_component_card_Card(CardTitle.m_cardTitle__java_lang_String__org_patternfly_component_card_CardTitle(layout.title)).m_addBody__org_patternfly_component_card_CardBody__org_patternfly_component_card_Card(/**@type {CardBody}*/ ($Casts.$to(CardBody.m_cardBody__org_patternfly_component_card_CardBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(Layout_$Overlay.m_summary__$devirt__org_patternfly_showcase_layout_Layout__org_gwtproject_safehtml_shared_SafeHtml(layout)), HTMLContainerBuilder))), TextContent))), CardBody)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_createCard__java_lang_Object__org_patternfly_component_card_Card(/** Object */ arg0) {
  return this.m_createCard__org_patternfly_showcase_layout_Layout__org_patternfly_component_card_Card(/**@type {Object}*/ ($Casts.$to(arg0, Layout_$Overlay)));
 }
 /** @nodts */
 static $clinit() {
  LayoutsPage.$clinit = () =>{};
  LayoutsPage.$loadModules();
  OverviewPage.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutsPage;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  CardBody = goog.module.get('org.patternfly.component.card.CardBody$impl');
  CardTitle = goog.module.get('org.patternfly.component.card.CardTitle$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  Gallery = goog.module.get('org.patternfly.layout.gallery.Gallery$impl');
  GalleryItem = goog.module.get('org.patternfly.layout.gallery.GalleryItem$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(LayoutsPage);
$Util.$setClassMetadata(LayoutsPage, 'org.patternfly.showcase.layout.LayoutsPage');

exports = LayoutsPage;

//# sourceMappingURL=LayoutsPage.js.map
