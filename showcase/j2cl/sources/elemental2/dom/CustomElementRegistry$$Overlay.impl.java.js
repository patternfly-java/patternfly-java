goog.module('elemental2.dom.CustomElementRegistry.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class__elemental2_dom_CustomElementRegistry_DefineOptionsType__void(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass, /** ? */ options) {
  $Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(klass)), options);
 }
 /** @final @nodts */
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class__void(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass) {
  $Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(klass)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomElementRegistry;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'CustomElementRegistry');

exports = $Overlay;

//# sourceMappingURL=CustomElementRegistry$$Overlay.js.map
