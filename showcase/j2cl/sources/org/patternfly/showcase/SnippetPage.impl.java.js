goog.module('org.patternfly.showcase.SnippetPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.jboss.elemento.router.Page$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let JumpLinks = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinks$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let JumpLinksList = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksList$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let PageMainBody = goog.forwardDeclare('org.patternfly.component.page.PageMainBody$impl');
let PageMainGroup = goog.forwardDeclare('org.patternfly.component.page.PageMainGroup$impl');
let PageMainSection = goog.forwardDeclare('org.patternfly.component.page.PageMainSection$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let Placement = goog.forwardDeclare('org.patternfly.popper.Placement$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Ids = goog.forwardDeclare('org.patternfly.showcase.Ids$impl');
let LinkIcon = goog.forwardDeclare('org.patternfly.showcase.LinkIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Toc = goog.forwardDeclare('org.patternfly.showcase.SnippetPage.Toc$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class SnippetPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {JumpLinks} @nodts*/
  this.f_jumpLinks__org_patternfly_showcase_SnippetPage_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_;
  /**@type {Map<?string, Toc>} @nodts*/
  this.f_tocs__org_patternfly_showcase_SnippetPage_;
  /**@type {List<HTMLElement>} @nodts*/
  this.f_elements__org_patternfly_showcase_SnippetPage_;
  /**@type {boolean} @nodts*/
  this.f_tocReady__org_patternfly_showcase_SnippetPage_ = false;
  /**@type {HTMLContainerBuilder<HTMLTableSectionElement>} @nodts*/
  this.f_tbody__org_patternfly_showcase_SnippetPage_;
 }
 //Factory method corresponding to constructor 'SnippetPage(Component)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_component_Component(/** Object */ component) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(component);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Component)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/** Object */ component) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(component.title, Component_$Overlay.m_summary__$devirt__org_patternfly_showcase_component_Component__org_gwtproject_safehtml_shared_SafeHtml(component), Component_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_component_Component__java_lang_String(component), Component_$Overlay.m_designGuidelines__$devirt__org_patternfly_showcase_component_Component__java_lang_String(component));
 }
 //Factory method corresponding to constructor 'SnippetPage(Layout)'.
 /** @nodts @return {!SnippetPage} */
 static $create__org_patternfly_showcase_layout_Layout(/** Object */ layout) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_layout_Layout__void(layout);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(Layout)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_layout_Layout__void(/** Object */ layout) {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(layout.title, Layout_$Overlay.m_summary__$devirt__org_patternfly_showcase_layout_Layout__org_gwtproject_safehtml_shared_SafeHtml(layout), Layout_$Overlay.m_apiDoc__$devirt__org_patternfly_showcase_layout_Layout__java_lang_String(layout), Layout_$Overlay.m_designGuidelines__$devirt__org_patternfly_showcase_layout_Layout__java_lang_String(layout));
 }
 //Factory method corresponding to constructor 'SnippetPage(String, SafeHtml, String, String)'.
 /** @nodts @return {!SnippetPage} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(/** ?string */ title, /** SafeHtml */ summary, /** ?string */ apiDoc, /** ?string */ designGuidelines) {
  SnippetPage.$clinit();
  let $instance = new SnippetPage();
  $instance.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(title, summary, apiDoc, designGuidelines);
  return $instance;
 }
 //Initialization from constructor 'SnippetPage(String, SafeHtml, String, String)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String__void(/** ?string */ title, /** SafeHtml */ summary, /** ?string */ apiDoc, /** ?string */ designGuidelines) {
  this.$ctor__java_lang_Object__void();
  this.f_tocReady__org_patternfly_showcase_SnippetPage_ = false;
  this.f_tocs__org_patternfly_showcase_SnippetPage_ = /**@type {!LinkedHashMap<?string, Toc>}*/ (LinkedHashMap.$create__());
  this.f_elements__org_patternfly_showcase_SnippetPage_ = /**@type {List<HTMLElement>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(/**@type {HTMLDivElement}*/ ($Casts.$to(PageMainGroup.m_pageMainGroup__org_patternfly_component_page_PageMainGroup().m_addSection__org_patternfly_component_page_PageSection__org_patternfly_component_page_PageMainGroup(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_background__org_patternfly_style_Brightness__org_patternfly_component_page_PageMainSection(Brightness.f_light__org_patternfly_style_Brightness).m_limitWidth__org_patternfly_component_page_PageSectionBuilder(), PageMainSection)).m_addBody__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/**@type {PageMainBody}*/ ($Casts.$to(/**@type {PageMainBody}*/ ($Casts.$to(/**@type {PageMainBody}*/ ($Casts.$to(PageMainBody.m_pageMainBody__org_patternfly_component_page_PageMainBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatRight__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('design-guidelines'), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_href__java_lang_String__org_patternfly_component_button_Button(designGuidelines).m_target__java_lang_String__org_patternfly_component_button_Button('patternfly').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_swatchbook__org_patternfly_icon_PredefinedIcon()), Button))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('design-guidelines'), 'Design guidelines').m_placement__org_patternfly_popper_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_auto__org_patternfly_popper_Placement)), HTMLContainerBuilder))), PageMainBody)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatRight__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('api-doc'), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_href__java_lang_String__org_patternfly_component_button_Button(apiDoc).m_target__java_lang_String__org_patternfly_component_button_Button(ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(patternfly.m_catalog__org_patternfly_icon_PredefinedIcon()), Button))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('api-doc'), 'API documentation').m_placement__org_patternfly_popper_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_auto__org_patternfly_popper_Placement)), HTMLContainerBuilder))), PageMainBody)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_alignItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<AlignItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, AlignItems.f_center__org_patternfly_layout_flex_AlignItems))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, title)), Flex))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(summary), HTMLContainerBuilder))), TextContent))), PageMainBody))), PageMainSection))).m_addSection__org_patternfly_component_page_PageSection__org_patternfly_component_page_PageMainGroup(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('light-100')], j_l_String))), PageMainSection)).m_fill__org_jboss_elemento_TypedBuilder(), PageMainSection)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('h-100')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('display-flex'), 'ws-mdx-child-template'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_jumpLinks__org_patternfly_showcase_SnippetPage_ = /**@type {JumpLinks}*/ ($Casts.$to(/**@type {JumpLinks}*/ ($Casts.$to(/**@type {JumpLinks}*/ ($Casts.$to(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Table of contents').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-toc'], j_l_String))), JumpLinks)).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('top', '0'), JumpLinks)).m_vertical__org_jboss_elemento_TypedBuilder(), JumpLinks)).m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_jumplinks_JumpLinks(By.m_id__java_lang_String__org_jboss_elemento_By(Ids.f_MAIN_ID__org_patternfly_showcase_Ids)).m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/**@type {Breakpoints<ExpandableModifier>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier, Breakpoint.f__2xl__org_patternfly_style_Breakpoint, ExpandableModifier.f_nonExpandable__org_patternfly_style_ExpandableModifier))).m_ariaLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Table of contents')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-mdx-content'], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_contentContainer__org_patternfly_showcase_SnippetPage_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-mdx-content-content'], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), PageMainSection))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))));
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  if (!this.f_tocReady__org_patternfly_showcase_SnippetPage_) {
   for (let $iterator = this.f_tocs__org_patternfly_showcase_SnippetPage_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let toc = /**@type {Toc}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Toc));
    {
     this.f_jumpLinks__org_patternfly_showcase_SnippetPage_.m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/**@type {JumpLinksItem}*/ ($Casts.$to(/**@type {JumpLinksItem}*/ ($Casts.$to(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(toc.f_id__org_patternfly_showcase_SnippetPage_Toc, toc.f_text__org_patternfly_showcase_SnippetPage_Toc, '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toc.f_id__org_patternfly_showcase_SnippetPage_Toc)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-toc-item'], j_l_String))), JumpLinksItem)).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((jli) =>{
      let jli_1 = /**@type {JumpLinksItem}*/ ($Casts.$to(jli, JumpLinksItem));
      if (!toc.f_children__org_patternfly_showcase_SnippetPage_Toc.isEmpty()) {
       jli_1.m_addList__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/**@type {JumpLinksList}*/ ($Casts.$to(JumpLinksList.m_jumpLinksList__org_patternfly_component_jumplinks_JumpLinksList().m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((jll) =>{
        let jll_1 = /**@type {JumpLinksList}*/ ($Casts.$to(jll, JumpLinksList));
        for (let $iterator_1 = toc.f_children__org_patternfly_showcase_SnippetPage_Toc.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
         let child = /**@type {Toc}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Toc));
         {
          jll_1.m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/**@type {JumpLinksItem}*/ ($Casts.$to(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(child.f_id__org_patternfly_showcase_SnippetPage_Toc, child.f_text__org_patternfly_showcase_SnippetPage_Toc, '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(child.f_id__org_patternfly_showcase_SnippetPage_Toc)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-toc-item'], j_l_String))), JumpLinksItem)));
         }
        }
       })), JumpLinksList)));
      }
     })), JumpLinksItem)));
    }
   }
   this.f_tocReady__org_patternfly_showcase_SnippetPage_ = true;
  }
  return this.f_elements__org_patternfly_showcase_SnippetPage_;
 }
 /** @nodts */
 m_startExamples__void() {
  this.m_addHeader__java_lang_String__java_lang_String__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples');
 }
 /** @nodts */
 m_startExamples__java_lang_String__void(/** ?string */ description) {
  this.m_addHeader__java_lang_String__java_lang_String__java_lang_String__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples', description);
 }
 /** @nodts */
 m_startExamples__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<HTMLParagraphElement> */ description) {
  this.m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, 'Examples', description);
 }
 /** @nodts */
 m_addSnippet__org_patternfly_showcase_Snippet__void(/** Snippet */ snippet) {
  this.m_addSnippet__java_lang_String__org_patternfly_showcase_Snippet__void(Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc, snippet);
 }
 /** @nodts */
 m_addSnippet__java_lang_String__org_patternfly_showcase_Snippet__void(/** ?string */ headerId, /** Snippet */ snippet) {
  this.m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(headerId).m_add__java_lang_String__java_lang_String__void_$pp_org_patternfly_showcase(snippet.f_id__org_patternfly_showcase_Snippet, snippet.f_title__org_patternfly_showcase_Snippet);
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(snippet.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_startApiDocs__java_lang_Class__void(/** Class<?> */ component) {
  this.m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(Toc.f_API_DOCS__org_patternfly_showcase_SnippetPage_Toc, 'API documentation', /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('All classes for this component are in the package '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(this.m_packageDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(component), ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(this.m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(component)), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('.'), HTMLContainerBuilder)));
 }
 /** @nodts */
 m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(/** Class<?> */ clazz, /** Type */ type) {
  let fullName = clazz.m_getName__java_lang_String();
  let simpleName = clazz.m_getSimpleName__java_lang_String();
  let id = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(simpleName, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(Toc.f_API_DOCS__org_patternfly_showcase_SnippetPage_Toc).m_add__java_lang_String__java_lang_String__void_$pp_org_patternfly_showcase(id, simpleName);
  this.m_failSafeTableBody__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_showcase_SnippetPage().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tr__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_td__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((td) =>{
   let td_1 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(td, HTMLTableCellElement_$Overlay));
   td_1.tabIndex = - 1 | 0;
  })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_breakWord__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(LinkIcon.m_linkIcon__org_patternfly_showcase_LinkIcon()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(simpleName), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_td__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((td_2) =>{
   let td_3 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(td_2, HTMLTableCellElement_$Overlay));
   td_3.tabIndex = - 1 | 0;
  })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_breakWord__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Label.m_label__java_lang_String__org_patternfly_style_Color__org_patternfly_component_label_Label(type.f_name__org_patternfly_showcase_ApiDoc_Type, type.f_color__org_patternfly_showcase_ApiDoc_Type)), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_td__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((td_4) =>{
   let td_5 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(td_4, HTMLTableCellElement_$Overlay));
   td_5.tabIndex = - 1 | 0;
  })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_breakWord__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(this.m_apiDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(clazz), ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(fullName), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)));
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ title) {
  this.m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(id, title, /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ (null));
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ title, /** ?string */ description) {
  if ($Equality.$same(description, null)) {
   this.m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(id, title, /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ (null));
  } else {
   this.m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(id, title, /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder)));
  }
 }
 /** @nodts */
 m_addHeader__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(/** ?string */ id, /** ?string */ title, /** HTMLContainerBuilder<HTMLParagraphElement> */ description) {
  this.m_storeToc__java_lang_String__java_lang_String__void_$p_org_patternfly_showcase_SnippetPage(id, title);
  this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<SpaceItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, SpaceItems.f_none__org_patternfly_layout_flex_SpaceItems))).m_alignItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<AlignItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, AlignItems.f_center__org_patternfly_layout_flex_AlignItems))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(2, Size.f__2xl__org_patternfly_style_Size, title).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading', 'ws-title', 'ws-h2'], j_l_String))), Title)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), Title)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), Title)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(LinkIcon.m_linkIcon__org_patternfly_showcase_LinkIcon()), HTMLContainerBuilder))), Title))), Flex)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(description, null)) {
   this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(/**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(description.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-p'], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLParagraphElement_$Overlay)));
  }
 }
 /** @nodts @return {Toc} */
 m_failSafeToc__java_lang_String__org_patternfly_showcase_SnippetPage_Toc_$p_org_patternfly_showcase_SnippetPage(/** ?string */ id) {
  return /**@type {Toc}*/ ($Casts.$to(this.f_tocs__org_patternfly_showcase_SnippetPage_.getOrDefault(id, Toc.$create__java_lang_String__java_lang_String(id, 'Unknown')), Toc));
 }
 /** @nodts */
 m_storeToc__java_lang_String__java_lang_String__void_$p_org_patternfly_showcase_SnippetPage(/** ?string */ id, /** ?string */ text) {
  this.f_tocs__org_patternfly_showcase_SnippetPage_.putIfAbsent(id, Toc.$create__java_lang_String__java_lang_String(id, text));
 }
 /** @nodts @return {?string} */
 m_apiDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_replace__java_lang_String__char__char__java_lang_String(clazz.m_getName__java_lang_String(), 46 /* '.' */, 47 /* '/' */)) + '.html';
 }
 /** @nodts @return {?string} */
 m_packageDocLink__java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_replace__java_lang_String__char__char__java_lang_String(this.m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(clazz), 46 /* '.' */, 47 /* '/' */)) + '/package-summary.html';
 }
 /** @nodts @return {?string} */
 m_package___java_lang_Class__java_lang_String_$p_org_patternfly_showcase_SnippetPage(/** Class<?> */ clazz) {
  let name = clazz.m_getName__java_lang_String();
  return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 0, j_l_String.m_lastIndexOf__java_lang_String__int__int(name, 46 /* '.' */));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 m_failSafeTableBody__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_showcase_SnippetPage() {
  if ($Equality.$same(this.f_tbody__org_patternfly_showcase_SnippetPage_, null)) {
   this.f_contentContainer__org_patternfly_showcase_SnippetPage_.appendChild(/**@type {HTMLTableElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(Elements.m_table__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_compact__org_patternfly_style_Classes), Classes.m_util__java_lang_String__java_lang_String('mt-md'), Classes.m_util__java_lang_String__java_lang_String('mb-lg')], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'grid'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_thead__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_thead__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tr__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_th__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_th__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('width-30')], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'columnheader'), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((th) =>{
    let th_1 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(th, HTMLTableCellElement_$Overlay));
    th_1.scope = 'col';
   })), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Name'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_th__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_th__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('width-20')], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'columnheader'), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((th_2) =>{
    let th_3 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(th_2, HTMLTableCellElement_$Overlay));
    th_3.scope = 'col';
   })), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Type'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(Elements.m_th__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_th__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'columnheader'), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((th_4) =>{
    let th_5 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(th_4, HTMLTableCellElement_$Overlay));
    th_5.scope = 'col';
   })), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('API documentation'), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_tbody__org_patternfly_showcase_SnippetPage_ = /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_tbody__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tbody__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'rowgroup'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)));
  }
  return this.f_tbody__org_patternfly_showcase_SnippetPage_;
 }
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
  SnippetPage.$clinit = () =>{};
  SnippetPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SnippetPage;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLParagraphElement_$Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  JumpLinks = goog.module.get('org.patternfly.component.jumplinks.JumpLinks$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  JumpLinksList = goog.module.get('org.patternfly.component.jumplinks.JumpLinksList$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  PageMainBody = goog.module.get('org.patternfly.component.page.PageMainBody$impl');
  PageMainGroup = goog.module.get('org.patternfly.component.page.PageMainGroup$impl');
  PageMainSection = goog.module.get('org.patternfly.component.page.PageMainSection$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  Placement = goog.module.get('org.patternfly.popper.Placement$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  Ids = goog.module.get('org.patternfly.showcase.Ids$impl');
  LinkIcon = goog.module.get('org.patternfly.showcase.LinkIcon$impl');
  Toc = goog.module.get('org.patternfly.showcase.SnippetPage.Toc$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(SnippetPage);
$Util.$setClassMetadata(SnippetPage, 'org.patternfly.showcase.SnippetPage');

exports = SnippetPage;

//# sourceMappingURL=SnippetPage.js.map
