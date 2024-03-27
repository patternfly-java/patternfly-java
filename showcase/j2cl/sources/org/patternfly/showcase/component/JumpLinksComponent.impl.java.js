goog.module('org.patternfly.showcase.component.JumpLinksComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let JumpLinks = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinks$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let JumpLinksList = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksList$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class JumpLinksComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JumpLinksComponent} */
 static $create__() {
  JumpLinksComponent.$clinit();
  let $instance = new JumpLinksComponent();
  $instance.$ctor__org_patternfly_showcase_component_JumpLinksComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_JumpLinksComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'jump-links'), Component_$Overlay)));
  this.m_startExamples__org_jboss_elemento_HTMLContainerBuilder__void(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('These examples are static because they have no element to scroll spy on that makes sense. Check out the code of the '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://github.com/patternfly-java/showcase/blob/main/src/main/java/org/patternfly/showcase/SnippetPage.java', ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('showcase'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' to see how tu use scroll spying.'), HTMLContainerBuilder)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('jump-links-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(JumpLinks.m_jumpLinks__org_patternfly_component_jumplinks_JumpLinks().m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-basic-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-basic-1', 'Active section', '#item-1').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-basic-2', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-center', 'With centered list', Code.m_code__java_lang_String__java_lang_String('jump-links-center'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(JumpLinks.m_jumpLinks__org_patternfly_component_jumplinks_JumpLinks().m_center__org_patternfly_component_jumplinks_JumpLinks().m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-center-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-center-1', 'Active section', '#item-1').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-center-2', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-label', 'With label', Code.m_code__java_lang_String__java_lang_String('jump-links-label'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Jump to section').m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-1', 'Active section', '#item-1').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-2', 'Inactive section'))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Jump to section').m_center__org_patternfly_component_jumplinks_JumpLinks().m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-3', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-4', 'Active section', '#item-4').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-label-5', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-vertical', 'Vertical', Code.m_code__java_lang_String__java_lang_String('jump-links-vertical'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {JumpLinks}*/ ($Casts.$to(JumpLinks.m_jumpLinks__org_patternfly_component_jumplinks_JumpLinks().m_vertical__org_jboss_elemento_TypedBuilder(), JumpLinks)).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-1', 'Active section', '#item-1').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-2', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-vertical-label', 'Vertical with label', Code.m_code__java_lang_String__java_lang_String('jump-links-vertical-label'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {JumpLinks}*/ ($Casts.$to(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Jump to section').m_vertical__org_jboss_elemento_TypedBuilder(), JumpLinks)).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-label-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-label-1', 'Active section', '#item-1').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-vertical-label-2', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('jump-links-expandable', 'Expandable vertical with subsection', Code.m_code__java_lang_String__java_lang_String('jump-links-expandable'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {JumpLinks}*/ ($Casts.$to(JumpLinks.m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks('Jump to section').m_vertical__org_jboss_elemento_TypedBuilder(), JumpLinks)).m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/**@type {Breakpoints<ExpandableModifier>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier))).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-0', 'Inactive section')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-1', 'Section with active subsection').m_addList__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(JumpLinksList.m_jumpLinksList__org_patternfly_component_jumplinks_JumpLinksList().m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-10', 'Active subsection').m_active__org_patternfly_component_jumplinks_JumpLinksItem()).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-11', 'Inactive subsection')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-12', 'Inactive subsection')))).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-1', 'Active section', '#item-1')).m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(JumpLinksItem.m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem('jump-links-expandable-2', 'Inactive section'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(JumpLinks));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(JumpLinks), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(JumpLinksItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(JumpLinksList), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  JumpLinksComponent.$clinit = () =>{};
  JumpLinksComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinksComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  JumpLinks = goog.module.get('org.patternfly.component.jumplinks.JumpLinks$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  JumpLinksList = goog.module.get('org.patternfly.component.jumplinks.JumpLinksList$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(JumpLinksComponent, 'org.patternfly.showcase.component.JumpLinksComponent');

exports = JumpLinksComponent;

//# sourceMappingURL=JumpLinksComponent.js.map
