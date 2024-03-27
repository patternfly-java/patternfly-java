goog.module('org.patternfly.showcase.Ids$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Ids extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Ids} */
 static $create__() {
  Ids.$clinit();
  let $instance = new Ids();
  $instance.$ctor__org_patternfly_showcase_Ids__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Ids__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Ids.$clinit = () =>{};
  Ids.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Ids;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Ids.f_MAIN_ID__org_patternfly_showcase_Ids = 'pfj-main-id';
$Util.$setClassMetadata(Ids, 'org.patternfly.showcase.Ids');

exports = Ids;

//# sourceMappingURL=Ids.js.map
