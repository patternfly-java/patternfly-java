goog.module('org.patternfly.style.BreakpointCollector');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.EnumSet');
goog.require('java.util.Set');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BinaryOperator');
goog.require('java.util.function.Function');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collector.Characteristics');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Casts');

const BreakpointCollector = goog.require('org.patternfly.style.BreakpointCollector$impl');
exports = BreakpointCollector;
