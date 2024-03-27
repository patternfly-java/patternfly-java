// GENERATED CODE! Edit jre/java/javaemul/internal/vmbootstrap/primitives/primitive.impl.java.js.template instead!
goog.module('vmbootstrap.primitives.$short$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Short = goog.require('java.lang.Short$impl');


/**
 * Placeholder class definition for the primitive class short.
 *
 * Non-instantiable.
 */
class $short {
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
$short.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($short, java_lang_Short, 'short', 'S');


/**
 * Exported class.
 */
exports = $short;
