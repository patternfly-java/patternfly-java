goog.module('org.patternfly.component.card.CardFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardFooter>}
 */
class CardFooter extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CardFooter} */
 static m_cardFooter__org_patternfly_component_card_CardFooter() {
  CardFooter.$clinit();
  return CardFooter.$create__();
 }
 /** @nodts @return {!CardFooter} */
 static $create__() {
  CardFooter.$clinit();
  let $instance = new CardFooter();
  $instance.$ctor__org_patternfly_component_card_CardFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardFooter__void() {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CardFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardFooter, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CardFooter} */
 m_that__org_patternfly_component_card_CardFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardFooter();
 }
 /** @nodts */
 static $clinit() {
  CardFooter.$clinit = () =>{};
  CardFooter.$loadModules();
  CardSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardFooter;
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
CardFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardFooter = 'cf';
$Util.$setClassMetadata(CardFooter, 'org.patternfly.component.card.CardFooter');

exports = CardFooter;

//# sourceMappingURL=CardFooter.js.map
