goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

class JreImpl extends JsImpl {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JreImpl} */
 static $create__() {
  JreImpl.$clinit();
  let $instance = new JreImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__void() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__void();
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
 static $loadModules() {}
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JreImpl');

exports = JreImpl;

//# sourceMappingURL=SafeUriHostedModeUtils$JreImpl.js.map
