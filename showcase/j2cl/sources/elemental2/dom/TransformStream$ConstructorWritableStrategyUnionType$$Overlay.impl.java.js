goog.module('elemental2.dom.TransformStream.ConstructorWritableStrategyUnionType.$Overlay$impl');

let ByteLengthQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
let CountQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {ByteLengthQueuingStrategy} */
 static m_asByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType__elemental2_dom_ByteLengthQueuingStrategy(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ByteLengthQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ByteLengthQueuingStrategy_$Overlay));
 }
 /** @nodts @return {CountQueuingStrategy} */
 static m_asCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType__elemental2_dom_CountQueuingStrategy(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CountQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), CountQueuingStrategy_$Overlay));
 }
 /** @nodts @return {?} */
 static m_asTransformStreamWritableStrategyType__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType__elemental2_dom_TransformStream_TransformStreamWritableStrategyType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ByteLengthQueuingStrategy_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CountQueuingStrategy_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  ByteLengthQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
  CountQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=TransformStream$ConstructorWritableStrategyUnionType$$Overlay.js.map
