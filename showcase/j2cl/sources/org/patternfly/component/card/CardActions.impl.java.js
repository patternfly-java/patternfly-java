goog.module('org.patternfly.component.card.CardActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CardSubComponent = goog.require('org.patternfly.component.card.CardSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let CardSelectableActions = goog.forwardDeclare('org.patternfly.component.card.CardSelectableActions$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CardSubComponent<HTMLDivElement, CardActions>}
 */
class CardActions extends CardSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CardSelectableActions} @nodts*/
  this.f_selectableActions__org_patternfly_component_card_CardActions;
  /**@type {Card} @nodts*/
  this.f_card__org_patternfly_component_card_CardActions_;
 }
 /** @nodts @return {CardActions} */
 static m_cardActions__org_patternfly_component_card_CardActions() {
  CardActions.$clinit();
  return CardActions.$create__();
 }
 /** @nodts @return {!CardActions} */
 static $create__() {
  CardActions.$clinit();
  let $instance = new CardActions();
  $instance.$ctor__org_patternfly_component_card_CardActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardActions__void() {
  this.$ctor__org_patternfly_component_card_CardSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CardActions.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardActions, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CardActions} */
 m_addDropdown__org_patternfly_component_menu_Dropdown__org_patternfly_component_card_CardActions(/** Dropdown */ dropdown) {
  return /**@type {CardActions}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dropdown), CardActions));
 }
 /** @nodts @return {CardActions} */
 m_addCheckbox__org_patternfly_component_form_Checkbox__org_patternfly_component_card_CardActions(/** Checkbox */ checkbox) {
  return this.m_add__org_patternfly_component_form_Checkbox__org_patternfly_component_card_CardActions(checkbox);
 }
 /** @nodts @return {CardActions} */
 m_add__org_patternfly_component_form_Checkbox__org_patternfly_component_card_CardActions(/** Checkbox */ checkbox) {
  return /**@type {CardActions}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(checkbox.m_standalone__org_patternfly_component_form_Checkbox().m_element__elemental2_dom_HTMLElement()), CardActions));
 }
 /** @nodts @return {CardActions} */
 m_addSelectableActions__org_patternfly_component_card_CardSelectableActions__org_patternfly_component_card_CardActions(/** CardSelectableActions */ selectableActions) {
  return this.m_add__org_patternfly_component_card_CardSelectableActions__org_patternfly_component_card_CardActions(selectableActions);
 }
 /** @nodts @return {CardActions} */
 m_add__org_patternfly_component_card_CardSelectableActions__org_patternfly_component_card_CardActions(/** CardSelectableActions */ selectableActions) {
  this.f_selectableActions__org_patternfly_component_card_CardActions = selectableActions;
  return /**@type {CardActions}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(selectableActions.m_element__elemental2_dom_HTMLElement(), $Overlay))), CardActions));
 }
 /** @nodts @return {CardActions} */
 m_noOffset__org_patternfly_component_card_CardActions() {
  return this.m_noOffset__boolean__org_patternfly_component_card_CardActions(true);
 }
 /** @nodts @return {CardActions} */
 m_noOffset__boolean__org_patternfly_component_card_CardActions(/** boolean */ noOffset) {
  return /**@type {CardActions}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_noOffset__org_patternfly_style_Classes, noOffset), CardActions));
 }
 /** @nodts @return {CardActions} */
 m_that__org_patternfly_component_card_CardActions() {
  return this;
 }
 /** @nodts */
 m_disabled__boolean__void_$pp_org_patternfly_component_card(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_selectableActions__org_patternfly_component_card_CardActions, null)) {
   this.f_selectableActions__org_patternfly_component_card_CardActions.m_disabled__boolean__void_$pp_org_patternfly_component_card(disabled);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {CardActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardActions();
 }
 /** @nodts */
 static $clinit() {
  CardActions.$clinit = () =>{};
  CardActions.$loadModules();
  CardSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CardActions.f_SUB_COMPONENT_NAME__org_patternfly_component_card_CardActions = 'ca';
$Util.$setClassMetadata(CardActions, 'org.patternfly.component.card.CardActions');

exports = CardActions;

//# sourceMappingURL=CardActions.js.map
