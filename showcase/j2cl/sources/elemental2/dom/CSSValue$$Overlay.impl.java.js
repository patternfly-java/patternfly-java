goog.module('elemental2.dom.CSSValue.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {number} */
 static get f_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_CUSTOM;
  $Overlay.$static_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_INHERIT;
  $Overlay.$static_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_PRIMITIVE_VALUE;
  $Overlay.$static_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay = CSSValue.CSS_VALUE_LIST;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CSSValue;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {number} @nodts*/
$Overlay.$static_CSS_CUSTOM__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CSS_INHERIT__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CSS_PRIMITIVE_VALUE__elemental2_dom_CSSValue_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CSS_VALUE_LIST__elemental2_dom_CSSValue_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'CSSValue');

exports = $Overlay;

//# sourceMappingURL=CSSValue$$Overlay.js.map
