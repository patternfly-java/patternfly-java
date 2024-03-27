goog.module('org.patternfly.popper.Modifiers');

goog.require('elemental2.dom.CSSProperties.MinWidthUnionType.$Overlay');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.popper.Modifier.$Overlay');
goog.require('org.patternfly.popper.ModifierArguments.$Overlay');
goog.require('org.patternfly.popper.ModifierPhase');
goog.require('org.patternfly.popper.Placement');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.primitives.$int');

const Modifiers = goog.require('org.patternfly.popper.Modifiers$impl');
exports = Modifiers;
