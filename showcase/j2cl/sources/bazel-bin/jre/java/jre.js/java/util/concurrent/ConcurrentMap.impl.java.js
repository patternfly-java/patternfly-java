goog.module('java.util.concurrent.ConcurrentMap$impl');

const Map = goog.require('java.util.Map$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template K, V
 * @extends {Map<K, V>}
 */
class ConcurrentMap {
 /** @abstract @override @return {V} */
 putIfAbsent(/** K */ key, /** V */ value) {}
 /** @abstract @override @nodts @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object__boolean(/** * */ key, /** * */ value) {}
 /** @abstract @override @return {V} */
 replace(/** K */ key, /** V */ value) {}
 /** @abstract @override @nodts @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object__boolean(/** K */ key, /** V */ oldValue, /** V */ newValue) {}
 /** @nodts */
 static $clinit() {
  ConcurrentMap.$clinit = () =>{};
  ConcurrentMap.$loadModules();
  Map.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Map.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_concurrent_ConcurrentMap = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_concurrent_ConcurrentMap;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ConcurrentMap.$markImplementor(/**@type {Function}*/ (ConcurrentMap));
$Util.$setClassMetadataForInterface(ConcurrentMap, 'java.util.concurrent.ConcurrentMap');

exports = ConcurrentMap;

//# sourceMappingURL=ConcurrentMap.js.map
