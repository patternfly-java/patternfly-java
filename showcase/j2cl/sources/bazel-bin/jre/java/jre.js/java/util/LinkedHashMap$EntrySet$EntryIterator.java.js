goog.module('java.util.LinkedHashMap.EntrySet.EntryIterator');

goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.LinkedHashMap.ChainEntry');
goog.require('java.util.LinkedHashMap.EntrySet');
goog.require('java.util.Map.Entry');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const EntryIterator = goog.require('java.util.LinkedHashMap.EntrySet.EntryIterator$impl');
exports = EntryIterator;
