goog.module('java.nio.charset.Charset.AvailableCharsets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Charset = goog.forwardDeclare('java.nio.charset.Charset$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let SortedMap = goog.forwardDeclare('java.util.SortedMap$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');

/**
 * @final
 */
class AvailableCharsets extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AvailableCharsets} */
 static $create__() {
  let $instance = new AvailableCharsets();
  $instance.$ctor__java_nio_charset_Charset_AvailableCharsets__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_nio_charset_Charset_AvailableCharsets__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {SortedMap<?string, Charset>} */
 static get f_CHARSETS__java_nio_charset_Charset_AvailableCharsets_() {
  return (AvailableCharsets.$clinit(), AvailableCharsets.$static_CHARSETS__java_nio_charset_Charset_AvailableCharsets_);
 }
 /** @nodts */
 static $clinit() {
  AvailableCharsets.$clinit = () =>{};
  AvailableCharsets.$loadModules();
  j_l_Object.$clinit();
  let map = /**@type {!TreeMap<?string, Charset>}*/ (TreeMap.$create__());
  map.put(EmulatedCharset.f_ISO_8859_1__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), EmulatedCharset.f_ISO_8859_1__javaemul_internal_EmulatedCharset);
  map.put(EmulatedCharset.f_ISO_LATIN_1__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), EmulatedCharset.f_ISO_LATIN_1__javaemul_internal_EmulatedCharset);
  map.put(EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset.m_name__java_lang_String(), EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset);
  AvailableCharsets.$static_CHARSETS__java_nio_charset_Charset_AvailableCharsets_ = /**@type {SortedMap<?string, Charset>}*/ (Collections.m_unmodifiableSortedMap__java_util_SortedMap__java_util_SortedMap(map));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AvailableCharsets;
 }
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  TreeMap = goog.module.get('java.util.TreeMap$impl');
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
 }
}
/**@private {SortedMap<?string, Charset>} @nodts*/
AvailableCharsets.$static_CHARSETS__java_nio_charset_Charset_AvailableCharsets_;
$Util.$setClassMetadata(AvailableCharsets, 'java.nio.charset.Charset$AvailableCharsets');

exports = AvailableCharsets;

//# sourceMappingURL=Charset$AvailableCharsets.js.map
