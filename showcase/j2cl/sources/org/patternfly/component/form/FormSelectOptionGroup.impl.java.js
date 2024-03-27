goog.module('org.patternfly.component.form.FormSelectOptionGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSelectSubComponent = goog.require('org.patternfly.component.form.FormSelectSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let FormSelectOption = goog.forwardDeclare('org.patternfly.component.form.FormSelectOption$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSelectSubComponent<HTMLOptGroupElement, FormSelectOptionGroup>}
 * @implements {Disabled<HTMLOptGroupElement, FormSelectOptionGroup>}
 */
class FormSelectOptionGroup extends FormSelectSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FormSelectOptionGroup} */
 static m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/** ?string */ label) {
  FormSelectOptionGroup.$clinit();
  return FormSelectOptionGroup.$create__java_lang_String(label);
 }
 /** @nodts @return {!FormSelectOptionGroup} */
 static $create__java_lang_String(/** ?string */ label) {
  FormSelectOptionGroup.$clinit();
  let $instance = new FormSelectOptionGroup();
  $instance.$ctor__org_patternfly_component_form_FormSelectOptionGroup__java_lang_String__void(label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormSelectOptionGroup__java_lang_String__void(/** ?string */ label) {
  this.$ctor__org_patternfly_component_form_FormSelectSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormSelectOptionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSelectOptionGroup, /**@type {HTMLOptGroupElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLOptGroupElement>}*/ ($Casts.$to(Elements.m_optgroup__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((og) =>{
   let og_1 = /**@type {HTMLOptGroupElement}*/ ($Casts.$to(og, $Overlay));
   og_1.label = label;
  })), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {FormSelectOptionGroup} */
 m_that__org_patternfly_component_form_FormSelectOptionGroup() {
  return this;
 }
 /** @nodts @template T @return {FormSelectOptionGroup} */
 m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelectOptionGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, FormSelectOption> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let option = /**@type {FormSelectOption}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), FormSelectOption));
    this.m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(option);
   }
  }
  return this;
 }
 /** @nodts @return {FormSelectOptionGroup} */
 m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelectOptionGroup(/** FormSelectOption */ option) {
  return /**@type {FormSelectOptionGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(option), FormSelectOptionGroup));
 }
 /** @nodts @return {FormSelectOptionGroup} */
 m_disabled__boolean__org_patternfly_component_form_FormSelectOptionGroup(/** boolean */ disabled) {
  /**@type {HTMLOptGroupElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).disabled = disabled;
  return this;
 }
 /** @nodts @return {FormSelectOptionGroup} */
 m_label__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/** ?string */ label) {
  /**@type {HTMLOptGroupElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).label = label;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOptionGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormSelectOptionGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOptionGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {FormSelectOptionGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), FormSelectOptionGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSelectOptionGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_form_FormSelectOptionGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {FormSelectOptionGroup} */
 m_disabled__org_patternfly_component_form_FormSelectOptionGroup() {
  return /**@type {FormSelectOptionGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), FormSelectOptionGroup));
 }
 /** @nodts */
 static $clinit() {
  FormSelectOptionGroup.$clinit = () =>{};
  FormSelectOptionGroup.$loadModules();
  FormSelectSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSelectOptionGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  FormSelectOption = goog.module.get('org.patternfly.component.form.FormSelectOption$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormSelectOptionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSelectOptionGroup = 'fsog';
Disabled.$markImplementor(FormSelectOptionGroup);
$Util.$setClassMetadata(FormSelectOptionGroup, 'org.patternfly.component.form.FormSelectOptionGroup');

exports = FormSelectOptionGroup;

//# sourceMappingURL=FormSelectOptionGroup.js.map
