goog.module('org.patternfly.showcase.OverviewPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let PageMainBody = goog.forwardDeclare('org.patternfly.component.page.PageMainBody$impl');
let PageMainGroup = goog.forwardDeclare('org.patternfly.component.page.PageMainGroup$impl');
let PageMainSection = goog.forwardDeclare('org.patternfly.component.page.PageMainSection$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Toolbar = goog.forwardDeclare('org.patternfly.component.toolbar.Toolbar$impl');
let ToolbarContent = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarContent$impl');
let ToolbarItem = goog.forwardDeclare('org.patternfly.component.toolbar.ToolbarItem$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @implements {Page}
 */
class OverviewPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_showcase_OverviewPage_;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_OverviewPage__java_lang_String__void(/** ?string */ title) {
  this.$ctor__java_lang_Object__void();
  this.f_title__org_patternfly_showcase_OverviewPage_ = title;
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  return /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {PageMainGroup}*/ ($Casts.$to(/**@type {PageMainGroup}*/ ($Casts.$to(PageMainGroup.m_pageMainGroup__org_patternfly_component_page_PageMainGroup().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_limitWidth__org_patternfly_component_page_PageSectionBuilder(), PageMainSection)).m_background__org_patternfly_style_Brightness__org_patternfly_component_page_PageMainSection(Brightness.f_light__org_patternfly_style_Brightness).m_add__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/**@type {PageMainBody}*/ ($Casts.$to(PageMainBody.m_pageMainBody__org_patternfly_component_page_PageMainBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_alignItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<AlignItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, AlignItems.f_center__org_patternfly_layout_flex_AlignItems))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, this.f_title__org_patternfly_showcase_OverviewPage_)), Flex))), TextContent))), PageMainBody))), PageMainSection))), PageMainGroup)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_fill__org_jboss_elemento_TypedBuilder(), PageMainSection)).m_background__org_patternfly_style_Brightness__org_patternfly_component_page_PageMainSection(Brightness.f_light100__org_patternfly_style_Brightness).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('display-flext'), 'ws-mdx-child-template'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-mdx-content'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['landing-pages'], j_l_String))), HTMLContainerBuilder)).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((arg0) =>{
   let arg0_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(arg0, HTMLContainerBuilder));
   this.m_landingPages__org_jboss_elemento_HTMLContainerBuilder__void(arg0_1);
  })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-section-gallery ws-section-gallery-full-width'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Toolbar}*/ ($Casts.$to(Toolbar.m_toolbar__org_patternfly_component_toolbar_Toolbar().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_sticky__org_patternfly_style_Classes)], j_l_String))), Toolbar)).m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(ToolbarContent.m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent().m_addItem__org_patternfly_component_toolbar_ToolbarItem__org_patternfly_component_toolbar_ToolbarContent(/**@type {ToolbarItem}*/ ($Casts.$to(ToolbarItem.m_toolbarItem__org_patternfly_component_toolbar_ToolbarItem().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Toolbar not yet implemented'), ToolbarItem)))).m_addContent__org_patternfly_component_toolbar_ToolbarContent__org_patternfly_component_toolbar_Toolbar(/**@type {ToolbarContent}*/ ($Casts.$to(ToolbarContent.m_toolbarContent__org_patternfly_component_toolbar_ToolbarContent().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hidden__org_patternfly_style_Classes)], j_l_String))), ToolbarContent)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.m_createGallery__org_patternfly_layout_gallery_Gallery()), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), PageMainSection))), PageMainGroup)).m_element__elemental2_dom_HTMLElement(), $Overlay))));
 }
 /** @nodts */
 m_landingPages__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<HTMLDivElement> */ div) {}
 /** @abstract @nodts @return {Gallery} */
 m_createGallery__org_patternfly_layout_gallery_Gallery() {}
 /** @abstract @nodts @return {Card} */
 m_createCard__java_lang_Object__org_patternfly_component_card_Card(/** T */ data) {}
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterator<HTMLElement>} */
 m_iterator__java_util_Iterator() {
  return Page.m_iterator__$default__org_jboss_elemento_router_Page__java_util_Iterator(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<HTMLElement>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<HTMLElement>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  OverviewPage.$clinit = () =>{};
  OverviewPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OverviewPage;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  PageMainBody = goog.module.get('org.patternfly.component.page.PageMainBody$impl');
  PageMainGroup = goog.module.get('org.patternfly.component.page.PageMainGroup$impl');
  PageMainSection = goog.module.get('org.patternfly.component.page.PageMainSection$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Toolbar = goog.module.get('org.patternfly.component.toolbar.Toolbar$impl');
  ToolbarContent = goog.module.get('org.patternfly.component.toolbar.ToolbarContent$impl');
  ToolbarItem = goog.module.get('org.patternfly.component.toolbar.ToolbarItem$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(OverviewPage);
$Util.$setClassMetadata(OverviewPage, 'org.patternfly.showcase.OverviewPage');

exports = OverviewPage;

//# sourceMappingURL=OverviewPage.js.map
