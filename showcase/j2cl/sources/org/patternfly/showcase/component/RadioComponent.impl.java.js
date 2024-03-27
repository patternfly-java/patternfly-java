goog.module('org.patternfly.showcase.component.RadioComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let RadioBody = goog.forwardDeclare('org.patternfly.component.form.RadioBody$impl');
let RadioDescription = goog.forwardDeclare('org.patternfly.component.form.RadioDescription$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RadioComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!RadioComponent} */
 static $create__() {
  RadioComponent.$clinit();
  let $instance = new RadioComponent();
  $instance.$ctor__org_patternfly_showcase_component_RadioComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_RadioComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'radio'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('radio-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('basic-radio-0', 'basic-radio', 'Option 1').m_value__boolean__org_patternfly_component_form_Radio(true)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('basic-radio-1', 'basic-radio', 'Option 2')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-reversed', 'Reversed', Code.m_code__java_lang_String__java_lang_String('radio-reversed'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('reversed-radio-0', 'reversed-radio', 'Option 1').m_reversed__org_patternfly_component_form_Radio()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('radio-disabled'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Radio}*/ ($Casts.$to(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('disabled-radio-0', 'disabled-radio', 'Disabled radio 1').m_value__boolean__org_patternfly_component_form_Radio(true).m_disabled__org_jboss_elemento_TypedBuilder(), Radio))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Radio}*/ ($Casts.$to(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('disabled-radio-1', 'disabled-radio', 'Disabled radio 2').m_disabled__org_jboss_elemento_TypedBuilder(), Radio))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-description', 'Radio with description', Code.m_code__java_lang_String__java_lang_String('radio-description'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rwd-0', 'rwd', 'Radio with description').m_addDescription__org_patternfly_component_form_RadioDescription__org_patternfly_component_form_Radio(RadioDescription.m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(LoremIpsum.m_words__int__java_lang_String(50)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-body', 'Radio with body', Code.m_code__java_lang_String__java_lang_String('radio-body'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rwb-0', 'rwb', 'Radio with body').m_addBody__org_patternfly_component_form_RadioBody__org_patternfly_component_form_Radio(RadioBody.m_radioBody__java_lang_String__org_patternfly_component_form_RadioBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-description-body', 'Radio with description and body', Code.m_code__java_lang_String__java_lang_String('radio-description-body'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rdb-0', 'rdb', 'Radio with description and body').m_addDescription__org_patternfly_component_form_RadioDescription__org_patternfly_component_form_Radio(RadioDescription.m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(LoremIpsum.m_words__int__java_lang_String(50))).m_addBody__org_patternfly_component_form_RadioBody__org_patternfly_component_form_Radio(RadioBody.m_radioBody__java_lang_String__org_patternfly_component_form_RadioBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-standalone', 'Standalone input', Code.m_code__java_lang_String__java_lang_String('radio-standalone'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('standalone-radio-0', 'standalone-radio').m_standalone__org_patternfly_component_form_Radio()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Radio));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Radio), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(RadioBody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(RadioDescription), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  RadioComponent.$clinit = () =>{};
  RadioComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadioComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  RadioBody = goog.module.get('org.patternfly.component.form.RadioBody$impl');
  RadioDescription = goog.module.get('org.patternfly.component.form.RadioDescription$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(RadioComponent, 'org.patternfly.showcase.component.RadioComponent');

exports = RadioComponent;

//# sourceMappingURL=RadioComponent.js.map
