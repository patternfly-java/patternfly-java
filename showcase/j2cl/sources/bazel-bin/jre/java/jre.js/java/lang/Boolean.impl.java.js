goog.module('java.lang.Boolean$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Platform = goog.forwardDeclare('javaemul.internal.Platform$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $$boolean = goog.forwardDeclare('vmbootstrap.primitives.$boolean$impl');

/**
 * @abstract
 * @final
 * @implements {Comparable<?boolean>}
 * @implements {Serializable}
 */
class Boolean extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_value__java_lang_Boolean_ = false;
 }
 /** @nodts @return {number} */
 static m_compare__boolean__boolean__int(/** boolean */ x, /** boolean */ y) {
  Boolean.$clinit();
  return x == y ? 0 : x ? 1 : - 1 | 0;
 }
 /** @nodts @return {number} */
 static m_hashCode__boolean__int(/** boolean */ value) {
  Boolean.$clinit();
  return value ? 1231 : 1237;
 }
 /** @nodts @return {boolean} */
 static m_logicalAnd__boolean__boolean__boolean(/** boolean */ a, /** boolean */ b) {
  Boolean.$clinit();
  return a && b;
 }
 /** @nodts @return {boolean} */
 static m_logicalOr__boolean__boolean__boolean(/** boolean */ a, /** boolean */ b) {
  Boolean.$clinit();
  return a || b;
 }
 /** @nodts @return {boolean} */
 static m_logicalXor__boolean__boolean__boolean(/** boolean */ a, /** boolean */ b) {
  Boolean.$clinit();
  return !!(+ a ^ + b);
 }
 /** @nodts @return {boolean} */
 static m_parseBoolean__java_lang_String__boolean(/** ?string */ s) {
  Boolean.$clinit();
  return !$Equality.$same(s, null) && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('true', j_l_String.m_toLowerCase__java_lang_String__java_lang_String(s));
 }
 /** @nodts @return {?string} */
 static m_toString__boolean__java_lang_String(/** boolean */ x) {
  Boolean.$clinit();
  return j_l_String.m_valueOf__boolean__java_lang_String(x);
 }
 /** @nodts @return {?boolean} */
 static m_valueOf__boolean__java_lang_Boolean(/** boolean */ b) {
  Boolean.$clinit();
  return b ? Boolean.$create__boolean(true) : Boolean.$create__boolean(false);
 }
 /** @nodts @return {?boolean} */
 static m_valueOf__java_lang_String__java_lang_Boolean(/** ?string */ s) {
  Boolean.$clinit();
  return Boolean.m_valueOf__boolean__java_lang_Boolean(Boolean.m_parseBoolean__java_lang_String__boolean(s));
 }
 /** @nodts @return {boolean} */
 static $create__boolean(/** boolean */ value) {
  Boolean.$clinit();
  let /** ?boolean */ $thisArg;
  $thisArg = value;
  return $thisArg;
 }
 /** @nodts @return {boolean} */
 static $create__java_lang_String(/** ?string */ s) {
  Boolean.$clinit();
  let /** ?boolean */ $thisArg;
  $thisArg = Boolean.m_parseBoolean__java_lang_String__boolean(s);
  return $thisArg;
 }
 /** @nodts @return {boolean} */
 static m_booleanValue__java_lang_Boolean__boolean(/** boolean */ $thisArg) {
  Boolean.$clinit();
  return InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @return {number} */
 static m_compareTo__java_lang_Boolean__java_lang_Boolean__int(/** boolean */ $thisArg, /** ?boolean */ b) {
  Boolean.$clinit();
  return Boolean.m_compare__boolean__boolean__int(Boolean.m_booleanValue__java_lang_Boolean__boolean($thisArg), Boolean.m_booleanValue__java_lang_Boolean__boolean(b));
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_Boolean__java_lang_Object__boolean(/** boolean */ $thisArg, /** * */ o) {
  Boolean.$clinit();
  return Platform.m_isEqual__java_lang_Object__java_lang_Object__boolean($thisArg, o);
 }
 /** @nodts @return {number} */
 static m_hashCode__java_lang_Boolean__int(/** boolean */ $thisArg) {
  Boolean.$clinit();
  return Boolean.m_hashCode__boolean__int(Boolean.m_booleanValue__java_lang_Boolean__boolean($thisArg));
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_Boolean__java_lang_String(/** boolean */ $thisArg) {
  Boolean.$clinit();
  return Boolean.m_toString__boolean__java_lang_String(Boolean.m_booleanValue__java_lang_Boolean__boolean($thisArg));
 }
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  Boolean.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('boolean', typeof(instance));
 }
 /** @final @nodts @return {number} */
 static m_compareTo__java_lang_Object__int(/** boolean */ $thisArg, /** ?boolean */ arg0) {
  Boolean.$clinit();
  return Boolean.m_compareTo__java_lang_Boolean__java_lang_Boolean__int($thisArg, /**@type {?boolean}*/ ($Casts.$to(arg0, Boolean)));
 }
 /** @nodts @return {?boolean} */
 static get f_FALSE__java_lang_Boolean() {
  return (Boolean.$clinit(), Boolean.$static_FALSE__java_lang_Boolean);
 }
 /** @nodts @return {?boolean} */
 static get f_TRUE__java_lang_Boolean() {
  return (Boolean.$clinit(), Boolean.$static_TRUE__java_lang_Boolean);
 }
 /** @nodts @return {Class<?boolean>} */
 static get f_TYPE__java_lang_Boolean() {
  return (Boolean.$clinit(), Boolean.$static_TYPE__java_lang_Boolean);
 }
 /** @nodts */
 static $clinit() {
  Boolean.$clinit = () =>{};
  Boolean.$loadModules();
  j_l_Object.$clinit();
  Boolean.$static_FALSE__java_lang_Boolean = false;
  Boolean.$static_TRUE__java_lang_Boolean = true;
  Boolean.$static_TYPE__java_lang_Boolean = Class.$get($$boolean);
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Platform = goog.module.get('javaemul.internal.Platform$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $$boolean = goog.module.get('vmbootstrap.primitives.$boolean$impl');
 }
}
/**@private {?boolean} @nodts*/
Boolean.$static_FALSE__java_lang_Boolean;
/**@private {?boolean} @nodts*/
Boolean.$static_TRUE__java_lang_Boolean;
/**@private {Class<?boolean>} @nodts*/
Boolean.$static_TYPE__java_lang_Boolean;
Comparable.$markImplementor(Boolean);
Serializable.$markImplementor(Boolean);
$Util.$setClassMetadata(Boolean, 'java.lang.Boolean');

exports = Boolean;

//# sourceMappingURL=Boolean.js.map
