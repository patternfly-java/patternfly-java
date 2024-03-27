goog.module('org.patternfly.component.accordion.AccordionItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const AccordionSubComponent = goog.require('org.patternfly.component.accordion.AccordionSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Expandable = goog.forwardDeclare('org.patternfly.component.Expandable$impl');
let Accordion = goog.forwardDeclare('org.patternfly.component.accordion.Accordion$impl');
let AccordionItemBody = goog.forwardDeclare('org.patternfly.component.accordion.AccordionItemBody$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AccordionSubComponent<HTMLDivElement, AccordionItem>}
 * @implements {ElementDelegate<HTMLDivElement, AccordionItem>}
 * @implements {WithText<HTMLDivElement, AccordionItem>}
 */
class AccordionItem extends AccordionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_accordion_AccordionItem;
  /**@type {AccordionItemBody} @nodts*/
  this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_;
  /**@type {List<AccordionItemBody>} @nodts*/
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_accordion_AccordionItem_;
  /**@type {boolean} @nodts*/
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = false;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_accordion_AccordionItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_accordion_AccordionItem_;
 }
 /** @nodts @return {AccordionItem} */
 static m_accordionItem__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ id) {
  AccordionItem.$clinit();
  return AccordionItem.$create__java_lang_String__java_lang_String(id, null);
 }
 /** @nodts @return {AccordionItem} */
 static m_accordionItem__java_lang_String__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ id, /** ?string */ text) {
  AccordionItem.$clinit();
  return AccordionItem.$create__java_lang_String__java_lang_String(id, text);
 }
 /** @nodts @return {!AccordionItem} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  AccordionItem.$clinit();
  let $instance = new AccordionItem();
  $instance.$ctor__org_patternfly_component_accordion_AccordionItem__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_accordion_AccordionItem__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__org_patternfly_component_accordion_AccordionSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(AccordionItem.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItem, /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_id__org_patternfly_component_accordion_AccordionItem = id;
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = false;
  this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_ = AccordionItemBody.$create__();
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_ = /**@type {!ArrayList<AccordionItemBody>}*/ (ArrayList.$create__());
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_.add(this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_);
  if (!$Equality.$same(text, null)) {
   this.m_text__java_lang_String__org_patternfly_component_accordion_AccordionItem(text);
  }
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_defaultBody__org_patternfly_component_accordion_AccordionItem_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
 }
 /** @nodts @return {AccordionItem} */
 m_addBody__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(/** AccordionItemBody */ body) {
  return this.m_add__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(body);
 }
 /** @nodts @return {AccordionItem} */
 m_add__org_patternfly_component_accordion_AccordionItemBody__org_patternfly_component_accordion_AccordionItem(/** AccordionItemBody */ body) {
  this.f_bodies__org_patternfly_component_accordion_AccordionItem_.add(body);
  return this;
 }
 /** @nodts @return {AccordionItem} */
 m_expanded__org_patternfly_component_accordion_AccordionItem() {
  this.f_expanded__org_patternfly_component_accordion_AccordionItem_ = true;
  return this;
 }
 /** @nodts @return {AccordionItem} */
 m_text__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ text) {
  this.f_text__org_patternfly_component_accordion_AccordionItem_ = text;
  if (!$Equality.$same(this.f_textElement__org_patternfly_component_accordion_AccordionItem_, null) && !$Equality.$same(text, null)) {
   this.f_textElement__org_patternfly_component_accordion_AccordionItem_.textContent = text;
  }
  return this;
 }
 /** @nodts @return {AccordionItem} */
 m_that__org_patternfly_component_accordion_AccordionItem() {
  return this;
 }
 /** @nodts */
 m_appendTo__org_patternfly_component_accordion_Accordion__void_$pp_org_patternfly_component_accordion(/** Accordion */ accordion) {
  let textId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Accordion__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['text'], j_l_String)));
  let toggle = accordion.f_dl__org_patternfly_component_accordion_Accordion ? Elements.m_dt__org_jboss_elemento_HTMLContainerBuilder() : Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(accordion.f_headingLevel__org_patternfly_component_accordion_Accordion);
  toggle.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__org_patternfly_component_accordion_Accordion__void_$p_org_patternfly_component_accordion_AccordionItem(accordion);
  }), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_accordion_AccordionItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(textId), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  this.m_text__java_lang_String__org_patternfly_component_accordion_AccordionItem(this.f_text__org_patternfly_component_accordion_AccordionItem_);
  let content = accordion.f_dl__org_patternfly_component_accordion_Accordion ? Elements.m_dd__org_jboss_elemento_HTMLContainerBuilder() : Elements.m_div__org_jboss_elemento_HTMLContainerBuilder();
  /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(content.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, textId);
  if (accordion.f_fixed__org_patternfly_component_accordion_Accordion) {
   content.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_fixed__org_patternfly_style_Classes)], j_l_String)));
  }
  content.m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this.f_bodies__org_patternfly_component_accordion_AccordionItem_);
  this.f_contentElement__org_patternfly_component_accordion_AccordionItem_ = /**@type {HTMLElement}*/ (content.m_element__elemental2_dom_HTMLElement());
  if (this.f_expanded__org_patternfly_component_accordion_AccordionItem_) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, true);
   this.f_contentElement__org_patternfly_component_accordion_AccordionItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  } else {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__void(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, true);
  }
  accordion.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {!Array<IsElement<?>>}*/ ($Arrays.$init([toggle, content], IsElement)));
 }
 /** @nodts */
 m_toggle__org_patternfly_component_accordion_Accordion__void_$p_org_patternfly_component_accordion_AccordionItem(/** Accordion */ accordion) {
  if (Expandable.m_expanded__elemental2_dom_Element__boolean(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_)) {
   accordion.m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(this, true);
  } else {
   accordion.m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(this, true);
  }
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_accordion() {
  if (!$Equality.$same(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, null) && !$Equality.$same(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, null)) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_);
   this.f_contentElement__org_patternfly_component_accordion_AccordionItem_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_accordion() {
  if (!$Equality.$same(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, null) && !$Equality.$same(this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, null)) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.f_contentElement__org_patternfly_component_accordion_AccordionItem_, this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_, this.f_contentElement__org_patternfly_component_accordion_AccordionItem_);
   this.f_contentElement__org_patternfly_component_accordion_AccordionItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
   this.f_toggleElement__org_patternfly_component_accordion_AccordionItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_accordion_AccordionItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_accordion_AccordionItem(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_add__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_accordion_AccordionItem(/** SafeHtml */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_textContent__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_textNode__java_lang_String__org_patternfly_component_accordion_AccordionItem(/** ?string */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {AccordionItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_accordion_AccordionItem(/** Node */ arg0) {
  return /**@type {AccordionItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), AccordionItem));
 }
 /** @nodts */
 static $clinit() {
  AccordionItem.$clinit = () =>{};
  AccordionItem.$loadModules();
  AccordionSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AccordionItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Expandable = goog.module.get('org.patternfly.component.Expandable$impl');
  AccordionItemBody = goog.module.get('org.patternfly.component.accordion.AccordionItemBody$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
AccordionItem.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItem = 'aci';
ElementDelegate.$markImplementor(AccordionItem);
WithText.$markImplementor(AccordionItem);
$Util.$setClassMetadata(AccordionItem, 'org.patternfly.component.accordion.AccordionItem');

exports = AccordionItem;

//# sourceMappingURL=AccordionItem.js.map
