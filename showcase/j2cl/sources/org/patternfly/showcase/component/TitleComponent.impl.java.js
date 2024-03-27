goog.module('org.patternfly.showcase.component.TitleComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TitleComponent} */
 static $create__() {
  TitleComponent.$clinit();
  let $instance = new TitleComponent();
  $instance.$ctor__org_patternfly_showcase_component_TitleComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TitleComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'title'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('title-default-sizes', 'Default sizes', Code.m_code__java_lang_String__java_lang_String('title-default-sizes'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(1, 'h1 defaults to 2xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(2, 'h2 defaults to xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(3, 'h3 defaults to lg')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(4, 'h4 defaults to md')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(5, 'h5 defaults to md')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(6, 'h6 defaults to md')), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('title-custom-sizes', 'Custom sizes', Code.m_code__java_lang_String__java_lang_String('title-custom-sizes'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, 'h1 as 4xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(2, Size.f__3xl__org_patternfly_style_Size, 'h2 as 3xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(3, Size.f__2xl__org_patternfly_style_Size, 'h3 as 2xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(4, Size.f_xl__org_patternfly_style_Size, 'h4 as xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(5, Size.f_lg__org_patternfly_style_Size, 'h5 has lg')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(6, Size.f_md__org_patternfly_style_Size, 'h6 as md')), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Title));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Title), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TitleComponent.$clinit = () =>{};
  TitleComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TitleComponent, 'org.patternfly.showcase.component.TitleComponent');

exports = TitleComponent;

//# sourceMappingURL=TitleComponent.js.map
