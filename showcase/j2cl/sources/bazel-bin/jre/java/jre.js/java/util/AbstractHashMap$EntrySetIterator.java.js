goog.module('java.util.AbstractHashMap.EntrySetIterator');

goog.require('java.lang.Object');
goog.require('java.util.AbstractHashMap');
goog.require('java.util.Iterator');
goog.require('java.util.Map.Entry');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const EntrySetIterator = goog.require('java.util.AbstractHashMap.EntrySetIterator$impl');
exports = EntrySetIterator;
