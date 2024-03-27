goog.module('java.util.AbstractSet');

goog.require('java.util.AbstractCollection');
goog.require('java.util.Collection');
goog.require('java.util.Collections');
goog.require('java.util.Iterator');
goog.require('java.util.Set');
goog.require('java.util.Spliterator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AbstractSet = goog.require('java.util.AbstractSet$impl');
exports = AbstractSet;
