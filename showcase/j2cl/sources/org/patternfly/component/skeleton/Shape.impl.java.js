goog.module('org.patternfly.component.skeleton.Shape$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Shape>}
 */
class Shape extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_skeleton_Shape;
 }
 /** @nodts @return {!Shape} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name) {
  let $instance = new Shape();
  $instance.$ctor__org_patternfly_component_skeleton_Shape__java_lang_String__int__java_lang_String__void($name, $ordinal, name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_skeleton_Shape__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ name) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_component_skeleton_Shape = Classes.m_modifier__java_lang_String__java_lang_String(name);
 }
 /** @nodts @return {!Shape} */
 static m_valueOf__java_lang_String__org_patternfly_component_skeleton_Shape(/** string */ name) {
  Shape.$clinit();
  if ($Equality.$same(Shape.f_namesToValuesMap__org_patternfly_component_skeleton_Shape_, null)) {
   Shape.f_namesToValuesMap__org_patternfly_component_skeleton_Shape_ = /**@type {Map<?string, !Shape>}*/ ($Enums.createMapFromValues(Shape.m_values__arrayOf_org_patternfly_component_skeleton_Shape()));
  }
  return /**@type {Shape}*/ ($Enums.getValueFromNameAndMap(name, Shape.f_namesToValuesMap__org_patternfly_component_skeleton_Shape_));
 }
 /** @nodts @return {!Array<!Shape>} */
 static m_values__arrayOf_org_patternfly_component_skeleton_Shape() {
  Shape.$clinit();
  return /**@type {!Array<Shape>}*/ ($Arrays.$init([Shape.$static_circle__org_patternfly_component_skeleton_Shape, Shape.$static_square__org_patternfly_component_skeleton_Shape], Shape));
 }
 /** @nodts @return {!Shape} */
 static get f_circle__org_patternfly_component_skeleton_Shape() {
  return (Shape.$clinit(), Shape.$static_circle__org_patternfly_component_skeleton_Shape);
 }
 /** @nodts @return {!Shape} */
 static get f_square__org_patternfly_component_skeleton_Shape() {
  return (Shape.$clinit(), Shape.$static_square__org_patternfly_component_skeleton_Shape);
 }
 /** @nodts */
 static $clinit() {
  Shape.$clinit = () =>{};
  Shape.$loadModules();
  Enum.$clinit();
  Shape.$static_circle__org_patternfly_component_skeleton_Shape = Shape.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('circle'), Shape.$ordinal_circle__org_patternfly_component_skeleton_Shape, 'circle');
  Shape.$static_square__org_patternfly_component_skeleton_Shape = Shape.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('square'), Shape.$ordinal_square__org_patternfly_component_skeleton_Shape, 'square');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Shape;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Shape.$ordinal_circle__org_patternfly_component_skeleton_Shape = 0;
/**@const {number} @nodts*/
Shape.$ordinal_square__org_patternfly_component_skeleton_Shape = 1;
/**@private {!Shape} @nodts*/
Shape.$static_circle__org_patternfly_component_skeleton_Shape;
/**@private {!Shape} @nodts*/
Shape.$static_square__org_patternfly_component_skeleton_Shape;
/**@type {Map<?string, !Shape>} @nodts*/
Shape.f_namesToValuesMap__org_patternfly_component_skeleton_Shape_;
$Util.$setClassMetadataForEnum(Shape, 'org.patternfly.component.skeleton.Shape');

exports = Shape;

//# sourceMappingURL=Shape.js.map
