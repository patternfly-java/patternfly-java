goog.module('java.util.Collections.UnmodifiableSet');

goog.require('java.util.Collections.UnmodifiableCollection');
goog.require('java.util.Set');
goog.require('java.util.Spliterator');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const UnmodifiableSet = goog.require('java.util.Collections.UnmodifiableSet$impl');
exports = UnmodifiableSet;
