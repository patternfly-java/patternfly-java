goog.module('org.patternfly.core.Tuples');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.core.Tuple');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Tuples = goog.require('org.patternfly.core.Tuples$impl');
exports = Tuples;
