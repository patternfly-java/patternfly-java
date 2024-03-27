goog.module('org.patternfly.component.form.FormSelectOption$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const FormSelectSubComponent = goog.require('org.patternfly.component.form.FormSelectSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSelectSubComponent<HTMLOptionElement, FormSelectOption>}
 * @implements {Disabled<HTMLOptionElement, FormSelectOption>}
 * @implements {HasValue<?string>}
 */
class FormSelectOption extends FormSelectSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FormSelectOption} */
 static m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(/** ?string */ label) {
  FormSelectOption.$clinit();
  return FormSelectOption.$create__java_lang_String__java_lang_String(label, Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(label, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
 }
 /** @nodts @return {FormSelectOption} */
 static m_formSelectOption__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelectOption(/** ?string */ label, /** ?string */ value) {
  FormSelectOption.$clinit();
  return FormSelectOption.$create__java_lang_String__java_lang_String(label, value);
 }
 /** @nodts @return {!FormSelectOption} */
 static $create__java_lang_String__java_lang_String(/** ?string */ label, /** ?string */ value) {
  FormSelectOption.$clinit();
  let $instance = new FormSelectOption();
  $instance.$ctor__org_patternfly_component_form_FormSelectOption__java_lang_String__java_lang_String__void(label, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormSelectOption__java_lang_String__java_lang_String__void(/** ?string */ label, /** ?string */ value) {
  this.$ctor__org_patternfly_component_form_FormSelectSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormSelectOption.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSelectOption, /**@type {HTMLOptionElement}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLOptionElement>}*/ ($Casts.$to(Elements.m_option__org_jboss_elemento_HTMLElementBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((o) =>{
   let o_1 = /**@type {HTMLOptionElement}*/ ($Casts.$to(o, $Overlay));
   o_1.label = label;
   o_1.value = value;
  })), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FormSelectOption} */
 m_that__org_patternfly_component_form_FormSelectOption() {
  return this;
 }
 /** @nodts @return {FormSelectOption} */
 m_placeholder__org_patternfly_component_form_FormSelectOption() {
  return this.m_placeholder__boolean__boolean__org_patternfly_component_form_FormSelectOption(true, false);
 }
 /** @nodts @return {FormSelectOption} */
 m_placeholder__boolean__org_patternfly_component_form_FormSelectOption(/** boolean */ selectable) {
  return this.m_placeholder__boolean__boolean__org_patternfly_component_form_FormSelectOption(true, selectable);
 }
 /** @nodts @return {FormSelectOption} */
 m_placeholder__boolean__boolean__org_patternfly_component_form_FormSelectOption(/** boolean */ placeholder, /** boolean */ selectable) {
  if (placeholder) {
   this.m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_placeholder__org_patternfly_core_Dataset, '');
  }
  if (!selectable) {
   this.m_disabled__boolean__org_patternfly_component_form_FormSelectOption(placeholder);
  }
  return this;
 }
 /** @nodts @return {FormSelectOption} */
 m_disabled__boolean__org_patternfly_component_form_FormSelectOption(/** boolean */ disabled) {
  /**@type {HTMLOptionElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).disabled = disabled;
  return this;
 }
 /** @nodts @return {FormSelectOption} */
 m_label__java_lang_String__org_patternfly_component_form_FormSelectOption(/** ?string */ label) {
  /**@type {HTMLOptionElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).label = label;
  return this;
 }
 /** @nodts @return {FormSelectOption} */
 m_value__java_lang_String__org_patternfly_component_form_FormSelectOption(/** ?string */ value) {
  /**@type {HTMLOptionElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).value = value;
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return /**@type {HTMLOptionElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).value;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOption} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormSelectOption();
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOption} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {FormSelectOption}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), FormSelectOption));
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOption} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_form_FormSelectOption(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Default method forwarding stub.
 /** @nodts @return {FormSelectOption} */
 m_disabled__org_patternfly_component_form_FormSelectOption() {
  return /**@type {FormSelectOption}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), FormSelectOption));
 }
 /** @nodts */
 static $clinit() {
  FormSelectOption.$clinit = () =>{};
  FormSelectOption.$loadModules();
  FormSelectSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSelectOption;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormSelectOption.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSelectOption = 'fso';
Disabled.$markImplementor(FormSelectOption);
HasValue.$markImplementor(FormSelectOption);
$Util.$setClassMetadata(FormSelectOption, 'org.patternfly.component.form.FormSelectOption');

exports = FormSelectOption;

//# sourceMappingURL=FormSelectOption.js.map
