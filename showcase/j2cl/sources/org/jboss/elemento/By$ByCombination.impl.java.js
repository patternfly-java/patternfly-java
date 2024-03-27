goog.module('org.jboss.elemento.By.ByCombination$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Combinator = goog.forwardDeclare('org.jboss.elemento.By.Combinator$impl');

class ByCombination extends By {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {By} @nodts*/
  this.f_by1__org_jboss_elemento_By_ByCombination_;
  /**@type {Combinator} @nodts*/
  this.f_combinator__org_jboss_elemento_By_ByCombination_;
  /**@type {By} @nodts*/
  this.f_by2__org_jboss_elemento_By_ByCombination_;
 }
 /** @nodts @return {!ByCombination} */
 static $create__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By(/** By */ by1, /** Combinator */ combinator, /** By */ by2) {
  ByCombination.$clinit();
  let $instance = new ByCombination();
  $instance.$ctor__org_jboss_elemento_By_ByCombination__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__void(by1, combinator, by2);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_ByCombination__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By__void(/** By */ by1, /** Combinator */ combinator, /** By */ by2) {
  this.$ctor__org_jboss_elemento_By__void();
  this.f_by1__org_jboss_elemento_By_ByCombination_ = by1;
  this.f_combinator__org_jboss_elemento_By_ByCombination_ = combinator;
  this.f_by2__org_jboss_elemento_By_ByCombination_ = by2;
 }
 /** @override @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_by1__org_jboss_elemento_By_ByCombination_.m_selector__java_lang_String_$pp_org_jboss_elemento()) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_combinator__org_jboss_elemento_By_ByCombination_.f_operator__org_jboss_elemento_By_Combinator_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_by2__org_jboss_elemento_By_ByCombination_.m_selector__java_lang_String_$pp_org_jboss_elemento());
 }
 /** @nodts */
 static $clinit() {
  ByCombination.$clinit = () =>{};
  ByCombination.$loadModules();
  By.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByCombination;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(ByCombination, 'org.jboss.elemento.By$ByCombination');

exports = ByCombination;

//# sourceMappingURL=By$ByCombination.js.map
