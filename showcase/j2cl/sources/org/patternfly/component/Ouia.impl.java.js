goog.module('org.patternfly.component.Ouia$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let WebStorageWindow_$Overlay = goog.forwardDeclare('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class Ouia extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_component__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/** HTMLElement */ element, /** ComponentType */ componentType) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(componentType.f_componentName__org_patternfly_component_ComponentType, null) && Ouia.m_isSupported__boolean()) {
   Ouia.m_component__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(element, componentType.f_componentName__org_patternfly_component_ComponentType, Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('ouia', /**@type {!Array<?string>}*/ ($Arrays.$init([componentType.f_id__org_patternfly_component_ComponentType], j_l_String))));
  }
 }
 /** @nodts */
 static m_component__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/** HTMLElement */ element, /** ?string */ name, /** ?string */ id) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && !$Equality.$same(name, null) && Ouia.m_isSupported__boolean()) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentType', name);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentId', id);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentSafe', 'true');
  }
 }
 /** @nodts */
 static m_safe__elemental2_dom_HTMLElement__boolean__void(/** HTMLElement */ element, /** boolean */ safe) {
  Ouia.$clinit();
  if (!$Equality.$same(element, null) && Ouia.m_isSupported__boolean()) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, 'ouiaComponentSafe', j_l_String.m_valueOf__boolean__java_lang_String(safe));
  }
 }
 /** @nodts @return {boolean} */
 static m_isSupported__boolean() {
  let localStorage = WebStorageWindow_$Overlay.m_of__elemental2_dom_Window__elemental2_webstorage_WebStorageWindow(goog.global.window).localStorage;
  if (!$Equality.$same(localStorage, null)) {
   return Boolean.m_parseBoolean__java_lang_String__boolean(localStorage.getItem('ouia'));
  }
  return false;
 }
 /** @nodts @return {!Ouia} */
 static $create__() {
  let $instance = new Ouia();
  $instance.$ctor__org_patternfly_component_Ouia__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Ouia__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Ouia.$clinit = () =>{};
  Ouia.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Ouia;
 }
 
 /** @nodts */
 static $loadModules() {
  WebStorageWindow_$Overlay = goog.module.get('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(Ouia, 'org.patternfly.component.Ouia');

exports = Ouia;

//# sourceMappingURL=Ouia.js.map
