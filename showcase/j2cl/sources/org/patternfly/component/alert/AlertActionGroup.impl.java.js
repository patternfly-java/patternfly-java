goog.module('org.patternfly.component.alert.AlertActionGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AlertSubComponent = goog.require('org.patternfly.component.alert.AlertSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AlertSubComponent<HTMLDivElement, AlertActionGroup>}
 */
class AlertActionGroup extends AlertSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Alert} @nodts*/
  this.f_alert__org_patternfly_component_alert_AlertActionGroup_;
 }
 /** @nodts @return {AlertActionGroup} */
 static m_alertActionGroup__org_patternfly_component_alert_AlertActionGroup() {
  AlertActionGroup.$clinit();
  return AlertActionGroup.$create__();
 }
 /** @nodts @return {!AlertActionGroup} */
 static $create__() {
  AlertActionGroup.$clinit();
  let $instance = new AlertActionGroup();
  $instance.$ctor__org_patternfly_component_alert_AlertActionGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertActionGroup__void() {
  this.$ctor__org_patternfly_component_alert_AlertSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(AlertActionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_alert_AlertActionGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actionGroup__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__java_lang_String__org_patternfly_component_alert_AlertActionGroup(/** ?string */ action) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(action).m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_link__org_patternfly_component_button_Button(), null);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__java_lang_String__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/** ?string */ action, /** ComponentHandler<Alert> */ handler) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(action).m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_link__org_patternfly_component_button_Button(), handler);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_component_alert_AlertActionGroup(/** Button */ action) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(action, null);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/** Button */ action, /** ComponentHandler<Alert> */ handler) {
  if (!$Equality.$same(handler, null)) {
   action.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, /**@type {Alert}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Alert)));
   });
  }
  return /**@type {AlertActionGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(action), AlertActionGroup));
 }
 /** @nodts @return {AlertActionGroup} */
 m_that__org_patternfly_component_alert_AlertActionGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertActionGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_AlertActionGroup();
 }
 /** @nodts */
 static $clinit() {
  AlertActionGroup.$clinit = () =>{};
  AlertActionGroup.$loadModules();
  AlertSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertActionGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Alert = goog.module.get('org.patternfly.component.alert.Alert$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
AlertActionGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_alert_AlertActionGroup = 'aag';
$Util.$setClassMetadata(AlertActionGroup, 'org.patternfly.component.alert.AlertActionGroup');

exports = AlertActionGroup;

//# sourceMappingURL=AlertActionGroup.js.map
