goog.module('javaemul.internal.JsUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 */
class JsUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 // /** @return {boolean} */
 // native static isUndefined(/** * */ value) 
 // /** @template T @return {T} */
 // native static uncheckedCast(/** * */ o) 
 // /** @template T @return {T} */
 // native static getProperty(/** * */ map, /** ?string */ key) 
 /** @nodts @return {!JsUtils} */
 static $create__() {
  let $instance = new JsUtils();
  $instance.$ctor__javaemul_internal_JsUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_JsUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  JsUtils.$clinit = () =>{};
  JsUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsUtils;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(JsUtils, 'javaemul.internal.JsUtils');

/* NATIVE.JS EPILOG */

const javaemul_internal_JsUtils = JsUtils;

/**
 * @param {*} value
 * @return {boolean}
 */
javaemul_internal_JsUtils.isUndefined = function(value) {
  return value === undefined;
};

/**
 * @param {*} value
 * @return {*}
 */
javaemul_internal_JsUtils.uncheckedCast = function(value) {
  return value;
};

/**
 * @param {*} map
 * @param {string} key
 * @return {*}
 */
javaemul_internal_JsUtils.getProperty = function(map, key) {
  return map[key];
};


exports = JsUtils;

//# sourceMappingURL=JsUtils.js.map
