goog.module('org.patternfly.component.accordion.Accordion$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let AccordionItem = goog.forwardDeclare('org.patternfly.component.accordion.AccordionItem$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Accordion>}
 * @implements {Bordered<HTMLElement, Accordion>}
 * @implements {Attachable}
 */
class Accordion extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_dl__org_patternfly_component_accordion_Accordion = false;
  /**@type {number} @nodts*/
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = 0;
  /**@type {boolean} @nodts*/
  this.f_fixed__org_patternfly_component_accordion_Accordion = false;
  /**@type {boolean} @nodts*/
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = false;
  /**@type {Map<?string, AccordionItem>} @nodts*/
  this.f_items__org_patternfly_component_accordion_Accordion_;
  /**@type {ToggleHandler<AccordionItem>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_accordion_Accordion_;
 }
 /** @nodts @return {Accordion} */
 static m_accordion__org_patternfly_component_accordion_Accordion() {
  Accordion.$clinit();
  return Accordion.m_accordion__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 static m_accordion__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ definitionList) {
  Accordion.$clinit();
  return definitionList ? Accordion.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_dl__org_jboss_elemento_HTMLContainerBuilder()) : Accordion.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {!Accordion} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Accordion.$clinit();
  let $instance = new Accordion();
  $instance.$ctor__org_patternfly_component_accordion_Accordion__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_accordion_Accordion__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Accordion__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  this.f_dl__org_patternfly_component_accordion_Accordion = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().tagName, 'dl');
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = 3;
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = false;
  this.f_items__org_patternfly_component_accordion_Accordion_ = /**@type {!LinkedHashMap<?string, AccordionItem>}*/ (LinkedHashMap.$create__());
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  for (let $iterator = this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {AccordionItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), AccordionItem));
   {
    item.m_appendTo__org_patternfly_component_accordion_Accordion__void_$pp_org_patternfly_component_accordion(this);
   }
  }
 }
 /** @nodts @return {Accordion} */
 m_addItem__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(/** AccordionItem */ item) {
  return this.m_add__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(item);
 }
 /** @nodts @return {Accordion} */
 m_add__org_patternfly_component_accordion_AccordionItem__org_patternfly_component_accordion_Accordion(/** AccordionItem */ item) {
  this.f_items__org_patternfly_component_accordion_Accordion_.put(item.f_id__org_patternfly_component_accordion_AccordionItem, item);
  return this;
 }
 /** @nodts @return {Accordion} */
 m_fixed__org_patternfly_component_accordion_Accordion() {
  return this.m_fixed__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_fixed__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ fixed) {
  this.f_fixed__org_patternfly_component_accordion_Accordion = fixed;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_large__org_patternfly_component_accordion_Accordion() {
  return this.m_large__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_large__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ large) {
  if (large) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String)));
  } else {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Accordion} */
 m_singleExpand__org_patternfly_component_accordion_Accordion() {
  return this.m_singleExpand__boolean__org_patternfly_component_accordion_Accordion(true);
 }
 /** @nodts @return {Accordion} */
 m_singleExpand__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ singleExpand) {
  this.f_singleExpand__org_patternfly_component_accordion_Accordion = singleExpand;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_headingLevel__int__org_patternfly_component_accordion_Accordion(/** number */ headingLevel) {
  this.f_headingLevel__org_patternfly_component_accordion_Accordion = headingLevel;
  return this;
 }
 /** @nodts @return {Accordion} */
 m_that__org_patternfly_component_accordion_Accordion() {
  return this;
 }
 /** @nodts @return {Accordion} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_accordion_Accordion(/** ToggleHandler<AccordionItem> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_accordion_Accordion_ = toggleHandler;
  return this;
 }
 /** @nodts */
 m_collapse__java_lang_String__void(/** ?string */ itemId) {
  this.m_collapse__java_lang_String__boolean__void(itemId, true);
 }
 /** @nodts */
 m_collapse__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  let item = /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.get(itemId), AccordionItem));
  if (!$Equality.$same(item, null)) {
   this.m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(item, fireEvent);
  }
 }
 /** @nodts */
 m_expand__java_lang_String__void(/** ?string */ itemId) {
  this.m_expand__java_lang_String__boolean__void(itemId, true);
 }
 /** @nodts */
 m_expand__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  let item = /**@type {AccordionItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_accordion_Accordion_.get(itemId), AccordionItem));
  if (!$Equality.$same(item, null)) {
   this.m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(item, fireEvent);
  }
 }
 /** @nodts */
 m_collapseItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(/** AccordionItem */ item, /** boolean */ fireEvent) {
  item.m_collapse__void_$pp_org_patternfly_component_accordion();
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_accordion_Accordion_, null)) {
   this.f_toggleHandler__org_patternfly_component_accordion_Accordion_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, false);
  }
 }
 /** @nodts */
 m_expandItem__org_patternfly_component_accordion_AccordionItem__boolean__void_$pp_org_patternfly_component_accordion(/** AccordionItem */ item, /** boolean */ fireEvent) {
  item.m_expand__void_$pp_org_patternfly_component_accordion();
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_accordion_Accordion_, null)) {
   this.f_toggleHandler__org_patternfly_component_accordion_Accordion_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
  }
  if (this.f_singleExpand__org_patternfly_component_accordion_Accordion) {
   for (let $iterator = this.f_items__org_patternfly_component_accordion_Accordion_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let otherItem = /**@type {AccordionItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), AccordionItem));
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(otherItem.f_id__org_patternfly_component_accordion_AccordionItem, item.f_id__org_patternfly_component_accordion_AccordionItem)) {
      continue;
     }
     otherItem.m_collapse__void_$pp_org_patternfly_component_accordion();
    }
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_accordion_Accordion();
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Bridge method.
 /** @final @override @nodts @return {Accordion} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_bordered__org_patternfly_component_accordion_Accordion() {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), Accordion));
 }
 //Default method forwarding stub.
 /** @nodts @return {Accordion} */
 m_bordered__boolean__org_patternfly_component_accordion_Accordion(/** boolean */ arg0) {
  return /**@type {Accordion}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Accordion));
 }
 /** @nodts */
 static $clinit() {
  Accordion.$clinit = () =>{};
  Accordion.$loadModules();
  BaseComponent.$clinit();
  Bordered.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Accordion;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  AccordionItem = goog.module.get('org.patternfly.component.accordion.AccordionItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Bordered.$markImplementor(Accordion);
Attachable.$markImplementor(Accordion);
$Util.$setClassMetadata(Accordion, 'org.patternfly.component.accordion.Accordion');

exports = Accordion;

//# sourceMappingURL=Accordion.js.map
