goog.module('org.patternfly.component.expandable.ExpandableSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ExpandableSectionContent = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionContent$impl');
let ExpandableSectionToggle = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, ExpandableSection>}
 * @implements {Attachable}
 * @implements {Expandable<HTMLDivElement, ExpandableSection>}
 */
class ExpandableSection extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {number} @nodts*/
  this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = 0;
  /**@type {?string} @nodts*/
  this.f_detachedFromId__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {ExpandableSectionToggle} @nodts*/
  this.f_toggle__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {ExpandableSectionContent} @nodts*/
  this.f_content__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {ToggleHandler<ExpandableSection>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {HTMLElement} @nodts*/
  this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_;
 }
 /** @nodts @return {ExpandableSection} */
 static m_expandableSection__org_patternfly_component_expandable_ExpandableSection() {
  ExpandableSection.$clinit();
  return ExpandableSection.$create__java_lang_String(null);
 }
 /** @nodts @return {ExpandableSection} */
 static m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection(/** ?string */ id) {
  ExpandableSection.$clinit();
  return ExpandableSection.$create__java_lang_String(id);
 }
 /** @nodts @return {!ExpandableSection} */
 static $create__java_lang_String(/** ?string */ id) {
  ExpandableSection.$clinit();
  let $instance = new ExpandableSection();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSection__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSection__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.$init__void_$p_org_patternfly_component_expandable_ExpandableSection();
  this.f_id__org_patternfly_component_expandable_ExpandableSection_ = $Equality.$same(id, null) ? Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))) : id;
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, this.f_content__org_patternfly_component_expandable_ExpandableSection_.f_id__org_patternfly_component_expandable_ExpandableSectionContent);
   this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_id__org_patternfly_component_expandable_ExpandableSectionToggle);
  }
  if (this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ > 0) {
   if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_removeIcon__void_$pp_org_patternfly_component_expandable();
   }
   if (this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ != ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection && !$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
    Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['m-truncate__content', Variables.f_LineClamp__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__int__org_jboss_elemento_TypedBuilder(this.f_content__org_patternfly_component_expandable_ExpandableSection_, this.f_truncate__org_patternfly_component_expandable_ExpandableSection_);
   }
  }
  if (!$Equality.$same(this.f_detachedFromId__org_patternfly_component_expandable_ExpandableSection_, null)) {
   let detachedElement = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_expandableSectionId__org_patternfly_core_Dataset, this.f_detachedFromId__org_patternfly_component_expandable_ExpandableSection_));
   if (!$Equality.$same(detachedElement, null)) {
    let detached = /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(detachedElement));
    let detachedToggleElement = detached.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))));
    this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_ = detached.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))));
    if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_.id, null)) {
     this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_.id);
     /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_id__org_patternfly_component_expandable_ExpandableSectionToggle);
    } else if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(detachedToggleElement, null) && !$Equality.$same(detachedToggleElement.id, null)) {
     /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(detachedToggleElement)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, this.f_content__org_patternfly_component_expandable_ExpandableSection_.f_id__org_patternfly_component_expandable_ExpandableSectionContent);
     this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, detachedToggleElement.id);
    }
   }
  }
 }
 /** @nodts @return {ExpandableSection} */
 m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionToggle */ toggle) {
  return this.m_add__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(toggle);
 }
 /** @nodts @return {ExpandableSection} */
 m_add__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionToggle */ toggle) {
  this.f_toggle__org_patternfly_component_expandable_ExpandableSection_ = toggle;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLButtonElement}*/ ($Casts.$to(toggle.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionContent */ content) {
  return this.m_add__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(content);
 }
 /** @nodts @return {ExpandableSection} */
 m_add__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionContent */ content) {
  this.f_content__org_patternfly_component_expandable_ExpandableSection_ = content;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_indented__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_indented__boolean__org_patternfly_component_expandable_ExpandableSection(true);
 }
 /** @nodts @return {ExpandableSection} */
 m_indented__boolean__org_patternfly_component_expandable_ExpandableSection(/** boolean */ indented) {
  if (indented) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indented__org_patternfly_style_Classes));
  } else {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indented__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_disclosure__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_disclosure__boolean__org_patternfly_component_expandable_ExpandableSection(true);
 }
 /** @nodts @return {ExpandableSection} */
 m_disclosure__boolean__org_patternfly_component_expandable_ExpandableSection(/** boolean */ disclosure) {
  if (disclosure) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes));
  } else {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_truncate__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_truncate__int__org_patternfly_component_expandable_ExpandableSection(ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection);
 }
 /** @nodts @return {ExpandableSection} */
 m_truncate__int__org_patternfly_component_expandable_ExpandableSection(/** number */ truncate) {
  if (truncate > 0) {
   this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = truncate;
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_detachedFrom__java_lang_String__org_patternfly_component_expandable_ExpandableSection(/** ?string */ detachedFromId) {
  this.f_detachedFromId__org_patternfly_component_expandable_ExpandableSection_ = detachedFromId;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_detached__org_patternfly_style_Classes)], j_l_String)));
  this.m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_expandableSectionId__org_patternfly_core_Dataset, this.f_id__org_patternfly_component_expandable_ExpandableSection_);
  this.m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_expandableSectionTarget__org_patternfly_core_Dataset, detachedFromId);
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_that__org_patternfly_component_expandable_ExpandableSection() {
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_expandable_ExpandableSection(/** ToggleHandler<ExpandableSection> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_ = toggleHandler;
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_collapse__void_$pp_org_patternfly_component_expandable();
  }
  if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).hidden = true;
  } else if (!$Equality.$same(this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_.hidden = true;
  }
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_expand__void_$pp_org_patternfly_component_expandable();
  }
  if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).hidden = false;
  } else if (!$Equality.$same(this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_detachedContentElement__org_patternfly_component_expandable_ExpandableSection_.hidden = false;
  }
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts @return {ExpandableSectionContent} */
 m_content__org_patternfly_component_expandable_ExpandableSectionContent() {
  return this.f_content__org_patternfly_component_expandable_ExpandableSection_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSection();
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
 /** @private @nodts */
 $init__void_$p_org_patternfly_component_expandable_ExpandableSection() {
  this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = 0;
 }
 /** @nodts */
 static $clinit() {
  ExpandableSection.$clinit = () =>{};
  ExpandableSection.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Expandable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSection;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection = 3;
Attachable.$markImplementor(ExpandableSection);
Expandable.$markImplementor(ExpandableSection);
$Util.$setClassMetadata(ExpandableSection, 'org.patternfly.component.expandable.ExpandableSection');

exports = ExpandableSection;

//# sourceMappingURL=ExpandableSection.js.map
