goog.module('org.patternfly.core.Validation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');

/**
 * @final
 */
class Validation extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Validation} */
 static $create__() {
  Validation.$clinit();
  let $instance = new Validation();
  $instance.$ctor__org_patternfly_core_Validation__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Validation__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_verifyRange__java_lang_String__elemental2_dom_Element__java_lang_String__int__int__int__boolean(/** ?string */ category, /** Element */ element, /** ?string */ property, /** number */ value, /** number */ min, /** number */ max) {
  Validation.$clinit();
  if (value < 1 || value > 12) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(category, element, '\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(property) + '\' out of range. ' + 'Given: ' + value + ', allowed [' + min + ',' + max + '].');
   return false;
  }
  return true;
 }
 /** @nodts @template E @return {boolean} */
 static m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(/** ?string */ category, /** Element */ element, /** ?string */ property, /** E */ value, /** E */ firstAllowedValue, /** Array<E> */ otherAllowedValues) {
  Validation.$clinit();
  let allowed = /**@type {EnumSet<E>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(firstAllowedValue, otherAllowedValues));
  if (!allowed.contains(value)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(category, element, 'Unsupported value for \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(property) + '\'. ' + 'Given: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value) + ', allowed ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(allowed) + '.');
   return false;
  }
  return true;
 }
 /** @nodts */
 static $clinit() {
  Validation.$clinit = () =>{};
  Validation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Validation;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
 }
}
$Util.$setClassMetadata(Validation, 'org.patternfly.core.Validation');

exports = Validation;

//# sourceMappingURL=Validation.js.map
