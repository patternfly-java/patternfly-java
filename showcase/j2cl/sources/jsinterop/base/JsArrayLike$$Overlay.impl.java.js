goog.module('jsinterop.base.JsArrayLike.$Overlay$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T @return {number} */
 static m_getLength__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg) {
  $Overlay.$clinit();
  return InternalJsUtil.getLength($thisArg);
 }
 /** @nodts @template T */
 static m_setLength__$devirt__jsinterop_base_JsArrayLike__int__void(/** !IArrayLike<T> */ $thisArg, /** number */ length) {
  $Overlay.$clinit();
  InternalJsUtil.setLength($thisArg, length);
 }
 /** @nodts @template T @return {T} */
 static m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return /**@type {T}*/ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /** @nodts @template T @return {*} @deprecated */
 static m_getAnyAt__$devirt__jsinterop_base_JsArrayLike__int__jsinterop_base_Any(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int__jsinterop_base_Any($thisArg, index);
 }
 /** @nodts @template T @return {*} */
 static m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int__jsinterop_base_Any(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return /**@type {*}*/ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /** @nodts @template T */
 static m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object__void(/** !IArrayLike<T> */ $thisArg, /** number */ index, /** T */ value) {
  $Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, index, value);
 }
 /** @nodts @template T */
 static m_delete__$devirt__jsinterop_base_JsArrayLike__int__void(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, index);
 }
 /** @nodts @template T @return {List<T>} */
 static m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(/** !IArrayLike<T> */ $thisArg) {
  $Overlay.$clinit();
  let asArray = /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object($thisArg));
  return /**@type {List<T>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(asArray));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsArrayLike$$Overlay.js.map
