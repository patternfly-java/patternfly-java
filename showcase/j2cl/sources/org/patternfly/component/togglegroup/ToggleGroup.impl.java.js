goog.module('org.patternfly.component.togglegroup.ToggleGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Compact = goog.require('org.patternfly.style.Modifiers.Compact$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let ToggleGroupItem = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let MultiSelectHandler = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, ToggleGroup>}
 * @implements {Compact<HTMLElement, ToggleGroup>}
 * @implements {Disabled<HTMLElement, ToggleGroup>}
 */
class ToggleGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SelectionMode} @nodts*/
  this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup;
  /**@type {Map<?string, ToggleGroupItem>} @nodts*/
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {Map<?string, ?boolean>} @nodts*/
  this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_ = false;
  /**@type {SelectHandler<ToggleGroupItem>} @nodts*/
  this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_;
  /**@type {MultiSelectHandler<ToggleGroup, ToggleGroupItem>} @nodts*/
  this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_;
 }
 /** @nodts @return {ToggleGroup} */
 static m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(/** SelectionMode */ selectionMode) {
  ToggleGroup.$clinit();
  return ToggleGroup.$create__org_patternfly_component_SelectionMode(selectionMode);
 }
 /** @nodts @return {!ToggleGroup} */
 static $create__org_patternfly_component_SelectionMode(/** SelectionMode */ selectionMode) {
  ToggleGroup.$clinit();
  let $instance = new ToggleGroup();
  $instance.$ctor__org_patternfly_component_togglegroup_ToggleGroup__org_patternfly_component_SelectionMode__void(selectionMode);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_togglegroup_ToggleGroup__org_patternfly_component_SelectionMode__void(/** SelectionMode */ selectionMode) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'group'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_ = /**@type {!HashMap<?string, ToggleGroupItem>}*/ (HashMap.$create__());
  this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_ = /**@type {!HashMap<?string, ?boolean>}*/ (HashMap.$create__());
  if ($Equality.$same(selectionMode, SelectionMode.f_click__org_patternfly_component_SelectionMode)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Selection mode \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(SelectionMode.f_click__org_patternfly_component_SelectionMode.name()) + '\' is not supported. Fall back to \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(SelectionMode.f_single__org_patternfly_component_SelectionMode.name()) + '\'');
   this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup = SelectionMode.f_single__org_patternfly_component_SelectionMode;
  } else {
   this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup = selectionMode;
  }
  this.m_storeComponent__void();
 }
 /** @nodts @template T @return {ToggleGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_togglegroup_ToggleGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, ToggleGroupItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let tgi = /**@type {ToggleGroupItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), ToggleGroupItem));
    this.m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(tgi);
   }
  }
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/** ToggleGroupItem */ item) {
  return this.m_add__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(item);
 }
 /** @nodts @return {ToggleGroup} */
 m_add__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/** ToggleGroupItem */ item) {
  this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.put(item.f_id__org_patternfly_component_togglegroup_ToggleGroupItem, item);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroup(/** boolean */ disabled) {
  if (disabled) {
   for (let $iterator = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let item = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ToggleGroupItem));
    {
     this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_.put(item.f_id__org_patternfly_component_togglegroup_ToggleGroupItem, item.m_isDisabled__boolean());
     item.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(true);
    }
   }
  } else {
   for (let $iterator_1 = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let item_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ToggleGroupItem));
    {
     let previouslyDisabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_disabledSnapshot__org_patternfly_component_togglegroup_ToggleGroup_.getOrDefault(item_1.f_id__org_patternfly_component_togglegroup_ToggleGroupItem, false), Boolean)));
     if (!previouslyDisabled) {
      item_1.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(false);
     }
    }
   }
  }
  this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_ = disabled;
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_that__org_patternfly_component_togglegroup_ToggleGroup() {
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_ariaLabel__java_lang_String__org_patternfly_component_togglegroup_ToggleGroup(/** ?string */ label) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), ToggleGroup));
 }
 /** @nodts @return {ToggleGroup} */
 m_onSingleSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_togglegroup_ToggleGroup(/** SelectHandler<ToggleGroupItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_ = selectHandler;
  return this;
 }
 /** @nodts @return {ToggleGroup} */
 m_onMultiSelect__org_patternfly_handler_MultiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup(/** MultiSelectHandler<ToggleGroup, ToggleGroupItem> */ selectHandler) {
  this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_ = selectHandler;
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return this.f_disabled__org_patternfly_component_togglegroup_ToggleGroup_;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(itemId), ToggleGroupItem)), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__void(/**@type {ToggleGroupItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.get(itemId), ToggleGroupItem)), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__void(/** ToggleGroupItem */ item) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__void(/** ToggleGroupItem */ item, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(item, true, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(/** ToggleGroupItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   if ($Equality.$same(this.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
    this.m_unselectAllItems__void_$p_org_patternfly_component_togglegroup_ToggleGroup();
   }
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(selected);
   if (fireEvent) {
    if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_, null)) {
     this.f_selectHandler__org_patternfly_component_togglegroup_ToggleGroup_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
    }
    if (!$Equality.$same(this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_, null)) {
     let selection = /**@type {List<ToggleGroupItem>}*/ ($Casts.$to(this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((arg0) =>{
      let arg0_1 = /**@type {ToggleGroupItem}*/ ($Casts.$to(arg0, ToggleGroupItem));
      return arg0_1.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup();
     })).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<ToggleGroupItem, *, List<ToggleGroupItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
     this.f_multiSelectHandler__org_patternfly_component_togglegroup_ToggleGroup_.m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(new Event(''), this, selection);
    }
   }
  }
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_togglegroup_ToggleGroup() {
  for (let $iterator = this.f_items__org_patternfly_component_togglegroup_ToggleGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = /**@type {ToggleGroupItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ToggleGroupItem));
   {
    item.m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(false);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_togglegroup_ToggleGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_compact__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_compact__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_compact__org_patternfly_component_togglegroup_ToggleGroup() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_compact__boolean__org_patternfly_component_togglegroup_ToggleGroup(/** boolean */ arg0) {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Compact.m_compact__$default__org_patternfly_style_Modifiers_Compact__boolean__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroup} */
 m_disabled__org_patternfly_component_togglegroup_ToggleGroup() {
  return /**@type {ToggleGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroup));
 }
 /** @nodts */
 static $clinit() {
  ToggleGroup.$clinit = () =>{};
  ToggleGroup.$loadModules();
  BaseComponent.$clinit();
  Compact.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  List = goog.module.get('java.util.List$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  ToggleGroupItem = goog.module.get('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Compact.$markImplementor(ToggleGroup);
Disabled.$markImplementor(ToggleGroup);
$Util.$setClassMetadata(ToggleGroup, 'org.patternfly.component.togglegroup.ToggleGroup');

exports = ToggleGroup;

//# sourceMappingURL=ToggleGroup.js.map
