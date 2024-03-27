goog.module('org.jboss.elemento.router.Place$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Place extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_route__org_jboss_elemento_router_Place;
  /**@type {?string} @nodts*/
  this.f_title__org_jboss_elemento_router_Place;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_root__org_jboss_elemento_router_Place;
 }
 //Factory method corresponding to constructor 'Place(String)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String(/** ?string */ route) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__void(route);
  return $instance;
 }
 //Initialization from constructor 'Place(String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__void(/** ?string */ route) {
  this.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, null, /**@type {Supplier<HTMLElement>}*/ (null));
 }
 //Factory method corresponding to constructor 'Place(String, String)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__java_lang_String(/** ?string */ route, /** ?string */ title) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__void(route, title);
  return $instance;
 }
 //Initialization from constructor 'Place(String, String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__void(/** ?string */ route, /** ?string */ title) {
  this.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, title, /**@type {Supplier<HTMLElement>}*/ (null));
 }
 //Factory method corresponding to constructor 'Place(String, String, String)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__java_lang_String__java_lang_String(/** ?string */ route, /** ?string */ title, /** ?string */ selector) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_lang_String__void(route, title, selector);
  return $instance;
 }
 //Initialization from constructor 'Place(String, String, String)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ route, /** ?string */ title, /** ?string */ selector) {
  this.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, title, Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  }));
 }
 //Factory method corresponding to constructor 'Place(String, String, By)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__java_lang_String__org_jboss_elemento_By(/** ?string */ route, /** ?string */ title, /** By */ selector) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__org_jboss_elemento_By__void(route, title, selector);
  return $instance;
 }
 //Initialization from constructor 'Place(String, String, By)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__org_jboss_elemento_By__void(/** ?string */ route, /** ?string */ title, /** By */ selector) {
  this.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, title, Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, selector);
  }));
 }
 //Factory method corresponding to constructor 'Place(String, String, HTMLElement)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__java_lang_String__elemental2_dom_HTMLElement(/** ?string */ route, /** ?string */ title, /** HTMLElement */ element) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(route, title, element);
  return $instance;
 }
 //Initialization from constructor 'Place(String, String, HTMLElement)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ route, /** ?string */ title, /** HTMLElement */ element) {
  this.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, title, Supplier.$adapt(() =>{
   return element;
  }));
 }
 //Factory method corresponding to constructor 'Place(String, String, Supplier)'.
 /** @nodts @return {!Place} */
 static $create__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ route, /** ?string */ title, /** Supplier<HTMLElement> */ root) {
  Place.$clinit();
  let $instance = new Place();
  $instance.$ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(route, title, root);
  return $instance;
 }
 //Initialization from constructor 'Place(String, String, Supplier)'.
 /** @nodts */
 $ctor__org_jboss_elemento_router_Place__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ route, /** ?string */ title, /** Supplier<HTMLElement> */ root) {
  this.$ctor__java_lang_Object__void();
  this.f_route__org_jboss_elemento_router_Place = route;
  this.f_title__org_jboss_elemento_router_Place = title;
  this.f_root__org_jboss_elemento_router_Place = root;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let place = /**@type {Place}*/ ($Casts.$to(o, Place));
  return Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_route__org_jboss_elemento_router_Place, place.f_route__org_jboss_elemento_router_Place);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([this.f_route__org_jboss_elemento_router_Place]);
 }
 /** @override @return {?string} */
 toString() {
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('Place(').m_append__java_lang_String__java_lang_StringBuilder(this.f_route__org_jboss_elemento_router_Place);
  if (!$Equality.$same(this.f_title__org_jboss_elemento_router_Place, null)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder(', ').m_append__java_lang_String__java_lang_StringBuilder(this.f_title__org_jboss_elemento_router_Place);
  }
  if (!$Equality.$same(this.f_root__org_jboss_elemento_router_Place, null)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder(', custom root');
  }
  builder.m_append__char__java_lang_StringBuilder(41 /* ')' */);
  return builder.toString();
 }
 /** @nodts */
 static $clinit() {
  Place.$clinit = () =>{};
  Place.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Place;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Place, 'org.jboss.elemento.router.Place');

exports = Place;

//# sourceMappingURL=Place.js.map
