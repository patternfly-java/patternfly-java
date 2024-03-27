goog.module('org.jboss.elemento.By.ByElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

class ByElement extends By {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_element__org_jboss_elemento_By_ByElement_;
 }
 /** @nodts @return {!ByElement} */
 static $create__java_lang_String(/** ?string */ element) {
  ByElement.$clinit();
  let $instance = new ByElement();
  $instance.$ctor__org_jboss_elemento_By_ByElement__java_lang_String__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_ByElement__java_lang_String__void(/** ?string */ element) {
  this.$ctor__org_jboss_elemento_By__void();
  this.f_element__org_jboss_elemento_By_ByElement_ = element;
 }
 /** @override @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {
  return this.f_element__org_jboss_elemento_By_ByElement_;
 }
 /** @nodts */
 static $clinit() {
  ByElement.$clinit = () =>{};
  ByElement.$loadModules();
  By.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByElement;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ByElement, 'org.jboss.elemento.By$ByElement');

exports = ByElement;

//# sourceMappingURL=By$ByElement.js.map
