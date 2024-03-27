goog.module('elemental2.dom.ImageData.ConstructorDataOrWidthUnionType.$Overlay$impl');

let Uint8ClampedArray_$Overlay = goog.forwardDeclare('elemental2.core.Uint8ClampedArray.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {Uint8ClampedArray} */
 static m_asUint8ClampedArray__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType__elemental2_core_Uint8ClampedArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Uint8ClampedArray}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Uint8ClampedArray_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isUint8ClampedArray__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Uint8ClampedArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Uint8ClampedArray_$Overlay = goog.module.get('elemental2.core.Uint8ClampedArray.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ImageData$ConstructorDataOrWidthUnionType$$Overlay.js.map
