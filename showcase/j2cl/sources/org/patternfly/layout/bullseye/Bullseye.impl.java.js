goog.module('org.patternfly.layout.bullseye.Bullseye$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let BullseyeItem = goog.forwardDeclare('org.patternfly.layout.bullseye.BullseyeItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Bullseye>}
 */
class Bullseye extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Bullseye} */
 static m_bullseye__org_patternfly_layout_bullseye_Bullseye() {
  Bullseye.$clinit();
  return Bullseye.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Bullseye} */
 static m_bullseye__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_bullseye_Bullseye(/** HTMLContainerBuilder<E> */ builder) {
  Bullseye.$clinit();
  return Bullseye.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Bullseye} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Bullseye.$clinit();
  let $instance = new Bullseye();
  $instance.$ctor__org_patternfly_layout_bullseye_Bullseye__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_bullseye_Bullseye__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_bullseye__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {Bullseye} */
 m_addItem__org_patternfly_layout_bullseye_BullseyeItem__org_patternfly_layout_bullseye_Bullseye(/** BullseyeItem */ item) {
  return /**@type {Bullseye}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Bullseye));
 }
 /** @nodts @return {Bullseye} */
 m_that__org_patternfly_layout_bullseye_Bullseye() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Bullseye} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_bullseye_Bullseye();
 }
 /** @nodts */
 static $clinit() {
  Bullseye.$clinit = () =>{};
  Bullseye.$loadModules();
  BaseLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bullseye;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Bullseye, 'org.patternfly.layout.bullseye.Bullseye');

exports = Bullseye;

//# sourceMappingURL=Bullseye.js.map
