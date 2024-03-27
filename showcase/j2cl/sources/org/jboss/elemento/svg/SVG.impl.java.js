goog.module('org.jboss.elemento.svg.SVG$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let SVGElementBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGElementBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @final
 */
class SVG extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SVGContainerBuilder<SVGElement>} */
 static m_svg__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('svg', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGCircleElement>} */
 static m_circle__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGCircleElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('circle', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGEllipseElement>} */
 static m_ellipse__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGEllipseElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('ellipse', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGGElement>} */
 static m_g__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGGElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('g', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGLineElement>} */
 static m_line__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGLineElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('line', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGPathElement>} */
 static m_path__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGPathElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('path', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGPolygonElement>} */
 static m_polygon__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGPolygonElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('polygon', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGRectElement>} */
 static m_rect__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGRectElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('rect', Class.$get($JavaScriptObject)));
 }
 /** @nodts @return {SVGContainerBuilder<SVGTextElement>} */
 static m_text__org_jboss_elemento_svg_SVGContainerBuilder() {
  SVG.$clinit();
  return /**@type {SVGContainerBuilder<SVGTextElement>}*/ (SVG.m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder('text', Class.$get($JavaScriptObject)));
 }
 /** @nodts @template E @return {SVGElementBuilder<E>} */
 static m_svgElement__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGElementBuilder(/** ?string */ element, /** Class<E> */ type) {
  SVG.$clinit();
  return /**@type {!SVGElementBuilder<E>}*/ (SVGElementBuilder.$create__org_jboss_elemento_svg_SVGElement(SVG.m_createSvgElement__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGElement(element, type)));
 }
 /** @nodts @template E @return {SVGElementBuilder<E>} */
 static m_wrapSvgElement__org_jboss_elemento_svg_SVGElement__org_jboss_elemento_svg_SVGElementBuilder(/** E */ element) {
  SVG.$clinit();
  return /**@type {!SVGElementBuilder<E>}*/ (SVGElementBuilder.$create__org_jboss_elemento_svg_SVGElement(element));
 }
 /** @nodts @template E @return {SVGContainerBuilder<E>} */
 static m_svgContainer__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ element, /** Class<E> */ type) {
  SVG.$clinit();
  return /**@type {!SVGContainerBuilder<E>}*/ (SVGContainerBuilder.$create__org_jboss_elemento_svg_SVGElement(SVG.m_createSvgElement__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGElement(element, type)));
 }
 /** @nodts @template E @return {SVGContainerBuilder<E>} */
 static m_wrapSvgContainer__org_jboss_elemento_svg_SVGElement__org_jboss_elemento_svg_SVGContainerBuilder(/** E */ element) {
  SVG.$clinit();
  return /**@type {!SVGContainerBuilder<E>}*/ (SVGContainerBuilder.$create__org_jboss_elemento_svg_SVGElement(element));
 }
 /** @nodts @template E @return {E} */
 static m_createSvgElement__java_lang_String__java_lang_Class__org_jboss_elemento_svg_SVGElement(/** ?string */ element, /** Class<E> */ type) {
  SVG.$clinit();
  return /**@type {E}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElementNS($Overlay.f_NAMESPACE__org_jboss_elemento_svg_SVGElement_$Overlay, element)), $Overlay));
 }
 /** @nodts @return {!SVG} */
 static $create__() {
  let $instance = new SVG();
  $instance.$ctor__org_jboss_elemento_svg_SVG__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_svg_SVG__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  SVG.$clinit = () =>{};
  SVG.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SVG;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  $Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  SVGElementBuilder = goog.module.get('org.jboss.elemento.svg.SVGElementBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(SVG, 'org.jboss.elemento.svg.SVG');

exports = SVG;

//# sourceMappingURL=SVG.js.map
