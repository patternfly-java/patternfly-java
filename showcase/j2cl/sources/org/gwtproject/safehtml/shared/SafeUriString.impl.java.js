goog.module('org.gwtproject.safehtml.shared.SafeUriString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeUri = goog.require('org.gwtproject.safehtml.shared.SafeUri$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {SafeUri}
 */
class SafeUriString extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_;
 }
 //Factory method corresponding to constructor 'SafeUriString(String)'.
 /** @nodts @return {!SafeUriString} */
 static $create__java_lang_String(/** ?string */ uri) {
  SafeUriString.$clinit();
  let $instance = new SafeUriString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriString__java_lang_String__void(uri);
  return $instance;
 }
 //Initialization from constructor 'SafeUriString(String)'.
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeUriString__java_lang_String__void(/** ?string */ uri) {
  this.$ctor__java_lang_Object__void();
  if ($Equality.$same(uri, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String('uri is null'));
  }
  this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_ = uri;
 }
 //Factory method corresponding to constructor 'SafeUriString()'.
 /** @nodts @return {!SafeUriString} */
 static $create__() {
  let $instance = new SafeUriString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriString__void();
  return $instance;
 }
 //Initialization from constructor 'SafeUriString()'.
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeUriString__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String__int(this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (!SafeUri.$isInstance(obj)) {
   return false;
  }
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_, /**@type {SafeUri}*/ ($Casts.$to(obj, SafeUri)).m_asString__java_lang_String());
 }
 /** @override @return {?string} */
 toString() {
  return 'safe: \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_asString__java_lang_String()) + '\"';
 }
 /** @override @nodts @return {?string} */
 m_asString__java_lang_String() {
  return this.f_uri__org_gwtproject_safehtml_shared_SafeUriString_;
 }
 /** @nodts */
 static $clinit() {
  SafeUriString.$clinit = () =>{};
  SafeUriString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeUriString;
 }
 
 /** @nodts */
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
SafeUri.$markImplementor(SafeUriString);
$Util.$setClassMetadata(SafeUriString, 'org.gwtproject.safehtml.shared.SafeUriString');

exports = SafeUriString;

//# sourceMappingURL=SafeUriString.js.map
