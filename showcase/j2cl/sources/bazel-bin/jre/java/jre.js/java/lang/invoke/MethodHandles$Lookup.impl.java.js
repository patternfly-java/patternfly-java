goog.module('java.lang.invoke.MethodHandles.Lookup$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Lookup extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Lookup} */
 static $create__() {
  Lookup.$clinit();
  let $instance = new Lookup();
  $instance.$ctor__java_lang_invoke_MethodHandles_Lookup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_MethodHandles_Lookup__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Lookup.$clinit = () =>{};
  Lookup.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Lookup;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Lookup, 'java.lang.invoke.MethodHandles$Lookup');

exports = Lookup;

//# sourceMappingURL=MethodHandles$Lookup.js.map
