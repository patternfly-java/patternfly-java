goog.module('org.patternfly.component.hint.Hint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let HintActions = goog.forwardDeclare('org.patternfly.component.hint.HintActions$impl');
let HintBody = goog.forwardDeclare('org.patternfly.component.hint.HintBody$impl');
let HintFooter = goog.forwardDeclare('org.patternfly.component.hint.HintFooter$impl');
let HintTitle = goog.forwardDeclare('org.patternfly.component.hint.HintTitle$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Hint>}
 */
class Hint extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Hint} */
 static m_hint__org_patternfly_component_hint_Hint() {
  Hint.$clinit();
  return Hint.$create__();
 }
 /** @nodts @return {!Hint} */
 static $create__() {
  Hint.$clinit();
  let $instance = new Hint();
  $instance.$ctor__org_patternfly_component_hint_Hint__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_hint_Hint__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Hint__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_hint__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Hint} */
 m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/** HintActions */ actions) {
  return this.m_add__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(actions);
 }
 /** @nodts @return {Hint} */
 m_add__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/** HintActions */ actions) {
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {Hint} */
 m_addTitle__org_patternfly_component_hint_HintTitle__org_patternfly_component_hint_Hint(/** HintTitle */ title) {
  return /**@type {Hint}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(title), Hint));
 }
 /** @nodts @return {Hint} */
 m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/** HintBody */ body) {
  return /**@type {Hint}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), Hint));
 }
 /** @nodts @return {Hint} */
 m_addFooter__org_patternfly_component_hint_HintFooter__org_patternfly_component_hint_Hint(/** HintFooter */ footer) {
  return /**@type {Hint}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(footer), Hint));
 }
 /** @nodts @return {Hint} */
 m_that__org_patternfly_component_hint_Hint() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Hint} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_hint_Hint();
 }
 /** @nodts */
 static $clinit() {
  Hint.$clinit = () =>{};
  Hint.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Hint;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Hint, 'org.patternfly.component.hint.Hint');

exports = Hint;

//# sourceMappingURL=Hint.js.map
