goog.module('jsinterop.base.JsConstructorFn.$Overlay$impl');

let Class = goog.forwardDeclare('java.lang.Class');
let j_l_Class = goog.forwardDeclare('java.lang.Class$impl');
let InternalPreconditions = goog.forwardDeclare('jsinterop.base.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T @return {T} */
 static m_construct__$devirt__jsinterop_base_JsConstructorFn__arrayOf_java_lang_Object__java_lang_Object(/** function(...*):void */ $thisArg, /** Array<*> */ args) {
  $Overlay.$clinit();
  return Reflect.construct($thisArg, args);
 }
 /** @nodts @template T @return {j_l_Class<T>} */
 static m_asClass__$devirt__jsinterop_base_JsConstructorFn__java_lang_Class(/** function(...*):void */ $thisArg) {
  $Overlay.$clinit();
  let clazz = /**@type {j_l_Class<T>}*/ (Class.$get($thisArg));
  InternalPreconditions.m_checkType__boolean__void(!$Equality.$same(clazz, null));
  return clazz;
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class');
  InternalPreconditions = goog.module.get('jsinterop.base.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsConstructorFn$$Overlay.js.map
