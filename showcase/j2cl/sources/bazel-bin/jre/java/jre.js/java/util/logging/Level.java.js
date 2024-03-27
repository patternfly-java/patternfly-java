goog.module('java.util.logging.Level');

goog.require('java.io.Serializable');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Locale');
goog.require('java.util.logging.Level.LevelAll');
goog.require('java.util.logging.Level.LevelConfig');
goog.require('java.util.logging.Level.LevelFine');
goog.require('java.util.logging.Level.LevelFiner');
goog.require('java.util.logging.Level.LevelFinest');
goog.require('java.util.logging.Level.LevelInfo');
goog.require('java.util.logging.Level.LevelOff');
goog.require('java.util.logging.Level.LevelSevere');
goog.require('java.util.logging.Level.LevelWarning');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const Level = goog.require('java.util.logging.Level$impl');
exports = Level;
