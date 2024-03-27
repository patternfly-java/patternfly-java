goog.module('org.patternfly.component.form.FormSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const FormControl = goog.require('org.patternfly.component.form.FormControl$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormSelectOption = goog.forwardDeclare('org.patternfly.component.form.FormSelectOption$impl');
let FormSelectOptionGroup = goog.forwardDeclare('org.patternfly.component.form.FormSelectOptionGroup$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormControl<HTMLElement, FormSelect>}
 * @implements {HasValue<?string>}
 * @implements {Attachable}
 */
class FormSelect extends FormControl {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLSelectElement} @nodts*/
  this.f_selectElement__org_patternfly_component_form_FormSelect_;
  /**@type {?string} @nodts*/
  this.f_initialValue__org_patternfly_component_form_FormSelect_;
  /**@type {ChangeHandler<FormSelect, ?string>} @nodts*/
  this.f_changeHandler__org_patternfly_component_form_FormSelect_;
 }
 /** @nodts @return {FormSelect} */
 static m_formSelect__java_lang_String__org_patternfly_component_form_FormSelect(/** ?string */ id) {
  FormSelect.$clinit();
  return FormSelect.$create__java_lang_String__java_lang_String(id, null);
 }
 /** @nodts @return {FormSelect} */
 static m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect(/** ?string */ id, /** ?string */ value) {
  FormSelect.$clinit();
  return FormSelect.$create__java_lang_String__java_lang_String(id, value);
 }
 /** @nodts @return {!FormSelect} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ value) {
  FormSelect.$clinit();
  let $instance = new FormSelect();
  $instance.$ctor__org_patternfly_component_form_FormSelect__java_lang_String__java_lang_String__void(id, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormSelect__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ value) {
  this.$ctor__org_patternfly_component_form_FormControl__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(id, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(FormControl.m_formControlContainer__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLSelectElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLSelectElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLSelectElement>}*/ ($Casts.$to(Elements.m_select__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((s) =>{
   let s_1 = /**@type {HTMLSelectElement}*/ ($Casts.$to(s, $Overlay));
   s_1.name = id;
  })), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_FormSelect__org_patternfly_component_ComponentType);
  this.m_failSafeUtilitiesContainer__elemental2_dom_HTMLElement_$pp_org_patternfly_component_form().appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_caretDown__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_selectElement__org_patternfly_component_form_FormSelect_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay));
  if (!$Equality.$same(value, null)) {
   this.f_initialValue__org_patternfly_component_form_FormSelect_ = value;
  }
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if ($Equality.$same(this.f_initialValue__org_patternfly_component_form_FormSelect_, null)) {
   this.m_selectPlaceholder__void_$p_org_patternfly_component_form_FormSelect();
  } else {
   this.m_value__java_lang_String__org_patternfly_component_form_FormSelect(this.f_initialValue__org_patternfly_component_form_FormSelect_);
  }
  this.m_togglePlaceholder__void_$p_org_patternfly_component_form_FormSelect();
  this.f_selectElement__org_patternfly_component_form_FormSelect_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ event) =>{
   this.m_togglePlaceholder__void_$p_org_patternfly_component_form_FormSelect();
  }));
 }
 /** @nodts @template T @return {FormSelect} */
 m_addGroups__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/** Iterable<T> */ items, /** j_u_function_Function<T, FormSelectOptionGroup> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let group = /**@type {FormSelectOptionGroup}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), FormSelectOptionGroup));
    this.m_addGroup__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(group);
   }
  }
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_addGroup__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(/** FormSelectOptionGroup */ group) {
  return this.m_add__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(group);
 }
 /** @nodts @return {FormSelect} */
 m_add__org_patternfly_component_form_FormSelectOptionGroup__org_patternfly_component_form_FormSelect(/** FormSelectOptionGroup */ group) {
  this.f_selectElement__org_patternfly_component_form_FormSelect_.appendChild(/**@type {HTMLOptGroupElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLOptGroupElement_$Overlay)));
  return this;
 }
 /** @nodts @template T @return {FormSelect} */
 m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/** Iterable<T> */ items, /** j_u_function_Function<T, FormSelectOption> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let option = /**@type {FormSelectOption}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), FormSelectOption));
    this.m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(option);
   }
  }
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(/** FormSelectOption */ option) {
  return this.m_add__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(option);
 }
 /** @nodts @return {FormSelect} */
 m_add__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(/** FormSelectOption */ option) {
  this.f_selectElement__org_patternfly_component_form_FormSelect_.appendChild(/**@type {HTMLOptionElement}*/ ($Casts.$to(option.m_element__elemental2_dom_HTMLElement(), HTMLOptionElement_$Overlay)));
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_required__boolean__org_patternfly_component_form_FormSelect(/** boolean */ required) {
  if (required) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_selectElement__org_patternfly_component_form_FormSelect_, Attributes.f_required__org_patternfly_core_Attributes, true);
  } else {
   this.f_selectElement__org_patternfly_component_form_FormSelect_.removeAttribute(Attributes.f_required__org_patternfly_core_Attributes);
  }
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_value__java_lang_String__org_patternfly_component_form_FormSelect(/** ?string */ value) {
  return this.m_value__java_lang_String__boolean__org_patternfly_component_form_FormSelect(value, false);
 }
 /** @nodts @return {FormSelect} */
 m_value__java_lang_String__boolean__org_patternfly_component_form_FormSelect(/** ?string */ value, /** boolean */ fireEvent) {
  let changed = !Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_selectElement__org_patternfly_component_form_FormSelect_.value, value);
  this.f_selectElement__org_patternfly_component_form_FormSelect_.value = value;
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_form_FormSelect_, null)) {
   this.f_changeHandler__org_patternfly_component_form_FormSelect_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, value);
  }
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_FormSelect(/** Consumer<HTMLElementBuilder<HTMLSelectElement>> */ consumer) {
  consumer.m_accept__java_lang_Object__void(this.m_selectElement__org_jboss_elemento_HTMLElementBuilder());
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_that__org_patternfly_component_form_FormSelect() {
  return this;
 }
 /** @nodts @return {FormSelect} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_FormSelect(/** ChangeHandler<FormSelect, ?string> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_form_FormSelect_ = changeHandler;
  this.f_selectElement__org_patternfly_component_form_FormSelect_.addEventListener(EventType.f_input__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   changeHandler.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, this, this.f_selectElement__org_patternfly_component_form_FormSelect_.value);
  }));
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_selectElement__org_patternfly_component_form_FormSelect_.value;
 }
 /** @nodts @return {HTMLElementBuilder<HTMLSelectElement>} */
 m_selectElement__org_jboss_elemento_HTMLElementBuilder() {
  return /**@type {HTMLElementBuilder<HTMLSelectElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_selectElement__org_patternfly_component_form_FormSelect_));
 }
 /** @override @nodts */
 m_disableInputElement__boolean__void_$pp_org_patternfly_component_form(/** boolean */ disabled) {
  this.f_selectElement__org_patternfly_component_form_FormSelect_.disabled = disabled;
 }
 /** @nodts */
 m_selectPlaceholder__void_$p_org_patternfly_component_form_FormSelect() {
  for (let i = 0; i < this.f_selectElement__org_patternfly_component_form_FormSelect_.options.length; i = i + 1 | 0) {
   if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean(this.f_selectElement__org_patternfly_component_form_FormSelect_.options.item(i).dataset, Dataset.f_placeholder__org_patternfly_core_Dataset)) {
    this.f_selectElement__org_patternfly_component_form_FormSelect_.value = this.f_selectElement__org_patternfly_component_form_FormSelect_.options.item(i).value;
    break;
   }
  }
 }
 /** @nodts */
 m_togglePlaceholder__void_$p_org_patternfly_component_form_FormSelect() {
  let selected = this.f_selectElement__org_patternfly_component_form_FormSelect_.selectedOptions;
  if (selected.length == 0) {
   this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_placeholder__org_patternfly_style_Classes));
  } else if (selected.length == 1) {
   if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean(/**@type {HTMLOptionElement}*/ ($Casts.$to(selected.item(0), HTMLOptionElement_$Overlay)).dataset, Dataset.f_placeholder__org_patternfly_core_Dataset)) {
    this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_placeholder__org_patternfly_style_Classes));
   } else {
    this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_placeholder__org_patternfly_style_Classes));
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormSelect();
 }
 /** @nodts */
 static $clinit() {
  FormSelect.$clinit = () =>{};
  FormSelect.$loadModules();
  FormControl.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLOptGroupElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  FormSelectOption = goog.module.get('org.patternfly.component.form.FormSelectOption$impl');
  FormSelectOptionGroup = goog.module.get('org.patternfly.component.form.FormSelectOptionGroup$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(FormSelect);
Attachable.$markImplementor(FormSelect);
$Util.$setClassMetadata(FormSelect, 'org.patternfly.component.form.FormSelect');

exports = FormSelect;

//# sourceMappingURL=FormSelect.js.map
