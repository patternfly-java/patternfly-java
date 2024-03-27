goog.module('org.patternfly.component.form.FormGroupControl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let FormControl = goog.forwardDeclare('org.patternfly.component.form.FormControl$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, FormGroupControl>}
 * @implements {Inline<HTMLElement, FormGroupControl>}
 * @implements {Attachable}
 */
class FormGroupControl extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FormControl<?, ?>} @nodts*/
  this.f_control__org_patternfly_component_form_FormGroupControl_;
  /**@type {List<Checkbox>} @nodts*/
  this.f_checkboxes__org_patternfly_component_form_FormGroupControl_;
  /**@type {List<Radio>} @nodts*/
  this.f_radios__org_patternfly_component_form_FormGroupControl_;
 }
 /** @nodts @return {FormGroupControl} */
 static m_formGroupControl__org_patternfly_component_form_FormGroupControl() {
  FormGroupControl.$clinit();
  return FormGroupControl.$create__();
 }
 /** @nodts @return {!FormGroupControl} */
 static $create__() {
  FormGroupControl.$clinit();
  let $instance = new FormGroupControl();
  $instance.$ctor__org_patternfly_component_form_FormGroupControl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroupControl__void() {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Form__org_patternfly_component_ComponentType, FormGroupControl.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupControl, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes, Classes.f_control__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_checkboxes__org_patternfly_component_form_FormGroupControl_ = /**@type {!ArrayList<Checkbox>}*/ (ArrayList.$create__());
  this.f_radios__org_patternfly_component_form_FormGroupControl_ = /**@type {!ArrayList<Radio>}*/ (ArrayList.$create__());
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let formGroup = /**@type {FormGroup}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__org_patternfly_component_SubComponent(FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup), FormGroup));
  if (!$Equality.$same(formGroup.f_fieldId__org_patternfly_component_form_FormGroup, null) && !$Equality.$same(this.f_control__org_patternfly_component_form_FormGroupControl_, null) && !j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(formGroup.f_fieldId__org_patternfly_component_form_FormGroup, this.f_control__org_patternfly_component_form_FormGroupControl_.f_id__org_patternfly_component_form_FormControl)) {
   Logger.m_wrong__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Form__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'The field id of the form group is different from the id of its control: ' + '\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(formGroup.f_fieldId__org_patternfly_component_form_FormGroup) + '\' != \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_control__org_patternfly_component_form_FormGroupControl_.f_id__org_patternfly_component_form_FormControl) + '\'');
  }
  if (!$Equality.$same(formGroup.f_fieldId__org_patternfly_component_form_FormGroup, null)) {
   for (let $iterator = this.f_checkboxes__org_patternfly_component_form_FormGroupControl_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let checkbox = /**@type {Checkbox}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Checkbox));
    {
     checkbox.m_inputElement__org_jboss_elemento_InputElementBuilder().m_name__java_lang_String__org_jboss_elemento_TypedBuilder(formGroup.f_fieldId__org_patternfly_component_form_FormGroup);
    }
   }
   for (let $iterator_1 = this.f_radios__org_patternfly_component_form_FormGroupControl_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let radio = /**@type {Radio}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Radio));
    {
     radio.m_inputElement__org_jboss_elemento_InputElementBuilder().m_name__java_lang_String__org_jboss_elemento_TypedBuilder(formGroup.f_fieldId__org_patternfly_component_form_FormGroup);
    }
   }
  }
 }
 /** @nodts @template E, B @return {FormGroupControl} */
 m_addControl__org_patternfly_component_form_FormControl__org_patternfly_component_form_FormGroupControl(/** FormControl<E, B> */ control) {
  return this.m_add__org_patternfly_component_form_FormControl__org_patternfly_component_form_FormGroupControl(control);
 }
 /** @nodts @template E, B @return {FormGroupControl} */
 m_add__org_patternfly_component_form_FormControl__org_patternfly_component_form_FormGroupControl(/** FormControl<E, B> */ control) {
  this.f_control__org_patternfly_component_form_FormGroupControl_ = control;
  return /**@type {FormGroupControl}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (control.m_element__elemental2_dom_HTMLElement())), FormGroupControl));
 }
 /** @nodts @return {FormGroupControl} */
 m_addCheckbox__org_patternfly_component_form_Checkbox__org_patternfly_component_form_FormGroupControl(/** Checkbox */ checkbox) {
  return this.m_add__org_patternfly_component_form_Checkbox__org_patternfly_component_form_FormGroupControl(checkbox);
 }
 /** @nodts @return {FormGroupControl} */
 m_add__org_patternfly_component_form_Checkbox__org_patternfly_component_form_FormGroupControl(/** Checkbox */ checkbox) {
  this.f_checkboxes__org_patternfly_component_form_FormGroupControl_.add(checkbox);
  return /**@type {FormGroupControl}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(checkbox.m_element__elemental2_dom_HTMLElement()), FormGroupControl));
 }
 /** @nodts @return {FormGroupControl} */
 m_addRadio__org_patternfly_component_form_Radio__org_patternfly_component_form_FormGroupControl(/** Radio */ radio) {
  return this.m_add__org_patternfly_component_form_Radio__org_patternfly_component_form_FormGroupControl(radio);
 }
 /** @nodts @return {FormGroupControl} */
 m_add__org_patternfly_component_form_Radio__org_patternfly_component_form_FormGroupControl(/** Radio */ radio) {
  this.f_radios__org_patternfly_component_form_FormGroupControl_.add(radio);
  return /**@type {FormGroupControl}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(radio.m_element__elemental2_dom_HTMLElement()), FormGroupControl));
 }
 /** @nodts @return {FormGroupControl} */
 m_addHelperText__org_patternfly_component_help_HelperText__org_patternfly_component_form_FormGroupControl(/** HelperText */ helperText) {
  return this.m_add__org_patternfly_component_help_HelperText__org_patternfly_component_form_FormGroupControl(helperText);
 }
 /** @nodts @return {FormGroupControl} */
 m_add__org_patternfly_component_help_HelperText__org_patternfly_component_form_FormGroupControl(/** HelperText */ helperText) {
  return /**@type {FormGroupControl}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_helperText__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(helperText), HTMLContainerBuilder))), FormGroupControl));
 }
 /** @nodts @return {FormGroupControl} */
 m_stack__org_patternfly_component_form_FormGroupControl() {
  return this.m_stack__boolean__org_patternfly_component_form_FormGroupControl(true);
 }
 /** @nodts @return {FormGroupControl} */
 m_stack__boolean__org_patternfly_component_form_FormGroupControl(/** boolean */ stack) {
  return /**@type {FormGroupControl}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), Classes.f_stack__org_patternfly_style_Classes, stack), FormGroupControl));
 }
 /** @nodts @return {FormGroupControl} */
 m_that__org_patternfly_component_form_FormGroupControl() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupControl} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormGroupControl();
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupControl} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {FormGroupControl}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), FormGroupControl));
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupControl} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {FormGroupControl}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), FormGroupControl));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {FormGroupControl} */
 m_inline__org_patternfly_component_form_FormGroupControl() {
  return /**@type {FormGroupControl}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), FormGroupControl));
 }
 //Default method forwarding stub.
 /** @nodts @return {FormGroupControl} */
 m_inline__boolean__org_patternfly_component_form_FormGroupControl(/** boolean */ arg0) {
  return /**@type {FormGroupControl}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), FormGroupControl));
 }
 /** @nodts */
 static $clinit() {
  FormGroupControl.$clinit = () =>{};
  FormGroupControl.$loadModules();
  SubComponent.$clinit();
  Inline.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroupControl;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormGroupControl.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupControl = 'fgc';
Inline.$markImplementor(FormGroupControl);
Attachable.$markImplementor(FormGroupControl);
$Util.$setClassMetadata(FormGroupControl, 'org.patternfly.component.form.FormGroupControl');

exports = FormGroupControl;

//# sourceMappingURL=FormGroupControl.js.map
