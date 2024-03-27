goog.module('org.patternfly.component.page.PageMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageMainGroup = goog.forwardDeclare('org.patternfly.component.page.PageMainGroup$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLElement, PageMain>}
 */
class PageMain extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMain} */
 static m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(/** ?string */ id) {
  PageMain.$clinit();
  return PageMain.$create__java_lang_String(id);
 }
 /** @nodts @return {!PageMain} */
 static $create__java_lang_String(/** ?string */ id) {
  PageMain.$clinit();
  let $instance = new PageMain();
  $instance.$ctor__org_patternfly_component_page_PageMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PageMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMain, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_main__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Classes.f_main__org_patternfly_style_Classes), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_mousedown__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_onMainClick__void_$p_org_patternfly_component_page_PageMain();
  });
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_touchstart__org_jboss_elemento_EventType, (e_2) =>{
   let e_3 = /**@type {TouchEvent}*/ ($Casts.$to(e_2, TouchEvent_$Overlay));
   this.m_onMainClick__void_$p_org_patternfly_component_page_PageMain();
  });
 }
 /** @nodts @return {PageMain} */
 m_addGroup__org_patternfly_component_page_PageMainGroup__org_patternfly_component_page_PageMain(/** PageMainGroup */ group) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), PageMain));
 }
 /** @nodts @template E, P @return {PageMain} */
 m_addSection__org_patternfly_component_page_PageSection__org_patternfly_component_page_PageMain(/** PageSection<E, P> */ pageSection) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(pageSection), PageMain));
 }
 /** @nodts @return {PageMain} */
 m_that__org_patternfly_component_page_PageMain() {
  return this;
 }
 /** @nodts */
 m_replace__org_jboss_elemento_IsElement__void(/** IsElement<?> */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
 }
 /** @nodts */
 m_replace__elemental2_dom_Element__void(/** Element */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_Element__void(/** Array<Element> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_HTMLElement__void(/** Array<HTMLElement> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_org_jboss_elemento_IsElement__void(/** Array<IsElement<?>> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
   }
  }
 }
 /** @nodts */
 m_replace__java_lang_Iterable__void(/** Iterable<?> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if ($Overlay.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(element, $Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
 }
 /** @nodts */
 m_onMainClick__void_$p_org_patternfly_component_page_PageMain() {
  if (Page.m_page__org_patternfly_component_page_Page().m_underXl__boolean_$pp_org_patternfly_component_page() && !$Equality.$same(Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar(), null) && Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar().m_expanded__boolean()) {
   Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar().m_collapse__void();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMain();
 }
 /** @nodts */
 static $clinit() {
  PageMain.$clinit = () =>{};
  PageMain.$loadModules();
  PageSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMain;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  TouchEvent_$Overlay = goog.module.get('elemental2.dom.TouchEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMain.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMain = 'pm';
$Util.$setClassMetadata(PageMain, 'org.patternfly.component.page.PageMain');

exports = PageMain;

//# sourceMappingURL=PageMain.js.map
