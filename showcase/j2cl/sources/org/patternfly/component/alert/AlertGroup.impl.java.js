goog.module('org.patternfly.component.alert.AlertGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let AlertGroupType = goog.forwardDeclare('org.patternfly.component.alert.AlertGroupType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLUListElement, AlertGroup>}
 */
class AlertGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AlertGroupType} @nodts*/
  this.f_type__org_patternfly_component_alert_AlertGroup_;
  /**@type {number} @nodts*/
  this.f_timeout__org_patternfly_component_alert_AlertGroup_ = 0;
 }
 /** @nodts @return {AlertGroup} */
 static m_alertGroup__org_patternfly_component_alert_AlertGroupType__org_patternfly_component_alert_AlertGroup(/** AlertGroupType */ type) {
  AlertGroup.$clinit();
  return AlertGroup.m_alertGroup__org_patternfly_component_alert_AlertGroupType__int__org_patternfly_component_alert_AlertGroup(type, Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert);
 }
 /** @nodts @return {AlertGroup} */
 static m_alertGroup__org_patternfly_component_alert_AlertGroupType__int__org_patternfly_component_alert_AlertGroup(/** AlertGroupType */ type, /** number */ timeout) {
  AlertGroup.$clinit();
  if ($Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   if ($Equality.$same(AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_, null)) {
    AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_ = AlertGroup.$create__org_patternfly_component_alert_AlertGroupType__int(type, timeout);
    Elements.m_body__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_), HTMLContainerBuilder)));
   }
   return AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_;
  } else {
   return AlertGroup.$create__org_patternfly_component_alert_AlertGroupType__int(type, timeout);
  }
 }
 /** @nodts @return {!AlertGroup} */
 static $create__org_patternfly_component_alert_AlertGroupType__int(/** AlertGroupType */ type, /** number */ timeout) {
  AlertGroup.$clinit();
  let $instance = new AlertGroup();
  $instance.$ctor__org_patternfly_component_alert_AlertGroup__org_patternfly_component_alert_AlertGroupType__int__void(type, timeout);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertGroup__org_patternfly_component_alert_AlertGroupType__int__void(/** AlertGroupType */ type, /** number */ timeout) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_AlertGroup__org_patternfly_component_ComponentType, /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alertGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  this.f_type__org_patternfly_component_alert_AlertGroup_ = type;
  this.f_timeout__org_patternfly_component_alert_AlertGroup_ = timeout;
  this.m_storeComponent__void();
  if ($Equality.$same(type, AlertGroupType.f_dynamic__org_patternfly_component_alert_AlertGroupType) || $Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite');
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_atomic__org_patternfly_core_Aria, false);
   if ($Equality.$same(type, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toast__org_patternfly_style_Classes)], j_l_String)));
   }
  }
 }
 /** @nodts @template T @return {AlertGroup} */
 m_addAlerts__java_lang_Iterable__java_util_function_Function__org_patternfly_component_alert_AlertGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, Alert> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let alert = /**@type {Alert}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Alert));
    this.m_addAlert__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(alert);
   }
  }
  return this;
 }
 /** @nodts @return {AlertGroup} */
 m_addAlert__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(/** Alert */ alert) {
  return this.m_add__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(alert);
 }
 /** @nodts @return {AlertGroup} */
 m_add__org_patternfly_component_alert_Alert__org_patternfly_component_alert_AlertGroup(/** Alert */ alert) {
  if ($Equality.$same(this.f_type__org_patternfly_component_alert_AlertGroup_, AlertGroupType.f_toast__org_patternfly_component_alert_AlertGroupType)) {
   if (this.f_timeout__org_patternfly_component_alert_AlertGroup_ != Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert && alert.f_timeout__org_patternfly_component_alert_Alert == Alert.f_NO_TIMEOUT__org_patternfly_component_alert_Alert) {
    alert.m_timeout__int__org_patternfly_component_alert_Alert(this.f_timeout__org_patternfly_component_alert_AlertGroup_);
   }
   if ($Equality.$same(alert.f_closeButton__org_patternfly_component_alert_Alert, null)) {
    alert.m_closable__org_patternfly_component_alert_Alert();
   }
   Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)), /**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), HTMLContainerBuilder)));
  } else {
   if ($Equality.$same(this.f_type__org_patternfly_component_alert_AlertGroup_, AlertGroupType.f_staticInline__org_patternfly_component_alert_AlertGroupType)) {
    if (!/**@type {HTMLDivElement}*/ ($Casts.$to(alert.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inline__org_patternfly_style_Classes))) {
     alert.m_inline__org_jboss_elemento_TypedBuilder();
    }
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(alert), HTMLContainerBuilder)));
  }
  return this;
 }
 /** @nodts @return {AlertGroup} */
 m_that__org_patternfly_component_alert_AlertGroup() {
  return this;
 }
 /** @nodts */
 m_closeAlert__org_patternfly_component_alert_Alert__void_$pp_org_patternfly_component_alert(/** Alert */ alert) {
  let element = /**@type {HTMLDivElement}*/ ($Casts.$to(alert.m_element__elemental2_dom_HTMLElement(), $Overlay)).parentElement;
  if (!$Equality.$same(element, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(alert);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_AlertGroup();
 }
 /** @nodts */
 static $clinit() {
  AlertGroup.$clinit = () =>{};
  AlertGroup.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Alert = goog.module.get('org.patternfly.component.alert.Alert$impl');
  AlertGroupType = goog.module.get('org.patternfly.component.alert.AlertGroupType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {AlertGroup} @nodts*/
AlertGroup.f_toast__org_patternfly_component_alert_AlertGroup_;
$Util.$setClassMetadata(AlertGroup, 'org.patternfly.component.alert.AlertGroup');

exports = AlertGroup;

//# sourceMappingURL=AlertGroup.js.map
