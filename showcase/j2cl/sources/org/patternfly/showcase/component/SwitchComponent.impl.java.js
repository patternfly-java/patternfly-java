goog.module('org.patternfly.showcase.component.SwitchComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Switch = goog.forwardDeclare('org.patternfly.component.switch_.Switch$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SwitchComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SwitchComponent} */
 static $create__() {
  SwitchComponent.$clinit();
  let $instance = new SwitchComponent();
  $instance.$ctor__org_patternfly_showcase_component_SwitchComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_SwitchComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'switch'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('switch-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('switch-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-basic-0', 'switch-basic-0', true).m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch('Message when on', 'Message when off')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('switch-reversed', 'Reversed layout', Code.m_code__java_lang_String__java_lang_String('switch-reversed'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-reversed-0', 'switch-reversed-0', true).m_reversed__org_patternfly_component_switch__Switch().m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch('Message when on', 'Message when off')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('switch-no-label', 'Without label', Code.m_code__java_lang_String__java_lang_String('switch-no-label'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-no-label-0', 'switch-no-label-0', true).m_checkIcon__org_patternfly_component_switch__Switch()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('switch-checked-label', 'Checked with label', Code.m_code__java_lang_String__java_lang_String('switch-checked-label'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-checked-label-0', 'switch-checked-label-0', true).m_checkIcon__org_patternfly_component_switch__Switch().m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch('Message when on', 'Message when off')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('switch-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('switch-disabled'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Switch}*/ ($Casts.$to(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-disabled-0', 'switch-disabled-0', true).m_disabled__org_jboss_elemento_TypedBuilder(), Switch)).m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch('Message when on', 'Message when off')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Switch}*/ ($Casts.$to(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-disabled-1', 'switch-disabled-1', false).m_disabled__org_jboss_elemento_TypedBuilder(), Switch)).m_label__java_lang_String__java_lang_String__org_patternfly_component_switch__Switch('Message when on', 'Message when off')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Switch}*/ ($Casts.$to(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-disabled-2', 'switch-disabled-2', true).m_disabled__org_jboss_elemento_TypedBuilder(), Switch)).m_checkIcon__org_patternfly_component_switch__Switch()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Switch}*/ ($Casts.$to(Switch.m_switch___java_lang_String__java_lang_String__boolean__org_patternfly_component_switch__Switch('switch-disabled-3', 'switch-disabled-3', false).m_disabled__org_jboss_elemento_TypedBuilder(), Switch)).m_checkIcon__org_patternfly_component_switch__Switch()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Switch));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Switch), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  SwitchComponent.$clinit = () =>{};
  SwitchComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SwitchComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Switch = goog.module.get('org.patternfly.component.switch_.Switch$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SwitchComponent, 'org.patternfly.showcase.component.SwitchComponent');

exports = SwitchComponent;

//# sourceMappingURL=SwitchComponent.js.map
