goog.module('org.patternfly.component.emptystate.EmptyState');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.emptystate.EmptyStateBody');
goog.require('org.patternfly.component.emptystate.EmptyStateFooter');
goog.require('org.patternfly.component.emptystate.EmptyStateHeader');
goog.require('org.patternfly.core.ElementDelegate');
goog.require('org.patternfly.core.Validation');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.FullHeight');
goog.require('org.patternfly.style.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const EmptyState = goog.require('org.patternfly.component.emptystate.EmptyState$impl');
exports = EmptyState;
