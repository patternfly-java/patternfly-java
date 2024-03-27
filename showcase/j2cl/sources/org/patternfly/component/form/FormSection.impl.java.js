goog.module('org.patternfly.component.form.FormSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormSection>}
 */
class FormSection extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {FormSection} */
 static m_formSection__org_patternfly_component_form_FormSection() {
  FormSection.$clinit();
  return FormSection.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(null, null);
 }
 /** @nodts @return {FormSection} */
 static m_formSection__java_lang_String__org_patternfly_component_form_FormSection(/** ?string */ title) {
  FormSection.$clinit();
  return FormSection.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(title, Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {FormSection} */
 static m_formSection__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_form_FormSection(/** ?string */ title, /** HTMLContainerBuilder<E> */ titleElement) {
  FormSection.$clinit();
  return FormSection.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(title, titleElement);
 }
 /** @nodts @template E @return {!FormSection} */
 static $create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ title, /** HTMLContainerBuilder<E> */ titleElement) {
  FormSection.$clinit();
  let $instance = new FormSection();
  $instance.$ctor__org_patternfly_component_form_FormSection__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(title, titleElement);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_form_FormSection__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(/** ?string */ title, /** HTMLContainerBuilder<E> */ titleElement) {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormSection.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSection, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'group'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(title, null)) {
   let titleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Form__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['section', 'title'], j_l_String)));
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, titleId);
   if ($Equality.$same(titleElement, null)) {
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(titleId), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder)));
   } else {
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(titleElement.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(titleId), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(title), HTMLContainerBuilder)));
   }
  }
 }
 /** @nodts @return {FormSection} */
 m_addGroup__org_patternfly_component_form_FormGroup__org_patternfly_component_form_FormSection(/** FormGroup */ group) {
  return /**@type {FormSection}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), FormSection));
 }
 /** @nodts @return {FormSection} */
 m_that__org_patternfly_component_form_FormSection() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {FormSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormSection();
 }
 /** @nodts */
 static $clinit() {
  FormSection.$clinit = () =>{};
  FormSection.$loadModules();
  FormSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSection;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormSection.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormSection = 'fs';
$Util.$setClassMetadata(FormSection, 'org.patternfly.component.form.FormSection');

exports = FormSection;

//# sourceMappingURL=FormSection.js.map
