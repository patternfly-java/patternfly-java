goog.module('org.patternfly.showcase.Showcase$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let AfterPlaceHandler = goog.forwardDeclare('org.jboss.elemento.router.AfterPlaceHandler$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');
let RoutesImpl = goog.forwardDeclare('org.jboss.elemento.router.RoutesImpl$impl');
let BackToTop = goog.forwardDeclare('org.patternfly.component.backtotop.BackToTop$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.page.Masthead$impl');
let MastheadBrand = goog.forwardDeclare('org.patternfly.component.page.MastheadBrand$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.page.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.page.MastheadToggle$impl');
let org_patternfly_component_page_Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageMain = goog.forwardDeclare('org.patternfly.component.page.PageMain$impl');
let PageSidebar = goog.forwardDeclare('org.patternfly.component.page.PageSidebar$impl');
let PageSidebarBody = goog.forwardDeclare('org.patternfly.component.page.PageSidebarBody$impl');
let SkipToContent = goog.forwardDeclare('org.patternfly.component.skiptocontent.SkipToContent$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');
let Assets = goog.forwardDeclare('org.patternfly.showcase.Assets$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let NotFound = goog.forwardDeclare('org.patternfly.showcase.NotFound$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Showcase extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Showcase} */
 static $create__() {
  Showcase.$clinit();
  let $instance = new Showcase();
  $instance.$ctor__org_patternfly_showcase_Showcase__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Showcase__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_init__java_lang_String__void(/** ?string */ base) {
  Showcase.$clinit();
  Showcase.f_navigation__org_patternfly_showcase_Showcase_ = Navigation.m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical);
  Showcase.f_placeManager__org_patternfly_showcase_Showcase_ = PlaceManager.$create__().m_base__java_lang_String__org_jboss_elemento_router_PlaceManager(base).m_root__org_jboss_elemento_By__org_jboss_elemento_router_PlaceManager(By.m_id__java_lang_String__org_jboss_elemento_By(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase)).m_linkSelector__org_jboss_elemento_By__boolean__org_jboss_elemento_router_PlaceManager(By.m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By('target', ApiDoc.f_API_DOC_TARGET__org_patternfly_showcase_ApiDoc), true).m_title__java_util_function_Function__org_jboss_elemento_router_PlaceManager(j_u_function_Function.$adapt((title) =>{
   let title_1 = /**@type {?string}*/ ($Casts.$to(title, j_l_String));
   return 'PatternFly Java \u2022 ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(title_1);
  })).m_notFound__java_util_function_Function__org_jboss_elemento_router_PlaceManager(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Place}*/ ($Casts.$to(arg0, Place));
   return NotFound.$create__org_jboss_elemento_router_Place(arg0_1);
  })).m_register__java_util_Map__org_jboss_elemento_router_PlaceManager(RoutesImpl.f_INSTANCE__org_jboss_elemento_router_RoutesImpl.m_places__java_util_Map()).m_afterPlace__org_jboss_elemento_router_AfterPlaceHandler__org_jboss_elemento_router_PlaceManager(AfterPlaceHandler.$adapt((/** PlaceManager */ pm, /** Place */ place, /** Page */ page) =>{
   Showcase.f_navigation__org_patternfly_showcase_Showcase_.m_select__java_lang_String__void(place.f_route__org_jboss_elemento_router_Place);
  }));
  Showcase.f_navigation__org_patternfly_showcase_Showcase_.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(Showcase.m_ni__org_jboss_elemento_router_Place__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place('/get-started'))).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('components', 'Components').m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(Showcase.m_ni__org_jboss_elemento_router_Place__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/all-components'))).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(Data.m_topLevelComponents__java_util_List(), j_u_function_Function.$adapt((component) =>{
   let component_1 = /**@type {Object}*/ ($Casts.$to(component, $Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(component_1.route, component_1.title, component_1.route);
  })).m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('forms', 'Forms').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(Data.m_groupComponents__java_lang_String__java_util_List('forms'), j_u_function_Function.$adapt((sc) =>{
   let sc_1 = /**@type {Object}*/ ($Casts.$to(sc, $Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(sc_1.route, sc_1.title, sc_1.route);
  })), '/components/expandable-section').m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('menus', 'Menus').m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(Data.m_groupComponents__java_lang_String__java_util_List('menus'), j_u_function_Function.$adapt((sc_2) =>{
   let sc_3 = /**@type {Object}*/ ($Casts.$to(sc_2, $Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(sc_3.route, sc_3.title, sc_3.route);
  })), '/components/masthead')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('layouts', 'Layouts').m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(Showcase.m_ni__org_jboss_elemento_router_Place__java_lang_String__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/about-layouts'), 'About layouts')).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(Data.m_layouts__java_util_List(), j_u_function_Function.$adapt((layout) =>{
   let layout_1 = /**@type {Object}*/ ($Casts.$to(layout, Layout_$Overlay));
   return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(layout_1.route, layout_1.title, layout_1.route);
  }))).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(Showcase.m_ni__org_jboss_elemento_router_Place__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place('/contribute'))).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(Showcase.m_ni__org_jboss_elemento_router_Place__org_patternfly_component_navigation_NavigationItem(Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_place__java_lang_String__org_jboss_elemento_router_Place('/get-in-touch')));
  Elements.m_body__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {org_patternfly_component_page_Page}*/ ($Casts.$to(org_patternfly_component_page_Page.m_page__org_patternfly_component_page_Page().m_addSkipToContent__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(SkipToContent.m_skipToContent__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase)).m_addMasthead__org_patternfly_component_page_Masthead__org_patternfly_component_page_Page(/**@type {Masthead}*/ ($Casts.$to(Masthead.m_masthead__org_patternfly_component_page_Masthead().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-masthead'], j_l_String))), Masthead)).m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_page_MastheadToggle().m_toggleSidebar__org_patternfly_component_page_MastheadToggle()).m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_addBrand__org_patternfly_component_page_MastheadBrand__org_patternfly_component_page_MastheadMain(MastheadBrand.m_mastheadBrand__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_page_MastheadBrand(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('/')).m_addBrand__org_patternfly_component_brand_Brand__org_patternfly_component_page_MastheadBrand(/**@type {Brand}*/ ($Casts.$to(Brand.m_brand__java_lang_String__java_lang_String__org_patternfly_component_brand_Brand(Assets.f_pfLogo__org_patternfly_showcase_Assets, 'PatternFly').m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).f_name__org_patternfly_style_Variable, '36px'), Brand)))))).m_addSidebar__org_patternfly_component_page_PageSidebar__org_patternfly_component_page_Page(PageSidebar.m_pageSidebar__org_patternfly_component_page_PageSidebar().m_addBody__org_patternfly_component_page_PageSidebarBody__org_patternfly_component_page_PageSidebar(PageSidebarBody.m_pageSidebarBody__org_patternfly_component_page_PageSidebarBody().m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_page_PageSidebarBody(Showcase.f_navigation__org_patternfly_showcase_Showcase_))).m_addMain__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(PageMain.m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {BackToTop}*/ ($Casts.$to(BackToTop.m_backToTop__org_patternfly_component_backtotop_BackToTop().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-back-to-top'], j_l_String))), BackToTop)).m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_backtotop_BackToTop(By.m_id__java_lang_String__org_jboss_elemento_By(Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase))), org_patternfly_component_page_Page)));
 }
 /** @nodts @return {NavigationItem} */
 static m_ni__org_jboss_elemento_router_Place__org_patternfly_component_navigation_NavigationItem(/** Place */ place) {
  return Showcase.m_ni__org_jboss_elemento_router_Place__java_lang_String__org_patternfly_component_navigation_NavigationItem(place, place.f_title__org_jboss_elemento_router_Place);
 }
 /** @nodts @return {NavigationItem} */
 static m_ni__org_jboss_elemento_router_Place__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** Place */ place, /** ?string */ text) {
  return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(place.f_route__org_jboss_elemento_router_Place, text, place.f_route__org_jboss_elemento_router_Place);
 }
 /** @nodts */
 static m_start__void() {
  Showcase.$clinit();
  Showcase.f_placeManager__org_patternfly_showcase_Showcase_.m_start__void();
 }
 /** @nodts */
 static $clinit() {
  Showcase.$clinit = () =>{};
  Showcase.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Showcase;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  AfterPlaceHandler = goog.module.get('org.jboss.elemento.router.AfterPlaceHandler$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  PlaceManager = goog.module.get('org.jboss.elemento.router.PlaceManager$impl');
  RoutesImpl = goog.module.get('org.jboss.elemento.router.RoutesImpl$impl');
  BackToTop = goog.module.get('org.patternfly.component.backtotop.BackToTop$impl');
  Brand = goog.module.get('org.patternfly.component.brand.Brand$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  Navigation = goog.module.get('org.patternfly.component.navigation.Navigation$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Masthead = goog.module.get('org.patternfly.component.page.Masthead$impl');
  MastheadBrand = goog.module.get('org.patternfly.component.page.MastheadBrand$impl');
  MastheadMain = goog.module.get('org.patternfly.component.page.MastheadMain$impl');
  MastheadToggle = goog.module.get('org.patternfly.component.page.MastheadToggle$impl');
  org_patternfly_component_page_Page = goog.module.get('org.patternfly.component.page.Page$impl');
  PageMain = goog.module.get('org.patternfly.component.page.PageMain$impl');
  PageSidebar = goog.module.get('org.patternfly.component.page.PageSidebar$impl');
  PageSidebarBody = goog.module.get('org.patternfly.component.page.PageSidebarBody$impl');
  SkipToContent = goog.module.get('org.patternfly.component.skiptocontent.SkipToContent$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
  Assets = goog.module.get('org.patternfly.showcase.Assets$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  NotFound = goog.module.get('org.patternfly.showcase.NotFound$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Showcase.f_MAIN_ID__org_patternfly_showcase_Showcase = 'pfj-main-id';
/**@type {Navigation} @nodts*/
Showcase.f_navigation__org_patternfly_showcase_Showcase_;
/**@type {PlaceManager} @nodts*/
Showcase.f_placeManager__org_patternfly_showcase_Showcase_;
/**@type {org_patternfly_component_page_Page} @nodts*/
Showcase.f_page__org_patternfly_showcase_Showcase_;
$Util.$setClassMetadata(Showcase, 'org.patternfly.showcase.Showcase');

exports = Showcase;

//# sourceMappingURL=Showcase.js.map
