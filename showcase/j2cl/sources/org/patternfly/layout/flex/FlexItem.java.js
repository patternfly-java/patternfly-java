goog.module('org.patternfly.layout.flex.FlexItem');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.EnumSet');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.layout.BaseLayout');
goog.require('org.patternfly.layout.flex.Align');
goog.require('org.patternfly.layout.flex.AlignSelf');
goog.require('org.patternfly.layout.flex.FlexShorthand');
goog.require('org.patternfly.layout.flex.Spacer');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.BreakpointCollector');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const FlexItem = goog.require('org.patternfly.layout.flex.FlexItem$impl');
exports = FlexItem;
