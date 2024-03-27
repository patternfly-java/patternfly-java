goog.module('org.patternfly.showcase.component.TextInputComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let TextInput = goog.forwardDeclare('org.patternfly.component.form.TextInput$impl');
let TextInputType = goog.forwardDeclare('org.patternfly.component.form.TextInputType$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextInputComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputComponent} */
 static $create__() {
  TextInputComponent.$clinit();
  let $instance = new TextInputComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextInputComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextInputComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'text-input'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('text-input-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('basic-text-input-0')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('text-input-disabled'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('disabled-text-input-0', 'disabled text input example').m_disabled__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-readonly', 'Read only', Code.m_code__java_lang_String__java_lang_String('text-input-readonly'), Supplier.$adapt(() =>{
   let plainToggle = Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('plain-toggle', 'plain-toggle', 'Plain read only variant');
   let readOnlyTextInput = /**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('readonly-text-input-0', 'read only text input example').m_readonly__org_jboss_elemento_TypedBuilder(), TextInput));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(plainToggle.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e, c, value) =>{
    let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
    let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
    readOnlyTextInput.m_plain__boolean__org_patternfly_component_form_TextInput(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1));
   }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(readOnlyTextInput), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-invalid', 'Invalid', Code.m_code__java_lang_String__java_lang_String('text-input-invalid'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('invalid-text-input-0').m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_component_ValidationStatus), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-custom-icon', 'Custom icon', Code.m_code__java_lang_String__java_lang_String('text-input-custom-icon'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-text-input-0').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), TextInput)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_calendar__org_patternfly_icon_PredefinedIcon()), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-text-input-1').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_clock__org_patternfly_icon_PredefinedIcon()), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-custom-icon-and-invalid', 'Custom icon and invalid', Code.m_code__java_lang_String__java_lang_String('text-input-custom-icon-and-invalid'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-and-invalid-text-input-0').m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_component_ValidationStatus), TextInput)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_calendar__org_patternfly_icon_PredefinedIcon()), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(TextInput));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInput), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputType), Type.f_other__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TextInputComponent.$clinit = () =>{};
  TextInputComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  TextInput = goog.module.get('org.patternfly.component.form.TextInput$impl');
  TextInputType = goog.module.get('org.patternfly.component.form.TextInputType$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputComponent, 'org.patternfly.showcase.component.TextInputComponent');

exports = TextInputComponent;

//# sourceMappingURL=TextInputComponent.js.map
