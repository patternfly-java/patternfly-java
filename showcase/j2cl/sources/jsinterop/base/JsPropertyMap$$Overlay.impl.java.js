goog.module('jsinterop.base.JsPropertyMap.$Overlay$impl');

let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T @return {Object<string, T>} */
 static m_of__jsinterop_base_JsPropertyMap() {
  $Overlay.$clinit();
  return /**@type {Object<string, T>}*/ (InternalJsUtil.emptyObjectLiteral());
 }
 /** @nodts @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object__jsinterop_base_JsPropertyMap(/** ?string */ k, /** T */ v) {
  $Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ ($Overlay.m_of__jsinterop_base_JsPropertyMap());
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k, v);
  return map;
 }
 /** @nodts @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object__jsinterop_base_JsPropertyMap(/** ?string */ k1, /** T */ v1, /** ?string */ k2, /** T */ v2) {
  $Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ ($Overlay.m_of__jsinterop_base_JsPropertyMap());
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k1, v1);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k2, v2);
  return map;
 }
 /** @nodts @template T @return {Object<string, T>} */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object__jsinterop_base_JsPropertyMap(/** ?string */ k1, /** T */ v1, /** ?string */ k2, /** T */ v2, /** ?string */ k3, /** T */ v3) {
  $Overlay.$clinit();
  let map = /**@type {Object<string, T>}*/ ($Overlay.m_of__jsinterop_base_JsPropertyMap());
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k1, v1);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k2, v2);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(map, k3, v3);
  return map;
 }
 /** @nodts @template T @return {T} */
 static m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return /**@type {T}*/ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /** @nodts @template T @return {*} */
 static m_nestedGet__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/** !Object<string, T> */ $thisArg, /** ?string */ qualifiedName) {
  $Overlay.$clinit();
  return goog.getObjectByName(qualifiedName, $thisArg);
 }
 /** @nodts @template T @return {*} @deprecated */
 static m_getAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return $Overlay.m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any($thisArg, propertyName);
 }
 /** @nodts @template T @return {*} */
 static m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return /**@type {*}*/ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /** @nodts @template T @return {*} */
 static m_nestedGetAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__jsinterop_base_Any(/** !Object<string, T> */ $thisArg, /** ?string */ qualifiedName) {
  $Overlay.$clinit();
  return /**@type {*}*/ (goog.getObjectByName(qualifiedName, $thisArg));
 }
 /** @nodts @template T @return {boolean} */
 static m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__boolean(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return InternalJsUtil.hasIndexed($thisArg, propertyName);
 }
 /** @nodts @template T */
 static m_delete__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__void(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, propertyName);
 }
 /** @nodts @template T */
 static m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/** !Object<string, T> */ $thisArg, /** ?string */ propertyName, /** T */ value) {
  $Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, propertyName, value);
 }
 /** @nodts @template T */
 static m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(/** !Object<string, T> */ $thisArg, /** ?function(?string):void */ cb) {
  $Overlay.$clinit();
  InternalJsUtil.forEach($thisArg, cb);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsPropertyMap$$Overlay.js.map
