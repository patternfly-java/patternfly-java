goog.module('org.gwtproject.safehtml.shared.UriUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let SafeUriHostedModeUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$impl');
let SafeUriString = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUriString$impl');
let JvmImpl = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils.JvmImpl$impl');

/**
 * @final
 */
class UriUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!UriUtils} */
 static $create__() {
  let $instance = new UriUtils();
  $instance.$ctor__org_gwtproject_safehtml_shared_UriUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_UriUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {SafeUri} */
 static m_fromSafeConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(/** ?string */ s) {
  UriUtils.$clinit();
  SafeUriHostedModeUtils.m_maybeCheckValidUri__java_lang_String__void(s);
  return SafeUriString.$create__java_lang_String(s);
 }
 /** @nodts @return {SafeUri} */
 static m_fromString__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(/** ?string */ s) {
  UriUtils.$clinit();
  return SafeUriString.$create__java_lang_String(UriUtils.m_sanitizeUri__java_lang_String__java_lang_String(s));
 }
 /** @nodts @return {?string} */
 static m_sanitizeUri__java_lang_String__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  if (UriUtils.m_isSafeUri__java_lang_String__boolean(uri)) {
   return UriUtils.m_encodeAllowEscapes__java_lang_String__java_lang_String(uri);
  } else {
   return '#';
  }
 }
 /** @nodts @return {boolean} */
 static m_isSafeUri__java_lang_String__boolean(/** ?string */ uri) {
  UriUtils.$clinit();
  let scheme = UriUtils.m_extractScheme__java_lang_String__java_lang_String(uri);
  if ($Equality.$same(scheme, null)) {
   return true;
  }
  let schemeLc = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale__java_lang_String(scheme, Locale.f_ROOT__java_util_Locale);
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('http', schemeLc) || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('https', schemeLc) || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('ftp', schemeLc) || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('mailto', schemeLc) || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('MAILTO', j_l_String.m_toUpperCase__java_lang_String__java_util_Locale__java_lang_String(scheme, Locale.f_ROOT__java_util_Locale));
 }
 /** @nodts @return {?string} */
 static m_encodeAllowEscapes__java_lang_String__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  let escaped = StringBuilder.$create__();
  let firstSegment = true;
  for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__int__arrayOf_java_lang_String(uri, '%', - 1 | 0), $index = 0; $index < $array.length; $index++) {
   let segment = $array[$index];
   {
    if (firstSegment) {
     firstSegment = false;
     escaped.m_append__java_lang_String__java_lang_StringBuilder(UriUtils.m_encode__java_lang_String__java_lang_String(segment));
     continue;
    }
    if (j_l_String.m_length__java_lang_String__int(segment) >= 2 && j_l_String.m_matches__java_lang_String__java_lang_String__boolean(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(segment, 0, 2), '[0-9a-fA-F]{2}')) {
     escaped.m_append__java_lang_String__java_lang_StringBuilder('%').m_append__java_lang_String__java_lang_StringBuilder(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(segment, 0, 2));
     escaped.m_append__java_lang_String__java_lang_StringBuilder(UriUtils.m_encode__java_lang_String__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String(segment, 2)));
    } else {
     escaped.m_append__java_lang_String__java_lang_StringBuilder('%25').m_append__java_lang_String__java_lang_StringBuilder(UriUtils.m_encode__java_lang_String__java_lang_String(segment));
    }
   }
  }
  return escaped.toString();
 }
 /** @nodts @return {?string} */
 static m_extractScheme__java_lang_String__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  let colonPos = j_l_String.m_indexOf__java_lang_String__int__int(uri, 58 /* ':' */);
  if (colonPos < 0) {
   return null;
  }
  let scheme = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(uri, 0, colonPos);
  if (j_l_String.m_indexOf__java_lang_String__int__int(scheme, 47 /* '/' */) >= 0 || j_l_String.m_indexOf__java_lang_String__int__int(scheme, 35 /* '#' */) >= 0) {
   return null;
  }
  return scheme;
 }
 /** @nodts @return {?string} */
 static m_encode__java_lang_String__java_lang_String(/** ?string */ uri) {
  UriUtils.$clinit();
  return UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_.m_encode__java_lang_String__java_lang_String_$pp_org_gwtproject_safehtml_shared(uri);
 }
 /** @nodts @return {SafeUri} */
 static m_fromTrustedString__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(/** ?string */ s) {
  UriUtils.$clinit();
  SafeUriHostedModeUtils.m_maybeCheckValidUri__java_lang_String__void(s);
  return SafeUriString.$create__java_lang_String(s);
 }
 /** @nodts @return {SafeUri} @deprecated */
 static m_unsafeCastFromUntrustedString__java_lang_String__org_gwtproject_safehtml_shared_SafeUri(/** ?string */ s) {
  UriUtils.$clinit();
  return SafeUriString.$create__java_lang_String(s);
 }
 /** @nodts */
 static $clinit() {
  UriUtils.$clinit = () =>{};
  UriUtils.$loadModules();
  j_l_Object.$clinit();
  UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_ = JvmImpl.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UriUtils;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeUriHostedModeUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$impl');
  SafeUriString = goog.module.get('org.gwtproject.safehtml.shared.SafeUriString$impl');
  JvmImpl = goog.module.get('org.gwtproject.safehtml.shared.UriUtils.JvmImpl$impl');
 }
}
/**@const {string} @nodts*/
UriUtils.f_DONT_NEED_ENCODING__org_gwtproject_safehtml_shared_UriUtils = ';/?:@&=+$,-_.!~*\'()#[]';
/**@type {JvmImpl} @nodts*/
UriUtils.f_impl__org_gwtproject_safehtml_shared_UriUtils_;
$Util.$setClassMetadata(UriUtils, 'org.gwtproject.safehtml.shared.UriUtils');

exports = UriUtils;

//# sourceMappingURL=UriUtils.js.map
