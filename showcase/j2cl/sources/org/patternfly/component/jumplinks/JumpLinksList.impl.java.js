goog.module('org.patternfly.component.jumplinks.JumpLinksList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JumpLinksSubComponent = goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {JumpLinksSubComponent<HTMLLIElement, JumpLinksList>}
 */
class JumpLinksList extends JumpLinksSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, JumpLinksItem>} @nodts*/
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList;
 }
 /** @nodts @return {JumpLinksList} */
 static m_jumpLinksList__org_patternfly_component_jumplinks_JumpLinksList() {
  JumpLinksList.$clinit();
  return JumpLinksList.$create__();
 }
 /** @nodts @return {!JumpLinksList} */
 static $create__() {
  JumpLinksList.$clinit();
  let $instance = new JumpLinksList();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinksList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinksList__void() {
  this.$ctor__org_patternfly_component_jumplinks_JumpLinksSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(JumpLinksList.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksList, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList = /**@type {!HashMap<?string, JumpLinksItem>}*/ (HashMap.$create__());
 }
 /** @nodts @template T @return {JumpLinksList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_jumplinks_JumpLinksList(/** Iterable<T> */ items, /** j_u_function_Function<T, JumpLinksItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let bi = /**@type {JumpLinksItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), JumpLinksItem));
    this.m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(bi);
   }
  }
  return this;
 }
 /** @nodts @return {JumpLinksList} */
 m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/** JumpLinksItem */ item) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(item);
 }
 /** @nodts @return {JumpLinksList} */
 m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinksList(/** JumpLinksItem */ item) {
  this.f_items__org_patternfly_component_jumplinks_JumpLinksList.put(item.f_id__org_patternfly_component_jumplinks_JumpLinksItem, item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {JumpLinksList} */
 m_that__org_patternfly_component_jumplinks_JumpLinksList() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinksList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinksList();
 }
 /** @nodts */
 static $clinit() {
  JumpLinksList.$clinit = () =>{};
  JumpLinksList.$loadModules();
  JumpLinksSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinksList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
JumpLinksList.f_SUB_COMPONENT_NAME__org_patternfly_component_jumplinks_JumpLinksList = 'jll';
$Util.$setClassMetadata(JumpLinksList, 'org.patternfly.component.jumplinks.JumpLinksList');

exports = JumpLinksList;

//# sourceMappingURL=JumpLinksList.js.map
