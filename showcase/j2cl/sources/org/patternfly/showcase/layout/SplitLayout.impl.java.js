goog.module('org.patternfly.showcase.layout.SplitLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Split = goog.forwardDeclare('org.patternfly.layout.split.Split$impl');
let SplitItem = goog.forwardDeclare('org.patternfly.layout.split.SplitItem$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SplitLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SplitLayout} */
 static $create__() {
  SplitLayout.$clinit();
  let $instance = new SplitLayout();
  $instance.$ctor__org_patternfly_showcase_layout_SplitLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_SplitLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_layout_Layout__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_layouts__org_patternfly_showcase_Data, 'split'), Layout_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('split-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Split.m_split__org_patternfly_layout_split_Split().m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_fill__org_jboss_elemento_TypedBuilder(), SplitItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-gutter', 'With gutter', Code.m_code__java_lang_String__java_lang_String('split-gutter'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Split}*/ ($Casts.$to(Split.m_split__org_patternfly_layout_split_Split().m_gutter__org_jboss_elemento_TypedBuilder(), Split)).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_fill__org_jboss_elemento_TypedBuilder(), SplitItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-wrap', 'Wrappable', Code.m_code__java_lang_String__java_lang_String('split-wrap'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Split}*/ ($Casts.$to(Split.m_split__org_patternfly_layout_split_Split().m_wrap__org_patternfly_layout_split_Split().m_gutter__org_jboss_elemento_TypedBuilder(), Split)).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Split));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Split), Type.f_layout__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(SplitItem), Type.f_layout__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  SplitLayout.$clinit = () =>{};
  SplitLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SplitLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Split = goog.module.get('org.patternfly.layout.split.Split$impl');
  SplitItem = goog.module.get('org.patternfly.layout.split.SplitItem$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SplitLayout, 'org.patternfly.showcase.layout.SplitLayout');

exports = SplitLayout;

//# sourceMappingURL=SplitLayout.js.map
