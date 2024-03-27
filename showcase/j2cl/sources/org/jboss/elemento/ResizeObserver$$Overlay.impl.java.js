goog.module('org.jboss.elemento.ResizeObserver.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let BoxModel = goog.forwardDeclare('org.jboss.elemento.BoxModel$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_observe__$devirt__org_jboss_elemento_ResizeObserver__elemental2_dom_Element__void(/** !ResizeObserver */ $thisArg, /** Element */ element) {
  $Overlay.$clinit();
  $Overlay.m_observe__$devirt__org_jboss_elemento_ResizeObserver__elemental2_dom_Element__org_jboss_elemento_BoxModel__void($thisArg, element, BoxModel.f_contentBox__org_jboss_elemento_BoxModel);
 }
 /** @final @nodts */
 static m_observe__$devirt__org_jboss_elemento_ResizeObserver__elemental2_dom_Element__org_jboss_elemento_BoxModel__void(/** !ResizeObserver */ $thisArg, /** Element */ element, /** BoxModel */ boxModel) {
  $Overlay.$clinit();
  let options = new Object();
  options.box = boxModel.f_value__org_jboss_elemento_BoxModel;
  $thisArg.observe(element, options);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResizeObserver;
 }
 
 /** @nodts */
 static $loadModules() {
  BoxModel = goog.module.get('org.jboss.elemento.BoxModel$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'ResizeObserver');

exports = $Overlay;

//# sourceMappingURL=ResizeObserver$$Overlay.js.map
