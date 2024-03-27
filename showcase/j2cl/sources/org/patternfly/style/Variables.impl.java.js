goog.module('org.patternfly.style.Variables$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Variables {
 /** @nodts */
 static $clinit() {
  Variables.$clinit = () =>{};
  Variables.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_style_Variables = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Variables;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Variables.f_Color__org_patternfly_style_Variables = 'Color';
/**@const {string} @nodts*/
Variables.f_FlexBasis__org_patternfly_style_Variables = 'FlexBasis';
/**@const {string} @nodts*/
Variables.f_GridTemplateColumns__org_patternfly_style_Variables = 'GridTemplateColumns';
/**@const {string} @nodts*/
Variables.f_Height__org_patternfly_style_Variables = 'Height';
/**@const {string} @nodts*/
Variables.f_Left__org_patternfly_style_Variables = 'Left';
/**@const {string} @nodts*/
Variables.f_LineClamp__org_patternfly_style_Variables = 'LineClamp';
/**@const {string} @nodts*/
Variables.f_MaxWidth__org_patternfly_style_Variables = 'MaxWidth';
/**@const {string} @nodts*/
Variables.f_MaxHeight__org_patternfly_style_Variables = 'MaxHeight';
/**@const {string} @nodts*/
Variables.f_Order__org_patternfly_style_Variables = 'Order';
/**@const {string} @nodts*/
Variables.f_Width__org_patternfly_style_Variables = 'Width';
Variables.$markImplementor(/**@type {Function}*/ (Variables));
$Util.$setClassMetadataForInterface(Variables, 'org.patternfly.style.Variables');

exports = Variables;

//# sourceMappingURL=Variables.js.map
