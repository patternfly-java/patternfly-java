goog.module('org.patternfly.showcase.component.SimpleListComponent$impl');

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
let SimpleList = goog.forwardDeclare('org.patternfly.component.list.SimpleList$impl');
let SimpleListGroup = goog.forwardDeclare('org.patternfly.component.list.SimpleListGroup$impl');
let SimpleListItem = goog.forwardDeclare('org.patternfly.component.list.SimpleListItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SimpleListComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SimpleListComponent} */
 static $create__() {
  SimpleListComponent.$clinit();
  let $instance = new SimpleListComponent();
  $instance.$ctor__org_patternfly_showcase_component_SimpleListComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_SimpleListComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'simple-list'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('simple-list', 'Simple list', Code.m_code__java_lang_String__java_lang_String('simple-list'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(SimpleList.m_simpleList__org_patternfly_component_list_SimpleList().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleList(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 4).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List)), j_u_function_Function.$adapt((index) =>{
    let index_1 = /**@type {Integer}*/ ($Casts.$to(index, Integer));
    return SimpleListItem.m_simpleListItem__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('simple-list', /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1)], j_l_String))), 'List item ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_1));
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('grouped-list', 'Grouped list', Code.m_code__java_lang_String__java_lang_String('grouped-list'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(SimpleList.m_simpleList__org_patternfly_component_list_SimpleList().m_addGroup__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(SimpleListGroup.m_simpleListGroup__java_lang_String__org_patternfly_component_list_SimpleListGroup('Group 1').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleListGroup(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 5).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List)), j_u_function_Function.$adapt((index_2) =>{
    let index_3 = /**@type {Integer}*/ ($Casts.$to(index_2, Integer));
    return SimpleListItem.m_simpleListItem__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('grouped-list-1', /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_3)], j_l_String))), 'List item ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_3));
   }))).m_addGroup__org_patternfly_component_list_SimpleListGroup__org_patternfly_component_list_SimpleList(SimpleListGroup.m_simpleListGroup__java_lang_String__org_patternfly_component_list_SimpleListGroup('Group 2').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_list_SimpleListGroup(/**@type {List<Integer>}*/ ($Casts.$to(IntStream.m_range__int__int__java_util_stream_IntStream(1, 5).m_boxed__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<Integer, *, List<Integer>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List)), j_u_function_Function.$adapt((index_4) =>{
    let index_5 = /**@type {Integer}*/ ($Casts.$to(index_4, Integer));
    return SimpleListItem.m_simpleListItem__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('grouped-list-2', /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_5)], j_l_String))), 'List item ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(index_5));
   })))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(SimpleList));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SimpleList), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SimpleListGroup), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SimpleListItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  SimpleListComponent.$clinit = () =>{};
  SimpleListComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListComponent;
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
  SimpleList = goog.module.get('org.patternfly.component.list.SimpleList$impl');
  SimpleListGroup = goog.module.get('org.patternfly.component.list.SimpleListGroup$impl');
  SimpleListItem = goog.module.get('org.patternfly.component.list.SimpleListItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SimpleListComponent, 'org.patternfly.showcase.component.SimpleListComponent');

exports = SimpleListComponent;

//# sourceMappingURL=SimpleListComponent.js.map
