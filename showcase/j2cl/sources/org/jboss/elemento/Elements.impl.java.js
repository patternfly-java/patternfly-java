goog.module('org.jboss.elemento.Elements$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAreaElement.$Overlay$impl');
let HTMLAudioElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAudioElement.$Overlay$impl');
let HTMLBRElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLBRElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLDListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDListElement.$Overlay$impl');
let HTMLDataListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDataListElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLEmbedElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLEmbedElement.$Overlay$impl');
let HTMLFieldSetElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFieldSetElement.$Overlay$impl');
let HTMLFormElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let HTMLHRElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHRElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLLegendElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLegendElement.$Overlay$impl');
let HTMLMapElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLMapElement.$Overlay$impl');
let HTMLMeterElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLMeterElement.$Overlay$impl');
let HTMLModElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLModElement.$Overlay$impl');
let HTMLOListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOListElement.$Overlay$impl');
let HTMLObjectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.$Overlay$impl');
let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLOutputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOutputElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let HTMLParamElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParamElement.$Overlay$impl');
let HTMLPictureElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPictureElement.$Overlay$impl');
let HTMLPreElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPreElement.$Overlay$impl');
let HTMLProgressElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLProgressElement.$Overlay$impl');
let HTMLQuoteElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLQuoteElement.$Overlay$impl');
let HTMLScriptElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLScriptElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLSourceElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSourceElement.$Overlay$impl');
let HTMLTableCaptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableColElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableColElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let HTMLTableSectionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
let HTMLTextAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
let HTMLTrackElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTrackElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let BodyObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let AsHTMLElement = goog.forwardDeclare('org.jboss.elemento.Elements.AsHTMLElement$impl');
let FilterHTMLElements = goog.forwardDeclare('org.jboss.elemento.Elements.FilterHTMLElements$impl');
let JsArrayElementIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
let JsArrayLikeIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');
let JsArrayNodeIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
let ElementsBag = goog.forwardDeclare('org.jboss.elemento.ElementsBag$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let ResizeObserver_$Overlay = goog.forwardDeclare('org.jboss.elemento.ResizeObserver.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class Elements extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLBodyElement>} */
 static m_body__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {!HTMLContainerBuilder<HTMLBodyElement>}*/ (HTMLContainerBuilder.$create__elemental2_dom_HTMLElement($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_address__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('address', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_address__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_article__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('article', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_article__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_aside__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('aside', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_aside__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_footer__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('footer', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_footer__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLHeadingElement>} */
 static m_h__int__org_jboss_elemento_HTMLContainerBuilder(/** number */ n) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('h' + n, Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLHeadingElement>} */
 static m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** number */ n, /** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(n).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLHeadingElement>} */
 static m_h__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLHeadingElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLHeadingElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_header__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('header', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_header__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_hgroup__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('hgroup', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_hgroup__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_nav__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('nav', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_nav__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_section__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('section', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_section__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLQuoteElement>} */
 static m_blockquote__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('blockquote', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLQuoteElement>} */
 static m_blockquote__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLQuoteElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLQuoteElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dd__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('dd', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dd__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDivElement>} */
 static m_div__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('div', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDivElement>} */
 static m_div__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLDivElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDListElement>} */
 static m_dl__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDListElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('dl', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDListElement>} */
 static m_dl__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDListElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLDListElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLDListElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dt__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('dt', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dt__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_figcaption__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('figcaption', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_figcaption__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_figure__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('figure', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_figure__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLHRElement>} */
 static m_hr__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLHRElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('hr', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLHRElement>} */
 static m_hr__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLHRElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLHRElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLHRElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLIElement>} */
 static m_li__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLIElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('li', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLIElement>} */
 static m_li__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLIElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLLIElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLLIElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_main__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('main', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_main__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOListElement>} */
 static m_ol__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOListElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('ol', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOListElement>} */
 static m_ol__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOListElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLOListElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLOListElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLParagraphElement>} */
 static m_p__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('p', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLParagraphElement>} */
 static m_p__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLParagraphElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLParagraphElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLPreElement>} */
 static m_pre__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLPreElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('pre', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLPreElement>} */
 static m_pre__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLPreElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLPreElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLPreElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLUListElement>} */
 static m_ul__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLUListElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('ul', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLUListElement>} */
 static m_ul__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLUListElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLUListElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLUListElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAnchorElement>} */
 static m_a__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('a', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAnchorElement>} */
 static m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ href) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('href', href), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAnchorElement>} */
 static m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ href, /** ?string */ target) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('href', href), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('target', target), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAnchorElement>} */
 static m_a__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLAnchorElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLAnchorElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_abbr__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('abbr', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_abbr__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('abbr', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_abbr__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_b__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('b', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_b__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('b', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_b__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLBRElement>} */
 static m_br__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLBRElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('br', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLBRElement>} */
 static m_br__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLBRElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLBRElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLBRElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_cite__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('cite', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_cite__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('cite', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_cite__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_code__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('code', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_code__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('code', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_code__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dfn__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('dfn', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dfn__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('dfn', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_dfn__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_em__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('em', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_em__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('em', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_em__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_i__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('i', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_i__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('i', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_i__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_kbd__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('kbd', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_kbd__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('kbd', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_kbd__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_mark__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('mark', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_mark__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('mark', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_mark__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLQuoteElement>} */
 static m_q__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('q', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLQuoteElement>} */
 static m_q__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('q', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLQuoteElement>} */
 static m_q__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLQuoteElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLQuoteElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLQuoteElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_small__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('small', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_small__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('small', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_small__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_span__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('span', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_span__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_strong__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('strong', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_strong__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('strong', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_strong__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sub__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('sub', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sub__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('sub', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sub__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sup__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('sup', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sup__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('sup', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_sup__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_time__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('time', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_time__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('time', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_time__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_u__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('u', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_u__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('u', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_u__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_var__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('var', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_var__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('var', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_var__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLElement>} */
 static m_wbr__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('wbr', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLElement>} */
 static m_wbr__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLAreaElement>} */
 static m_area__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLAreaElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('area', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLAreaElement>} */
 static m_area__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLAreaElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLAreaElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLAreaElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAudioElement>} */
 static m_audio__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAudioElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('audio', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLAudioElement>} */
 static m_audio__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLAudioElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLAudioElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLAudioElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLImageElement>} */
 static m_img__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLImageElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('img', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLImageElement>} */
 static m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder(/** ?string */ src) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('img', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('src', src), HTMLElementBuilder));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLImageElement>} */
 static m_img__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLImageElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLImageElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLImageElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLMapElement>} */
 static m_map__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLMapElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('map', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLMapElement>} */
 static m_map__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLMapElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLMapElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLMapElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLPictureElement>} */
 static m_picture__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLPictureElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('picture', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLPictureElement>} */
 static m_picture__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLPictureElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLPictureElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLPictureElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTrackElement>} */
 static m_track__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTrackElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('track', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTrackElement>} */
 static m_track__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTrackElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLTrackElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTrackElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLVideoElement>} */
 static m_video__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLVideoElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('video', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLVideoElement>} */
 static m_video__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLVideoElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLVideoElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLVideoElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLCanvasElement>} */
 static m_canvas__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLCanvasElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('canvas', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLCanvasElement>} */
 static m_canvas__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLCanvasElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLCanvasElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLEmbedElement>} */
 static m_embed__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLEmbedElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('embed', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLEmbedElement>} */
 static m_embed__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLEmbedElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLEmbedElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLEmbedElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLIFrameElement>} */
 static m_iframe__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLIFrameElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('iframe', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLIFrameElement>} */
 static m_iframe__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ src) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLIFrameElement>}*/ ($Casts.$to(Elements.m_iframe__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('src', src), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLIFrameElement>} */
 static m_iframe__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLIFrameElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLIFrameElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLIFrameElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLObjectElement>} */
 static m_object__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLObjectElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('object', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLObjectElement>} */
 static m_object__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLObjectElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLObjectElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLObjectElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLParamElement>} */
 static m_param__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLParamElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('param', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLParamElement>} */
 static m_param__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLParamElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLParamElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLParamElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLSourceElement>} */
 static m_source__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLSourceElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('source', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLSourceElement>} */
 static m_source__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLSourceElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLSourceElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLSourceElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_noscript__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('noscript', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 static m_noscript__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLScriptElement>} */
 static m_script__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLScriptElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('script', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLScriptElement>} */
 static m_script__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLScriptElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLScriptElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLScriptElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_del__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('del', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_del__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('del', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_del__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLModElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLModElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_ins__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('ins', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_ins__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('ins', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLModElement>} */
 static m_ins__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLModElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLModElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLModElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCaptionElement>} */
 static m_caption__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCaptionElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('caption', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCaptionElement>} */
 static m_caption__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCaptionElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableCaptionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableCaptionElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTableColElement>} */
 static m_col__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTableColElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('col', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTableColElement>} */
 static m_col__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTableColElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLTableColElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableColElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableColElement>} */
 static m_colgroup__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableColElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('colgroup', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableColElement>} */
 static m_colgroup__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableColElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableColElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableColElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableElement>} */
 static m_table__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('table', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableElement>} */
 static m_table__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_tbody__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('tbody', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_tbody__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCellElement>} */
 static m_td__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('td', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCellElement>} */
 static m_td__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableCellElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableCellElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_tfoot__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('tfoot', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_tfoot__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCellElement>} */
 static m_th__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('th', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableCellElement>} */
 static m_th__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableCellElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableCellElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_thead__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('thead', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableSectionElement>} */
 static m_thead__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableRowElement>} */
 static m_tr__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('tr', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLTableRowElement>} */
 static m_tr__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLTableRowElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTableRowElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLButtonElement>} */
 static m_button__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('button', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLButtonElement>} */
 static m_button__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLButtonElement>} */
 static m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLButtonElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLButtonElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDataListElement>} */
 static m_datalist__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDataListElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('datalist', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDataListElement>} */
 static m_datalist__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLDataListElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLDataListElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLDataListElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLFieldSetElement>} */
 static m_fieldset__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLFieldSetElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('fieldset', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLFieldSetElement>} */
 static m_fieldset__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLFieldSetElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLFieldSetElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLFieldSetElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLFormElement>} */
 static m_form__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLFormElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('form', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLFormElement>} */
 static m_form__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLFormElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLFormElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLFormElement_$Overlay))));
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 static m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(/** InputType */ type) {
  Elements.$clinit();
  return Elements.m_input__java_lang_String__org_jboss_elemento_InputElementBuilder(type.name());
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 static m_input__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ type) {
  Elements.$clinit();
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_input__java_lang_String__java_lang_Class__org_jboss_elemento_InputElementBuilder(type, Class.$get($JavaScriptObject)));
 }
 /** @nodts @template E @return {InputElementBuilder<E>} */
 static m_input__java_lang_String__java_lang_Class__org_jboss_elemento_InputElementBuilder(/** ?string */ type, /** Class<E> */ jType) {
  Elements.$clinit();
  let el = /**@type {E}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('input', jType), HTMLInputElement_$Overlay));
  /**@type {!HTMLInputElement}*/ (el).type = type;
  return /**@type {!InputElementBuilder<E>}*/ (InputElementBuilder.$create__elemental2_dom_HTMLInputElement(el));
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 static m_input__elemental2_dom_Element__org_jboss_elemento_InputElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(/**@type {HTMLInputElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLInputElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLabelElement>} */
 static m_label__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('label', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLabelElement>} */
 static m_label__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLabelElement>} */
 static m_label__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLLabelElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLLabelElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLegendElement>} */
 static m_legend__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLegendElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('legend', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLLegendElement>} */
 static m_legend__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLLegendElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLLegendElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLLegendElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLMeterElement>} */
 static m_meter__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLMeterElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('meter', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLMeterElement>} */
 static m_meter__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLMeterElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLMeterElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('meter', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLMeterElement>} */
 static m_meter__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLMeterElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLMeterElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLMeterElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOptGroupElement>} */
 static m_optgroup__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOptGroupElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('optgroup', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOptGroupElement>} */
 static m_optgroup__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOptGroupElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLOptGroupElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLOptGroupElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLOptionElement>} */
 static m_option__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLOptionElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('option', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLOptionElement>} */
 static m_option__java_lang_String__org_jboss_elemento_HTMLElementBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLOptionElement>}*/ ($Casts.$to(Elements.m_option__org_jboss_elemento_HTMLElementBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLElementBuilder));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLOptionElement>} */
 static m_option__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLOptionElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLOptionElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLOptionElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOutputElement>} */
 static m_output__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOutputElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('output', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOutputElement>} */
 static m_output__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ text) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOutputElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLOutputElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('output', Class.$get($JavaScriptObject))).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLOutputElement>} */
 static m_output__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLOutputElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLOutputElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLOutputElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLProgressElement>} */
 static m_progress__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLProgressElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('progress', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLProgressElement>} */
 static m_progress__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLProgressElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLProgressElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLProgressElement_$Overlay))));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLSelectElement>} */
 static m_select__org_jboss_elemento_HTMLContainerBuilder() {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLSelectElement>}*/ (Elements.m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder('select', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLSelectElement>} */
 static m_select__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLContainerBuilder<HTMLSelectElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/**@type {HTMLSelectElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLSelectElement_$Overlay))));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTextAreaElement>} */
 static m_textarea__org_jboss_elemento_HTMLElementBuilder() {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('textarea', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {HTMLElementBuilder<HTMLTextAreaElement>} */
 static m_textarea__elemental2_dom_Element__org_jboss_elemento_HTMLElementBuilder(/** Element */ element) {
  Elements.$clinit();
  return /**@type {HTMLElementBuilder<HTMLTextAreaElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/**@type {HTMLTextAreaElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element), HTMLTextAreaElement_$Overlay))));
 }
 /** @nodts @return {ElementsBag} */
 static m_bag__org_jboss_elemento_ElementsBag() {
  Elements.$clinit();
  return ElementsBag.$create__();
 }
 /** @nodts @template E @return {HTMLElementBuilder<E>} */
 static m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder(/** ?string */ element, /** Class<E> */ type) {
  Elements.$clinit();
  return /**@type {!HTMLElementBuilder<E>}*/ (HTMLElementBuilder.$create__elemental2_dom_HTMLElement(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement(element, type)));
 }
 /** @nodts @template E @return {HTMLElementBuilder<E>} */
 static m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(/** E */ element) {
  Elements.$clinit();
  return /**@type {!HTMLElementBuilder<E>}*/ (HTMLElementBuilder.$create__elemental2_dom_HTMLElement(element));
 }
 /** @nodts @template E @return {InputElementBuilder<E>} */
 static m_inputElement__java_lang_String__java_lang_Class__org_jboss_elemento_InputElementBuilder(/** ?string */ type, /** Class<E> */ jType) {
  Elements.$clinit();
  let input = /**@type {E}*/ ($Casts.$to(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement('input', jType), HTMLInputElement_$Overlay));
  /**@type {!HTMLInputElement}*/ (input).type = type;
  return /**@type {!InputElementBuilder<E>}*/ (InputElementBuilder.$create__elemental2_dom_HTMLInputElement(input));
 }
 /** @nodts @template E @return {InputElementBuilder<E>} */
 static m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(/** E */ element) {
  Elements.$clinit();
  return /**@type {!InputElementBuilder<E>}*/ (InputElementBuilder.$create__elemental2_dom_HTMLInputElement(element));
 }
 /** @nodts @template E @return {HTMLContainerBuilder<E>} */
 static m_htmlContainer__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ element, /** Class<E> */ type) {
  Elements.$clinit();
  return /**@type {!HTMLContainerBuilder<E>}*/ (HTMLContainerBuilder.$create__elemental2_dom_HTMLElement(Elements.m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement(element, type)));
 }
 /** @nodts @template E @return {HTMLContainerBuilder<E>} */
 static m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/** E */ element) {
  Elements.$clinit();
  return /**@type {!HTMLContainerBuilder<E>}*/ (HTMLContainerBuilder.$create__elemental2_dom_HTMLElement(element));
 }
 /** @nodts @template E @return {E} */
 static m_createHtmlElement__java_lang_String__java_lang_Class__elemental2_dom_HTMLElement(/** ?string */ element, /** Class<E> */ type) {
  Elements.$clinit();
  return /**@type {E}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement(element)), HTMLElement_$Overlay));
 }
 /** @nodts @return {Iterable<HTMLElement>} */
 static m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/** Node */ node, /** By */ selector) {
  Elements.$clinit();
  if (!$Equality.$same(node, null)) {
   let nodes = node.querySelectorAll(selector.m_selector__java_lang_String_$pp_org_jboss_elemento());
   let htmlElements = /**@type {!Array<HTMLElement>}*/ (new Array());
   for (let i = 0; i < nodes.length; i = i + 1 | 0) {
    let element = /**@type {Element}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(nodes, i), Element_$Overlay));
    if (HTMLElement_$Overlay.$isInstance(element)) {
     htmlElements.push(/**@type {HTMLElement}*/ ($Casts.$to(element, HTMLElement_$Overlay)));
    }
   }
   return Iterable.$adapt(() =>{
    return /**@type {Iterator<HTMLElement>}*/ (Elements.m_iterator__jsinterop_base_JsArrayLike__java_util_Iterator(htmlElements));
   });
  }
  return /**@type {List<HTMLElement>}*/ (Collections.m_emptyList__java_util_List());
 }
 /** @nodts @template E @return {Iterable<HTMLElement>} */
 static m_findAll__org_jboss_elemento_IsElement__org_jboss_elemento_By__java_lang_Iterable(/** IsElement<E> */ element, /** By */ selector) {
  Elements.$clinit();
  return Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E @return {E} */
 static m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** Node */ node, /** By */ selector) {
  Elements.$clinit();
  return /**@type {E}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(node.querySelector(selector.m_selector__java_lang_String_$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /** @nodts @template E, F @return {F} */
 static m_find__org_jboss_elemento_IsElement__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** IsElement<E> */ element, /** By */ selector) {
  Elements.$clinit();
  return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()), selector);
 }
 /** @nodts @template E @return {E} */
 static m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** Element */ element, /** By */ selector) {
  Elements.$clinit();
  return /**@type {E}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(element.closest(selector.m_selector__java_lang_String_$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /** @nodts @template E, F @return {F} */
 static m_closest__org_jboss_elemento_IsElement__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** IsElement<E> */ element, /** By */ selector) {
  Elements.$clinit();
  return /**@type {F}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(/**@type {!Element}*/ (element.m_element__elemental2_dom_Element()).closest(selector.m_selector__java_lang_String_$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /** @nodts @template E @return {Iterator<E>} */
 static m_iterator__jsinterop_base_JsArrayLike__java_util_Iterator(/** IArrayLike<E> */ data) {
  Elements.$clinit();
  return !$Equality.$same(data, null) ? /**@type {!JsArrayLikeIterator<E>}*/ (JsArrayLikeIterator.$create__jsinterop_base_JsArrayLike(data)) : /**@type {Iterator<E>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @nodts @return {Iterator<Node>} */
 static m_iterator__elemental2_dom_Node__java_util_Iterator(/** Node */ parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? JsArrayNodeIterator.$create__elemental2_dom_Node(parent) : /**@type {Iterator<Node>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @nodts @return {Iterator<HTMLElement>} */
 static m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(/** HTMLElement */ parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? JsArrayElementIterator.$create__elemental2_dom_HTMLElement(parent) : /**@type {Iterator<HTMLElement>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @nodts @template E @return {Iterator<HTMLElement>} */
 static m_iterator__org_jboss_elemento_IsElement__java_util_Iterator(/** IsElement<E> */ parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(/**@type {HTMLElement}*/ ($Casts.$to(parent.m_element__elemental2_dom_Element(), HTMLElement_$Overlay))) : /**@type {Iterator<HTMLElement>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @nodts @template E @return {Iterable<E>} */
 static m_elements__jsinterop_base_JsArrayLike__java_lang_Iterable(/** IArrayLike<E> */ nodes) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return /**@type {Iterator<E>}*/ (Elements.m_iterator__jsinterop_base_JsArrayLike__java_util_Iterator(nodes));
  });
 }
 /** @nodts @return {Iterable<Node>} */
 static m_children__elemental2_dom_Node__java_lang_Iterable(/** Node */ parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__elemental2_dom_Node__java_util_Iterator(parent);
  });
 }
 /** @nodts @return {Iterable<HTMLElement>} */
 static m_children__elemental2_dom_HTMLElement__java_lang_Iterable(/** HTMLElement */ parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(parent);
  });
 }
 /** @nodts @template E @return {Iterable<HTMLElement>} */
 static m_children__org_jboss_elemento_IsElement__java_lang_Iterable(/** IsElement<E> */ parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__org_jboss_elemento_IsElement__java_util_Iterator(parent);
  });
 }
 /** @nodts @template T @return {Predicate<T>} */
 static m_htmlElements__java_util_function_Predicate() {
  Elements.$clinit();
  return /**@type {!FilterHTMLElements<T>}*/ (FilterHTMLElements.$create__());
 }
 /** @nodts @template T @return {j_u_function_Function<T, HTMLElement>} */
 static m_asHtmlElement__java_util_function_Function() {
  Elements.$clinit();
  return /**@type {!AsHTMLElement<T>}*/ (AsHTMLElement.$create__());
 }
 /** @nodts @template E @return {Stream<E>} */
 static m_stream__jsinterop_base_JsArrayLike__java_util_stream_Stream(/** IArrayLike<E> */ nodes) {
  Elements.$clinit();
  if ($Equality.$same(nodes, null)) {
   return /**@type {Stream<E>}*/ (Stream.m_empty__java_util_stream_Stream());
  } else {
   return /**@type {Stream<E>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<E>}*/ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator(/**@type {Iterator<E>}*/ (Elements.m_iterator__jsinterop_base_JsArrayLike__java_util_Iterator(nodes)), 0)), false));
  }
 }
 /** @nodts @return {Stream<Node>} */
 static m_stream__elemental2_dom_Node__java_util_stream_Stream(/** Node */ parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<Node>}*/ (Stream.m_empty__java_util_stream_Stream());
  } else {
   return /**@type {Stream<Node>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<Node>}*/ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator(Elements.m_iterator__elemental2_dom_Node__java_util_Iterator(parent), 0)), false));
  }
 }
 /** @nodts @return {Stream<HTMLElement>} */
 static m_stream__elemental2_dom_HTMLElement__java_util_stream_Stream(/** HTMLElement */ parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<HTMLElement>}*/ (Stream.m_empty__java_util_stream_Stream());
  } else {
   return /**@type {Stream<HTMLElement>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<HTMLElement>}*/ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator(Elements.m_iterator__elemental2_dom_HTMLElement__java_util_Iterator(parent), 0)), false));
  }
 }
 /** @nodts @template E @return {Stream<HTMLElement>} */
 static m_stream__org_jboss_elemento_IsElement__java_util_stream_Stream(/** IsElement<E> */ parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<HTMLElement>}*/ (Stream.m_empty__java_util_stream_Stream());
  } else {
   return /**@type {Stream<HTMLElement>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(/**@type {Spliterator<HTMLElement>}*/ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int__java_util_Spliterator(Elements.m_iterator__org_jboss_elemento_IsElement__java_util_Iterator(parent), 0)), false));
  }
 }
 /** @nodts */
 static m_lazyAppend__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ parent, /** Element */ child) {
  Elements.$clinit();
  if (!parent.contains(child)) {
   parent.appendChild(child);
  }
 }
 /** @nodts @template E */
 static m_lazyAppend__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/** Element */ parent, /** IsElement<E> */ child) {
  Elements.$clinit();
  if (!$Equality.$same(child, null)) {
   Elements.m_lazyAppend__elemental2_dom_Element__elemental2_dom_Element__void(parent, /**@type {Element}*/ (child.m_element__elemental2_dom_Element()));
  }
 }
 /** @nodts */
 static m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ newElement, /** Element */ after) {
  Elements.$clinit();
  after.parentNode.insertBefore(newElement, after.nextSibling);
 }
 /** @nodts @template E */
 static m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** IsElement<E> */ newElement, /** Element */ after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), after);
  }
 }
 /** @nodts */
 static m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ newElement, /** Element */ after) {
  Elements.$clinit();
  if (!after.parentNode.contains(newElement)) {
   after.parentNode.insertBefore(newElement, after.nextSibling);
  }
 }
 /** @nodts @template E */
 static m_lazyInsertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** IsElement<E> */ newElement, /** Element */ after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), after);
  }
 }
 /** @nodts */
 static m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ parent, /** Element */ newElement, /** Element */ after) {
  Elements.$clinit();
  if (!parent.contains(newElement)) {
   parent.insertBefore(newElement, after.nextSibling);
  }
 }
 /** @nodts @template E */
 static m_lazyInsertAfter__elemental2_dom_Element__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** Element */ parent, /** IsElement<E> */ newElement, /** Element */ after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element__void(parent, /**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), after);
  }
 }
 /** @nodts */
 static m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ newElement, /** Element */ before) {
  Elements.$clinit();
  before.parentNode.insertBefore(newElement, before);
 }
 /** @nodts @template E */
 static m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** IsElement<E> */ newElement, /** Element */ before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), before);
  }
 }
 /** @nodts */
 static m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ newElement, /** Element */ before) {
  Elements.$clinit();
  if (!before.parentNode.contains(newElement)) {
   before.parentNode.insertBefore(newElement, before);
  }
 }
 /** @nodts @template E */
 static m_lazyInsertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** IsElement<E> */ newElement, /** Element */ before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), before);
  }
 }
 /** @nodts */
 static m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ parent, /** Element */ newElement, /** Element */ before) {
  Elements.$clinit();
  if (!parent.contains(newElement)) {
   parent.insertBefore(newElement, before);
  }
 }
 /** @nodts @template E */
 static m_lazyInsertBefore__elemental2_dom_Element__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/** Element */ parent, /** IsElement<E> */ newElement, /** Element */ before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element__void(parent, /**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()), before);
  }
 }
 /** @nodts */
 static m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/** Element */ parent, /** Element */ newElement) {
  Elements.$clinit();
  parent.insertBefore(newElement, parent.firstChild);
 }
 /** @nodts @template E */
 static m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/** Element */ parent, /** IsElement<E> */ newElement) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(parent, /**@type {Element}*/ (newElement.m_element__elemental2_dom_Element()));
  }
 }
 /** @nodts */
 static m_removeChildrenFrom__elemental2_dom_Element__void(/** Element */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   while (!$Equality.$same(element.firstChild, null)) {
    element.removeChild(element.firstChild);
   }
  }
 }
 /** @nodts @template E */
 static m_removeChildrenFrom__org_jboss_elemento_IsElement__void(/** IsElement<E> */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {Element}*/ (element.m_element__elemental2_dom_Element()));
  }
 }
 /** @nodts @return {boolean} */
 static m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(/** Element */ element) {
  Elements.$clinit();
  return Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element__boolean(!$Equality.$same(element, null) ? element.parentNode : null, element);
 }
 /** @nodts @template E @return {boolean} */
 static m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(/** IsElement<E> */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   return Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(/**@type {Element}*/ (element.m_element__elemental2_dom_Element()));
  }
  return false;
 }
 /** @nodts @return {boolean} */
 static m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element__boolean(/** Node */ parent, /** Element */ child) {
  Elements.$clinit();
  if (!$Equality.$same(parent, null) && !$Equality.$same(child, null) && parent.contains(child)) {
   return !$Equality.$same(parent.removeChild(child), null);
  }
  return false;
 }
 /** @nodts @template E @return {boolean} */
 static m_failSafeRemove__elemental2_dom_Node__org_jboss_elemento_IsElement__boolean(/** Node */ parent, /** IsElement<E> */ child) {
  Elements.$clinit();
  if (!$Equality.$same(child, null)) {
   return Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element__boolean(parent, /**@type {Element}*/ (child.m_element__elemental2_dom_Element()));
  }
  return false;
 }
 /** @nodts @template E @return {boolean} */
 static m_isAttached__org_jboss_elemento_IsElement__boolean(/** IsElement<E> */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   return Elements.m_isAttached__elemental2_dom_Node__boolean(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
  }
  return false;
 }
 /** @nodts @return {boolean} */
 static m_isAttached__elemental2_dom_Node__boolean(/** Node */ node) {
  Elements.$clinit();
  if (!$Equality.$same(node, null)) {
   return node.isConnected;
  }
  return false;
 }
 /** @nodts */
 static m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(element, callback);
  }
 }
 /** @nodts @template E */
 static m_onAttach__org_jboss_elemento_IsElement__org_jboss_elemento_ObserverCallback__void(/** IsElement<E> */ element, /** ObserverCallback */ callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), callback);
  }
 }
 /** @nodts */
 static m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(element, callback);
  }
 }
 /** @nodts @template E */
 static m_onDetach__org_jboss_elemento_IsElement__org_jboss_elemento_ObserverCallback__void(/** IsElement<E> */ element, /** ObserverCallback */ callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), callback);
  }
 }
 /** @nodts @return {boolean} */
 static m_isVisible__elemental2_dom_HTMLElement__boolean(/** HTMLElement */ element) {
  Elements.$clinit();
  return !$Equality.$same(element, null) && !j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('none', element.style.display);
 }
 /** @nodts @template E @return {boolean} */
 static m_isVisible__org_jboss_elemento_IsElement__boolean(/** IsElement<E> */ element) {
  Elements.$clinit();
  return !$Equality.$same(element, null) && Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)));
 }
 /** @nodts */
 static m_setVisible__elemental2_dom_HTMLElement__boolean__void(/** HTMLElement */ element, /** boolean */ visible) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.style.display = visible ? '' : 'none';
  }
 }
 /** @nodts @template E */
 static m_setVisible__org_jboss_elemento_IsElement__boolean__void(/** IsElement<E> */ element, /** boolean */ visible) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), visible);
  }
 }
 /** @nodts @template E @return {boolean} */
 static m_isElementInView__org_jboss_elemento_IsElement__elemental2_dom_HTMLElement__boolean__boolean(/** IsElement<E> */ container, /** HTMLElement */ element, /** boolean */ partial) {
  Elements.$clinit();
  return Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(/**@type {HTMLElement}*/ ($Casts.$to(container.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), element, partial);
 }
 /** @nodts @template E @return {boolean} */
 static m_isElementInView__elemental2_dom_HTMLElement__org_jboss_elemento_IsElement__boolean__boolean(/** HTMLElement */ container, /** IsElement<E> */ element, /** boolean */ partial) {
  Elements.$clinit();
  return Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(container, /**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), partial);
 }
 /** @nodts @template E, F @return {boolean} */
 static m_isElementInView__org_jboss_elemento_IsElement__org_jboss_elemento_IsElement__boolean__boolean(/** IsElement<E> */ container, /** IsElement<F> */ element, /** boolean */ partial) {
  Elements.$clinit();
  return Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(/**@type {HTMLElement}*/ ($Casts.$to(container.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), /**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), partial);
 }
 /** @nodts @return {boolean} */
 static m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(/** HTMLElement */ container, /** HTMLElement */ element, /** boolean */ partial) {
  Elements.$clinit();
  if (!$Equality.$same(container, null) && !$Equality.$same(element, null)) {
   let containerBounds = container.getBoundingClientRect();
   let elementBounds = element.getBoundingClientRect();
   let containerBoundsLeft = $Primitives.narrowDoubleToInt(Math.ceil(containerBounds.left));
   let containerBoundsRight = $Primitives.narrowDoubleToInt(Math.floor(containerBounds.right));
   let elementBoundsLeft = $Primitives.narrowDoubleToInt(Math.ceil(elementBounds.left));
   let elementBoundsRight = $Primitives.narrowDoubleToInt(Math.floor(elementBounds.right));
   let isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
   let isPartiallyInView = (partial || containerBounds.width < elementBounds.width) && (elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft || elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight);
   return isTotallyInView || isPartiallyInView;
  }
  return false;
 }
 /** @nodts @template E @return {?function():void} */
 static m_resizeObserver__org_jboss_elemento_IsElement__org_jboss_elemento_ResizeCallback__org_jboss_elemento_ResizeObserverCleanup(/** IsElement<E> */ element, /** ?function():void */ callback) {
  Elements.$clinit();
  return Elements.m_resizeObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ResizeCallback__org_jboss_elemento_ResizeObserverCleanup(/**@type {E}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), callback);
 }
 /** @nodts @template E @return {?function():void} */
 static m_resizeObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ResizeCallback__org_jboss_elemento_ResizeObserverCleanup(/** E */ element, /** ?function():void */ callback) {
  Elements.$clinit();
  let /** ?function():void */ cleanup;
  if (Js.isTripleEqual(JsPropertyMap_$Overlay.m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any(goog.global, 'ResizeObserver'), undefined)) {
   let registration = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_resize__org_jboss_elemento_EventType, (/** Event */ e) =>{
    callback();
   });
   cleanup = () =>{
    registration.m_removeHandler__void();
   };
  } else {
   let observer = new ResizeObserver((/** Array<Object> */ entries, /** ResizeObserver */ obs) =>{
    if (!$Equality.$same(entries, null) && entries.length != 0) {
     callback();
    }
   });
   ResizeObserver_$Overlay.m_observe__$devirt__org_jboss_elemento_ResizeObserver__elemental2_dom_Element__void(observer, /**@type {Element}*/ (element));
   cleanup = () =>{
    observer.unobserve(/**@type {Element}*/ (element));
   };
  }
  return cleanup;
 }
 /** @nodts */
 static m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean__void(/** HTMLElement */ element, /** ?string */ css, /** boolean */ condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.classList.toggle(css, condition);
  }
 }
 /** @nodts @template E */
 static m_toggle__org_jboss_elemento_IsElement__java_lang_String__boolean__void(/** IsElement<E> */ element, /** ?string */ css, /** boolean */ condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), css, condition);
  }
 }
 /** @nodts */
 static m_toggle__elemental2_dom_HTMLElement__java_lang_String__java_util_function_Supplier__void(/** HTMLElement */ element, /** ?string */ css, /** Supplier<?boolean> */ condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.classList.toggle(css, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(condition.m_get__java_lang_Object(), Boolean))));
  }
 }
 /** @nodts @template E */
 static m_toggle__org_jboss_elemento_IsElement__java_lang_String__java_util_function_Supplier__void(/** IsElement<E> */ element, /** ?string */ css, /** Supplier<?boolean> */ condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   /**@type {!Element}*/ (element.m_element__elemental2_dom_Element()).classList.toggle(css, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(condition.m_get__java_lang_Object(), Boolean))));
  }
 }
 /** @nodts */
 static m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml__void(/** HTMLElement */ element, /** SafeHtml */ html) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.innerHTML = html.m_asString__java_lang_String();
  }
 }
 /** @nodts @template E */
 static m_innerHtml__org_jboss_elemento_IsElement__org_gwtproject_safehtml_shared_SafeHtml__void(/** IsElement<E> */ element, /** SafeHtml */ html) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml__void(/**@type {HTMLElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)), html);
  }
 }
 /** @nodts @template E @return {?string} */
 static m_toString__org_jboss_elemento_IsElement__java_lang_String(/** IsElement<E> */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   return Elements.m_toString__elemental2_dom_Element__java_lang_String(/**@type {Element}*/ (element.m_element__elemental2_dom_Element()));
  }
  return '';
 }
 /** @nodts @return {?string} */
 static m_toString__elemental2_dom_Element__java_lang_String(/** Element */ element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   let tag = j_l_String.m_toLowerCase__java_lang_String__java_lang_String(element.tagName);
   let builder = StringBuilder.$create__java_lang_String('<').m_append__java_lang_String__java_lang_StringBuilder(tag);
   let names = element.getAttributeNames();
   if (!$Equality.$same(names, null)) {
    for (let i = 0; i < names.length; i = i + 1 | 0) {
     let name = /**@type {?string}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(names, i), j_l_String));
     let value = element.getAttribute(name);
     builder.m_append__java_lang_String__java_lang_StringBuilder(' ').m_append__java_lang_String__java_lang_StringBuilder(name).m_append__java_lang_String__java_lang_StringBuilder('=\'').m_append__java_lang_String__java_lang_StringBuilder(value).m_append__java_lang_String__java_lang_StringBuilder('\'');
    }
   }
   if (element.childElementCount == 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('/>');
   } else {
    builder.m_append__java_lang_String__java_lang_StringBuilder('>[').m_append__int__java_lang_StringBuilder(element.childElementCount).m_append__java_lang_String__java_lang_StringBuilder(' child element');
    if (element.childElementCount > 1) {
     builder.m_append__java_lang_String__java_lang_StringBuilder('s');
    }
    builder.m_append__java_lang_String__java_lang_StringBuilder(']></').m_append__java_lang_String__java_lang_StringBuilder(tag).m_append__java_lang_String__java_lang_StringBuilder('>');
   }
   return builder.toString();
  }
  return '';
 }
 /** @nodts @return {?string} @deprecated */
 static m_uniqueId__java_lang_String() {
  Elements.$clinit();
  return Id.m_unique__java_lang_String();
 }
 /** @nodts @return {?string} @deprecated */
 static m_uniqueId__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Elements.$clinit();
  return Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, additionalIds);
 }
 /** @nodts @return {?string} @deprecated */
 static m_buildId__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Elements.$clinit();
  return Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, additionalIds);
 }
 /** @nodts @return {!Elements} */
 static $create__() {
  let $instance = new Elements();
  $instance.$ctor__org_jboss_elemento_Elements__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Elements__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Elements.$clinit = () =>{};
  Elements.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Elements;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLAreaElement.$Overlay$impl');
  HTMLAudioElement_$Overlay = goog.module.get('elemental2.dom.HTMLAudioElement.$Overlay$impl');
  HTMLBRElement_$Overlay = goog.module.get('elemental2.dom.HTMLBRElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLCanvasElement_$Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  HTMLDListElement_$Overlay = goog.module.get('elemental2.dom.HTMLDListElement.$Overlay$impl');
  HTMLDataListElement_$Overlay = goog.module.get('elemental2.dom.HTMLDataListElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLEmbedElement_$Overlay = goog.module.get('elemental2.dom.HTMLEmbedElement.$Overlay$impl');
  HTMLFieldSetElement_$Overlay = goog.module.get('elemental2.dom.HTMLFieldSetElement.$Overlay$impl');
  HTMLFormElement_$Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  HTMLHRElement_$Overlay = goog.module.get('elemental2.dom.HTMLHRElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLIFrameElement_$Overlay = goog.module.get('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLLegendElement_$Overlay = goog.module.get('elemental2.dom.HTMLLegendElement.$Overlay$impl');
  HTMLMapElement_$Overlay = goog.module.get('elemental2.dom.HTMLMapElement.$Overlay$impl');
  HTMLMeterElement_$Overlay = goog.module.get('elemental2.dom.HTMLMeterElement.$Overlay$impl');
  HTMLModElement_$Overlay = goog.module.get('elemental2.dom.HTMLModElement.$Overlay$impl');
  HTMLOListElement_$Overlay = goog.module.get('elemental2.dom.HTMLOListElement.$Overlay$impl');
  HTMLObjectElement_$Overlay = goog.module.get('elemental2.dom.HTMLObjectElement.$Overlay$impl');
  HTMLOptGroupElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLOutputElement_$Overlay = goog.module.get('elemental2.dom.HTMLOutputElement.$Overlay$impl');
  HTMLParagraphElement_$Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  HTMLParamElement_$Overlay = goog.module.get('elemental2.dom.HTMLParamElement.$Overlay$impl');
  HTMLPictureElement_$Overlay = goog.module.get('elemental2.dom.HTMLPictureElement.$Overlay$impl');
  HTMLPreElement_$Overlay = goog.module.get('elemental2.dom.HTMLPreElement.$Overlay$impl');
  HTMLProgressElement_$Overlay = goog.module.get('elemental2.dom.HTMLProgressElement.$Overlay$impl');
  HTMLQuoteElement_$Overlay = goog.module.get('elemental2.dom.HTMLQuoteElement.$Overlay$impl');
  HTMLScriptElement_$Overlay = goog.module.get('elemental2.dom.HTMLScriptElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLSourceElement_$Overlay = goog.module.get('elemental2.dom.HTMLSourceElement.$Overlay$impl');
  HTMLTableCaptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableColElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableColElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  HTMLTableSectionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  HTMLTextAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
  HTMLTrackElement_$Overlay = goog.module.get('elemental2.dom.HTMLTrackElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BodyObserver = goog.module.get('org.jboss.elemento.BodyObserver$impl');
  AsHTMLElement = goog.module.get('org.jboss.elemento.Elements.AsHTMLElement$impl');
  FilterHTMLElements = goog.module.get('org.jboss.elemento.Elements.FilterHTMLElements$impl');
  JsArrayElementIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
  JsArrayLikeIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');
  JsArrayNodeIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
  ElementsBag = goog.module.get('org.jboss.elemento.ElementsBag$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  ResizeObserver_$Overlay = goog.module.get('org.jboss.elemento.ResizeObserver.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(Elements, 'org.jboss.elemento.Elements');

exports = Elements;

//# sourceMappingURL=Elements.js.map
