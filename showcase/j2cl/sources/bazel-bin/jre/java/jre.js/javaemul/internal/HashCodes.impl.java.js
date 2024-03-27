goog.module('javaemul.internal.HashCodes$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class HashCodes extends j_l_Object {
 
 constructor() {
  HashCodes.$clinit();
  super();
  this.$ctor__javaemul_internal_HashCodes__void();
 }
 /** @nodts */
 $ctor__javaemul_internal_HashCodes__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @return {number} */
 static getIdentityHashCode(/** * */ o) {
  HashCodes.$clinit();
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(typeof(o))) {
   case 'string': 
    return j_l_String.m_hashCode__java_lang_String__int(/**@type {?string}*/ (JsUtils.uncheckedCast(o)));
   case 'number': 
    return Double.m_hashCode__java_lang_Double__int(/**@type {?number}*/ (JsUtils.uncheckedCast(o)));
   case 'boolean': 
    return Boolean.m_hashCode__java_lang_Boolean__int(/**@type {?boolean}*/ (JsUtils.uncheckedCast(o)));
   default: 
    return $Equality.$same(o, null) ? 0 : HashCodes.getObjectIdentityHashCode(o);
  }
 }
 // /** @return {number} */
 // native static getObjectIdentityHashCode(/** * */ o) 
 /** @return {number} */
 static getNextHash() {
  HashCodes.$clinit();
  return HashCodes.f_nextHash__javaemul_internal_HashCodes_ = HashCodes.f_nextHash__javaemul_internal_HashCodes_ + 1 | 0;
 }
 /** @nodts */
 static $clinit() {
  HashCodes.$clinit = () =>{};
  HashCodes.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HashCodes;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {number} @nodts*/
HashCodes.f_nextHash__javaemul_internal_HashCodes_ = 0;
$Util.$setClassMetadata(HashCodes, 'javaemul.internal.HashCodes');

/* NATIVE.JS EPILOG */

const javaemul_internal_HashCodes = HashCodes;

/**
 * @param {*} obj
 * @return {number}
 * @public
 */
HashCodes.getObjectIdentityHashCode = function(obj) {
  const o = /** @type {!Object} */ (obj);
  return o.$systemHashCode ||
      (Object.defineProperties(o, {
           $systemHashCode: {value: HashCodes.getNextHash(), enumerable: false}
         }),
       o.$systemHashCode);
};


exports = HashCodes;

//# sourceMappingURL=HashCodes.js.map
