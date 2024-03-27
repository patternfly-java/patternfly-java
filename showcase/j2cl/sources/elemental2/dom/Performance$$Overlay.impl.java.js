goog.module('elemental2.dom.Performance.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {PerformanceMeasure} */
 static m_measure__$devirt__elemental2_dom_Performance__java_lang_String__elemental2_dom_PerformanceMeasureOptions__java_lang_String__elemental2_dom_PerformanceMeasure(/** !Performance */ $thisArg, /** ?string */ measureName, /** PerformanceMeasureOptions */ startOrMeasureOptions, /** ?string */ endMark) {
  $Overlay.$clinit();
  return $thisArg.measure(measureName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(startOrMeasureOptions)), endMark);
 }
 /** @final @nodts @return {PerformanceMeasure} */
 static m_measure__$devirt__elemental2_dom_Performance__java_lang_String__elemental2_dom_PerformanceMeasureOptions__elemental2_dom_PerformanceMeasure(/** !Performance */ $thisArg, /** ?string */ measureName, /** PerformanceMeasureOptions */ startOrMeasureOptions) {
  $Overlay.$clinit();
  return $thisArg.measure(measureName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(startOrMeasureOptions)));
 }
 /** @final @nodts @return {PerformanceMeasure} */
 static m_measure__$devirt__elemental2_dom_Performance__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_PerformanceMeasure(/** !Performance */ $thisArg, /** ?string */ measureName, /** ?string */ startOrMeasureOptions, /** ?string */ endMark) {
  $Overlay.$clinit();
  return $thisArg.measure(measureName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(startOrMeasureOptions)), endMark);
 }
 /** @final @nodts @return {PerformanceMeasure} */
 static m_measure__$devirt__elemental2_dom_Performance__java_lang_String__java_lang_String__elemental2_dom_PerformanceMeasure(/** !Performance */ $thisArg, /** ?string */ measureName, /** ?string */ startOrMeasureOptions) {
  $Overlay.$clinit();
  return $thisArg.measure(measureName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(startOrMeasureOptions)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Performance;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Performance');

exports = $Overlay;

//# sourceMappingURL=Performance$$Overlay.js.map
