goog.module('org.patternfly.style.Breakpoints');

goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.ArrayList');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collector');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.core.Tuples');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.BreakpointCollector');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.TypedModifier');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Breakpoints = goog.require('org.patternfly.style.Breakpoints$impl');
exports = Breakpoints;
