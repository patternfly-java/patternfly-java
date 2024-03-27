goog.module('org.patternfly.component.card.CardTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardTitle>}
 * @implements {ElementDelegate<HTMLDivElement, CardTitle>}
 */
class CardTitle extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_titleText__org_patternfly_component_card_CardTitle_;
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__org_patternfly_component_card_CardTitle() {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(null, - 1 | 0);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ text) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(text, - 1 | 0);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__int__org_patternfly_component_card_CardTitle(/** number */ level) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(null, level);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__java_lang_String__int__org_patternfly_component_card_CardTitle(/** ?string */ text, /** number */ level) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(text, level);
 }
 /** @nodts @return {!CardTitle} */
 static $create__java_lang_String__int(/** ?string */ text, /** number */ level) {
  CardTitle.$clinit();
  let $instance = new CardTitle();
  $instance.$ctor__org_patternfly_component_card_CardTitle__java_lang_String__int__void(text, level);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardTitle__java_lang_String__int__void(/** ?string */ text, /** number */ level) {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CardTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardTitle, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (level > 0) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_titleText__org_patternfly_component_card_CardTitle_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(level, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)));
  } else {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_titleText__org_patternfly_component_card_CardTitle_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  if (!$Equality.$same(text, null)) {
   this.f_titleText__org_patternfly_component_card_CardTitle_.textContent = text;
  }
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_titleText__org_patternfly_component_card_CardTitle_;
 }
 /** @nodts @return {CardTitle} */
 m_that__org_patternfly_component_card_CardTitle() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardTitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardTitle} */
 m_add__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardTitle} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_card_CardTitle(/** SafeHtml */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardTitle} */
 m_textContent__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardTitle} */
 m_textNode__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardTitle} */
 m_add__elemental2_dom_Node__org_patternfly_component_card_CardTitle(/** Node */ arg0) {
  return /**@type {CardTitle}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), CardTitle));
 }
 /** @nodts */
 static $clinit() {
  CardTitle.$clinit = () =>{};
  CardTitle.$loadModules();
  CardSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardTitle;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CardTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardTitle = 'ct';
ElementDelegate.$markImplementor(CardTitle);
$Util.$setClassMetadata(CardTitle, 'org.patternfly.component.card.CardTitle');

exports = CardTitle;

//# sourceMappingURL=CardTitle.js.map
