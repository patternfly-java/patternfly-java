goog.module('org.patternfly.showcase.component.MastheadComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.page.Masthead$impl');
let MastheadBrand = goog.forwardDeclare('org.patternfly.component.page.MastheadBrand$impl');
let MastheadContent = goog.forwardDeclare('org.patternfly.component.page.MastheadContent$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.page.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.page.MastheadToggle$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Assets = goog.forwardDeclare('org.patternfly.showcase.Assets$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Display = goog.forwardDeclare('org.patternfly.style.Display$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MastheadComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MastheadComponent} */
 static $create__() {
  MastheadComponent.$clinit();
  let $instance = new MastheadComponent();
  $instance.$ctor__org_patternfly_showcase_component_MastheadComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_MastheadComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'masthead'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('masthead-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-mixed-content', 'Basic with mixed content', Code.m_code__java_lang_String__java_lang_String('masthead-mixed-content'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(/**@type {Flex}*/ ($Casts.$to(/**@type {Flex}*/ ($Casts.$to(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), HTMLContainerBuilder))), Flex)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Primary').m_primary__org_patternfly_component_button_Button()), Flex)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Secondary').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), Flex)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Tertiary').m_tertiary__org_patternfly_component_button_Button()), Flex))), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-inline', 'Display inline', Code.m_code__java_lang_String__java_lang_String('masthead-inline'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_display__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/**@type {Breakpoints<Display>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Display.f_inline__org_patternfly_style_Display))).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-stack', 'Display stack', Code.m_code__java_lang_String__java_lang_String('masthead-stack'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_display__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/**@type {Breakpoints<Display>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Display.f_stack__org_patternfly_style_Display))).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-responsive', 'Display stack, display inline responsive', Code.m_code__java_lang_String__java_lang_String('masthead-responsive'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_display__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/**@type {Breakpoints<Display>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Display.f_inline__org_patternfly_style_Display, Breakpoint.f_lg__org_patternfly_style_Breakpoint, Display.f_stack__org_patternfly_style_Display, Breakpoint.f__2xl__org_patternfly_style_Breakpoint, Display.f_inline__org_patternfly_style_Display))).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-light', 'Light variant', Code.m_code__java_lang_String__java_lang_String('masthead-light'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_background__org_patternfly_style_Brightness__org_patternfly_component_page_Masthead(Brightness.f_light__org_patternfly_style_Brightness).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-light-200', 'Light 200 variant', Code.m_code__java_lang_String__java_lang_String('masthead-light-200'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_background__org_patternfly_style_Brightness__org_patternfly_component_page_Masthead(Brightness.f_light200__org_patternfly_style_Brightness).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-inset', 'Inset', Code.m_code__java_lang_String__java_lang_String('masthead-inset'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Inset.f_sm__org_patternfly_style_Inset))).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(/**@type {MastheadBrand}*/ ($Casts.$to(MastheadBrand.m_mastheadBrand__org_patternfly_component_page_MastheadBrand().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Logo'), MastheadBrand)))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-router', 'With icon router link', Code.m_code__java_lang_String__java_lang_String('masthead-router'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(MastheadBrand.m_mastheadBrand__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_page_MastheadBrand(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('/')).m_addBrand__org_patternfly_component_brand_Brand__org_patternfly_component_page_MastheadBrand(/**@type {Brand}*/ ($Casts.$to(Brand.m_brand__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand(Assets.f_pfLogo__org_patternfly_showcase_Assets, 'PatternFly').m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).f_name__org_patternfly_style_Variable, '36px'), Brand))))).m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Content'), MastheadContent)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Masthead));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Masthead), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MastheadContent), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MastheadMain), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MastheadToggle), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  MastheadComponent.$clinit = () =>{};
  MastheadComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Brand = goog.module.get('org.patternfly.component.brand.Brand$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Masthead = goog.module.get('org.patternfly.component.page.Masthead$impl');
  MastheadBrand = goog.module.get('org.patternfly.component.page.MastheadBrand$impl');
  MastheadContent = goog.module.get('org.patternfly.component.page.MastheadContent$impl');
  MastheadMain = goog.module.get('org.patternfly.component.page.MastheadMain$impl');
  MastheadToggle = goog.module.get('org.patternfly.component.page.MastheadToggle$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Assets = goog.module.get('org.patternfly.showcase.Assets$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Display = goog.module.get('org.patternfly.style.Display$impl');
  Inset = goog.module.get('org.patternfly.style.Inset$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MastheadComponent, 'org.patternfly.showcase.component.MastheadComponent');

exports = MastheadComponent;

//# sourceMappingURL=MastheadComponent.js.map
