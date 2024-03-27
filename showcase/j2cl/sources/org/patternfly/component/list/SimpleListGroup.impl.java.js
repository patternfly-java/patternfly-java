goog.module('org.patternfly.component.list.SimpleListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const SimpleListSubComponent = goog.require('org.patternfly.component.list.SimpleListSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let SimpleListItem = goog.forwardDeclare('org.patternfly.component.list.SimpleListItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SimpleListSubComponent<HTMLElement, SimpleListGroup>}
 * @implements {WithText<HTMLElement, SimpleListGroup>}
 * @implements {ElementDelegate<HTMLElement, SimpleListGroup>}
 */
class SimpleListGroup extends SimpleListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, SimpleListItem>} @nodts*/
  this.f_items__org_patternfly_component_list_SimpleListGroup;
  /**@type {HTMLElement} @nodts*/
  this.f_headerElement__org_patternfly_component_list_SimpleListGroup_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ulElement__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @nodts @return {SimpleListGroup} */
 static m_simpleListGroup__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ text) {
  SimpleListGroup.$clinit();
  return SimpleListGroup.$create__java_lang_String(text);
 }
 /** @nodts @return {!SimpleListGroup} */
 static $create__java_lang_String(/** ?string */ text) {
  SimpleListGroup.$clinit();
  let $instance = new SimpleListGroup();
  $instance.$ctor__org_patternfly_component_list_SimpleListGroup__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_SimpleListGroup__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_list_SimpleListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(SimpleListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListGroup, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_list_SimpleListGroup = /**@type {!HashMap<?string, SimpleListItem>}*/ (HashMap.$create__());
  let headerId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(SimpleListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListGroup, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_headerElement__org_patternfly_component_list_SimpleListGroup_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(headerId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_ulElement__org_patternfly_component_list_SimpleListGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, headerId), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_headerElement__org_patternfly_component_list_SimpleListGroup_;
 }
 /** @nodts @template T @return {SimpleListGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleListGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, SimpleListItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let sli = /**@type {SimpleListItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), SimpleListItem));
    this.m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(sli);
   }
  }
  return this;
 }
 /** @nodts @return {SimpleListGroup} */
 m_addItem__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(/** SimpleListItem */ item) {
  return this.m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(item);
 }
 /** @nodts @return {SimpleListGroup} */
 m_add__org_patternfly_component_list_SimpleListItem__org_patternfly_component_list_SimpleListGroup(/** SimpleListItem */ item) {
  this.f_items__org_patternfly_component_list_SimpleListGroup.put(item.f_id__org_patternfly_component_list_SimpleListItem, item);
  this.f_ulElement__org_patternfly_component_list_SimpleListGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {SimpleListGroup} */
 m_text__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ text) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(this.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListGroup));
 }
 /** @nodts @return {SimpleListGroup} */
 m_that__org_patternfly_component_list_SimpleListGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleListGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_list_SimpleListGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListGroup} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_add__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_list_SimpleListGroup(/** SafeHtml */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_textContent__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_textNode__java_lang_String__org_patternfly_component_list_SimpleListGroup(/** ?string */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListGroup} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_SimpleListGroup(/** Node */ arg0) {
  return /**@type {SimpleListGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListGroup));
 }
 /** @nodts */
 static $clinit() {
  SimpleListGroup.$clinit = () =>{};
  SimpleListGroup.$loadModules();
  SimpleListSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  SimpleListItem = goog.module.get('org.patternfly.component.list.SimpleListItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
SimpleListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListGroup = 'slg';
WithText.$markImplementor(SimpleListGroup);
ElementDelegate.$markImplementor(SimpleListGroup);
$Util.$setClassMetadata(SimpleListGroup, 'org.patternfly.component.list.SimpleListGroup');

exports = SimpleListGroup;

//# sourceMappingURL=SimpleListGroup.js.map
