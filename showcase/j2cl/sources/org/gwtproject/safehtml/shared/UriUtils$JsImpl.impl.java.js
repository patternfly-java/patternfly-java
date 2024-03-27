goog.module('org.gwtproject.safehtml.shared.UriUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class JsImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JsImpl} */
 static $create__() {
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_UriUtils_JsImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_UriUtils_JsImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 m_encode__java_lang_String__java_lang_String_$pp_org_gwtproject_safehtml_shared(/** ?string */ uri) {
  uri = goog.global.encodeURI(uri);
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String__int(uri, '%5B') != (- 1 | 0)) {
   uri = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(uri, '%5B', '[');
  }
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String__int(uri, '%5D') != (- 1 | 0)) {
   uri = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(uri, '%5D', ']');
  }
  return uri;
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
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.UriUtils$JsImpl');

exports = JsImpl;

//# sourceMappingURL=UriUtils$JsImpl.js.map
