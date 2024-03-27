goog.module('org.patternfly.component.form.FormFieldGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const FormSubComponent = goog.require('org.patternfly.component.form.FormSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let FormFieldGroupBody = goog.forwardDeclare('org.patternfly.component.form.FormFieldGroupBody$impl');
let FormFieldGroupHeader = goog.forwardDeclare('org.patternfly.component.form.FormFieldGroupHeader$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FormSubComponent<HTMLElement, FormFieldGroup>}
 * @implements {Expandable<HTMLElement, FormFieldGroup>}
 * @implements {Attachable}
 */
class FormFieldGroup extends FormSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_titleId__org_patternfly_component_form_FormFieldGroup_;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_form_FormFieldGroup_ = false;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_;
  /**@type {FormFieldGroupHeader} @nodts*/
  this.f_header__org_patternfly_component_form_FormFieldGroup_;
  /**@type {FormFieldGroupBody} @nodts*/
  this.f_body__org_patternfly_component_form_FormFieldGroup_;
  /**@type {ToggleHandler<FormFieldGroup>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_;
 }
 /** @nodts @return {FormFieldGroup} */
 static m_formFieldGroup__org_patternfly_component_form_FormFieldGroup() {
  FormFieldGroup.$clinit();
  return FormFieldGroup.$create__boolean(false);
 }
 /** @nodts @return {FormFieldGroup} */
 static m_formFieldGroup__boolean__org_patternfly_component_form_FormFieldGroup(/** boolean */ expandable) {
  FormFieldGroup.$clinit();
  return FormFieldGroup.$create__boolean(expandable);
 }
 /** @nodts @return {!FormFieldGroup} */
 static $create__boolean(/** boolean */ expandable) {
  FormFieldGroup.$clinit();
  let $instance = new FormFieldGroup();
  $instance.$ctor__org_patternfly_component_form_FormFieldGroup__boolean__void(expandable);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormFieldGroup__boolean__void(/** boolean */ expandable) {
  this.$ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(FormFieldGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'group'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_titleId__org_patternfly_component_form_FormFieldGroup_ = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Form__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([FormFieldGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroup, 'title'], j_l_String)));
  this.f_expandable__org_patternfly_component_form_FormFieldGroup_ = false;
  this.m_storeSubComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_form_FormFieldGroup_, null) && !$Equality.$same(this.f_header__org_patternfly_component_form_FormFieldGroup_.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader, null)) {
   this.f_header__org_patternfly_component_form_FormFieldGroup_.f_titleElement__org_patternfly_component_form_FormFieldGroupHeader.id = this.f_titleId__org_patternfly_component_form_FormFieldGroup_;
  }
  if (this.f_expandable__org_patternfly_component_form_FormFieldGroup_) {
   this.m_collapse__boolean__void(false);
  }
 }
 /** @nodts @return {FormFieldGroup} */
 m_addHeader__org_patternfly_component_form_FormFieldGroupHeader__org_patternfly_component_form_FormFieldGroup(/** FormFieldGroupHeader */ header) {
  return this.m_add__org_patternfly_component_form_FormFieldGroupHeader__org_patternfly_component_form_FormFieldGroup(header);
 }
 /** @nodts @return {FormFieldGroup} */
 m_add__org_patternfly_component_form_FormFieldGroupHeader__org_patternfly_component_form_FormFieldGroup(/** FormFieldGroupHeader */ header) {
  this.f_header__org_patternfly_component_form_FormFieldGroup_ = header;
  if ($Equality.$same(this.f_body__org_patternfly_component_form_FormFieldGroup_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(header.m_element__elemental2_dom_HTMLElement());
  } else {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(header.m_element__elemental2_dom_HTMLElement(), this.f_body__org_patternfly_component_form_FormFieldGroup_.m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {FormFieldGroup} */
 m_addBody__org_patternfly_component_form_FormFieldGroupBody__org_patternfly_component_form_FormFieldGroup(/** FormFieldGroupBody */ body) {
  return this.m_add__org_patternfly_component_form_FormFieldGroupBody__org_patternfly_component_form_FormFieldGroup(body);
 }
 /** @nodts @return {FormFieldGroup} */
 m_add__org_patternfly_component_form_FormFieldGroupBody__org_patternfly_component_form_FormFieldGroup(/** FormFieldGroupBody */ body) {
  this.f_body__org_patternfly_component_form_FormFieldGroup_ = body;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(body.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {FormFieldGroup} */
 m_expandable__org_patternfly_component_form_FormFieldGroup() {
  return this.m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_form_FormFieldGroup(null);
 }
 /** @nodts @return {FormFieldGroup} */
 m_expandable__org_patternfly_handler_ToggleHandler__org_patternfly_component_form_FormFieldGroup(/** ToggleHandler<FormFieldGroup> */ toggleHandler) {
  if (!this.f_expandable__org_patternfly_component_form_FormFieldGroup_) {
   let toggleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Form__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([FormFieldGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroup, 'toggle'], j_l_String)));
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(toggleId), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_toggle__void();
   }), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Details'), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_titleId__org_patternfly_component_form_FormFieldGroup_) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toggleId)), Button)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_fieldGroup__org_patternfly_style_Classes, Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  }
  this.f_expandable__org_patternfly_component_form_FormFieldGroup_ = true;
  this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_ = toggleHandler;
  return this;
 }
 /** @nodts @return {FormFieldGroup} */
 m_that__org_patternfly_component_form_FormFieldGroup() {
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_form_FormFieldGroup_) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Form__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Form field group is not expandable.\n' + 'Please use FormFieldGroup.expandable() to make this an expandable field group.');
   return;
  }
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_, null) && !$Equality.$same(this.f_body__org_patternfly_component_form_FormFieldGroup_, null)) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_.m_element__elemental2_dom_HTMLElement(), this.f_body__org_patternfly_component_form_FormFieldGroup_.m_element__elemental2_dom_HTMLElement());
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_body__org_patternfly_component_form_FormFieldGroup_, false);
   if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_, null)) {
    this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!this.f_expandable__org_patternfly_component_form_FormFieldGroup_) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Form__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Form field group is not expandable.\n' + 'Please use FormFieldGroup.expandable() to make this an expandable field group.');
   return;
  }
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_, null) && !$Equality.$same(this.f_body__org_patternfly_component_form_FormFieldGroup_, null)) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_form_FormFieldGroup_.m_element__elemental2_dom_HTMLElement(), this.f_body__org_patternfly_component_form_FormFieldGroup_.m_element__elemental2_dom_HTMLElement());
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_body__org_patternfly_component_form_FormFieldGroup_, true);
   if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_, null)) {
    this.f_toggleHandler__org_patternfly_component_form_FormFieldGroup_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {FormFieldGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_FormFieldGroup();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  FormFieldGroup.$clinit = () =>{};
  FormFieldGroup.$loadModules();
  FormSubComponent.$clinit();
  Expandable.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormFieldGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FormFieldGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_form_FormFieldGroup = 'ffg';
Expandable.$markImplementor(FormFieldGroup);
Attachable.$markImplementor(FormFieldGroup);
$Util.$setClassMetadata(FormFieldGroup, 'org.patternfly.component.form.FormFieldGroup');

exports = FormFieldGroup;

//# sourceMappingURL=FormFieldGroup.js.map
