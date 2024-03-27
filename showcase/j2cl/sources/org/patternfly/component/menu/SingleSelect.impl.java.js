goog.module('org.patternfly.component.menu.SingleSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, SingleSelect>}
 */
class SingleSelect extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SingleSelect} */
 static m_singleSelect__org_patternfly_component_menu_SingleSelect() {
  SingleSelect.$clinit();
  return SingleSelect.$create__();
 }
 /** @nodts @return {!SingleSelect} */
 static $create__() {
  SingleSelect.$clinit();
  let $instance = new SingleSelect();
  $instance.$ctor__org_patternfly_component_menu_SingleSelect__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_SingleSelect__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(/**@type {ComponentType}*/ (null), /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {SingleSelect} */
 m_addFoo__org_patternfly_component_menu_SingleSelect() {
  return this;
 }
 /** @nodts @return {SingleSelect} */
 m_add__org_patternfly_component_menu_SingleSelect() {
  return this;
 }
 /** @nodts @return {SingleSelect} */
 m_methodsReturningAReferenceToItself__org_patternfly_component_menu_SingleSelect() {
  return this;
 }
 /** @nodts @return {SingleSelect} */
 m_that__org_patternfly_component_menu_SingleSelect() {
  return this;
 }
 /** @nodts @return {SingleSelect} */
 m_ariaLabel__java_lang_String__org_patternfly_component_menu_SingleSelect(/** ?string */ label) {
  return /**@type {SingleSelect}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), SingleSelect));
 }
 /** @nodts @return {SingleSelect} */
 m_onFoo__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_SingleSelect(/** ComponentHandler<SingleSelect> */ handler) {
  return /**@type {SingleSelect}*/ ($Casts.$to(this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  }), SingleSelect));
 }
 /** @nodts */
 m_doSomething__void() {}
 /** @nodts @return {?string} */
 m_getter__java_lang_String() {
  return 'some piece of information';
 }
 /** @nodts */
 m_foo__void_$p_org_patternfly_component_menu_SingleSelect() {}
 //Bridge method.
 /** @final @override @nodts @return {SingleSelect} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_SingleSelect();
 }
 /** @nodts */
 static $clinit() {
  SingleSelect.$clinit = () =>{};
  SingleSelect.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SingleSelect, 'org.patternfly.component.menu.SingleSelect');

exports = SingleSelect;

//# sourceMappingURL=SingleSelect.js.map
