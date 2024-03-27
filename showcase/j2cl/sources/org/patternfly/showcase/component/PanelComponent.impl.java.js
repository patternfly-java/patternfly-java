goog.module('org.patternfly.showcase.component.PanelComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Panel = goog.forwardDeclare('org.patternfly.component.panel.Panel$impl');
let PanelFooter = goog.forwardDeclare('org.patternfly.component.panel.PanelFooter$impl');
let PanelHeader = goog.forwardDeclare('org.patternfly.component.panel.PanelHeader$impl');
let PanelMain = goog.forwardDeclare('org.patternfly.component.panel.PanelMain$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PanelComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!PanelComponent} */
 static $create__() {
  PanelComponent.$clinit();
  let $instance = new PanelComponent();
  $instance.$ctor__org_patternfly_showcase_component_PanelComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_PanelComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'panel'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('panel-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-header', 'Header', Code.m_code__java_lang_String__java_lang_String('panel-header'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-footer', 'Footer', Code.m_code__java_lang_String__java_lang_String('panel-footer'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-header-footer', 'Header and footer', Code.m_code__java_lang_String__java_lang_String('panel-header-footer'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-raised', 'Raised', Code.m_code__java_lang_String__java_lang_String('panel-raised'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_raised__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-bordered', 'Bordered', Code.m_code__java_lang_String__java_lang_String('panel-bordered'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {Panel}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_bordered__org_jboss_elemento_TypedBuilder(), Panel)).m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-scrollable', 'Scrollable', Code.m_code__java_lang_String__java_lang_String('panel-scrollable'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_scrollable__org_patternfly_component_panel_Panel().m_addMain__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(PanelMain.m_panelMain__org_patternfly_component_panel_PanelMain().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-scrollable-header-footer', 'Scrollable with header and footer', Code.m_code__java_lang_String__java_lang_String('panel-scrollable-header-footer'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_scrollable__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(PanelMain.m_panelMain__org_patternfly_component_panel_PanelMain().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain))).m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Panel));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Panel), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(PanelFooter), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(PanelHeader), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(PanelMain), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  PanelComponent.$clinit = () =>{};
  PanelComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PanelComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Panel = goog.module.get('org.patternfly.component.panel.Panel$impl');
  PanelFooter = goog.module.get('org.patternfly.component.panel.PanelFooter$impl');
  PanelHeader = goog.module.get('org.patternfly.component.panel.PanelHeader$impl');
  PanelMain = goog.module.get('org.patternfly.component.panel.PanelMain$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PanelComponent, 'org.patternfly.showcase.component.PanelComponent');

exports = PanelComponent;

//# sourceMappingURL=PanelComponent.js.map
