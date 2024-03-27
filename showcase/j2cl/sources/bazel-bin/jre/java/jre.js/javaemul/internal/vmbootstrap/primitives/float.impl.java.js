// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$float$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Float = goog.require('java.lang.Float$impl');


/**
 * Placeholder class definition for the primitive class float.
 *
 * Non-instantiable.
 */
class $float {
  /**
   * Defines instance fields.
   */
  constructor() {}

  /**
   * Returns whether the provided instance is an instance of this class.
   * Note that this always return true, because it is only used for ArrayStoreException
   * purposes which never happens for primitive arrays as they are compile time checked.
   *
   * @param {*} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) { return true; }
};


/**
 * @nocollapse
 * @public {number}
 */
$float.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($float, java_lang_Float, 'float', 'F');


/**
 * Exported class.
 */
exports = $float;
