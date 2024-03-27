goog.module('org.patternfly.showcase.demo.user.User.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {?string} */
 static m_fullName__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.name.first) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.name.last);
 }
 /** @final @nodts @return {Date} */
 static m_getBirthday__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return new Date($thisArg.dob.date);
 }
 /** @final @nodts @return {Date} */
 static m_getRegistered__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return new Date($thisArg.registered.date);
 }
 /** @final @nodts @return {HTMLElement} */
 static m_address__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_address__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.street.name) + ' ' + $thisArg.location.street.number), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.postcode) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.city)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.state) + ', ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.nat)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder($Overlay.m_googleMaps__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String($thisArg)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('target', 'map'), HTMLContainerBuilder)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('ml-sm')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_mapMarkedAlt__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
 }
 /** @final @nodts @return {HTMLElement} */
 static m_contact__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('mailto:' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.email)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(fas.m_envelope__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mr-sm')], j_l_String))), SVGContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder($thisArg.email), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('tel:' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.phone)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(fas.m_phone__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mr-sm')], j_l_String))), SVGContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder($thisArg.phone), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('tel:' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.cell)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(fas.m_mobileAlt__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mr-sm')], j_l_String))), SVGContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder($thisArg.cell), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay));
 }
 /** @final @nodts @return {HTMLImageElement} */
 static m_nat__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLImageElement(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLImageElement}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder('https://www.countryflags.io/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.nat) + '/flat/32.png').m_title__java_lang_String__org_jboss_elemento_TypedBuilder($thisArg.nat), HTMLElementBuilder)).m_style__java_lang_String__org_jboss_elemento_TypedBuilder('min-width:32px'), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLImageElement_$Overlay));
 }
 /** @final @nodts @return {HTMLDivElement} */
 static m_photo__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLDivElement(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['sc-user-photo-75'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder($thisArg.picture.medium)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
 }
 /** @final @nodts @return {?string} */
 static m_googleMaps__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return 'https://www.google.com/maps/search/?api=1&query=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.coordinates.latitude) + ',' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.location.coordinates.longitude);
 }
 /** @final @nodts @return {boolean} */
 static m_match__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String__boolean(/** !Object */ $thisArg, /** ?string */ query) {
  $Overlay.$clinit();
  return j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg.name.first), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(query)) || j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg.name.last), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(query)) || j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg.email), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(query)) || j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String($thisArg.login.username), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(query));
 }
 /** @nodts @return {Comparator<Object>} */
 static get f_BIRTHDAY_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BIRTHDAY_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay);
 }
 /** @nodts @return {Comparator<Object>} */
 static get f_REGISTERED_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_REGISTERED_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_BIRTHDAY_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay = Comparator.$adapt((u1, u2) =>{
   let u1_1 = /**@type {Object}*/ ($Casts.$to(u1, $Overlay));
   let u2_1 = /**@type {Object}*/ ($Casts.$to(u2, $Overlay));
   return $Primitives.narrowDoubleToInt($Overlay.m_getBirthday__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(u1_1).getTime() - $Overlay.m_getBirthday__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(u2_1).getTime());
  });
  $Overlay.$static_REGISTERED_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay = Comparator.$adapt((u1_2, u2_2) =>{
   let u1_3 = /**@type {Object}*/ ($Casts.$to(u1_2, $Overlay));
   let u2_3 = /**@type {Object}*/ ($Casts.$to(u2_2, $Overlay));
   return $Primitives.narrowDoubleToInt($Overlay.m_getRegistered__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(u1_3).getTime() - $Overlay.m_getRegistered__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(u2_3).getTime());
  });
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {Comparator<Object>} @nodts*/
$Overlay.$static_BIRTHDAY_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay;
/**@private {Comparator<Object>} @nodts*/
$Overlay.$static_REGISTERED_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay;
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=User$$Overlay.js.map
