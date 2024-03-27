// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$boolean$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Boolean = goog.require('java.lang.Boolean$impl');


/**
 * Placeholder class definition for the primitive class boolean.
 *
 * Non-instantiable.
 */
class $boolean {
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
 * @public {boolean}
 */
$boolean.$initialArrayValue = false;


$Util.$setClassMetadataForPrimitive($boolean, java_lang_Boolean, 'boolean', 'Z');


/**
 * Exported class.
 */
exports = $boolean;
