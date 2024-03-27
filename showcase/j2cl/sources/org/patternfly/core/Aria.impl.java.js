goog.module('org.patternfly.core.Aria$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Aria {
 /** @nodts */
 static $clinit() {
  Aria.$clinit = () =>{};
  Aria.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Aria = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Aria;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Aria.f_atomic__org_patternfly_core_Aria = 'aria-atomic';
/**@const {string} @nodts*/
Aria.f_controls__org_patternfly_core_Aria = 'aria-controls';
/**@const {string} @nodts*/
Aria.f_current__org_patternfly_core_Aria = 'aria-current';
/**@const {string} @nodts*/
Aria.f_describedBy__org_patternfly_core_Aria = 'aria-describedby';
/**@const {string} @nodts*/
Aria.f_disabled__org_patternfly_core_Aria = 'aria-disabled';
/**@const {string} @nodts*/
Aria.f_expanded__org_patternfly_core_Aria = 'aria-expanded';
/**@const {string} @nodts*/
Aria.f_hidden__org_patternfly_core_Aria = 'aria-hidden';
/**@const {string} @nodts*/
Aria.f_invalid__org_patternfly_core_Aria = 'aria-invalid';
/**@const {string} @nodts*/
Aria.f_label__org_patternfly_core_Aria = 'aria-label';
/**@const {string} @nodts*/
Aria.f_live__org_patternfly_core_Aria = 'aria-live';
/**@const {string} @nodts*/
Aria.f_labelledBy__org_patternfly_core_Aria = 'aria-labelledby';
/**@const {string} @nodts*/
Aria.f_modal__org_patternfly_core_Aria = 'aria-modal';
/**@const {string} @nodts*/
Aria.f_multiSelectable__org_patternfly_core_Aria = 'aria-multiselectable';
/**@const {string} @nodts*/
Aria.f_orientation__org_patternfly_core_Aria = 'aria-orientation';
/**@const {string} @nodts*/
Aria.f_pressed__org_patternfly_core_Aria = 'aria-pressed';
/**@const {string} @nodts*/
Aria.f_relevant__org_patternfly_core_Aria = 'aria-relevant';
/**@const {string} @nodts*/
Aria.f_selected__org_patternfly_core_Aria = 'aria-selected';
/**@const {string} @nodts*/
Aria.f_valueMin__org_patternfly_core_Aria = 'aria-valuemin';
/**@const {string} @nodts*/
Aria.f_valueMax__org_patternfly_core_Aria = 'aria-valuemax';
/**@const {string} @nodts*/
Aria.f_valueNow__org_patternfly_core_Aria = 'aria-valuenow';
/**@const {string} @nodts*/
Aria.f_valueText__org_patternfly_core_Aria = 'aria-valuetext';
Aria.$markImplementor(/**@type {Function}*/ (Aria));
$Util.$setClassMetadataForInterface(Aria, 'org.patternfly.core.Aria');

exports = Aria;

//# sourceMappingURL=Aria.js.map
