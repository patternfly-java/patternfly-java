goog.module('org.patternfly.component.card.CardBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');
const NoFill = goog.require('org.patternfly.style.Modifiers.NoFill$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardBody>}
 * @implements {NoFill<HTMLDivElement, CardBody>}
 */
class CardBody extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CardBody} */
 static m_cardBody__org_patternfly_component_card_CardBody() {
  CardBody.$clinit();
  return CardBody.$create__();
 }
 /** @nodts @return {!CardBody} */
 static $create__() {
  CardBody.$clinit();
  let $instance = new CardBody();
  $instance.$ctor__org_patternfly_component_card_CardBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardBody__void() {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CardBody.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CardBody} */
 m_that__org_patternfly_component_card_CardBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardBody} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {CardBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), CardBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardBody} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {CardBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CardBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardBody} */
 m_noFill__org_patternfly_component_card_CardBody() {
  return /**@type {CardBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), CardBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {CardBody} */
 m_noFill__boolean__org_patternfly_component_card_CardBody(/** boolean */ arg0) {
  return /**@type {CardBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_style_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), CardBody));
 }
 /** @nodts */
 static $clinit() {
  CardBody.$clinit = () =>{};
  CardBody.$loadModules();
  CardSubComponent.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardBody;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CardBody.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardBody = 'cb';
NoFill.$markImplementor(CardBody);
$Util.$setClassMetadata(CardBody, 'org.patternfly.component.card.CardBody');

exports = CardBody;

//# sourceMappingURL=CardBody.js.map
