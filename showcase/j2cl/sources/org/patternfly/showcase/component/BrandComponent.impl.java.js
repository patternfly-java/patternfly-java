goog.module('org.patternfly.showcase.component.BrandComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BrandComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BrandComponent} */
 static $create__() {
  BrandComponent.$clinit();
  let $instance = new BrandComponent();
  $instance.$ctor__org_patternfly_showcase_component_BrandComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_BrandComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'brand'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('brand-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('brand-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Brand.m_brand__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf_logo.svg', 'PatternFly logo')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('brand-responsive', 'Responsive', Code.m_code__java_lang_String__java_lang_String('brand-responsive'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Brand.m_brand__org_patternfly_component_brand_Brand().m_widths__org_patternfly_style_Breakpoints__org_patternfly_component_brand_Brand(/**@type {Breakpoints<?string>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, '40px', Breakpoint.f_sm__org_patternfly_style_Breakpoint, '60px', Breakpoint.f_md__org_patternfly_style_Breakpoint, '220px'))).m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf-c-brand__logo-on-xl.svg', '(min-width: 1200px)').m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf-c-brand__logo-on-lg.svg', '(min-width: 992px)').m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf-c-brand__logo-on-md.svg', '(min-width: 768px)').m_addSource__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf-c-brand__logo-on-sm.svg', '(min-width: 576px)').m_addSource__java_lang_String__org_patternfly_component_brand_Brand('https://www.patternfly.org/assets/images/pf-c-brand__logo.svg').m_addImg__org_jboss_elemento_HTMLElementBuilder__org_patternfly_component_brand_Brand(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder('https://www.patternfly.org/assets/images/pf-c-brand__logo-base.jpg').m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((i) =>{
    let i_1 = /**@type {HTMLImageElement}*/ ($Casts.$to(i, HTMLImageElement_$Overlay));
    i_1.alt = 'PatternFly fallback logo';
   })), HTMLElementBuilder)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Brand));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Brand), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  BrandComponent.$clinit = () =>{};
  BrandComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BrandComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Brand = goog.module.get('org.patternfly.component.brand.Brand$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BrandComponent, 'org.patternfly.showcase.component.BrandComponent');

exports = BrandComponent;

//# sourceMappingURL=BrandComponent.js.map
