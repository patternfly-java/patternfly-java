goog.module('org.patternfly.showcase.component.ToggleGroupComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ToggleGroup = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroup$impl');
let ToggleGroupItem = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ToggleGroupComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ToggleGroupComponent} */
 static $create__() {
  ToggleGroupComponent.$clinit();
  let $instance = new ToggleGroupComponent();
  $instance.$ctor__org_patternfly_showcase_component_ToggleGroupComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ToggleGroupComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'toggle-group'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('toggle-group-multiple', 'Default with multiple selectable', Code.m_code__java_lang_String__java_lang_String('toggle-group-multiple'), Supplier.$adapt(() =>{
   let disableAll = Button.m_button__java_lang_String__org_patternfly_component_button_Button('Disable all').m_primary__org_patternfly_component_button_Button();
   let toggleGroup = ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_multi__org_patternfly_component_SelectionMode);
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack)).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(disableAll.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ event, button) =>{
    let button_1 = /**@type {Button}*/ ($Casts.$to(button, Button));
    toggleGroup.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroup(!toggleGroup.m_isDisabled__boolean());
    button_1.m_text__java_lang_String__org_patternfly_component_button_Button(toggleGroup.m_isDisabled__boolean() ? 'Enable back' : 'Disable all');
   }))), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toggleGroup.m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-multiple-0', 'Option 1')).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-multiple-1', 'Option 2')).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-multiple-2', 'Option 3').m_disabled__org_jboss_elemento_TypedBuilder(), ToggleGroupItem)))), StackItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('toggle-group-single', 'Default with single selectable', Code.m_code__java_lang_String__java_lang_String('toggle-group-single'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_single__org_patternfly_component_SelectionMode).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_togglegroup_ToggleGroup(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 4).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List)), j_u_function_Function.$adapt((index) =>{
    let index_1 = /**@type {Integer}*/ ($Casts.$to(index, Integer));
    return ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('toggle-group-single', /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)], j_l_String))), 'Option ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1));
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('toggle-group-icon', 'With icon', Code.m_code__java_lang_String__java_lang_String('toggle-group-icon'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_multi__org_patternfly_component_SelectionMode).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-icon-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_copy__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem))).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-icon-1').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_undo__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem))).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-icon-2').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_shareSquare__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('toggle-group-text-icon', 'With icon', Code.m_code__java_lang_String__java_lang_String('toggle-group-text-icon'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_multi__org_patternfly_component_SelectionMode).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-text-icon-0', 'Copy').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_copy__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem))).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-text-icon-1', 'Undo').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_undo__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem))).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-text-icon-2', 'Share').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_shareSquare__org_patternfly_icon_PredefinedIcon()), ToggleGroupItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('toggle-group-compact', 'Compact variant', Code.m_code__java_lang_String__java_lang_String('toggle-group-compact'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ToggleGroup}*/ ($Casts.$to(ToggleGroup.m_toggleGroup__org_patternfly_component_SelectionMode__org_patternfly_component_togglegroup_ToggleGroup(SelectionMode.f_multi__org_patternfly_component_SelectionMode).m_compact__org_jboss_elemento_TypedBuilder(), ToggleGroup)).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-compact-0', 'Option 1')).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-compact-1', 'Option 2')).m_addItem__org_patternfly_component_togglegroup_ToggleGroupItem__org_patternfly_component_togglegroup_ToggleGroup(/**@type {ToggleGroupItem}*/ ($Casts.$to(ToggleGroupItem.m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem('toggle-group-compact-2', 'Option 3').m_disabled__org_jboss_elemento_TypedBuilder(), ToggleGroupItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(ToggleGroup));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ToggleGroup), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ToggleGroupItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  ToggleGroupComponent.$clinit = () =>{};
  ToggleGroupComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleGroupComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  List = goog.module.get('java.util.List$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  IntStream = goog.module.get('java.util.stream.IntStream$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ToggleGroup = goog.module.get('org.patternfly.component.togglegroup.ToggleGroup$impl');
  ToggleGroupItem = goog.module.get('org.patternfly.component.togglegroup.ToggleGroupItem$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  StackItem = goog.module.get('org.patternfly.layout.stack.StackItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ToggleGroupComponent, 'org.patternfly.showcase.component.ToggleGroupComponent');

exports = ToggleGroupComponent;

//# sourceMappingURL=ToggleGroupComponent.js.map
