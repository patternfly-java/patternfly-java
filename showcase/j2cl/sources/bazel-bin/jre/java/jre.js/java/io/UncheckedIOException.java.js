goog.module('java.io.UncheckedIOException');

goog.require('java.io.IOException');
goog.require('java.lang.RuntimeException');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const UncheckedIOException = goog.require('java.io.UncheckedIOException$impl');
exports = UncheckedIOException;
