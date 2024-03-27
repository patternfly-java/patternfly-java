goog.module('java.nio.charset.StandardCharsets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Charset = goog.forwardDeclare('java.nio.charset.Charset$impl');
let EmulatedCharset = goog.forwardDeclare('javaemul.internal.EmulatedCharset$impl');

/**
 * @final
 */
class StandardCharsets extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!StandardCharsets} */
 static $create__() {
  let $instance = new StandardCharsets();
  $instance.$ctor__java_nio_charset_StandardCharsets__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_nio_charset_StandardCharsets__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Charset} */
 static get f_ISO_8859_1__java_nio_charset_StandardCharsets() {
  return (StandardCharsets.$clinit(), StandardCharsets.$static_ISO_8859_1__java_nio_charset_StandardCharsets);
 }
 /** @nodts @return {Charset} */
 static get f_UTF_8__java_nio_charset_StandardCharsets() {
  return (StandardCharsets.$clinit(), StandardCharsets.$static_UTF_8__java_nio_charset_StandardCharsets);
 }
 /** @nodts */
 static $clinit() {
  StandardCharsets.$clinit = () =>{};
  StandardCharsets.$loadModules();
  j_l_Object.$clinit();
  StandardCharsets.$static_ISO_8859_1__java_nio_charset_StandardCharsets = EmulatedCharset.f_ISO_8859_1__javaemul_internal_EmulatedCharset;
  StandardCharsets.$static_UTF_8__java_nio_charset_StandardCharsets = EmulatedCharset.f_UTF_8__javaemul_internal_EmulatedCharset;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardCharsets;
 }
 
 /** @nodts */
 static $loadModules() {
  EmulatedCharset = goog.module.get('javaemul.internal.EmulatedCharset$impl');
 }
}
/**@private {Charset} @nodts*/
StandardCharsets.$static_ISO_8859_1__java_nio_charset_StandardCharsets;
/**@private {Charset} @nodts*/
StandardCharsets.$static_UTF_8__java_nio_charset_StandardCharsets;
$Util.$setClassMetadata(StandardCharsets, 'java.nio.charset.StandardCharsets');

exports = StandardCharsets;

//# sourceMappingURL=StandardCharsets.js.map
