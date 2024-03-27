goog.module('java.lang.Void$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $$void = goog.forwardDeclare('vmbootstrap.primitives.$void$impl');

/**
 * @abstract
 * @final
 */
class Void extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {void} */
 static $create__() {
  let /** ?void */ $thisArg;
  return $thisArg;
 }
 /** @nodts @return {Class<?void>} */
 static get f_TYPE__java_lang_Void() {
  return (Void.$clinit(), Void.$static_TYPE__java_lang_Void);
 }
 /** @nodts */
 static $clinit() {
  Void.$clinit = () =>{};
  Void.$loadModules();
  j_l_Object.$clinit();
  Void.$static_TYPE__java_lang_Void = Class.$get($$void);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Void;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  $$void = goog.module.get('vmbootstrap.primitives.$void$impl');
 }
}
/**@private {Class<?void>} @nodts*/
Void.$static_TYPE__java_lang_Void;
$Util.$setClassMetadata(Void, 'java.lang.Void');

exports = Void;

//# sourceMappingURL=Void.js.map
