goog.module('org.gwtproject.safehtml.shared.SafeHtmlUtils.JvmImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils.JsImpl$impl');

class JvmImpl extends JsImpl {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JvmImpl} */
 static $create__() {
  JvmImpl.$clinit();
  let $instance = new JvmImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JvmImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JvmImpl__void() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtmlUtils_JsImpl__void();
 }
 /** @nodts */
 static $clinit() {
  JvmImpl.$clinit = () =>{};
  JvmImpl.$loadModules();
  JsImpl.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JvmImpl;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JvmImpl, 'org.gwtproject.safehtml.shared.SafeHtmlUtils$JvmImpl');

exports = JvmImpl;

//# sourceMappingURL=SafeHtmlUtils$JvmImpl.js.map
