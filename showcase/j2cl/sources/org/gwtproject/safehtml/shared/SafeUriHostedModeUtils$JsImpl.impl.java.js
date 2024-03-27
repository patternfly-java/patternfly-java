goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

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
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 m_isValidUri__java_lang_String__boolean(/** ?string */ uri) {
  return true;
 }
 /** @nodts @return {boolean} */
 m_getForceCheckValieUriFromProperty__boolean() {
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
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JsImpl');

exports = JsImpl;

//# sourceMappingURL=SafeUriHostedModeUtils$JsImpl.js.map
