goog.module('org.patternfly.component.card.CardExpandableContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CardBody = goog.forwardDeclare('org.patternfly.component.card.CardBody$impl');
let CardFooter = goog.forwardDeclare('org.patternfly.component.card.CardFooter$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardExpandableContent>}
 * @implements {NoFill<HTMLDivElement, CardExpandableContent>}
 */
class CardExpandableContent extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CardExpandableContent} */
 static m_cardExpandableContent__org_patternfly_component_card_CardExpandableContent() {
  CardExpandableContent.$clinit();
  return CardExpandableContent.$create__();
 }
 /** @nodts @return {!CardExpandableContent} */
 static $create__() {
  CardExpandableContent.$clinit();
  let $instance = new CardExpandableContent();
  $instance.$ctor__org_patternfly_component_card_CardExpandableContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardExpandableContent__void() {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CardExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardExpandableContent, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e) =>{
   let e_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(e, $Overlay));
   e_1.hidden = true;
  })), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CardExpandableContent} */
 m_addBody__org_patternfly_component_card_CardBody__org_patternfly_component_card_CardExpandableContent(/** CardBody */ body) {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), CardExpandableContent));
 }
 /** @nodts @return {CardExpandableContent} */
 m_addFooter__org_patternfly_component_card_CardFooter__org_patternfly_component_card_CardExpandableContent(/** CardFooter */ footer) {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(footer), CardExpandableContent));
 }
 /** @nodts @return {CardExpandableContent} */
 m_that__org_patternfly_component_card_CardExpandableContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardExpandableContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardExpandableContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardExpandableContent} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), CardExpandableContent));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardExpandableContent} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CardExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardExpandableContent} */
 m_noFill__org_patternfly_component_card_CardExpandableContent() {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), CardExpandableContent));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardExpandableContent} */
 m_noFill__boolean__org_patternfly_component_card_CardExpandableContent(/** boolean */ arg0) {
  return /**@type {CardExpandableContent}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CardExpandableContent));
 }
 /** @nodts */
 static $clinit() {
  CardExpandableContent.$clinit = () =>{};
  CardExpandableContent.$loadModules();
  CardSubComponent.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardExpandableContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CardExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardExpandableContent = 'cec';
NoFill.$markImplementor(CardExpandableContent);
$Util.$setClassMetadata(CardExpandableContent, 'org.patternfly.component.card.CardExpandableContent');

exports = CardExpandableContent;

//# sourceMappingURL=CardExpandableContent.js.map
