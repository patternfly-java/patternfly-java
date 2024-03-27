goog.module('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Reflect_$Overlay = goog.forwardDeclare('elemental2.core.Reflect.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDocument_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDocument.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLScriptElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ScriptInjector extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLScriptElement} @nodts*/
  this.f_scriptElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_;
  /**@type {Window} @nodts*/
  this.f_window__org_treblereel_j2cl_processors_common_injectors_ScriptInjector;
 }
 /** @nodts @return {!ScriptInjector} */
 static $create__elemental2_dom_HTMLScriptElement(/** HTMLScriptElement */ scriptElement) {
  let $instance = new ScriptInjector();
  $instance.$ctor__org_treblereel_j2cl_processors_common_injectors_ScriptInjector__elemental2_dom_HTMLScriptElement__void(scriptElement);
  return $instance;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_injectors_ScriptInjector__elemental2_dom_HTMLScriptElement__void(/** HTMLScriptElement */ scriptElement) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_treblereel_j2cl_processors_common_injectors_ScriptInjector();
  this.f_scriptElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_ = scriptElement;
 }
 /** @nodts @return {ScriptInjector} */
 static m_fromString__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(/** ?string */ contents) {
  ScriptInjector.$clinit();
  let element = ScriptInjector.m_createElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__elemental2_dom_HTMLScriptElement(null, null);
  element.text = contents;
  return ScriptInjector.$create__elemental2_dom_HTMLScriptElement(element);
 }
 /** @nodts @return {HTMLScriptElement} */
 static m_createElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__elemental2_dom_HTMLScriptElement(/** ?function(HTMLScriptElement):void */ onResolve, /** ?function(HTMLScriptElement):void */ onReject) {
  let script = /**@type {HTMLScriptElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement('script'), $Overlay));
  if (!$Equality.$same(onResolve, null)) {
   script.addEventListener('load', EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    onResolve(script);
   }));
  }
  if (!$Equality.$same(onReject, null)) {
   script.addEventListener('error', EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_1) =>{
    onReject(script);
   }));
  }
  script.type = 'text/javascript';
  return script;
 }
 /** @nodts @return {ScriptInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(/** ?string */ url) {
  ScriptInjector.$clinit();
  return ScriptInjector.m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(url, null, null);
 }
 /** @nodts @return {ScriptInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(/** ?string */ url, /** ?function(HTMLScriptElement):void */ onResolve, /** ?function(HTMLScriptElement):void */ onReject) {
  ScriptInjector.$clinit();
  let element = ScriptInjector.m_createElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__elemental2_dom_HTMLScriptElement(onResolve, onReject);
  element.src = url;
  return ScriptInjector.$create__elemental2_dom_HTMLScriptElement(element);
 }
 /** @nodts @return {ScriptInjector} */
 static m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(/** ?string */ url, /** ?function(HTMLScriptElement):void */ onResolve) {
  ScriptInjector.$clinit();
  return ScriptInjector.m_fromUrl__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_Callback__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(url, onResolve, null);
 }
 /** @nodts @return {ScriptInjector} */
 m_setWindow__elemental2_dom_Window__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(/** Window */ window_1) {
  this.f_window__org_treblereel_j2cl_processors_common_injectors_ScriptInjector = window_1;
  return this;
 }
 /** @nodts */
 m_inject__void() {
  /**@type {HTMLDocument}*/ ($Casts.$to(Reflect_$Overlay.m_get__java_lang_Object__java_lang_String__java_lang_Object(this.f_window__org_treblereel_j2cl_processors_common_injectors_ScriptInjector, 'document'), HTMLDocument_$Overlay)).head.appendChild(this.f_scriptElement__org_treblereel_j2cl_processors_common_injectors_ScriptInjector_);
 }
 /** @private @nodts */
 $init__void_$p_org_treblereel_j2cl_processors_common_injectors_ScriptInjector() {
  this.f_window__org_treblereel_j2cl_processors_common_injectors_ScriptInjector = goog.global.window;
 }
 /** @nodts */
 static $clinit() {
  ScriptInjector.$clinit = () =>{};
  ScriptInjector.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScriptInjector;
 }
 
 /** @nodts */
 static $loadModules() {
  Reflect_$Overlay = goog.module.get('elemental2.core.Reflect.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDocument_$Overlay = goog.module.get('elemental2.dom.HTMLDocument.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLScriptElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ScriptInjector, 'org.treblereel.j2cl.processors.common.injectors.ScriptInjector');

exports = ScriptInjector;

//# sourceMappingURL=ScriptInjector.js.map
