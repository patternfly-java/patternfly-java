goog.module('org.patternfly.component.jumplinks.JumpLinksItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const JumpLinksSubComponent = goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let JumpLinks = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinks$impl');
let JumpLinksList = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksList$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {JumpLinksSubComponent<HTMLLIElement, JumpLinksItem>}
 * @implements {WithText<HTMLLIElement, JumpLinksItem>}
 */
class JumpLinksItem extends JumpLinksSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_jumplinks_JumpLinksItem;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_;
  /**@type {JumpLinksList} @nodts*/
  this.f_list__org_patternfly_component_jumplinks_JumpLinksItem;
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ id, /** ?string */ text) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text);
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text).m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(href);
 }
 /** @nodts @return {JumpLinksItem} */
 static m_jumpLinksItem__java_lang_String__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ id, /** ?string */ text, /** ?string */ href, /** ?string */ target) {
  JumpLinksItem.$clinit();
  return JumpLinksItem.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(text).m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(href).m_target__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(target);
 }
 /** @nodts @return {!JumpLinksItem} */
 static $create__java_lang_String(/** ?string */ id) {
  JumpLinksItem.$clinit();
  let $instance = new JumpLinksItem();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinksItem__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinksItem__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_jumplinks_JumpLinksSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(JumpLinksItem.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksItem, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_jumplinks_JumpLinksItem = id;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_anchorElement__org_patternfly_component_jumplinks_JumpLinksItem_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let jumpLinks = /**@type {JumpLinks}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), JumpLinks));
   jumpLinks.m_select__org_patternfly_component_jumplinks_JumpLinksItem__void(this);
  }), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {JumpLinksItem} */
 m_addList__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/** JumpLinksList */ list) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(list);
 }
 /** @nodts @return {JumpLinksItem} */
 m_add__org_patternfly_component_jumplinks_JumpLinksList__org_patternfly_component_jumplinks_JumpLinksItem(/** JumpLinksList */ list) {
  this.f_list__org_patternfly_component_jumplinks_JumpLinksItem = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLLIElement}*/ ($Casts.$to(list.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_active__org_patternfly_component_jumplinks_JumpLinksItem() {
  return this.m_active__boolean__org_patternfly_component_jumplinks_JumpLinksItem(true);
 }
 /** @nodts @return {JumpLinksItem} */
 m_active__boolean__org_patternfly_component_jumplinks_JumpLinksItem(/** boolean */ active) {
  this.m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(active);
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_jumplinks_JumpLinksItem_.textContent = text;
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_href__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ href) {
  this.f_anchorElement__org_patternfly_component_jumplinks_JumpLinksItem_.href = href;
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_target__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(/** ?string */ target) {
  this.f_anchorElement__org_patternfly_component_jumplinks_JumpLinksItem_.target = target;
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_that__org_patternfly_component_jumplinks_JumpLinksItem() {
  return this;
 }
 /** @nodts @return {JumpLinksItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_jumplinks_JumpLinksItem(/** ComponentHandler<JumpLinksItem> */ actionHandler) {
  this.f_anchorElement__org_patternfly_component_jumplinks_JumpLinksItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(/** boolean */ selected) {
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
  if (selected) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_current__org_patternfly_core_Aria, 'location');
  } else {
   /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).removeAttribute(Aria.f_current__org_patternfly_core_Aria);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinksItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem(arg0);
 }
 /** @nodts */
 static $clinit() {
  JumpLinksItem.$clinit = () =>{};
  JumpLinksItem.$loadModules();
  JumpLinksSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinksItem;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  JumpLinks = goog.module.get('org.patternfly.component.jumplinks.JumpLinks$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
JumpLinksItem.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksItem = 'jli';
WithText.$markImplementor(JumpLinksItem);
$Util.$setClassMetadata(JumpLinksItem, 'org.patternfly.component.jumplinks.JumpLinksItem');

exports = JumpLinksItem;

//# sourceMappingURL=JumpLinksItem.js.map
