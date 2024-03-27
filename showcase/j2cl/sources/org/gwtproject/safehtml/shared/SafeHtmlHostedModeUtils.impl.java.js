goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JreImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');

class SafeHtmlHostedModeUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SafeHtmlHostedModeUtils} */
 static $create__() {
  SafeHtmlHostedModeUtils.$clinit();
  let $instance = new SafeHtmlHostedModeUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_isCompleteHtml__java_lang_String__boolean(/** ?string */ html) {
  SafeHtmlHostedModeUtils.$clinit();
  return SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_isCompleteHtml__java_lang_String__boolean(html);
 }
 /** @nodts */
 static m_maybeCheckCompleteHtml__java_lang_String__void(/** ?string */ html) {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_maybeCheckCompleteHtml__java_lang_String__void(html);
 }
 /** @nodts */
 static m_setForceCheckCompleteHtml__boolean__void(/** boolean */ check) {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = check;
 }
 /** @nodts */
 static m_setForceCheckCompleteHtmlFromProperty__void() {
  SafeHtmlHostedModeUtils.$clinit();
  SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_.m_getForceCheckCompleteHtmlFromProperty__boolean();
 }
 /** @nodts */
 static $clinit() {
  SafeHtmlHostedModeUtils.$clinit = () =>{};
  SafeHtmlHostedModeUtils.$loadModules();
  j_l_Object.$clinit();
  SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = JreImpl.$create__();
  SafeHtmlHostedModeUtils.m_setForceCheckCompleteHtmlFromProperty__void();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlHostedModeUtils;
 }
 
 /** @nodts */
 static $loadModules() {
  JreImpl = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');
 }
}
/**@const {string} @nodts*/
SafeHtmlHostedModeUtils.f_FORCE_CHECK_COMPLETE_HTML__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils = 'com.google.gwt.safehtml.ForceCheckCompleteHtml';
/**@type {JreImpl} @nodts*/
SafeHtmlHostedModeUtils.f_impl__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_;
/**@type {boolean} @nodts*/
SafeHtmlHostedModeUtils.f_forceCheckCompleteHtml__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_ = false;
$Util.$setClassMetadata(SafeHtmlHostedModeUtils, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils');

exports = SafeHtmlHostedModeUtils;

//# sourceMappingURL=SafeHtmlHostedModeUtils.js.map
