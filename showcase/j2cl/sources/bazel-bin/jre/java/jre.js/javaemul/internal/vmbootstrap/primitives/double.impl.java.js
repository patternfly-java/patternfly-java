// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$double$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Double = goog.require('java.lang.Double$impl');


/**
 * Placeholder class definition for the primitive class double.
 *
 * Non-instantiable.
 */
class $double {
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
$double.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($double, java_lang_Double, 'double', 'D');


/**
 * Exported class.
 */
exports = $double;
