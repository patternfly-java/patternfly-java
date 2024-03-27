goog.module('java.io.Writer');

goog.require('java.io.Closeable');
goog.require('java.io.Flushable');
goog.require('java.lang.Appendable');
goog.require('java.lang.CharSequence');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.CharSequences');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$char');

const Writer = goog.require('java.io.Writer$impl');
exports = Writer;
