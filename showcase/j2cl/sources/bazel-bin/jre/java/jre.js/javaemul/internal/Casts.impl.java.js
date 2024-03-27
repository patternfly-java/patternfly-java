goog.module('vmbootstrap.Casts$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class $Casts extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Casts} */
 static $create__() {
  $Casts.$clinit();
  let $instance = new $Casts();
  $instance.$ctor__javaemul_internal_Casts__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Casts__void() {
  this.$ctor__java_lang_Object__void();
 }
 // /** @return {*} */
 // native static $to(/** * */ instance, /** Constructor */ castType) 
 /** @return {*} */
 static $toInternal(/** * */ instance, /** ?function(*):boolean */ castTypeIsInstance, /** Constructor */ castType) {
  $Casts.$clinit();
  if (InternalPreconditions.m_isTypeChecked__boolean()) {
   let castSucceeds = $Equality.$same(instance, null) || castTypeIsInstance(instance);
   if (!castSucceeds) {
    let message = j_l_String.m_valueOf__java_lang_Object__java_lang_String($Objects.m_getClass__java_lang_Object__java_lang_Class(instance).m_getName__java_lang_String()) + ' cannot be cast to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Class.$get(castType).m_getName__java_lang_String());
    InternalPreconditions.m_checkType__boolean__java_lang_String__void(false, message);
   }
  }
  return instance;
 }
 /** @nodts */
 static $clinit() {
  $Casts.$clinit = () =>{};
  $Casts.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Casts;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata($Casts, 'javaemul.internal.Casts');

/* NATIVE.JS EPILOG */

const javaemul_internal_Casts = $Casts;

/**
 * // TODO(b/79389970): change castType to Function.
 * @param {*} instance
 * @param {Object} castType
 * @return {*}
 */
$Casts.$to = function(instance, castType) {
  return $Casts.$toInternal(
      instance, /** @type {function(*):boolean} */ (castType.$isInstance),
      /** @type {Constructor} */ (castType));
};


exports = $Casts;

//# sourceMappingURL=Casts.js.map
