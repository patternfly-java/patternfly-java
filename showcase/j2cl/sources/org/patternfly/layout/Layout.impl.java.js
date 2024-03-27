goog.module('org.patternfly.layout.Layout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Layout {
 /** @nodts */
 static $clinit() {
  Layout.$clinit = () =>{};
  Layout.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_layout_Layout = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_layout_Layout;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Layout.$markImplementor(/**@type {Function}*/ (Layout));
$Util.$setClassMetadataForInterface(Layout, 'org.patternfly.layout.Layout');

exports = Layout;

//# sourceMappingURL=Layout.js.map
