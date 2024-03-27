goog.module('com.google.gwt.core.client.UnsafeNativeLong$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UnsafeNativeLong {
 /** @nodts */
 static $clinit() {
  UnsafeNativeLong.$clinit = () =>{};
  UnsafeNativeLong.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__com_google_gwt_core_client_UnsafeNativeLong = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__com_google_gwt_core_client_UnsafeNativeLong;
 }
 
 /** @nodts */
 static $loadModules() {}
}
UnsafeNativeLong.$markImplementor(/**@type {Function}*/ (UnsafeNativeLong));
$Util.$setClassMetadataForInterface(UnsafeNativeLong, 'com.google.gwt.core.client.UnsafeNativeLong');

exports = UnsafeNativeLong;

//# sourceMappingURL=UnsafeNativeLong.js.map
