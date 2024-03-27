goog.module('org.jboss.elemento.By.BySelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

class BySelector extends By {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 /** @nodts @return {!BySelector} */
 static $create__java_lang_String(/** ?string */ selector) {
  BySelector.$clinit();
  let $instance = new BySelector();
  $instance.$ctor__org_jboss_elemento_By_BySelector__java_lang_String__void(selector);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_BySelector__java_lang_String__void(/** ?string */ selector) {
  this.$ctor__org_jboss_elemento_By__void();
  this.f_selector__org_jboss_elemento_By_BySelector_ = selector;
 }
 /** @override @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {
  return this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 /** @nodts */
 static $clinit() {
  BySelector.$clinit = () =>{};
  BySelector.$loadModules();
  By.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BySelector;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(BySelector, 'org.jboss.elemento.By$BySelector');

exports = BySelector;

//# sourceMappingURL=By$BySelector.js.map
