goog.module('java.lang.Appendable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');

/**
 * @interface
 */
class Appendable {
 /** @abstract @nodts @return {Appendable} */
 m_append__char__java_lang_Appendable(/** number */ c) {}
 /** @abstract @nodts @return {Appendable} */
 m_append__java_lang_CharSequence__java_lang_Appendable(/** (CharSequence|string) */ charSquence) {}
 /** @abstract @nodts @return {Appendable} */
 m_append__java_lang_CharSequence__int__int__java_lang_Appendable(/** (CharSequence|string) */ charSquence, /** number */ start, /** number */ end) {}
 /** @nodts */
 static $clinit() {
  Appendable.$clinit = () =>{};
  Appendable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_Appendable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_Appendable;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Appendable.$markImplementor(/**@type {Function}*/ (Appendable));
$Util.$setClassMetadataForInterface(Appendable, 'java.lang.Appendable');

exports = Appendable;

//# sourceMappingURL=Appendable.js.map
