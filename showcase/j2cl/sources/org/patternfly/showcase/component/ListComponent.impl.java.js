goog.module('org.patternfly.showcase.component.ListComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let List = goog.forwardDeclare('org.patternfly.component.list.List$impl');
let ListItem = goog.forwardDeclare('org.patternfly.component.list.ListItem$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let patternfly = goog.forwardDeclare('org.patternfly.icon.IconSets.patternfly$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ListComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ListComponent} */
 static $create__() {
  ListComponent.$clinit();
  let $instance = new ListComponent();
  $instance.$ctor__org_patternfly_showcase_component_ListComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ListComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'list'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('list-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(List.m_list__org_patternfly_component_list_List().m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-inline', 'Inline', Code.m_code__java_lang_String__java_lang_String('list-inline'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_inline__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-ordered', 'Ordered', Code.m_code__java_lang_String__java_lang_String('list-ordered'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(List.m_list__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_List(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder()).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-plain', 'Plain', Code.m_code__java_lang_String__java_lang_String('list-plain'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-bordered', 'With horizontal rules', Code.m_code__java_lang_String__java_lang_String('list-bordered'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_bordered__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-icons', 'With icons', Code.m_code__java_lang_String__java_lang_String('list-icons'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_bookOpen__org_patternfly_icon_PredefinedIcon()), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(patternfly.m_key__org_patternfly_icon_PredefinedIcon()), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_desktop__org_patternfly_icon_PredefinedIcon()), ListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-icons-lg', 'With large icons', Code.m_code__java_lang_String__java_lang_String('list-icons-lg'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_largeIcons__org_patternfly_component_list_List().m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_bookOpen__org_patternfly_icon_PredefinedIcon()), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(patternfly.m_key__org_patternfly_icon_PredefinedIcon()), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_desktop__org_patternfly_icon_PredefinedIcon()), ListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(List));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(List), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ListItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  ListComponent.$clinit = () =>{};
  ListComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  List = goog.module.get('org.patternfly.component.list.List$impl');
  ListItem = goog.module.get('org.patternfly.component.list.ListItem$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  patternfly = goog.module.get('org.patternfly.icon.IconSets.patternfly$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ListComponent, 'org.patternfly.showcase.component.ListComponent');

exports = ListComponent;

//# sourceMappingURL=ListComponent.js.map
