goog.module('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
let SafeHtmlString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @final
 */
class SafeHtmlBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StringBuilder} @nodts*/
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_;
 }
 /** @nodts @return {!SafeHtmlBuilder} */
 static $create__() {
  SafeHtmlBuilder.$clinit();
  let $instance = new SafeHtmlBuilder();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlBuilder__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder();
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__boolean__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** boolean */ b) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__boolean__java_lang_StringBuilder(b);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__byte__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int__java_lang_StringBuilder(num);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__char__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** number */ c) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String__java_lang_StringBuilder(SafeHtmlUtils.m_htmlEscape__char__java_lang_String(c));
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__double__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__double__java_lang_StringBuilder(num);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__float__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__float__java_lang_StringBuilder(num);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__int__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** number */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__int__java_lang_StringBuilder(num);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__long__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** !$Long */ num) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__long__java_lang_StringBuilder(num);
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_append__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** SafeHtml */ html) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String__java_lang_StringBuilder(html.m_asString__java_lang_String());
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_appendEscaped__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** ?string */ text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String__java_lang_StringBuilder(SafeHtmlUtils.m_htmlEscape__java_lang_String__java_lang_String(text));
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_appendEscapedLines__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** ?string */ text) {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String__java_lang_String(text), '\n', '<br>'));
  return this;
 }
 /** @nodts @return {SafeHtmlBuilder} */
 m_appendHtmlConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** ?string */ html) {
  SafeHtmlHostedModeUtils.m_maybeCheckCompleteHtml__java_lang_String__void(html);
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.m_append__java_lang_String__java_lang_StringBuilder(html);
  return this;
 }
 /** @nodts @return {SafeHtml} */
 m_toSafeHtml__org_gwtproject_safehtml_shared_SafeHtml() {
  return SafeHtmlString.$create__java_lang_String(this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_.toString());
 }
 /** @private @nodts */
 $init__void_$p_org_gwtproject_safehtml_shared_SafeHtmlBuilder() {
  this.f_sb__org_gwtproject_safehtml_shared_SafeHtmlBuilder_ = StringBuilder.$create__();
 }
 /** @nodts */
 static $clinit() {
  SafeHtmlBuilder.$clinit = () =>{};
  SafeHtmlBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeHtmlHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$impl');
  SafeHtmlString = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
}
$Util.$setClassMetadata(SafeHtmlBuilder, 'org.gwtproject.safehtml.shared.SafeHtmlBuilder');

exports = SafeHtmlBuilder;

//# sourceMappingURL=SafeHtmlBuilder.js.map
