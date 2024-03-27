goog.module('org.patternfly.showcase.component.ExpandableSectionComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let ExpandableSection = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSection$impl');
let ExpandableSectionContent = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionContent$impl');
let ExpandableSectionToggle = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
let ExpandableSectionToggleText = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggleText$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ExpandableSectionComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ExpandableSectionComponent} */
 static $create__() {
  ExpandableSectionComponent.$clinit();
  let $instance = new ExpandableSectionComponent();
  $instance.$ctor__org_patternfly_showcase_component_ExpandableSectionComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ExpandableSectionComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'expandable-section'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('expandable-section-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more')).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-dynamic-text', 'Basic with dynamic toggle text', Code.m_code__java_lang_String__java_lang_String('expandable-section-dynamic-text'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less')).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-detached', 'Detached', Code.m_code__java_lang_String__java_lang_String('expandable-section-detached'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack)).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection('detached-content').m_detachedFrom__java_lang_String__org_patternfly_component_expandable_ExpandableSection('detached-toggle').m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection('detached-toggle').m_detachedFrom__java_lang_String__org_patternfly_component_expandable_ExpandableSection('detached-content').m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less').m_up__org_patternfly_component_expandable_ExpandableSectionToggle())), StackItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-disclosure', 'Disclosure variation', Code.m_code__java_lang_String__java_lang_String('expandable-section-disclosure'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_disclosure__org_patternfly_component_expandable_ExpandableSection().m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less')).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-indented', 'Indented', Code.m_code__java_lang_String__java_lang_String('expandable-section-indented'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_indented__org_patternfly_component_expandable_ExpandableSection().m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less')).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-custom-toggle', 'With custom toggle content', Code.m_code__java_lang_String__java_lang_String('expandable-section-custom-toggle'), Supplier.$adapt(() =>{
   let badge = Badge.m_badge__int__org_patternfly_component_badge_Badge(4).m_read__org_patternfly_component_badge_Badge();
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_expandable_ExpandableSection(ToggleHandler.$adapt((/** Event */ e, c, /** boolean */ expanded) =>{
    let c_1 = /**@type {ExpandableSection}*/ ($Casts.$to(c, ExpandableSection));
    badge.m_count__int__org_patternfly_component_badge_Badge(badge.m_count__int() + 1 | 0);
   })).m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__org_patternfly_component_expandable_ExpandableSectionToggle().m_addText__org_patternfly_component_expandable_ExpandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggle(/**@type {ExpandableSectionToggleText}*/ ($Casts.$to(ExpandableSectionToggleText.m_expandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggleText().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('You can also use icons '), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_checkCircle__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(' or badges '), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(badge), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(' !'), HTMLContainerBuilder))), HTMLContainerBuilder))), ExpandableSectionToggleText)))).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('This content is visible only when the component is expanded.'), ExpandableSectionContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable-section-truncate', 'Truncate', Code.m_code__java_lang_String__java_lang_String('expandable-section-truncate'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ExpandableSection.m_expandableSection__org_patternfly_component_expandable_ExpandableSection().m_truncate__int__org_patternfly_component_expandable_ExpandableSection(2).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(LoremIpsum.m_paragraphs__int__java_lang_String(20)), ExpandableSectionContent))).m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(ExpandableSection));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ExpandableSection), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ExpandableSectionContent), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ExpandableSectionToggle), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ExpandableSectionToggleText), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionComponent.$clinit = () =>{};
  ExpandableSectionComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  ExpandableSection = goog.module.get('org.patternfly.component.expandable.ExpandableSection$impl');
  ExpandableSectionContent = goog.module.get('org.patternfly.component.expandable.ExpandableSectionContent$impl');
  ExpandableSectionToggle = goog.module.get('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
  ExpandableSectionToggleText = goog.module.get('org.patternfly.component.expandable.ExpandableSectionToggleText$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  StackItem = goog.module.get('org.patternfly.layout.stack.StackItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ExpandableSectionComponent, 'org.patternfly.showcase.component.ExpandableSectionComponent');

exports = ExpandableSectionComponent;

//# sourceMappingURL=ExpandableSectionComponent.js.map
