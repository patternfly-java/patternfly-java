goog.module('elemental2.dom.ReadableStream.GetReaderUnionType.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_ReadableStream_GetReaderUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @template VALUE @return {ReadableStreamBYOBReader} */
 static m_asReadableStreamBYOBReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType__elemental2_dom_ReadableStreamBYOBReader(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ReadableStreamBYOBReader}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @template VALUE @return {ReadableStreamDefaultReader<VALUE>} */
 static m_asReadableStreamDefaultReader__$devirt__elemental2_dom_ReadableStream_GetReaderUnionType__elemental2_dom_ReadableStreamDefaultReader(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ReadableStreamDefaultReader<VALUE>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ReadableStream$GetReaderUnionType$$Overlay.js.map
