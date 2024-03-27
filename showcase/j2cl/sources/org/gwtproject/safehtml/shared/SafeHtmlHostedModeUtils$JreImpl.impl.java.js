goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class JreImpl extends JsImpl {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JreImpl} */
 static $create__() {
  JreImpl.$clinit();
  let $instance = new JreImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__void() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__void();
 }
 /** @nodts */
 static m_checkArgument__boolean__java_lang_String__void(/** boolean */ completeHtml, /** ?string */ message) {
  if (!completeHtml) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
  }
 }
 /** @nodts */
 static $clinit() {
  JreImpl.$clinit = () =>{};
  JreImpl.$loadModules();
  JsImpl.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JreImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JreImpl');

exports = JreImpl;

//# sourceMappingURL=SafeHtmlHostedModeUtils$JreImpl.js.map
