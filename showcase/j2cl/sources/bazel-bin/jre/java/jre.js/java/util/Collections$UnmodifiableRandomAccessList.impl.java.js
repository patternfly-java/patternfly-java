goog.module('java.util.Collections.UnmodifiableRandomAccessList$impl');

const UnmodifiableList = goog.require('java.util.Collections.UnmodifiableList$impl');
const RandomAccess = goog.require('java.util.RandomAccess$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @template T
 * @extends {UnmodifiableList<T>}
 * @implements {RandomAccess}
 */
class UnmodifiableRandomAccessList extends UnmodifiableList {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {!UnmodifiableRandomAccessList<T>} */
 static $create__java_util_List(/** List<?> */ list) {
  UnmodifiableRandomAccessList.$clinit();
  let $instance = new UnmodifiableRandomAccessList();
  $instance.$ctor__java_util_Collections_UnmodifiableRandomAccessList__java_util_List__void(list);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableRandomAccessList__java_util_List__void(/** List<?> */ list) {
  this.$ctor__java_util_Collections_UnmodifiableList__java_util_List__void(list);
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableRandomAccessList.$clinit = () =>{};
  UnmodifiableRandomAccessList.$loadModules();
  UnmodifiableList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableRandomAccessList;
 }
 
 /** @nodts */
 static $loadModules() {}
}
RandomAccess.$markImplementor(UnmodifiableRandomAccessList);
$Util.$setClassMetadata(UnmodifiableRandomAccessList, 'java.util.Collections$UnmodifiableRandomAccessList');

exports = UnmodifiableRandomAccessList;

//# sourceMappingURL=Collections$UnmodifiableRandomAccessList.js.map
