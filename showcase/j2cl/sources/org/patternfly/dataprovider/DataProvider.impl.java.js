goog.module('org.patternfly.dataprovider.DataProvider$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BinaryOperator = goog.forwardDeclare('java.util.function.BinaryOperator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Partition = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider.Partition$impl');
let Display = goog.forwardDeclare('org.patternfly.dataprovider.Display$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectionInfo = goog.forwardDeclare('org.patternfly.dataprovider.SelectionInfo$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 */
class DataProvider extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {j_u_function_Function<T, ?string>} @nodts*/
  this.f_identifier__org_patternfly_dataprovider_DataProvider_;
  /**@type {PageInfo} @nodts*/
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_;
  /**@type {SelectionInfo<T>} @nodts*/
  this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_;
  /**@type {Map<?string, T>} @nodts*/
  this.f_allItems__org_patternfly_dataprovider_DataProvider_;
  /**@type {Map<?string, Predicate<T>>} @nodts*/
  this.f_filters__org_patternfly_dataprovider_DataProvider_;
  /**@type {List<Display<T>>} @nodts*/
  this.f_displays__org_patternfly_dataprovider_DataProvider_;
  /**@type {List<SelectHandler<T>>} @nodts*/
  this.f_selectHandler__org_patternfly_dataprovider_DataProvider_;
  /**@type {SortInfo<T>} @nodts*/
  this.f_sortInfo__org_patternfly_dataprovider_DataProvider_;
  /**@type {Map<?string, T>} @nodts*/
  this.f_filteredItems__org_patternfly_dataprovider_DataProvider_;
  /**@type {Map<?string, T>} @nodts*/
  this.f_visibleItems__org_patternfly_dataprovider_DataProvider_;
 }
 //Factory method corresponding to constructor 'DataProvider(Function)'.
 /** @nodts @template T @return {!DataProvider<T>} */
 static $create__java_util_function_Function(/** j_u_function_Function<T, ?string> */ identifier) {
  DataProvider.$clinit();
  let $instance = new DataProvider();
  $instance.$ctor__org_patternfly_dataprovider_DataProvider__java_util_function_Function__void(identifier);
  return $instance;
 }
 //Initialization from constructor 'DataProvider(Function)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_DataProvider__java_util_function_Function__void(/** j_u_function_Function<T, ?string> */ identifier) {
  this.$ctor__org_patternfly_dataprovider_DataProvider__java_util_function_Function__int__void(identifier, PageInfo.f_DEFAULT_PAGE_SIZE__org_patternfly_dataprovider_PageInfo);
 }
 //Factory method corresponding to constructor 'DataProvider(Function, int)'.
 /** @nodts @template T @return {!DataProvider<T>} */
 static $create__java_util_function_Function__int(/** j_u_function_Function<T, ?string> */ identifier, /** number */ pageSize) {
  DataProvider.$clinit();
  let $instance = new DataProvider();
  $instance.$ctor__org_patternfly_dataprovider_DataProvider__java_util_function_Function__int__void(identifier, pageSize);
  return $instance;
 }
 //Initialization from constructor 'DataProvider(Function, int)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_DataProvider__java_util_function_Function__int__void(/** j_u_function_Function<T, ?string> */ identifier, /** number */ pageSize) {
  this.$ctor__java_lang_Object__void();
  this.f_identifier__org_patternfly_dataprovider_DataProvider_ = identifier;
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_ = PageInfo.$create__int(pageSize);
  this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_ = /**@type {!SelectionInfo<T>}*/ (SelectionInfo.$create__java_util_function_Function(identifier));
  this.f_sortInfo__org_patternfly_dataprovider_DataProvider_ = /**@type {!SortInfo<T>}*/ (SortInfo.$create__());
  this.f_allItems__org_patternfly_dataprovider_DataProvider_ = /**@type {!LinkedHashMap<?string, T>}*/ (LinkedHashMap.$create__());
  this.f_filteredItems__org_patternfly_dataprovider_DataProvider_ = /**@type {!LinkedHashMap<?string, T>}*/ (LinkedHashMap.$create__());
  this.f_visibleItems__org_patternfly_dataprovider_DataProvider_ = /**@type {!LinkedHashMap<?string, T>}*/ (LinkedHashMap.$create__());
  this.f_filters__org_patternfly_dataprovider_DataProvider_ = /**@type {!HashMap<?string, Predicate<T>>}*/ (HashMap.$create__());
  this.f_selectHandler__org_patternfly_dataprovider_DataProvider_ = /**@type {!ArrayList<SelectHandler<T>>}*/ (ArrayList.$create__());
  this.f_displays__org_patternfly_dataprovider_DataProvider_ = /**@type {!ArrayList<Display<T>>}*/ (ArrayList.$create__());
  this.m_reset__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_update__arrayOf_java_lang_Object__void(/** Array<T> */ items) {
  this.m_reset__void_$p_org_patternfly_dataprovider_DataProvider();
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.f_allItems__org_patternfly_dataprovider_DataProvider_.put(this.m_getId__java_lang_Object__java_lang_String(item), item);
   }
  }
  this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_update__java_lang_Iterable__void(/** Iterable<T> */ items) {
  this.m_reset__void_$p_org_patternfly_dataprovider_DataProvider();
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.f_allItems__org_patternfly_dataprovider_DataProvider_.put(this.m_getId__java_lang_Object__java_lang_String(item), item);
   }
  }
  this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts @return {boolean} */
 m_contains__java_lang_Object__boolean(/** T */ item) {
  return this.f_allItems__org_patternfly_dataprovider_DataProvider_.containsKey(/**@type {?string}*/ ($Casts.$to(this.f_identifier__org_patternfly_dataprovider_DataProvider_.m_apply__java_lang_Object__java_lang_Object(item), j_l_String)));
 }
 /** @nodts @return {boolean} */
 m_isVisible__java_lang_Object__boolean(/** T */ item) {
  return this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.containsKey(/**@type {?string}*/ ($Casts.$to(this.f_identifier__org_patternfly_dataprovider_DataProvider_.m_apply__java_lang_Object__java_lang_Object(item), j_l_String)));
 }
 /** @nodts @return {?string} */
 m_getId__java_lang_Object__java_lang_String(/** T */ item) {
  return /**@type {?string}*/ ($Casts.$to(this.f_identifier__org_patternfly_dataprovider_DataProvider_.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
 }
 /** @nodts @return {T} */
 m_getItem__java_lang_String__java_lang_Object(/** ?string */ id) {
  return this.f_allItems__org_patternfly_dataprovider_DataProvider_.get(id);
 }
 /** @nodts @return {j_u_function_Function<T, ?string>} */
 m_getIdentifier__java_util_function_Function() {
  return this.f_identifier__org_patternfly_dataprovider_DataProvider_;
 }
 /** @nodts @return {Iterable<T>} */
 m_getAllItems__java_lang_Iterable() {
  return this.f_allItems__org_patternfly_dataprovider_DataProvider_.values();
 }
 /** @nodts @return {Iterable<T>} */
 m_getFilteredItems__java_lang_Iterable() {
  return this.f_filteredItems__org_patternfly_dataprovider_DataProvider_.values();
 }
 /** @nodts @return {Iterable<T>} */
 m_getVisibleItems__java_lang_Iterable() {
  return this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.values();
 }
 /** @nodts */
 m_onSelect__org_patternfly_handler_SelectHandler__void(/** SelectHandler<T> */ selectHandler) {
  this.f_selectHandler__org_patternfly_dataprovider_DataProvider_.add(selectHandler);
 }
 /** @nodts */
 m_selectAll__void() {
  this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
  this.f_filteredItems__org_patternfly_dataprovider_DataProvider_.m_forEach__java_util_function_BiConsumer__void(BiConsumer.$adapt((id, /** ? */ item) =>{
   let id_1 = /**@type {?string}*/ ($Casts.$to(id, j_l_String));
   this.m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(id_1, item, true);
  }));
  this.m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_selectVisible__void() {
  this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
  this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.m_forEach__java_util_function_BiConsumer__void(BiConsumer.$adapt((id, /** ? */ item) =>{
   let id_1 = /**@type {?string}*/ ($Casts.$to(id, j_l_String));
   this.m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(id_1, item, true);
  }));
  this.m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_clearAllSelection__void() {
  if (this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_hasSelection__boolean()) {
   this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
   this.f_filteredItems__org_patternfly_dataprovider_DataProvider_.m_forEach__java_util_function_BiConsumer__void(BiConsumer.$adapt((id, /** ? */ item) =>{
    let id_1 = /**@type {?string}*/ ($Casts.$to(id, j_l_String));
    this.m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(id_1, item, false);
   }));
   this.m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts */
 m_clearVisibleSelection__void() {
  if (this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_hasSelection__boolean()) {
   this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
   this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.m_forEach__java_util_function_BiConsumer__void(BiConsumer.$adapt((id, /** ? */ item) =>{
    let id_1 = /**@type {?string}*/ ($Casts.$to(id, j_l_String));
    this.m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(id_1, item, false);
   }));
   this.m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts */
 m_select__java_lang_Object__boolean__void(/** T */ item, /** boolean */ select) {
  this.m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(this.m_getId__java_lang_Object__java_lang_String(item), item, select);
  if (select) {
   this.m_fireSelection__java_lang_Object__void_$p_org_patternfly_dataprovider_DataProvider(item);
  }
  this.m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts @return {SelectionInfo<T>} */
 m_getSelectionInfo__org_patternfly_dataprovider_SelectionInfo() {
  return this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_;
 }
 /** @nodts */
 m_selectInternal__java_lang_String__java_lang_Object__boolean__void_$p_org_patternfly_dataprovider_DataProvider(/** ?string */ id, /** T */ item, /** boolean */ select) {
  if (select) {
   this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_add__java_lang_String__java_lang_Object__void_$pp_org_patternfly_dataprovider(id, item);
  } else {
   this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_remove__java_lang_String__void_$pp_org_patternfly_dataprovider(id);
  }
 }
 /** @nodts */
 m_fireSelection__java_lang_Object__void_$p_org_patternfly_dataprovider_DataProvider(/** T */ item) {
  for (let $iterator = this.f_selectHandler__org_patternfly_dataprovider_DataProvider_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handler = /**@type {SelectHandler<T>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), SelectHandler));
   {
    handler.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
   }
  }
 }
 /** @nodts */
 m_updateSelection__void_$p_org_patternfly_dataprovider_DataProvider() {
  for (let $iterator = this.f_displays__org_patternfly_dataprovider_DataProvider_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let display = /**@type {Display<T>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Display));
   {
    display.m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_);
   }
  }
 }
 /** @nodts */
 m_addFilter__java_lang_String__java_util_function_Predicate__void(/** ?string */ id, /** Predicate<T> */ filter) {
  this.f_filters__org_patternfly_dataprovider_DataProvider_.put(id, filter);
  this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_removeFilter__java_lang_String__void(/** ?string */ id) {
  if (this.f_filters__org_patternfly_dataprovider_DataProvider_.containsKey(id)) {
   this.f_filters__org_patternfly_dataprovider_DataProvider_.remove(id);
   this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts */
 m_clearFilters__void() {
  if (!this.f_filters__org_patternfly_dataprovider_DataProvider_.isEmpty()) {
   this.f_filters__org_patternfly_dataprovider_DataProvider_.clear();
   this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts @return {boolean} */
 m_hasFilters__boolean() {
  return !this.f_filters__org_patternfly_dataprovider_DataProvider_.isEmpty();
 }
 /** @nodts */
 m_sort__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {
  this.f_sortInfo__org_patternfly_dataprovider_DataProvider_ = sortInfo;
  this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
 }
 /** @nodts */
 m_setPageSize__int__void(/** number */ pageSize) {
  let oldPageSize = this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPageSize__int();
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_setPageSize__int__void_$pp_org_patternfly_dataprovider(pageSize);
  if (oldPageSize != this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPageSize__int()) {
   this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts */
 m_gotoFirstPage__void() {
  this.m_gotoPage__int__void(0);
 }
 /** @nodts */
 m_gotoPreviousPage__void() {
  this.m_gotoPage__int__void(this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPage__int() - 1 | 0);
 }
 /** @nodts */
 m_gotoNextPage__void() {
  this.m_gotoPage__int__void(this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPage__int() + 1 | 0);
 }
 /** @nodts */
 m_gotoLastPage__void() {
  this.m_gotoPage__int__void(this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPages__int() - 1 | 0);
 }
 /** @nodts */
 m_gotoPage__int__void(/** number */ page) {
  let oldPage = this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPage__int();
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_setPage__int__void_$pp_org_patternfly_dataprovider(page);
  if (oldPage != this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPage__int()) {
   this.m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider();
  }
 }
 /** @nodts @return {List<T>} */
 m_paged__java_util_List__java_util_List_$p_org_patternfly_dataprovider_DataProvider(/** List<T> */ values) {
  let pages = this.m_partition__java_util_List__int__java_util_List_$p_org_patternfly_dataprovider_DataProvider(values, this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPageSize__int());
  return /**@type {List<T>}*/ ($Casts.$to(pages.getAtIndex(Math.min(this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPage__int(), pages.size() - 1 | 0)), List));
 }
 /** @nodts @return {List<List<T>>} */
 m_partition__java_util_List__int__java_util_List_$p_org_patternfly_dataprovider_DataProvider(/** List<T> */ list, /** number */ size) {
  if (!$Equality.$same(list, null)) {
   if (size > 0) {
    return /**@type {!Partition<T>}*/ (Partition.$create__java_util_List__int(list, size));
   }
  }
  return /**@type {List<List<T>>}*/ (Collections.m_emptyList__java_util_List());
 }
 /** @nodts */
 m_bindDisplay__org_patternfly_dataprovider_Display__void(/** Display<T> */ display) {
  this.f_displays__org_patternfly_dataprovider_DataProvider_.add(display);
 }
 /** @nodts */
 m_reset__void_$p_org_patternfly_dataprovider_DataProvider() {
  this.f_allItems__org_patternfly_dataprovider_DataProvider_.clear();
  this.f_filters__org_patternfly_dataprovider_DataProvider_.clear();
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
  this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
  this.f_sortInfo__org_patternfly_dataprovider_DataProvider_.m_reset__void_$pp_org_patternfly_dataprovider();
 }
 /** @nodts */
 m_internalUpdate__void_$p_org_patternfly_dataprovider_DataProvider() {
  let stream = this.f_allItems__org_patternfly_dataprovider_DataProvider_.values().m_stream__java_util_stream_Stream();
  if (!this.f_filters__org_patternfly_dataprovider_DataProvider_.isEmpty()) {
   let predicate = null;
   for (let $iterator = this.f_filters__org_patternfly_dataprovider_DataProvider_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let p = /**@type {Predicate<T>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Predicate));
    {
     if ($Equality.$same(predicate, null)) {
      predicate = p;
     } else {
      predicate = predicate.m_and__java_util_function_Predicate__java_util_function_Predicate(p);
     }
    }
   }
   stream = stream.m_filter__java_util_function_Predicate__java_util_stream_Stream(predicate);
  }
  if (!$Equality.$same(this.f_sortInfo__org_patternfly_dataprovider_DataProvider_.m_getComparator__java_util_Comparator(), null)) {
   stream = stream.m_sorted__java_util_Comparator__java_util_stream_Stream(this.f_sortInfo__org_patternfly_dataprovider_DataProvider_.m_getComparator__java_util_Comparator());
  }
  let values = /**@type {List<T>}*/ ($Casts.$to(stream.m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<T, *, List<T>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
  if (values.size() > this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_getPageSize__int()) {
   this.f_filteredItems__org_patternfly_dataprovider_DataProvider_ = /**@type {Map<?string, T>}*/ ($Casts.$to(values.m_stream__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(this.m_toLinkedMap__java_util_function_Function__java_util_function_Function__java_util_stream_Collector_$p_org_patternfly_dataprovider_DataProvider(this.f_identifier__org_patternfly_dataprovider_DataProvider_, /**@type {j_u_function_Function<T, T>}*/ (j_u_function_Function.m_identity__java_util_function_Function()))), Map));
   values = this.m_paged__java_util_List__java_util_List_$p_org_patternfly_dataprovider_DataProvider(values);
   this.f_visibleItems__org_patternfly_dataprovider_DataProvider_ = /**@type {Map<?string, T>}*/ ($Casts.$to(values.m_stream__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(this.m_toLinkedMap__java_util_function_Function__java_util_function_Function__java_util_stream_Collector_$p_org_patternfly_dataprovider_DataProvider(this.f_identifier__org_patternfly_dataprovider_DataProvider_, /**@type {j_u_function_Function<T, T>}*/ (j_u_function_Function.m_identity__java_util_function_Function()))), Map));
  } else {
   this.f_filteredItems__org_patternfly_dataprovider_DataProvider_ = this.f_visibleItems__org_patternfly_dataprovider_DataProvider_ = /**@type {Map<?string, T>}*/ ($Casts.$to(values.m_stream__java_util_stream_Stream().m_collect__java_util_stream_Collector__java_lang_Object(this.m_toLinkedMap__java_util_function_Function__java_util_function_Function__java_util_stream_Collector_$p_org_patternfly_dataprovider_DataProvider(this.f_identifier__org_patternfly_dataprovider_DataProvider_, /**@type {j_u_function_Function<T, T>}*/ (j_u_function_Function.m_identity__java_util_function_Function()))), Map));
  }
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_setTotal__int__void_$pp_org_patternfly_dataprovider(this.f_filteredItems__org_patternfly_dataprovider_DataProvider_.size());
  this.f_pageInfo__org_patternfly_dataprovider_DataProvider_.m_setVisible__int__void_$pp_org_patternfly_dataprovider(this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.size());
  for (let $iterator_1 = this.f_displays__org_patternfly_dataprovider_DataProvider_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
   let display = /**@type {Display<T>}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Display));
   {
    display.m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(this.f_visibleItems__org_patternfly_dataprovider_DataProvider_.values(), this.f_pageInfo__org_patternfly_dataprovider_DataProvider_);
    display.m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(this.f_selectionInfo__org_patternfly_dataprovider_DataProvider_);
    display.m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(this.f_sortInfo__org_patternfly_dataprovider_DataProvider_);
   }
  }
 }
 /** @nodts @return {Collector<T, ?, Map<?string, T>>} */
 m_toLinkedMap__java_util_function_Function__java_util_function_Function__java_util_stream_Collector_$p_org_patternfly_dataprovider_DataProvider(/** j_u_function_Function<?, ?> */ keyMapper, /** j_u_function_Function<?, ?> */ valueMapper) {
  return /**@type {Collector<T, *, Map<?string, T>>}*/ (Collectors.m_toMap__java_util_function_Function__java_util_function_Function__java_util_function_BinaryOperator__java_util_function_Supplier__java_util_stream_Collector(keyMapper, valueMapper, BinaryOperator.$adapt((/** T */ u, /** T */ v) =>{
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String('Duplicate key ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(u)));
  }), Supplier.$adapt(() =>{
   return /**@type {!LinkedHashMap<?string, T>}*/ (LinkedHashMap.$create__());
  })));
 }
 /** @nodts */
 static $clinit() {
  DataProvider.$clinit = () =>{};
  DataProvider.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataProvider;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  List = goog.module.get('java.util.List$impl');
  Map = goog.module.get('java.util.Map$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  BinaryOperator = goog.module.get('java.util.function.BinaryOperator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Partition = goog.module.get('org.patternfly.dataprovider.DataProvider.Partition$impl');
  Display = goog.module.get('org.patternfly.dataprovider.Display$impl');
  PageInfo = goog.module.get('org.patternfly.dataprovider.PageInfo$impl');
  SelectionInfo = goog.module.get('org.patternfly.dataprovider.SelectionInfo$impl');
  SortInfo = goog.module.get('org.patternfly.dataprovider.SortInfo$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(DataProvider, 'org.patternfly.dataprovider.DataProvider');

exports = DataProvider;

//# sourceMappingURL=DataProvider.js.map
