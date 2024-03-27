goog.module('org.patternfly.showcase.component.BreadcrumbComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breadcrumb = goog.forwardDeclare('org.patternfly.component.breadcrumb.Breadcrumb$impl');
let BreadcrumbItem = goog.forwardDeclare('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let NotYetImplemented = goog.forwardDeclare('org.patternfly.showcase.component.NotYetImplemented$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BreadcrumbComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BreadcrumbComponent} */
 static $create__() {
  BreadcrumbComponent.$clinit();
  let $instance = new BreadcrumbComponent();
  $instance.$ctor__org_patternfly_showcase_component_BreadcrumbComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_BreadcrumbComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'breadcrumb'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('breadcrumb-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('breadcrumb-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Breadcrumb.m_breadcrumb__org_patternfly_component_breadcrumb_Breadcrumb().m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section home', '#item-0')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-1')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-2')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section landing', '#item-3').m_active__org_patternfly_component_breadcrumb_BreadcrumbItem())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('breadcrumb-no-home-link', 'Without home link', Code.m_code__java_lang_String__java_lang_String('breadcrumb-no-home-link'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Breadcrumb.m_breadcrumb__org_patternfly_component_breadcrumb_Breadcrumb().m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section home')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-0')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-1')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-2')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section title', '#item-3')).m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(BreadcrumbItem.m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem('Section landing', '#item-4').m_active__org_patternfly_component_breadcrumb_BreadcrumbItem())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('breadcrumb-heading', 'With heading', Code.m_code__java_lang_String__java_lang_String('breadcrumb-heading'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('breadcrumb-dropdown', 'With dropdown', Code.m_code__java_lang_String__java_lang_String('breadcrumb-dropdown'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(NotYetImplemented.m_nyi__org_patternfly_showcase_component_NotYetImplemented()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Breadcrumb));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Breadcrumb), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(BreadcrumbItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  BreadcrumbComponent.$clinit = () =>{};
  BreadcrumbComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BreadcrumbComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Breadcrumb = goog.module.get('org.patternfly.component.breadcrumb.Breadcrumb$impl');
  BreadcrumbItem = goog.module.get('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  NotYetImplemented = goog.module.get('org.patternfly.showcase.component.NotYetImplemented$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BreadcrumbComponent, 'org.patternfly.showcase.component.BreadcrumbComponent');

exports = BreadcrumbComponent;

//# sourceMappingURL=BreadcrumbComponent.js.map
