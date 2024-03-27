goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class JsImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JsImpl} */
 static $create__() {
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 m_isCompleteHtml__java_lang_String__boolean(/** ?string */ html) {
  return true;
 }
 /** @nodts */
 m_maybeCheckCompleteHtml__java_lang_String__void(/** ?string */ html) {}
 /** @nodts @return {boolean} */
 m_getForceCheckCompleteHtmlFromProperty__boolean() {
  return false;
 }
 /** @nodts */
 static $clinit() {
  JsImpl.$clinit = () =>{};
  JsImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsImpl;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JsImpl');

exports = JsImpl;

//# sourceMappingURL=SafeHtmlHostedModeUtils$JsImpl.js.map
