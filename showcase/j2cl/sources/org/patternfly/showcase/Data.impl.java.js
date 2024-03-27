goog.module('org.patternfly.showcase.Data$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let ResourceBundle = goog.forwardDeclare('org.patternfly.showcase.ResourceBundle$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Layout_$Overlay = goog.forwardDeclare('org.patternfly.showcase.layout.Layout.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Data extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Data} */
 static $create__() {
  Data.$clinit();
  let $instance = new Data();
  $instance.$ctor__org_patternfly_showcase_Data__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Data__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {List<Object>} */
 static m_components__java_util_List() {
  Data.$clinit();
  let result = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(Data.$static_components__org_patternfly_showcase_Data, (/** ?string */ key) =>{
   let component = /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.$static_components__org_patternfly_showcase_Data, key), $Overlay));
   if ($Overlay.m_implemented__$devirt__org_patternfly_showcase_component_Component__boolean(component)) {
    result.add(component);
   }
  });
  return result;
 }
 /** @nodts @return {List<Object>} */
 static m_topLevelComponents__java_util_List() {
  Data.$clinit();
  let result = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(Data.$static_components__org_patternfly_showcase_Data, (/** ?string */ key) =>{
   let component = /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.$static_components__org_patternfly_showcase_Data, key), $Overlay));
   if ($Overlay.m_implemented__$devirt__org_patternfly_showcase_component_Component__boolean(component) && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(component.route, '/components/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(component.name))) {
    result.add(component);
   }
  });
  return result;
 }
 /** @nodts @return {List<Object>} */
 static m_groupComponents__java_lang_String__java_util_List(/** ?string */ group) {
  Data.$clinit();
  let result = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(Data.$static_components__org_patternfly_showcase_Data, (/** ?string */ key) =>{
   let component = /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.$static_components__org_patternfly_showcase_Data, key), $Overlay));
   if ($Overlay.m_implemented__$devirt__org_patternfly_showcase_component_Component__boolean(component) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(component.route, group)) {
    result.add(component);
   }
  });
  return result;
 }
 /** @nodts @return {List<Object>} */
 static m_layouts__java_util_List() {
  Data.$clinit();
  let result = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(Data.$static_layouts__org_patternfly_showcase_Data, (/** ?string */ key) =>{
   let layout = /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.$static_layouts__org_patternfly_showcase_Data, key), Layout_$Overlay));
   if (Layout_$Overlay.m_implemented__$devirt__org_patternfly_showcase_layout_Layout__boolean(layout)) {
    result.add(layout);
   }
  });
  return result;
 }
 /** @nodts @return {Object<string, Object>} */
 static get f_components__org_patternfly_showcase_Data() {
  return (Data.$clinit(), Data.$static_components__org_patternfly_showcase_Data);
 }
 /** @nodts */
 static set f_components__org_patternfly_showcase_Data(/** Object<string, Object> */ value) {
  (Data.$clinit(), Data.$static_components__org_patternfly_showcase_Data = value);
 }
 /** @nodts @return {Object<string, Object>} */
 static get f_layouts__org_patternfly_showcase_Data() {
  return (Data.$clinit(), Data.$static_layouts__org_patternfly_showcase_Data);
 }
 /** @nodts */
 static set f_layouts__org_patternfly_showcase_Data(/** Object<string, Object> */ value) {
  (Data.$clinit(), Data.$static_layouts__org_patternfly_showcase_Data = value);
 }
 /** @nodts */
 static $clinit() {
  Data.$clinit = () =>{};
  Data.$loadModules();
  j_l_Object.$clinit();
  Data.$static_components__org_patternfly_showcase_Data = /**@type {Object<string, Object>}*/ (Js.m_cast__java_lang_Object__java_lang_Object(goog.global.JSON.parse(ResourceBundle.f_components__org_patternfly_showcase_ResourceBundle)));
  Data.$static_layouts__org_patternfly_showcase_Data = /**@type {Object<string, Object>}*/ (Js.m_cast__java_lang_Object__java_lang_Object(goog.global.JSON.parse(ResourceBundle.f_layouts__org_patternfly_showcase_ResourceBundle)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Data;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  ResourceBundle = goog.module.get('org.patternfly.showcase.ResourceBundle$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Layout_$Overlay = goog.module.get('org.patternfly.showcase.layout.Layout.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Object<string, Object>} @nodts*/
Data.$static_components__org_patternfly_showcase_Data;
/**@private {Object<string, Object>} @nodts*/
Data.$static_layouts__org_patternfly_showcase_Data;
$Util.$setClassMetadata(Data, 'org.patternfly.showcase.Data');

exports = Data;

//# sourceMappingURL=Data.js.map
