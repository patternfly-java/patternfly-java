goog.module('elemental2.dom.NodeList.EntriesJsIteratorIterableTypeParameterArrayUnionType.$Overlay$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_NodeList_EntriesJsIteratorIterableTypeParameterArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @template T @return {?number} */
 static m_asDouble__$devirt__elemental2_dom_NodeList_EntriesJsIteratorIterableTypeParameterArrayUnionType__java_lang_Double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?number}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Double));
 }
 /** @nodts @template T @return {T} */
 static m_asT__$devirt__elemental2_dom_NodeList_EntriesJsIteratorIterableTypeParameterArrayUnionType__java_lang_Object(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @template T @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_NodeList_EntriesJsIteratorIterableTypeParameterArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=NodeList$EntriesJsIteratorIterableTypeParameterArrayUnionType$$Overlay.js.map
