goog.module('org.patternfly.popper.PopperError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Popper = goog.require('org.patternfly.popper.Popper$impl');

let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');

/**
 * @implements {Popper}
 */
class PopperError extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_category__org_patternfly_popper_PopperError_;
 }
 /** @nodts @return {!PopperError} */
 static $create__java_lang_String(/** ?string */ category) {
  PopperError.$clinit();
  let $instance = new PopperError();
  $instance.$ctor__org_patternfly_popper_PopperError__java_lang_String__void(category);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_PopperError__java_lang_String__void(/** ?string */ category) {
  this.$ctor__java_lang_Object__void();
  this.f_category__org_patternfly_popper_PopperError_ = category;
 }
 /** @override @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {
  Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.f_category__org_patternfly_popper_PopperError_, null, PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_);
  return null;
 }
 /** @override @nodts */
 m_show__org_jboss_elemento_Callback__void(/** Callback */ visible) {
  Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.f_category__org_patternfly_popper_PopperError_, null, PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_);
 }
 /** @override @nodts */
 m_hide__org_jboss_elemento_Callback__void(/** Callback */ hidden) {
  Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.f_category__org_patternfly_popper_PopperError_, null, PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_);
 }
 /** @override @nodts */
 m_cleanup__void() {
  Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.f_category__org_patternfly_popper_PopperError_, null, PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_);
 }
 /** @nodts */
 static $clinit() {
  PopperError.$clinit = () =>{};
  PopperError.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperError;
 }
 
 /** @nodts */
 static $loadModules() {
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
 }
}
/**@const {string} @nodts*/
PopperError.f_ERROR_MESSAGE__org_patternfly_popper_PopperError_ = 'Unable to create popper: \'Popper.createPopper\' is undefined.';
Popper.$markImplementor(PopperError);
$Util.$setClassMetadata(PopperError, 'org.patternfly.popper.PopperError');

exports = PopperError;

//# sourceMappingURL=PopperError.js.map
