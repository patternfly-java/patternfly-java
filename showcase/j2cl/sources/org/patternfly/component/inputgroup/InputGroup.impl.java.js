goog.module('org.patternfly.component.inputgroup.InputGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let InputGroupItem = goog.forwardDeclare('org.patternfly.component.inputgroup.InputGroupItem$impl');
let InputGroupText = goog.forwardDeclare('org.patternfly.component.inputgroup.InputGroupText$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, InputGroup>}
 * @implements {Disabled<HTMLElement, InputGroup>}
 */
class InputGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<InputGroupItem>} @nodts*/
  this.f_items__org_patternfly_component_inputgroup_InputGroup_;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_inputgroup_InputGroup_ = false;
 }
 /** @nodts @return {InputGroup} */
 static m_inputGroup__org_patternfly_component_inputgroup_InputGroup() {
  InputGroup.$clinit();
  return InputGroup.$create__();
 }
 /** @nodts @return {!InputGroup} */
 static $create__() {
  InputGroup.$clinit();
  let $instance = new InputGroup();
  $instance.$ctor__org_patternfly_component_inputgroup_InputGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_inputgroup_InputGroup__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_InputGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_inputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_inputgroup_InputGroup_ = /**@type {!ArrayList<InputGroupItem>}*/ (ArrayList.$create__());
 }
 /** @nodts @return {InputGroup} */
 m_addItem__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(/** InputGroupItem */ item) {
  return this.m_add__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(item);
 }
 /** @nodts @return {InputGroup} */
 m_add__org_patternfly_component_inputgroup_InputGroupItem__org_patternfly_component_inputgroup_InputGroup(/** InputGroupItem */ item) {
  this.f_items__org_patternfly_component_inputgroup_InputGroup_.add(item);
  return /**@type {InputGroup}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay))), InputGroup));
 }
 /** @nodts @return {InputGroup} */
 m_addText__org_patternfly_component_inputgroup_InputGroupText__org_patternfly_component_inputgroup_InputGroup(/** InputGroupText */ text) {
  return /**@type {InputGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(text), InputGroup));
 }
 /** @nodts @return {InputGroup} */
 m_disabled__boolean__org_patternfly_component_inputgroup_InputGroup(/** boolean */ disabled) {
  this.f_disabled__org_patternfly_component_inputgroup_InputGroup_ = disabled;
  for (let $iterator = this.f_items__org_patternfly_component_inputgroup_InputGroup_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {InputGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), InputGroupItem));
   {
    item.m_disabled__boolean__org_patternfly_component_inputgroup_InputGroupItem(disabled);
   }
  }
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return this.f_disabled__org_patternfly_component_inputgroup_InputGroup_;
 }
 /** @nodts @return {InputGroup} */
 m_that__org_patternfly_component_inputgroup_InputGroup() {
  return this;
 }
 /** @nodts @return {List<InputGroupItem>} */
 m_items__java_util_List() {
  return this.f_items__org_patternfly_component_inputgroup_InputGroup_;
 }
 /** @nodts @return {InputGroupItem} */
 m_itemWithButton__org_patternfly_component_inputgroup_InputGroupItem() {
  for (let $iterator = this.f_items__org_patternfly_component_inputgroup_InputGroup_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {InputGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), InputGroupItem));
   {
    if (!$Equality.$same(item.m_button__org_patternfly_component_button_Button(), null)) {
     return item;
    }
   }
  }
  return null;
 }
 /** @nodts @return {InputGroupItem} */
 m_itemWithDropdown__org_patternfly_component_inputgroup_InputGroupItem() {
  for (let $iterator = this.f_items__org_patternfly_component_inputgroup_InputGroup_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {InputGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), InputGroupItem));
   {
    if (!$Equality.$same(item.m_dropdown__org_patternfly_component_menu_Dropdown(), null)) {
     return item;
    }
   }
  }
  return null;
 }
 /** @nodts @return {InputGroupItem} */
 m_itemWithFormControl__org_patternfly_component_inputgroup_InputGroupItem() {
  for (let $iterator = this.f_items__org_patternfly_component_inputgroup_InputGroup_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {InputGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), InputGroupItem));
   {
    if (!$Equality.$same(item.m_formControl__org_patternfly_component_form_FormControl(), null)) {
     return item;
    }
   }
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_inputgroup_InputGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), InputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_inputgroup_InputGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {InputGroup} */
 m_disabled__org_patternfly_component_inputgroup_InputGroup() {
  return /**@type {InputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), InputGroup));
 }
 /** @nodts */
 static $clinit() {
  InputGroup.$clinit = () =>{};
  InputGroup.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  InputGroupItem = goog.module.get('org.patternfly.component.inputgroup.InputGroupItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(InputGroup);
$Util.$setClassMetadata(InputGroup, 'org.patternfly.component.inputgroup.InputGroup');

exports = InputGroup;

//# sourceMappingURL=InputGroup.js.map
