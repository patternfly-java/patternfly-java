goog.module('elemental2.dom.HTMLDocument.LinksHTMLCollectionTypeParameterUnionType.$Overlay$impl');

let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAreaElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {HTMLAnchorElement} */
 static m_asHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType__elemental2_dom_HTMLAnchorElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLAnchorElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLAnchorElement_$Overlay));
 }
 /** @nodts @return {HTMLAreaElement} */
 static m_asHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType__elemental2_dom_HTMLAreaElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLAreaElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLAreaElement_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isHTMLAnchorElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLAnchorElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isHTMLAreaElement__$devirt__elemental2_dom_HTMLDocument_LinksHTMLCollectionTypeParameterUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLAreaElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLAreaElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLDocument$LinksHTMLCollectionTypeParameterUnionType$$Overlay.js.map
