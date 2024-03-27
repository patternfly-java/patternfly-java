goog.module('org.treblereel.j2cl.processors.common.injectors.StyleInjector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLStyleElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLStyleElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StyleInjector extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLDocument} @nodts*/
  this.f_document__org_treblereel_j2cl_processors_common_injectors_StyleInjector;
  /**@type {HTMLElement} @nodts*/
  this.f_styleElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_;
 }
 /** @nodts @return {!StyleInjector} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ styleElement) {
  let $instance = new StyleInjector();
  $instance.$ctor__org_treblereel_j2cl_processors_common_injectors_StyleInjector__elemental2_dom_HTMLElement__void(styleElement);
  return $instance;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_injectors_StyleInjector__elemental2_dom_HTMLElement__void(/** HTMLElement */ styleElement) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_treblereel_j2cl_processors_common_injectors_StyleInjector();
  this.f_styleElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_ = styleElement;
 }
 /** @nodts @return {StyleInjector} */
 static m_fromString__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector(/** ?string */ contents) {
  StyleInjector.$clinit();
  let element = StyleInjector.m_createHTMLStyleElement__elemental2_dom_HTMLElement();
  element.textContent = contents;
  return StyleInjector.$create__elemental2_dom_HTMLElement(element);
 }
 /** @nodts @return {HTMLElement} */
 static m_createHTMLStyleElement__elemental2_dom_HTMLElement() {
  let style = /**@type {HTMLStyleElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement('style'), HTMLStyleElement_$Overlay));
  style.type = 'text/css';
  return style;
 }
 /** @nodts @return {HTMLElement} */
 static m_createStyleElement__elemental2_dom_HTMLElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__elemental2_dom_HTMLElement(/** HTMLElement */ style, /** ?function(HTMLElement):void */ onResolve, /** ?function(HTMLElement):void */ onReject) {
  if (!$Equality.$same(onResolve, null)) {
   style.onload = (/** Event */ e) =>{
    onResolve(style);
   };
  }
  if (!$Equality.$same(onReject, null)) {
   style.onerror = (/** Event */ e_1) =>{
    onReject(style);
    return null;
   };
  }
  return style;
 }
 /** @nodts @return {StyleInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector(/** ?string */ url) {
  StyleInjector.$clinit();
  return StyleInjector.m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector(url, null);
 }
 /** @nodts @return {StyleInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector(/** ?string */ url, /** ?function(HTMLElement):void */ onResolve) {
  StyleInjector.$clinit();
  return StyleInjector.m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector(url, onResolve, null);
 }
 /** @nodts @return {StyleInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector(/** ?string */ url, /** ?function(HTMLElement):void */ onResolve, /** ?function(HTMLElement):void */ onReject) {
  StyleInjector.$clinit();
  let element = StyleInjector.m_createHTMLLinkElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__elemental2_dom_HTMLElement(onResolve, onReject);
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(element, 'href', url);
  return StyleInjector.$create__elemental2_dom_HTMLElement(element);
 }
 /** @nodts @return {HTMLElement} */
 static m_createHTMLLinkElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__elemental2_dom_HTMLElement(/** ?function(HTMLElement):void */ onResolve, /** ?function(HTMLElement):void */ onReject) {
  let style = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement('link'), HTMLElement_$Overlay));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(style, 'rel', 'stylesheet');
  return StyleInjector.m_createStyleElement__elemental2_dom_HTMLElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__org_treblereel_j2cl_processors_common_injectors_StyleInjector_Callback__elemental2_dom_HTMLElement(style, onResolve, onReject);
 }
 /** @nodts @return {StyleInjector} */
 m_setDocument__elemental2_dom_HTMLDocument__org_treblereel_j2cl_processors_common_injectors_StyleInjector(/** HTMLDocument */ document) {
  this.f_document__org_treblereel_j2cl_processors_common_injectors_StyleInjector = document;
  return this;
 }
 /** @nodts */
 m_inject__void() {
  this.f_document__org_treblereel_j2cl_processors_common_injectors_StyleInjector.head.appendChild(this.f_styleElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_);
 }
 /** @nodts */
 m_injectAtStart__void() {
  this.f_document__org_treblereel_j2cl_processors_common_injectors_StyleInjector.head.insertBefore(this.f_styleElement__org_treblereel_j2cl_processors_common_injectors_StyleInjector_, DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.head.firstChild);
 }
 /** @private @nodts */
 $init__void_$p_org_treblereel_j2cl_processors_common_injectors_StyleInjector() {
  this.f_document__org_treblereel_j2cl_processors_common_injectors_StyleInjector = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay;
 }
 /** @nodts */
 static $clinit() {
  StyleInjector.$clinit = () =>{};
  StyleInjector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StyleInjector;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLStyleElement_$Overlay = goog.module.get('elemental2.dom.HTMLStyleElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(StyleInjector, 'org.treblereel.j2cl.processors.common.injectors.StyleInjector');

exports = StyleInjector;

//# sourceMappingURL=StyleInjector.js.map
