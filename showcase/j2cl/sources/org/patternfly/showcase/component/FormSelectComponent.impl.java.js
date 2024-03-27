goog.module('org.patternfly.showcase.component.FormSelectComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let Form = goog.forwardDeclare('org.patternfly.component.form.Form$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let FormGroupControl = goog.forwardDeclare('org.patternfly.component.form.FormGroupControl$impl');
let FormGroupLabel = goog.forwardDeclare('org.patternfly.component.form.FormGroupLabel$impl');
let FormSelect = goog.forwardDeclare('org.patternfly.component.form.FormSelect$impl');
let FormSelectOption = goog.forwardDeclare('org.patternfly.component.form.FormSelectOption$impl');
let FormSelectOptionGroup = goog.forwardDeclare('org.patternfly.component.form.FormSelectOptionGroup$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class FormSelectComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FormSelectComponent} */
 static $create__() {
  FormSelectComponent.$clinit();
  let $instance = new FormSelectComponent();
  $instance.$ctor__org_patternfly_showcase_component_FormSelectComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_FormSelectComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'form-select'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-select-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('form-select-basic'), Supplier.$adapt(() =>{
   let values = /**@type {!Array<?string>}*/ ($Arrays.$init(['Mr', 'Miss', 'Mrs', 'Ms', 'Dr', 'Other'], j_l_String));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('basic-form-select-0', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Mrs', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Select one').m_placeholder__org_patternfly_component_form_FormSelectOption()).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(values)), j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_1);
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-select-validated', 'Validated', Code.m_code__java_lang_String__java_lang_String('form-select-validated'), Supplier.$adapt(() =>{
   let handle = /**@type {!Array<number>}*/ ($Arrays.$init([0], $$double));
   let helperText = HelperText.m_helperText__java_lang_String__org_patternfly_component_help_HelperText('');
   let formSelect = FormSelect.m_formSelect__java_lang_String__org_patternfly_component_form_FormSelect('validated-form-select-0').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_FormSelect(ChangeHandler.$adapt((/** Event */ e, fs, value) =>{
    let fs_1 = /**@type {FormSelect}*/ ($Casts.$to(fs, FormSelect));
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    goog.global.clearTimeout(handle[0]);
    fs_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_default___org_patternfly_component_ValidationStatus);
    helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_default___org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('Validating...');
    let number_1 = Integer.m_parseInt__java_lang_String__int(value_1);
    $Arrays.$set(handle, 0, DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     if (number_1 == 0) {
      fs_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus);
      helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('You must have select a value');
     } else if (number_1 == 3) {
      fs_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_success__org_patternfly_component_ValidationStatus);
      helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_success__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('You chose wisely');
     } else {
      fs_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_component_ValidationStatus);
      helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_error__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('You must chose Three (thought that was obvious)');
     }
    }, 1234, []));
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Form}*/ ($Casts.$to(Form.m_form__org_patternfly_component_form_Form().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormGroup.m_formGroup__org_patternfly_component_form_FormGroup().m_addLabel__org_patternfly_component_form_FormGroupLabel__org_patternfly_component_form_FormGroup(FormGroupLabel.m_formGroupLabel__java_lang_String__org_patternfly_component_form_FormGroupLabel('Comments:')).m_addControl__org_patternfly_component_form_FormGroupControl__org_patternfly_component_form_FormGroup(FormGroupControl.m_formGroupControl__org_patternfly_component_form_FormGroupControl().m_addControl__org_patternfly_component_form_FormControl__org_patternfly_component_form_FormGroupControl(formSelect.m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('Select a number', '0').m_placeholder__boolean__org_patternfly_component_form_FormSelectOption(true)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('One', '1')).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('Two', '2')).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('Three - the only valid option', '3'))).m_addHelperText__org_patternfly_component_help_HelperText__org_patternfly_component_form_FormGroupControl(helperText))), Form))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-select-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('form-select-disabled'), Supplier.$adapt(() =>{
   let values_1 = /**@type {!Array<?string>}*/ ($Arrays.$init(['Mr', 'Miss', 'Mrs', 'Ms', 'Dr', 'Other'], j_l_String));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {FormSelect}*/ ($Casts.$to(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('disabled-form-select-0', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Mrs', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_disabled__org_jboss_elemento_TypedBuilder(), FormSelect)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Select one').m_placeholder__org_patternfly_component_form_FormSelectOption()).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(values_1)), j_u_function_Function.$adapt((arg0_2) =>{
    let arg0_3 = /**@type {?string}*/ ($Casts.$to(arg0_2, j_l_String));
    return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_3);
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-select-grouped', 'Grouped', Code.m_code__java_lang_String__java_lang_String('form-select-grouped'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('disabled-form-select-0', '2').m_addGroup__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup('Group 1').m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('The first option', '1')).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('Second option is selected by default', '2'))).m_addGroup__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup('Group 2').m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('The third option', '3')).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('The fourth option', '4'))).m_addGroup__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(/**@type {FormSelectOptionGroup}*/ ($Casts.$to(FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup('Group 3').m_disabled__org_jboss_elemento_TypedBuilder(), FormSelectOptionGroup)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('The fifth option', '5')).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(FormSelectOption.m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption('The sixth option', '6')))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(FormSelect));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FormSelect), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FormSelectOption), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FormSelectOptionGroup), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  FormSelectComponent.$clinit = () =>{};
  FormSelectComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSelectComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  Form = goog.module.get('org.patternfly.component.form.Form$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  FormGroupControl = goog.module.get('org.patternfly.component.form.FormGroupControl$impl');
  FormGroupLabel = goog.module.get('org.patternfly.component.form.FormGroupLabel$impl');
  FormSelect = goog.module.get('org.patternfly.component.form.FormSelect$impl');
  FormSelectOption = goog.module.get('org.patternfly.component.form.FormSelectOption$impl');
  FormSelectOptionGroup = goog.module.get('org.patternfly.component.form.FormSelectOptionGroup$impl');
  HelperText = goog.module.get('org.patternfly.component.help.HelperText$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(FormSelectComponent, 'org.patternfly.showcase.component.FormSelectComponent');

exports = FormSelectComponent;

//# sourceMappingURL=FormSelectComponent.js.map
