goog.module('java.util.Collections.RandomHolder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Random = goog.forwardDeclare('java.util.Random$impl');

class RandomHolder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!RandomHolder} */
 static $create__() {
  let $instance = new RandomHolder();
  $instance.$ctor__java_util_Collections_RandomHolder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_RandomHolder__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Random} */
 static get f_rnd__java_util_Collections_RandomHolder_() {
  return (RandomHolder.$clinit(), RandomHolder.$static_rnd__java_util_Collections_RandomHolder_);
 }
 /** @nodts */
 static $clinit() {
  RandomHolder.$clinit = () =>{};
  RandomHolder.$loadModules();
  j_l_Object.$clinit();
  RandomHolder.$static_rnd__java_util_Collections_RandomHolder_ = Random.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RandomHolder;
 }
 
 /** @nodts */
 static $loadModules() {
  Random = goog.module.get('java.util.Random$impl');
 }
}
/**@private {Random} @nodts*/
RandomHolder.$static_rnd__java_util_Collections_RandomHolder_;
$Util.$setClassMetadata(RandomHolder, 'java.util.Collections$RandomHolder');

exports = RandomHolder;

//# sourceMappingURL=Collections$RandomHolder.js.map
