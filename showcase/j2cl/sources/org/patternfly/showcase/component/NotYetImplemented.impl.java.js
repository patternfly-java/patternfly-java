goog.module('org.patternfly.showcase.component.NotYetImplemented$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
 */
class NotYetImplemented extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_showcase_component_NotYetImplemented_;
 }
 /** @nodts @return {NotYetImplemented} */
 static m_nyi__org_patternfly_showcase_component_NotYetImplemented() {
  NotYetImplemented.$clinit();
  return NotYetImplemented.$create__();
 }
 /** @nodts @return {!NotYetImplemented} */
 static $create__() {
  NotYetImplemented.$clinit();
  let $instance = new NotYetImplemented();
  $instance.$ctor__org_patternfly_showcase_component_NotYetImplemented__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_NotYetImplemented__void() {
  this.$ctor__java_lang_Object__void();
  this.f_root__org_patternfly_showcase_component_NotYetImplemented_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {Alert}*/ ($Casts.$to(/**@type {Alert}*/ ($Casts.$to(Alert.m_alert__org_patternfly_component_Severity__java_lang_String__org_patternfly_component_alert_Alert(Severity.f_warning__org_patternfly_component_Severity, 'Not yet implemented').m_inline__org_jboss_elemento_TypedBuilder(), Alert)).m_plain__org_jboss_elemento_TypedBuilder(), Alert)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_root__org_patternfly_showcase_component_NotYetImplemented_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  NotYetImplemented.$clinit = () =>{};
  NotYetImplemented.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotYetImplemented;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Severity = goog.module.get('org.patternfly.component.Severity$impl');
  Alert = goog.module.get('org.patternfly.component.alert.Alert$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(NotYetImplemented);
$Util.$setClassMetadata(NotYetImplemented, 'org.patternfly.showcase.component.NotYetImplemented');

exports = NotYetImplemented;

//# sourceMappingURL=NotYetImplemented.js.map
