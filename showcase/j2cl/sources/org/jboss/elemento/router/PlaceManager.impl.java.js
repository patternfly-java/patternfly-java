goog.module('org.jboss.elemento.router.PlaceManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let History_$Overlay = goog.forwardDeclare('elemental2.dom.History.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let PopStateEvent_$Overlay = goog.forwardDeclare('elemental2.dom.PopStateEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let AfterPlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.AfterPlaceHandler$impl');
let Base = goog.forwardDeclare('org.jboss.elemento.router.Base$impl');
let BeforePlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.BeforePlaceHandler$impl');
let LinkSelector = goog.forwardDeclare('org.jboss.elemento.router.LinkSelector$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let DefaultNotFound = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.DefaultNotFound$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PlaceManager extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Place>} @nodts*/
  this.f_routes__org_jboss_elemento_router_PlaceManager_;
  /**@type {Map<Place, Supplier<Page>>} @nodts*/
  this.f_places__org_jboss_elemento_router_PlaceManager_;
  /**@type {List<BeforePlaceHandler>} @nodts*/
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_;
  /**@type {List<AfterPlaceHandler>} @nodts*/
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_;
  /**@type {Base} @nodts*/
  this.f_base__org_jboss_elemento_router_PlaceManager_;
  /**@type {Place} @nodts*/
  this.f_current__org_jboss_elemento_router_PlaceManager_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_root__org_jboss_elemento_router_PlaceManager_;
  /**@type {j_u_function_Function<?string, ?string>} @nodts*/
  this.f_title__org_jboss_elemento_router_PlaceManager_;
  /**@type {j_u_function_Function<Place, Page>} @nodts*/
  this.f_notFound__org_jboss_elemento_router_PlaceManager_;
  /**@type {LinkSelector} @nodts*/
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_;
  /**@type {?string} @nodts*/
  this.f_failedRoute__org_jboss_elemento_router_PlaceManager_;
 }
 /** @nodts @return {!PlaceManager} */
 static $create__() {
  PlaceManager.$clinit();
  let $instance = new PlaceManager();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager__void() {
  this.$ctor__java_lang_Object__void();
  this.f_routes__org_jboss_elemento_router_PlaceManager_ = /**@type {!HashMap<?string, Place>}*/ (HashMap.$create__());
  this.f_places__org_jboss_elemento_router_PlaceManager_ = /**@type {!HashMap<Place, Supplier<Page>>}*/ (HashMap.$create__());
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_ = /**@type {!ArrayList<BeforePlaceHandler>}*/ (ArrayList.$create__());
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_ = /**@type {!ArrayList<AfterPlaceHandler>}*/ (ArrayList.$create__());
  this.f_base__org_jboss_elemento_router_PlaceManager_ = Base.$create__java_lang_String('/');
  this.f_current__org_jboss_elemento_router_PlaceManager_ = PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_;
  this.f_root__org_jboss_elemento_router_PlaceManager_ = Supplier.$adapt(() =>{
   return DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body;
  });
  this.f_title__org_jboss_elemento_router_PlaceManager_ = /**@type {j_u_function_Function<?string, ?string>}*/ (j_u_function_Function.m_identity__java_util_function_Function());
  this.f_notFound__org_jboss_elemento_router_PlaceManager_ = j_u_function_Function.$adapt((place) =>{
   let place_1 = /**@type {Place}*/ ($Casts.$to(place, Place));
   return DefaultNotFound.$create__();
  });
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_ = LinkSelector.$create__();
  this.f_failedRoute__org_jboss_elemento_router_PlaceManager_ = null;
 }
 /** @nodts @return {PlaceManager} */
 m_base__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ base) {
  this.f_base__org_jboss_elemento_router_PlaceManager_ = Base.$create__java_lang_String(base);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_root__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  }));
 }
 /** @nodts @return {PlaceManager} */
 m_root__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(/** By */ selector) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, selector);
  }));
 }
 /** @nodts @return {PlaceManager} */
 m_root__elemental2_dom_HTMLElement__org_jboss_elemento_router_PlaceManager(/** HTMLElement */ element) {
  return this.m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(Supplier.$adapt(() =>{
   return element;
  }));
 }
 /** @nodts @return {PlaceManager} */
 m_root__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/** Supplier<HTMLElement> */ root) {
  this.f_root__org_jboss_elemento_router_PlaceManager_ = root;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_title__java_util_function_Function__org_jboss_elemento_router_PlaceManager(/** j_u_function_Function<?string, ?string> */ title) {
  this.f_title__org_jboss_elemento_router_PlaceManager_ = title;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_notFound__java_util_function_Function__org_jboss_elemento_router_PlaceManager(/** j_u_function_Function<Place, Page> */ notFound) {
  this.f_notFound__org_jboss_elemento_router_PlaceManager_ = notFound;
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_beforePlace__org_jboss_elemento_router_BeforePlaceHandler__org_jboss_elemento_router_PlaceManager(/** BeforePlaceHandler */ beforePlace) {
  this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_.add(beforePlace);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_afterPlace__org_jboss_elemento_router_AfterPlaceHandler__org_jboss_elemento_router_PlaceManager(/** AfterPlaceHandler */ afterPlace) {
  this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_.add(afterPlace);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__java_lang_String__org_jboss_elemento_router_PlaceManager(/** ?string */ selector) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), false);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__java_lang_String__boolean__org_jboss_elemento_router_PlaceManager(/** ?string */ selector, /** boolean */ not) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_selector__java_lang_String__org_jboss_elemento_By(selector), not);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(/** By */ selector) {
  return this.m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(selector, false);
 }
 /** @nodts @return {PlaceManager} */
 m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(/** By */ selector, /** boolean */ not) {
  this.f_linkSelector__org_jboss_elemento_router_PlaceManager_ = LinkSelector.$create__org_jboss_elemento_By__boolean(selector, not);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_register__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/** Place */ place, /** Supplier<Page> */ page) {
  this.f_routes__org_jboss_elemento_router_PlaceManager_.put(place.f_route__org_jboss_elemento_router_Place, place);
  this.f_places__org_jboss_elemento_router_PlaceManager_.put(place, page);
  return this;
 }
 /** @nodts @return {PlaceManager} */
 m_register__java_util_Map__org_jboss_elemento_router_PlaceManager(/** Map<Place, Supplier<Page>> */ pages) {
  for (let $iterator = pages.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<Place, Supplier<Page>>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    this.m_register__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_PlaceManager(/**@type {Place}*/ ($Casts.$to(entry.m_getKey__java_lang_Object(), Place)), /**@type {Supplier<Page>}*/ ($Casts.$to(entry.m_getValue__java_lang_Object(), Supplier)));
   }
  }
  return this;
 }
 /** @nodts @return {Place} */
 m_current__org_jboss_elemento_router_Place() {
  return this.f_current__org_jboss_elemento_router_PlaceManager_;
 }
 /** @nodts @return {Place} */
 m_place__java_lang_String__org_jboss_elemento_router_Place(/** ?string */ route) {
  let place = this.m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(route);
  return PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_.equals(place) ? null : place;
 }
 /** @nodts */
 m_start__void() {
  this.m_bindClickHandler__void_$p_org_jboss_elemento_router_PlaceManager();
  this.m_bindHistoryHandler__void_$p_org_jboss_elemento_router_PlaceManager();
  let place = this.m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.pathname);
  if (this.m_internalGoto__org_jboss_elemento_router_Place__boolean_$p_org_jboss_elemento_router_PlaceManager(place)) {
   this.m_updateHistory__org_jboss_elemento_router_Place__boolean__void_$p_org_jboss_elemento_router_PlaceManager(place, false);
  }
 }
 /** @nodts */
 m_goTo__java_lang_String__void(/** ?string */ route) {
  this.m_goTo__org_jboss_elemento_router_Place__void(this.m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(route));
 }
 /** @nodts */
 m_goTo__org_jboss_elemento_router_Place__void(/** Place */ place) {
  if (!$Equality.$same(place, null)) {
   if (this.m_internalGoto__org_jboss_elemento_router_Place__boolean_$p_org_jboss_elemento_router_PlaceManager(place)) {
    this.m_updateHistory__org_jboss_elemento_router_Place__boolean__void_$p_org_jboss_elemento_router_PlaceManager(place, true);
   }
  }
 }
 /** @nodts */
 m_bindClickHandler__void_$p_org_jboss_elemento_router_PlaceManager() {
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let a = this.m_anchorElement__elemental2_dom_Event__elemental2_dom_HTMLAnchorElement_$p_org_jboss_elemento_router_PlaceManager(e_1);
   if (!$Equality.$same(a, null)) {
    let url = new URL(a.href, DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.origin);
    if (this.m_shouldHandleLink__elemental2_dom_HTMLAnchorElement__elemental2_dom_URL__boolean_$p_org_jboss_elemento_router_PlaceManager(a, url)) {
     let place = this.m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(url.pathname);
     e_1.preventDefault();
     if (this.m_internalGoto__org_jboss_elemento_router_Place__boolean_$p_org_jboss_elemento_router_PlaceManager(place)) {
      this.m_updateHistory__org_jboss_elemento_router_Place__boolean__void_$p_org_jboss_elemento_router_PlaceManager(place, true);
     }
    }
   }
  });
 }
 /** @nodts @return {HTMLAnchorElement} */
 m_anchorElement__elemental2_dom_Event__elemental2_dom_HTMLAnchorElement_$p_org_jboss_elemento_router_PlaceManager(/** Event */ event) {
  let anchorElement = null;
  let target = event.target;
  if (HTMLAnchorElement_$Overlay.$isInstance(target)) {
   anchorElement = /**@type {HTMLAnchorElement}*/ ($Casts.$to(target, HTMLAnchorElement_$Overlay));
  } else {
   let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Element}*/ ($Casts.$to(target, Element_$Overlay)), By.m_element__java_lang_String__org_jboss_elemento_By('a'));
   if (HTMLAnchorElement_$Overlay.$isInstance(closest)) {
    anchorElement = /**@type {HTMLAnchorElement}*/ ($Casts.$to(closest, HTMLAnchorElement_$Overlay));
   }
  }
  return anchorElement;
 }
 /** @nodts @return {boolean} */
 m_shouldHandleLink__elemental2_dom_HTMLAnchorElement__elemental2_dom_URL__boolean_$p_org_jboss_elemento_router_PlaceManager(/** HTMLAnchorElement */ a, /** URL */ url) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(url.origin, DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.origin) && j_l_String.m_isEmpty__java_lang_String__boolean(url.hash)) {
   return this.f_linkSelector__org_jboss_elemento_router_PlaceManager_.m_matches__elemental2_dom_HTMLAnchorElement__boolean_$pp_org_jboss_elemento_router(a);
  }
  return false;
 }
 /** @nodts */
 m_bindHistoryHandler__void_$p_org_jboss_elemento_router_PlaceManager() {
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_popstate__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {PopStateEvent}*/ ($Casts.$to(event, PopStateEvent_$Overlay));
   if (!$Equality.$same(event_1.state, null)) {
    let route = j_l_String.m_valueOf__java_lang_Object__java_lang_String(event_1.state);
    let place = this.m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(route);
    this.m_internalGoto__org_jboss_elemento_router_Place__boolean_$p_org_jboss_elemento_router_PlaceManager(place);
   }
  });
 }
 /** @nodts @return {Place} */
 m_findPlace__java_lang_String__org_jboss_elemento_router_Place_$p_org_jboss_elemento_router_PlaceManager(/** ?string */ route) {
  let relative = this.f_base__org_jboss_elemento_router_PlaceManager_.m_relative__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(route);
  let place = /**@type {Place}*/ ($Casts.$to(this.f_routes__org_jboss_elemento_router_PlaceManager_.getOrDefault(relative, PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_), Place));
  if (PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_.equals(place)) {
   this.f_failedRoute__org_jboss_elemento_router_PlaceManager_ = route;
  }
  return place;
 }
 /** @nodts @return {boolean} */
 m_internalGoto__org_jboss_elemento_router_Place__boolean_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place) {
  for (let $iterator = this.f_beforeHandlers__org_jboss_elemento_router_PlaceManager_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handler = /**@type {BeforePlaceHandler}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), BeforePlaceHandler));
   {
    if (!handler.m_shouldGoTo__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__boolean(this, place)) {
     return false;
    }
   }
  }
  let page = this.m_findPage__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(place);
  if (!$Equality.$same(place.f_title__org_jboss_elemento_router_Place, null)) {
   DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.title = /**@type {?string}*/ ($Casts.$to(this.f_title__org_jboss_elemento_router_PlaceManager_.m_apply__java_lang_Object__java_lang_Object(place.f_title__org_jboss_elemento_router_Place), j_l_String));
  }
  let rootElement = !$Equality.$same(place.f_root__org_jboss_elemento_router_Place, null) ? /**@type {HTMLElement}*/ ($Casts.$to(place.f_root__org_jboss_elemento_router_Place.m_get__java_lang_Object(), $Overlay)) : /**@type {HTMLElement}*/ ($Casts.$to(this.f_root__org_jboss_elemento_router_PlaceManager_.m_get__java_lang_Object(), $Overlay));
  if ($Equality.$same(rootElement, null)) {
   return false;
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(rootElement);
  for (let $iterator_1 = page.m_elements__java_lang_Iterable().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), $Overlay));
   {
    rootElement.appendChild(e);
   }
  }
  if (PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_.equals(place)) {
   return false;
  } else {
   this.f_current__org_jboss_elemento_router_PlaceManager_ = place;
   for (let $iterator_2 = this.f_afterHandlers__org_jboss_elemento_router_PlaceManager_.m_iterator__java_util_Iterator(); $iterator_2.m_hasNext__boolean(); ) {
    let handler_1 = /**@type {AfterPlaceHandler}*/ ($Casts.$to($iterator_2.m_next__java_lang_Object(), AfterPlaceHandler));
    {
     handler_1.m_afterPlace__org_jboss_elemento_router_PlaceManager__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page__void(this, place, page);
    }
   }
   return true;
  }
 }
 /** @nodts @return {Page} */
 m_findPage__org_jboss_elemento_router_Place__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place) {
  if (this.f_places__org_jboss_elemento_router_PlaceManager_.containsKey(place)) {
   let supplier = /**@type {Supplier<Page>}*/ ($Casts.$to(this.f_places__org_jboss_elemento_router_PlaceManager_.get(place), Supplier));
   return /**@type {Page}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Page));
  } else {
   return this.m_notFound__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager();
  }
 }
 /** @nodts @return {Page} */
 m_notFound__org_jboss_elemento_router_Page_$p_org_jboss_elemento_router_PlaceManager() {
  if (!$Equality.$same(this.f_notFound__org_jboss_elemento_router_PlaceManager_, null)) {
   return /**@type {Page}*/ ($Casts.$to(this.f_notFound__org_jboss_elemento_router_PlaceManager_.m_apply__java_lang_Object__java_lang_Object(Place.$create__java_lang_String__java_lang_String(this.f_failedRoute__org_jboss_elemento_router_PlaceManager_, 'Not found')), Page));
  } else {
   return DefaultNotFound.$create__();
  }
 }
 /** @nodts */
 m_updateHistory__org_jboss_elemento_router_Place__boolean__void_$p_org_jboss_elemento_router_PlaceManager(/** Place */ place, /** boolean */ push) {
  let absolute = this.f_base__org_jboss_elemento_router_PlaceManager_.m_absolute__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(place.f_route__org_jboss_elemento_router_Place);
  if (push) {
   History_$Overlay.m_pushState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(goog.global.history, place.f_route__org_jboss_elemento_router_Place, '', absolute);
  } else {
   History_$Overlay.m_replaceState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(goog.global.history, place.f_route__org_jboss_elemento_router_Place, '', absolute);
  }
 }
 /** @nodts */
 static $clinit() {
  PlaceManager.$clinit = () =>{};
  PlaceManager.$loadModules();
  j_l_Object.$clinit();
  PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_ = Place.$create__java_lang_String('org.jboss.elemento.router.notFound');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PlaceManager;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  History_$Overlay = goog.module.get('elemental2.dom.History.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  PopStateEvent_$Overlay = goog.module.get('elemental2.dom.PopStateEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  AfterPlaceHandler = goog.module.get('org.jboss.elemento.router.AfterPlaceHandler$impl');
  Base = goog.module.get('org.jboss.elemento.router.Base$impl');
  BeforePlaceHandler = goog.module.get('org.jboss.elemento.router.BeforePlaceHandler$impl');
  LinkSelector = goog.module.get('org.jboss.elemento.router.LinkSelector$impl');
  Page = goog.module.get('org.jboss.elemento.router.Page$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  DefaultNotFound = goog.module.get('org.jboss.elemento.router.PlaceManager.DefaultNotFound$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Place} @nodts*/
PlaceManager.f_NOT_FOUND__org_jboss_elemento_router_PlaceManager_;
$Util.$setClassMetadata(PlaceManager, 'org.jboss.elemento.router.PlaceManager');

exports = PlaceManager;

//# sourceMappingURL=PlaceManager.js.map
