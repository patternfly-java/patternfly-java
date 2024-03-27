goog.module('org.patternfly.showcase.component.DividerComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let FlexItem = goog.forwardDeclare('org.patternfly.layout.flex.FlexItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DividerComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!DividerComponent} */
 static $create__() {
  DividerComponent.$clinit();
  let $instance = new DividerComponent();
  $instance.$ctor__org_patternfly_showcase_component_DividerComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_DividerComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'divider'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-hr', 'Using hr', Code.m_code__java_lang_String__java_lang_String('divider-hr'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-li', 'Using li', Code.m_code__java_lang_String__java_lang_String('divider-li'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('List item one'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('List item two'), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-div', 'Using div', Code.m_code__java_lang_String__java_lang_String('divider-div'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_div__org_patternfly_component_divider_DividerType)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-inset-md', 'Inset medium', Code.m_code__java_lang_String__java_lang_String('divider-inset-md'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Inset.f_md__org_patternfly_style_Inset)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-inset-breakpoints', 'Inset at various breakpoints', Code.m_code__java_lang_String__java_lang_String('divider-inset-breakpoints'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Inset.f_md__org_patternfly_style_Inset, Breakpoint.f_md__org_patternfly_style_Breakpoint, Inset.f_none__org_patternfly_style_Inset, Breakpoint.f_lg__org_patternfly_style_Breakpoint, Inset.f__3xl__org_patternfly_style_Inset, Breakpoint.f_xl__org_patternfly_style_Breakpoint, Inset.f_lg__org_patternfly_style_Inset)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-orientation-vertical', 'Vertical in flex layout', Code.m_code__java_lang_String__java_lang_String('divider-orientation-vertical'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('First item'), FlexItem))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Orientation>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation)))), Flex)).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Second item'), FlexItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-orientation-vertical-inset-md', 'Vertical in flex layout, inset medium', Code.m_code__java_lang_String__java_lang_String('divider-orientation-vertical-inset-md'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('First item'), FlexItem))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Orientation>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation))).m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Inset.f_md__org_patternfly_style_Inset)))), Flex)).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Second item'), FlexItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-orientation-vertical-inset-breakpoints', 'Vertical in flex layout, inset at various breakpoints', Code.m_code__java_lang_String__java_lang_String('divider-orientation-vertical-inset-breakpoints'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('First item'), FlexItem))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Orientation>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation))).m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Inset>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Inset.f_md__org_patternfly_style_Inset, Breakpoint.f_md__org_patternfly_style_Breakpoint, Inset.f_none__org_patternfly_style_Inset, Breakpoint.f_lg__org_patternfly_style_Breakpoint, Inset.f_sm__org_patternfly_style_Inset, Breakpoint.f_xl__org_patternfly_style_Breakpoint, Inset.f_xs__org_patternfly_style_Inset)))), Flex)).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Second item'), FlexItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('divider-orientation-switch', 'Switch orientation at various breakpoints', Code.m_code__java_lang_String__java_lang_String('divider-orientation-switch'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('First item'), FlexItem))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_hr__org_patternfly_component_divider_DividerType).m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/**@type {Breakpoints<Orientation>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation, Breakpoint.f_sm__org_patternfly_style_Breakpoint, Orientation.f_horizontal__org_patternfly_style_Orientation, Breakpoint.f_md__org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation, Breakpoint.f_lg__org_patternfly_style_Breakpoint, Orientation.f_horizontal__org_patternfly_style_Orientation, Breakpoint.f_xl__org_patternfly_style_Breakpoint, Orientation.f_vertical__org_patternfly_style_Orientation, Breakpoint.f__2xl__org_patternfly_style_Breakpoint, Orientation.f_horizontal__org_patternfly_style_Orientation)))), Flex)).m_addItem__org_patternfly_layout_flex_FlexItem__org_patternfly_layout_flex_Flex(/**@type {FlexItem}*/ ($Casts.$to(FlexItem.m_flexItem__org_patternfly_layout_flex_FlexItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Second item'), FlexItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Divider));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Divider), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(DividerType), Type.f_other__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  DividerComponent.$clinit = () =>{};
  DividerComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DividerComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  FlexItem = goog.module.get('org.patternfly.layout.flex.FlexItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Inset = goog.module.get('org.patternfly.style.Inset$impl');
  Orientation = goog.module.get('org.patternfly.style.Orientation$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DividerComponent, 'org.patternfly.showcase.component.DividerComponent');

exports = DividerComponent;

//# sourceMappingURL=DividerComponent.js.map
