goog.module('vmbootstrap.Comparables$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Comparables extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Comparables} */
 static $create__() {
  $Comparables.$clinit();
  let $instance = new $Comparables();
  $instance.$ctor__javaemul_internal_Comparables__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Comparables__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_compareTo__java_lang_Comparable__java_lang_Object__int(/** (Comparable|boolean|number|string) */ a, /** * */ b) {
  $Comparables.$clinit();
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(typeof(a))) {
   case 'number': 
    return Double.m_compareTo__java_lang_Double__java_lang_Double__int(/**@type {?number}*/ (JsUtils.uncheckedCast(a)), /**@type {?number}*/ ($Casts.$to(b, Double)));
   case 'boolean': 
    return Boolean.m_compareTo__java_lang_Boolean__java_lang_Boolean__int(/**@type {?boolean}*/ (JsUtils.uncheckedCast(a)), /**@type {?boolean}*/ ($Casts.$to(b, Boolean)));
   case 'string': 
    return j_l_String.m_compareTo__java_lang_String__java_lang_String__int(/**@type {?string}*/ (JsUtils.uncheckedCast(a)), /**@type {?string}*/ ($Casts.$to(b, j_l_String)));
  }
  return a.m_compareTo__java_lang_Object__int(b);
 }
 /** @nodts */
 static $clinit() {
  $Comparables.$clinit = () =>{};
  $Comparables.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Comparables;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Comparables, 'javaemul.internal.Comparables');

exports = $Comparables;

//# sourceMappingURL=Comparables.js.map
