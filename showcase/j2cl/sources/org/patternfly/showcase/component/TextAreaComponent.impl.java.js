goog.module('org.patternfly.showcase.component.TextAreaComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
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
let Form = goog.forwardDeclare('org.patternfly.component.form.Form$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let FormGroupControl = goog.forwardDeclare('org.patternfly.component.form.FormGroupControl$impl');
let FormGroupLabel = goog.forwardDeclare('org.patternfly.component.form.FormGroupLabel$impl');
let TextArea = goog.forwardDeclare('org.patternfly.component.form.TextArea$impl');
let TextAreaResize = goog.forwardDeclare('org.patternfly.component.form.TextAreaResize$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class TextAreaComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextAreaComponent} */
 static $create__() {
  TextAreaComponent.$clinit();
  let $instance = new TextAreaComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextAreaComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextAreaComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'text-area'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('text-area-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('basic-text-area-0')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-invalid', 'Invalid', Code.m_code__java_lang_String__java_lang_String('text-area-invalid'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('invalid-text-area-0').m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_component_ValidationStatus), TextArea))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-validated', 'Validated', Code.m_code__java_lang_String__java_lang_String('text-area-validated'), Supplier.$adapt(() =>{
   let handle = /**@type {!Array<number>}*/ ($Arrays.$init([0], $$double));
   let helperText = HelperText.m_helperText__java_lang_String__org_patternfly_component_help_HelperText('Share your thoughts.');
   let textArea = TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('validated-text-area-0').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_TextArea(ChangeHandler.$adapt((/** Event */ e, ta, value) =>{
    let ta_1 = /**@type {TextArea}*/ ($Casts.$to(ta, TextArea));
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    goog.global.clearTimeout(handle[0]);
    ta_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_default___org_patternfly_component_ValidationStatus);
    helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_default___org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('Validating...');
    $Arrays.$set(handle, 0, DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     if (j_l_String.m_isEmpty__java_lang_String__boolean(value_1)) {
      ta_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus);
      helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('You must have something to say');
     } else {
      if (j_l_String.m_length__java_lang_String__int(value_1) < 10) {
       ta_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_component_ValidationStatus);
       helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_error__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('You\'re being too brief, please enter at least 10 characters.');
      } else {
       ta_1.m_validated__org_patternfly_component_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_success__org_patternfly_component_ValidationStatus);
       helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_success__org_patternfly_component_ValidationStatus).m_text__java_lang_String__org_patternfly_component_help_HelperTextItem('Thanks for your comments!');
      }
     }
    }, 1234, []));
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Form}*/ ($Casts.$to(Form.m_form__org_patternfly_component_form_Form().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormGroup.m_formGroup__org_patternfly_component_form_FormGroup().m_addLabel__org_patternfly_component_form_FormGroupLabel__org_patternfly_component_form_FormGroup(FormGroupLabel.m_formGroupLabel__java_lang_String__org_patternfly_component_form_FormGroupLabel('Comments:')).m_addControl__org_patternfly_component_form_FormGroupControl__org_patternfly_component_form_FormGroup(FormGroupControl.m_formGroupControl__org_patternfly_component_form_FormGroupControl().m_addControl__org_patternfly_component_form_FormControl__org_patternfly_component_form_FormGroupControl(textArea).m_addHelperText__org_patternfly_component_help_HelperText__org_patternfly_component_form_FormGroupControl(helperText))), Form))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-vertical', 'Vertically resizable', Code.m_code__java_lang_String__java_lang_String('text-area-vertical'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('vertical-text-area-0').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_vertical__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-horizontal', 'Horizontally resizable', Code.m_code__java_lang_String__java_lang_String('text-area-horizontal'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('horizontal-text-area-0').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_horizontal__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-both', 'Vertically and horizontally resizable', Code.m_code__java_lang_String__java_lang_String('text-area-both'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('horizontal-text-area-0').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_both__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('text-area-disabled'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('disabled-text-area-0').m_disabled__org_jboss_elemento_TypedBuilder(), TextArea))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-area-readonly', 'Read only', Code.m_code__java_lang_String__java_lang_String('text-area-readonly'), Supplier.$adapt(() =>{
   let plainToggle = Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('plain-toggle', 'plain-toggle', 'Plain read only variant');
   let readOnlyTextArea = /**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('readonly-text-area-0', 'read only text area example').m_readonly__org_jboss_elemento_TypedBuilder(), TextArea));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(plainToggle.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e_1, c, value_2) =>{
    let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
    let value_3 = /**@type {?boolean}*/ ($Casts.$to(value_2, Boolean));
    readOnlyTextArea.m_plain__boolean__org_patternfly_component_form_TextArea(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_3));
   }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(readOnlyTextArea), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-auto-size', 'Auto resizing', Code.m_code__java_lang_String__java_lang_String('text-auto-size'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__org_patternfly_component_form_TextArea('auto-size-text-area-0').m_autoResize__org_patternfly_component_form_TextArea()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(TextArea));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextArea), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextAreaResize), Type.f_modifier__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TextAreaComponent.$clinit = () =>{};
  TextAreaComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAreaComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
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
  Form = goog.module.get('org.patternfly.component.form.Form$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  FormGroupControl = goog.module.get('org.patternfly.component.form.FormGroupControl$impl');
  FormGroupLabel = goog.module.get('org.patternfly.component.form.FormGroupLabel$impl');
  TextArea = goog.module.get('org.patternfly.component.form.TextArea$impl');
  TextAreaResize = goog.module.get('org.patternfly.component.form.TextAreaResize$impl');
  HelperText = goog.module.get('org.patternfly.component.help.HelperText$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(TextAreaComponent, 'org.patternfly.showcase.component.TextAreaComponent');

exports = TextAreaComponent;

//# sourceMappingURL=TextAreaComponent.js.map
