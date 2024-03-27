goog.module('org.patternfly.component.slider.SliderActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SliderSubComponent = goog.require('org.patternfly.component.slider.SliderSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SliderSubComponent<HTMLDivElement, SliderActions>}
 */
class SliderActions extends SliderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<Button>} @nodts*/
  this.f_actions__org_patternfly_component_slider_SliderActions_;
 }
 /** @nodts @return {SliderActions} */
 static m_sliderActions__org_patternfly_component_slider_SliderActions() {
  SliderActions.$clinit();
  return SliderActions.$create__();
 }
 /** @nodts @return {!SliderActions} */
 static $create__() {
  SliderActions.$clinit();
  let $instance = new SliderActions();
  $instance.$ctor__org_patternfly_component_slider_SliderActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_slider_SliderActions__void() {
  this.$ctor__org_patternfly_component_slider_SliderSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(SliderActions.f_SUB_COMPONENT_NAME__org_patternfly_component_slider_SliderActions, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_actions__org_patternfly_component_slider_SliderActions_ = /**@type {!ArrayList<Button>}*/ (ArrayList.$create__());
 }
 /** @nodts @return {SliderActions} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_component_slider_SliderActions(/** Button */ action) {
  return this.m_addAction__org_patternfly_component_button_Button__boolean__org_patternfly_component_slider_SliderActions(action, true);
 }
 /** @nodts @return {SliderActions} */
 m_addAction__org_patternfly_component_button_Button__boolean__org_patternfly_component_slider_SliderActions(/** Button */ action, /** boolean */ syncDisabled) {
  if (syncDisabled) {
   this.f_actions__org_patternfly_component_slider_SliderActions_.add(action);
  }
  return /**@type {SliderActions}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(action.m_element__elemental2_dom_HTMLElement()), SliderActions));
 }
 /** @nodts @return {SliderActions} */
 m_add__org_patternfly_component_button_Button__org_patternfly_component_slider_SliderActions(/** Button */ action) {
  this.f_actions__org_patternfly_component_slider_SliderActions_.add(action);
  return /**@type {SliderActions}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(action.m_element__elemental2_dom_HTMLElement()), SliderActions));
 }
 /** @nodts @return {SliderActions} */
 m_that__org_patternfly_component_slider_SliderActions() {
  return this;
 }
 /** @nodts */
 m_disabled__boolean__void_$pp_org_patternfly_component_slider(/** boolean */ disabled) {
  for (let $iterator = this.f_actions__org_patternfly_component_slider_SliderActions_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let action = /**@type {Button}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Button));
   {
    action.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {SliderActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_slider_SliderActions();
 }
 /** @nodts */
 static $clinit() {
  SliderActions.$clinit = () =>{};
  SliderActions.$loadModules();
  SliderSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SliderActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
SliderActions.f_SUB_COMPONENT_NAME__org_patternfly_component_slider_SliderActions = 'sa';
$Util.$setClassMetadata(SliderActions, 'org.patternfly.component.slider.SliderActions');

exports = SliderActions;

//# sourceMappingURL=SliderActions.js.map
