goog.module('org.patternfly.component.form.FormGroupLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let FormGroup = goog.forwardDeclare('org.patternfly.component.form.FormGroup$impl');
let Popover = goog.forwardDeclare('org.patternfly.component.popover.Popover$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormGroupLabel>}
 * @implements {Attachable}
 */
class FormGroupLabel extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_form_FormGroupLabel_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelElement__org_patternfly_component_form_FormGroupLabel_;
 }
 /** @nodts @return {FormGroupLabel} */
 static m_formGroupLabel__java_lang_String__org_patternfly_component_form_FormGroupLabel(/** ?string */ label) {
  FormGroupLabel.$clinit();
  return FormGroupLabel.$create__java_lang_String(label);
 }
 /** @nodts @return {!FormGroupLabel} */
 static $create__java_lang_String(/** ?string */ label) {
  FormGroupLabel.$clinit();
  let $instance = new FormGroupLabel();
  $instance.$ctor__org_patternfly_component_form_FormGroupLabel__java_lang_String__void(label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormGroupLabel__java_lang_String__void(/** ?string */ label) {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormGroupLabel.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupLabel, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_ = /**@type {HTMLLabelElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_form_FormGroupLabel_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(label), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let formGroup = /**@type {FormGroup}*/ ($Casts.$to(this.m_lookupSubComponent__java_lang_String__org_patternfly_component_SubComponent(FormGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroup), FormGroup));
  if (!$Equality.$same(formGroup.f_role__org_patternfly_component_form_FormGroup, null)) {
   let pseudoLabelElement = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
   for (let iterator = Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_); iterator.m_hasNext__boolean(); ) {
    let element = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), $Overlay));
    pseudoLabelElement.appendChild(element);
   }
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_, [pseudoLabelElement]);
   this.f_labelElement__org_patternfly_component_form_FormGroupLabel_ = pseudoLabelElement;
   if (!$Equality.$same(this.m_element__elemental2_dom_HTMLElement().id, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().id)) {
    formGroup.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.m_element__elemental2_dom_HTMLElement().id);
   } else {
    let labelId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(!$Equality.$same(formGroup.f_fieldId__org_patternfly_component_form_FormGroup, null) ? formGroup.f_fieldId__org_patternfly_component_form_FormGroup : ComponentType.f_Form__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['label'], j_l_String)));
    this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(labelId);
    formGroup.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelId);
   }
  } else if (!$Equality.$same(formGroup.f_fieldId__org_patternfly_component_form_FormGroup, null)) {
   /**@type {HTMLLabelElement}*/ ($Casts.$to(this.f_labelElement__org_patternfly_component_form_FormGroupLabel_, HTMLLabelElement_$Overlay)).htmlFor = formGroup.f_fieldId__org_patternfly_component_form_FormGroup;
  }
  if (formGroup.f_required__org_patternfly_component_form_FormGroup) {
   this.f_labelElement__org_patternfly_component_form_FormGroupLabel_.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes, Classes.f_required__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(SafeHtmlUtils.m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml('&#42;')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
 }
 /** @nodts @return {FormGroupLabel} */
 m_label__java_lang_String__org_patternfly_component_form_FormGroupLabel(/** ?string */ label) {
  this.f_textElement__org_patternfly_component_form_FormGroupLabel_.textContent = label;
  return this;
 }
 /** @nodts @return {FormGroupLabel} */
 m_noPaddingTop__org_patternfly_component_form_FormGroupLabel() {
  return /**@type {FormGroupLabel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_noPaddingTop__org_patternfly_style_Classes)], j_l_String))), FormGroupLabel));
 }
 /** @nodts @return {FormGroupLabel} */
 m_help__java_lang_String__org_patternfly_component_popover_Popover__org_patternfly_component_form_FormGroupLabel(/** ?string */ ariaLabel, /** Popover */ popover) {
  let helpButton = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes, Classes.f_help__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, ariaLabel), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(patternfly.m_help__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(helpButton);
  popover.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(helpButton).m_appendToBody__org_patternfly_component_popover_Popover();
  return this;
 }
 /** @nodts @return {FormGroupLabel} */
 m_that__org_patternfly_component_form_FormGroupLabel() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {FormGroupLabel} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormGroupLabel();
 }
 /** @nodts */
 static $clinit() {
  FormGroupLabel.$clinit = () =>{};
  FormGroupLabel.$loadModules();
  FormSubComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormGroupLabel;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  FormGroup = goog.module.get('org.patternfly.component.form.FormGroup$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormGroupLabel.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormGroupLabel = 'fgl';
Attachable.$markImplementor(FormGroupLabel);
$Util.$setClassMetadata(FormGroupLabel, 'org.patternfly.component.form.FormGroupLabel');

exports = FormGroupLabel;

//# sourceMappingURL=FormGroupLabel.js.map
